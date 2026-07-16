n.d(l, { A: () => i4 });
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
    N = n(577390),
    y = n(372320),
    E = n(31956),
    P = n(744808),
    k = n(875741),
    S = n(915089),
    R = n(713517),
    T = n(645507),
    _ = n(922590),
    D = n(821269),
    L = n(93246),
    O = n(561794),
    M = n(71393),
    w = n(994500),
    G = n(351906),
    V = n(562153),
    U = n(474090),
    F = n(183555),
    B = n(47675),
    W = n(321191),
    H = n(591179),
    z = n(999291),
    K = n(702841),
    Y = n(370480),
    X = n(773669),
    q = n(652215),
    Z = n(101928),
    $ = n(837529),
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
    ef = n(996988),
    em = n(985253);
let ep = (0, o.FT)(em.T[ef.d.MODAL_V2].avatarSize),
    ex = {
        pendingThemeColors: void 0,
        avatarOverride: void 0,
        avatarDecorationOverride: void 0,
        bannerOverride: void 0,
        accentColorOverride: void 0,
        profileEffectOverride: void 0,
        profileFrameOverride: void 0,
    };
async function ev(e, l) {
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
var eh = n(716804),
    eA = n(679492),
    eb = n(718019),
    ej = n(413492),
    eI = n(915614),
    eC = n(744753),
    eN = n(834730);
function ey(e) {
    let { friendsSinceDate: l } = e;
    return (0, t.jsx)(eN.E, { variant: "text-sm/normal", children: l });
}
var eE = n(361311),
    eP = n(931481),
    ek = n(439053),
    eS = n(743987),
    eR = n(312381),
    eT = n(501193),
    e_ = n(383448),
    eD = n(946356),
    eL = n(983495),
    eO = n(280645),
    eM = n(109112),
    ew = n(939249),
    eG = n(730134),
    eV = n(169869),
    eU = n(837057),
    eF = n(310419),
    eB = n(889227),
    eW = n(967198),
    eH = n(488995),
    ez = n(375708),
    eK = n(985176);
function eY(e) {
    let { applicationRoleConnection: l, locale: n, onApplicationClicked: i, selectedGuildId: r } = e,
        a = (0, eV.VW)(l, n);
    return (0, t.jsxs)(t.Fragment, {
        children: [
            (0, t.jsx)("div", {
                className: eK.k_,
                children:
                    null != l.application.bot
                        ? (0, t.jsx)(eG.A, { user: new eB.A(l.application.bot), size: o._3.SIZE_16 })
                        : (0, t.jsx)(eM._, { color: "currentColor", size: "sm" }),
            }),
            (0, t.jsxs)("div", {
                className: eK.Hd,
                children: [
                    (0, t.jsxs)(ew.D, {
                        className: eK.OB,
                        onClick: function () {
                            i?.(),
                                (0, eU.transitionToGlobalDiscovery)({
                                    tab: eH.GlobalDiscoveryTab.APPS,
                                    applicationId: l.application.id,
                                    newSessionState: {
                                        entrypoint: { name: eF.sW.APPLICATION_DIRECTORY_URL },
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
                                className: eK.nk,
                                children: ez.intl.format(ez.t.zIT9YA, { applicationHook: () => l.application.name }),
                            }),
                        ],
                    }),
                    null != a && a.length > 0 ? (0, t.jsx)("div", { className: eK.yu, children: a }) : null,
                ],
            }),
        ],
    });
}
function eX(e) {
    let { applicationRoleConnections: l, className: n, onClose: i } = e,
        { trackUserProfileAction: r } = (0, F.NJ)(),
        o = (0, s.bG)([X.default], () => X.default.locale),
        d = (0, s.bG)([eW.A], () => eW.A.getGuildId());
    return 0 === l.length
        ? null
        : (0, t.jsx)("ul", {
              className: a()(eK.kL, n),
              children: l.map((e, l) =>
                  (0, t.jsx)(
                      "li",
                      {
                          className: eK.FI,
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
var eq = n(240248),
    eZ = n(308244),
    e$ = n(81400),
    eJ = n(428262),
    eQ = n(84540),
    e0 = n(621466);
n(321073);
var e1 = n(219869),
    e2 = n(866665),
    e7 = n(775602),
    e3 = n(916315);
function e9(e) {
    let { value: l, onCommit: n, disabled: t = !1 } = e,
        [r, a] = i.useState("idle"),
        [o, d] = i.useState(l),
        u = "editing" === r && !t,
        c = (0, s.bG)([e7.Ay], () => e7.Ay.useReducedMotion),
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
                !u || (null != f.current && (0, e0.vq)(e.relatedTarget) && f.current.contains(e.relatedTarget)) || A();
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
        N = i.useCallback(() => {
            (p.current = !0), b();
        }, [b]),
        y = i.useCallback(
            (e) => {
                "Enter" !== e.key || e.shiftKey
                    ? "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), N())
                    : (e.preventDefault(), C());
            },
            [C, N],
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
        handleInputCancel: N,
        onInputKeyDown: y,
        onBlur: j,
        onContainerKeyDown: I,
    };
}
function e8(e) {
    let { tooltip: l, ...n } = e,
        i = (0, t.jsx)("div", {
            className: e3.L7,
            children: (0, t.jsx)(e1.T, { ...n, size: "sm", variant: "input-accessory" }),
        });
    return null == l ? i : (0, t.jsx)(e2.m, { text: l, ariaHidden: !0, children: i });
}
function e5(e) {
    let { id: l, message: n, type: i } = e,
        r = "error" === i,
        a = r ? c.E : p.i;
    return (0, t.jsxs)(eN.E, {
        id: l,
        variant: "text-xs/normal",
        color: r ? "text-feedback-critical" : "text-feedback-warning",
        className: e3.VP,
        children: [(0, t.jsx)(a, { size: "xs", color: "currentColor", className: r ? e3.ik : e3.QW }), n],
    });
}
function e6(e) {
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
        N = null != f,
        y = null != m && !N,
        E = N ? "error" : y ? "warning" : null,
        P = N ? f : m,
        k = null != E && null != P,
        S = [];
    C && S.push(j), k && "compact" !== c && S.push(I);
    let R = S.length > 0 ? S.join(" ") : void 0,
        T = (0, t.jsxs)("div", {
            ref: b,
            className: a()(e3.LL, { [e3.JD]: N, [e3.xe]: y, [e3.r9]: A }),
            onClick: A ? void 0 : u,
            children: [
                C
                    ? (0, t.jsx)(eN.E, {
                          id: j,
                          variant: "text-sm/normal",
                          color: "text-muted",
                          className: e3.qf,
                          children: r,
                      })
                    : n,
                !A &&
                    (0, t.jsx)(ew.D, {
                        innerRef: o,
                        "aria-label": d,
                        "aria-describedby": R,
                        "aria-expanded": !1,
                        onClick: (e) => {
                            e.stopPropagation(), u();
                        },
                        focusProps: { ringTarget: b },
                    }),
                null != g && (0, t.jsx)("div", { className: e3.lD, children: (0, t.jsx)(e8, { ...g }) }),
            ],
        });
    return (0, t.jsx)("div", {
        ref: x,
        className: a()(e3.kL, { [e3.oE]: "compact" === c, [e3.c1]: "multiline" === c }, p),
        onBlur: v,
        onKeyDown: h,
        children: (0, t.jsx)(
            "div",
            {
                className: e3.qG,
                children: l
                    ? s
                    : (0, t.jsxs)(t.Fragment, {
                          children: [
                              (0, t.jsx)("div", { className: e3.VH, children: T }),
                              k && "compact" !== c && (0, t.jsx)(e5, { id: I, message: P, type: E }),
                          ],
                      }),
            },
            l ? "editing" : "preview",
        ),
    });
}
var e4 = n(786826);
function le(e) {
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
                ? ez.intl.formatToPlainString(ez.t.ICT5S6, { maxLength: v })
                : void 0) ?? b;
    return (0, t.jsx)(e6, {
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
        input: (0, t.jsx)(e4.f, {
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
let ll = [
    { value: "HAIKU", label: () => ez.intl.string(ez.t["azW8+y"]) },
    { value: "GAME_CHARACTER", label: () => ez.intl.string(ez.t.CXkR1L) },
    { value: "TELL_US", label: () => ez.intl.string(ez.t.eutr4P) },
    { value: "FUN_FACT", label: () => ez.intl.string(ez.t.wA2XhW) },
    { value: "THREE_EMOJI", label: () => ez.intl.string(ez.t["ZPB6+J"]) },
    { value: "LIFE_ONE_SENTENCE", label: () => ez.intl.string(ez.t.qqCBRd) },
    { value: "VILLAIN_ORIGIN", label: () => ez.intl.string(ez.t.lnZQ9J) },
    { value: "BRIEF_INTRO", label: () => ez.intl.string(ez.t.w0Xxhk) },
    { value: "VIBE_CHAOTIC_OR_CALM", label: () => ez.intl.string(ez.t.ul8ANJ) },
    { value: "VIBE_FIVE_WORDS", label: () => ez.intl.string(ez.t.u7WCGI) },
];
var ln = n(307731);
function lt(e) {
    let l,
        n,
        r,
        a,
        o,
        { displayProfile: d } = e,
        u = (0, s.bG)([ec.default], () => ec.default.getCurrentUser()),
        c = d?.guildId != null,
        g = d?.guildId ?? null,
        f = eJ.Ay.canUsePremiumProfileCustomization(u),
        {
            value: m,
            previewValue: p,
            onCommit: x,
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
                    (0, eQ.p)({ bio: e.trim(), guildId: d?.guildId ?? void 0 });
                },
                [d?.guildId],
            ),
        }),
        v = (function (e) {
            let { isEditing: l, wrapperRef: n, handleCommit: t, ...r } = e9(e),
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
                    (0, e0.vq)(e.target) && !a(e.target) && t();
                }
                return e.addEventListener("mousedown", i), () => e.removeEventListener("mousedown", i);
            }, [l, n, a, t]);
            let s = i.useCallback(
                (e) => {
                    if (!l) return;
                    let n = e.relatedTarget;
                    !(0, e0.vq)(n) || a(n) || t();
                },
                [l, a, t],
            );
            return { isEditing: l, wrapperRef: n, handleCommit: t, ...r, onBlur: s };
        })({ value: m, onCommit: x }),
        h = !(0, eq.uJ)(p),
        A = (0, s.bG)([eg.A], () => eg.A.getErrors(g)),
        b = (0, e$.EC)(g),
        j = A.bio?.[0],
        I = b?.bio?.[0],
        C = i.useMemo(() => {
            let e;
            return (e = Math.floor(Math.random() * ll.length)), ll[e];
        }, []),
        N = c ? ez.intl.string(ez.t.yPJ9xr) : C.label();
    return !c || f
        ? (0, t.jsx)(le, {
              ...v,
              preview: h ? (0, t.jsx)(eZ.A, { userBio: p, setLineClamp: !1 }) : null,
              placeholder: N,
              editButtonAriaLabel: ez.intl.string(ez.t.lO3n7a),
              label: ez.intl.string(ez.t["YWo+Zd"]),
              emojiPickerIntention: ln.EmojiIntention.PROFILE,
              maxLength: q.NA2,
              error: j,
              warning: I,
          })
        : h
          ? (0, t.jsx)(eZ.A, { userBio: p, setLineClamp: !1, textColor: "text-muted" })
          : null;
}
function li(e) {
    let { displayProfile: l, isEditable: n } = e,
        r = i.useId(),
        a = l?.bio,
        s = !(0, eq.uJ)(a);
    return n || s
        ? (0, t.jsxs)("section", {
              "aria-labelledby": r,
              children: [
                  (0, t.jsx)(f.A, { children: (0, t.jsx)(m.H, { id: r, children: ez.intl.string(ez.t.ZzAR2Y) }) }),
                  n ? (0, t.jsx)(lt, { displayProfile: l }) : (0, t.jsx)(eZ.A, { userBio: a, setLineClamp: !1 }),
              ],
          })
        : null;
}
var lr = n(982168),
    la = n(722868),
    ls = n(822775),
    lo = n(982985),
    ld = n(851471),
    lu = n(34188),
    lc = n(662388),
    lg = n(23722),
    lf = n(993401);
function lm(e) {
    let { onClose: l, ...n } = e,
        { analyticsLocations: i, newestAnalyticsLocation: r } = (0, I.Ay)(),
        a = (0, lg.A)(() => {
            (0, lc.Cz)({ analyticsLocations: i, analyticsSource: r }), l?.();
        });
    return (0, t.jsx)(lf.q3, {
        action: "VISIT_SHOP",
        icon: lu.U,
        tooltipText: ez.intl.string(ez.t.b2d0N0),
        onClick: a,
        ...n,
    });
}
var lp = n(573355),
    lx = n(102951);
function lv(e) {
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
        g = (0, la.A)({ user: l, guildId: r, channelId: a, displayProfile: s, onClose: d }),
        {
            gameFriends: f,
            hasOutgoingPendingGameFriends: m,
            hasIncomingPendingGameFriends: p,
        } = (0, lx.J)({ userId: l.id }),
        x = f.length > 0 || m || p;
    return o === q.eA$.BLOCKED
        ? null
        : l.id === n.id
          ? u
              ? (0, t.jsxs)(t.Fragment, {
                    children: [
                        (0, t.jsx)(lo.e, { userId: l.id, variant: "primary", disabled: !0 }),
                        (0, t.jsx)(lm, { onClose: d }),
                        (0, t.jsx)(ld.Zt, { user: l, guildId: i, viewProfileItem: g }),
                    ],
                })
              : (0, t.jsxs)(t.Fragment, {
                    children: [
                        (0, t.jsx)(ls.A, { user: l, guildId: i, onClose: d }),
                        (0, t.jsx)(lm, { onClose: d }),
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
            : o === q.eA$.PENDING_INCOMING
              ? (0, t.jsxs)(t.Fragment, {
                    children: [
                        (0, t.jsx)(lo.e, { userId: l.id, onClose: lr.A.popAll, autoFocus: !0 }),
                        (0, t.jsx)(ld.Zt, { user: l, guildId: i }),
                    ],
                })
              : o === q.eA$.FRIEND || o === q.eA$.PENDING_OUTGOING
                ? (0, t.jsxs)(t.Fragment, {
                      children: [
                          (0, t.jsx)(lo.e, { userId: l.id, onClose: lr.A.popAll, autoFocus: !0 }),
                          (0, t.jsx)(lp.Ef, { user: l, relationshipType: o, analyticsLocation: c }),
                          (0, t.jsx)(ld.Zt, { user: l, guildId: i, viewProfileItem: g }),
                      ],
                  })
                : o === q.eA$.NONE && x
                  ? (0, t.jsxs)(t.Fragment, {
                        children: [
                            (0, t.jsx)(lo.e, { userId: l.id, onClose: lr.A.popAll, autoFocus: !0 }),
                            (0, t.jsx)(lp.ES, {
                                user: l,
                                analyticsLocation: c,
                                gameFriends: f,
                                tooltipPosition: "top",
                                tooltipAlign: "center",
                                hasIncomingPendingGameFriends: p,
                                hasOutgoingPendingGameFriends: m,
                            }),
                            (0, t.jsx)(ld.Zt, { user: l, guildId: i, viewProfileItem: g }),
                        ],
                    })
                  : (0, t.jsxs)(t.Fragment, {
                        children: [
                            (0, t.jsx)(lp.cO, {
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
    lA = n(349288),
    lb = n(509434),
    lj = n(307301),
    lI = n(228366),
    lC = n(95561),
    lN = n(874490),
    ly = n(968309),
    lE = n(174459),
    lP = n(486020),
    lk = n(123917),
    lS = n(783419);
let lR = "User Profile Modal V2";
function lT(e) {
    let l = Q.A.get(e);
    (0, ly.A)({ platformType: l.type, location: lR }),
        lE.default.track(q.HAw.ACCOUNT_LINK_STEP, {
            previous_step: lR,
            current_step: "desktop oauth",
            platform_type: l.type,
        });
}
function l_() {
    lI.h.dispatch({ type: "CONNECTIONS_GRID_MODAL_SHOW", onComplete: lT, stackingBehavior: "stack" });
}
function lD(e) {
    let { account: l, locale: n, userId: i } = e,
        r = l.metadata ?? {},
        a = (0, Y.An)(r[lS.pK.CREATED_AT], n),
        s = Q.A.get((0, lN.ML)(l.type));
    return (0, t.jsx)(lO, {
        renderAccountName: function () {
            let e = s?.getPlatformUserUrl?.(l);
            return null == e
                ? (0, t.jsx)(e2.m, {
                      overflowOnly: !0,
                      text: l.name,
                      children: (0, t.jsx)(eN.E, { variant: "text-sm/normal", className: eK.GW, children: l.name }),
                  })
                : (0, t.jsx)(lA.Anchor, {
                      href: e,
                      className: eK.Y2,
                      useDefaultUnderlineStyles: !1,
                      "aria-label":
                          s?.name != null
                              ? `${s.name}, ${l.name}, ${ez.intl.string(ez.t.q5jLJB)}`
                              : `${l.name}, ${ez.intl.string(ez.t.q5jLJB)}`,
                      onClick: (n) => {
                          (0, lC.zV)(q.HAw.CONNECTED_ACCOUNT_VIEWED, { platform_type: l.type, other_user_id: i }),
                              (0, lk.h)({ href: e, trusted: s?.type !== q.fg2.DOMAIN }, n);
                      },
                      children: (0, t.jsxs)("div", {
                          className: eK.vi,
                          children: [
                              (0, t.jsx)(e2.m, {
                                  overflowOnly: !0,
                                  text: l.name,
                                  children: (0, t.jsx)(eN.E, {
                                      variant: "text-sm/normal",
                                      className: eK.GW,
                                      children: l.name,
                                  }),
                              }),
                              (0, t.jsx)(lb.I, { size: "xs", color: "currentColor" }),
                          ],
                      }),
                  });
        },
        renderMetadata: function () {
            return l.type === q.fg2.REDDIT
                ? (0, eV.xE)(r)
                : l.type === q.fg2.STEAM
                  ? (0, eV.dy)(r)
                  : l.type === q.fg2.BLUESKY || l.type === q.fg2.MASTODON || l.type === q.fg2.TWITTER
                    ? (0, eV.ED)(r)
                    : l.type === q.fg2.PAYPAL
                      ? (0, eV.gZ)(r)
                      : l.type === q.fg2.EBAY
                        ? (0, eV.ub)(r)
                        : l.type === q.fg2.TIKTOK
                          ? (0, eV.HU)(r)
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
    return (0, t.jsx)(lO, {
        renderAccountName: function () {
            return (0, t.jsx)(e2.m, {
                overflowOnly: !0,
                text: n.profile.username,
                children: (0, t.jsx)(eN.E, {
                    variant: "text-sm/normal",
                    className: eK.GW,
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
        className: eK.FI,
        children: [
            (0, t.jsx)(e2.m, {
                __unsupportedReactNodeAsText: i,
                children: (0, t.jsx)("div", {
                    className: eK.k_,
                    children: (0, t.jsx)("img", {
                        alt: ez.intl.formatToPlainString(ez.t.rtm15P, { name: i }),
                        className: a()(eK.tV, o ? eK.sN : null),
                        src: r,
                    }),
                }),
            }),
            (0, t.jsxs)("div", {
                className: eK.Hd,
                children: [
                    (0, t.jsxs)("div", {
                        children: [
                            l(),
                            null != s &&
                                (0, t.jsx)(eN.E, {
                                    variant: "text-xs/normal",
                                    children: ez.intl.format(ez.t["9rfonh"], { date: s }),
                                }),
                        ],
                    }),
                    (0, t.jsx)("div", { className: eK.yu, children: n() }),
                ],
            }),
        ],
    });
}
function lM(e) {
    let { connections: l, applicationIdentities: n, userId: i, allowEditing: r, className: o } = e,
        d = (0, s.bG)([X.default], () => X.default.locale);
    if (!r && 0 === l.length && 0 === n.length) return null;
    let u = l.length > 0 || n.length > 0;
    return (0, t.jsxs)("div", {
        className: a()(eK.kL, o),
        children: [
            u &&
                (0, t.jsxs)("ul", {
                    className: eK.V,
                    children: [
                        l.map((e) => (0, t.jsx)(lD, { account: e, userId: i, locale: d }, `${e.type}:${e.id}`)),
                        n?.map((e) => (0, t.jsx)(lL, { identityWithApplication: e }, e.identity.application_id)),
                    ],
                }),
            r &&
                (0, t.jsxs)(ew.D, {
                    className: eK.qG,
                    onClick: l_,
                    children: [
                        (0, t.jsx)(lj.j, { size: "sm", color: "currentColor" }),
                        (0, t.jsx)(eN.E, {
                            variant: "text-xs/medium",
                            color: "none",
                            children: ez.intl.string(ez.t.syl6HS),
                        }),
                    ],
                }),
        ],
    });
}
var lw = n(580929),
    lG = n(554146),
    lV = n(193885),
    lU = n(408278),
    lF = n(890377),
    lB = n(789645),
    lW = n(297264),
    lH = n(821609),
    lz = n(403581),
    lK = n(194261),
    lY = n(812993),
    lX = n(689175),
    lq = n(517461),
    lZ = n(13875),
    l$ = n(131607),
    lJ = n(248778),
    lQ = n(783420),
    l0 = n(252732),
    l1 = n(976860);
let l2 = (0, n(945810).mj)({
    name: "2026-06-wysiwyg-show-dns-to-non-nitro",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var l7 = n(975732),
    l3 = n(487233),
    l9 = n(120386),
    l8 = n(317097),
    l5 = n(602853),
    l6 = n(922016),
    l4 = n(508274),
    ne = n(654107),
    nl = n(930349);
function nn(e) {
    let { user: l, disabled: n = !1 } = e,
        r = i.useRef(null),
        a = (0, l5.r)(x.A.unsafe_rawColors.PRIMARY_530).hex(),
        o = (0, ne.rh)(l.getAvatarURL(null, 80), a, !1),
        { pendingAccentColor: d, savedAccentColor: u } = (0, s.cf)([eg.A, W.A], () => ({
            pendingAccentColor: eg.A.getPendingChanges().pendingAccentColor,
            savedAccentColor: W.A.getUserProfile(l.id)?.accentColor,
        })),
        c = d ?? u ?? (0, l8.LX)(o[0] ?? a),
        g = i.useCallback((e) => (0, eQ.p)({ accentColor: e }), []);
    return (0, t.jsx)(l6.Y, {
        targetElementRef: r,
        renderPopout: (e) => (0, t.jsx)(l4.VN, { ...e, value: c, onChange: g, suggestedColors: o, showEyeDropper: !0 }),
        children: (e) =>
            (0, t.jsx)(nl.V, {
                ...e,
                variant: "bar",
                buttonRef: r,
                disabled: n,
                accessibleLabel: ez.intl.string(ez.t["/X3fkf"]),
                accessibleValue: (0, l8.Hl)(c),
                showOverlayOnHover: !0,
                renderPreview: () =>
                    (0, t.jsx)("div", { style: { width: "100%", height: "100%", backgroundColor: (0, l8.Hl)(c) } }),
            }),
    });
}
var nt = n(450373),
    ni = n(339984),
    nr = n(111242);
function na(e) {
    let { backgroundColor: l } = e;
    return (0, t.jsx)("div", { className: nr.o, style: { backgroundColor: l } });
}
function ns(e) {
    let { src: l } = e;
    return (0, t.jsx)("img", { src: l, alt: "", className: nr._ });
}
function no(e) {
    let { displayProfile: l, pendingBanner: n, shouldAnimate: i } = e,
        r = (0, l5.r)(x.A.unsafe_rawColors.PRIMARY_800).hex(),
        a = l?.primaryColor ?? (0, l8.LX)(r),
        { hex: s } = (0, nt.A)(a),
        o = l?.getPreviewBanner(n, i, 296) ?? void 0;
    return null != o ? (0, t.jsx)(ns, { src: o }) : (0, t.jsx)(na, { backgroundColor: s });
}
function nd(e) {
    let l,
        { userId: n, guildId: i, disabled: r, errorMessageId: a } = e,
        { newestAnalyticsLocation: o } = (0, I.Ay)(),
        d = null != i,
        u = (0, z.Ay)(n, i),
        c = (0, s.bG)([eg.A], () => eg.A.getPendingChanges(i ?? void 0).pendingBanner),
        g = (0, s.bG)([ec.default], () => ec.default.getCurrentUser()?.banner),
        f = (0, s.bG)([W.A], () =>
            null != i ? W.A.getGuildMemberProfile(n, i)?.banner : W.A.getUserProfile(n)?.banner,
        ),
        m = null === c,
        p = d && (u?.isUsingGuildMemberBanner() ?? !1),
        x = m && d && !p ? void 0 : c,
        v = (0, eo.Ac)(c, f),
        h = d && null != g,
        A = v
            ? {
                  onClick: () => (0, l0.rM)(null, f, (e) => (0, eQ.p)({ guildId: i ?? void 0, banner: e })),
                  type: h ? "reset" : "remove",
                  accessibleLabel: ez.intl.string(h ? ez.t.jHlJNS : ez.t.tT9n7D),
              }
            : void 0;
    return (0, t.jsx)(nl.V, {
        affordance: A,
        variant: "square",
        onClick: function () {
            return (0, l0.XD)({
                uploadType: ni.HL.BANNER,
                analyticsSource: o,
                guildId: i ?? void 0,
                stackingBehavior: "stack",
            });
        },
        accessibleLabel: ez.intl.string(ez.t.yiRnNO),
        accessibleValue:
            ((l = void 0 === c),
            null === c || (l && null == f)
                ? ez.intl.string(ez.t["3Xph0/"])
                : l
                  ? ez.intl.string(ez.t.keN7ib)
                  : ez.intl.string(ez.t["l/iJSJ"])),
        "aria-haspopup": "dialog",
        disabled: r,
        showOverlayOnHover: !0,
        errorMessageId: a,
        renderPreview: (e) => (0, t.jsx)(no, { displayProfile: u, pendingBanner: x, shouldAnimate: e }),
    });
}
var nu = n(913563),
    nc = n(898985),
    ng = n(922301),
    nf = n(660184),
    nm = n(259065),
    np = n(864386),
    nx = n(283607);
let nv = "heading-xl/semibold";
function nh(e) {
    let { displayName: l, stylesPreview: n, shouldAnimate: i = !1 } = e;
    return (0, t.jsx)("div", {
        "aria-hidden": !0,
        className: nx.M,
        children:
            null != n
                ? (0, t.jsx)(eN.E, {
                      variant: nv,
                      children: (0, t.jsx)(nf.A, {
                          userName: l,
                          displayNameStyles: n,
                          effectDisplayType: i ? ng.G.ANIMATED : ng.G.STATIC,
                          shouldWrap: !1,
                          inProfile: !0,
                          loop: !0,
                      }),
                  })
                : (0, t.jsx)(eN.E, { variant: nv, className: nx.W, color: "text-muted", children: l }),
    });
}
function nA(e) {
    let { user: l, guildId: n, disabled: r, errorMessageId: a, onOpen: o } = e,
        { analyticsLocations: d } = (0, I.Ay)(),
        u = null != n,
        c = (0, s.bG)([eu.Ay], () => (null != n ? (eu.Ay.getMember(n, l.id)?.nick ?? null) : null)),
        g = (0, s.bG)([ec.default], () => ec.default.getCurrentUser()?.globalName ?? null),
        f = (0, s.bG)([eg.A], () => eg.A.getPendingChanges(null).pendingGlobalName),
        m = (0, s.bG)([eg.A], () => eg.A.getPendingChanges(n ?? null).pendingNickname),
        {
            userDisplayNameStyles: p,
            guildDisplayNameStyles: x,
            pendingDisplayNameStyles: v,
        } = (0, eo.B0)(l, n ?? void 0),
        h = u ? x : p,
        A = void 0 !== v,
        b = null === v,
        j = u && null != p,
        C = (0, eo.lw)({ pendingValue: v, userValue: p, guildValue: x, guildId: n ?? void 0 });
    function N(e) {
        return null == e || "" === e ? void 0 : e;
    }
    let y = void 0 !== f ? f : g,
        E = u ? (N(void 0 !== m ? m : c) ?? N(y) ?? l.username) : (N(y) ?? l.username),
        P = A ? null != v : null != h,
        k =
            null != C && P
                ? {
                      onClick: () => (0, eQ.p)({ guildId: n ?? void 0, displayNameStyles: null }),
                      type: j ? "reset" : "remove",
                      accessibleLabel: ez.intl.string(j ? ez.t.en3ogK : ez.t["Wqmi/h"]),
                  }
                : void 0,
        S = i.useCallback(() => {
            o?.(), (0, nm.L)({ analyticsLocations: d, guildId: n ?? void 0, stackingBehavior: "stack" });
        }, [d, n, o]);
    return (0, t.jsx)(nl.V, {
        affordance: (!b && (A || null != h)) || j ? k : "add",
        variant: "bar",
        onClick: S,
        accessibleLabel: ez.intl.string(ez.t.vKBV4A),
        accessibleValue: (function (e) {
            if (null == e) return ez.intl.string(ez.t["3Xph0/"]);
            let l = ez.intl.string((0, nu.A)(e.fontId)),
                n = ez.intl.string(nc.J[e.effectId] ?? np.default.OpWJ3f),
                t = e.colors.map((e) => `#${e.toString(16).padStart(6, "0")}`).join(", ");
            return ez.intl.formatToPlainString(ez.t.A2XnI4, { fontName: l, effectName: n, colors: t });
        })(C),
        "aria-haspopup": "dialog",
        errorMessageId: a,
        renderPreview: (e) => (0, t.jsx)(nh, { stylesPreview: C, displayName: E, shouldAnimate: e }),
        disabled: r,
    });
}
var nb = n(374654),
    nj = n(366010),
    nI = n(736653),
    nC = n(674658),
    nN = n(617061),
    ny = n(203632),
    nE = n(536572);
let nP = new Set(),
    nk = 0;
var nS = n(993408),
    nR = n(841702),
    nT = n(515718),
    n_ = n(195292);
function nD(e) {
    "" !== e.thumbnailPreviewSrc && (0, nT.NN)(e.thumbnailPreviewSrc).catch(() => {});
}
var nL = n(466681),
    nO = n(970389);
let nM =
        "https://cdn.discordapp.com/assets/content/6ccc97f30d0e11f23e116bb2534831ca573533a9dd726f5859ae527e82cdf37a.png",
    nw =
        "https://cdn.discordapp.com/assets/content/82b9aaf680c9ca85c8e9cdb51056df7d33d865e18e645393934b76c03b944611.png";
function nG(e) {
    let { effect: l, shouldAnimate: n, isEmpty: r, hasMainProfileFallback: s, disabled: o } = e,
        d = (0, nI.Ay)(),
        u = (0, nj.M)(d) ? nM : nw,
        c = (function (e) {
            let { enabled: l, isInteracting: n } = e,
                { categories: t, purchases: r } = (0, nR.Ay)({ stalePurchasesOK: !0 }),
                a = i.useMemo(() => (0, nS.wo)(r, t), [r, t]),
                s = (0, n_.A)({ enabled: l, isInteracting: n, items: a, preload: nD });
            return null != s ? { skuId: s.skuId } : null;
        })({ enabled: r && !s && !o, isInteracting: n }),
        g = null != c,
        f = g ? c : l;
    return (
        i.useEffect(() => {
            n && ((nk += 1), nP.forEach((e) => e()));
        }, [n]),
        (0, t.jsxs)("div", {
            className: nL.ti,
            "aria-hidden": !0,
            children: [
                (0, t.jsx)("img", { src: u, alt: "", className: nL.QQ }),
                f?.skuId != null &&
                    (0, t.jsx)("div", {
                        className: a()(nL.yY, { [nO.O]: g }),
                        children: (0, t.jsx)(C.A, {
                            skuId: f.skuId,
                            autoPlay: !1,
                            resetOnHover: !0,
                            restartMethod: ny.HL.FromStart,
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
function nV(e) {
    let { user: l, guildId: n, disabled: r, variant: a = "full-height-bar" } = e,
        { analyticsLocations: o } = (0, I.Ay)(),
        d = null != n,
        u = (0, s.bG)([M.A], () => (null != n ? M.A.getGuild(n) : null)),
        c = (0, eo.N2)({ user: l }),
        g = (0, eo.N2)({ user: l, guildId: n ?? void 0 }),
        { pendingProfileEffect: f } = (0, eo.nZ)(n ?? void 0),
        m = void 0 !== f,
        p = null === f || (!m && null == g),
        x = d && null != c,
        v = (0, eo.lw)({ pendingValue: f, userValue: c, guildValue: g, guildId: n ?? void 0 }),
        { product: h } = (0, nC.q)(v?.skuId),
        A = m ? null != f : null != g,
        b =
            null != v && A
                ? {
                      onClick: () => (0, eQ.p)({ guildId: n ?? void 0, profileEffect: null }),
                      type: x ? "reset" : "remove",
                      accessibleLabel: ez.intl.string(x ? ez.t["SQy/Po"] : ez.t.uMuafO),
                  }
                : void 0,
        j = i.useCallback(() => {
            (0, nN.W)({ analyticsLocations: o, guild: u ?? void 0, stackingBehavior: "stack" });
        }, [o, u]);
    return (0, t.jsx)(nl.V, {
        affordance: p && !x ? "add" : b,
        variant: a,
        onClick: j,
        accessibleLabel: ez.intl.string(ez.t.wR5wOo),
        accessibleValue: (function (e) {
            let { profileEffectPreview: l, productName: n, hasPendingSelection: t } = e;
            return null == l
                ? ez.intl.string(ez.t["3Xph0/"])
                : null != n && "" !== n
                  ? n
                  : ez.intl.string(t ? ez.t["1M4m8w"] : ez.t["+Du7ua"]);
        })({ profileEffectPreview: v, productName: (0, nE.VG)(h), hasPendingSelection: null != f }),
        "aria-haspopup": "dialog",
        disabled: r,
        renderPreview: (e) =>
            (0, t.jsx)(nG, { effect: v, shouldAnimate: e, isEmpty: p, hasMainProfileFallback: x, disabled: r }),
    });
}
var nU = n(515727),
    nF = n(746002);
function nB(e) {
    e.layers
        .filter((e) => !0 !== e.responsive)
        .forEach((l) => {
            let n = (0, nF.getCollectiblesItemAssetUrl)({
                skuId: e.skuId,
                assetFormat: nF.CollectiblesItemAssetFormat.STATIC,
                assetId: l.id,
            });
            null != n && (0, nT.NN)(n).catch(() => {});
        });
}
var nW = n(84391);
function nH(e) {
    let { responsive: l } = e;
    return !0 !== l;
}
function nz(e) {
    let { profileFramePreview: l, isEmpty: n, hasMainProfileFallback: r, isInteracting: s, disabled: o } = e,
        d = (0, nI.Ay)(),
        u = (0, nj.M)(d) ? nM : nw,
        c = (0, y.A)(l?.skuId, "EditableTileProfileFrameButton"),
        g = (function (e) {
            let { enabled: l, isInteracting: n } = e,
                { categories: t, purchases: r } = (0, nR.Ay)({ stalePurchasesOK: !0 }),
                a = i.useMemo(() => (0, nS.MG)(r, t), [r, t]);
            return (0, n_.A)({ enabled: l, isInteracting: n, items: a, preload: nB });
        })({ enabled: n && !r && !o, isInteracting: s }),
        f = null != g,
        m = f ? g : c,
        { profileFrameStyle: p, profileFrameClassName: x } =
            null != m ? (0, k.i)(m) : { profileFrameStyle: void 0, profileFrameClassName: void 0 };
    return (0, t.jsxs)(t.Fragment, {
        children: [
            null != m &&
                (0, t.jsx)("div", {
                    className: a()(nW.hm, x, { [nO.O]: f }),
                    style: p,
                    children: (0, t.jsx)(P.A, { frame: m, filterLayer: nH }),
                }),
            (0, t.jsx)("div", {
                className: a()(nW.ti, { [nW.yT]: null == m }),
                children: (0, t.jsx)("img", { src: u, alt: "", className: nW.QQ, draggable: !1 }),
            }),
        ],
    });
}
function nK(e) {
    let { user: l, guildId: n, disabled: r } = e,
        { analyticsLocations: a } = (0, I.Ay)(),
        o = null != n,
        d = (0, s.bG)([M.A], () => (null != n ? M.A.getGuild(n) : null)),
        u = (0, eo.Xf)({ user: l }),
        c = (0, eo.Xf)({ user: l, guildId: n ?? void 0 }),
        { pendingProfileFrame: g } = (0, eo.Tu)(n ?? void 0),
        f = void 0 !== g,
        m = null === g || (!f && null == c),
        p = o && null != u,
        x = (0, eo.lw)({ pendingValue: g, userValue: u, guildValue: c, guildId: n ?? void 0 }),
        { product: v } = (0, nC.q)(x?.skuId),
        h = f ? null != g : null != c,
        A =
            null != x && h
                ? {
                      onClick: () => (0, eQ.p)({ guildId: n ?? void 0, profileFrame: null }),
                      type: p ? "reset" : "remove",
                      accessibleLabel: ez.intl.string(p ? ez.t.j6hZyM : ez.t.nQBruk),
                  }
                : void 0,
        b = i.useCallback(() => {
            (0, nU.w)({ analyticsLocations: a, guild: d ?? void 0, stackingBehavior: "stack" });
        }, [a, d]);
    return (0, t.jsx)(nl.V, {
        affordance: m && !p ? "add" : A,
        variant: "square",
        onClick: b,
        accessibleLabel: ez.intl.string(ez.t.GWrZOd),
        accessibleValue: (function (e) {
            let { profileFramePreview: l, productName: n, hasPendingSelection: t } = e;
            return null == l
                ? ez.intl.string(ez.t["3Xph0/"])
                : null != n && "" !== n
                  ? n
                  : ez.intl.string(t ? ez.t.yFeGB5 : ez.t["2kAxKM"]);
        })({ profileFramePreview: x, productName: (0, nE.VG)(v), hasPendingSelection: null != g }),
        "aria-haspopup": "dialog",
        disabled: r,
        renderPreview: (e) =>
            (0, t.jsx)(nz, {
                profileFramePreview: x,
                isEmpty: m,
                hasMainProfileFallback: p,
                isInteracting: e,
                disabled: r,
            }),
    });
}
var nY = n(684732),
    nX = n(498596),
    nq = n(298387);
function nZ(e) {
    let { color: l, suggestedColors: n, disabled: r, ariaLabel: s, onSelect: o, buttonRef: d } = e,
        u = i.useRef(null),
        c = d ?? u,
        g = (0, l8.Hl)(l),
        f = (0, l8.bJ)(l, 0xffffff) < nX.Tr.NonText;
    return (0, t.jsx)(l6.Y, {
        targetElementRef: c,
        renderPopout: (e) => (0, t.jsx)(l4.VN, { ...e, value: l, onChange: o, suggestedColors: n, showEyeDropper: !0 }),
        children: (e) => {
            let { onClick: l, ...n } = e;
            return (0, t.jsx)(ew.D, {
                ...n,
                innerRef: c,
                className: nq.Dh,
                onClick: r ? void 0 : l,
                "aria-label": s,
                "aria-disabled": r,
                tabIndex: r ? -1 : 0,
                children: (0, t.jsx)("div", { className: a()(nq.Hy, { [nq.rY]: f }), style: { backgroundColor: g } }),
            });
        },
    });
}
function n$(e) {
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
        c = (0, l8.Hl)(l),
        g = (0, l8.Hl)(n),
        f = `linear-gradient(to bottom, ${c}, ${g})`,
        m = ez.intl.formatToPlainString(ez.t.FquTfm, { colorLabel: c }),
        p = ez.intl.formatToPlainString(ez.t.xOnm4z, { colorLabel: g }),
        x =
            null != d
                ? {
                      ...d,
                      onClick: () => {
                          d.onClick(), u.current?.focus();
                      },
                  }
                : void 0;
    return (0, t.jsx)(nl.Y, {
        variant: "square",
        disabled: o,
        deleteButton: x,
        children: (0, t.jsxs)("div", {
            className: nq.D7,
            style: { background: f },
            children: [
                (0, t.jsx)(nZ, { color: l, suggestedColors: s, ariaLabel: m, onSelect: r, disabled: o, buttonRef: u }),
                (0, t.jsx)(nZ, { color: n, suggestedColors: s, ariaLabel: p, onSelect: a, disabled: o }),
            ],
        }),
    });
}
function nJ(e) {
    let { user: l, guildId: n, disabled: r = !1 } = e,
        a = (0, z.Ay)(l.id, n),
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
        { primaryColor: f, secondaryColor: m } = (0, Z.A)({
            user: l,
            displayProfile: a,
            pendingThemeColors: d,
            pendingAvatarSrc: g ?? void 0,
            isPreview: !0,
        }),
        p = (0, l5.r)(x.A.unsafe_rawColors.PRIMARY_530).hex(),
        v = null != g ? g : l.getAvatarURL(n ?? void 0, 80),
        h = (0, ne.rh)(v, p, !1),
        A = i.useCallback(
            (e) => {
                (0, eQ.p)({ guildId: n ?? void 0, themeColors: e });
            },
            [n],
        ),
        b =
            null != n && (0, nY.l)(d, o)
                ? {
                      onClick: () => (0, eQ.p)({ guildId: n, themeColors: [null, null] }),
                      type: "reset",
                      accessibleLabel: ez.intl.string(ez.t["L+GmoR"]),
                  }
                : void 0;
    return null == f || null == m
        ? null
        : (0, t.jsx)(n$, {
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
var nQ = n(315629),
    n0 = n(422936),
    n1 = n(410516),
    n2 = n(202541);
function n7(e) {
    let l = (0, s.bG)([ec.default], () => eJ.Ay.isPremium(ec.default.getCurrentUser())),
        n = (0, n0.O)();
    return l
        ? ez.intl.string(ez.t.AfRWI8)
        : (0, n1.U9)(n, n2.pe.TIER_2) && n?.discount.amount != null
          ? ez.intl.formatToPlainString(ez.t.bkQ4bH, { percent: n?.discount.amount })
          : e;
}
var n3 = n(235684);
function n9() {
    let e = i.useCallback(() => {
            (0, l1.pX)(q.BVt.NITRO_HOME), (0, l7.closeUserProfileModal)();
        }, []),
        l = (0, lg.A)(e),
        n = n7(ez.intl.string(ez.t.pj0XBN));
    return (0, t.jsx)(lQ.A, {
        subscriptionTier: n2.pe.TIER_2,
        children: (e) => {
            let { onClick: i } = e;
            return (0, t.jsxs)(nQ.h, {
                color: "nitro-pink",
                className: n3.U,
                children: [
                    (0, t.jsx)(eN.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: ez.intl.format(ez.t.TmfgI2, { onClick: l }),
                    }),
                    (0, t.jsx)(lH.$, {
                        variant: "expressive",
                        size: "md",
                        icon: lz.t,
                        text: n,
                        onClick: i,
                        fullWidth: !0,
                    }),
                ],
            });
        },
    });
}
var n8 = n(55619),
    n5 = n(942308);
function n6() {
    return (0, t.jsxs)("div", {
        className: n5.k,
        children: [
            (0, t.jsx)(eN.E, {
                variant: "text-sm/medium",
                color: "text-strong",
                children: ez.intl.string(ez.t.JFY17v),
            }),
            (0, t.jsx)(lH.$, {
                fullWidth: !0,
                variant: "secondary",
                size: "md",
                text: ez.intl.string(ez.t.R9GHya),
                onClick: function () {
                    return n8.A.setEnabled(!1);
                },
            }),
        ],
    });
}
var n4 = n(847374),
    te = n(111159),
    tl = n(548118),
    tn = n(711014),
    tt = n(540637),
    ti = n(801461),
    tr = n(44482),
    ta = n(844222),
    ts = n(561392),
    to = n(745113),
    td = n(15626),
    tu = n(930856);
function tc(e) {
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
            let { reducedMotion: e } = i.useContext(ta.C),
                {
                    isOpen: l,
                    setIsOpen: n,
                    refs: t,
                    floatingStyles: r,
                    getReferenceProps: a,
                    getFloatingProps: s,
                    context: o,
                } = (0, ts.u)({ placement: "bottom-start", matchReferenceWidth: !1, transform: e.enabled }),
                { styles: d } = (0, to.DL)(o, {
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
        N = i.useContext(td._),
        y = i.useId(),
        E = i.useId(),
        P = i.useId(),
        k = i.useRef(null),
        S = i.useRef(null),
        [R, T] = i.useState(null),
        _ = null != R ? (0, ti.ZN)(P, R) : void 0,
        D = i.useRef(!1),
        L = i.useRef(!1),
        O = i.useMemo(() => l.filter((e) => (0, ti.fI)(e.value, [n])), [n, l]),
        M = i.useCallback(() => {
            u || v(!x);
        }, [u, v, x]),
        w = i.useCallback(
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
                    if (L.current) {
                        L.current = !1;
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
        { activeIndex: F, handleKeyDown: B } = (0, tt.l)(!0, l),
        W = i.useRef(null);
    i.useEffect(() => {
        let e = F !== W.current;
        (W.current = F), null != F && e && (T(F), x || ((D.current = !0), v(!0)));
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
                        T(0), x || ((D.current = !0), v(!0));
                        break;
                    case "End":
                        if ((e.preventDefault(), 0 === n)) return;
                        T(n - 1), x || ((D.current = !0), v(!0));
                        break;
                    case "Tab":
                        if (x && null != R) {
                            let e = l[R];
                            null != e && !0 !== e.disabled && r(e.value);
                        }
                        (L.current = !0), v(!1);
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
        z = Math.max(
            l.findIndex((e) => e.id === O[O.length - 1]?.id),
            0,
        ),
        K = i.useRef(!1);
    i.useEffect(() => {
        c || !x || K.current
            ? x || ((K.current = !1), T(null), (D.current = !1))
            : ((K.current = !0), D.current || T(l.length > 0 ? z : null), (D.current = !1), k.current?.focus());
    }, [c, x, z, l.length]);
    let Y = {
        id: E,
        role: "combobox",
        "aria-haspopup": "listbox",
        "aria-controls": x ? P : void 0,
        "aria-expanded": x,
        "aria-activedescendant": _,
        "aria-disabled": !!u || void 0,
        "aria-labelledby": null != s ? `${y} ${E}` : void 0,
        "aria-errormessage": N?.errorMessageId,
        "aria-invalid": N?.errorMessageId != null || void 0,
        "aria-describedby": N?.describedById,
        onClick: M,
        onMouseDown: w,
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
            null != s && (0, t.jsx)(f.A, { tag: "label", id: y, htmlFor: E, children: s }),
            p({ buttonRef: k, selectButtonProps: Y }),
            !u &&
                x &&
                (0, t.jsx)("div", {
                    ref: C,
                    className: a()(tu.S_, d),
                    ...j(),
                    style: { ...A, ...I },
                    children: (0, t.jsx)(tt.q, {
                        id: P,
                        tabIndex: -1,
                        items: l,
                        selectionMode: "single",
                        selectedItems: O,
                        onSelectionChange: U,
                        shouldFocusWrap: !1,
                        activeDescendantIndex: R,
                        renderListItem: (e) => (null != m ? m(e) : (0, t.jsx)(tr.c, { ...e })),
                        maxVisibleItems: g,
                        loading: c,
                    }),
                }),
        ],
    });
}
var tg = n(138325);
let tf = "MAIN_PROFILE";
function tm(e) {
    let { guild: l } = e;
    return (0, t.jsx)(tl.Ay, { className: tg.$f, guild: l, size: tl.Ay.Sizes.MINI, active: !0, "aria-hidden": !0 });
}
function tp(e) {
    let { leading: l, label: n, description: i } = e;
    return (0, t.jsxs)("div", {
        className: tg.XE,
        children: [
            null != l && (0, t.jsx)("div", { className: tg.fZ, children: l }),
            (0, t.jsxs)("div", {
                className: tg.qL,
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
function tx(e) {
    let { leading: l, label: n, disabled: i, buttonRef: r, selectButtonProps: s } = e;
    return (0, t.jsxs)(ew.D, {
        innerRef: r,
        className: a()(tg.L5, { [tg.r9]: i }),
        tabIndex: !0 === i ? -1 : 0,
        ...s,
        children: [
            l,
            (0, t.jsx)(eN.E, {
                variant: "text-md/medium",
                color: !0 === i ? "text-muted" : "text-strong",
                lineClamp: 1,
                className: tg.v9,
                children: n,
            }),
            (0, t.jsx)(n4.a, {
                className: tg.u4,
                size: "sm",
                color: !0 === i ? x.A.colors.ICON_MUTED : x.A.colors.ICON_DEFAULT,
            }),
        ],
    });
}
function tv(e) {
    let { selectedGuildId: l, originGuildId: n, onChange: r, loading: a, disabled: o } = e,
        d = (0, s.bG)([tn.Ay], () => tn.Ay.getFlattenedGuildIds()),
        u = (0, s.bG)([M.A], () => M.A.getGuilds()),
        c = (0, s.bG)([eW.A], () => {
            let e = eW.A.getGuildId();
            return null == e || eg._.has(e) ? null : e;
        }),
        g = (0, s.cf)([eu.Ay, tn.Ay], () => {
            let e = {};
            for (let l of tn.Ay.getFlattenedGuildIds()) {
                let n = eu.Ay.getSelfMember(l)?.nick;
                null != n && (e[l] = n);
            }
            return e;
        }),
        f = i.useMemo(() => {
            let e = {
                    id: tf,
                    label: ez.intl.string(ez.t["2p07FR"]),
                    value: tf,
                    leading: (0, t.jsx)(te.p, { size: "refresh_sm", color: x.A.colors.ICON_DEFAULT }),
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
                                  leading: (0, t.jsx)(tm, { guild: n }),
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
                          leading: (0, t.jsx)(tm, { guild: r }),
                          description: g[r.id] ?? void 0,
                      },
                      ...i,
                  ];
        }, [d, u, n, c, g]),
        m = l ?? tf,
        p = f.find((e) => e.value === m) ?? f[0],
        v = i.useCallback(
            (e) => {
                let n = e === tf ? null : e;
                n !== l && r(n);
            },
            [r, l],
        );
    return (0, t.jsx)(tc, {
        className: tg.kL,
        label: ez.intl.string(ez.t.rki38K),
        listboxClassName: tg.yt,
        options: f,
        value: m,
        onSelectionChange: v,
        loading: a,
        disabled: o,
        renderListItem: (e) => (0, t.jsx)(tp, { leading: e.leading, label: e.label, description: e.description }),
        children: (e) =>
            (0, t.jsx)(tx, { leading: p.value === tf ? null : p.leading, label: p.label, disabled: o, ...e }),
    });
}
var th = n(49999),
    tA = n(809467);
let tb = "profile-modal-editing-panel",
    tj = "profile-modal-editing-panel-heading",
    tI = "profile-editing-nameplate-error",
    tC = "profile-editing-avatar-error",
    tN = "profile-editing-avatar-decoration-error",
    ty = "profile-editing-banner-error",
    tE = "profile-editing-display-name-style-error";
function tP(e) {
    let { onClick: l, className: n, innerRef: i } = e;
    return (0, t.jsx)(e2.m, {
        text: ez.intl.string(ez.t.Qn47Ud),
        delay: 150,
        ariaHidden: !0,
        children: (0, t.jsx)(ew.D, {
            innerRef: i,
            "aria-label": ez.intl.string(ez.t.Qn47Ud),
            "aria-expanded": !1,
            "aria-controls": tb,
            className: a()(tA.eg, n),
            onClick: l,
            focusProps: { offset: { right: 6 } },
            children: (0, t.jsx)(lV.V, { size: "sm", color: x.A.colors.ICON_STRONG }),
        }),
    });
}
function tk(e) {
    let { onClick: l, className: n, buttonRef: i } = e;
    return (0, t.jsx)("div", {
        className: n,
        children: (0, t.jsx)(e2.m, {
            text: ez.intl.string(ez.t.Qn47Ud),
            ariaHidden: !0,
            children: (0, t.jsx)(lU.K, {
                buttonRef: i,
                "aria-label": ez.intl.string(ez.t.Qn47Ud),
                "aria-expanded": !1,
                "aria-controls": tb,
                icon: lV.V,
                onClick: l,
                variant: "secondary",
                size: "sm",
            }),
        }),
    });
}
function tS(e) {
    let { onClick: l, innerRef: n } = e;
    return (0, t.jsx)(e2.m, {
        text: ez.intl.string(ez.t["l/A351"]),
        ariaHidden: !0,
        children: (0, t.jsx)(ew.D, {
            innerRef: n,
            className: tA.cS,
            "aria-label": ez.intl.string(ez.t["l/A351"]),
            onClick: l,
            "aria-controls": tb,
            "aria-expanded": !0,
            children: (0, t.jsx)(lF.V, { size: "md", color: "currentColor" }),
        }),
    });
}
function tR() {
    let [e, l] = (0, lq.V)("per-server-profile-editing-notice-dismissed", !1);
    return e
        ? null
        : (0, t.jsxs)("div", {
              className: tA.X6,
              children: [
                  (0, t.jsx)(eN.E, {
                      variant: "text-sm/normal",
                      color: "text-default",
                      children: ez.intl.string(ez.t["gBIG/N"]),
                  }),
                  (0, t.jsx)(ew.D, {
                      "aria-label": ez.intl.string(ez.t.rSe9ra),
                      className: tA.TD,
                      onClick: () => l(!0),
                      children: (0, t.jsx)(lB.P, { size: "refresh_sm", color: "currentColor" }),
                  }),
              ],
          });
}
function tT() {
    let e = i.useCallback(() => {
            (0, l1.pX)(q.BVt.NITRO_HOME), (0, l7.closeUserProfileModal)();
        }, []),
        l = (0, lg.A)(e),
        n = n7(ez.intl.string(ez.t["7IWwak"]));
    return (0, t.jsx)(lQ.A, {
        subscriptionTier: n2.pe.TIER_2,
        children: (e) => {
            let { onClick: i } = e;
            return (0, t.jsxs)("div", {
                className: tA.eW,
                children: [
                    (0, t.jsxs)("div", {
                        className: tA.tm,
                        children: [
                            (0, t.jsx)(lW.D, {
                                variant: "text-md/medium",
                                color: "text-default",
                                children: ez.intl.string(ez.t.bO0TOe),
                            }),
                            (0, t.jsx)(eN.E, {
                                variant: "text-xs/medium",
                                color: "text-default",
                                children: ez.intl.format(ez.t["3PujdE"], { onClick: l }),
                            }),
                        ],
                    }),
                    (0, t.jsx)(lH.$, {
                        variant: "expressive",
                        size: "sm",
                        icon: lz.t,
                        text: n,
                        onClick: i,
                        fullWidth: !0,
                    }),
                    (0, t.jsx)("div", {
                        className: tA.D0,
                        children: (0, t.jsx)("div", { className: tA.ZN, children: (0, t.jsx)(lK.X, { size: "xs" }) }),
                    }),
                ],
            });
        },
    });
}
function t_() {
    return (0, t.jsx)(eN.E, {
        variant: "text-xs/normal",
        color: "text-subtle",
        className: tA.BJ,
        "aria-hidden": !0,
        children: ez.intl.format(ez.t.kYv9DM, {
            nitroIconHook: () => (0, t.jsx)(lz.t, { size: "xxs", color: "currentColor", className: tA.qp }),
        }),
    });
}
function tD(e) {
    let { heading: l, children: n, disabled: i = !1, showNitroIcon: r = !1, badge: a } = e;
    return (0, t.jsxs)("div", {
        className: tA.Os,
        children: [
            (0, t.jsxs)("div", {
                className: tA.AM,
                children: [
                    (0, t.jsx)(lW.D, {
                        className: tA.i_,
                        variant: "text-sm/medium",
                        color: i ? "text-muted" : "text-strong",
                        children: l,
                    }),
                    r &&
                        (0, t.jsx)(e2.m, {
                            text: ez.intl.string(ez.t["5AFxuK"]),
                            shouldShow: !i,
                            ariaHidden: !0,
                            children: (0, t.jsx)(lz.t, {
                                className: tA.l3,
                                size: "xs",
                                color: i ? x.A.colors.ICON_MUTED : x.A.colors.ICON_STRONG,
                                "aria-hidden": !0,
                            }),
                        }),
                    null != a && (0, t.jsx)("span", { className: tA.NY, children: a }),
                ],
            }),
            n,
        ],
    });
}
function tL(e) {
    let { user: l, guildId: n, disabled: i, errorMessage: r } = e,
        a = (0, lJ.ux)("UserProfileModalV2EditingPanel"),
        [s, o] = (0, l$.kn)(a && !i ? [lG.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE] : []),
        d = s === lG.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE;
    return (0, t.jsxs)(tD, {
        heading: ez.intl.string(ez.t.NEzEws),
        disabled: i,
        showNitroIcon: !0,
        badge: d ? (0, t.jsx)(lY.Lp, { text: ez.intl.string(ez.t.y2b7CA), "aria-hidden": !0 }) : void 0,
        children: [
            (0, t.jsx)(nA, {
                user: l,
                guildId: n,
                disabled: i,
                errorMessageId: null != r ? tE : void 0,
                onOpen: d ? () => o(th.i.TAKE_ACTION) : void 0,
            }),
            (0, t.jsx)(tO, { id: tE, message: r }),
        ],
    });
}
function tO(e) {
    let { id: l, message: n } = e;
    return null == n
        ? null
        : (0, t.jsxs)("div", {
              className: tA.Zi,
              role: "alert",
              children: [
                  (0, t.jsx)(c.E, { size: "xs", color: x.A.colors.TEXT_FEEDBACK_CRITICAL }),
                  (0, t.jsx)(eN.E, { variant: "text-xs/normal", color: "text-feedback-critical", id: l, children: n }),
              ],
          });
}
function tM(e) {
    let { isDismissed: l } = e;
    return (0, d.p)(!l, {
        initial: { opacity: 1, y: 0 },
        from: { opacity: 0, y: 48 },
        enter: { opacity: 1, y: 0, config: { tension: 200, friction: 25 } },
        leave: { opacity: 0, y: 48, config: { tension: 300, friction: 25 } },
    })((e, l) =>
        l ? (0, t.jsx)(lw.animated.div, { className: tA.HT, style: e, children: (0, t.jsx)(n9, {}) }) : null,
    );
}
function tw(e) {
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
        p = (0, s.bG)([ec.default], () => ec.default.getCurrentUser()),
        x = (0, s.bG)([G.A], () => G.A.hidePersonalInformation),
        v = o || d,
        h = null != l,
        A = null != p && eJ.Ay.canUsePremiumProfileCustomization(p),
        b = !A && !h,
        j = h && !A,
        I = (0, lZ.sk)("UserProfileModalV2EditingPanel"),
        C = l2.useConfig({ location: "UserProfileModalV2EditingPanel" }).enabled,
        N = (0, s.bG)([eg.A], () => eg.A.getErrors(l)),
        y = N.nameplate?.[0] ?? N.nameplate_sku_id?.[0],
        E = N.avatar?.[0],
        P = N.avatar_decoration_sku_id?.[0],
        k = N.banner?.[0],
        S = N.display_name_font_id?.[0] ?? N.display_name_effect_id?.[0] ?? N.display_name_colors?.[0],
        R = (0, lg.A)(r),
        T = i.useRef(null),
        {
            isUpsellDismissed: _,
            handleScrollDismiss: D,
            shouldAddUpsellSafePadding: L,
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
    let O = (0, t.jsx)(tL, { user: p, guildId: l, disabled: v || j, errorMessage: S }),
        M = A || h ? "inline" : C ? "end" : "hidden";
    return (0, t.jsx)("aside", {
        id: tb,
        "aria-labelledby": tj,
        className: a()(tA.nd, { [tA.VU]: j && !x }, c),
        "aria-busy": o,
        children: (0, t.jsxs)("div", {
            className: tA.l$,
            children: [
                (0, t.jsx)(f.A, { children: (0, t.jsx)(m.H, { id: tj, children: ez.intl.string(ez.t["L+ch00"]) }) }),
                (0, t.jsxs)("div", {
                    className: tA.wx,
                    children: [
                        (0, t.jsx)(tS, { innerRef: g, onClick: u }),
                        (0, t.jsx)(tv, {
                            selectedGuildId: l ?? null,
                            originGuildId: n,
                            onChange: R,
                            loading: o,
                            disabled: x,
                        }),
                    ],
                }),
                x
                    ? (0, t.jsx)(n6, {})
                    : (0, t.jsxs)(t.Fragment, {
                          children: [
                              (0, t.jsx)(m.F, {
                                  children: (0, t.jsxs)(lX.zC, {
                                      ref: T,
                                      className: a()(tA.XG, { [tA.uH]: L }),
                                      onScroll: D,
                                      children: [
                                          h && (A ? (0, t.jsx)(tR, {}) : (0, t.jsx)(tT, {})),
                                          A && (0, t.jsx)(t_, {}),
                                          (0, t.jsxs)(tD, {
                                              heading: ez.intl.string(ez.t.x5CoXR),
                                              disabled: v || j,
                                              children: [
                                                  (0, t.jsx)(nb.A, {
                                                      user: p,
                                                      guildId: l,
                                                      disabled: v || j,
                                                      errorMessageId: null != y ? tI : void 0,
                                                  }),
                                                  (0, t.jsx)(tO, { id: tI, message: y }),
                                              ],
                                          }),
                                          (0, t.jsxs)(tD, {
                                              heading: ez.intl.string(ez.t["50Nwpc"]),
                                              disabled: v || j,
                                              children: [
                                                  (0, t.jsx)(l3.A, {
                                                      user: p,
                                                      guildId: l,
                                                      disabled: v || j,
                                                      errorMessageId: null != E ? tC : void 0,
                                                  }),
                                                  (0, t.jsx)(l9.A, {
                                                      user: p,
                                                      guildId: l,
                                                      disabled: v || j,
                                                      errorMessageId: null != P ? tN : void 0,
                                                  }),
                                                  (0, t.jsx)(tO, { id: tC, message: (0, l0.d3)(E) }),
                                                  (0, t.jsx)(tO, { id: tN, message: P }),
                                              ],
                                          }),
                                          "inline" === M && O,
                                          A || h
                                              ? (0, t.jsxs)(tD, {
                                                    heading: ez.intl.string(ez.t.Zenogr),
                                                    disabled: v || j,
                                                    showNitroIcon: !0,
                                                    children: [
                                                        (0, t.jsx)(nJ, { user: p, guildId: l, disabled: v || !A }),
                                                        (0, t.jsx)(nd, {
                                                            userId: p.id,
                                                            guildId: l,
                                                            disabled: v || !A,
                                                            errorMessageId: null != k ? ty : void 0,
                                                        }),
                                                        (0, t.jsx)(tO, { id: ty, message: (0, l0.d3)(k) }),
                                                    ],
                                                })
                                              : (0, t.jsx)(tD, {
                                                    heading: ez.intl.string(ez.t["/X3fkf"]),
                                                    disabled: v || j,
                                                    children: (0, t.jsx)(nn, { user: p, disabled: v }),
                                                }),
                                          (0, t.jsxs)(tD, {
                                              heading: ez.intl.string(I ? ez.t["Vfbar/"] : ez.t.wR5wOo),
                                              disabled: v || j,
                                              children: [
                                                  (0, t.jsx)(nV, {
                                                      user: p,
                                                      guildId: l,
                                                      disabled: v || j,
                                                      variant: I ? "square" : "full-height-bar",
                                                  }),
                                                  I && (0, t.jsx)(nK, { user: p, guildId: l, disabled: v || j }),
                                              ],
                                          }),
                                          "end" === M && O,
                                      ],
                                  }),
                              }),
                              b && (0, t.jsx)(tM, { isDismissed: _ }),
                          ],
                      }),
            ],
        }),
    });
}
var tG = n(576260),
    tV = n(347805),
    tU = n(629403),
    tF = n(612630),
    tB = n(260598);
function tW(e) {
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
        C = null != h && (l ? r : n).length > h ? ez.intl.formatToPlainString(ez.t.ICT5S6, { maxLength: h }) : void 0,
        N = l && r !== n,
        y = C ?? (N ? void 0 : j),
        E = i.useCallback((e) => {
            let l = e.currentTarget;
            l.setSelectionRange(l.value.length, l.value.length);
        }, []);
    return (0, t.jsx)(e6, {
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
        previewErrorMessage: y,
        input: (0, t.jsx)(tB.f, {
            label: v,
            hideLabel: !0,
            inputRef: g,
            value: r,
            onChange: a,
            onFocus: E,
            onKeyDown: f,
            maxLength: h,
            error: y,
            placeholder: p,
            rows: A,
            disabled: b,
            autosize: !0,
        }),
    });
}
var tH = n(673451);
function tz(e) {
    let { userId: l, className: n, autoFocus: r = !1, onUpdate: a } = e,
        o = (0, s.bG)([G.A], () => G.A.hidePersonalInformation),
        { loading: d, note: u } = (0, tF.A)(l),
        [c, g] = i.useState(),
        [f, m] = i.useState(),
        p = c ?? u,
        x = i.useCallback(
            async (e) => {
                if ((u ?? "") !== e) {
                    m(void 0), g(e), a?.();
                    try {
                        await tU.A.updateNote(l, e);
                    } catch {
                        m(ez.intl.string(ez.t.F8FvUy));
                    }
                }
            },
            [l, u, a],
        ),
        v = d && null == p,
        h = e9({ value: p ?? "", onCommit: x, disabled: v }),
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
            ? (0, t.jsx)(eN.E, { variant: "text-sm/normal", color: "text-default", className: tH.t, children: p })
            : null;
    return (0, t.jsx)(tW, {
        ...h,
        className: n,
        preview: j,
        editButtonAriaLabel: ez.intl.string(ez.t.PbMNh2),
        label: ez.intl.string(ez.t.PbMNh2),
        placeholder: v ? ez.intl.string(ez.t["WLKx/9"]) : ez.intl.string(ez.t.VBhOe2),
        maxLength: q.T7x,
        rows: 3,
        disabled: v,
        error: f,
    });
}
var tK = n(83013),
    tY = n(518477),
    tX = n(77085);
function tq(e) {
    let { userId: l } = e,
        n = (0, eh.g)(),
        { trackUserProfileAction: i } = (0, F.NJ)(),
        r = (0, H.X)("UserProfileModalV2NotesSection"),
        a = r ? tz : tV.A;
    return (0, t.jsx)(tK.A, {
        heading: ez.intl.string(ez.t["mQKv+v"]),
        scrollTargetId: tY.bk.NOTE,
        children: (0, t.jsx)(a, {
            userId: l,
            className: r ? tX.N : tX.w,
            autoFocus: n === tY.bk.NOTE,
            onUpdate: () => i({ action: "SET_NOTE" }),
        }),
    });
}
var tZ = n(123292),
    t$ = n(921701),
    tJ = n(861173);
function tQ(e) {
    let { icon: l, message: n, actionLabel: r, onAction: s, actionDisabled: o, type: d, autoFocus: u } = e,
        c = i.useRef(null);
    return (
        i.useEffect(() => {
            u && c.current?.focus();
        }, [u]),
        (0, t.jsx)("div", {
            className: t$.kL,
            children: (0, t.jsxs)("div", {
                className: a()(tJ.oR, t$.Qs),
                "data-type": d,
                children: [
                    (0, t.jsx)("div", { className: t$.Kk, children: l }),
                    (0, t.jsx)(eN.E, { color: "text-strong", variant: "text-sm/semibold", children: n }),
                    null != r &&
                        null != s &&
                        (0, t.jsx)("div", {
                            className: t$.hP,
                            children: (0, t.jsx)(tZ.Q, {
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
var t0 = n(765178),
    t1 = n(346055),
    t2 = n(289873),
    t7 = n(984180);
function t3(e) {
    let { showScrim: l, showLoadingSpinner: n, className: r, children: s } = e;
    i.useEffect(() => {
        n && t0.O.announce(ez.intl.string(ez.t["QR+vBP"]));
    }, [n]);
    let o = i.useRef(null);
    return (
        (0, t1.f)(o, l),
        (0, t.jsxs)(t.Fragment, {
            children: [
                (0, t.jsx)("div", {
                    className: a()(t7.f, l && t7.z),
                    children: n && (0, t.jsx)(t2.y, { type: t2.t.SPINNING_CIRCLE_SIMPLE, animated: !0 }),
                }),
                (0, t.jsx)("div", { ref: o, "aria-hidden": l || void 0, className: r, children: s }),
            ],
        })
    );
}
var t9 = n(568602),
    t8 = n(625494);
function t5(e) {
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
                t8._.subscribe(q.jej.SHAKE_PROFILE_MODAL, e),
                () => {
                    t8._.unsubscribe(q.jej.SHAKE_PROFILE_MODAL, e);
                }
            );
        }, []),
        (0, t.jsx)(t9.b, { isShaking: n, intensity: 1.4, children: l })
    );
}
var t6 = n(841417),
    t4 = n(933832),
    ie = n(972213),
    il = n(97483),
    it = n(384377);
let ii = {
        [tY.jM.WIDGET_ADDED]: {
            message: ez.intl.string(ez.t.fFP1Uy),
            icon: (0, t.jsx)(t4.A, { size: "sm", color: x.A.colors.STATUS_POSITIVE.css }),
        },
        [tY.jM.WIDGET_REMOVED]: {
            message: ez.intl.string(ez.t.zzsK7h),
            icon: (0, t.jsx)(t4.A, { size: "sm", color: x.A.colors.STATUS_POSITIVE.css }),
        },
        [tY.jM.PROFILE_SAVE_GENERIC_FAILURE]: {
            message: ez.intl.string(ez.t["84MExs"]),
            icon: (0, t.jsx)(ie.d, { size: "sm", color: x.A.colors.ICON_FEEDBACK_CRITICAL }),
            type: il.Ck.FAILURE,
        },
        [tY.jM.SOMETHING_WENT_WRONG]: {
            message: ez.intl.string(ez.t.F8FvUy),
            icon: (0, t.jsx)(ie.d, { size: "sm", color: x.A.colors.ICON_FEEDBACK_CRITICAL }),
            type: il.Ck.FAILURE,
        },
    },
    ir = (e) => {
        let { className: l } = e,
            n = (0, it.fu)(),
            r = (0, s.bG)([e7.Ay], () => e7.Ay.useReducedMotion),
            [a, o] = i.useState(!1),
            [u, c] = i.useState(null);
        i.useEffect(() => {
            null !== n ? (o(!0), c(ii[n]), t0.O.announce(ii[n].message)) : o(!1);
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
            i.useEffect(() => () => (0, it.XA)(null), []),
            i.useEffect(() => {
                if (a) {
                    let e = setTimeout(() => {
                        (0, it.XA)(null);
                    }, 2e3);
                    return () => clearTimeout(e);
                }
            }, [a]),
            (0, t.jsx)(t.Fragment, {
                children: g(
                    (e, n) =>
                        n &&
                        null !== u &&
                        (0, t.jsx)(lw.animated.div, { className: l, style: e, children: (0, t.jsx)(tQ, { ...u }) }),
                ),
            })
        );
    };
var ia = n(297413),
    is = n(878555),
    io = n(826673),
    id = n(576705),
    iu = n(292666);
function ic(e) {
    let { isEditing: l, inputRef: n, ...t } = e9(e);
    return (
        i.useEffect(() => {
            l && null != n.current && n.current.setSelectionRange(n.current.value.length, n.current.value.length);
        }, [l, n]),
        { isEditing: l, inputRef: n, ...t }
    );
}
function ig(e) {
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
    return (0, t.jsx)(iu.k, {
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
function im(e) {
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
        N =
            (null != h && (l ? i : n).length > h
                ? ez.intl.formatToPlainString(ez.t.ICT5S6, { maxLength: h })
                : void 0) ?? A,
        y = "compact" === v ? { variant: "compact" } : { variant: "default", trailing: j };
    return (0, t.jsx)(e6, {
        ...y,
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
        input: (0, t.jsx)(ig, {
            inputRef: c,
            label: x,
            value: i,
            onChange: r,
            onKeyDown: g,
            maxLength: h,
            placeholder: m,
            trailing: j,
            error: N,
            helperText: b,
        }),
        previewErrorMessage: N,
        previewWarningMessage: b,
    });
}
var ip = n(35783);
function ix(e) {
    return null == e || "" === e ? void 0 : e;
}
function iv(e) {
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
        j = eJ.Ay.canUsePremiumProfileCustomization(p),
        C = (0, lJ.ux)("UserProfileModalV2EditableDisplayName"),
        { canChangeDisplayName: N, permissionsLoaded: y } = (0, s.cf)([id.A, M.A], () => {
            if (!A || null == b) return { canChangeDisplayName: !0, permissionsLoaded: !0 };
            let e = M.A.getGuild(b);
            return null == e
                ? { canChangeDisplayName: !1, permissionsLoaded: !1 }
                : {
                      canChangeDisplayName: id.A.can(q.xBc.CHANGE_NICKNAME, e) || id.A.can(q.xBc.MANAGE_NICKNAMES, e),
                      permissionsLoaded: !0,
                  };
        }),
        {
            value: E,
            previewValue: P,
            onCommit: k,
        } = ((n = null != (l = v?.guildId ?? null)),
        (r = (0, s.bG)([ec.default], () => ec.default.getCurrentUser()?.globalName ?? null)),
        (a = (0, s.bG)([eu.Ay], () => (null != l ? (eu.Ay.getMember(l, p.id)?.nick ?? null) : null))),
        (o = (0, s.bG)([eg.A], () => eg.A.getPendingChanges(null).pendingGlobalName)),
        (d = (0, s.bG)([eg.A], () => eg.A.getPendingChanges(l).pendingNickname)),
        (g = (c = void 0 !== (u = n ? d : o) ? u : n ? a : r) ?? ""),
        (f = ix(c) ?? ix(r) ?? p.username),
        (m = ix(c) ?? p.username),
        {
            value: g,
            previewValue: n ? f : m,
            onCommit: i.useCallback(
                (e) => {
                    n ? (0, eQ.p)({ nickname: e.trim(), guildId: l ?? void 0 }) : (0, eQ.p)({ globalName: e.trim() });
                },
                [n, l],
            ),
        }),
        S = ic({ value: E, onCommit: k, disabled: !N }),
        { isEditing: R, handleCommit: T } = S,
        _ = (0, s.bG)([eg.A], () => eg.A.getErrors(b ?? null)),
        D = (0, e$.EC)(b ?? null),
        L = A ? _.nick?.[0] : _.global_name?.[0],
        O = D?.nick?.[0],
        w = (0, s.bG)([eg.A], () => eg.A.getPendingChanges(b ?? null).pendingDisplayNameStyles),
        G = ez.intl.string(A ? ez.t.mq6Cg9 : ez.t.XuZU7A),
        V = A ? ez.intl.string(ez.t.YcDKr8) : p.username,
        U = ez.intl.string(A ? ez.t["g7OSZ/"] : ez.t.kyfzzc),
        F = i.useRef(null),
        B = i.useCallback(
            (e) => {
                e.stopPropagation(),
                    R && T(),
                    C &&
                        (0, io.Dr)(lG.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE, {
                            dismissAction: th.i.INDIRECT_ACTION,
                        }),
                    (0, nm.L)({ analyticsLocations: h, guildId: b, stackingBehavior: "stack", returnRef: F });
            },
            [R, T, h, b, C],
        ),
        W = {
            icon: lV.V,
            tooltip: ez.intl.string(ez.t.lqKKI2),
            "aria-label": ez.intl.string(ez.t["Wkg/CF"]),
            "aria-haspopup": "dialog",
            onClick: B,
            buttonRef: F,
        },
        H =
            A && !N && y
                ? (0, t.jsx)(e2.m, {
                      text: ez.intl.string(ez.t.gzjxQi),
                      children: (0, t.jsx)(ew.D, {
                          tag: "span",
                          className: ip.C,
                          children: (0, t.jsx)(lK.X, {
                              size: "refresh_sm",
                              color: x.A.colors.ICON_SUBTLE,
                              "aria-label": ez.intl.string(ez.t.VPu695),
                          }),
                      }),
                  })
                : null,
        z =
            null != P
                ? (0, t.jsx)(is.c$, {
                      user: p,
                      guildId: b,
                      displayName: P,
                      size: "lg",
                      pendingDisplayNameStyles: w,
                      className: ip.d,
                      displayNameTrailing: H,
                  })
                : null;
    return (0, t.jsx)(im, {
        ...S,
        preview: z,
        placeholder: V,
        editButtonAriaLabel: U,
        label: G,
        maxLength: q.zzC,
        trailing: N && j ? W : void 0,
        error: L,
        warning: O,
        disabled: !N,
    });
}
var ih = n(469432);
function iA(e) {
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
        (r = (0, s.bG)([eg.A], () => eg.A.getPendingChanges(l).pendingPronouns)),
        (o = n ? u?._guildMemberProfile?.pronouns : u?.pronouns),
        (d = u?.getPreviewPronouns(r) ?? void 0),
        {
            value: r ?? o ?? "",
            previewValue: d,
            onCommit: i.useCallback(
                (e) => {
                    (0, eQ.p)({ pronouns: e, guildId: u?.guildId ?? void 0 });
                },
                [u?.guildId],
            ),
        }),
        m = ic({ value: c, onCommit: f }),
        { isEditing: p } = m,
        x = u?.guildId != null,
        v = null != g && g.length > 0,
        h = ez.intl.string(x ? ez.t.AXiE0i : ez.t["76Aqhl"]);
    return (0, t.jsx)(im, {
        ...m,
        size: "compact",
        className: a()(ih.k, p && ih.J),
        preview: v ? (0, t.jsx)(is.n2, { pronouns: g }) : null,
        editButtonAriaLabel: ez.intl.string(ez.t.h6VAO7),
        label: ez.intl.string(ez.t["rniRE+"]),
        placeholder: h,
        maxLength: q.VE5,
    });
}
var ib = n(145497),
    ij = n(685073),
    iI = n(318785),
    iC = n(534400),
    iN = n(743981),
    iy = n(724637),
    iE = n(329296);
let iP = "no-server-tag";
function ik(e) {
    let { buttonRef: l, guildId: n, guildTag: i, guildBadge: r, ...s } = e,
        o = null == i || null == n;
    return (0, t.jsx)(ew.D, {
        innerRef: l,
        className: a()(iy.L5, { [iy.wK]: o }),
        ...s,
        children: (0, t.jsxs)(eN.E, {
            variant: o ? "text-xs/normal" : "text-xs/semibold",
            color: o ? "input-placeholder-text-default" : "text-default",
            className: iy.W3,
            tag: "span",
            children: [
                o
                    ? ez.intl.string(ez.t.Pdd1nd)
                    : (0, t.jsxs)(t.Fragment, {
                          children: [
                              (0, t.jsx)(
                                  iC.Z9,
                                  {
                                      src: (0, ij.gC)(n, r, iN.Sl.SIZE_14),
                                      size: iN.Sl.SIZE_14,
                                      className: iy.Ap,
                                      "aria-hidden": !0,
                                  },
                                  (0, ij.gC)(n, r, iN.Sl.SIZE_14) ?? n,
                              ),
                              i,
                          ],
                      }),
                (0, t.jsx)(n4.a, { size: "xs", color: "currentColor", className: iy.u4 }),
            ],
        }),
    });
}
function iS() {
    let e = (0, iI.b)(),
        l = i.useMemo(() => new Map(e.map((e) => [e.id, e])), [e]),
        n = (0, s.bG)([ec.default], () => {
            let e = ec.default.getCurrentUser();
            return (0, ij.Zo)(e?.primaryGuild).guildId ?? null;
        }),
        r = (0, s.bG)([eg.A], () => eg.A.getPendingChanges(null).pendingPrimaryGuildId),
        a = void 0 !== r ? r : n,
        o = null != a ? (l.get(a) ?? null) : null,
        d = o?.profile?.tag ?? null,
        u = o?.profile?.badge ?? void 0,
        c = i.useCallback(
            (e) =>
                e.id === iP
                    ? (0, t.jsx)("div", {
                          className: iE.uN,
                          children: (0, t.jsx)(eN.E, {
                              variant: "text-md/normal",
                              color: "input-placeholder-text-default",
                              className: iy.ve,
                              children: e.label,
                          }),
                      })
                    : (0, t.jsx)(tr.c, { ...e }),
            [],
        ),
        g = i.useMemo(
            () => [
                { id: iP, label: ez.intl.string(ez.t.VxdWWH), value: null },
                ...e.flatMap((e) => {
                    let l = e.profile?.tag;
                    if (null == l) return [];
                    let n = e.profile?.badge ?? void 0;
                    return [
                        {
                            id: e.id,
                            label: e.name,
                            value: e.id,
                            leading: (0, t.jsx)(ib.j, {
                                guildId: e.id,
                                guildName: e.name,
                                guildIcon: e.icon,
                                iconSize: 20,
                                animate: !1,
                            }),
                            trailing: (0, t.jsx)(iC.o9, { guildId: e.id, guildTag: l, guildBadge: n }),
                        },
                    ];
                }),
            ],
            [e],
        ),
        f = i.useCallback((e) => {
            (0, eQ.p)({ primaryGuildId: e });
        }, []);
    return 0 === e.length
        ? null
        : (0, t.jsx)(tc, {
              options: g,
              value: a,
              onSelectionChange: f,
              label: ez.intl.string(ez.t.Pdd1nd),
              listboxClassName: iy.yt,
              renderListItem: c,
              children: (e) => {
                  let { buttonRef: l, selectButtonProps: n } = e;
                  return (0, t.jsx)(ik, { buttonRef: l, guildId: a, guildTag: d, guildBadge: u, ...n });
              },
          });
}
var iR = n(874644);
function iT(e) {
    let { user: l, displayProfile: n, nickname: i, trailing: r, onClose: s, allowEditing: o } = e;
    if (!o)
        return (0, t.jsx)(is.Ay, {
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
        : (0, t.jsx)(ia.A, {
              user: l,
              forceUsername: !0,
              className: iR.a1,
              usernameClass: iR.eb,
              discriminatorClass: iR.sw,
              hideBotTag: !0,
          });
    return (0, t.jsxs)("div", {
        children: [
            (0, t.jsx)(iv, { displayProfile: n, user: l }),
            (0, t.jsxs)("div", {
                className: a()(iR.AK, iR.j6),
                children: [d, (0, t.jsx)(is.Ce, {}), (0, t.jsx)(iA, { displayProfile: n }), (0, t.jsx)(iS, {}), r],
            }),
        ],
    });
}
var i_ = n(97808),
    iD = n(980707),
    iL = n(477782),
    iO = n(22231),
    iM = n(601255),
    iw = n(562819),
    iG = n(19575),
    iV = n(106106),
    iU = n(338165);
let iF = iG.Ay.getEnableHardwareAcceleration() ? i_.Js : i_.eu;
function iB(e) {
    let { onMenuClose: l, items: n, ...i } = e;
    return (0, t.jsx)(iD.W, {
        ...i,
        "data-menu-migrated": !0,
        navId: "avatar-edit-context",
        onClose: l,
        onSelect: l,
        "aria-label": ez.intl.string(ez.t.YAgq3W),
        children: (0, t.jsx)(iL.rX, { children: n }),
    });
}
function iW(e) {
    let { user: l, guildId: n } = e,
        { avatarProps: r, eventHandlers: o } = (0, eb.V)(e),
        [d, u] = i.useState(!1),
        c = i.useRef(null),
        g = i.useCallback(() => u(!1), []),
        f = (function (e) {
            let { user: l, guildId: n, onClose: r } = e,
                { newestAnalyticsLocation: a, analyticsLocations: o } = (0, I.Ay)(),
                d = null != n,
                u = (0, s.bG)([eu.Ay], () => (null != n ? eu.Ay.getMember(n, l.id) : null)),
                c = (0, s.bG)([eg.A], () => eg.A.getPendingChanges(n ?? void 0).pendingAvatar),
                g = d ? u?.avatar : l.avatar,
                f = (0, eo.z5)(c, g),
                m = d && null != l.avatar,
                p = eJ.Ay.canUsePremiumProfileCustomization(l),
                x = p || null == n,
                v = p || null == n,
                h = (0, s.bG)([M.A], () => (null != n ? M.A.getGuild(n) : null)),
                A = (0, eo.a4)({ user: l }),
                b = (0, eo.a4)({ user: l, guildId: n ?? void 0 }),
                { pendingAvatarDecoration: j } = (0, eo.CP)(n ?? void 0),
                C = void 0 !== j,
                N = null != (0, iM.A)(C ? j : b) && (C ? null != j : null != b),
                y = d && null != A,
                E = i.useCallback(() => {
                    r(),
                        (0, l0.XD)({
                            uploadType: ni.HL.AVATAR,
                            analyticsSource: a,
                            guildId: n ?? void 0,
                            stackingBehavior: "stack",
                        });
                }, [r, a, n]),
                P = i.useCallback(() => {
                    r(), (0, iw.L)({ analyticsLocations: o, guild: h ?? void 0, stackingBehavior: "stack" });
                }, [r, o, h]),
                k = i.useCallback(() => {
                    r(),
                        (0, l0.rM)(null, g, (e) => (0, eQ.p)({ guildId: n ?? void 0, avatar: e })),
                        (0, eo.WU)(m ? "reset" : "remove");
                }, [r, n, g, m]),
                S = i.useCallback(() => {
                    r(), (0, eQ.p)({ guildId: n ?? void 0, avatarDecoration: null });
                }, [r, n]);
            return i.useMemo(() => {
                let e = [];
                return (
                    x &&
                        e.push(
                            (0, t.jsx)(
                                iL.Dr,
                                { id: "change-avatar", label: ez.intl.string(ez.t["4OynCD"]), action: E },
                                "change-avatar",
                            ),
                        ),
                    v &&
                        e.push(
                            (0, t.jsx)(
                                iL.Dr,
                                { id: "change-decoration", label: ez.intl.string(ez.t.HykynS), action: P },
                                "change-decoration",
                            ),
                        ),
                    x &&
                        f &&
                        e.push(
                            m
                                ? (0, t.jsx)(
                                      iL.Dr,
                                      {
                                          id: "reset-avatar",
                                          color: "danger",
                                          label: ez.intl.string(ez.t.TDjKDm),
                                          action: k,
                                      },
                                      "reset-avatar",
                                  )
                                : (0, t.jsx)(
                                      iL.Dr,
                                      {
                                          id: "remove-avatar",
                                          color: "danger",
                                          label: ez.intl.string(ez.t.twB3fz),
                                          action: k,
                                      },
                                      "remove-avatar",
                                  ),
                        ),
                    v &&
                        N &&
                        e.push(
                            y
                                ? (0, t.jsx)(
                                      iL.Dr,
                                      {
                                          id: "reset-decoration",
                                          color: "danger",
                                          label: ez.intl.string(ez.t["2u5yu0"]),
                                          action: S,
                                      },
                                      "reset-decoration",
                                  )
                                : (0, t.jsx)(
                                      iL.Dr,
                                      {
                                          id: "remove-decoration",
                                          color: "danger",
                                          label: ez.intl.string(ez.t["9rx5GO"]),
                                          action: S,
                                      },
                                      "remove-decoration",
                                  ),
                        ),
                    e
                );
            }, [m, x, v, y, f, N, E, P, k, S]);
        })({ user: l, guildId: n, onClose: g });
    return 0 === f.length
        ? (0, t.jsx)(eb.A, { ...e })
        : (0, t.jsxs)("div", {
              ...o,
              className: a()(iV.my, iV.vk, iU.kL, { [iU.MO]: d }),
              onMouseDown: (e) => {
                  c.current?.contains(e.target) || u(!0);
              },
              children: [
                  (0, t.jsx)(iF, { ...r, imageClassName: a()(iV.Lw, iU.HU) }),
                  (0, t.jsx)(l6.Y, {
                      targetElementRef: c,
                      shouldShow: d,
                      animation: l6.Y.Animation.NONE,
                      position: "right",
                      align: "top",
                      onRequestClose: g,
                      renderPopout: (e) => (0, t.jsx)(iB, { ...e, items: f, onMenuClose: g }),
                      children: (e) =>
                          (0, t.jsx)("div", {
                              ref: c,
                              className: iU.r9,
                              children: (0, t.jsx)(lU.K, {
                                  ...e,
                                  variant: "overlay-secondary",
                                  size: "sm",
                                  icon: iO.R,
                                  "aria-label": ez.intl.string(ez.t.YAgq3W),
                                  onClick: (e) => {
                                      e.stopPropagation(), u((e) => !e);
                                  },
                              }),
                          }),
                  }),
              ],
          });
}
var iH = n(976726);
function iz(e) {
    let { onMenuClose: l, items: n, ...i } = e;
    return (0, t.jsx)(iD.W, {
        ...i,
        "data-menu-migrated": !0,
        navId: "banner-edit-context",
        onClose: l,
        onSelect: l,
        "aria-label": ez.intl.string(ez.t.FzU73A),
        children: (0, t.jsx)(iL.rX, { children: n }),
    });
}
function iK(e) {
    let { user: l, guildId: n } = e,
        [r, o] = i.useState(!1),
        d = i.useRef(null),
        u = i.useCallback(() => o(!1), []),
        c = (function (e) {
            let { user: l, guildId: n, onClose: r } = e,
                { newestAnalyticsLocation: a, analyticsLocations: o } = (0, I.Ay)(),
                d = (0, eo.N2)({ user: l, guildId: n ?? void 0 }),
                u = (0, eo.Xf)({ user: l, guildId: n ?? void 0 }),
                c = (0, eo.Xf)({ user: l, guildId: void 0 }),
                g = (0, lZ.sk)("UserProfileModalV2EditableBanner"),
                f = eJ.Ay.canUsePremiumProfileCustomization(l),
                m = null == n,
                p = m || f,
                x = g && (m || f),
                v = null != n,
                {
                    pendingBanner: h,
                    pendingProfileEffect: A,
                    pendingProfileFrame: b,
                } = (0, s.bG)([eg.A], () => eg.A.getPendingChanges(n ?? void 0)),
                j = (0, s.bG)([W.A], () =>
                    null != n ? W.A.getGuildMemberProfile(l.id, n)?.banner : W.A.getUserProfile(l.id)?.banner,
                ),
                C = (0, s.bG)([ec.default], () => ec.default.getCurrentUser()?.banner != null),
                N = (0, s.bG)([W.A], () => W.A.getUserProfile(l.id)?.profileEffect != null),
                E = (0, s.bG)([W.A], () => W.A.getUserProfile(l.id)?.profileFrame != null),
                P = (0, eo.Ac)(h, j),
                k = v && C,
                S = v && N,
                R = v && E,
                T = void 0 === A ? null != d : null != A,
                _ = void 0 === b ? null != u : null != b,
                D = (0, eo.lw)({
                    pendingValue: b,
                    userValue: c,
                    guildValue: null != n ? u : void 0,
                    guildId: n ?? void 0,
                }),
                L = (0, y.A)(D?.skuId, "UserProfileModalV2EditableBanner"),
                O = i.useCallback(() => {
                    r(),
                        (0, l0.XD)({
                            uploadType: ni.HL.BANNER,
                            analyticsSource: a,
                            guildId: n ?? void 0,
                            stackingBehavior: "stack",
                        });
                }, [r, a, n]),
                w = i.useCallback(() => {
                    r(),
                        (0, nN.W)({
                            analyticsLocations: o,
                            guild: null != n ? (M.A.getGuild(n) ?? void 0) : void 0,
                            initialSelectedEffect: d,
                            stackingBehavior: "stack",
                        });
                }, [r, o, n, d]),
                G = i.useCallback(() => {
                    r(), (0, l0.rM)(null, j, (e) => (0, eQ.p)({ guildId: n ?? void 0, banner: e }));
                }, [r, n, j]),
                V = i.useCallback(() => {
                    r(), (0, eQ.p)({ guildId: n ?? void 0, profileEffect: null });
                }, [r, n]),
                U = i.useCallback(() => {
                    r(),
                        (0, nU.w)({
                            analyticsLocations: o,
                            guild: null != n ? (M.A.getGuild(n) ?? void 0) : void 0,
                            initialSelectedProfileFrame: L,
                            stackingBehavior: "stack",
                        });
                }, [r, o, n, L]),
                F = i.useCallback(() => {
                    r(), (0, eQ.p)({ guildId: n ?? void 0, profileFrame: null });
                }, [r, n]);
            return i.useMemo(() => {
                let e = [];
                return (
                    f &&
                        e.push(
                            (0, t.jsx)(
                                iL.Dr,
                                { id: "change-banner", label: ez.intl.string(ez.t.N0bC3P), action: O },
                                "change-banner",
                            ),
                        ),
                    p &&
                        e.push(
                            (0, t.jsx)(
                                iL.Dr,
                                { id: "change-effect", label: ez.intl.string(ez.t["/6nv6N"]), action: w },
                                "change-effect",
                            ),
                        ),
                    x &&
                        e.push(
                            (0, t.jsx)(
                                iL.Dr,
                                { id: "change-frame", label: ez.intl.string(ez.t["oTSa/q"]), action: U },
                                "change-frame",
                            ),
                        ),
                    f &&
                        P &&
                        e.push(
                            k
                                ? (0, t.jsx)(
                                      iL.Dr,
                                      {
                                          id: "reset-banner",
                                          color: "danger",
                                          label: ez.intl.string(ez.t.jHlJNS),
                                          action: G,
                                      },
                                      "reset-banner",
                                  )
                                : (0, t.jsx)(
                                      iL.Dr,
                                      {
                                          id: "remove-banner",
                                          color: "danger",
                                          label: ez.intl.string(ez.t.tT9n7D),
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
                                      iL.Dr,
                                      {
                                          id: "reset-effect",
                                          color: "danger",
                                          label: ez.intl.string(ez.t.Lb7lu9),
                                          action: V,
                                      },
                                      "reset-effect",
                                  )
                                : (0, t.jsx)(
                                      iL.Dr,
                                      {
                                          id: "remove-effect",
                                          color: "danger",
                                          label: ez.intl.string(ez.t.zUOlT6),
                                          action: V,
                                      },
                                      "remove-effect",
                                  ),
                        ),
                    x &&
                        _ &&
                        e.push(
                            R
                                ? (0, t.jsx)(
                                      iL.Dr,
                                      {
                                          id: "reset-frame",
                                          color: "danger",
                                          label: ez.intl.string(ez.t.A0pzWn),
                                          action: F,
                                      },
                                      "reset-frame",
                                  )
                                : (0, t.jsx)(
                                      iL.Dr,
                                      {
                                          id: "remove-frame",
                                          color: "danger",
                                          label: ez.intl.string(ez.t["8DfADq"]),
                                          action: F,
                                      },
                                      "remove-frame",
                                  ),
                        ),
                    e
                );
            }, [k, f, p, x, S, R, P, T, _, O, w, U, G, V, F]);
        })({ user: l, guildId: n, onClose: u });
    return 0 === c.length
        ? (0, t.jsx)(eI.A, { ...e })
        : (0, t.jsxs)("div", {
              className: a()(iH.kL, { [iH.MO]: r }),
              onMouseDown: (e) => {
                  d.current?.contains(e.target) || o(!0);
              },
              children: [
                  (0, t.jsx)(eI.A, { ...e, className: iH.Pr }),
                  (0, t.jsx)(l6.Y, {
                      targetElementRef: d,
                      shouldShow: r,
                      animation: l6.Y.Animation.NONE,
                      position: "right",
                      align: "top",
                      onRequestClose: u,
                      renderPopout: (e) => (0, t.jsx)(iz, { ...e, items: c, onMenuClose: u }),
                      children: (e) =>
                          (0, t.jsx)("div", {
                              ref: d,
                              className: iH.r9,
                              children: (0, t.jsx)(lU.K, {
                                  ...e,
                                  variant: "overlay-secondary",
                                  size: "sm",
                                  icon: iO.R,
                                  "aria-label": ez.intl.string(ez.t.FzU73A),
                                  onClick: (e) => {
                                      e.stopPropagation(), o((e) => !e);
                                  },
                              }),
                          }),
                  }),
              ],
          });
}
var iY = n(777480),
    iX = n(107563),
    iq = n(570287);
n(938796);
var iZ = n(913453),
    i$ = n(667049),
    iJ = n(837531),
    iQ = n(186272),
    i0 = n(645625),
    i1 = n(337796);
let i2 = (e) => e * (2 - e),
    i7 = { "compact-sm": { avatarOffsetX: 16 }, "compact-xs": { avatarSize: o._3.SIZE_96, avatarOffsetX: 16 } };
function i3(e) {
    let { type: l, anchor: n } = e;
    return "staple" !== l || "bottom" !== n;
}
function i9(e) {
    let { displayProfile: l, pendingBanner: n } = e,
        r = (0, $.Nx)(),
        [a, s] = i.useState(void 0);
    if (
        (i.useEffect(() => {
            if (null == n || r) return;
            let e = !1;
            return (
                ev(n, 1024)
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
        : (0, t.jsx)("div", { className: i0.backgroundImage, style: { backgroundImage: `url(${o})` } });
}
function i8(e) {
    let { displayProfile: l, profileEffectOverride: n, isHovering: r } = e,
        a = void 0 !== n ? n : l?.profileEffect,
        s = i.useSyncExternalStore(
            (e) => (nP.add(e), () => nP.delete(e)),
            () => nk,
        );
    return null == a ? null : (0, t.jsx)(C.A, { skuId: a.skuId, isHovering: r, restartKey: s });
}
function i5(e) {
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
            accentColorOverride: N,
            profileEffectOverride: y,
            profileFrame: E,
            fadeInProfileFrame: k,
            allowEditing: S,
            isLoading: O = !1,
        } = e,
        M = o.id === d.id,
        V = i.useRef(null),
        { isHoveringOrFocusing: F } = (0, R.A)(V),
        [B, W] = i.useState(),
        H = i.useCallback((e) => {
            let l = e.contentRect.width;
            l <= 350 ? W("compact-xs") : l <= 380 ? W("compact-sm") : W(void 0);
        }, []);
    (0, A.g)(V, H, [], { fireOnMount: !0 });
    let z = null != B ? i7[B] : void 0,
        Z = i.useMemo(() => h ?? (0, T.A)(), [h]),
        { relationshipType: $, originApplicationId: ei } = (0, s.cf)([w.A], () => ({
            relationshipType: w.A.getRelationshipType(o.id),
            originApplicationId: w.A.getOriginApplicationId(o.id),
        })),
        er =
            ((l = o.id),
            (n = (0, K.bG)([X.default], () => X.default.locale)),
            (r = (0, K.bG)([w.A], () => (w.A.getRelationshipType(l) === q.eA$.FRIEND ? w.A.getSince(l) : null), [l])),
            (0, Y.An)(r, n)),
        ea = (0, s.bG)([G.A], () => G.A.hidePersonalInformation),
        es = (0, D.q)({ userId: o.id }),
        eo = (0, _.fi)(o.id),
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
        em = ec.length > 0,
        ep = S ? iK : eI.A,
        ex = S ? iW : eb.A;
    return (0, t.jsxs)("main", {
        className: a()(i0.profile, null != B && i0[B]),
        ref: V,
        "aria-busy": O,
        children: [
            (0, t.jsxs)("div", {
                className: i0.profileHeader,
                children: [
                    (0, t.jsx)("div", {
                        className: i0.profileHeaderBannerContainer,
                        children: (0, t.jsx)(ep, {
                            user: o,
                            displayProfile: p,
                            guildId: g,
                            themeType: ef.d.MODAL_V2,
                            specOverrides: z,
                            pendingBanner: C,
                            pendingAccentColor: N,
                        }),
                    }),
                    (0, t.jsx)(ex, {
                        user: o,
                        displayProfile: p,
                        guildId: g,
                        channelId: m,
                        themeType: ef.d.MODAL_V2,
                        specOverrides: z,
                        avatarDecorationOverride: j,
                        avatarOverride: I,
                    }),
                    (0, t.jsx)(eL.A, {
                        user: o,
                        guildId: g,
                        channelId: m,
                        themeType: ef.d.MODAL_V2,
                        hasEntered: v,
                        prompt: M ? Z : null,
                    }),
                ],
            }),
            (0, t.jsxs)(u.Ip, {
                fade: !0,
                className: i0.profileBody,
                children: [
                    (0, t.jsx)(iT, {
                        user: o,
                        displayProfile: p,
                        nickname: x,
                        trailing: (0, t.jsx)(ej.A, { displayProfile: p, themeType: ef.d.MODAL_V2, onClose: b }),
                        onClose: b,
                        allowEditing: S,
                    }),
                    $ === q.eA$.PENDING_INCOMING &&
                        (0, t.jsx)(eD.A.Overlay, {
                            className: i0.profileOverlay,
                            children: (0, t.jsx)(eP.A, {
                                user: o,
                                applicationId: ei,
                                guildId: p?.guildId ?? void 0,
                                channelId: m,
                                className: i0.profileBanner,
                            }),
                        }),
                    eo.map((e) => {
                        let { applicationId: l } = e;
                        return (0, t.jsx)(
                            eD.A.Overlay,
                            {
                                className: i0.profileOverlay,
                                children: (0, t.jsx)(eP.A, {
                                    user: o,
                                    guildId: p?.guildId ?? void 0,
                                    channelId: m,
                                    isGameRelationship: !0,
                                    applicationId: l,
                                    className: i0.profileBanner,
                                }),
                            },
                            l,
                        );
                    }),
                    o.isProvisional &&
                        (0, t.jsx)(eD.A.Overlay, {
                            className: i0.profileOverlay,
                            children: (0, t.jsx)(tK.A, {
                                heading: ez.intl.string(ez.t.Iyka0U),
                                headingVariant: "text-md/semibold",
                                headingIcon: (0, t.jsx)(c.E, { size: "xs", color: "currentColor" }),
                                className: i0.profileBanner,
                                children: (0, t.jsx)(L.T, { userId: o.id, variant: "text-sm/normal" }),
                            }),
                        }),
                    (0, t.jsx)(e_.A, { user: o, className: i0.profileBanner }),
                    p?.private &&
                        (0, t.jsx)(eD.A.Overlay, {
                            className: i0.profileOverlay,
                            children: (0, t.jsx)(eT.A, { username: x }),
                        }),
                    (0, t.jsx)("div", {
                        className: i0.profileButtons,
                        children: (0, t.jsx)(lv, {
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
                    M && (0, t.jsx)(eC.A, { isPremiumUser: (0, U.ki)(d), onInteraction: b }),
                    !ea && (0, t.jsx)(li, { displayProfile: p, isEditable: S }),
                    es.length > 0 &&
                        (0, t.jsx)(tK.A, {
                            heading: ez.intl.string(ez.t["Uv/eTx"]),
                            children: (0, t.jsx)(eE.A, { applicationIds: es }),
                        }),
                    (0, t.jsx)(tK.A, {
                        heading: ez.intl.string(ez.t.a6XYD9),
                        children: (0, t.jsx)(eS.A, { userId: o.id, guildId: p?.guildId, tooltipDelay: tY.In }),
                    }),
                    null != er &&
                        (0, t.jsx)(tK.A, {
                            heading: ez.intl.string(ez.t.wlTO8v),
                            children: (0, t.jsx)(ey, { friendsSinceDate: er }),
                        }),
                    p?.guildId != null &&
                        (0, t.jsx)(eO.A, {
                            userId: o.id,
                            guildId: p.guildId,
                            className: i0.profileRolesSection,
                            headingVariant: "text-xs/medium",
                            headingColor: "text-subtle",
                        }),
                    !ea &&
                        (S || eg) &&
                        (0, t.jsx)(tK.A, {
                            heading: ez.intl.string(ez.t["3fe7U5"]),
                            scrollTargetId: tY.bk.CONNECTIONS,
                            children: (0, t.jsx)(lM, {
                                applicationIdentities: ed,
                                connections: eu,
                                userId: o.id,
                                allowEditing: S,
                                className: i0.profileAppConnections,
                            }),
                        }),
                    !ea &&
                        em &&
                        (0, t.jsx)(tK.A, {
                            heading: ez.intl.string(ez.t.PHjkRE),
                            scrollTargetId: tY.bk.APPS,
                            children: (0, t.jsx)(eX, {
                                applicationRoleConnections: ec,
                                onClose: b,
                                className: i0.profileAppConnections,
                            }),
                        }),
                    (0, t.jsx)(tq, { userId: o.id }),
                ],
            }),
            (0, t.jsx)(i8, { displayProfile: p, profileEffectOverride: y, isHovering: F }),
            null != E && (0, t.jsx)(P.A, { frame: E, filterLayer: i3, fadeIn: k }),
        ],
    });
}
function i6(e) {
    let { user: l, displayProfile: n, pendingThemeColors: i, children: r } = e,
        {
            theme: a,
            primaryColor: s,
            secondaryColor: o,
        } = (0, Z.A)({ user: l, displayProfile: n, pendingThemeColors: i }),
        { profileThemeStyle: d, profileThemeClassName: u } = (0, ea.A)({
            theme: a,
            themeType: null,
            primaryColor: s,
            secondaryColor: o,
        });
    return (0, t.jsx)("div", { className: u, style: d, children: r });
}
function i4(e) {
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
            customStatusPrompt: _,
            openedAt: D,
            onClose: L,
            sourceAnalyticsLocations: U = [],
            themeContainerClassName: K,
        } = e,
        Y = l.id === n.id,
        {
            guildId: X,
            pendingGuildId: q,
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
                f = (0, s.bG)([W.A], () => W.A.getUserProfile(l)?.fetchError?.status ?? null, [l]),
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
                    hasError: "retrying" === d || (null != f && "loading" !== d),
                    handleSelectUserProfile: p,
                    handleRetry: 404 !== f && 429 !== f ? m : void 0,
                }
            );
        })({ userId: l.id, initialGuildId: r }),
        ee = i.useMemo(() => (null != X ? { [X]: [l.id] } : {}), [X, l.id]);
    (0, b.Eq)(ee, "UserProfileModalV2");
    let el = (0, H.X)("UserProfileModalV2"),
        en = (0, s.bG)([G.A], () => G.A.hidePersonalInformation),
        et = (0, ei.A)(l.id) && el,
        ea = (0, er.W)(l.id),
        em = Q && !ea,
        ev = et && !en && !Q,
        {
            pendingThemeColors: eb,
            avatarDecorationOverride: ej,
            avatarOverride: eI,
            bannerOverride: eC,
            accentColorOverride: eN,
            profileEffectOverride: ey,
            profileFrameOverride: eE,
        } = (function (e) {
            let { userId: l, guildId: n, allowEditingInModal: t } = e;
            return (0, s.cf)([eg.A, ec.default, eu.Ay, W.A], () => {
                if (!t) return ex;
                let e = ec.default.getUser(l);
                if (null == e) return ex;
                let {
                        pendingThemeColors: i,
                        pendingAvatarDecoration: r,
                        pendingAvatar: a,
                        pendingBanner: s,
                        pendingAccentColor: o,
                        pendingProfileEffect: d,
                        pendingProfileFrame: u,
                    } = eg.A.getPendingChanges(n),
                    c = null != n ? eu.Ay.getMember(n, l) : null,
                    g = W.A.getUserProfile(l),
                    f = null != n ? W.A.getGuildMemberProfile(l, n) : null;
                return {
                    pendingThemeColors: i,
                    avatarDecorationOverride: (0, eo.us)({
                        userValue: e.avatarDecoration,
                        guildValue: c?.avatarDecoration,
                        pendingValue: r,
                        guildId: n,
                    }),
                    avatarOverride: (0, ed.V7)({ userId: l, image: a, size: ep }),
                    bannerOverride: s,
                    accentColorOverride: o,
                    profileEffectOverride: (0, eo.us)({
                        userValue: g?.profileEffect,
                        guildValue: f?.profileEffect,
                        pendingValue: d,
                        guildId: n,
                    }),
                    profileFrameOverride: (0, eo.us)({
                        userValue: g?.profileFrame,
                        guildValue: f?.profileFrame,
                        pendingValue: u,
                        guildId: n,
                    }),
                };
            }, [l, n, t]);
        })({ userId: l.id, allowEditingInModal: ev, guildId: X }),
        {
            isExpanded: eP,
            isAnimating: eS,
            transition: eT,
            handleExpand: e_,
            handleCollapse: eL,
            refs: { expandIconButtonRef: eO, expandTabButtonRef: eM, collapseButtonRef: ew },
        } = (function () {
            let [e, l] = i.useState(() => window.innerWidth > 928),
                [n, t] = i.useState(!1),
                r = (0, d.p)(e, {
                    keys: (e) => (e ? "panel" : "empty"),
                    from: { progress: 0 },
                    enter: { progress: 1 },
                    leave: { progress: 0 },
                    config: { duration: 300, easing: i2 },
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
        eV = et && (!eP || eS),
        { defaultWishlistId: eU } = (0, s.cf)([W.A], () => ({ defaultWishlistId: W.A.getFirstWishlistId(l.id) }));
    (0, O.fw)({ wishlistId: eU, userId: l.id });
    let eF = (0, eA.fC)(),
        eB = em && (!et || !Z),
        eW = et && Q,
        eH = q !== X || eW || null != eF.interactionType,
        eK = (function (e) {
            let l,
                n,
                t,
                { user: i, currentUser: r } = e,
                { mutualFriendsCount: a, mutualGuilds: o } = (0, iZ.A)(i),
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
                c = (0, i$.A)(i.id),
                g = (0, iq.A)(i.id),
                f = [],
                m = i.id === r?.id,
                p = (0, ei.A)(i.id),
                x = W.A.getFirstWishlistId(i.id),
                v = null != x,
                h = v ? W.A.getWishlistSettings(i.id, x) : null,
                A = (v ? iX.A.getWishlistItems(x) : []).length > 0,
                b = c.length > 0;
            (p || b) && f.push({ text: ez.intl.string(ez.t.laViwx), section: tY.RP.WIDGETS }),
                f.push({ text: ez.intl.string(ez.t.chq59f), section: tY.RP.ACTIVITY });
            let j = !1 === i.nsfwAllowed,
                I = w.A.isFriend(i.id),
                C = h?.visibility === iY.a.PUBLIC;
            return (
                (m || (!m && A && C && g && (!j || (j && I)))) &&
                    f.push({ text: ez.intl.string(ez.t["7lZ31J"]), section: tY.RP.WISHLIST }),
                i.id !== r?.id &&
                    u &&
                    (f.push({ text: (0, iJ.A)(a), section: tY.RP.MUTUAL_FRIENDS }),
                    f.push({ text: (0, iQ.A)(d), section: tY.RP.MUTUAL_GUILDS })),
                f
            );
        })({ user: l, currentUser: n }),
        { analyticsLocations: eY } = (0, I.Ay)([...U, j.A.USER_PROFILE_MODAL_V2]),
        eX = (0, F.pb)({
            layout: "MODAL_V2",
            userId: l.id,
            sourceSessionId: C,
            guildId: X,
            channelId: u,
            messageId: c,
            roleId: A,
        }),
        eq = i.useCallback(() => {
            (0, B.Wn)({ analyticsLocations: eY, ...eX, action: tY.pt.SHOW_STYLES_PANEL }), e_();
        }, [eY, eX, e_]),
        eZ = i.useCallback(() => {
            (0, B.Wn)({ analyticsLocations: eY, ...eX, action: tY.pt.HIDE_STYLES_PANEL }), eL();
        }, [eY, eX, eL]),
        e$ = (0, z.Ay)(l.id, X),
        eJ = void 0 !== eE ? eE?.skuId : e$?.profileFrame?.skuId,
        eQ = (0, y.A)(eJ, "UserProfileModalV2"),
        e0 = (0, N.A)(eJ),
        { profileFrameStyle: e1, profileFrameClassName: e2 } = (0, k.A)(eJ);
    (0, E.A)({ skuId: e$?.profileFrame?.skuId, openedAt: D, context: eX, analyticsLocations: eY });
    let e7 = V.Ay.useName(e$?.guildId, u, l),
        e3 = (0, S.GV)(),
        e9 = (0, s.bG)([M.A], () => (null != X ? M.A.getGuild(X) : null)),
        e8 = Y
            ? null != e9
                ? ez.intl.formatToPlainString(ez.t.M7OhOF, { guildName: e9.name })
                : ez.intl.string(ez.t.egQPgM)
            : ez.intl.format(ez.t.KRe1Fk, { name: e7 });
    return (0, t.jsx)(I.f5, {
        value: eY,
        children: (0, t.jsx)(F.of, {
            value: eX,
            openedAt: D,
            fetchStartedAt: e$?.fetchStartedAt,
            fetchEndedAt: e$?.fetchEndedAt,
            isLoaded: e$?.isLoaded,
            children: (0, t.jsx)(eA.Hl, {
                value: eF,
                children: (0, t.jsx)(eh.N, {
                    value: R,
                    children: (0, t.jsxs)(g.EO, {
                        "data-migration-pending": !0,
                        hideShadow: !0,
                        className: a()(i1.zr, { [i1.QF]: e$?.private === !0 }),
                        transitionState: T,
                        "aria-labelledby": e3,
                        parentComponent: "UserProfileModalV2",
                        children: [
                            (0, t.jsx)(t5, {
                                children: (0, t.jsxs)("div", {
                                    className: a()(i0.layoutContainer, e2, {
                                        [i0.editingPanelEnabled]: et,
                                        [i0.editingPanelExpanded]: et && eP,
                                        [i0.isAnimating]: eS,
                                    }),
                                    style: e1,
                                    children: [
                                        (0, t.jsxs)(i6, {
                                            user: l,
                                            displayProfile: e$,
                                            pendingThemeColors: eb,
                                            children: [
                                                (0, t.jsxs)("div", {
                                                    className: i1.Oo,
                                                    children: [
                                                        (0, t.jsx)(lh.A, { isCurrentUser: Y, onClose: L }),
                                                        (0, t.jsx)(f.A, {
                                                            children: (0, t.jsx)(m.H, { id: e3, children: e8 }),
                                                        }),
                                                        eV &&
                                                            (0, t.jsx)(tk, {
                                                                buttonRef: eO,
                                                                onClick: eq,
                                                                className: i0.editingPanelExpandButtonCompact,
                                                            }),
                                                    ],
                                                }),
                                                eG &&
                                                    (0, t.jsx)("div", {
                                                        className: i0.editingPanelExpandButtonDefaultContainer,
                                                        children: (0, t.jsx)(tP, {
                                                            innerRef: eM,
                                                            onClick: eq,
                                                            className: i0.editingPanelExpandButtonDefault,
                                                        }),
                                                    }),
                                            ],
                                        }),
                                        (0, t.jsxs)(m.F, {
                                            children: [
                                                et &&
                                                    eT((e, l) =>
                                                        l
                                                            ? (0, t.jsx)(tw, {
                                                                  className: a()(i0.editingPanel, {
                                                                      [i0.isExpanded]: eP,
                                                                  }),
                                                                  selectedGuildId: q,
                                                                  originGuildId: o,
                                                                  onSelectGuildId: $,
                                                                  onClose: eZ,
                                                                  collapseButtonRef: ew,
                                                                  isLoading: Z,
                                                                  isEditingDisabled: Q,
                                                              })
                                                            : null,
                                                    ),
                                                (0, t.jsxs)(eD.A, {
                                                    className: a()(K, i1.A7, i0.profileContentOuter),
                                                    innerClassName: i0.profileContentInner,
                                                    user: l,
                                                    displayProfile: e$,
                                                    themeType: ef.d.MODAL_V2,
                                                    pendingThemeColors: eb,
                                                    isPrivate: e$?.private === !0,
                                                    children: [
                                                        (0, t.jsx)(i9, { displayProfile: e$, pendingBanner: eC }),
                                                        e$?.private === !0 && (0, t.jsx)(eR.A, {}),
                                                        !em && (0, t.jsx)(ir, { className: i0.noticeContainer }),
                                                        eB &&
                                                            (0, t.jsx)("div", {
                                                                className: i0.noticeContainer,
                                                                role: "alert",
                                                                children: (0, t.jsx)(tQ, {
                                                                    icon: (0, t.jsx)(p.i, {
                                                                        size: "sm",
                                                                        color: x.A.colors.ICON_FEEDBACK_WARNING,
                                                                    }),
                                                                    message: ez.intl.string(ez.t.L9wE7H),
                                                                    actionLabel:
                                                                        null != J
                                                                            ? ez.intl.string(ez.t["5911Lb"])
                                                                            : void 0,
                                                                    onAction: J,
                                                                    actionDisabled: !et && Z,
                                                                    autoFocus: !0,
                                                                }),
                                                            }),
                                                        (0, t.jsx)("div", {
                                                            className: i0.profileCardToastContainer,
                                                            children: (0, t.jsx)(ek.A, { userId: l.id, onClose: L }),
                                                        }),
                                                        (0, t.jsxs)(t3, {
                                                            showScrim: eH,
                                                            showLoadingSpinner: Z,
                                                            className: i0.profileContentColumns,
                                                            children: [
                                                                (0, t.jsx)(i5, {
                                                                    user: l,
                                                                    currentUser: n,
                                                                    guildId: X,
                                                                    channelId: u,
                                                                    displayProfile: e$,
                                                                    nickname: e7,
                                                                    originGuildId: o,
                                                                    hasEntered: T === v.ip.ENTERED,
                                                                    customStatusPrompt: _,
                                                                    onClose: L,
                                                                    avatarDecorationOverride: ej,
                                                                    avatarOverride: eI,
                                                                    bannerOverride: eC,
                                                                    accentColorOverride: eN,
                                                                    profileEffectOverride: ey,
                                                                    profileFrame: eQ,
                                                                    fadeInProfileFrame: e0,
                                                                    allowEditing: ev,
                                                                    isLoading: Z,
                                                                }),
                                                                (0, t.jsx)(t6.A, {
                                                                    user: l,
                                                                    currentUser: n,
                                                                    displayProfile: e$,
                                                                    guildId: X,
                                                                    channelId: u,
                                                                    items: eK,
                                                                    initialSection: P,
                                                                    onClose: L,
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
                            (0, t.jsx)(tG.A, { userId: l.id, guildId: X, className: i0.pendingChangesToolbar }),
                        ],
                    }),
                }),
            }),
        }),
    });
}
