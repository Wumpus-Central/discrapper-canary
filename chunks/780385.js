n.d(l, { A: () => i2 });
var t = n(627968),
    i = n(64700),
    r = n(503698),
    a = n.n(r),
    s = n(17928),
    o = n(778712),
    d = n(866323),
    u = n(364522),
    c = n(695366),
    g = n(935462),
    f = n(140735),
    m = n(707554),
    p = n(738188),
    x = n(661531),
    v = n(231723),
    h = n(241524),
    A = n(770178),
    b = n(80682),
    j = n(793574),
    I = n(688810),
    C = n(480335),
    y = n(577390),
    N = n(474257),
    E = n(31956),
    P = n(744808),
    k = n(875741),
    S = n(915089),
    R = n(713517),
    T = n(645507),
    D = n(922590),
    O = n(821269),
    M = n(93246),
    w = n(561794),
    L = n(71393),
    _ = n(994500),
    G = n(351906),
    V = n(562153),
    U = n(474090),
    F = n(183555),
    B = n(47675),
    z = n(841595),
    H = n(591179),
    W = n(999291),
    K = n(702841),
    X = n(370480),
    q = n(773669),
    Y = n(652215),
    Z = n(101928),
    $ = n(837529),
    J = n(346713),
    Q = n(573648),
    ee = n(941314),
    el = n(429913),
    en = n(321078),
    et = n(403362),
    ei = n(484509),
    er = n(579950),
    ea = n(83931),
    es = n(920601),
    eo = n(903209),
    ed = n(919395),
    eu = n(101058),
    ec = n(696451),
    eg = n(287809),
    ef = n(836602),
    em = n(996988),
    ep = n(985253);
let ex = (0, o.FT)(ep.T[em.d.MODAL_V2].avatarSize),
    ev = {
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
var eA = n(716804),
    eb = n(679492),
    ej = n(718019),
    eI = n(413492),
    eC = n(915614),
    ey = n(744753),
    eN = n(834730);
function eE(e) {
    let { friendsSinceDate: l } = e;
    return (0, t.jsx)(eN.E, { variant: "text-sm/normal", children: l });
}
var eP = n(361311),
    ek = n(931481),
    eS = n(439053),
    eR = n(743987),
    eT = n(312381),
    eD = n(501193),
    eO = n(383448),
    eM = n(946356),
    ew = n(983495),
    eL = n(280645),
    e_ = n(109112),
    eG = n(939249),
    eV = n(730134),
    eU = n(169869),
    eF = n(837057),
    eB = n(310419),
    ez = n(889227),
    eH = n(967198),
    eW = n(488995),
    eK = n(375708),
    eX = n(985176);
function eq(e) {
    let { applicationRoleConnection: l, locale: n, onApplicationClicked: i, selectedGuildId: r } = e,
        a = (0, eU.VW)(l, n);
    return (0, t.jsxs)(t.Fragment, {
        children: [
            (0, t.jsx)("div", {
                className: eX.k_,
                children:
                    null != l.application.bot
                        ? (0, t.jsx)(eV.A, { user: new ez.A(l.application.bot), size: o._3.SIZE_16 })
                        : (0, t.jsx)(e_._, { color: "currentColor", size: "sm" }),
            }),
            (0, t.jsxs)("div", {
                className: eX.Hd,
                children: [
                    (0, t.jsxs)(eG.D, {
                        className: eX.OB,
                        onClick: function () {
                            i?.(),
                                (0, eF.transitionToGlobalDiscovery)({
                                    tab: eW.GlobalDiscoveryTab.APPS,
                                    applicationId: l.application.id,
                                    newSessionState: {
                                        entrypoint: { name: eB.sW.APPLICATION_DIRECTORY_URL },
                                        guildId: r,
                                    },
                                });
                        },
                        children: [
                            null != l.platform_name
                                ? (0, t.jsx)(eN.E, {
                                      variant: "text-sm/normal",
                                      color: "text-default",
                                      children: l.platform_name,
                                  })
                                : null,
                            null != l.platform_username
                                ? (0, t.jsx)(eN.E, {
                                      variant: "text-sm/normal",
                                      color: "text-default",
                                      children: l.platform_username,
                                  })
                                : null,
                            (0, t.jsx)(eN.E, {
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
function eY(e) {
    let { applicationRoleConnections: l, className: n, onClose: i } = e,
        { trackUserProfileAction: r } = (0, F.NJ)(),
        o = (0, s.bG)([q.default], () => q.default.locale),
        d = (0, s.bG)([eH.A], () => eH.A.getGuildId());
    return 0 === l.length
        ? null
        : (0, t.jsx)("ul", {
              className: a()(eX.kL, n),
              children: l.map((e, l) =>
                  (0, t.jsx)(
                      "li",
                      {
                          className: eX.FI,
                          children: (0, t.jsx)(eq, {
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
var eZ = n(240248),
    e$ = n(308244),
    eJ = n(81400),
    eQ = n(428262),
    e0 = n(84540),
    e1 = n(621466);
n(321073);
var e7 = n(219869),
    e2 = n(990078),
    e3 = n(775602),
    e5 = n(916315);
function e8(e) {
    let { value: l, onCommit: n, disabled: t = !1 } = e,
        [r, a] = i.useState("idle"),
        [o, d] = i.useState(l),
        u = "editing" === r && !t,
        c = (0, s.bG)([e3.Ay], () => e3.Ay.useReducedMotion),
        g = i.useRef(null),
        f = i.useRef(null),
        m = i.useRef(null),
        p = i.useRef(!1),
        x = i.useRef(!0),
        v = i.useCallback(() => {
            (x.current = !1), d(l), a("editing");
        }, [l]),
        h = i.useRef(o);
    i.useLayoutEffect(() => {
        h.current = o;
    });
    let A = i.useCallback(() => {
            x.current || ((x.current = !0), n(h.current), a("done"));
        }, [n]),
        b = i.useCallback(() => {
            x.current || ((x.current = !0), a("done"));
        }, []);
    i.useEffect(() => {
        "done" === r && (p.current && g.current?.focus({ preventScroll: !0 }), (p.current = !1));
    }, [r]),
        i.useEffect(() => {
            u &&
                (f.current?.scrollIntoView({ block: "nearest", behavior: c ? "auto" : "smooth" }),
                m.current?.focus({ preventScroll: !0 }));
        }, [u, c]);
    let j = i.useCallback(
            (e) => {
                !u || (null != f.current && (0, e1.vq)(e.relatedTarget) && f.current.contains(e.relatedTarget)) || A();
            },
            [u, A],
        ),
        I = i.useCallback(
            (e) => {
                u && "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), (p.current = !0), b());
            },
            [u, b],
        ),
        C = i.useCallback(() => {
            (p.current = !0), A();
        }, [A]),
        y = i.useCallback(() => {
            (p.current = !0), b();
        }, [b]),
        N = i.useCallback(
            (e) => {
                "Enter" !== e.key || e.shiftKey
                    ? "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), y())
                    : (e.preventDefault(), C());
            },
            [C, y],
        );
    return {
        isEditing: u,
        committedValue: l,
        editedValue: o,
        setEditedValue: d,
        editButtonRef: g,
        wrapperRef: f,
        inputRef: m,
        handleStartEditing: v,
        handleCommit: A,
        handleCancel: b,
        handleInputCommit: C,
        handleInputCancel: y,
        onInputKeyDown: N,
        onBlur: j,
        onContainerKeyDown: I,
    };
}
function e9(e) {
    let { tooltip: l, ...n } = e,
        i = (0, t.jsx)("div", {
            className: e5.L7,
            children: (0, t.jsx)(e7.T, { ...n, size: "sm", variant: "input-accessory" }),
        });
    return null == l ? i : (0, t.jsx)(e2.m, { text: l, ariaHidden: !0, children: i });
}
function e6(e) {
    let { id: l, message: n, type: i } = e,
        r = "error" === i,
        a = r ? c.E : p.i;
    return (0, t.jsxs)(eN.E, {
        id: l,
        variant: "text-xs/normal",
        color: r ? "text-feedback-critical" : "text-feedback-warning",
        className: e5.VP,
        children: [(0, t.jsx)(a, { size: "xs", color: "currentColor", className: r ? e5.ik : e5.QW }), n],
    });
}
function e4(e) {
    let {
            isEditing: l,
            preview: n,
            placeholder: r,
            input: s,
            editButtonRef: o,
            editButtonAriaLabel: d,
            onStartEditing: u,
            variant: c = "default",
            trailing: g,
            previewErrorMessage: f,
            previewWarningMessage: m,
            className: p,
            wrapperRef: x,
            onBlur: v,
            onKeyDown: h,
            disabled: A = !1,
        } = e,
        b = i.useRef(null),
        j = i.useId(),
        I = i.useId(),
        C = null == n,
        y = null != f,
        N = null != m && !y,
        E = y ? "error" : N ? "warning" : null,
        P = y ? f : m,
        k = null != E && null != P,
        S = [];
    C && S.push(j), k && "compact" !== c && S.push(I);
    let R = S.length > 0 ? S.join(" ") : void 0,
        T = (0, t.jsxs)("div", {
            ref: b,
            className: a()(e5.LL, { [e5.JD]: y, [e5.xe]: N, [e5.r9]: A }),
            onClick: A ? void 0 : u,
            children: [
                C
                    ? (0, t.jsx)(eN.E, {
                          id: j,
                          variant: "text-sm/normal",
                          color: "text-muted",
                          className: e5.qf,
                          children: r,
                      })
                    : n,
                !A &&
                    (0, t.jsx)(eG.D, {
                        innerRef: o,
                        "aria-label": d,
                        "aria-describedby": R,
                        "aria-expanded": !1,
                        onClick: (e) => {
                            e.stopPropagation(), u();
                        },
                        focusProps: { ringTarget: b },
                    }),
                null != g && (0, t.jsx)("div", { className: e5.lD, children: (0, t.jsx)(e9, { ...g }) }),
            ],
        });
    return (0, t.jsx)("div", {
        ref: x,
        className: a()(e5.kL, { [e5.oE]: "compact" === c, [e5.c1]: "multiline" === c }, p),
        onBlur: v,
        onKeyDown: h,
        children: (0, t.jsx)(
            "div",
            {
                className: e5.qG,
                children: l
                    ? s
                    : (0, t.jsxs)(t.Fragment, {
                          children: [
                              (0, t.jsx)("div", { className: e5.VH, children: T }),
                              k && "compact" !== c && (0, t.jsx)(e6, { id: I, message: P, type: E }),
                          ],
                      }),
            },
            l ? "editing" : "preview",
        ),
    });
}
var le = n(786826);
function ll(e) {
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
            preview: f,
            placeholder: m,
            editButtonAriaLabel: p,
            label: x,
            maxLength: v,
            rows: h,
            emojiPickerIntention: A,
            error: b,
            warning: j,
            className: I,
        } = e,
        C =
            (null != v && (l ? i : n).length > v
                ? eK.intl.formatToPlainString(eK.t.ICT5S6, { maxLength: v })
                : void 0) ?? b;
    return (0, t.jsx)(e4, {
        isEditing: l,
        preview: f,
        placeholder: m,
        editButtonRef: a,
        editButtonAriaLabel: p,
        onStartEditing: s,
        variant: "multiline",
        className: I,
        wrapperRef: o,
        onBlur: d,
        onKeyDown: u,
        previewErrorMessage: C,
        previewWarningMessage: j,
        input: (0, t.jsx)(le.f, {
            editorRef: c,
            label: x,
            hideLabel: !0,
            value: i,
            onChange: r,
            onKeyDown: g,
            maxLength: v,
            error: C,
            helperText: j,
            placeholder: m,
            rows: h,
            emojiPickerIntention: A,
        }),
    });
}
let ln = [
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
var lt = n(307731);
function li(e) {
    let l,
        n,
        r,
        a,
        o,
        { displayProfile: d } = e,
        u = (0, s.bG)([eg.default], () => eg.default.getCurrentUser()),
        c = d?.guildId != null,
        g = d?.guildId ?? null,
        f = eQ.Ay.canUsePremiumProfileCustomization(u),
        {
            value: m,
            previewValue: p,
            onCommit: x,
        } = ((l = d?.guildId ?? null),
        (n = d?.guildId != null),
        (r = (0, s.bG)([ef.A], () => ef.A.getPendingChanges(l).pendingBio)),
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
        v = (function (e) {
            let { isEditing: l, wrapperRef: n, handleCommit: t, ...r } = e8(e),
                a = i.useCallback(
                    (e) =>
                        (function (e, l) {
                            if (l?.contains(e)) return !0;
                            let n = l?.querySelector('[aria-expanded="true"][aria-controls]'),
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
                    let n = e.relatedTarget;
                    !(0, e1.vq)(n) || a(n) || t();
                },
                [l, a, t],
            );
            return { isEditing: l, wrapperRef: n, handleCommit: t, ...r, onBlur: s };
        })({ value: m, onCommit: x }),
        h = !(0, eZ.uJ)(p),
        A = (0, s.bG)([ef.A], () => ef.A.getErrors(g)),
        b = (0, eJ.EC)(g),
        j = A.bio?.[0],
        I = b?.bio?.[0],
        C = i.useMemo(() => {
            let e;
            return (e = Math.floor(Math.random() * ln.length)), ln[e];
        }, []),
        y = c ? eK.intl.string(eK.t.yPJ9xr) : C.label();
    return !c || f
        ? (0, t.jsx)(ll, {
              ...v,
              preview: h ? (0, t.jsx)(e$.A, { userBio: p, setLineClamp: !1 }) : null,
              placeholder: y,
              editButtonAriaLabel: eK.intl.string(eK.t.lO3n7a),
              label: eK.intl.string(eK.t["YWo+Zd"]),
              emojiPickerIntention: lt.EmojiIntention.PROFILE,
              maxLength: Y.NA2,
              error: j,
              warning: I,
          })
        : h
          ? (0, t.jsx)(e$.A, { userBio: p, setLineClamp: !1, textColor: "text-muted" })
          : null;
}
function lr(e) {
    let { displayProfile: l, isEditable: n } = e,
        r = i.useId(),
        a = l?.bio,
        s = !(0, eZ.uJ)(a);
    return n || s
        ? (0, t.jsxs)("section", {
              "aria-labelledby": r,
              children: [
                  (0, t.jsx)(f.A, { children: (0, t.jsx)(m.H, { id: r, children: eK.intl.string(eK.t.ZzAR2Y) }) }),
                  n ? (0, t.jsx)(li, { displayProfile: l }) : (0, t.jsx)(e$.A, { userBio: a, setLineClamp: !1 }),
              ],
          })
        : null;
}
var la = n(982168),
    ls = n(722868),
    lo = n(822775),
    ld = n(982985),
    lu = n(700174),
    lc = n(34188),
    lg = n(662388),
    lf = n(23722),
    lm = n(993401);
function lp(e) {
    let { onClose: l, ...n } = e,
        { analyticsLocations: i, newestAnalyticsLocation: r } = (0, I.Ay)(),
        a = (0, lf.A)(() => {
            (0, lg.Cz)({ analyticsLocations: i, analyticsSource: r }), l?.();
        });
    return (0, t.jsx)(lm.q3, {
        action: "VISIT_SHOP",
        icon: lc.U,
        tooltipText: eK.intl.string(eK.t.b2d0N0),
        onClick: a,
        ...n,
    });
}
var lx = n(573355),
    lv = n(102951);
function lh(e) {
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
        u = (0, H.X)("UserProfileModalV2Buttons"),
        { newestAnalyticsLocation: c } = (0, I.Ay)(),
        g = (0, ls.A)({ user: l, guildId: r, channelId: a, displayProfile: s, onClose: d }),
        {
            gameFriends: f,
            hasOutgoingPendingGameFriends: m,
            hasIncomingPendingGameFriends: p,
        } = (0, lv.J)({ userId: l.id }),
        x = f.length > 0 || m || p;
    return o === Y.eA$.BLOCKED
        ? null
        : l.id === n.id
          ? u
              ? (0, t.jsxs)(t.Fragment, {
                    children: [
                        (0, t.jsx)(ld.e, { userId: l.id, variant: "primary", disabled: !0 }),
                        (0, t.jsx)(lp, { onClose: d }),
                        (0, t.jsx)(lu.Zt, { user: l, guildId: i, viewProfileItem: g }),
                    ],
                })
              : (0, t.jsxs)(t.Fragment, {
                    children: [
                        (0, t.jsx)(lo.A, { user: l, guildId: i, onClose: d }),
                        (0, t.jsx)(lp, { onClose: d }),
                        (0, t.jsx)(lu.Zt, { user: l, guildId: i, viewProfileItem: g }),
                    ],
                })
          : l.bot
            ? (0, t.jsxs)(t.Fragment, {
                  children: [
                      (0, t.jsx)(ld.e, { userId: l.id, onClose: la.A.popAll, autoFocus: !0 }),
                      (0, t.jsx)(lu.Zt, { user: l, guildId: i, viewProfileItem: g }),
                  ],
              })
            : o === Y.eA$.PENDING_INCOMING
              ? (0, t.jsxs)(t.Fragment, {
                    children: [
                        (0, t.jsx)(ld.e, { userId: l.id, onClose: la.A.popAll, autoFocus: !0 }),
                        (0, t.jsx)(lu.Zt, { user: l, guildId: i }),
                    ],
                })
              : o === Y.eA$.FRIEND || o === Y.eA$.PENDING_OUTGOING
                ? (0, t.jsxs)(t.Fragment, {
                      children: [
                          (0, t.jsx)(ld.e, { userId: l.id, onClose: la.A.popAll, autoFocus: !0 }),
                          (0, t.jsx)(lx.Ef, { user: l, relationshipType: o, analyticsLocation: c }),
                          (0, t.jsx)(lu.Zt, { user: l, guildId: i, viewProfileItem: g }),
                      ],
                  })
                : o === Y.eA$.NONE && x
                  ? (0, t.jsxs)(t.Fragment, {
                        children: [
                            (0, t.jsx)(ld.e, { userId: l.id, onClose: la.A.popAll, autoFocus: !0 }),
                            (0, t.jsx)(lx.ES, {
                                user: l,
                                analyticsLocation: c,
                                gameFriends: f,
                                tooltipPosition: "top",
                                tooltipAlign: "center",
                                hasIncomingPendingGameFriends: p,
                                hasOutgoingPendingGameFriends: m,
                            }),
                            (0, t.jsx)(lu.Zt, { user: l, guildId: i, viewProfileItem: g }),
                        ],
                    })
                  : (0, t.jsxs)(t.Fragment, {
                        children: [
                            (0, t.jsx)(lx.cO, {
                                variant: "primary",
                                userId: l.id,
                                analyticsLocation: c,
                                autoFocus: !0,
                            }),
                            (0, t.jsx)(ld.l, { userId: l.id, onClose: la.A.popAll, variant: "secondary" }),
                            (0, t.jsx)(lu.Zt, { user: l, guildId: i, viewProfileItem: g }),
                        ],
                    });
}
var lA = n(463156),
    lb = n(349288),
    lj = n(509434),
    lI = n(307301),
    lC = n(228366),
    ly = n(95561),
    lN = n(874490),
    lE = n(968309),
    lP = n(174459),
    lk = n(486020),
    lS = n(123917),
    lR = n(783419);
let lT = "User Profile Modal V2";
function lD(e) {
    let l = Q.A.get(e);
    (0, lE.A)({ platformType: l.type, location: lT }),
        lP.default.track(Y.HAw.ACCOUNT_LINK_STEP, {
            previous_step: lT,
            current_step: "desktop oauth",
            platform_type: l.type,
        });
}
function lO() {
    lC.h.dispatch({ type: "CONNECTIONS_GRID_MODAL_SHOW", onComplete: lD, stackingBehavior: "stack" });
}
function lM(e) {
    let { account: l, locale: n, userId: i } = e,
        r = l.metadata ?? {},
        a = (0, X.An)(r[lR.pK.CREATED_AT], n),
        s = Q.A.get((0, lN.ML)(l.type));
    return (0, t.jsx)(lL, {
        renderAccountName: () => {
            let e = s?.getPlatformUserUrl?.(l);
            return null == e
                ? (0, t.jsx)(e2.m, {
                      overflowOnly: !0,
                      text: l.name,
                      children: (0, t.jsx)(eN.E, { variant: "text-sm/normal", className: eX.GW, children: l.name }),
                  })
                : (0, t.jsx)(lb.Anchor, {
                      href: e,
                      className: eX.Y2,
                      useDefaultUnderlineStyles: !1,
                      "aria-label":
                          s?.name != null
                              ? `${s.name}, ${l.name}, ${eK.intl.string(eK.t.q5jLJB)}`
                              : `${l.name}, ${eK.intl.string(eK.t.q5jLJB)}`,
                      onClick: (n) => {
                          (0, ly.zV)(Y.HAw.CONNECTED_ACCOUNT_VIEWED, { platform_type: l.type, other_user_id: i }),
                              (0, lS.h)({ href: e, trusted: s?.type !== Y.fg2.DOMAIN }, n);
                      },
                      children: (0, t.jsxs)("div", {
                          className: eX.vi,
                          children: [
                              (0, t.jsx)(e2.m, {
                                  overflowOnly: !0,
                                  text: l.name,
                                  children: (0, t.jsx)(eN.E, {
                                      variant: "text-sm/normal",
                                      className: eX.GW,
                                      children: l.name,
                                  }),
                              }),
                              (0, t.jsx)(lj.I, { size: "xs", color: "currentColor" }),
                          ],
                      }),
                  });
        },
        renderMetadata: function () {
            return l.type === Y.fg2.REDDIT
                ? (0, eU.xE)(r)
                : l.type === Y.fg2.STEAM
                  ? (0, eU.dy)(r)
                  : l.type === Y.fg2.BLUESKY || l.type === Y.fg2.MASTODON || l.type === Y.fg2.TWITTER
                    ? (0, eU.ED)(r)
                    : l.type === Y.fg2.PAYPAL
                      ? (0, eU.gZ)(r)
                      : l.type === Y.fg2.EBAY
                        ? (0, eU.ub)(r)
                        : l.type === Y.fg2.TIKTOK
                          ? (0, eU.HU)(r)
                          : null;
        },
        platformIcon: s?.icon.lightPNG,
        platformName: s?.name,
        createdAtDate: a,
    });
}
function lw(e) {
    let { identityWithApplication: l } = e,
        { identity: n, application: i } = l;
    if (null == n.profile || null == n.profile.username || null == i) return null;
    let r = lk.Ay.getApplicationIconURL({ id: i.id, icon: i.icon });
    return (0, t.jsx)(lL, {
        renderAccountName: function () {
            return (0, t.jsx)(e2.m, {
                overflowOnly: !0,
                text: n.profile.username,
                children: (0, t.jsx)(eN.E, {
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
function lL(e) {
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
            (0, t.jsx)(e2.m, {
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
                                (0, t.jsx)(eN.E, {
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
function l_(e) {
    let { connections: l, applicationIdentities: n, userId: i, allowEditing: r, className: o } = e,
        d = (0, s.bG)([q.default], () => q.default.locale);
    if (!r && 0 === l.length && 0 === n.length) return null;
    let u = l.length > 0 || n.length > 0;
    return (0, t.jsxs)("div", {
        className: a()(eX.kL, o),
        children: [
            u &&
                (0, t.jsxs)("ul", {
                    className: eX.V,
                    children: [
                        l.map((e) => (0, t.jsx)(lM, { account: e, userId: i, locale: d }, `${e.type}:${e.id}`)),
                        n?.map((e) => (0, t.jsx)(lw, { identityWithApplication: e }, e.identity.application_id)),
                    ],
                }),
            r &&
                (0, t.jsxs)(eG.D, {
                    className: eX.qG,
                    onClick: lO,
                    children: [
                        (0, t.jsx)(lI.j, { size: "sm", color: "currentColor" }),
                        (0, t.jsx)(eN.E, {
                            variant: "text-xs/medium",
                            color: "none",
                            children: eK.intl.string(eK.t.syl6HS),
                        }),
                    ],
                }),
        ],
    });
}
var lG = n(18005),
    lV = n(193885),
    lU = n(408278),
    lF = n(890377),
    lB = n(789645),
    lz = n(534514),
    lH = n(821609),
    lW = n(403581),
    lK = n(194261),
    lX = n(689175),
    lq = n(517461),
    lY = n(13875),
    lZ = n(783420),
    l$ = n(252732),
    lJ = n(976860);
let lQ = (0, n(945810).mj)({
    name: "2026-06-wysiwyg-show-dns-to-non-nitro",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var l0 = n(975732),
    l1 = n(487233),
    l7 = n(120386),
    l2 = n(317097),
    l3 = n(602853),
    l5 = n(922016),
    l8 = n(508274),
    l9 = n(654107),
    l6 = n(930349);
function l4(e) {
    let { user: l, disabled: n = !1 } = e,
        r = i.useRef(null),
        a = (0, l3.r)(x.A.unsafe_rawColors.PRIMARY_530).hex(),
        o = (0, l9.rh)(l.getAvatarURL(null, 80), a, !1),
        { pendingAccentColor: d, savedAccentColor: u } = (0, s.cf)([ef.A, z.A], () => ({
            pendingAccentColor: ef.A.getPendingChanges().pendingAccentColor,
            savedAccentColor: z.A.getUserProfile(l.id)?.accentColor,
        })),
        c = d ?? u ?? (0, l2.LX)(o[0] ?? a),
        g = i.useCallback((e) => (0, e0.p)({ accentColor: e }), []);
    return (0, t.jsx)(l5.Y, {
        targetElementRef: r,
        renderPopout: (e) => (0, t.jsx)(l8.VN, { ...e, value: c, onChange: g, suggestedColors: o, showEyeDropper: !0 }),
        children: (e) =>
            (0, t.jsx)(l6.V, {
                ...e,
                variant: "bar",
                buttonRef: r,
                disabled: n,
                accessibleLabel: eK.intl.string(eK.t["/X3fkf"]),
                accessibleValue: (0, l2.Hl)(c),
                showOverlayOnHover: !0,
                renderPreview: () =>
                    (0, t.jsx)("div", { style: { width: "100%", height: "100%", backgroundColor: (0, l2.Hl)(c) } }),
            }),
    });
}
var ne = n(450373),
    nl = n(339984),
    nn = n(111242);
function nt(e) {
    let { backgroundColor: l } = e;
    return (0, t.jsx)("div", { className: nn.o, style: { backgroundColor: l } });
}
function ni(e) {
    let { src: l } = e;
    return (0, t.jsx)("img", { src: l, alt: "", className: nn._ });
}
function nr(e) {
    let { displayProfile: l, pendingBanner: n, shouldAnimate: i } = e,
        r = (0, l3.r)(x.A.unsafe_rawColors.PRIMARY_800).hex(),
        a = l?.primaryColor ?? (0, l2.LX)(r),
        { hex: s } = (0, ne.A)(a),
        o = l?.getPreviewBanner(n, i, 296) ?? void 0;
    return null != o ? (0, t.jsx)(ni, { src: o }) : (0, t.jsx)(nt, { backgroundColor: s });
}
function na(e) {
    let l,
        { userId: n, guildId: i, disabled: r, errorMessageId: a } = e,
        { newestAnalyticsLocation: o } = (0, I.Ay)(),
        d = null != i,
        u = (0, W.Ay)(n, i),
        c = (0, s.bG)([ef.A], () => ef.A.getPendingChanges(i ?? void 0).pendingBanner),
        g = (0, s.bG)([eg.default], () => eg.default.getCurrentUser()?.banner),
        f = (0, s.bG)([z.A], () =>
            null != i ? z.A.getGuildMemberProfile(n, i)?.banner : z.A.getUserProfile(n)?.banner,
        ),
        m = null === c,
        p = d && (u?.isUsingGuildMemberBanner() ?? !1),
        x = m && d && !p ? void 0 : c,
        v = (0, ed.Ac)(c, f),
        h = d && null != g,
        A = v
            ? {
                  onClick: () => (0, l$.rM)(null, f, (e) => (0, e0.p)({ guildId: i ?? void 0, banner: e })),
                  type: h ? "reset" : "remove",
                  accessibleLabel: eK.intl.string(h ? eK.t.jHlJNS : eK.t.tT9n7D),
              }
            : void 0;
    return (0, t.jsx)(l6.V, {
        affordance: A,
        variant: "square",
        onClick: function () {
            return (0, l$.XD)({
                uploadType: nl.HL.BANNER,
                analyticsSource: o,
                guildId: i ?? void 0,
                stackingBehavior: "stack",
            });
        },
        accessibleLabel: eK.intl.string(eK.t.yiRnNO),
        accessibleValue:
            ((l = void 0 === c),
            null === c || (l && null == f)
                ? eK.intl.string(eK.t["3Xph0/"])
                : l
                  ? eK.intl.string(eK.t.keN7ib)
                  : eK.intl.string(eK.t["l/iJSJ"])),
        "aria-haspopup": "dialog",
        disabled: r,
        showOverlayOnHover: !0,
        errorMessageId: a,
        renderPreview: (e) => (0, t.jsx)(nr, { displayProfile: u, pendingBanner: x, shouldAnimate: e }),
    });
}
var ns = n(913563),
    no = n(898985),
    nd = n(922301),
    nu = n(660184),
    nc = n(259065),
    ng = n(864386),
    nf = n(283607);
let nm = "heading-xl/semibold";
function np(e) {
    let { displayName: l, stylesPreview: n, shouldAnimate: i = !1 } = e;
    return (0, t.jsx)("div", {
        "aria-hidden": !0,
        className: nf.M,
        children:
            null != n
                ? (0, t.jsx)(eN.E, {
                      variant: nm,
                      children: (0, t.jsx)(nu.A, {
                          userName: l,
                          displayNameStyles: n,
                          effectDisplayType: i ? nd.G.ANIMATED : nd.G.STATIC,
                          shouldWrap: !1,
                          inProfile: !0,
                          loop: !0,
                      }),
                  })
                : (0, t.jsx)(eN.E, { variant: nm, className: nf.W, color: "text-muted", children: l }),
    });
}
function nx(e) {
    let { user: l, guildId: n, disabled: r, errorMessageId: a } = e,
        { analyticsLocations: o } = (0, I.Ay)(),
        d = null != n,
        u = (0, s.bG)([ec.Ay], () => (null != n ? (ec.Ay.getMember(n, l.id)?.nick ?? null) : null)),
        c = (0, s.bG)([eg.default], () => eg.default.getCurrentUser()?.globalName ?? null),
        g = (0, s.bG)([ef.A], () => ef.A.getPendingChanges(null).pendingGlobalName),
        f = (0, s.bG)([ef.A], () => ef.A.getPendingChanges(n ?? null).pendingNickname),
        {
            userDisplayNameStyles: m,
            guildDisplayNameStyles: p,
            pendingDisplayNameStyles: x,
        } = (0, ed.B0)(l, n ?? void 0),
        v = d ? p : m,
        h = void 0 !== x,
        A = null === x,
        b = d && null != m,
        j = (0, ed.lw)({ pendingValue: x, userValue: m, guildValue: p, guildId: n ?? void 0 });
    function C(e) {
        return null == e || "" === e ? void 0 : e;
    }
    let y = void 0 !== g ? g : c,
        N = d ? (C(void 0 !== f ? f : u) ?? C(y) ?? l.username) : (C(y) ?? l.username),
        E = h ? null != x : null != v,
        P =
            null != j && E
                ? {
                      onClick: () => (0, e0.p)({ guildId: n ?? void 0, displayNameStyles: null }),
                      type: b ? "reset" : "remove",
                      accessibleLabel: eK.intl.string(b ? eK.t.en3ogK : eK.t["Wqmi/h"]),
                  }
                : void 0,
        k = i.useCallback(() => {
            (0, nc.L)({ analyticsLocations: o, guildId: n ?? void 0, stackingBehavior: "stack" });
        }, [o, n]);
    return (0, t.jsx)(l6.V, {
        affordance: (!A && (h || null != v)) || b ? P : "add",
        variant: "bar",
        onClick: k,
        accessibleLabel: eK.intl.string(eK.t.vKBV4A),
        accessibleValue: (function (e) {
            if (null == e) return eK.intl.string(eK.t["3Xph0/"]);
            let l = eK.intl.string((0, ns.A)(e.fontId)),
                n = eK.intl.string(no.J[e.effectId] ?? ng.default.OpWJ3f),
                t = e.colors.map((e) => `#${e.toString(16).padStart(6, "0")}`).join(", ");
            return eK.intl.formatToPlainString(eK.t.A2XnI4, { fontName: l, effectName: n, colors: t });
        })(j),
        "aria-haspopup": "dialog",
        errorMessageId: a,
        renderPreview: (e) => (0, t.jsx)(np, { stylesPreview: j, displayName: N, shouldAnimate: e }),
        disabled: r,
    });
}
var nv = n(374654),
    nh = n(366010),
    nA = n(736653),
    nb = n(674658),
    nj = n(617061),
    nI = n(203632),
    nC = n(536572);
let ny = new Set(),
    nN = 0;
var nE = n(993408),
    nP = n(841702),
    nk = n(515718),
    nS = n(195292);
function nR(e) {
    "" !== e.thumbnailPreviewSrc && (0, nk.NN)(e.thumbnailPreviewSrc).catch(() => {});
}
var nT = n(466681),
    nD = n(970389);
let nO =
        "https://cdn.discordapp.com/assets/content/6ccc97f30d0e11f23e116bb2534831ca573533a9dd726f5859ae527e82cdf37a.png",
    nM =
        "https://cdn.discordapp.com/assets/content/82b9aaf680c9ca85c8e9cdb51056df7d33d865e18e645393934b76c03b944611.png";
function nw(e) {
    let { effect: l, shouldAnimate: n, isEmpty: r, hasMainProfileFallback: s, disabled: o } = e,
        d = (0, nA.Ay)(),
        u = (0, nh.M)(d) ? nO : nM,
        c = (function (e) {
            let { enabled: l, isInteracting: n } = e,
                { categories: t, purchases: r } = (0, nP.Ay)({ stalePurchasesOK: !0 }),
                a = i.useMemo(() => (0, nE.wo)(r, t), [r, t]),
                s = (0, nS.A)({ enabled: l, isInteracting: n, items: a, preload: nR });
            return null != s ? { skuId: s.skuId } : null;
        })({ enabled: r && !s && !o, isInteracting: n }),
        g = null != c,
        f = g ? c : l;
    return (
        i.useEffect(() => {
            n && ((nN += 1), ny.forEach((e) => e()));
        }, [n]),
        (0, t.jsxs)("div", {
            className: nT.ti,
            "aria-hidden": !0,
            children: [
                (0, t.jsx)("img", { src: u, alt: "", className: nT.QQ }),
                f?.skuId != null &&
                    (0, t.jsx)("div", {
                        className: a()(nT.yY, { [nD.O]: g }),
                        children: (0, t.jsx)(C.A, {
                            skuId: f.skuId,
                            autoPlay: !1,
                            resetOnHover: !0,
                            restartMethod: nI.HL.FromStart,
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
function nL(e) {
    let { user: l, guildId: n, disabled: r, variant: a = "full-height-bar" } = e,
        { analyticsLocations: o } = (0, I.Ay)(),
        d = null != n,
        u = (0, s.bG)([L.A], () => (null != n ? L.A.getGuild(n) : null)),
        c = (0, ed.N2)({ user: l }),
        g = (0, ed.N2)({ user: l, guildId: n ?? void 0 }),
        { pendingProfileEffect: f } = (0, ed.nZ)(n ?? void 0),
        m = void 0 !== f,
        p = null === f || (!m && null == g),
        x = d && null != c,
        v = (0, ed.lw)({ pendingValue: f, userValue: c, guildValue: g, guildId: n ?? void 0 }),
        { product: h } = (0, nb.q)(v?.skuId),
        A = m ? null != f : null != g,
        b =
            null != v && A
                ? {
                      onClick: () => (0, e0.p)({ guildId: n ?? void 0, profileEffect: null }),
                      type: x ? "reset" : "remove",
                      accessibleLabel: eK.intl.string(x ? eK.t["SQy/Po"] : eK.t.uMuafO),
                  }
                : void 0,
        j = i.useCallback(() => {
            (0, nj.W)({ analyticsLocations: o, guild: u ?? void 0, stackingBehavior: "stack" });
        }, [o, u]);
    return (0, t.jsx)(l6.V, {
        affordance: p && !x ? "add" : b,
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
        })({ profileEffectPreview: v, productName: (0, nC.VG)(h), hasPendingSelection: null != f }),
        "aria-haspopup": "dialog",
        disabled: r,
        renderPreview: (e) =>
            (0, t.jsx)(nw, { effect: v, shouldAnimate: e, isEmpty: p, hasMainProfileFallback: x, disabled: r }),
    });
}
var n_ = n(515727),
    nG = n(746002);
function nV(e) {
    e.layers
        .filter((e) => !0 !== e.responsive)
        .forEach((l) => {
            let n = (0, nG.getCollectiblesItemAssetUrl)({
                skuId: e.skuId,
                assetFormat: nG.CollectiblesItemAssetFormat.STATIC,
                assetId: l.id,
            });
            null != n && (0, nk.NN)(n).catch(() => {});
        });
}
var nU = n(84391);
function nF(e) {
    let { responsive: l } = e;
    return !0 !== l;
}
function nB(e) {
    let { profileFramePreview: l, isEmpty: n, hasMainProfileFallback: r, isInteracting: s, disabled: o } = e,
        d = (0, nA.Ay)(),
        u = (0, nh.M)(d) ? nO : nM,
        c = (0, N.A)(l?.skuId, "EditableTileProfileFrameButton"),
        g = (function (e) {
            let { enabled: l, isInteracting: n } = e,
                { categories: t, purchases: r } = (0, nP.Ay)({ stalePurchasesOK: !0 }),
                a = i.useMemo(() => (0, nE.MG)(r, t), [r, t]);
            return (0, nS.A)({ enabled: l, isInteracting: n, items: a, preload: nV });
        })({ enabled: n && !r && !o, isInteracting: s }),
        f = null != g,
        m = f ? g : c,
        { profileFrameStyle: p, profileFrameClassName: x } =
            null != m ? (0, k.i)(m) : { profileFrameStyle: void 0, profileFrameClassName: void 0 };
    return (0, t.jsxs)(t.Fragment, {
        children: [
            null != m &&
                (0, t.jsx)("div", {
                    className: a()(nU.hm, x, { [nD.O]: f }),
                    style: p,
                    children: (0, t.jsx)(P.A, { frame: m, filterLayer: nF }),
                }),
            (0, t.jsx)("div", {
                className: a()(nU.ti, { [nU.yT]: null == m }),
                children: (0, t.jsx)("img", { src: u, alt: "", className: nU.QQ, draggable: !1 }),
            }),
        ],
    });
}
function nz(e) {
    let { user: l, guildId: n, disabled: r } = e,
        { analyticsLocations: a } = (0, I.Ay)(),
        o = null != n,
        d = (0, s.bG)([L.A], () => (null != n ? L.A.getGuild(n) : null)),
        u = (0, ed.Xf)({ user: l }),
        c = (0, ed.Xf)({ user: l, guildId: n ?? void 0 }),
        { pendingProfileFrame: g } = (0, ed.Tu)(n ?? void 0),
        f = void 0 !== g,
        m = null === g || (!f && null == c),
        p = o && null != u,
        x = (0, ed.lw)({ pendingValue: g, userValue: u, guildValue: c, guildId: n ?? void 0 }),
        { product: v } = (0, nb.q)(x?.skuId),
        h = f ? null != g : null != c,
        A =
            null != x && h
                ? {
                      onClick: () => (0, e0.p)({ guildId: n ?? void 0, profileFrame: null }),
                      type: p ? "reset" : "remove",
                      accessibleLabel: eK.intl.string(p ? eK.t.j6hZyM : eK.t.nQBruk),
                  }
                : void 0,
        b = i.useCallback(() => {
            (0, n_.w)({ analyticsLocations: a, guild: d ?? void 0, stackingBehavior: "stack" });
        }, [a, d]);
    return (0, t.jsx)(l6.V, {
        affordance: m && !p ? "add" : A,
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
        })({ profileFramePreview: x, productName: (0, nC.VG)(v), hasPendingSelection: null != g }),
        "aria-haspopup": "dialog",
        disabled: r,
        renderPreview: (e) =>
            (0, t.jsx)(nB, {
                profileFramePreview: x,
                isEmpty: m,
                hasMainProfileFallback: p,
                isInteracting: e,
                disabled: r,
            }),
    });
}
var nH = n(684732),
    nW = n(498596),
    nK = n(298387);
function nX(e) {
    let { color: l, suggestedColors: n, disabled: r, ariaLabel: s, onSelect: o, buttonRef: d } = e,
        u = i.useRef(null),
        c = d ?? u,
        g = (0, l2.Hl)(l),
        f = (0, l2.bJ)(l, 0xffffff) < nW.Tr.NonText;
    return (0, t.jsx)(l5.Y, {
        targetElementRef: c,
        renderPopout: (e) => (0, t.jsx)(l8.VN, { ...e, value: l, onChange: o, suggestedColors: n, showEyeDropper: !0 }),
        children: (e) => {
            let { onClick: l, ...n } = e;
            return (0, t.jsx)(eG.D, {
                ...n,
                innerRef: c,
                className: nK.Dh,
                onClick: r ? void 0 : l,
                "aria-label": s,
                "aria-disabled": r,
                tabIndex: r ? -1 : 0,
                children: (0, t.jsx)("div", { className: a()(nK.Hy, { [nK.rY]: f }), style: { backgroundColor: g } }),
            });
        },
    });
}
function nq(e) {
    let {
            primaryColor: l,
            secondaryColor: n,
            onSelectPrimaryColor: r,
            onSelectSecondaryColor: a,
            suggestedColors: s,
            disabled: o = !1,
            deleteButton: d,
        } = e,
        u = i.useRef(null),
        c = (0, l2.Hl)(l),
        g = (0, l2.Hl)(n),
        f = `linear-gradient(to bottom, ${c}, ${g})`,
        m = eK.intl.formatToPlainString(eK.t.FquTfm, { colorLabel: c }),
        p = eK.intl.formatToPlainString(eK.t.xOnm4z, { colorLabel: g }),
        x =
            null != d
                ? {
                      ...d,
                      onClick: () => {
                          d.onClick(), u.current?.focus();
                      },
                  }
                : void 0;
    return (0, t.jsx)(l6.Y, {
        variant: "square",
        disabled: o,
        deleteButton: x,
        children: (0, t.jsxs)("div", {
            className: nK.D7,
            style: { background: f },
            children: [
                (0, t.jsx)(nX, { color: l, suggestedColors: s, ariaLabel: m, onSelect: r, disabled: o, buttonRef: u }),
                (0, t.jsx)(nX, { color: n, suggestedColors: s, ariaLabel: p, onSelect: a, disabled: o }),
            ],
        }),
    });
}
function nY(e) {
    let { user: l, guildId: n, disabled: r = !1 } = e,
        a = (0, W.Ay)(l.id, n),
        {
            currentProfileThemeColors: o,
            pendingThemeColors: d,
            pendingAvatar: u,
        } = (0, s.cf)([ef.A, z.A], () => {
            let e = ef.A.getPendingChanges(n ?? void 0),
                t = z.A.getUserProfile(l.id)?.themeColors ?? null;
            return {
                currentProfileThemeColors: null != n ? (z.A.getGuildMemberProfile(l.id, n)?.themeColors ?? null) : t,
                pendingThemeColors: e.pendingThemeColors,
                pendingAvatar: e.pendingAvatar,
            };
        }),
        c = void 0 !== d ? d : o,
        g = (0, eu.V7)({ userId: l.id, image: u }),
        { primaryColor: f, secondaryColor: m } = (0, Z.A)({
            user: l,
            displayProfile: a,
            pendingThemeColors: d,
            pendingAvatarSrc: g ?? void 0,
            isPreview: !0,
        }),
        p = (0, l3.r)(x.A.unsafe_rawColors.PRIMARY_530).hex(),
        v = null != g ? g : l.getAvatarURL(n ?? void 0, 80),
        h = (0, l9.rh)(v, p, !1),
        A = i.useCallback(
            (e) => {
                (0, e0.p)({ guildId: n ?? void 0, themeColors: e });
            },
            [n],
        ),
        b =
            null != n && (0, nH.l)(d, o)
                ? {
                      onClick: () => (0, e0.p)({ guildId: n, themeColors: [null, null] }),
                      type: "reset",
                      accessibleLabel: eK.intl.string(eK.t["L+GmoR"]),
                  }
                : void 0;
    return null == f || null == m
        ? null
        : (0, t.jsx)(nq, {
              primaryColor: f,
              secondaryColor: m,
              onSelectPrimaryColor: (e) => {
                  (c?.[0] == null || e !== c[0]) && A([e, m]);
              },
              onSelectSecondaryColor: (e) => {
                  (c?.[1] == null || e !== c[1]) && A([f, e]);
              },
              suggestedColors: h,
              disabled: r,
              deleteButton: b,
          });
}
var nZ = n(315629),
    n$ = n(422936),
    nJ = n(410516),
    nQ = n(788868);
function n0(e) {
    let l = (0, s.bG)([eg.default], () => eQ.Ay.isPremium(eg.default.getCurrentUser())),
        n = (0, n$.O)();
    return l
        ? eK.intl.string(eK.t.AfRWI8)
        : (0, nJ.U9)(n, nQ.pe.TIER_2) && n?.discount.amount != null
          ? eK.intl.formatToPlainString(eK.t.bkQ4bH, { percent: n?.discount.amount })
          : e;
}
var n1 = n(235684);
function n7() {
    let e = i.useCallback(() => {
            (0, lJ.pX)(Y.BVt.NITRO_HOME), (0, l0.closeUserProfileModal)();
        }, []),
        l = (0, lf.A)(e),
        n = n0(eK.intl.string(eK.t.pj0XBN));
    return (0, t.jsx)(lZ.A, {
        subscriptionTier: nQ.pe.TIER_2,
        children: (e) => {
            let { onClick: i } = e;
            return (0, t.jsxs)(nZ.h, {
                color: "nitro-pink",
                className: n1.U,
                children: [
                    (0, t.jsx)(eN.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: eK.intl.format(eK.t.TmfgI2, { onClick: l }),
                    }),
                    (0, t.jsx)(lH.$, {
                        variant: "expressive",
                        size: "md",
                        icon: lW.t,
                        text: n,
                        onClick: i,
                        fullWidth: !0,
                    }),
                ],
            });
        },
    });
}
var n2 = n(55619),
    n3 = n(942308);
function n5() {
    return (0, t.jsxs)("div", {
        className: n3.k,
        children: [
            (0, t.jsx)(eN.E, {
                variant: "text-sm/medium",
                color: "text-strong",
                children: eK.intl.string(eK.t.JFY17v),
            }),
            (0, t.jsx)(lH.$, {
                fullWidth: !0,
                variant: "secondary",
                size: "md",
                text: eK.intl.string(eK.t.R9GHya),
                onClick: function () {
                    return n2.A.setEnabled(!1);
                },
            }),
        ],
    });
}
var n8 = n(847374),
    n9 = n(111159),
    n6 = n(548118),
    n4 = n(711014),
    te = n(540637),
    tl = n(801461),
    tn = n(44482),
    tt = n(844222),
    ti = n(561392),
    tr = n(716263),
    ta = n(15626),
    ts = n(930856);
function to(e) {
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
            renderListItem: m,
            children: p,
        } = e,
        {
            isOpen: x,
            setIsOpen: v,
            refs: h,
            floatingStyles: A,
            getReferenceProps: b,
            getFloatingProps: j,
            transitionStyles: I,
        } = (function () {
            let { reducedMotion: e } = i.useContext(tt.C),
                {
                    isOpen: l,
                    setIsOpen: n,
                    refs: t,
                    floatingStyles: r,
                    getReferenceProps: a,
                    getFloatingProps: s,
                    context: o,
                } = (0, ti.u)({ placement: "bottom-start", matchReferenceWidth: !1, transform: e.enabled }),
                { styles: d } = (0, tr.DL)(o, {
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
        { setFloating: C } = h,
        y = i.useContext(ta._),
        N = i.useId(),
        E = i.useId(),
        P = i.useId(),
        k = i.useRef(null),
        S = i.useRef(null),
        [R, T] = i.useState(null),
        D = null != R ? (0, tl.ZN)(P, R) : void 0,
        O = i.useRef(!1),
        M = i.useRef(!1),
        w = i.useMemo(() => l.filter((e) => (0, tl.fI)(e.value, [n])), [n, l]),
        L = i.useCallback(() => {
            u || v(!x);
        }, [u, v, x]),
        _ = i.useCallback(
            (e) => {
                x && 0 === e.button && e.preventDefault();
            },
            [x],
        ),
        G = i.useCallback(() => {
            v(!1), k.current?.focus();
        }, [v]),
        V = i.useCallback(
            (e) => {
                if (!S.current?.contains(e.relatedTarget)) {
                    if (M.current) {
                        M.current = !1;
                        return;
                    }
                    if (x && null != R) {
                        let e = l[R];
                        null != e && !0 !== e.disabled && r(e.value);
                    }
                    x && v(!1);
                }
            },
            [x, R, l, r, v],
        ),
        U = i.useCallback(
            (e) => {
                if (u) return;
                let l = e[0];
                null != l && (r(l.value), G());
            },
            [u, r, G],
        ),
        { activeIndex: F, handleKeyDown: B } = (0, te.l)(!0, l),
        z = i.useRef(null);
    i.useEffect(() => {
        let e = F !== z.current;
        (z.current = F), null != F && e && (T(F), x || ((O.current = !0), v(!0)));
    }, [F, x, v]);
    let H = i.useCallback(
            (e) => {
                if (u) return;
                let n = l.length;
                switch (e.key) {
                    case "ArrowDown":
                    case "PageDown": {
                        let l = "PageDown" === e.key ? 10 : 1;
                        if (0 === n) return;
                        if ((e.preventDefault(), !x || e.altKey)) {
                            x || v(!0);
                            return;
                        }
                        T((e) => (null === e ? 0 : Math.min(e + l, n - 1)));
                        break;
                    }
                    case "ArrowUp":
                    case "PageUp": {
                        let t = "PageUp" === e.key ? 10 : 1;
                        if (0 === n) return;
                        if ((e.preventDefault(), e.altKey && x)) {
                            if (null != R) {
                                let e = l[R];
                                if (null != e && !0 !== e.disabled) {
                                    U([e]);
                                    break;
                                }
                            }
                            G();
                            break;
                        }
                        if (!x) return void v(!0);
                        T((e) => (null === e ? 0 : Math.max(e - t, 0)));
                        break;
                    }
                    case "Enter":
                    case " ":
                        if ((e.preventDefault(), e.stopPropagation(), !x)) return void v(!0);
                        if (null == R || R > n - 1) return;
                        {
                            let e = l[R];
                            if (null == e || !0 === e.disabled) return;
                            U([e]);
                        }
                        break;
                    case "Home":
                        if ((e.preventDefault(), 0 === n)) return;
                        T(0), x || ((O.current = !0), v(!0));
                        break;
                    case "End":
                        if ((e.preventDefault(), 0 === n)) return;
                        T(n - 1), x || ((O.current = !0), v(!0));
                        break;
                    case "Tab":
                        if (x && null != R) {
                            let e = l[R];
                            null != e && !0 !== e.disabled && r(e.value);
                        }
                        (M.current = !0), v(!1);
                        break;
                    case "Escape":
                        x && (e.preventDefault(), e.stopPropagation(), G());
                        break;
                    default:
                        B(e);
                }
            },
            [u, x, l, R, U, G, r, v, B],
        ),
        W = Math.max(
            l.findIndex((e) => e.id === w[w.length - 1]?.id),
            0,
        ),
        K = i.useRef(!1);
    i.useEffect(() => {
        c || !x || K.current
            ? x || ((K.current = !1), T(null), (O.current = !1))
            : ((K.current = !0), O.current || T(l.length > 0 ? W : null), (O.current = !1), k.current?.focus());
    }, [c, x, W, l.length]);
    let X = {
        id: E,
        role: "combobox",
        "aria-haspopup": "listbox",
        "aria-controls": x ? P : void 0,
        "aria-expanded": x,
        "aria-activedescendant": D,
        "aria-disabled": !!u || void 0,
        "aria-labelledby": null != s ? `${N} ${E}` : void 0,
        "aria-errormessage": y?.errorMessageId,
        "aria-invalid": y?.errorMessageId != null || void 0,
        "aria-describedby": y?.describedById,
        onClick: L,
        onMouseDown: _,
        onKeyDown: H,
        onBlur: V,
    };
    return (0, t.jsxs)("div", {
        ref: (e) => {
            (S.current = e), h.setReference(e);
        },
        className: o,
        ...b(),
        children: [
            null != s && (0, t.jsx)(f.A, { tag: "label", id: N, htmlFor: E, children: s }),
            p({ buttonRef: k, selectButtonProps: X }),
            !u &&
                x &&
                (0, t.jsx)("div", {
                    ref: C,
                    className: a()(ts.S_, d),
                    ...j(),
                    style: { ...A, ...I },
                    children: (0, t.jsx)(te.q, {
                        id: P,
                        tabIndex: -1,
                        items: l,
                        selectionMode: "single",
                        selectedItems: w,
                        onSelectionChange: U,
                        shouldFocusWrap: !1,
                        activeDescendantIndex: R,
                        renderListItem: (e) => (null != m ? m(e) : (0, t.jsx)(tn.c, { ...e })),
                        maxVisibleItems: g,
                        loading: c,
                    }),
                }),
        ],
    });
}
var td = n(138325);
let tu = "MAIN_PROFILE";
function tc(e) {
    let { guild: l } = e;
    return (0, t.jsx)(n6.Ay, { className: td.$f, guild: l, size: n6.Ay.Sizes.MINI, active: !0, "aria-hidden": !0 });
}
function tg(e) {
    let { leading: l, label: n, description: i } = e;
    return (0, t.jsxs)("div", {
        className: td.XE,
        children: [
            null != l && (0, t.jsx)("div", { className: td.fZ, children: l }),
            (0, t.jsxs)("div", {
                className: td.qL,
                children: [
                    (0, t.jsx)(eN.E, { variant: "text-md/normal", color: "currentColor", lineClamp: 1, children: n }),
                    null != i &&
                        "" !== i &&
                        (0, t.jsx)(eN.E, {
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
function tf(e) {
    let { leading: l, label: n, disabled: i, buttonRef: r, selectButtonProps: s } = e;
    return (0, t.jsxs)(eG.D, {
        innerRef: r,
        className: a()(td.L5, { [td.r9]: i }),
        tabIndex: !0 === i ? -1 : 0,
        ...s,
        children: [
            l,
            (0, t.jsx)(eN.E, {
                variant: "text-md/medium",
                color: !0 === i ? "text-muted" : "text-strong",
                lineClamp: 1,
                className: td.v9,
                children: n,
            }),
            (0, t.jsx)(n8.a, {
                className: td.u4,
                size: "sm",
                color: !0 === i ? x.A.colors.ICON_MUTED : x.A.colors.ICON_DEFAULT,
            }),
        ],
    });
}
function tm(e) {
    let { selectedGuildId: l, originGuildId: n, onChange: r, loading: a, disabled: o } = e,
        d = (0, s.bG)([n4.Ay], () => n4.Ay.getFlattenedGuildIds()),
        u = (0, s.bG)([L.A], () => L.A.getGuilds()),
        c = (0, s.bG)([eH.A], () => {
            let e = eH.A.getGuildId();
            return null == e || ef._.has(e) ? null : e;
        }),
        g = (0, s.cf)([ec.Ay, n4.Ay], () => {
            let e = {};
            for (let l of n4.Ay.getFlattenedGuildIds()) {
                let n = ec.Ay.getSelfMember(l)?.nick;
                null != n && (e[l] = n);
            }
            return e;
        }),
        f = i.useMemo(() => {
            let e = {
                    id: tu,
                    label: eK.intl.string(eK.t["2p07FR"]),
                    value: tu,
                    leading: (0, t.jsx)(n9.p, { size: "refresh_sm", color: x.A.colors.ICON_DEFAULT }),
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
                                  leading: (0, t.jsx)(tc, { guild: n }),
                                  description: g[n.id] ?? void 0,
                              };
                    })
                    .filter(et.Vq),
                r = null != l ? u[l] : null;
            return null == r
                ? [e, ...i]
                : [
                      e,
                      {
                          id: r.id,
                          label: r.name,
                          value: r.id,
                          leading: (0, t.jsx)(tc, { guild: r }),
                          description: g[r.id] ?? void 0,
                      },
                      ...i,
                  ];
        }, [d, u, n, c, g]),
        m = l ?? tu,
        p = f.find((e) => e.value === m) ?? f[0],
        v = i.useCallback(
            (e) => {
                let n = e === tu ? null : e;
                n !== l && r(n);
            },
            [r, l],
        );
    return (0, t.jsx)(to, {
        className: td.kL,
        label: eK.intl.string(eK.t.rki38K),
        listboxClassName: td.yt,
        options: f,
        value: m,
        onSelectionChange: v,
        loading: a,
        disabled: o,
        renderListItem: (e) => (0, t.jsx)(tg, { leading: e.leading, label: e.label, description: e.description }),
        children: (e) =>
            (0, t.jsx)(tf, { leading: p.value === tu ? null : p.leading, label: p.label, disabled: o, ...e }),
    });
}
var tp = n(809467);
let tx = "profile-modal-editing-panel",
    tv = "profile-modal-editing-panel-heading",
    th = "profile-editing-nameplate-error",
    tA = "profile-editing-avatar-error",
    tb = "profile-editing-avatar-decoration-error",
    tj = "profile-editing-banner-error",
    tI = "profile-editing-display-name-style-error";
function tC(e) {
    let { onClick: l, className: n, innerRef: i } = e;
    return (0, t.jsx)(e2.m, {
        text: eK.intl.string(eK.t.Qn47Ud),
        delay: 150,
        ariaHidden: !0,
        children: (0, t.jsx)(eG.D, {
            innerRef: i,
            "aria-label": eK.intl.string(eK.t.Qn47Ud),
            "aria-expanded": !1,
            "aria-controls": tx,
            className: a()(tp.eg, n),
            onClick: l,
            focusProps: { offset: { right: 6 } },
            children: (0, t.jsx)(lV.V, { size: "sm", color: x.A.colors.ICON_STRONG }),
        }),
    });
}
function ty(e) {
    let { onClick: l, className: n, buttonRef: i } = e;
    return (0, t.jsx)("div", {
        className: n,
        children: (0, t.jsx)(e2.m, {
            text: eK.intl.string(eK.t.Qn47Ud),
            ariaHidden: !0,
            children: (0, t.jsx)(lU.K, {
                buttonRef: i,
                "aria-label": eK.intl.string(eK.t.Qn47Ud),
                "aria-expanded": !1,
                "aria-controls": tx,
                icon: lV.V,
                onClick: l,
                variant: "secondary",
                size: "sm",
            }),
        }),
    });
}
function tN(e) {
    let { onClick: l, innerRef: n } = e;
    return (0, t.jsx)(e2.m, {
        text: eK.intl.string(eK.t["l/A351"]),
        ariaHidden: !0,
        children: (0, t.jsx)(eG.D, {
            innerRef: n,
            className: tp.cS,
            "aria-label": eK.intl.string(eK.t["l/A351"]),
            onClick: l,
            "aria-controls": tx,
            "aria-expanded": !0,
            children: (0, t.jsx)(lF.V, { size: "md", color: "currentColor" }),
        }),
    });
}
function tE() {
    let [e, l] = (0, lq.V)("per-server-profile-editing-notice-dismissed", !1);
    return e
        ? null
        : (0, t.jsxs)("div", {
              className: tp.X6,
              children: [
                  (0, t.jsx)(eN.E, {
                      variant: "text-sm/normal",
                      color: "text-default",
                      children: eK.intl.string(eK.t["gBIG/N"]),
                  }),
                  (0, t.jsx)(eG.D, {
                      "aria-label": eK.intl.string(eK.t.rSe9ra),
                      className: tp.TD,
                      onClick: () => l(!0),
                      children: (0, t.jsx)(lB.P, { size: "refresh_sm", color: "currentColor" }),
                  }),
              ],
          });
}
function tP() {
    let e = i.useCallback(() => {
            (0, lJ.pX)(Y.BVt.NITRO_HOME), (0, l0.closeUserProfileModal)();
        }, []),
        l = (0, lf.A)(e),
        n = n0(eK.intl.string(eK.t["7IWwak"]));
    return (0, t.jsx)(lZ.A, {
        subscriptionTier: nQ.pe.TIER_2,
        children: (e) => {
            let { onClick: i } = e;
            return (0, t.jsxs)("div", {
                className: tp.eW,
                children: [
                    (0, t.jsxs)("div", {
                        className: tp.tm,
                        children: [
                            (0, t.jsx)(lz.D, {
                                variant: "text-md/medium",
                                color: "text-default",
                                children: eK.intl.string(eK.t.bO0TOe),
                            }),
                            (0, t.jsx)(eN.E, {
                                variant: "text-xs/medium",
                                color: "text-default",
                                children: eK.intl.format(eK.t["3PujdE"], { onClick: l }),
                            }),
                        ],
                    }),
                    (0, t.jsx)(lH.$, {
                        variant: "expressive",
                        size: "sm",
                        icon: lW.t,
                        text: n,
                        onClick: i,
                        fullWidth: !0,
                    }),
                    (0, t.jsx)("div", {
                        className: tp.D0,
                        children: (0, t.jsx)("div", { className: tp.ZN, children: (0, t.jsx)(lK.X, { size: "xs" }) }),
                    }),
                ],
            });
        },
    });
}
function tk() {
    return (0, t.jsx)(eN.E, {
        variant: "text-xs/normal",
        color: "text-subtle",
        className: tp.BJ,
        "aria-hidden": !0,
        children: eK.intl.format(eK.t.kYv9DM, {
            nitroIconHook: () => (0, t.jsx)(lW.t, { size: "xxs", color: "currentColor", className: tp.qp }),
        }),
    });
}
function tS(e) {
    let { heading: l, children: n, disabled: i = !1, showNitroIcon: r = !1 } = e;
    return (0, t.jsxs)("div", {
        className: tp.Os,
        children: [
            (0, t.jsxs)("div", {
                className: tp.AM,
                children: [
                    (0, t.jsx)(lz.D, {
                        className: tp.i_,
                        variant: "text-sm/medium",
                        color: i ? "text-muted" : "text-strong",
                        children: l,
                    }),
                    r &&
                        (0, t.jsx)(e2.m, {
                            text: eK.intl.string(eK.t["5AFxuK"]),
                            shouldShow: !i,
                            ariaHidden: !0,
                            children: (0, t.jsx)(lW.t, {
                                className: tp.l3,
                                size: "xs",
                                color: i ? x.A.colors.ICON_MUTED : x.A.colors.ICON_STRONG,
                                "aria-hidden": !0,
                            }),
                        }),
                ],
            }),
            n,
        ],
    });
}
function tR(e) {
    let { id: l, message: n } = e;
    return null == n
        ? null
        : (0, t.jsxs)("div", {
              className: tp.Zi,
              role: "alert",
              children: [
                  (0, t.jsx)(c.E, { size: "xs", color: x.A.colors.TEXT_FEEDBACK_CRITICAL }),
                  (0, t.jsx)(eN.E, { variant: "text-xs/normal", color: "text-feedback-critical", id: l, children: n }),
              ],
          });
}
function tT(e) {
    let { isDismissed: l } = e;
    return (0, d.p)(!l, {
        initial: { opacity: 1, y: 0 },
        from: { opacity: 0, y: 48 },
        enter: { opacity: 1, y: 0, config: { tension: 200, friction: 25 } },
        leave: { opacity: 0, y: 48, config: { tension: 300, friction: 25 } },
    })((e, l) =>
        l ? (0, t.jsx)(lG.animated.div, { className: tp.HT, style: e, children: (0, t.jsx)(n7, {}) }) : null,
    );
}
function tD(e) {
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
        p = (0, s.bG)([eg.default], () => eg.default.getCurrentUser()),
        x = (0, s.bG)([G.A], () => G.A.hidePersonalInformation),
        v = o || d,
        h = null != l,
        A = null != p && eQ.Ay.canUsePremiumProfileCustomization(p),
        b = !A && !h,
        j = h && !A,
        I = (0, lY.sk)("UserProfileModalV2EditingPanel"),
        C = lQ.useConfig({ location: "UserProfileModalV2EditingPanel" }).enabled,
        y = (0, s.bG)([ef.A], () => ef.A.getErrors(l)),
        N = y.nameplate?.[0] ?? y.nameplate_sku_id?.[0],
        E = y.avatar?.[0],
        P = y.avatar_decoration_sku_id?.[0],
        k = y.banner?.[0],
        S = y.display_name_font_id?.[0] ?? y.display_name_effect_id?.[0] ?? y.display_name_colors?.[0],
        R = (0, lf.A)(r),
        T = i.useRef(null),
        {
            isUpsellDismissed: D,
            handleScrollDismiss: O,
            shouldAddUpsellSafePadding: M,
        } = (function (e) {
            let { scrollerRef: l, canShowUpsell: n } = e,
                [t, r] = i.useState("pending-measurement"),
                [a, s] = i.useState(!1);
            i.useLayoutEffect(() => {
                if (!n) return void r("pending-measurement");
                let e = l.current?.getScrollerNode();
                null == e || (s(!1), r(e.scrollHeight - e.clientHeight >= 86 ? "dismiss-on-scroll" : "safe-padding"));
            }, [l, n]);
            let o = i.useCallback(
                (e) => {
                    if ("dismiss-on-scroll" !== t) return;
                    let { scrollTop: l } = e.currentTarget;
                    !a && l >= 86 ? s(!0) : a && l <= 43 && s(!1);
                },
                [t, a],
            );
            return {
                isUpsellDismissed: a,
                handleScrollDismiss: o,
                shouldAddUpsellSafePadding: "safe-padding" === t && n,
            };
        })({ scrollerRef: T, canShowUpsell: b });
    if (null == p) return null;
    let w = (0, t.jsxs)(tS, {
            heading: eK.intl.string(eK.t.NEzEws),
            disabled: v || j,
            showNitroIcon: !0,
            children: [
                (0, t.jsx)(nx, { user: p, guildId: l, disabled: v || j, errorMessageId: null != S ? tI : void 0 }),
                (0, t.jsx)(tR, { id: tI, message: S }),
            ],
        }),
        L = A || h ? "inline" : C ? "end" : "hidden";
    return (0, t.jsx)("aside", {
        id: tx,
        "aria-labelledby": tv,
        className: a()(tp.nd, { [tp.VU]: j && !x }, c),
        "aria-busy": o,
        children: (0, t.jsxs)("div", {
            className: tp.l$,
            children: [
                (0, t.jsx)(f.A, { children: (0, t.jsx)(m.H, { id: tv, children: eK.intl.string(eK.t["L+ch00"]) }) }),
                (0, t.jsxs)("div", {
                    className: tp.wx,
                    children: [
                        (0, t.jsx)(tN, { innerRef: g, onClick: u }),
                        (0, t.jsx)(tm, {
                            selectedGuildId: l ?? null,
                            originGuildId: n,
                            onChange: R,
                            loading: o,
                            disabled: x,
                        }),
                    ],
                }),
                x
                    ? (0, t.jsx)(n5, {})
                    : (0, t.jsxs)(t.Fragment, {
                          children: [
                              (0, t.jsx)(m.F, {
                                  children: (0, t.jsxs)(lX.zC, {
                                      ref: T,
                                      className: a()(tp.XG, { [tp.uH]: M }),
                                      onScroll: O,
                                      children: [
                                          h && (A ? (0, t.jsx)(tE, {}) : (0, t.jsx)(tP, {})),
                                          A && (0, t.jsx)(tk, {}),
                                          (0, t.jsxs)(tS, {
                                              heading: eK.intl.string(eK.t.x5CoXR),
                                              disabled: v || j,
                                              children: [
                                                  (0, t.jsx)(nv.A, {
                                                      user: p,
                                                      guildId: l,
                                                      disabled: v || j,
                                                      errorMessageId: null != N ? th : void 0,
                                                  }),
                                                  (0, t.jsx)(tR, { id: th, message: N }),
                                              ],
                                          }),
                                          (0, t.jsxs)(tS, {
                                              heading: eK.intl.string(eK.t["50Nwpc"]),
                                              disabled: v || j,
                                              children: [
                                                  (0, t.jsx)(l1.A, {
                                                      user: p,
                                                      guildId: l,
                                                      disabled: v || j,
                                                      errorMessageId: null != E ? tA : void 0,
                                                  }),
                                                  (0, t.jsx)(l7.A, {
                                                      user: p,
                                                      guildId: l,
                                                      disabled: v || j,
                                                      errorMessageId: null != P ? tb : void 0,
                                                  }),
                                                  (0, t.jsx)(tR, { id: tA, message: (0, l$.d3)(E) }),
                                                  (0, t.jsx)(tR, { id: tb, message: P }),
                                              ],
                                          }),
                                          "inline" === L && w,
                                          A || h
                                              ? (0, t.jsxs)(tS, {
                                                    heading: eK.intl.string(eK.t.Zenogr),
                                                    disabled: v || j,
                                                    showNitroIcon: !0,
                                                    children: [
                                                        (0, t.jsx)(nY, { user: p, guildId: l, disabled: v || !A }),
                                                        (0, t.jsx)(na, {
                                                            userId: p.id,
                                                            guildId: l,
                                                            disabled: v || !A,
                                                            errorMessageId: null != k ? tj : void 0,
                                                        }),
                                                        (0, t.jsx)(tR, { id: tj, message: (0, l$.d3)(k) }),
                                                    ],
                                                })
                                              : (0, t.jsx)(tS, {
                                                    heading: eK.intl.string(eK.t["/X3fkf"]),
                                                    disabled: v || j,
                                                    children: (0, t.jsx)(l4, { user: p, disabled: v }),
                                                }),
                                          (0, t.jsxs)(tS, {
                                              heading: eK.intl.string(I ? eK.t["Vfbar/"] : eK.t.wR5wOo),
                                              disabled: v || j,
                                              children: [
                                                  (0, t.jsx)(nL, {
                                                      user: p,
                                                      guildId: l,
                                                      disabled: v || j,
                                                      variant: I ? "square" : "full-height-bar",
                                                  }),
                                                  I && (0, t.jsx)(nz, { user: p, guildId: l, disabled: v || j }),
                                              ],
                                          }),
                                          "end" === L && w,
                                      ],
                                  }),
                              }),
                              b && (0, t.jsx)(tT, { isDismissed: D }),
                          ],
                      }),
            ],
        }),
    });
}
var tO = n(982599),
    tM = n(347805),
    tw = n(629403),
    tL = n(612630),
    t_ = n(260598);
function tG(e) {
    let {
            isEditing: l,
            committedValue: n,
            editedValue: r,
            setEditedValue: a,
            editButtonRef: s,
            handleStartEditing: o,
            wrapperRef: d,
            onBlur: u,
            onContainerKeyDown: c,
            inputRef: g,
            onInputKeyDown: f,
            preview: m,
            placeholder: p,
            editButtonAriaLabel: x,
            label: v,
            maxLength: h,
            rows: A,
            disabled: b = !1,
            error: j,
            className: I,
        } = e,
        C = null != h && (l ? r : n).length > h ? eK.intl.formatToPlainString(eK.t.ICT5S6, { maxLength: h }) : void 0,
        y = l && r !== n,
        N = C ?? (y ? void 0 : j),
        E = i.useCallback((e) => {
            let l = e.currentTarget;
            l.setSelectionRange(l.value.length, l.value.length);
        }, []);
    return (0, t.jsx)(e4, {
        isEditing: l,
        preview: m,
        placeholder: p,
        editButtonRef: s,
        editButtonAriaLabel: x,
        onStartEditing: o,
        variant: "multiline",
        disabled: b,
        className: I,
        wrapperRef: d,
        onBlur: u,
        onKeyDown: c,
        previewErrorMessage: N,
        input: (0, t.jsx)(t_.f, {
            label: v,
            hideLabel: !0,
            inputRef: g,
            value: r,
            onChange: a,
            onFocus: E,
            onKeyDown: f,
            maxLength: h,
            error: N,
            placeholder: p,
            rows: A,
            disabled: b,
            autosize: !0,
        }),
    });
}
var tV = n(673451);
function tU(e) {
    let { userId: l, className: n, autoFocus: r = !1, onUpdate: a } = e,
        o = (0, s.bG)([G.A], () => G.A.hidePersonalInformation),
        { loading: d, note: u } = (0, tL.A)(l),
        [c, g] = i.useState(),
        [f, m] = i.useState(),
        p = c ?? u,
        x = i.useCallback(
            async (e) => {
                if ((u ?? "") !== e) {
                    m(void 0), g(e), a?.();
                    try {
                        await tw.A.updateNote(l, e);
                    } catch {
                        m(eK.intl.string(eK.t.F8FvUy));
                    }
                }
            },
            [l, u, a],
        ),
        v = d && null == p,
        h = e8({ value: p ?? "", onCommit: x, disabled: v }),
        { handleStartEditing: A } = h,
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
            ? (0, t.jsx)(eN.E, { variant: "text-sm/normal", color: "text-default", className: tV.t, children: p })
            : null;
    return (0, t.jsx)(tG, {
        ...h,
        className: n,
        preview: j,
        editButtonAriaLabel: eK.intl.string(eK.t.PbMNh2),
        label: eK.intl.string(eK.t.PbMNh2),
        placeholder: v ? eK.intl.string(eK.t["WLKx/9"]) : eK.intl.string(eK.t.VBhOe2),
        maxLength: Y.T7x,
        rows: 3,
        disabled: v,
        error: f,
    });
}
var tF = n(83013),
    tB = n(518477),
    tz = n(77085);
function tH(e) {
    let { userId: l } = e,
        n = (0, eA.g)(),
        { trackUserProfileAction: i } = (0, F.NJ)(),
        r = (0, H.X)("UserProfileModalV2NotesSection"),
        a = r ? tU : tM.A;
    return (0, t.jsx)(tF.A, {
        heading: eK.intl.string(eK.t["mQKv+v"]),
        scrollTargetId: tB.bk.NOTE,
        children: (0, t.jsx)(a, {
            userId: l,
            className: r ? tz.N : tz.w,
            autoFocus: n === tB.bk.NOTE,
            onUpdate: () => i({ action: "SET_NOTE" }),
        }),
    });
}
var tW = n(123292),
    tK = n(921701),
    tX = n(861173);
function tq(e) {
    let { icon: l, message: n, actionLabel: r, onAction: s, actionDisabled: o, type: d, autoFocus: u } = e,
        c = i.useRef(null);
    return (
        i.useEffect(() => {
            u && c.current?.focus();
        }, [u]),
        (0, t.jsx)("div", {
            className: tK.kL,
            children: (0, t.jsxs)("div", {
                className: a()(tX.oR, tK.Qs),
                "data-type": d,
                children: [
                    (0, t.jsx)("div", { className: tK.Kk, children: l }),
                    (0, t.jsx)(eN.E, { color: "text-strong", variant: "text-sm/semibold", children: n }),
                    null != r &&
                        null != s &&
                        (0, t.jsx)("div", {
                            className: tK.hP,
                            children: (0, t.jsx)(tW.Q, {
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
var tY = n(765178),
    tZ = n(346055),
    t$ = n(289873),
    tJ = n(984180);
function tQ(e) {
    let { showScrim: l, showLoadingSpinner: n, className: r, children: s } = e;
    i.useEffect(() => {
        n && tY.O.announce(eK.intl.string(eK.t["QR+vBP"]));
    }, [n]);
    let o = i.useRef(null);
    return (
        (0, tZ.f)(o, l),
        (0, t.jsxs)(t.Fragment, {
            children: [
                (0, t.jsx)("div", {
                    className: a()(tJ.f, l && tJ.z),
                    children: n && (0, t.jsx)(t$.y, { type: t$.t.SPINNING_CIRCLE_SIMPLE, animated: !0 }),
                }),
                (0, t.jsx)("div", { ref: o, "aria-hidden": l || void 0, className: r, children: s }),
            ],
        })
    );
}
var t0 = n(568602),
    t1 = n(625494);
function t7(e) {
    let { children: l } = e,
        [n, r] = i.useState(!1);
    return (
        i.useEffect(() => {
            function e() {
                r(!0),
                    setTimeout(() => {
                        r(!1);
                    }, 300);
            }
            return (
                t1._.subscribe(Y.jej.SHAKE_PROFILE_MODAL, e),
                () => {
                    t1._.unsubscribe(Y.jej.SHAKE_PROFILE_MODAL, e);
                }
            );
        }, []),
        (0, t.jsx)(t0.b, { isShaking: n, intensity: 1.4, children: l })
    );
}
var t2 = n(515054),
    t3 = n(933832),
    t5 = n(972213),
    t8 = n(97483),
    t9 = n(606758);
let t6 = {
        [tB.jM.WIDGET_ADDED]: {
            message: eK.intl.string(eK.t.fFP1Uy),
            icon: (0, t.jsx)(t3.A, { size: "sm", color: x.A.colors.STATUS_POSITIVE.css }),
        },
        [tB.jM.WIDGET_REMOVED]: {
            message: eK.intl.string(eK.t.zzsK7h),
            icon: (0, t.jsx)(t3.A, { size: "sm", color: x.A.colors.STATUS_POSITIVE.css }),
        },
        [tB.jM.PROFILE_SAVE_GENERIC_FAILURE]: {
            message: eK.intl.string(eK.t["84MExs"]),
            icon: (0, t.jsx)(t5.d, { size: "sm", color: x.A.colors.ICON_FEEDBACK_CRITICAL }),
            type: t8.Ck.FAILURE,
        },
        [tB.jM.SOMETHING_WENT_WRONG]: {
            message: eK.intl.string(eK.t.F8FvUy),
            icon: (0, t.jsx)(t5.d, { size: "sm", color: x.A.colors.ICON_FEEDBACK_CRITICAL }),
            type: t8.Ck.FAILURE,
        },
    },
    t4 = (e) => {
        let { className: l } = e,
            n = (0, t9.fu)(),
            r = (0, s.bG)([e3.Ay], () => e3.Ay.useReducedMotion),
            [a, o] = i.useState(!1),
            [u, c] = i.useState(null);
        i.useEffect(() => {
            null !== n ? (o(!0), c(t6[n]), tY.O.announce(t6[n].message)) : o(!1);
        }, [n]);
        let g = (0, d.p)(
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
            i.useEffect(() => () => (0, t9.XA)(null), []),
            i.useEffect(() => {
                if (a) {
                    let e = setTimeout(() => {
                        (0, t9.XA)(null);
                    }, 2e3);
                    return () => clearTimeout(e);
                }
            }, [a]),
            (0, t.jsx)(t.Fragment, {
                children: g(
                    (e, n) =>
                        n &&
                        null !== u &&
                        (0, t.jsx)(lG.animated.div, { className: l, style: e, children: (0, t.jsx)(tq, { ...u }) }),
                ),
            })
        );
    };
var ie = n(297413),
    il = n(878555),
    it = n(576705),
    ii = n(292666);
function ir(e) {
    let { isEditing: l, inputRef: n, ...t } = e8(e);
    return (
        i.useEffect(() => {
            l && null != n.current && n.current.setSelectionRange(n.current.value.length, n.current.value.length);
        }, [l, n]),
        { isEditing: l, inputRef: n, ...t }
    );
}
function ia(e) {
    let {
        inputRef: l,
        label: n,
        value: i,
        onChange: r,
        onKeyDown: a,
        onBlur: s,
        maxLength: o,
        placeholder: d,
        trailing: u,
        error: c,
        helperText: g,
    } = e;
    return (0, t.jsx)(ii.k, {
        label: n,
        hideLabel: !0,
        inputRef: l,
        value: i,
        onChange: r,
        onBlur: s,
        onKeyDown: a,
        maxLength: o,
        placeholder: d,
        trailing: u,
        error: c,
        helperText: g,
    });
}
function is(e) {
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
            preview: f,
            placeholder: m,
            editButtonAriaLabel: p,
            label: x,
            size: v = "default",
            maxLength: h,
            error: A,
            warning: b,
            trailing: j,
            className: I,
            disabled: C = !1,
        } = e,
        y =
            (null != h && (l ? i : n).length > h
                ? eK.intl.formatToPlainString(eK.t.ICT5S6, { maxLength: h })
                : void 0) ?? A,
        N = "compact" === v ? { variant: "compact" } : { variant: "default", trailing: j };
    return (0, t.jsx)(e4, {
        ...N,
        isEditing: l,
        preview: f,
        placeholder: m,
        editButtonRef: a,
        editButtonAriaLabel: p,
        onStartEditing: s,
        className: I,
        wrapperRef: o,
        onBlur: d,
        onKeyDown: u,
        disabled: C,
        input: (0, t.jsx)(ia, {
            inputRef: c,
            label: x,
            value: i,
            onChange: r,
            onKeyDown: g,
            maxLength: h,
            placeholder: m,
            trailing: j,
            error: y,
            helperText: b,
        }),
        previewErrorMessage: y,
        previewWarningMessage: b,
    });
}
var io = n(35783);
function id(e) {
    return null == e || "" === e ? void 0 : e;
}
function iu(e) {
    let l,
        n,
        r,
        a,
        o,
        d,
        u,
        c,
        g,
        f,
        m,
        { user: p, displayProfile: v } = e,
        { analyticsLocations: h } = (0, I.Ay)(),
        A = v?.guildId != null,
        b = v?.guildId ?? void 0,
        j = eQ.Ay.canUsePremiumProfileCustomization(p),
        { canChangeDisplayName: C, permissionsLoaded: y } = (0, s.cf)([it.A, L.A], () => {
            if (!A || null == b) return { canChangeDisplayName: !0, permissionsLoaded: !0 };
            let e = L.A.getGuild(b);
            return null == e
                ? { canChangeDisplayName: !1, permissionsLoaded: !1 }
                : {
                      canChangeDisplayName: it.A.can(Y.xBc.CHANGE_NICKNAME, e) || it.A.can(Y.xBc.MANAGE_NICKNAMES, e),
                      permissionsLoaded: !0,
                  };
        }),
        {
            value: N,
            previewValue: E,
            onCommit: P,
        } = ((n = null != (l = v?.guildId ?? null)),
        (r = (0, s.bG)([eg.default], () => eg.default.getCurrentUser()?.globalName ?? null)),
        (a = (0, s.bG)([ec.Ay], () => (null != l ? (ec.Ay.getMember(l, p.id)?.nick ?? null) : null))),
        (o = (0, s.bG)([ef.A], () => ef.A.getPendingChanges(null).pendingGlobalName)),
        (d = (0, s.bG)([ef.A], () => ef.A.getPendingChanges(l).pendingNickname)),
        (g = (c = void 0 !== (u = n ? d : o) ? u : n ? a : r) ?? ""),
        (f = id(c) ?? id(r) ?? p.username),
        (m = id(c) ?? p.username),
        {
            value: g,
            previewValue: n ? f : m,
            onCommit: i.useCallback(
                (e) => {
                    n ? (0, e0.p)({ nickname: e.trim(), guildId: l ?? void 0 }) : (0, e0.p)({ globalName: e.trim() });
                },
                [n, l],
            ),
        }),
        k = ir({ value: N, onCommit: P, disabled: !C }),
        { isEditing: S, handleCommit: R } = k,
        T = (0, s.bG)([ef.A], () => ef.A.getErrors(b ?? null)),
        D = (0, eJ.EC)(b ?? null),
        O = A ? T.nick?.[0] : T.global_name?.[0],
        M = D?.nick?.[0],
        w = (0, s.bG)([ef.A], () => ef.A.getPendingChanges(b ?? null).pendingDisplayNameStyles),
        _ = eK.intl.string(A ? eK.t.mq6Cg9 : eK.t.XuZU7A),
        G = A ? eK.intl.string(eK.t.YcDKr8) : p.username,
        V = eK.intl.string(A ? eK.t["g7OSZ/"] : eK.t.kyfzzc),
        U = i.useRef(null),
        F = i.useCallback(
            (e) => {
                e.stopPropagation(),
                    S && R(),
                    (0, nc.L)({ analyticsLocations: h, guildId: b, stackingBehavior: "stack", returnRef: U });
            },
            [S, R, h, b],
        ),
        B = {
            icon: lV.V,
            tooltip: eK.intl.string(eK.t.lqKKI2),
            "aria-label": eK.intl.string(eK.t["Wkg/CF"]),
            "aria-haspopup": "dialog",
            onClick: F,
            buttonRef: U,
        },
        z =
            A && !C && y
                ? (0, t.jsx)(e2.m, {
                      text: eK.intl.string(eK.t.gzjxQi),
                      children: (0, t.jsx)(eG.D, {
                          tag: "span",
                          className: io.C,
                          children: (0, t.jsx)(lK.X, {
                              size: "refresh_sm",
                              color: x.A.colors.ICON_SUBTLE,
                              "aria-label": eK.intl.string(eK.t.VPu695),
                          }),
                      }),
                  })
                : null,
        H =
            null != E
                ? (0, t.jsx)(il.c$, {
                      user: p,
                      guildId: b,
                      displayName: E,
                      size: "lg",
                      pendingDisplayNameStyles: w,
                      className: io.d,
                      displayNameTrailing: z,
                  })
                : null;
    return (0, t.jsx)(is, {
        ...k,
        preview: H,
        placeholder: G,
        editButtonAriaLabel: V,
        label: _,
        maxLength: Y.zzC,
        trailing: C && j ? B : void 0,
        error: O,
        warning: M,
        disabled: !C,
    });
}
var ic = n(469432);
function ig(e) {
    let l,
        n,
        r,
        o,
        d,
        { displayProfile: u } = e,
        {
            value: c,
            previewValue: g,
            onCommit: f,
        } = ((l = u?.guildId ?? null),
        (n = u?.guildId != null),
        (r = (0, s.bG)([ef.A], () => ef.A.getPendingChanges(l).pendingPronouns)),
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
        m = ir({ value: c, onCommit: f }),
        { isEditing: p } = m,
        x = u?.guildId != null,
        v = null != g && g.length > 0,
        h = eK.intl.string(x ? eK.t.AXiE0i : eK.t["76Aqhl"]);
    return (0, t.jsx)(is, {
        ...m,
        size: "compact",
        className: a()(ic.k, p && ic.J),
        preview: v ? (0, t.jsx)(il.n2, { pronouns: g }) : null,
        editButtonAriaLabel: eK.intl.string(eK.t.h6VAO7),
        label: eK.intl.string(eK.t["rniRE+"]),
        placeholder: h,
        maxLength: Y.VE5,
    });
}
var im = n(145497),
    ip = n(685073),
    ix = n(318785),
    iv = n(534400),
    ih = n(743981),
    iA = n(724637),
    ib = n(329296);
let ij = "no-server-tag";
function iI(e) {
    let { buttonRef: l, guildId: n, guildTag: i, guildBadge: r, ...s } = e,
        o = null == i || null == n;
    return (0, t.jsx)(eG.D, {
        innerRef: l,
        className: a()(iA.L5, { [iA.wK]: o }),
        ...s,
        children: (0, t.jsxs)(eN.E, {
            variant: o ? "text-xs/normal" : "text-xs/semibold",
            color: o ? "input-placeholder-text-default" : "text-default",
            className: iA.W3,
            tag: "span",
            children: [
                o
                    ? eK.intl.string(eK.t.Pdd1nd)
                    : (0, t.jsxs)(t.Fragment, {
                          children: [
                              (0, t.jsx)(
                                  iv.Z9,
                                  {
                                      src: (0, ip.gC)(n, r, ih.Sl.SIZE_14),
                                      size: ih.Sl.SIZE_14,
                                      className: iA.Ap,
                                      "aria-hidden": !0,
                                  },
                                  (0, ip.gC)(n, r, ih.Sl.SIZE_14) ?? n,
                              ),
                              i,
                          ],
                      }),
                (0, t.jsx)(n8.a, { size: "xs", color: "currentColor", className: iA.u4 }),
            ],
        }),
    });
}
function iC() {
    let e = (0, ix.b)(),
        l = i.useMemo(() => new Map(e.map((e) => [e.id, e])), [e]),
        n = (0, s.bG)([eg.default], () => {
            let e = eg.default.getCurrentUser();
            return (0, ip.Zo)(e?.primaryGuild).guildId ?? null;
        }),
        r = (0, s.bG)([ef.A], () => ef.A.getPendingChanges(null).pendingPrimaryGuildId),
        a = void 0 !== r ? r : n,
        o = null != a ? (l.get(a) ?? null) : null,
        d = o?.profile?.tag ?? null,
        u = o?.profile?.badge ?? void 0,
        c = i.useCallback(
            (e) =>
                e.id === ij
                    ? (0, t.jsx)("div", {
                          className: ib.uN,
                          children: (0, t.jsx)(eN.E, {
                              variant: "text-md/normal",
                              color: "input-placeholder-text-default",
                              className: iA.ve,
                              children: e.label,
                          }),
                      })
                    : (0, t.jsx)(tn.c, { ...e }),
            [],
        ),
        g = i.useMemo(
            () => [
                { id: ij, label: eK.intl.string(eK.t.VxdWWH), value: null },
                ...e.flatMap((e) => {
                    let l = e.profile?.tag;
                    if (null == l) return [];
                    let n = e.profile?.badge ?? void 0;
                    return [
                        {
                            id: e.id,
                            label: e.name,
                            value: e.id,
                            leading: (0, t.jsx)(im.j, {
                                guildId: e.id,
                                guildName: e.name,
                                guildIcon: e.icon,
                                iconSize: 20,
                                animate: !1,
                            }),
                            trailing: (0, t.jsx)(iv.o9, { guildId: e.id, guildTag: l, guildBadge: n }),
                        },
                    ];
                }),
            ],
            [e],
        ),
        f = i.useCallback((e) => {
            (0, e0.p)({ primaryGuildId: e });
        }, []);
    return 0 === e.length
        ? null
        : (0, t.jsx)(to, {
              options: g,
              value: a,
              onSelectionChange: f,
              label: eK.intl.string(eK.t.Pdd1nd),
              listboxClassName: iA.yt,
              renderListItem: c,
              children: (e) => {
                  let { buttonRef: l, selectButtonProps: n } = e;
                  return (0, t.jsx)(iI, { buttonRef: l, guildId: a, guildTag: d, guildBadge: u, ...n });
              },
          });
}
var iy = n(874644);
function iN(e) {
    let { user: l, displayProfile: n, nickname: i, trailing: r, onClose: s, allowEditing: o } = e;
    if (!o)
        return (0, t.jsx)(il.Ay, {
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
        : (0, t.jsx)(ie.A, {
              user: l,
              forceUsername: !0,
              className: iy.a1,
              usernameClass: iy.eb,
              discriminatorClass: iy.sw,
              hideBotTag: !0,
          });
    return (0, t.jsxs)("div", {
        children: [
            (0, t.jsx)(iu, { displayProfile: n, user: l }),
            (0, t.jsxs)("div", {
                className: a()(iy.AK, iy.j6),
                children: [d, (0, t.jsx)(il.Ce, {}), (0, t.jsx)(ig, { displayProfile: n }), (0, t.jsx)(iC, {}), r],
            }),
        ],
    });
}
var iE = n(97808),
    iP = n(980707),
    ik = n(477782),
    iS = n(22231),
    iR = n(601255),
    iT = n(562819),
    iD = n(19575),
    iO = n(106106),
    iM = n(338165);
let iw = iD.Ay.getEnableHardwareAcceleration() ? iE.Js : iE.eu;
function iL(e) {
    let { onMenuClose: l, items: n, ...i } = e;
    return (0, t.jsx)(iP.W, {
        ...i,
        "data-menu-migrated": !0,
        navId: "avatar-edit-context",
        onClose: l,
        onSelect: l,
        "aria-label": eK.intl.string(eK.t.YAgq3W),
        children: (0, t.jsx)(ik.rX, { children: n }),
    });
}
function i_(e) {
    let { user: l, guildId: n } = e,
        { avatarProps: r, eventHandlers: o } = (0, ej.V)(e),
        [d, u] = i.useState(!1),
        c = i.useRef(null),
        g = i.useCallback(() => u(!1), []),
        f = (function (e) {
            let { user: l, guildId: n, onClose: r } = e,
                { newestAnalyticsLocation: a, analyticsLocations: o } = (0, I.Ay)(),
                d = null != n,
                u = (0, s.bG)([ec.Ay], () => (null != n ? ec.Ay.getMember(n, l.id) : null)),
                c = (0, s.bG)([ef.A], () => ef.A.getPendingChanges(n ?? void 0).pendingAvatar),
                g = d ? u?.avatar : l.avatar,
                f = (0, ed.z5)(c, g),
                m = d && null != l.avatar,
                p = eQ.Ay.canUsePremiumProfileCustomization(l),
                x = p || null == n,
                v = p || null == n,
                h = (0, s.bG)([L.A], () => (null != n ? L.A.getGuild(n) : null)),
                A = (0, ed.a4)({ user: l }),
                b = (0, ed.a4)({ user: l, guildId: n ?? void 0 }),
                { pendingAvatarDecoration: j } = (0, ed.CP)(n ?? void 0),
                C = void 0 !== j,
                y = null != (0, iR.A)(C ? j : b) && (C ? null != j : null != b),
                N = d && null != A,
                E = i.useCallback(() => {
                    r(),
                        (0, l$.XD)({
                            uploadType: nl.HL.AVATAR,
                            analyticsSource: a,
                            guildId: n ?? void 0,
                            stackingBehavior: "stack",
                        });
                }, [r, a, n]),
                P = i.useCallback(() => {
                    r(), (0, iT.L)({ analyticsLocations: o, guild: h ?? void 0, stackingBehavior: "stack" });
                }, [r, o, h]),
                k = i.useCallback(() => {
                    r(),
                        (0, l$.rM)(null, g, (e) => (0, e0.p)({ guildId: n ?? void 0, avatar: e })),
                        (0, ed.WU)(m ? "reset" : "remove");
                }, [r, n, g, m]),
                S = i.useCallback(() => {
                    r(), (0, e0.p)({ guildId: n ?? void 0, avatarDecoration: null });
                }, [r, n]);
            return i.useMemo(() => {
                let e = [];
                return (
                    x &&
                        e.push(
                            (0, t.jsx)(
                                ik.Dr,
                                { id: "change-avatar", label: eK.intl.string(eK.t["4OynCD"]), action: E },
                                "change-avatar",
                            ),
                        ),
                    v &&
                        e.push(
                            (0, t.jsx)(
                                ik.Dr,
                                { id: "change-decoration", label: eK.intl.string(eK.t.HykynS), action: P },
                                "change-decoration",
                            ),
                        ),
                    x &&
                        f &&
                        e.push(
                            m
                                ? (0, t.jsx)(
                                      ik.Dr,
                                      {
                                          id: "reset-avatar",
                                          color: "danger",
                                          label: eK.intl.string(eK.t.TDjKDm),
                                          action: k,
                                      },
                                      "reset-avatar",
                                  )
                                : (0, t.jsx)(
                                      ik.Dr,
                                      {
                                          id: "remove-avatar",
                                          color: "danger",
                                          label: eK.intl.string(eK.t.twB3fz),
                                          action: k,
                                      },
                                      "remove-avatar",
                                  ),
                        ),
                    v &&
                        y &&
                        e.push(
                            N
                                ? (0, t.jsx)(
                                      ik.Dr,
                                      {
                                          id: "reset-decoration",
                                          color: "danger",
                                          label: eK.intl.string(eK.t["2u5yu0"]),
                                          action: S,
                                      },
                                      "reset-decoration",
                                  )
                                : (0, t.jsx)(
                                      ik.Dr,
                                      {
                                          id: "remove-decoration",
                                          color: "danger",
                                          label: eK.intl.string(eK.t["9rx5GO"]),
                                          action: S,
                                      },
                                      "remove-decoration",
                                  ),
                        ),
                    e
                );
            }, [m, x, v, N, f, y, E, P, k, S]);
        })({ user: l, guildId: n, onClose: g });
    return 0 === f.length
        ? (0, t.jsx)(ej.A, { ...e })
        : (0, t.jsxs)("div", {
              ...o,
              className: a()(iO.my, iO.vk, iM.kL, { [iM.MO]: d }),
              onMouseDown: (e) => {
                  c.current?.contains(e.target) || u(!0);
              },
              children: [
                  (0, t.jsx)(iw, { ...r, imageClassName: a()(iO.Lw, iM.HU) }),
                  (0, t.jsx)(l5.Y, {
                      targetElementRef: c,
                      shouldShow: d,
                      animation: l5.Y.Animation.NONE,
                      position: "right",
                      align: "top",
                      onRequestClose: g,
                      renderPopout: (e) => (0, t.jsx)(iL, { ...e, items: f, onMenuClose: g }),
                      children: (e) =>
                          (0, t.jsx)("div", {
                              ref: c,
                              className: iM.r9,
                              children: (0, t.jsx)(lU.K, {
                                  ...e,
                                  variant: "overlay-secondary",
                                  size: "sm",
                                  icon: iS.R,
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
var iG = n(976726);
function iV(e) {
    let { onMenuClose: l, items: n, ...i } = e;
    return (0, t.jsx)(iP.W, {
        ...i,
        "data-menu-migrated": !0,
        navId: "banner-edit-context",
        onClose: l,
        onSelect: l,
        "aria-label": eK.intl.string(eK.t.FzU73A),
        children: (0, t.jsx)(ik.rX, { children: n }),
    });
}
function iU(e) {
    let { user: l, guildId: n } = e,
        [r, o] = i.useState(!1),
        d = i.useRef(null),
        u = i.useCallback(() => o(!1), []),
        c = (function (e) {
            let { user: l, guildId: n, onClose: r } = e,
                { newestAnalyticsLocation: a, analyticsLocations: o } = (0, I.Ay)(),
                d = (0, ed.N2)({ user: l, guildId: n ?? void 0 }),
                u = (0, ed.Xf)({ user: l, guildId: n ?? void 0 }),
                c = (0, ed.Xf)({ user: l, guildId: void 0 }),
                g = (0, lY.sk)("UserProfileModalV2EditableBanner"),
                f = eQ.Ay.canUsePremiumProfileCustomization(l),
                m = null == n,
                p = m || f,
                x = g && (m || f),
                v = null != n,
                {
                    pendingBanner: h,
                    pendingProfileEffect: A,
                    pendingProfileFrame: b,
                } = (0, s.bG)([ef.A], () => ef.A.getPendingChanges(n ?? void 0)),
                j = (0, s.bG)([z.A], () =>
                    null != n ? z.A.getGuildMemberProfile(l.id, n)?.banner : z.A.getUserProfile(l.id)?.banner,
                ),
                C = (0, s.bG)([eg.default], () => eg.default.getCurrentUser()?.banner != null),
                y = (0, s.bG)([z.A], () => z.A.getUserProfile(l.id)?.profileEffect != null),
                E = (0, s.bG)([z.A], () => z.A.getUserProfile(l.id)?.profileFrame != null),
                P = (0, ed.Ac)(h, j),
                k = v && C,
                S = v && y,
                R = v && E,
                T = void 0 === A ? null != d : null != A,
                D = void 0 === b ? null != u : null != b,
                O = (0, ed.lw)({
                    pendingValue: b,
                    userValue: c,
                    guildValue: null != n ? u : void 0,
                    guildId: n ?? void 0,
                }),
                M = (0, N.A)(O?.skuId, "UserProfileModalV2EditableBanner"),
                w = i.useCallback(() => {
                    r(),
                        (0, l$.XD)({
                            uploadType: nl.HL.BANNER,
                            analyticsSource: a,
                            guildId: n ?? void 0,
                            stackingBehavior: "stack",
                        });
                }, [r, a, n]),
                _ = i.useCallback(() => {
                    r(),
                        (0, nj.W)({
                            analyticsLocations: o,
                            guild: null != n ? (L.A.getGuild(n) ?? void 0) : void 0,
                            initialSelectedEffect: d,
                            stackingBehavior: "stack",
                        });
                }, [r, o, n, d]),
                G = i.useCallback(() => {
                    r(), (0, l$.rM)(null, j, (e) => (0, e0.p)({ guildId: n ?? void 0, banner: e }));
                }, [r, n, j]),
                V = i.useCallback(() => {
                    r(), (0, e0.p)({ guildId: n ?? void 0, profileEffect: null });
                }, [r, n]),
                U = i.useCallback(() => {
                    r(),
                        (0, n_.w)({
                            analyticsLocations: o,
                            guild: null != n ? (L.A.getGuild(n) ?? void 0) : void 0,
                            initialSelectedProfileFrame: M,
                            stackingBehavior: "stack",
                        });
                }, [r, o, n, M]),
                F = i.useCallback(() => {
                    r(), (0, e0.p)({ guildId: n ?? void 0, profileFrame: null });
                }, [r, n]);
            return i.useMemo(() => {
                let e = [];
                return (
                    f &&
                        e.push(
                            (0, t.jsx)(
                                ik.Dr,
                                { id: "change-banner", label: eK.intl.string(eK.t.N0bC3P), action: w },
                                "change-banner",
                            ),
                        ),
                    p &&
                        e.push(
                            (0, t.jsx)(
                                ik.Dr,
                                { id: "change-effect", label: eK.intl.string(eK.t["/6nv6N"]), action: _ },
                                "change-effect",
                            ),
                        ),
                    x &&
                        e.push(
                            (0, t.jsx)(
                                ik.Dr,
                                { id: "change-frame", label: eK.intl.string(eK.t["oTSa/q"]), action: U },
                                "change-frame",
                            ),
                        ),
                    f &&
                        P &&
                        e.push(
                            k
                                ? (0, t.jsx)(
                                      ik.Dr,
                                      {
                                          id: "reset-banner",
                                          color: "danger",
                                          label: eK.intl.string(eK.t.jHlJNS),
                                          action: G,
                                      },
                                      "reset-banner",
                                  )
                                : (0, t.jsx)(
                                      ik.Dr,
                                      {
                                          id: "remove-banner",
                                          color: "danger",
                                          label: eK.intl.string(eK.t.tT9n7D),
                                          action: G,
                                      },
                                      "remove-banner",
                                  ),
                        ),
                    p &&
                        T &&
                        e.push(
                            S
                                ? (0, t.jsx)(
                                      ik.Dr,
                                      {
                                          id: "reset-effect",
                                          color: "danger",
                                          label: eK.intl.string(eK.t.Lb7lu9),
                                          action: V,
                                      },
                                      "reset-effect",
                                  )
                                : (0, t.jsx)(
                                      ik.Dr,
                                      {
                                          id: "remove-effect",
                                          color: "danger",
                                          label: eK.intl.string(eK.t.zUOlT6),
                                          action: V,
                                      },
                                      "remove-effect",
                                  ),
                        ),
                    x &&
                        D &&
                        e.push(
                            R
                                ? (0, t.jsx)(
                                      ik.Dr,
                                      {
                                          id: "reset-frame",
                                          color: "danger",
                                          label: eK.intl.string(eK.t.A0pzWn),
                                          action: F,
                                      },
                                      "reset-frame",
                                  )
                                : (0, t.jsx)(
                                      ik.Dr,
                                      {
                                          id: "remove-frame",
                                          color: "danger",
                                          label: eK.intl.string(eK.t["8DfADq"]),
                                          action: F,
                                      },
                                      "remove-frame",
                                  ),
                        ),
                    e
                );
            }, [k, f, p, x, S, R, P, T, D, w, _, U, G, V, F]);
        })({ user: l, guildId: n, onClose: u });
    return 0 === c.length
        ? (0, t.jsx)(eC.A, { ...e })
        : (0, t.jsxs)("div", {
              className: a()(iG.kL, { [iG.MO]: r }),
              onMouseDown: (e) => {
                  d.current?.contains(e.target) || o(!0);
              },
              children: [
                  (0, t.jsx)(eC.A, { ...e, className: iG.Pr }),
                  (0, t.jsx)(l5.Y, {
                      targetElementRef: d,
                      shouldShow: r,
                      animation: l5.Y.Animation.NONE,
                      position: "right",
                      align: "top",
                      onRequestClose: u,
                      renderPopout: (e) => (0, t.jsx)(iV, { ...e, items: c, onMenuClose: u }),
                      children: (e) =>
                          (0, t.jsx)("div", {
                              ref: d,
                              className: iG.r9,
                              children: (0, t.jsx)(lU.K, {
                                  ...e,
                                  variant: "overlay-secondary",
                                  size: "sm",
                                  icon: iS.R,
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
var iF = n(777480),
    iB = n(107563),
    iz = n(570287);
n(938796);
var iH = n(913453),
    iW = n(667049),
    iK = n(837531),
    iX = n(186272),
    iq = n(645625),
    iY = n(337796);
let iZ = (e) => e * (2 - e),
    i$ = { "compact-sm": { avatarOffsetX: 16 }, "compact-xs": { avatarSize: o._3.SIZE_96, avatarOffsetX: 16 } };
function iJ(e) {
    let { type: l, anchor: n } = e;
    return "staple" !== l || "bottom" !== n;
}
function iQ(e) {
    let { displayProfile: l, pendingBanner: n } = e,
        r = (0, $.Nx)(),
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
        : (0, t.jsx)("div", { className: iq.backgroundImage, style: { backgroundImage: `url(${o})` } });
}
function i0(e) {
    let { displayProfile: l, profileEffectOverride: n, isHovering: r } = e,
        a = void 0 !== n ? n : l?.profileEffect,
        s = i.useSyncExternalStore(
            (e) => (ny.add(e), () => ny.delete(e)),
            () => nN,
        );
    return null == a ? null : (0, t.jsx)(C.A, { skuId: a.skuId, isHovering: r, restartKey: s });
}
function i1(e) {
    var l;
    let n,
        r,
        {
            user: o,
            currentUser: d,
            guildId: g,
            originGuildId: f,
            channelId: m,
            displayProfile: p,
            nickname: x,
            hasEntered: v,
            customStatusPrompt: h,
            onClose: b,
            avatarDecorationOverride: j,
            avatarOverride: I,
            bannerOverride: C,
            accentColorOverride: y,
            profileEffectOverride: N,
            profileFrame: E,
            fadeInProfileFrame: k,
            allowEditing: S,
            isLoading: w = !1,
        } = e,
        L = o.id === d.id,
        V = i.useRef(null),
        { isHoveringOrFocusing: F } = (0, R.A)(V),
        [B, z] = i.useState(),
        H = i.useCallback((e) => {
            let l = e.contentRect.width;
            l <= 350 ? z("compact-xs") : l <= 380 ? z("compact-sm") : z(void 0);
        }, []);
    (0, A.g)(V, H, [], { fireOnMount: !0 });
    let W = null != B ? i$[B] : void 0,
        Z = i.useMemo(() => h ?? (0, T.A)(), [h]),
        { relationshipType: $, originApplicationId: er } = (0, s.cf)([_.A], () => ({
            relationshipType: _.A.getRelationshipType(o.id),
            originApplicationId: _.A.getOriginApplicationId(o.id),
        })),
        ea =
            ((l = o.id),
            (n = (0, K.bG)([q.default], () => q.default.locale)),
            (r = (0, K.bG)([_.A], () => (_.A.getRelationshipType(l) === Y.eA$.FRIEND ? _.A.getSince(l) : null), [l])),
            (0, X.An)(r, n)),
        es = (0, s.bG)([G.A], () => G.A.hidePersonalInformation),
        eo = (0, O.q)({ userId: o.id }),
        ed = (0, D.fi)(o.id),
        { appIdentities: eu, connections: ec } = (function (e) {
            let { filteredAppIdentities: l } = (0, en.A)(e),
                n = (0, ei.A)(e),
                t = (0, ee.useIsRiotSocialSDKMigrationEnabled)({
                    location: "useVisibleUserProfileConnectionsAndAppIdentities",
                }),
                r = i.useMemo(() => new Set(t ? (l?.map((e) => e.application_id) ?? []) : []), [l, t]),
                a = (0, el.A)([...r]).filter(et.Vq);
            return {
                appIdentities: i.useMemo(
                    () =>
                        l
                            .map((e) => ({ identity: e, application: a.find((l) => l.id === e.application_id) }))
                            .filter((e) => {
                                let { application: l } = e;
                                return null != l;
                            }),
                    [l, a],
                ),
                connections: i.useMemo(
                    () =>
                        t
                            ? n.filter((e) => {
                                  let l = Q.A.get(e.type);
                                  return l?.replacedBy == null || !r.has(l.replacedBy);
                              })
                            : n,
                    [n, r, t],
                ),
            };
        })(o.id),
        eg = (0, J.A)(o.id),
        ef = ec.length > 0 || eu.length > 0,
        ep = eg.length > 0,
        ex = S ? iU : eC.A,
        ev = S ? i_ : ej.A;
    return (0, t.jsxs)("main", {
        className: a()(iq.profile, null != B && iq[B]),
        ref: V,
        "aria-busy": w,
        children: [
            (0, t.jsxs)("div", {
                className: iq.profileHeader,
                children: [
                    (0, t.jsx)("div", {
                        className: iq.profileHeaderBannerContainer,
                        children: (0, t.jsx)(ex, {
                            user: o,
                            displayProfile: p,
                            guildId: g,
                            themeType: em.d.MODAL_V2,
                            specOverrides: W,
                            pendingBanner: C,
                            pendingAccentColor: y,
                        }),
                    }),
                    (0, t.jsx)(ev, {
                        user: o,
                        displayProfile: p,
                        guildId: g,
                        channelId: m,
                        themeType: em.d.MODAL_V2,
                        specOverrides: W,
                        avatarDecorationOverride: j,
                        avatarOverride: I,
                    }),
                    (0, t.jsx)(ew.A, {
                        user: o,
                        guildId: g,
                        channelId: m,
                        themeType: em.d.MODAL_V2,
                        hasEntered: v,
                        prompt: L ? Z : null,
                    }),
                ],
            }),
            (0, t.jsxs)(u.Ip, {
                fade: !0,
                className: iq.profileBody,
                children: [
                    (0, t.jsx)(iN, {
                        user: o,
                        displayProfile: p,
                        nickname: x,
                        trailing: (0, t.jsx)(eI.A, { displayProfile: p, themeType: em.d.MODAL_V2, onClose: b }),
                        onClose: b,
                        allowEditing: S,
                    }),
                    $ === Y.eA$.PENDING_INCOMING &&
                        (0, t.jsx)(eM.A.Overlay, {
                            className: iq.profileOverlay,
                            children: (0, t.jsx)(ek.A, {
                                user: o,
                                applicationId: er,
                                guildId: p?.guildId ?? void 0,
                                channelId: m,
                                className: iq.profileBanner,
                            }),
                        }),
                    ed.map((e) => {
                        let { applicationId: l } = e;
                        return (0, t.jsx)(
                            eM.A.Overlay,
                            {
                                className: iq.profileOverlay,
                                children: (0, t.jsx)(ek.A, {
                                    user: o,
                                    guildId: p?.guildId ?? void 0,
                                    channelId: m,
                                    isGameRelationship: !0,
                                    applicationId: l,
                                    className: iq.profileBanner,
                                }),
                            },
                            l,
                        );
                    }),
                    o.isProvisional &&
                        (0, t.jsx)(eM.A.Overlay, {
                            className: iq.profileOverlay,
                            children: (0, t.jsx)(tF.A, {
                                heading: eK.intl.string(eK.t.Iyka0U),
                                headingVariant: "text-md/semibold",
                                headingIcon: (0, t.jsx)(c.E, { size: "xs", color: "currentColor" }),
                                className: iq.profileBanner,
                                children: (0, t.jsx)(M.T, { userId: o.id, variant: "text-sm/normal" }),
                            }),
                        }),
                    (0, t.jsx)(eO.A, { user: o, className: iq.profileBanner }),
                    p?.private &&
                        (0, t.jsx)(eM.A.Overlay, {
                            className: iq.profileOverlay,
                            children: (0, t.jsx)(eD.A, { username: x }),
                        }),
                    (0, t.jsx)("div", {
                        className: iq.profileButtons,
                        children: (0, t.jsx)(lh, {
                            user: o,
                            currentUser: d,
                            guildId: g,
                            originGuildId: f,
                            channelId: m,
                            displayProfile: p,
                            relationshipType: $,
                            onClose: b,
                        }),
                    }),
                    L && (0, t.jsx)(ey.A, { isPremiumUser: (0, U.ki)(d), onInteraction: b }),
                    !es && (0, t.jsx)(lr, { displayProfile: p, isEditable: S }),
                    eo.length > 0 &&
                        (0, t.jsx)(tF.A, {
                            heading: eK.intl.string(eK.t["Uv/eTx"]),
                            children: (0, t.jsx)(eP.A, { applicationIds: eo }),
                        }),
                    (0, t.jsx)(tF.A, {
                        heading: eK.intl.string(eK.t.a6XYD9),
                        children: (0, t.jsx)(eR.A, { userId: o.id, guildId: p?.guildId, tooltipDelay: tB.In }),
                    }),
                    null != ea &&
                        (0, t.jsx)(tF.A, {
                            heading: eK.intl.string(eK.t.wlTO8v),
                            children: (0, t.jsx)(eE, { friendsSinceDate: ea }),
                        }),
                    p?.guildId != null &&
                        (0, t.jsx)(eL.A, {
                            userId: o.id,
                            guildId: p.guildId,
                            className: iq.profileRolesSection,
                            headingVariant: "text-xs/medium",
                            headingColor: "text-subtle",
                        }),
                    !es &&
                        (S || ef) &&
                        (0, t.jsx)(tF.A, {
                            heading: eK.intl.string(eK.t["3fe7U5"]),
                            scrollTargetId: tB.bk.CONNECTIONS,
                            children: (0, t.jsx)(l_, {
                                applicationIdentities: eu,
                                connections: ec,
                                userId: o.id,
                                allowEditing: S,
                                className: iq.profileAppConnections,
                            }),
                        }),
                    !es &&
                        ep &&
                        (0, t.jsx)(tF.A, {
                            heading: eK.intl.string(eK.t.PHjkRE),
                            scrollTargetId: tB.bk.APPS,
                            children: (0, t.jsx)(eY, {
                                applicationRoleConnections: eg,
                                onClose: b,
                                className: iq.profileAppConnections,
                            }),
                        }),
                    (0, t.jsx)(tH, { userId: o.id }),
                ],
            }),
            (0, t.jsx)(i0, { displayProfile: p, profileEffectOverride: N, isHovering: F }),
            null != E && (0, t.jsx)(P.A, { frame: E, filterLayer: iJ, fadeIn: k }),
        ],
    });
}
function i7(e) {
    let { user: l, displayProfile: n, pendingThemeColors: i, children: r } = e,
        {
            theme: a,
            primaryColor: s,
            secondaryColor: o,
        } = (0, Z.A)({ user: l, displayProfile: n, pendingThemeColors: i }),
        { profileThemeStyle: d, profileThemeClassName: u } = (0, es.A)({
            theme: a,
            themeType: null,
            primaryColor: s,
            secondaryColor: o,
        });
    return (0, t.jsx)("div", { className: u, style: d, children: r });
}
function i2(e) {
    let {
            user: l,
            currentUser: n,
            guildId: r,
            originGuildId: o,
            channelId: u,
            messageId: c,
            roleId: A,
            sessionId: C,
            initialTabSection: P,
            initialScrollTarget: R,
            transitionState: T,
            customStatusPrompt: D,
            openedAt: O,
            onClose: M,
            sourceAnalyticsLocations: U = [],
            themeContainerClassName: K,
        } = e,
        X = l.id === n.id,
        {
            guildId: q,
            pendingGuildId: Y,
            isFetching: Z,
            handleSelectUserProfile: $,
            handleRetry: J,
            hasError: Q,
        } = (function (e) {
            let { userId: l, initialGuildId: n } = e,
                [t, r] = i.useState(n),
                [a, o] = i.useState(n),
                [d, u] = i.useState("idle"),
                [c, g] = i.useState(0),
                f = (0, s.bG)([z.A], () => z.A.getUserProfile(l)?.fetchError?.status ?? null, [l]),
                m = i.useCallback(() => {
                    u("retrying"), g((e) => e + 1);
                }, []),
                p = i.useCallback((e) => {
                    u("loading"), r(e ?? void 0);
                }, []);
            return (
                i.useEffect(() => {
                    let e = !1;
                    return (
                        (0, eo.A)(l, void 0, {
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
                    hasError: "retrying" === d || (null != f && "loading" !== d),
                    handleSelectUserProfile: p,
                    handleRetry: 404 !== f && 429 !== f ? m : void 0,
                }
            );
        })({ userId: l.id, initialGuildId: r }),
        ee = i.useMemo(() => (null != q ? { [q]: [l.id] } : {}), [q, l.id]);
    (0, b.Eq)(ee, "UserProfileModalV2");
    let el = (0, H.X)("UserProfileModalV2"),
        en = (0, s.bG)([G.A], () => G.A.hidePersonalInformation),
        et = (0, er.A)(l.id) && el,
        ei = (0, ea.W)(l.id),
        es = Q && !ei,
        ep = et && !en && !Q,
        {
            pendingThemeColors: eh,
            avatarDecorationOverride: ej,
            avatarOverride: eI,
            bannerOverride: eC,
            accentColorOverride: ey,
            profileEffectOverride: eN,
            profileFrameOverride: eE,
        } = (function (e) {
            let { userId: l, guildId: n, allowEditingInModal: t } = e;
            return (0, s.cf)([ef.A, eg.default, ec.Ay, z.A], () => {
                if (!t) return ev;
                let e = eg.default.getUser(l);
                if (null == e) return ev;
                let {
                        pendingThemeColors: i,
                        pendingAvatarDecoration: r,
                        pendingAvatar: a,
                        pendingBanner: s,
                        pendingAccentColor: o,
                        pendingProfileEffect: d,
                        pendingProfileFrame: u,
                    } = ef.A.getPendingChanges(n),
                    c = null != n ? ec.Ay.getMember(n, l) : null,
                    g = z.A.getUserProfile(l),
                    f = null != n ? z.A.getGuildMemberProfile(l, n) : null;
                return {
                    pendingThemeColors: i,
                    avatarDecorationOverride: (0, ed.us)({
                        userValue: e.avatarDecoration,
                        guildValue: c?.avatarDecoration,
                        pendingValue: r,
                        guildId: n,
                    }),
                    avatarOverride: (0, eu.V7)({ userId: l, image: a, size: ex }),
                    bannerOverride: s,
                    accentColorOverride: o,
                    profileEffectOverride: (0, ed.us)({
                        userValue: g?.profileEffect,
                        guildValue: f?.profileEffect,
                        pendingValue: d,
                        guildId: n,
                    }),
                    profileFrameOverride: (0, ed.us)({
                        userValue: g?.profileFrame,
                        guildValue: f?.profileFrame,
                        pendingValue: u,
                        guildId: n,
                    }),
                };
            }, [l, n, t]);
        })({ userId: l.id, allowEditingInModal: ep, guildId: q }),
        {
            isExpanded: eP,
            isAnimating: ek,
            transition: eR,
            handleExpand: eD,
            handleCollapse: eO,
            refs: { expandIconButtonRef: ew, expandTabButtonRef: eL, collapseButtonRef: e_ },
        } = (function () {
            let [e, l] = i.useState(() => window.innerWidth > 928),
                [n, t] = i.useState(!1),
                r = (0, d.p)(e, {
                    keys: (e) => (e ? "panel" : "empty"),
                    from: { progress: 0 },
                    enter: { progress: 1 },
                    leave: { progress: 0 },
                    config: { duration: 300, easing: iZ },
                    onRest: () => t(!1),
                }),
                a = (0, h.A)("(min-width: 929px) and (min-height: 550px)"),
                s = i.useRef(null),
                o = i.useRef(null),
                u = i.useRef(null),
                c = i.useRef(null),
                g = i.useCallback(() => {
                    (c.current = "collapse"), t(!0), l(!0);
                }, []),
                f = i.useCallback(() => {
                    (c.current = "expand"), t(!0), l(!1);
                }, []);
            return (
                i.useEffect(() => {
                    if (!n) {
                        if ("collapse" === c.current && e) (c.current = null), u.current?.focus();
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
                    handleCollapse: f,
                    refs: { expandIconButtonRef: s, expandTabButtonRef: o, collapseButtonRef: u },
                }
            );
        })(),
        eG = et && !eP,
        eV = et && (!eP || ek),
        { defaultWishlistId: eU } = (0, s.cf)([z.A], () => ({ defaultWishlistId: z.A.getFirstWishlistId(l.id) }));
    (0, w.fw)({ wishlistId: eU, userId: l.id });
    let eF = (0, eb.fC)(),
        eB = es && (!et || !Z),
        ez = et && Q,
        eH = Y !== q || ez || null != eF.interactionType,
        eW = (function (e) {
            let l,
                n,
                t,
                { user: i, currentUser: r } = e,
                { mutualFriendsCount: a, mutualGuilds: o } = (0, iH.A)(i),
                d = o?.length,
                u =
                    ((l = (0, s.bG)([eg.default], () => eg.default.getCurrentUser())),
                    (n = (0, s.bG)([z.A], () => z.A.getUserProfile(i.id))),
                    (t =
                        n?.bio === "" &&
                        n?.pronouns === "" &&
                        n?.banner === void 0 &&
                        n?.accentColor === void 0 &&
                        n?.banner === void 0 &&
                        i.flags === i.publicFlags &&
                        (n?.badges == null || n?.badges?.length === 0)),
                    l?.id !== i.id && !t),
                c = (0, iW.A)(i.id),
                g = (0, iz.A)(i.id),
                f = [],
                m = i.id === r?.id,
                p = (0, er.A)(i.id),
                x = z.A.getFirstWishlistId(i.id),
                v = null != x,
                h = v ? z.A.getWishlistSettings(i.id, x) : null,
                A = (v ? iB.A.getWishlistItems(x) : []).length > 0,
                b = c.length > 0;
            (p || b) && f.push({ text: eK.intl.string(eK.t.laViwx), section: tB.RP.WIDGETS }),
                f.push({ text: eK.intl.string(eK.t.chq59f), section: tB.RP.ACTIVITY });
            let j = !1 === i.nsfwAllowed,
                I = _.A.isFriend(i.id),
                C = h?.visibility === iF.a.PUBLIC;
            return (
                (m || (!m && A && C && g && (!j || (j && I)))) &&
                    f.push({ text: eK.intl.string(eK.t["7lZ31J"]), section: tB.RP.WISHLIST }),
                i.id !== r?.id &&
                    u &&
                    (f.push({ text: (0, iK.A)(a), section: tB.RP.MUTUAL_FRIENDS }),
                    f.push({ text: (0, iX.A)(d), section: tB.RP.MUTUAL_GUILDS })),
                f
            );
        })({ user: l, currentUser: n }),
        { analyticsLocations: eX } = (0, I.Ay)([...U, j.A.USER_PROFILE_MODAL_V2]),
        eq = (0, F.pb)({
            layout: "MODAL_V2",
            userId: l.id,
            sourceSessionId: C,
            guildId: q,
            channelId: u,
            messageId: c,
            roleId: A,
        }),
        eY = i.useCallback(() => {
            (0, B.Wn)({ analyticsLocations: eX, ...eq, action: tB.pt.SHOW_STYLES_PANEL }), eD();
        }, [eX, eq, eD]),
        eZ = i.useCallback(() => {
            (0, B.Wn)({ analyticsLocations: eX, ...eq, action: tB.pt.HIDE_STYLES_PANEL }), eO();
        }, [eX, eq, eO]),
        e$ = (0, W.Ay)(l.id, q),
        eJ = void 0 !== eE ? eE?.skuId : e$?.profileFrame?.skuId,
        eQ = (0, N.A)(eJ, "UserProfileModalV2"),
        e0 = (0, y.A)(eJ),
        { profileFrameStyle: e1, profileFrameClassName: e7 } = (0, k.A)(eJ);
    (0, E.A)({ skuId: e$?.profileFrame?.skuId, openedAt: O, context: eq, analyticsLocations: eX });
    let e2 = V.Ay.useName(e$?.guildId, u, l),
        e3 = (0, S.GV)(),
        e5 = (0, s.bG)([L.A], () => (null != q ? L.A.getGuild(q) : null)),
        e8 = X
            ? null != e5
                ? eK.intl.formatToPlainString(eK.t.M7OhOF, { guildName: e5.name })
                : eK.intl.string(eK.t.egQPgM)
            : eK.intl.format(eK.t.KRe1Fk, { name: e2 });
    return (0, t.jsx)(I.f5, {
        value: eX,
        children: (0, t.jsx)(F.of, {
            value: eq,
            openedAt: O,
            fetchStartedAt: e$?.fetchStartedAt,
            fetchEndedAt: e$?.fetchEndedAt,
            isLoaded: e$?.isLoaded,
            children: (0, t.jsx)(eb.Hl, {
                value: eF,
                children: (0, t.jsx)(eA.N, {
                    value: R,
                    children: (0, t.jsxs)(g.EO, {
                        "data-migration-pending": !0,
                        hideShadow: !0,
                        className: a()(iY.zr, { [iY.QF]: e$?.private === !0 }),
                        transitionState: T,
                        "aria-labelledby": e3,
                        parentComponent: "UserProfileModalV2",
                        children: [
                            (0, t.jsx)(t7, {
                                children: (0, t.jsxs)("div", {
                                    className: a()(iq.layoutContainer, e7, {
                                        [iq.editingPanelEnabled]: et,
                                        [iq.editingPanelExpanded]: et && eP,
                                        [iq.isAnimating]: ek,
                                    }),
                                    style: e1,
                                    children: [
                                        (0, t.jsxs)(i7, {
                                            user: l,
                                            displayProfile: e$,
                                            pendingThemeColors: eh,
                                            children: [
                                                (0, t.jsxs)("div", {
                                                    className: iY.Oo,
                                                    children: [
                                                        (0, t.jsx)(lA.A, { isCurrentUser: X, onClose: M }),
                                                        (0, t.jsx)(f.A, {
                                                            children: (0, t.jsx)(m.H, { id: e3, children: e8 }),
                                                        }),
                                                        eV &&
                                                            (0, t.jsx)(ty, {
                                                                buttonRef: ew,
                                                                onClick: eY,
                                                                className: iq.editingPanelExpandButtonCompact,
                                                            }),
                                                    ],
                                                }),
                                                eG &&
                                                    (0, t.jsx)("div", {
                                                        className: iq.editingPanelExpandButtonDefaultContainer,
                                                        children: (0, t.jsx)(tC, {
                                                            innerRef: eL,
                                                            onClick: eY,
                                                            className: iq.editingPanelExpandButtonDefault,
                                                        }),
                                                    }),
                                            ],
                                        }),
                                        (0, t.jsxs)(m.F, {
                                            children: [
                                                et &&
                                                    eR((e, l) =>
                                                        l
                                                            ? (0, t.jsx)(tD, {
                                                                  className: a()(iq.editingPanel, {
                                                                      [iq.isExpanded]: eP,
                                                                  }),
                                                                  selectedGuildId: Y,
                                                                  originGuildId: o,
                                                                  onSelectGuildId: $,
                                                                  onClose: eZ,
                                                                  collapseButtonRef: e_,
                                                                  isLoading: Z,
                                                                  isEditingDisabled: Q,
                                                              })
                                                            : null,
                                                    ),
                                                (0, t.jsxs)(eM.A, {
                                                    className: a()(K, iY.A7, iq.profileContentOuter),
                                                    innerClassName: iq.profileContentInner,
                                                    user: l,
                                                    displayProfile: e$,
                                                    themeType: em.d.MODAL_V2,
                                                    pendingThemeColors: eh,
                                                    isPrivate: e$?.private === !0,
                                                    children: [
                                                        (0, t.jsx)(iQ, { displayProfile: e$, pendingBanner: eC }),
                                                        e$?.private === !0 && (0, t.jsx)(eT.A, {}),
                                                        !es && (0, t.jsx)(t4, { className: iq.noticeContainer }),
                                                        eB &&
                                                            (0, t.jsx)("div", {
                                                                className: iq.noticeContainer,
                                                                role: "alert",
                                                                children: (0, t.jsx)(tq, {
                                                                    icon: (0, t.jsx)(p.i, {
                                                                        size: "sm",
                                                                        color: x.A.colors.ICON_FEEDBACK_WARNING,
                                                                    }),
                                                                    message: eK.intl.string(eK.t.L9wE7H),
                                                                    actionLabel:
                                                                        null != J
                                                                            ? eK.intl.string(eK.t["5911Lb"])
                                                                            : void 0,
                                                                    onAction: J,
                                                                    actionDisabled: !et && Z,
                                                                    autoFocus: !0,
                                                                }),
                                                            }),
                                                        (0, t.jsx)("div", {
                                                            className: iq.profileCardToastContainer,
                                                            children: (0, t.jsx)(eS.A, { userId: l.id, onClose: M }),
                                                        }),
                                                        (0, t.jsxs)(tQ, {
                                                            showScrim: eH,
                                                            showLoadingSpinner: Z,
                                                            className: iq.profileContentColumns,
                                                            children: [
                                                                (0, t.jsx)(i1, {
                                                                    user: l,
                                                                    currentUser: n,
                                                                    guildId: q,
                                                                    channelId: u,
                                                                    displayProfile: e$,
                                                                    nickname: e2,
                                                                    originGuildId: o,
                                                                    hasEntered: T === v.ip.ENTERED,
                                                                    customStatusPrompt: D,
                                                                    onClose: M,
                                                                    avatarDecorationOverride: ej,
                                                                    avatarOverride: eI,
                                                                    bannerOverride: eC,
                                                                    accentColorOverride: ey,
                                                                    profileEffectOverride: eN,
                                                                    profileFrame: eQ,
                                                                    fadeInProfileFrame: e0,
                                                                    allowEditing: ep,
                                                                    isLoading: Z,
                                                                }),
                                                                (0, t.jsx)(t2.A, {
                                                                    user: l,
                                                                    currentUser: n,
                                                                    displayProfile: e$,
                                                                    guildId: q,
                                                                    channelId: u,
                                                                    items: eW,
                                                                    initialSection: P,
                                                                    onClose: M,
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
                            (0, t.jsx)(tO.A, { userId: l.id, guildId: q, className: iq.pendingChangesToolbar }),
                        ],
                    }),
                }),
            }),
        }),
    });
}
