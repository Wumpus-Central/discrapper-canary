n.d(l, { A: () => rC });
var t = n(627968),
    i = n(64700),
    r = n(503698),
    a = n.n(r),
    s = n(17928),
    o = n(935462),
    d = n(778712),
    u = n(866323),
    c = n(364522),
    g = n(695366),
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
    R = n(915089),
    S = n(713517),
    T = n(645507),
    D = n(922590),
    _ = n(821269),
    L = n(93246),
    O = n(561794),
    M = n(71393),
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
    ef = n(996988),
    em = n(985253);
let ep = (0, d.FT)(em.T[ef.d.MODAL_V2].avatarSize),
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
    eR = n(743987),
    eS = n(312381),
    eT = n(501193),
    eD = n(383448),
    e_ = n(946356),
    eL = n(983495),
    eO = n(280645),
    eM = n(305385),
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
    e1 = n(621466);
n(321073);
var e2 = n(219869),
    e7 = n(866665),
    e3 = n(775602),
    e5 = n(321027);
function e9(e) {
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
            className: e5.L7,
            children: (0, t.jsx)(e2.T, { ...n, size: "sm", variant: "input-accessory" }),
        });
    return null == l ? i : (0, t.jsx)(e7.m, { text: l, ariaHidden: !0, children: i });
}
function e6(e) {
    let { id: l, message: n, type: i } = e,
        r = "error" === i,
        a = r ? g.E : p.i;
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
        N = null != f,
        y = null != m && !N,
        E = N ? "error" : y ? "warning" : null,
        P = N ? f : m,
        k = null != E && null != P,
        R = [];
    C && R.push(j), k && "compact" !== c && R.push(I);
    let S = R.length > 0 ? R.join(" ") : void 0,
        T = (0, t.jsxs)("div", {
            ref: b,
            className: a()(e5.LL, { [e5.JD]: N, [e5.xe]: y, [e5.r9]: A }),
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
                        "aria-describedby": S,
                        "aria-expanded": !1,
                        onClick: (e) => {
                            e.stopPropagation(), u();
                        },
                        focusProps: { ringTarget: b },
                    }),
                null != g && (0, t.jsx)("div", { className: e5.lD, children: (0, t.jsx)(e8, { ...g }) }),
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
        u = (0, s.bG)([ec.default], () => ec.default.getCurrentUser()),
        c = d?.guildId != null,
        g = d?.guildId ?? null,
        f = eQ.Ay.canUsePremiumProfileCustomization(u),
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
                    (0, e0.p)({ bio: e.trim(), guildId: d?.guildId ?? void 0 });
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
        h = !(0, e$.uJ)(p),
        A = (0, s.bG)([eg.A], () => eg.A.getErrors(g)),
        b = (0, eJ.EC)(g),
        j = A.bio?.[0],
        I = b?.bio?.[0],
        C = i.useMemo(() => {
            let e;
            return (e = Math.floor(Math.random() * ln.length)), ln[e];
        }, []),
        N = c ? eK.intl.string(eK.t.yPJ9xr) : C.label();
    return !c || f
        ? (0, t.jsx)(ll, {
              ...v,
              preview: h ? (0, t.jsx)(eZ.A, { userBio: p, setLineClamp: !1 }) : null,
              placeholder: N,
              editButtonAriaLabel: eK.intl.string(eK.t.lO3n7a),
              label: eK.intl.string(eK.t["YWo+Zd"]),
              emojiPickerIntention: lt.EmojiIntention.PROFILE,
              maxLength: q.NA2,
              error: j,
              warning: I,
          })
        : h
          ? (0, t.jsx)(eZ.A, { userBio: p, setLineClamp: !1, textColor: "text-muted" })
          : null;
}
function lr(e) {
    let { displayProfile: l, isEditable: n } = e,
        r = i.useId(),
        a = l?.bio,
        s = !(0, e$.uJ)(a);
    return n || s
        ? (0, t.jsxs)("section", {
              "aria-labelledby": r,
              children: [
                  (0, t.jsx)(f.A, { children: (0, t.jsx)(m.H, { id: r, children: eK.intl.string(eK.t.ZzAR2Y) }) }),
                  n ? (0, t.jsx)(li, { displayProfile: l }) : (0, t.jsx)(eZ.A, { userBio: a, setLineClamp: !1 }),
              ],
          })
        : null;
}
var la = n(982168),
    ls = n(722868),
    lo = n(822775),
    ld = n(982985),
    lu = n(950598),
    lc = n(34188),
    lg = n(34332),
    lf = n(993401);
function lm(e) {
    let { analyticsLocations: l, newestAnalyticsLocation: n } = (0, I.Ay)(),
        r = i.useCallback(() => {
            (0, lg.Cz)({ analyticsLocations: l, analyticsSource: n });
        }, [l, n]);
    return (0, t.jsx)(lf.q3, {
        action: "VISIT_SHOP",
        icon: lc.U,
        tooltipText: eK.intl.string(eK.t.b2d0N0),
        onClick: r,
        ...e,
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
        u = (0, z.X)("UserProfileModalV2Buttons"),
        { newestAnalyticsLocation: c } = (0, I.Ay)(),
        g = (0, ls.A)({ user: l, guildId: r, channelId: a, displayProfile: s, onClose: d }),
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
                        (0, t.jsx)(ld.e, { userId: l.id, variant: "primary", disabled: !0 }),
                        (0, t.jsx)(lm, {}),
                        (0, t.jsx)(lu.Zt, { user: l, guildId: i, viewProfileItem: g }),
                    ],
                })
              : (0, t.jsxs)(t.Fragment, {
                    children: [
                        (0, t.jsx)(lo.A, { user: l, guildId: i, onClose: d }),
                        (0, t.jsx)(lm, {}),
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
            : o === q.eA$.PENDING_INCOMING
              ? (0, t.jsxs)(t.Fragment, {
                    children: [
                        (0, t.jsx)(ld.e, { userId: l.id, onClose: la.A.popAll, autoFocus: !0 }),
                        (0, t.jsx)(lu.Zt, { user: l, guildId: i }),
                    ],
                })
              : o === q.eA$.FRIEND || o === q.eA$.PENDING_OUTGOING
                ? (0, t.jsxs)(t.Fragment, {
                      children: [
                          (0, t.jsx)(ld.e, { userId: l.id, onClose: la.A.popAll, autoFocus: !0 }),
                          (0, t.jsx)(lp.Ef, { user: l, relationshipType: o, analyticsLocation: c }),
                          (0, t.jsx)(lu.Zt, { user: l, guildId: i, viewProfileItem: g }),
                      ],
                  })
                : o === q.eA$.NONE && x
                  ? (0, t.jsxs)(t.Fragment, {
                        children: [
                            (0, t.jsx)(ld.e, { userId: l.id, onClose: la.A.popAll, autoFocus: !0 }),
                            (0, t.jsx)(lp.ES, {
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
                            (0, t.jsx)(lp.cO, {
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
    lR = n(783419);
let lS = "User Profile Modal V2";
function lT(e) {
    let l = Q.A.get(e);
    (0, ly.A)({ platformType: l.type, location: lS }),
        lE.default.track(q.HAw.ACCOUNT_LINK_STEP, {
            previous_step: lS,
            current_step: "desktop oauth",
            platform_type: l.type,
        });
}
function lD() {
    lI.h.dispatch({ type: "CONNECTIONS_GRID_MODAL_SHOW", onComplete: lT, stackingBehavior: "stack" });
}
function l_(e) {
    let { account: l, locale: n, userId: i } = e,
        r = l.metadata ?? {},
        a = (0, X.An)(r[lR.pK.CREATED_AT], n),
        s = Q.A.get((0, lN.ML)(l.type));
    return (0, t.jsx)(lO, {
        renderAccountName: function () {
            let e = s?.getPlatformUserUrl?.(l);
            return null == e
                ? (0, t.jsx)(e7.m, {
                      overflowOnly: !0,
                      text: l.name,
                      children: (0, t.jsx)(eN.E, { variant: "text-sm/normal", className: eX.GW, children: l.name }),
                  })
                : (0, t.jsx)(lA.Anchor, {
                      href: e,
                      className: eX.Y2,
                      useDefaultUnderlineStyles: !1,
                      "aria-label":
                          s?.name != null
                              ? `${s.name}, ${l.name}, ${eK.intl.string(eK.t.q5jLJB)}`
                              : `${l.name}, ${eK.intl.string(eK.t.q5jLJB)}`,
                      onClick: (n) => {
                          (0, lC.zV)(q.HAw.CONNECTED_ACCOUNT_VIEWED, { platform_type: l.type, other_user_id: i }),
                              (0, lk.h)({ href: e, trusted: s?.type !== q.fg2.DOMAIN }, n);
                      },
                      children: (0, t.jsxs)("div", {
                          className: eX.vi,
                          children: [
                              (0, t.jsx)(e7.m, {
                                  overflowOnly: !0,
                                  text: l.name,
                                  children: (0, t.jsx)(eN.E, {
                                      variant: "text-sm/normal",
                                      className: eX.GW,
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
function lL(e) {
    let { identityWithApplication: l } = e,
        { identity: n, application: i } = l;
    if (null == n.profile || null == n.profile.username || null == i) return null;
    let r = lP.Ay.getApplicationIconURL({ id: i.id, icon: i.icon });
    return (0, t.jsx)(lO, {
        renderAccountName: function () {
            return (0, t.jsx)(e7.m, {
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
            (0, t.jsx)(e7.m, {
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
function lM(e) {
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
                        l.map((e) => (0, t.jsx)(l_, { account: e, userId: i, locale: d }, `${e.type}:${e.id}`)),
                        n?.map((e) => (0, t.jsx)(lL, { identityWithApplication: e }, e.identity.application_id)),
                    ],
                }),
            r &&
                (0, t.jsxs)(eG.D, {
                    className: eX.qG,
                    onClick: lD,
                    children: [
                        (0, t.jsx)(lj.j, { size: "sm", color: "currentColor" }),
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
var lw = n(193885),
    lG = n(408278),
    lV = n(554146),
    lF = n(194261),
    lU = n(789645),
    lB = n(297264),
    lW = n(821609),
    lz = n(403581),
    lH = n(812993),
    lK = n(39623),
    lX = n(890377),
    lY = n(517461),
    lq = n(13875),
    l$ = n(131607),
    lZ = n(248778),
    lJ = n(783420),
    lQ = n(252732),
    l0 = n(976860),
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
var l3 = n(975732),
    l5 = n(487233),
    l9 = n(120386),
    l8 = n(317097),
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
        { pendingAccentColor: d, savedAccentColor: u } = (0, s.cf)([eg.A, W.A], () => ({
            pendingAccentColor: eg.A.getPendingChanges().pendingAccentColor,
            savedAccentColor: W.A.getUserProfile(l.id)?.accentColor,
        })),
        c = d ?? u ?? (0, l8.LX)(o[0] ?? a),
        g = i.useCallback((e) => (0, e0.p)({ accentColor: e }), []);
    return (0, t.jsx)(l4.Y, {
        targetElementRef: r,
        renderPopout: (e) => (0, t.jsx)(ne.VN, { ...e, value: c, onChange: g, suggestedColors: o, showEyeDropper: !0 }),
        children: (e) =>
            (0, t.jsx)(nn.V, {
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
    nr = n(339984),
    na = n(796290);
function ns(e) {
    let { backgroundColor: l } = e;
    return (0, t.jsx)("div", { className: na.o, style: { backgroundColor: l } });
}
function no(e) {
    let { src: l } = e;
    return (0, t.jsx)("img", { src: l, alt: "", className: na._ });
}
function nd(e) {
    let { displayProfile: l, pendingBanner: n, shouldAnimate: i } = e,
        r = (0, l6.r)(x.A.unsafe_rawColors.PRIMARY_800).hex(),
        a = l?.primaryColor ?? (0, l8.LX)(r),
        { hex: s } = (0, ni.A)(a),
        o = l?.getPreviewBanner(n, i, 296) ?? void 0;
    return null != o ? (0, t.jsx)(no, { src: o }) : (0, t.jsx)(ns, { backgroundColor: s });
}
function nu(e) {
    let l,
        { userId: n, guildId: i, disabled: r, errorMessageId: a } = e,
        { newestAnalyticsLocation: o } = (0, I.Ay)(),
        d = null != i,
        u = (0, H.Ay)(n, i),
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
                  onClick: () => (0, lQ.rM)(null, f, (e) => (0, e0.p)({ guildId: i ?? void 0, banner: e })),
                  type: h ? "reset" : "remove",
                  accessibleLabel: eK.intl.string(h ? eK.t.jHlJNS : eK.t.tT9n7D),
              }
            : void 0;
    return (0, t.jsx)(nn.V, {
        affordance: A,
        variant: "square",
        onClick: function () {
            return (0, lQ.XD)({
                uploadType: nr.HL.BANNER,
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
        renderPreview: (e) => (0, t.jsx)(nd, { displayProfile: u, pendingBanner: x, shouldAnimate: e }),
    });
}
var nc = n(913563),
    ng = n(898985),
    nf = n(922301),
    nm = n(660184),
    np = n(259065),
    nx = n(864386),
    nv = n(257551);
let nh = "heading-xl/semibold";
function nA(e) {
    let { displayName: l, stylesPreview: n, shouldAnimate: i = !1 } = e;
    return (0, t.jsx)("div", {
        "aria-hidden": !0,
        className: nv.M,
        children:
            null != n
                ? (0, t.jsx)(eN.E, {
                      variant: nh,
                      children: (0, t.jsx)(nm.A, {
                          userName: l,
                          displayNameStyles: n,
                          effectDisplayType: i ? nf.G.ANIMATED : nf.G.STATIC,
                          shouldWrap: !1,
                          inProfile: !0,
                          loop: !0,
                      }),
                  })
                : (0, t.jsx)(eN.E, { variant: nh, className: nv.W, color: "text-muted", children: l }),
    });
}
function nb(e) {
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
                      onClick: () => (0, e0.p)({ guildId: n ?? void 0, displayNameStyles: null }),
                      type: j ? "reset" : "remove",
                      accessibleLabel: eK.intl.string(j ? eK.t.en3ogK : eK.t["Wqmi/h"]),
                  }
                : void 0,
        R = i.useCallback(() => {
            o?.(), (0, np.L)({ analyticsLocations: d, guildId: n ?? void 0, stackingBehavior: "stack" });
        }, [d, n, o]);
    return (0, t.jsx)(nn.V, {
        affordance: (!b && (A || null != h)) || j ? k : "add",
        variant: "bar",
        onClick: R,
        accessibleLabel: eK.intl.string(eK.t.vKBV4A),
        accessibleValue: (function (e) {
            if (null == e) return eK.intl.string(eK.t["3Xph0/"]);
            let l = eK.intl.string((0, nc.A)(e.fontId)),
                n = eK.intl.string(ng.J[e.effectId] ?? nx.default.OpWJ3f),
                t = e.colors.map((e) => `#${e.toString(16).padStart(6, "0")}`).join(", ");
            return eK.intl.formatToPlainString(eK.t.A2XnI4, { fontName: l, effectName: n, colors: t });
        })(C),
        "aria-haspopup": "dialog",
        errorMessageId: a,
        renderPreview: (e) => (0, t.jsx)(nA, { stylesPreview: C, displayName: E, shouldAnimate: e }),
        disabled: r,
    });
}
var nj = n(324970);
function nI(e) {
    let { heading: l, children: n, disabled: i = !1, showNitroIcon: r = !1, badge: a } = e;
    return (0, t.jsxs)("div", {
        className: nj.Os,
        children: [
            (0, t.jsxs)("div", {
                className: nj.Pf,
                children: [
                    (0, t.jsx)(lB.D, {
                        className: nj.DV,
                        variant: "text-sm/medium",
                        color: i ? "text-muted" : "text-strong",
                        children: l,
                    }),
                    r &&
                        (0, t.jsx)(e7.m, {
                            text: eK.intl.string(eK.t["5AFxuK"]),
                            shouldShow: !i,
                            ariaHidden: !0,
                            children: (0, t.jsx)(lz.t, {
                                className: nj.IX,
                                size: "xs",
                                color: i ? x.A.colors.ICON_MUTED : x.A.colors.ICON_STRONG,
                                "aria-hidden": !0,
                            }),
                        }),
                    null != a && (0, t.jsx)("span", { className: nj.ot, children: a }),
                ],
            }),
            n,
        ],
    });
}
function nC(e) {
    let { id: l, message: n } = e;
    return null == n
        ? null
        : (0, t.jsxs)("div", {
              className: nj.gJ,
              role: "alert",
              children: [
                  (0, t.jsx)(g.E, { size: "xs", color: x.A.colors.TEXT_FEEDBACK_CRITICAL }),
                  (0, t.jsx)(eN.E, { variant: "text-xs/normal", color: "text-feedback-critical", id: l, children: n }),
              ],
          });
}
var nN = n(374654),
    ny = n(366010),
    nE = n(736653),
    nP = n(674658),
    nk = n(617061),
    nR = n(203632),
    nS = n(536572);
let nT = new Set(),
    nD = 0;
var n_ = n(993408),
    nL = n(841702),
    nO = n(515718),
    nM = n(195292);
function nw(e) {
    "" !== e.thumbnailPreviewSrc && (0, nO.NN)(e.thumbnailPreviewSrc).catch(() => {});
}
var nG = n(580705),
    nV = n(462397);
let nF =
        "https://cdn.discordapp.com/assets/content/6ccc97f30d0e11f23e116bb2534831ca573533a9dd726f5859ae527e82cdf37a.png",
    nU =
        "https://cdn.discordapp.com/assets/content/82b9aaf680c9ca85c8e9cdb51056df7d33d865e18e645393934b76c03b944611.png";
function nB(e) {
    let { effect: l, shouldAnimate: n, isEmpty: r, hasMainProfileFallback: s, disabled: o } = e,
        d = (0, nE.Ay)(),
        u = (0, ny.M)(d) ? nF : nU,
        c = (function (e) {
            let { enabled: l, isInteracting: n } = e,
                { categories: t, purchases: r } = (0, nL.Ay)({ stalePurchasesOK: !0 }),
                a = i.useMemo(() => (0, n_.wo)(r, t), [r, t]),
                s = (0, nM.A)({ enabled: l, isInteracting: n, items: a, preload: nw });
            return null != s ? { skuId: s.skuId } : null;
        })({ enabled: r && !s && !o, isInteracting: n }),
        g = null != c,
        f = g ? c : l;
    return (
        i.useEffect(() => {
            n && ((nD += 1), nT.forEach((e) => e()));
        }, [n]),
        (0, t.jsxs)("div", {
            className: nG.ti,
            "aria-hidden": !0,
            children: [
                (0, t.jsx)("img", { src: u, alt: "", className: nG.QQ }),
                f?.skuId != null &&
                    (0, t.jsx)("div", {
                        className: a()(nG.yY, { [nV.O]: g }),
                        children: (0, t.jsx)(C.A, {
                            skuId: f.skuId,
                            autoPlay: !1,
                            resetOnHover: !0,
                            restartMethod: nR.HL.FromStart,
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
function nW(e) {
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
        { product: h } = (0, nP.q)(v?.skuId),
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
            (0, nk.W)({ analyticsLocations: o, guild: u ?? void 0, stackingBehavior: "stack" });
        }, [o, u]);
    return (0, t.jsx)(nn.V, {
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
        })({ profileEffectPreview: v, productName: (0, nS.VG)(h), hasPendingSelection: null != f }),
        "aria-haspopup": "dialog",
        disabled: r,
        renderPreview: (e) =>
            (0, t.jsx)(nB, { effect: v, shouldAnimate: e, isEmpty: p, hasMainProfileFallback: x, disabled: r }),
    });
}
var nz = n(515727),
    nH = n(746002);
function nK(e) {
    e.layers
        .filter((e) => !0 !== e.responsive)
        .forEach((l) => {
            let n = (0, nH.getCollectiblesItemAssetUrl)({
                skuId: e.skuId,
                assetFormat: nH.CollectiblesItemAssetFormat.STATIC,
                assetId: l.id,
            });
            null != n && (0, nO.NN)(n).catch(() => {});
        });
}
var nX = n(443727);
function nY(e) {
    let { responsive: l } = e;
    return !0 !== l;
}
function nq(e) {
    let { profileFramePreview: l, isEmpty: n, hasMainProfileFallback: r, isInteracting: s, disabled: o } = e,
        d = (0, nE.Ay)(),
        u = (0, ny.M)(d) ? nF : nU,
        c = (0, y.A)(l?.skuId, "EditableTileProfileFrameButton"),
        g = (function (e) {
            let { enabled: l, isInteracting: n } = e,
                { categories: t, purchases: r } = (0, nL.Ay)({ stalePurchasesOK: !0 }),
                a = i.useMemo(() => (0, n_.MG)(r, t), [r, t]);
            return (0, nM.A)({ enabled: l, isInteracting: n, items: a, preload: nK });
        })({ enabled: n && !r && !o, isInteracting: s }),
        f = null != g,
        m = f ? g : c,
        { profileFrameStyle: p, profileFrameClassName: x } =
            null != m ? (0, k.i)(m) : { profileFrameStyle: void 0, profileFrameClassName: void 0 };
    return (0, t.jsxs)(t.Fragment, {
        children: [
            null != m &&
                (0, t.jsx)("div", {
                    className: a()(nX.hm, x, { [nV.O]: f }),
                    style: p,
                    children: (0, t.jsx)(P.A, { frame: m, filterLayer: nY }),
                }),
            (0, t.jsx)("div", {
                className: a()(nX.ti, { [nX.yT]: null == m }),
                children: (0, t.jsx)("img", { src: u, alt: "", className: nX.QQ, draggable: !1 }),
            }),
        ],
    });
}
function n$(e) {
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
        { product: v } = (0, nP.q)(x?.skuId),
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
            (0, nz.w)({ analyticsLocations: a, guild: d ?? void 0, stackingBehavior: "stack" });
        }, [a, d]);
    return (0, t.jsx)(nn.V, {
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
        })({ profileFramePreview: x, productName: (0, nS.VG)(v), hasPendingSelection: null != g }),
        "aria-haspopup": "dialog",
        disabled: r,
        renderPreview: (e) =>
            (0, t.jsx)(nq, {
                profileFramePreview: x,
                isEmpty: m,
                hasMainProfileFallback: p,
                isInteracting: e,
                disabled: r,
            }),
    });
}
var nZ = n(684732),
    nJ = n(498596),
    nQ = n(211003);
function n0(e) {
    let { color: l, suggestedColors: n, disabled: r, ariaLabel: s, onSelect: o, buttonRef: d } = e,
        u = i.useRef(null),
        c = d ?? u,
        g = (0, l8.Hl)(l),
        f = (0, l8.bJ)(l, 0xffffff) < nJ.Tr.NonText;
    return (0, t.jsx)(l4.Y, {
        targetElementRef: c,
        renderPopout: (e) => (0, t.jsx)(ne.VN, { ...e, value: l, onChange: o, suggestedColors: n, showEyeDropper: !0 }),
        children: (e) => {
            let { onClick: l, ...n } = e;
            return (0, t.jsx)(eG.D, {
                ...n,
                innerRef: c,
                className: nQ.Dh,
                onClick: r ? void 0 : l,
                "aria-label": s,
                "aria-disabled": r,
                tabIndex: r ? -1 : 0,
                children: (0, t.jsx)("div", { className: a()(nQ.Hy, { [nQ.rY]: f }), style: { backgroundColor: g } }),
            });
        },
    });
}
function n1(e) {
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
    return (0, t.jsx)(nn.Y, {
        variant: "square",
        disabled: o,
        deleteButton: x,
        children: (0, t.jsxs)("div", {
            className: nQ.D7,
            style: { background: f },
            children: [
                (0, t.jsx)(n0, { color: l, suggestedColors: s, ariaLabel: m, onSelect: r, disabled: o, buttonRef: u }),
                (0, t.jsx)(n0, { color: n, suggestedColors: s, ariaLabel: p, onSelect: a, disabled: o }),
            ],
        }),
    });
}
function n2(e) {
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
        { primaryColor: f, secondaryColor: m } = (0, $.A)({
            user: l,
            displayProfile: a,
            pendingThemeColors: d,
            pendingAvatarSrc: g ?? void 0,
            isPreview: !0,
        }),
        p = (0, l6.r)(x.A.unsafe_rawColors.PRIMARY_530).hex(),
        v = null != g ? g : l.getAvatarURL(n ?? void 0, 80),
        h = (0, nl.rh)(v, p, !1),
        A = i.useCallback(
            (e) => {
                (0, e0.p)({ guildId: n ?? void 0, themeColors: e });
            },
            [n],
        ),
        b =
            null != n && (0, nZ.l)(d, o)
                ? {
                      onClick: () => (0, e0.p)({ guildId: n, themeColors: [null, null] }),
                      type: "reset",
                      accessibleLabel: eK.intl.string(eK.t["L+GmoR"]),
                  }
                : void 0;
    return null == f || null == m
        ? null
        : (0, t.jsx)(n1, {
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
var n7 = n(134976);
function n3(e) {
    let { children: l, hasGradientBackground: n = !1 } = e;
    return (0, t.jsx)(m.F, { children: (0, t.jsx)("div", { className: a()(n7.k, { [n7.V]: n }), children: l }) });
}
var n5 = n(617498),
    n9 = n(689175),
    n8 = n(672905);
function n6(e) {
    let { children: l, isDismissed: n } = e;
    return (0, u.p)(!n, {
        initial: { opacity: 1, y: 0 },
        from: { opacity: 0, y: 48 },
        enter: { opacity: 1, y: 0, config: { tension: 200, friction: 25 } },
        leave: { opacity: 0, y: 48, config: { tension: 300, friction: 25 } },
    })((e, n) => (n ? (0, t.jsx)(n5.animated.div, { className: n8.iK, style: e, children: l }) : null));
}
function n4(e) {
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
        f = s && "safe-padding" === u;
    return (0, t.jsxs)("div", {
        className: n8.u6,
        children: [
            (0, t.jsx)(n9.zC, {
                ref: r,
                className: a()(n8.XG, { [n8.a5]: f }),
                onScroll: s ? g : void 0,
                children: (0, t.jsx)("div", { className: n8.Qs, children: l }),
            }),
            s && (0, t.jsx)(n6, { isDismissed: o, children: n }),
        ],
    });
}
var te = n(315629),
    tl = n(422936),
    tn = n(410516),
    tt = n(202541);
function ti(e) {
    let l = (0, s.bG)([ec.default], () => eQ.Ay.isPremium(ec.default.getCurrentUser())),
        n = (0, tl.O)();
    return l
        ? eK.intl.string(eK.t.AfRWI8)
        : (0, tn.U9)(n, tt.pe.TIER_2) && n?.discount.amount != null
          ? eK.intl.formatToPlainString(eK.t.bkQ4bH, { percent: n?.discount.amount })
          : e;
}
var tr = n(729804);
function ta() {
    let e = i.useCallback(() => {
            (0, l0.pX)(q.BVt.NITRO_HOME), (0, l3.closeUserProfileModal)();
        }, []),
        l = ti(eK.intl.string(eK.t.pj0XBN));
    return (0, t.jsx)(lJ.A, {
        subscriptionTier: tt.pe.TIER_2,
        children: (n) => {
            let { onClick: i } = n;
            return (0, t.jsxs)(te.h, {
                color: "nitro-pink",
                className: tr.U,
                children: [
                    (0, t.jsx)(eN.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: eK.intl.format(eK.t.TmfgI2, { onClick: e }),
                    }),
                    (0, t.jsx)(lW.$, {
                        variant: "expressive",
                        size: "md",
                        icon: lz.t,
                        text: l,
                        onClick: i,
                        fullWidth: !0,
                    }),
                ],
            });
        },
    });
}
var ts = n(55619),
    to = n(37407);
function td() {
    return (0, t.jsxs)("div", {
        className: to.k,
        children: [
            (0, t.jsx)(eN.E, {
                variant: "text-sm/medium",
                color: "text-strong",
                children: eK.intl.string(eK.t.JFY17v),
            }),
            (0, t.jsx)(lW.$, {
                fullWidth: !0,
                variant: "secondary",
                size: "md",
                text: eK.intl.string(eK.t.R9GHya),
                onClick: function () {
                    return ts.A.setEnabled(!1);
                },
            }),
        ],
    });
}
var tu = n(847374),
    tc = n(111159),
    tg = n(548118),
    tf = n(711014),
    tm = n(540637),
    tp = n(801461),
    tx = n(44482),
    tv = n(844222),
    th = n(561392),
    tA = n(745113),
    tb = n(15626),
    tj = n(37712);
function tI(e) {
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
            let { reducedMotion: e } = i.useContext(tv.C),
                {
                    isOpen: l,
                    setIsOpen: n,
                    refs: t,
                    floatingStyles: r,
                    getReferenceProps: a,
                    getFloatingProps: s,
                    context: o,
                } = (0, th.u)({ placement: "bottom-start", matchReferenceWidth: !1, transform: e.enabled }),
                { styles: d } = (0, tA.DL)(o, {
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
        N = i.useContext(tb._),
        y = i.useId(),
        E = i.useId(),
        P = i.useId(),
        k = i.useRef(null),
        R = i.useRef(null),
        [S, T] = i.useState(null),
        D = null != S ? (0, tp.ZN)(P, S) : void 0,
        _ = i.useRef(!1),
        L = i.useRef(!1),
        O = i.useMemo(() => l.filter((e) => (0, tp.fI)(e.value, [n])), [n, l]),
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
                if (!R.current?.contains(e.relatedTarget)) {
                    if (L.current) {
                        L.current = !1;
                        return;
                    }
                    if (x && null != S) {
                        let e = l[S];
                        null != e && !0 !== e.disabled && r(e.value);
                    }
                    x && v(!1);
                }
            },
            [x, S, l, r, v],
        ),
        F = i.useCallback(
            (e) => {
                if (u) return;
                let l = e[0];
                null != l && (r(l.value), G());
            },
            [u, r, G],
        ),
        { activeIndex: U, handleKeyDown: B } = (0, tm.l)(!0, l),
        W = i.useRef(null);
    i.useEffect(() => {
        let e = U !== W.current;
        (W.current = U), null != U && e && (T(U), x || ((_.current = !0), v(!0)));
    }, [U, x, v]);
    let z = i.useCallback(
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
                            if (null != S) {
                                let e = l[S];
                                if (null != e && !0 !== e.disabled) {
                                    F([e]);
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
                        if (null == S || S > n - 1) return;
                        {
                            let e = l[S];
                            if (null == e || !0 === e.disabled) return;
                            F([e]);
                        }
                        break;
                    case "Home":
                        if ((e.preventDefault(), 0 === n)) return;
                        T(0), x || ((_.current = !0), v(!0));
                        break;
                    case "End":
                        if ((e.preventDefault(), 0 === n)) return;
                        T(n - 1), x || ((_.current = !0), v(!0));
                        break;
                    case "Tab":
                        if (x && null != S) {
                            let e = l[S];
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
            [u, x, l, S, F, G, r, v, B],
        ),
        H = Math.max(
            l.findIndex((e) => e.id === O[O.length - 1]?.id),
            0,
        ),
        K = i.useRef(!1);
    i.useEffect(() => {
        c || !x || K.current
            ? x || ((K.current = !1), T(null), (_.current = !1))
            : ((K.current = !0), _.current || T(l.length > 0 ? H : null), (_.current = !1), k.current?.focus());
    }, [c, x, H, l.length]);
    let X = {
        id: E,
        role: "combobox",
        "aria-haspopup": "listbox",
        "aria-controls": x ? P : void 0,
        "aria-expanded": x,
        "aria-activedescendant": D,
        "aria-disabled": !!u || void 0,
        "aria-labelledby": null != s ? `${y} ${E}` : void 0,
        "aria-errormessage": N?.errorMessageId,
        "aria-invalid": N?.errorMessageId != null || void 0,
        "aria-describedby": N?.describedById,
        onClick: M,
        onMouseDown: w,
        onKeyDown: z,
        onBlur: V,
    };
    return (0, t.jsxs)("div", {
        ref: (e) => {
            (R.current = e), h.setReference(e);
        },
        className: o,
        ...b(),
        children: [
            null != s && (0, t.jsx)(f.A, { tag: "label", id: y, htmlFor: E, children: s }),
            p({ buttonRef: k, selectButtonProps: X }),
            !u &&
                x &&
                (0, t.jsx)("div", {
                    ref: C,
                    className: a()(tj.S_, d),
                    ...j(),
                    style: { ...A, ...I },
                    children: (0, t.jsx)(tm.q, {
                        id: P,
                        tabIndex: -1,
                        items: l,
                        selectionMode: "single",
                        selectedItems: O,
                        onSelectionChange: F,
                        shouldFocusWrap: !1,
                        activeDescendantIndex: S,
                        renderListItem: (e) => (null != m ? m(e) : (0, t.jsx)(tx.c, { ...e })),
                        maxVisibleItems: g,
                        loading: c,
                    }),
                }),
        ],
    });
}
var tC = n(643213);
let tN = "MAIN_PROFILE";
function ty(e) {
    let { guild: l } = e;
    return (0, t.jsx)(tg.Ay, { className: tC.$f, guild: l, size: tg.Ay.Sizes.MINI, active: !0, "aria-hidden": !0 });
}
function tE(e) {
    let { leading: l, label: n, description: i } = e;
    return (0, t.jsxs)("div", {
        className: tC.XE,
        children: [
            null != l && (0, t.jsx)("div", { className: tC.fZ, children: l }),
            (0, t.jsxs)("div", {
                className: tC.qL,
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
function tP(e) {
    let { leading: l, label: n, disabled: i, buttonRef: r, selectButtonProps: s } = e;
    return (0, t.jsxs)(eG.D, {
        innerRef: r,
        className: a()(tC.L5, { [tC.r9]: i }),
        tabIndex: !0 === i ? -1 : 0,
        ...s,
        children: [
            l,
            (0, t.jsx)(eN.E, {
                variant: "text-md/medium",
                color: !0 === i ? "text-muted" : "text-strong",
                lineClamp: 1,
                className: tC.v9,
                children: n,
            }),
            (0, t.jsx)(tu.a, {
                className: tC.u4,
                size: "sm",
                color: !0 === i ? x.A.colors.ICON_MUTED : x.A.colors.ICON_DEFAULT,
            }),
        ],
    });
}
function tk(e) {
    let { selectedGuildId: l, originGuildId: n, onChange: r, loading: a, disabled: o } = e,
        d = (0, s.bG)([tf.Ay], () => tf.Ay.getFlattenedGuildIds()),
        u = (0, s.bG)([M.A], () => M.A.getGuilds()),
        c = (0, s.bG)([ez.A], () => {
            let e = ez.A.getGuildId();
            return null == e || eg._.has(e) ? null : e;
        }),
        g = (0, s.cf)([eu.Ay, tf.Ay], () => {
            let e = {};
            for (let l of tf.Ay.getFlattenedGuildIds()) {
                let n = eu.Ay.getSelfMember(l)?.nick;
                null != n && (e[l] = n);
            }
            return e;
        }),
        f = i.useMemo(() => {
            let e = {
                    id: tN,
                    label: eK.intl.string(eK.t["2p07FR"]),
                    value: tN,
                    leading: (0, t.jsx)(tc.p, { size: "refresh_sm", color: x.A.colors.ICON_DEFAULT }),
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
                                  leading: (0, t.jsx)(ty, { guild: n }),
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
                          leading: (0, t.jsx)(ty, { guild: r }),
                          description: g[r.id] ?? void 0,
                      },
                      ...i,
                  ];
        }, [d, u, n, c, g]),
        m = l ?? tN,
        p = f.find((e) => e.value === m) ?? f[0],
        v = i.useCallback(
            (e) => {
                let n = e === tN ? null : e;
                n !== l && r(n);
            },
            [r, l],
        );
    return (0, t.jsx)(tI, {
        className: tC.kL,
        label: eK.intl.string(eK.t.rki38K),
        listboxClassName: tC.yt,
        options: f,
        value: m,
        onSelectionChange: v,
        loading: a,
        disabled: o,
        renderListItem: (e) => (0, t.jsx)(tE, { leading: e.leading, label: e.label, description: e.description }),
        children: (e) =>
            (0, t.jsx)(tP, { leading: p.value === tN ? null : p.leading, label: p.label, disabled: o, ...e }),
    });
}
var tR = n(207803),
    tS = n(485745);
function tT(e) {
    let l = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = !(0, z.X)("useUnsavedProfileChangesGuard"),
        t = (0, tS.A)(n),
        r = i.useRef(e);
    return (
        i.useLayoutEffect(() => {
            r.current = e;
        }),
        i.useCallback(
            function () {
                for (var e = arguments.length, n = Array(e), i = 0; i < e; i++) n[i] = arguments[i];
                l && t ? (0, tR.VQ)() : r.current(...n);
            },
            [l, t],
        )
    );
}
var tD = n(49999),
    t_ = n(844939);
let tL = "profile-editing-nameplate-error",
    tO = "profile-editing-avatar-error",
    tM = "profile-editing-avatar-decoration-error",
    tw = "profile-editing-banner-error",
    tG = "profile-editing-display-name-style-error";
function tV(e) {
    let { className: l } = e;
    return (0, t.jsx)("div", {
        className: a()(t_.D0, l),
        children: (0, t.jsx)("div", { className: t_.ZN, children: (0, t.jsx)(lF.X, { size: "xs" }) }),
    });
}
function tF() {
    let [e, l] = (0, lY.V)("per-server-profile-editing-notice-dismissed", !1);
    return e
        ? null
        : (0, t.jsxs)("div", {
              className: t_.X6,
              children: [
                  (0, t.jsx)(eN.E, {
                      variant: "text-sm/normal",
                      color: "text-default",
                      children: eK.intl.string(eK.t["gBIG/N"]),
                  }),
                  (0, t.jsx)(eG.D, {
                      "aria-label": eK.intl.string(eK.t.rSe9ra),
                      className: t_.TD,
                      onClick: () => l(!0),
                      children: (0, t.jsx)(lU.P, { size: "refresh_sm", color: "currentColor" }),
                  }),
              ],
          });
}
function tU() {
    return i.useCallback(() => {
        (0, l0.pX)(q.BVt.NITRO_HOME), (0, l3.closeUserProfileModal)();
    }, []);
}
function tB() {
    let e = tU(),
        l = ti(eK.intl.string(eK.t["7IWwak"]));
    return (0, t.jsx)(lJ.A, {
        subscriptionTier: tt.pe.TIER_2,
        children: (n) => {
            let { onClick: i } = n;
            return (0, t.jsxs)("div", {
                className: t_.eW,
                children: [
                    (0, t.jsxs)("div", {
                        className: t_.tm,
                        children: [
                            (0, t.jsx)(lB.D, {
                                variant: "text-md/medium",
                                color: "text-default",
                                children: eK.intl.string(eK.t.bO0TOe),
                            }),
                            (0, t.jsx)(eN.E, {
                                variant: "text-xs/medium",
                                color: "text-default",
                                children: eK.intl.format(eK.t["3PujdE"], { onClick: e }),
                            }),
                        ],
                    }),
                    (0, t.jsx)(lW.$, {
                        variant: "expressive",
                        size: "sm",
                        icon: lz.t,
                        text: l,
                        onClick: i,
                        fullWidth: !0,
                    }),
                    (0, t.jsx)(tV, { className: t_.nd }),
                ],
            });
        },
    });
}
function tW() {
    return (0, t.jsx)(eN.E, {
        variant: "text-xs/normal",
        color: "text-subtle",
        className: t_.BJ,
        "aria-hidden": !0,
        children: eK.intl.format(eK.t.kYv9DM, {
            nitroIconHook: () => (0, t.jsx)(lz.t, { size: "xxs", color: "currentColor", className: t_.qp }),
        }),
    });
}
function tz(e) {
    let { user: l, guildId: n, disabled: i, errorMessage: r } = e;
    return (0, t.jsxs)(nI, {
        heading: eK.intl.string(eK.t.x5CoXR),
        disabled: i,
        children: [
            (0, t.jsx)(nN.A, { user: l, guildId: n, disabled: i, errorMessageId: null != r ? tL : void 0 }),
            (0, t.jsx)(nC, { id: tL, message: r }),
        ],
    });
}
function tH(e) {
    let { user: l, guildId: n, disabled: i, avatarErrorMessage: r, avatarDecorationErrorMessage: a } = e;
    return (0, t.jsxs)(nI, {
        heading: eK.intl.string(eK.t["50Nwpc"]),
        disabled: i,
        children: [
            (0, t.jsx)(l5.A, { user: l, guildId: n, disabled: i, errorMessageId: null != r ? tO : void 0 }),
            (0, t.jsx)(l9.A, { user: l, guildId: n, disabled: i, errorMessageId: null != a ? tM : void 0 }),
            (0, t.jsx)(nC, { id: tO, message: (0, lQ.d3)(r) }),
            (0, t.jsx)(nC, { id: tM, message: a }),
        ],
    });
}
function tK(e) {
    let { user: l, guildId: n, disabled: i, errorMessage: r } = e,
        a = (0, lZ.ux)("UserProfileModalV2EditingPanel"),
        [s, o] = (0, l$.kn)(a && !i ? [lV.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE] : []),
        d = s === lV.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE;
    return (0, t.jsxs)(nI, {
        heading: eK.intl.string(eK.t.NEzEws),
        disabled: i,
        showNitroIcon: !0,
        badge: d ? (0, t.jsx)(lH.Lp, { text: eK.intl.string(eK.t.y2b7CA), "aria-hidden": !0 }) : void 0,
        children: [
            (0, t.jsx)(nb, {
                user: l,
                guildId: n,
                disabled: i,
                errorMessageId: null != r ? tG : void 0,
                onOpen: d ? () => o(tD.i.TAKE_ACTION) : void 0,
            }),
            (0, t.jsx)(nC, { id: tG, message: r }),
        ],
    });
}
function tX(e) {
    let { user: l, guildId: n, disabled: i, canUsePremiumProfileFeatures: r, bannerErrorMessage: a } = e;
    return (0, t.jsxs)(nI, {
        heading: eK.intl.string(eK.t.Zenogr),
        disabled: i,
        showNitroIcon: !0,
        children: [
            (0, t.jsx)(n2, { user: l, guildId: n, disabled: i || !r }),
            (0, t.jsx)(nu, { userId: l.id, guildId: n, disabled: i || !r, errorMessageId: null != a ? tw : void 0 }),
            (0, t.jsx)(nC, { id: tw, message: (0, lQ.d3)(a) }),
        ],
    });
}
function tY(e) {
    let { user: l, disabled: n } = e;
    return (0, t.jsx)(nI, {
        heading: eK.intl.string(eK.t["/X3fkf"]),
        disabled: n,
        children: (0, t.jsx)(nt, { user: l, disabled: n }),
    });
}
function tq(e) {
    let { user: l, guildId: n, disabled: i } = e,
        r = (0, lq.sk)("UserProfileModalV2EditingPanel");
    return (0, t.jsxs)(nI, {
        heading: eK.intl.string(r ? eK.t["Vfbar/"] : eK.t.wR5wOo),
        disabled: i,
        children: [
            (0, t.jsx)(nW, { user: l, guildId: n, disabled: i, variant: r ? "square" : "full-height-bar" }),
            r && (0, t.jsx)(n$, { user: l, guildId: n, disabled: i }),
        ],
    });
}
let t$ = "premium-try-it-out-description";
function tZ(e) {
    let { buttonRef: l, onShowPremiumTryItOut: n } = e,
        i = tU();
    return (0, t.jsxs)("div", {
        role: "group",
        "aria-labelledby": t$,
        className: t_.DX,
        children: [
            (0, t.jsx)(tV, { className: t_.x$ }),
            (0, t.jsx)(eN.E, {
                id: t$,
                variant: "text-md/normal",
                color: "text-default",
                children: eK.intl.format(eK.t.TmfgI2, { onClick: i }),
            }),
            (0, t.jsx)(lW.$, {
                buttonRef: l,
                variant: "overlay-primary",
                size: "sm",
                icon: lK.b,
                text: eK.intl.string(eK.t.PxUx8e),
                onClick: n,
                fullWidth: !0,
            }),
        ],
    });
}
function tJ(e) {
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
            onShowPremiumTryItOut: f,
        } = e,
        m = (0, s.bG)([G.A], () => G.A.hidePersonalInformation),
        { enabled: p } = (function (e) {
            let { location: l } = e;
            return l7.useConfig({ location: l });
        })({ location: "DefaultEditingPanelView" }),
        x = tT(g),
        v = null != i,
        h = eQ.Ay.canUsePremiumProfileCustomization(l),
        A = v && !h,
        b = !h && !v,
        j = b && p,
        I = v && !h && !m,
        C = a || o,
        N = (0, s.bG)([eg.A], () => eg.A.getErrors(i)),
        y = N.nameplate?.[0] ?? N.nameplate_sku_id?.[0],
        E = N.avatar?.[0],
        P = N.avatar_decoration_sku_id?.[0],
        k = N.banner?.[0],
        R = N.display_name_font_id?.[0] ?? N.display_name_effect_id?.[0] ?? N.display_name_colors?.[0],
        S = l2.useConfig({ location: "UserProfileModalV2EditingPanel" }).enabled,
        T = h || v ? "inline" : j ? "hidden" : S ? "end" : "hidden",
        D = (0, t.jsx)(tK, { user: l, guildId: i, disabled: C || A, errorMessage: R });
    return (0, t.jsxs)(n3, {
        hasGradientBackground: I,
        children: [
            (0, t.jsxs)("div", {
                className: t_.wx,
                children: [
                    (0, t.jsx)(e7.m, {
                        text: eK.intl.string(eK.t["l/A351"]),
                        ariaHidden: !0,
                        children: (0, t.jsx)(eG.D, {
                            innerRef: d,
                            className: t_.cS,
                            "aria-label": eK.intl.string(eK.t["l/A351"]),
                            onClick: c,
                            "aria-controls": n,
                            "aria-expanded": !0,
                            children: (0, t.jsx)(lX.V, { size: "md", color: "currentColor" }),
                        }),
                    }),
                    (0, t.jsx)(tk, {
                        selectedGuildId: i ?? null,
                        originGuildId: r,
                        onChange: x,
                        loading: a,
                        disabled: m,
                    }),
                ],
            }),
            m
                ? (0, t.jsx)(td, {})
                : (0, t.jsx)(n4, {
                      floatingFooter: b && !j ? (0, t.jsx)(ta, {}) : void 0,
                      children: (0, t.jsxs)(t.Fragment, {
                          children: [
                              v && (h ? (0, t.jsx)(tF, {}) : (0, t.jsx)(tB, {})),
                              h && (0, t.jsx)(tW, {}),
                              (0, t.jsx)(tz, { user: l, guildId: i, disabled: C || A, errorMessage: y }),
                              (0, t.jsx)(tH, {
                                  user: l,
                                  guildId: i,
                                  disabled: C || A,
                                  avatarErrorMessage: E,
                                  avatarDecorationErrorMessage: P,
                              }),
                              "inline" === T && D,
                              h || v
                                  ? (0, t.jsx)(tX, {
                                        user: l,
                                        guildId: i,
                                        disabled: C || A,
                                        canUsePremiumProfileFeatures: h,
                                        bannerErrorMessage: k,
                                    })
                                  : (0, t.jsx)(tY, { user: l, disabled: C || A }),
                              (0, t.jsx)(tq, { user: l, guildId: i, disabled: C || A }),
                              "end" === T && D,
                              j && (0, t.jsx)(tZ, { buttonRef: u, onShowPremiumTryItOut: f }),
                          ],
                      }),
                  }),
        ],
    });
}
var tQ = n(477155),
    t0 = n(451125);
function t1(e) {
    let { onBack: l } = e,
        n = i.useRef(null);
    return (
        i.useEffect(() => {
            n.current?.focus();
        }, []),
        (0, t.jsx)(n3, {
            hasGradientBackground: !0,
            children: (0, t.jsxs)("div", {
                className: t0.wx,
                children: [
                    (0, t.jsx)(eG.D, {
                        innerRef: n,
                        "aria-label": eK.intl.string(eK.t["13/7kX"]),
                        onClick: l,
                        className: t0.Gv,
                        children: (0, t.jsx)(tQ.r, { size: "md", color: "currentColor" }),
                    }),
                    (0, t.jsx)(lB.D, {
                        variant: "text-lg/normal",
                        color: "text-default",
                        className: t0.R_,
                        children: eK.intl.string(eK.t.PxUx8e),
                    }),
                    (0, t.jsx)(eN.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        className: t0.Ij,
                        children: eK.intl.string(eK.t.X0ir7L),
                    }),
                ],
            }),
        })
    );
}
var t2 = n(450579);
let t7 = "user-profile-editing-panel",
    t3 = "profile-modal-editing-panel-heading";
function t5(e) {
    let { onClick: l, className: n, innerRef: i } = e;
    return (0, t.jsx)(e7.m, {
        text: eK.intl.string(eK.t.Qn47Ud),
        delay: 150,
        ariaHidden: !0,
        children: (0, t.jsx)(eG.D, {
            innerRef: i,
            "aria-label": eK.intl.string(eK.t.Qn47Ud),
            "aria-expanded": !1,
            "aria-controls": t7,
            className: a()(t2.eg, n),
            onClick: l,
            focusProps: { offset: { right: 6 } },
            children: (0, t.jsx)(lw.V, { size: "sm", color: x.A.colors.ICON_STRONG }),
        }),
    });
}
function t9(e) {
    let { onClick: l, className: n, buttonRef: i } = e;
    return (0, t.jsx)("div", {
        className: n,
        children: (0, t.jsx)(e7.m, {
            text: eK.intl.string(eK.t.Qn47Ud),
            ariaHidden: !0,
            children: (0, t.jsx)(lG.K, {
                buttonRef: i,
                "aria-label": eK.intl.string(eK.t.Qn47Ud),
                "aria-expanded": !1,
                "aria-controls": t7,
                icon: lw.V,
                onClick: l,
                variant: "secondary",
                size: "sm",
            }),
        }),
    });
}
function t8(e) {
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
        [x, v] = i.useState(!1),
        h = i.useRef(null),
        A = i.useCallback(() => {
            v(!0);
        }, []),
        b = i.useCallback(() => {
            v(!1), requestAnimationFrame(() => h.current?.focus());
        }, []);
    return null == p
        ? null
        : (0, t.jsx)("aside", {
              id: t7,
              "aria-labelledby": t3,
              className: a()(t2.nd, c),
              "aria-busy": o,
              children: (0, t.jsxs)("div", {
                  className: t2.l$,
                  children: [
                      (0, t.jsx)(f.A, {
                          children: (0, t.jsx)(m.H, { id: t3, children: eK.intl.string(eK.t["L+ch00"]) }),
                      }),
                      x
                          ? (0, t.jsx)(t1, { onBack: b })
                          : (0, t.jsx)(tJ, {
                                panelId: t7,
                                user: p,
                                selectedGuildId: l,
                                originGuildId: n,
                                isLoading: o,
                                isEditingDisabled: d,
                                collapseButtonRef: g,
                                onClosePanel: u,
                                onSelectGuildId: r,
                                onShowPremiumTryItOut: A,
                                premiumTryItOutButtonRef: h,
                            }),
                  ],
              }),
          });
}
var t6 = n(576260),
    t4 = n(347805),
    ie = n(629403),
    il = n(612630),
    it = n(260598);
function ii(e) {
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
        N = l && r !== n,
        y = C ?? (N ? void 0 : j),
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
        previewErrorMessage: y,
        input: (0, t.jsx)(it.f, {
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
var ir = n(674947);
function ia(e) {
    let { userId: l, className: n, autoFocus: r = !1, onUpdate: a } = e,
        o = (0, s.bG)([G.A], () => G.A.hidePersonalInformation),
        { loading: d, note: u } = (0, il.A)(l),
        [c, g] = i.useState(),
        [f, m] = i.useState(),
        p = c ?? u,
        x = i.useCallback(
            async (e) => {
                if ((u ?? "") !== e) {
                    m(void 0), g(e), a?.();
                    try {
                        await ie.A.updateNote(l, e);
                    } catch {
                        m(eK.intl.string(eK.t.F8FvUy));
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
            ? (0, t.jsx)(eN.E, { variant: "text-sm/normal", color: "text-default", className: ir.t, children: p })
            : null;
    return (0, t.jsx)(ii, {
        ...h,
        className: n,
        preview: j,
        editButtonAriaLabel: eK.intl.string(eK.t.PbMNh2),
        label: eK.intl.string(eK.t.PbMNh2),
        placeholder: v ? eK.intl.string(eK.t["WLKx/9"]) : eK.intl.string(eK.t.VBhOe2),
        maxLength: q.T7x,
        rows: 3,
        disabled: v,
        error: f,
    });
}
var is = n(83013),
    io = n(518477),
    id = n(273781);
function iu(e) {
    let { userId: l } = e,
        n = (0, eh.g)(),
        { trackUserProfileAction: i } = (0, U.NJ)(),
        r = (0, z.X)("UserProfileModalV2NotesSection"),
        a = r ? ia : t4.A;
    return (0, t.jsx)(is.A, {
        heading: eK.intl.string(eK.t["mQKv+v"]),
        scrollTargetId: io.bk.NOTE,
        children: (0, t.jsx)(a, {
            userId: l,
            className: r ? id.N : id.w,
            autoFocus: n === io.bk.NOTE,
            onUpdate: () => i({ action: "SET_NOTE" }),
        }),
    });
}
var ic = n(123292),
    ig = n(263293),
    im = n(871645);
function ip(e) {
    let { icon: l, message: n, actionLabel: r, onAction: s, actionDisabled: o, type: d, autoFocus: u } = e,
        c = i.useRef(null);
    return (
        i.useEffect(() => {
            u && c.current?.focus();
        }, [u]),
        (0, t.jsx)("div", {
            className: ig.kL,
            children: (0, t.jsxs)("div", {
                className: a()(im.oR, ig.Qs),
                "data-type": d,
                children: [
                    (0, t.jsx)("div", { className: ig.Kk, children: l }),
                    (0, t.jsx)(eN.E, { color: "text-strong", variant: "text-sm/semibold", children: n }),
                    null != r &&
                        null != s &&
                        (0, t.jsx)("div", {
                            className: ig.hP,
                            children: (0, t.jsx)(ic.Q, {
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
var ix = n(765178),
    iv = n(346055),
    ih = n(289873),
    iA = n(103964);
function ib(e) {
    let { showScrim: l, showLoadingSpinner: n, className: r, children: s } = e;
    i.useEffect(() => {
        n && ix.O.announce(eK.intl.string(eK.t["QR+vBP"]));
    }, [n]);
    let o = i.useRef(null);
    return (
        (0, iv.f)(o, l),
        (0, t.jsxs)(t.Fragment, {
            children: [
                (0, t.jsx)("div", {
                    className: a()(iA.f, l && iA.z),
                    children: n && (0, t.jsx)(ih.y, { type: ih.t.SPINNING_CIRCLE_SIMPLE, animated: !0 }),
                }),
                (0, t.jsx)("div", { ref: o, "aria-hidden": l || void 0, className: r, children: s }),
            ],
        })
    );
}
var ij = n(568602),
    iI = n(625494);
function iC(e) {
    let { children: l } = e,
        [n, r] = i.useState(!1),
        a = i.useRef(null);
    return (
        i.useEffect(() => {
            function e() {
                r(!0),
                    null != a.current && clearTimeout(a.current),
                    (a.current = setTimeout(() => {
                        r(!1), (a.current = null);
                    }, 300));
            }
            return (
                iI._.subscribe(q.jej.SHAKE_PROFILE_MODAL, e),
                () => {
                    iI._.unsubscribe(q.jej.SHAKE_PROFILE_MODAL, e), null != a.current && clearTimeout(a.current);
                }
            );
        }, []),
        (0, t.jsx)(ij.b, { isShaking: n, intensity: 1.4, children: l })
    );
}
var iN = n(841417),
    iy = n(933832),
    iE = n(972213),
    iP = n(97483),
    ik = n(384377);
let iR = {
        [io.jM.WIDGET_ADDED]: {
            message: eK.intl.string(eK.t.fFP1Uy),
            icon: (0, t.jsx)(iy.A, { size: "sm", color: x.A.colors.STATUS_POSITIVE.css }),
        },
        [io.jM.WIDGET_REMOVED]: {
            message: eK.intl.string(eK.t.zzsK7h),
            icon: (0, t.jsx)(iy.A, { size: "sm", color: x.A.colors.STATUS_POSITIVE.css }),
        },
        [io.jM.PROFILE_SAVE_GENERIC_FAILURE]: {
            message: eK.intl.string(eK.t["84MExs"]),
            icon: (0, t.jsx)(iE.d, { size: "sm", color: x.A.colors.ICON_FEEDBACK_CRITICAL }),
            type: iP.Ck.FAILURE,
        },
        [io.jM.SOMETHING_WENT_WRONG]: {
            message: eK.intl.string(eK.t.F8FvUy),
            icon: (0, t.jsx)(iE.d, { size: "sm", color: x.A.colors.ICON_FEEDBACK_CRITICAL }),
            type: iP.Ck.FAILURE,
        },
    },
    iS = (e) => {
        let { className: l } = e,
            n = (0, ik.fu)(),
            r = (0, s.bG)([e3.Ay], () => e3.Ay.useReducedMotion),
            [a, o] = i.useState(!1),
            [d, c] = i.useState(null);
        i.useEffect(() => {
            null !== n ? (o(!0), c(iR[n]), ix.O.announce(iR[n].message)) : o(!1);
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
            i.useEffect(() => () => (0, ik.XA)(null), []),
            i.useEffect(() => {
                if (a) {
                    let e = setTimeout(() => {
                        (0, ik.XA)(null);
                    }, 2e3);
                    return () => clearTimeout(e);
                }
            }, [a]),
            (0, t.jsx)(t.Fragment, {
                children: g(
                    (e, n) =>
                        n &&
                        null !== d &&
                        (0, t.jsx)(n5.animated.div, { className: l, style: e, children: (0, t.jsx)(ip, { ...d }) }),
                ),
            })
        );
    };
var iT = n(297413),
    iD = n(878555),
    i_ = n(826673),
    iL = n(576705),
    iO = n(292666);
function iM(e) {
    let { isEditing: l, inputRef: n, ...t } = e9(e);
    return (
        i.useEffect(() => {
            l && null != n.current && n.current.setSelectionRange(n.current.value.length, n.current.value.length);
        }, [l, n]),
        { isEditing: l, inputRef: n, ...t }
    );
}
function iw(e) {
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
    return (0, t.jsx)(iO.k, {
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
function iG(e) {
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
                ? eK.intl.formatToPlainString(eK.t.ICT5S6, { maxLength: h })
                : void 0) ?? A,
        y = "compact" === v ? { variant: "compact" } : { variant: "default", trailing: j };
    return (0, t.jsx)(e4, {
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
        input: (0, t.jsx)(iw, {
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
var iV = n(530895);
function iF(e) {
    return null == e || "" === e ? void 0 : e;
}
function iU(e) {
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
        C = (0, lZ.ux)("UserProfileModalV2EditableDisplayName"),
        { canChangeDisplayName: N, permissionsLoaded: y } = (0, s.cf)([iL.A, M.A], () => {
            if (!A || null == b) return { canChangeDisplayName: !0, permissionsLoaded: !0 };
            let e = M.A.getGuild(b);
            return null == e
                ? { canChangeDisplayName: !1, permissionsLoaded: !1 }
                : {
                      canChangeDisplayName: iL.A.can(q.xBc.CHANGE_NICKNAME, e) || iL.A.can(q.xBc.MANAGE_NICKNAMES, e),
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
        (f = iF(c) ?? iF(r) ?? p.username),
        (m = iF(c) ?? p.username),
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
        R = iM({ value: E, onCommit: k, disabled: !N }),
        { isEditing: S, handleCommit: T } = R,
        D = (0, s.bG)([eg.A], () => eg.A.getErrors(b ?? null)),
        _ = (0, eJ.EC)(b ?? null),
        L = A ? D.nick?.[0] : D.global_name?.[0],
        O = _?.nick?.[0],
        w = (0, s.bG)([eg.A], () => eg.A.getPendingChanges(b ?? null).pendingDisplayNameStyles),
        G = eK.intl.string(A ? eK.t.mq6Cg9 : eK.t.XuZU7A),
        V = A ? eK.intl.string(eK.t.YcDKr8) : p.username,
        F = eK.intl.string(A ? eK.t["g7OSZ/"] : eK.t.kyfzzc),
        U = i.useRef(null),
        B = i.useCallback(
            (e) => {
                e.stopPropagation(),
                    S && T(),
                    C &&
                        (0, i_.Dr)(lV.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE, {
                            dismissAction: tD.i.INDIRECT_ACTION,
                        }),
                    (0, np.L)({ analyticsLocations: h, guildId: b, stackingBehavior: "stack", returnRef: U });
            },
            [S, T, h, b, C],
        ),
        W = {
            icon: lw.V,
            tooltip: eK.intl.string(eK.t.lqKKI2),
            "aria-label": eK.intl.string(eK.t["Wkg/CF"]),
            "aria-haspopup": "dialog",
            onClick: B,
            buttonRef: U,
        },
        z =
            A && !N && y
                ? (0, t.jsx)(e7.m, {
                      text: eK.intl.string(eK.t.gzjxQi),
                      children: (0, t.jsx)(eG.D, {
                          tag: "span",
                          className: iV.C,
                          children: (0, t.jsx)(lF.X, {
                              size: "refresh_sm",
                              color: x.A.colors.ICON_SUBTLE,
                              "aria-label": eK.intl.string(eK.t.VPu695),
                          }),
                      }),
                  })
                : null,
        H =
            null != P
                ? (0, t.jsx)(iD.c$, {
                      user: p,
                      guildId: b,
                      displayName: P,
                      size: "lg",
                      pendingDisplayNameStyles: w,
                      className: iV.d,
                      displayNameTrailing: z,
                  })
                : null;
    return (0, t.jsx)(iG, {
        ...R,
        preview: H,
        placeholder: V,
        editButtonAriaLabel: F,
        label: G,
        maxLength: q.zzC,
        trailing: N && j ? W : void 0,
        error: L,
        warning: O,
        disabled: !N,
    });
}
var iB = n(688960);
function iW(e) {
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
                    (0, e0.p)({ pronouns: e, guildId: u?.guildId ?? void 0 });
                },
                [u?.guildId],
            ),
        }),
        m = iM({ value: c, onCommit: f }),
        { isEditing: p } = m,
        x = u?.guildId != null,
        v = null != g && g.length > 0,
        h = eK.intl.string(x ? eK.t.AXiE0i : eK.t["76Aqhl"]);
    return (0, t.jsx)(iG, {
        ...m,
        size: "compact",
        className: a()(iB.k, p && iB.J),
        preview: v ? (0, t.jsx)(iD.n2, { pronouns: g }) : null,
        editButtonAriaLabel: eK.intl.string(eK.t.h6VAO7),
        label: eK.intl.string(eK.t["rniRE+"]),
        placeholder: h,
        maxLength: q.VE5,
    });
}
var iz = n(145497),
    iH = n(685073),
    iK = n(318785),
    iX = n(534400),
    iY = n(743981),
    iq = n(573109),
    i$ = n(832344);
let iZ = "no-server-tag";
function iJ(e) {
    let { buttonRef: l, guildId: n, guildTag: i, guildBadge: r, ...s } = e,
        o = null == i || null == n;
    return (0, t.jsx)(eG.D, {
        innerRef: l,
        className: a()(iq.L5, { [iq.wK]: o }),
        ...s,
        children: (0, t.jsxs)(eN.E, {
            variant: o ? "text-xs/normal" : "text-xs/semibold",
            color: o ? "input-placeholder-text-default" : "text-default",
            className: iq.W3,
            tag: "span",
            children: [
                o
                    ? eK.intl.string(eK.t.Pdd1nd)
                    : (0, t.jsxs)(t.Fragment, {
                          children: [
                              (0, t.jsx)(
                                  iX.Z9,
                                  {
                                      src: (0, iH.gC)(n, r, iY.Sl.SIZE_14),
                                      size: iY.Sl.SIZE_14,
                                      className: iq.Ap,
                                      "aria-hidden": !0,
                                  },
                                  (0, iH.gC)(n, r, iY.Sl.SIZE_14) ?? n,
                              ),
                              i,
                          ],
                      }),
                (0, t.jsx)(tu.a, { size: "xs", color: "currentColor", className: iq.u4 }),
            ],
        }),
    });
}
function iQ() {
    let e = (0, iK.b)(),
        l = i.useMemo(() => new Map(e.map((e) => [e.id, e])), [e]),
        n = (0, s.bG)([ec.default], () => {
            let e = ec.default.getCurrentUser();
            return (0, iH.Zo)(e?.primaryGuild).guildId ?? null;
        }),
        r = (0, s.bG)([eg.A], () => eg.A.getPendingChanges(null).pendingPrimaryGuildId),
        a = void 0 !== r ? r : n,
        o = null != a ? (l.get(a) ?? null) : null,
        d = o?.profile?.tag ?? null,
        u = o?.profile?.badge ?? void 0,
        c = i.useCallback(
            (e) =>
                e.id === iZ
                    ? (0, t.jsx)("div", {
                          className: i$.uN,
                          children: (0, t.jsx)(eN.E, {
                              variant: "text-md/normal",
                              color: "input-placeholder-text-default",
                              className: iq.ve,
                              children: e.label,
                          }),
                      })
                    : (0, t.jsx)(tx.c, { ...e }),
            [],
        ),
        g = i.useMemo(
            () => [
                { id: iZ, label: eK.intl.string(eK.t.VxdWWH), value: null },
                ...e.flatMap((e) => {
                    let l = e.profile?.tag;
                    if (null == l) return [];
                    let n = e.profile?.badge ?? void 0;
                    return [
                        {
                            id: e.id,
                            label: e.name,
                            value: e.id,
                            leading: (0, t.jsx)(iz.j, {
                                guildId: e.id,
                                guildName: e.name,
                                guildIcon: e.icon,
                                iconSize: 20,
                                animate: !1,
                            }),
                            trailing: (0, t.jsx)(iX.o9, { guildId: e.id, guildTag: l, guildBadge: n }),
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
        : (0, t.jsx)(tI, {
              options: g,
              value: a,
              onSelectionChange: f,
              label: eK.intl.string(eK.t.Pdd1nd),
              listboxClassName: iq.yt,
              renderListItem: c,
              children: (e) => {
                  let { buttonRef: l, selectButtonProps: n } = e;
                  return (0, t.jsx)(iJ, { buttonRef: l, guildId: a, guildTag: d, guildBadge: u, ...n });
              },
          });
}
var i0 = n(211180);
function i1(e) {
    let { user: l, displayProfile: n, nickname: i, trailing: r, onClose: s, allowEditing: o } = e;
    if (!o)
        return (0, t.jsx)(iD.Ay, {
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
        : (0, t.jsx)(iT.A, {
              user: l,
              forceUsername: !0,
              className: i0.a1,
              usernameClass: i0.eb,
              discriminatorClass: i0.sw,
              hideBotTag: !0,
          });
    return (0, t.jsxs)("div", {
        children: [
            (0, t.jsx)(iU, { displayProfile: n, user: l }),
            (0, t.jsxs)("div", {
                className: a()(i0.AK, i0.j6),
                children: [d, (0, t.jsx)(iD.Ce, {}), (0, t.jsx)(iW, { displayProfile: n }), (0, t.jsx)(iQ, {}), r],
            }),
        ],
    });
}
var i2 = n(97808),
    i7 = n(980707),
    i3 = n(477782),
    i5 = n(22231),
    i9 = n(601255),
    i8 = n(562819),
    i6 = n(19575),
    i4 = n(145762),
    re = n(935485);
let rl = i6.Ay.getEnableHardwareAcceleration() ? i2.Js : i2.eu;
function rn(e) {
    let { onMenuClose: l, items: n, ...i } = e;
    return (0, t.jsx)(i7.W, {
        ...i,
        "data-menu-migrated": !0,
        navId: "avatar-edit-context",
        onClose: l,
        onSelect: l,
        "aria-label": eK.intl.string(eK.t.YAgq3W),
        children: (0, t.jsx)(i3.rX, { children: n }),
    });
}
function rt(e) {
    let { user: l, guildId: n } = e,
        { avatarProps: r, eventHandlers: o } = (0, eb.V)(e),
        [d, u] = i.useState(!1),
        c = i.useRef(null),
        g = i.useRef(null),
        f = i.useCallback(() => u(!1), []),
        m = (function (e) {
            let { user: l, guildId: n, onClose: r, returnRef: a } = e,
                { newestAnalyticsLocation: o, analyticsLocations: d } = (0, I.Ay)(),
                u = null != n,
                c = (0, s.bG)([eu.Ay], () => (null != n ? eu.Ay.getMember(n, l.id) : null)),
                g = (0, s.bG)([eg.A], () => eg.A.getPendingChanges(n ?? void 0).pendingAvatar),
                f = u ? c?.avatar : l.avatar,
                m = (0, eo.z5)(g, f),
                p = u && null != l.avatar,
                x = eQ.Ay.canUsePremiumProfileCustomization(l),
                v = x || null == n,
                h = x || null == n,
                A = (0, s.bG)([M.A], () => (null != n ? M.A.getGuild(n) : null)),
                b = (0, eo.a4)({ user: l }),
                j = (0, eo.a4)({ user: l, guildId: n ?? void 0 }),
                { pendingAvatarDecoration: C } = (0, eo.CP)(n ?? void 0),
                N = void 0 !== C,
                y = null != (0, i9.A)(N ? C : j) && (N ? null != C : null != j),
                E = u && null != b,
                P = i.useCallback(() => {
                    r(),
                        (0, lQ.XD)({
                            uploadType: nr.HL.AVATAR,
                            analyticsSource: o,
                            guildId: n ?? void 0,
                            stackingBehavior: "stack",
                            returnRef: a,
                        });
                }, [r, o, n, a]),
                k = i.useCallback(() => {
                    r(),
                        (0, i8.L)({
                            analyticsLocations: d,
                            guild: A ?? void 0,
                            stackingBehavior: "stack",
                            returnRef: a,
                        });
                }, [r, d, A, a]),
                R = i.useCallback(() => {
                    r(),
                        (0, lQ.rM)(null, f, (e) => (0, e0.p)({ guildId: n ?? void 0, avatar: e })),
                        (0, eo.WU)(p ? "reset" : "remove");
                }, [r, n, f, p]),
                S = i.useCallback(() => {
                    r(), (0, e0.p)({ guildId: n ?? void 0, avatarDecoration: null });
                }, [r, n]);
            return i.useMemo(() => {
                let e = [];
                return (
                    v &&
                        e.push(
                            (0, t.jsx)(
                                i3.Dr,
                                { id: "change-avatar", label: eK.intl.string(eK.t["4OynCD"]), action: P },
                                "change-avatar",
                            ),
                        ),
                    h &&
                        e.push(
                            (0, t.jsx)(
                                i3.Dr,
                                { id: "change-decoration", label: eK.intl.string(eK.t.HykynS), action: k },
                                "change-decoration",
                            ),
                        ),
                    v &&
                        m &&
                        e.push(
                            p
                                ? (0, t.jsx)(
                                      i3.Dr,
                                      {
                                          id: "reset-avatar",
                                          color: "danger",
                                          label: eK.intl.string(eK.t.TDjKDm),
                                          action: R,
                                      },
                                      "reset-avatar",
                                  )
                                : (0, t.jsx)(
                                      i3.Dr,
                                      {
                                          id: "remove-avatar",
                                          color: "danger",
                                          label: eK.intl.string(eK.t.twB3fz),
                                          action: R,
                                      },
                                      "remove-avatar",
                                  ),
                        ),
                    h &&
                        y &&
                        e.push(
                            E
                                ? (0, t.jsx)(
                                      i3.Dr,
                                      {
                                          id: "reset-decoration",
                                          color: "danger",
                                          label: eK.intl.string(eK.t["2u5yu0"]),
                                          action: S,
                                      },
                                      "reset-decoration",
                                  )
                                : (0, t.jsx)(
                                      i3.Dr,
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
            }, [p, v, h, E, m, y, P, k, R, S]);
        })({ user: l, guildId: n, onClose: f, returnRef: g });
    return 0 === m.length
        ? (0, t.jsx)(eb.A, { ...e })
        : (0, t.jsxs)("div", {
              ...o,
              className: a()(i4.my, i4.vk, re.kL, { [re.MO]: d }),
              onMouseDown: (e) => {
                  c.current?.contains(e.target) || u(!0);
              },
              children: [
                  (0, t.jsx)(rl, { ...r, imageClassName: a()(i4.Lw, re.HU) }),
                  (0, t.jsx)(l4.Y, {
                      targetElementRef: c,
                      shouldShow: d,
                      animation: l4.Y.Animation.NONE,
                      position: "right",
                      align: "top",
                      onRequestClose: f,
                      renderPopout: (e) => (0, t.jsx)(rn, { ...e, items: m, onMenuClose: f }),
                      children: (e) =>
                          (0, t.jsx)("div", {
                              ref: c,
                              className: re.r9,
                              children: (0, t.jsx)(lG.K, {
                                  ...e,
                                  buttonRef: g,
                                  variant: "overlay-secondary",
                                  size: "sm",
                                  icon: i5.R,
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
var ri = n(875262);
function rr(e) {
    let { onMenuClose: l, items: n, ...i } = e;
    return (0, t.jsx)(i7.W, {
        ...i,
        "data-menu-migrated": !0,
        navId: "banner-edit-context",
        onClose: l,
        onSelect: l,
        "aria-label": eK.intl.string(eK.t.FzU73A),
        children: (0, t.jsx)(i3.rX, { children: n }),
    });
}
function ra(e) {
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
                f = (0, lq.sk)("UserProfileModalV2EditableBanner"),
                m = eQ.Ay.canUsePremiumProfileCustomization(l),
                p = null == n,
                x = p || m,
                v = f && (p || m),
                h = null != n,
                {
                    pendingBanner: A,
                    pendingProfileEffect: b,
                    pendingProfileFrame: j,
                } = (0, s.bG)([eg.A], () => eg.A.getPendingChanges(n ?? void 0)),
                C = (0, s.bG)([W.A], () =>
                    null != n ? W.A.getGuildMemberProfile(l.id, n)?.banner : W.A.getUserProfile(l.id)?.banner,
                ),
                N = (0, s.bG)([ec.default], () => ec.default.getCurrentUser()?.banner != null),
                E = (0, s.bG)([W.A], () => W.A.getUserProfile(l.id)?.profileEffect != null),
                P = (0, s.bG)([W.A], () => W.A.getUserProfile(l.id)?.profileFrame != null),
                k = (0, eo.Ac)(A, C),
                R = h && N,
                S = h && E,
                T = h && P,
                D = void 0 === b ? null != u : null != b,
                _ = void 0 === j ? null != c : null != j,
                L = (0, eo.lw)({
                    pendingValue: j,
                    userValue: g,
                    guildValue: null != n ? c : void 0,
                    guildId: n ?? void 0,
                }),
                O = (0, y.A)(L?.skuId, "UserProfileModalV2EditableBanner"),
                w = i.useCallback(() => {
                    r(),
                        (0, lQ.XD)({
                            uploadType: nr.HL.BANNER,
                            analyticsSource: o,
                            guildId: n ?? void 0,
                            stackingBehavior: "stack",
                            returnRef: a,
                        });
                }, [r, o, n, a]),
                G = i.useCallback(() => {
                    r(),
                        (0, nk.W)({
                            analyticsLocations: d,
                            guild: null != n ? (M.A.getGuild(n) ?? void 0) : void 0,
                            initialSelectedEffect: u,
                            stackingBehavior: "stack",
                            returnRef: a,
                        });
                }, [r, d, n, u, a]),
                V = i.useCallback(() => {
                    r(), (0, lQ.rM)(null, C, (e) => (0, e0.p)({ guildId: n ?? void 0, banner: e }));
                }, [r, n, C]),
                F = i.useCallback(() => {
                    r(), (0, e0.p)({ guildId: n ?? void 0, profileEffect: null });
                }, [r, n]),
                U = i.useCallback(() => {
                    r(),
                        (0, nz.w)({
                            analyticsLocations: d,
                            guild: null != n ? (M.A.getGuild(n) ?? void 0) : void 0,
                            initialSelectedProfileFrame: O,
                            stackingBehavior: "stack",
                            returnRef: a,
                        });
                }, [r, d, n, O, a]),
                B = i.useCallback(() => {
                    r(), (0, e0.p)({ guildId: n ?? void 0, profileFrame: null });
                }, [r, n]);
            return i.useMemo(() => {
                let e = [];
                return (
                    m &&
                        e.push(
                            (0, t.jsx)(
                                i3.Dr,
                                { id: "change-banner", label: eK.intl.string(eK.t.N0bC3P), action: w },
                                "change-banner",
                            ),
                        ),
                    x &&
                        e.push(
                            (0, t.jsx)(
                                i3.Dr,
                                { id: "change-effect", label: eK.intl.string(eK.t["/6nv6N"]), action: G },
                                "change-effect",
                            ),
                        ),
                    v &&
                        e.push(
                            (0, t.jsx)(
                                i3.Dr,
                                { id: "change-frame", label: eK.intl.string(eK.t["oTSa/q"]), action: U },
                                "change-frame",
                            ),
                        ),
                    m &&
                        k &&
                        e.push(
                            R
                                ? (0, t.jsx)(
                                      i3.Dr,
                                      {
                                          id: "reset-banner",
                                          color: "danger",
                                          label: eK.intl.string(eK.t.jHlJNS),
                                          action: V,
                                      },
                                      "reset-banner",
                                  )
                                : (0, t.jsx)(
                                      i3.Dr,
                                      {
                                          id: "remove-banner",
                                          color: "danger",
                                          label: eK.intl.string(eK.t.tT9n7D),
                                          action: V,
                                      },
                                      "remove-banner",
                                  ),
                        ),
                    x &&
                        D &&
                        e.push(
                            S
                                ? (0, t.jsx)(
                                      i3.Dr,
                                      {
                                          id: "reset-effect",
                                          color: "danger",
                                          label: eK.intl.string(eK.t.Lb7lu9),
                                          action: F,
                                      },
                                      "reset-effect",
                                  )
                                : (0, t.jsx)(
                                      i3.Dr,
                                      {
                                          id: "remove-effect",
                                          color: "danger",
                                          label: eK.intl.string(eK.t.zUOlT6),
                                          action: F,
                                      },
                                      "remove-effect",
                                  ),
                        ),
                    v &&
                        _ &&
                        e.push(
                            T
                                ? (0, t.jsx)(
                                      i3.Dr,
                                      {
                                          id: "reset-frame",
                                          color: "danger",
                                          label: eK.intl.string(eK.t.A0pzWn),
                                          action: B,
                                      },
                                      "reset-frame",
                                  )
                                : (0, t.jsx)(
                                      i3.Dr,
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
            }, [R, m, x, v, S, T, k, D, _, w, G, U, V, F, B]);
        })({ user: l, guildId: n, onClose: c, returnRef: u });
    return 0 === g.length
        ? (0, t.jsx)(eI.A, { ...e })
        : (0, t.jsxs)("div", {
              className: a()(ri.kL, { [ri.MO]: r }),
              onMouseDown: (e) => {
                  d.current?.contains(e.target) || o(!0);
              },
              children: [
                  (0, t.jsx)(eI.A, { ...e, className: ri.Pr }),
                  (0, t.jsx)(l4.Y, {
                      targetElementRef: d,
                      shouldShow: r,
                      animation: l4.Y.Animation.NONE,
                      position: "right",
                      align: "top",
                      onRequestClose: c,
                      renderPopout: (e) => (0, t.jsx)(rr, { ...e, items: g, onMenuClose: c }),
                      children: (e) =>
                          (0, t.jsx)("div", {
                              ref: d,
                              className: ri.r9,
                              children: (0, t.jsx)(lG.K, {
                                  ...e,
                                  buttonRef: u,
                                  variant: "overlay-secondary",
                                  size: "sm",
                                  icon: i5.R,
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
var rs = n(777480),
    ro = n(107563),
    rd = n(570287);
n(938796);
var ru = n(913453),
    rc = n(667049),
    rg = n(837531),
    rf = n(186272),
    rm = n(800609),
    rp = n(128604);
let rx = (e) => e * (2 - e),
    rv = { "compact-sm": { avatarOffsetX: 16 }, "compact-xs": { avatarSize: d._3.SIZE_96, avatarOffsetX: 16 } };
function rh(e) {
    let { type: l, anchor: n } = e;
    return "staple" !== l || "bottom" !== n;
}
function rA(e) {
    let { displayProfile: l, pendingBanner: n } = e,
        r = (0, Z.Nx)(),
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
        : (0, t.jsx)("div", { className: rm.backgroundImage, style: { backgroundImage: `url(${o})` } });
}
function rb(e) {
    let { displayProfile: l, profileEffectOverride: n, isHovering: r } = e,
        a = void 0 !== n ? n : l?.profileEffect,
        s = i.useSyncExternalStore(
            (e) => (nT.add(e), () => nT.delete(e)),
            () => nD,
        );
    return null == a ? null : (0, t.jsx)(C.A, { skuId: a.skuId, isHovering: r, restartKey: s });
}
function rj(e) {
    var l;
    let n,
        r,
        {
            user: o,
            currentUser: d,
            guildId: u,
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
            allowEditing: R,
            isLoading: O = !1,
        } = e,
        M = o.id === d.id,
        V = i.useRef(null),
        { isHoveringOrFocusing: U } = (0, S.A)(V),
        [B, W] = i.useState(),
        z = i.useCallback((e) => {
            let l = e.contentRect.width;
            l <= 350 ? W("compact-xs") : l <= 380 ? W("compact-sm") : W(void 0);
        }, []);
    (0, A.g)(V, z, [], { fireOnMount: !0 });
    let H = null != B ? rv[B] : void 0,
        $ = i.useMemo(() => h ?? (0, T.A)(), [h]),
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
        eo = (0, D.fi)(o.id),
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
        ep = R ? ra : eI.A,
        ex = R ? rt : eb.A,
        ev = p?.guildId ?? u,
        eh = i.useCallback(() => {
            (0, eM.A)({ user: o, guildId: ev, alt: x });
        }, [x, ev, o]);
    return (0, t.jsxs)("main", {
        className: a()(rm.profile, null != B && rm[B]),
        ref: V,
        "aria-busy": O,
        children: [
            (0, t.jsxs)("div", {
                className: rm.profileHeader,
                children: [
                    (0, t.jsx)("div", {
                        className: rm.profileHeaderBannerContainer,
                        children: (0, t.jsx)(ep, {
                            user: o,
                            displayProfile: p,
                            guildId: u,
                            themeType: ef.d.MODAL_V2,
                            specOverrides: H,
                            pendingBanner: C,
                            pendingAccentColor: N,
                        }),
                    }),
                    (0, t.jsx)(ex, {
                        user: o,
                        displayProfile: p,
                        guildId: u,
                        channelId: m,
                        themeType: ef.d.MODAL_V2,
                        specOverrides: H,
                        avatarDecorationOverride: j,
                        avatarOverride: I,
                        onOpenAvatar: R ? void 0 : eh,
                    }),
                    (0, t.jsx)(eL.A, {
                        user: o,
                        guildId: u,
                        channelId: m,
                        themeType: ef.d.MODAL_V2,
                        hasEntered: v,
                        prompt: M ? $ : null,
                    }),
                ],
            }),
            (0, t.jsxs)(c.Ip, {
                fade: !0,
                className: rm.profileBody,
                children: [
                    (0, t.jsx)(i1, {
                        user: o,
                        displayProfile: p,
                        nickname: x,
                        trailing: (0, t.jsx)(ej.A, { displayProfile: p, themeType: ef.d.MODAL_V2, onClose: b }),
                        onClose: b,
                        allowEditing: R,
                    }),
                    Z === q.eA$.PENDING_INCOMING &&
                        (0, t.jsx)(e_.A.Overlay, {
                            className: rm.profileOverlay,
                            children: (0, t.jsx)(eP.A, {
                                user: o,
                                applicationId: ei,
                                guildId: p?.guildId ?? void 0,
                                channelId: m,
                                className: rm.profileBanner,
                            }),
                        }),
                    eo.map((e) => {
                        let { applicationId: l } = e;
                        return (0, t.jsx)(
                            e_.A.Overlay,
                            {
                                className: rm.profileOverlay,
                                children: (0, t.jsx)(eP.A, {
                                    user: o,
                                    guildId: p?.guildId ?? void 0,
                                    channelId: m,
                                    isGameRelationship: !0,
                                    applicationId: l,
                                    className: rm.profileBanner,
                                }),
                            },
                            l,
                        );
                    }),
                    o.isProvisional &&
                        (0, t.jsx)(e_.A.Overlay, {
                            className: rm.profileOverlay,
                            children: (0, t.jsx)(is.A, {
                                heading: eK.intl.string(eK.t.Iyka0U),
                                headingVariant: "text-md/semibold",
                                headingIcon: (0, t.jsx)(g.E, { size: "xs", color: "currentColor" }),
                                className: rm.profileBanner,
                                children: (0, t.jsx)(L.T, { userId: o.id, variant: "text-sm/normal" }),
                            }),
                        }),
                    (0, t.jsx)(eD.A, { user: o, className: rm.profileBanner }),
                    p?.private &&
                        (0, t.jsx)(e_.A.Overlay, {
                            className: rm.profileOverlay,
                            children: (0, t.jsx)(eT.A, { username: x }),
                        }),
                    (0, t.jsx)("div", {
                        className: rm.profileButtons,
                        children: (0, t.jsx)(lv, {
                            user: o,
                            currentUser: d,
                            guildId: u,
                            originGuildId: f,
                            channelId: m,
                            displayProfile: p,
                            relationshipType: Z,
                            onClose: b,
                        }),
                    }),
                    M && (0, t.jsx)(eC.A, { isPremiumUser: (0, F.ki)(d) }),
                    !ea && (0, t.jsx)(lr, { displayProfile: p, isEditable: R }),
                    es.length > 0 &&
                        (0, t.jsx)(is.A, {
                            heading: eK.intl.string(eK.t["Uv/eTx"]),
                            children: (0, t.jsx)(eE.A, { applicationIds: es }),
                        }),
                    (0, t.jsx)(is.A, {
                        heading: eK.intl.string(eK.t.a6XYD9),
                        children: (0, t.jsx)(eR.A, { userId: o.id, guildId: p?.guildId, tooltipDelay: io.In }),
                    }),
                    null != er &&
                        (0, t.jsx)(is.A, {
                            heading: eK.intl.string(eK.t.wlTO8v),
                            children: (0, t.jsx)(ey, { friendsSinceDate: er }),
                        }),
                    p?.guildId != null &&
                        (0, t.jsx)(eO.A, {
                            userId: o.id,
                            guildId: p.guildId,
                            className: rm.profileRolesSection,
                            headingVariant: "text-xs/medium",
                            headingColor: "text-subtle",
                        }),
                    !ea &&
                        (R || eg) &&
                        (0, t.jsx)(is.A, {
                            heading: eK.intl.string(eK.t["3fe7U5"]),
                            scrollTargetId: io.bk.CONNECTIONS,
                            children: (0, t.jsx)(lM, {
                                applicationIdentities: ed,
                                connections: eu,
                                userId: o.id,
                                allowEditing: R,
                                className: rm.profileAppConnections,
                            }),
                        }),
                    !ea &&
                        em &&
                        (0, t.jsx)(is.A, {
                            heading: eK.intl.string(eK.t.PHjkRE),
                            scrollTargetId: io.bk.APPS,
                            children: (0, t.jsx)(eq, {
                                applicationRoleConnections: ec,
                                onClose: b,
                                className: rm.profileAppConnections,
                            }),
                        }),
                    (0, t.jsx)(iu, { userId: o.id }),
                ],
            }),
            (0, t.jsx)(rb, { displayProfile: p, profileEffectOverride: y, isHovering: U }),
            null != E && (0, t.jsx)(P.A, { frame: E, filterLayer: rh, fadeIn: k }),
        ],
    });
}
function rI(e) {
    let { user: l, displayProfile: n, pendingThemeColors: i, children: r } = e,
        {
            theme: a,
            primaryColor: s,
            secondaryColor: o,
        } = (0, $.A)({ user: l, displayProfile: n, pendingThemeColors: i }),
        { profileThemeStyle: d, profileThemeClassName: u } = (0, ea.A)({
            theme: a,
            themeType: null,
            primaryColor: s,
            secondaryColor: o,
        });
    return (0, t.jsx)("div", { className: u, style: d, children: r });
}
function rC(e) {
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
            initialScrollTarget: S,
            transitionState: T,
            customStatusPrompt: D,
            openedAt: _,
            onClose: L,
            sourceAnalyticsLocations: F = [],
            themeContainerClassName: K,
        } = e,
        X = l.id === n.id,
        Y = tT(L, X),
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
        el = i.useMemo(() => (null != q ? { [q]: [l.id] } : {}), [q, l.id]);
    (0, b.Eq)(el, "UserProfileModalV2");
    let en = (0, z.X)("UserProfileModalV2"),
        et = (0, s.bG)([G.A], () => G.A.hidePersonalInformation),
        ea = (0, ei.A)(l.id) && en,
        em = (0, er.W)(l.id),
        ev = ee && !em,
        eb = ea && !et && !ee,
        {
            pendingThemeColors: ej,
            avatarDecorationOverride: eI,
            avatarOverride: eC,
            bannerOverride: eN,
            accentColorOverride: ey,
            profileEffectOverride: eE,
            profileFrameOverride: eP,
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
        })({ userId: l.id, allowEditingInModal: eb, guildId: q }),
        {
            isExpanded: eR,
            isAnimating: eT,
            transition: eD,
            handleExpand: eL,
            handleCollapse: eO,
            refs: { expandIconButtonRef: eM, expandTabButtonRef: ew, collapseButtonRef: eG },
        } = (function () {
            let [e, l] = i.useState(() => window.innerWidth > 928),
                [n, t] = i.useState(!1),
                r = (0, u.p)(e, {
                    keys: (e) => (e ? "panel" : "empty"),
                    from: { progress: 0 },
                    enter: { progress: 1 },
                    leave: { progress: 0 },
                    config: { duration: 300, easing: rx },
                    onRest: () => t(!1),
                }),
                a = (0, h.A)("(min-width: 929px) and (min-height: 550px)"),
                s = i.useRef(null),
                o = i.useRef(null),
                d = i.useRef(null),
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
                    handleCollapse: f,
                    refs: { expandIconButtonRef: s, expandTabButtonRef: o, collapseButtonRef: d },
                }
            );
        })(),
        eV = ea && !eR,
        eF = ea && (!eR || eT),
        { defaultWishlistId: eU } = (0, s.cf)([W.A], () => ({ defaultWishlistId: W.A.getFirstWishlistId(l.id) }));
    (0, O.fw)({ wishlistId: eU, userId: l.id });
    let eB = (0, eA.fC)(),
        eW = ev && (!ea || !Z),
        ez = ea && ee,
        eH = $ !== q || ez || null != eB.interactionType,
        eX = (function (e) {
            let l,
                n,
                t,
                { user: i, currentUser: r } = e,
                { mutualFriendsCount: a, mutualGuilds: o } = (0, ru.A)(i),
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
                c = (0, rc.A)(i.id),
                g = (0, rd.A)(i.id),
                f = [],
                m = i.id === r?.id,
                p = (0, ei.A)(i.id),
                x = W.A.getFirstWishlistId(i.id),
                v = null != x,
                h = v ? W.A.getWishlistSettings(i.id, x) : null,
                A = (v ? ro.A.getWishlistItems(x) : []).length > 0,
                b = c.length > 0;
            (p || b) && f.push({ text: eK.intl.string(eK.t.laViwx), section: io.RP.WIDGETS }),
                f.push({ text: eK.intl.string(eK.t.chq59f), section: io.RP.ACTIVITY });
            let j = !1 === i.nsfwAllowed,
                I = w.A.isFriend(i.id),
                C = h?.visibility === rs.a.PUBLIC;
            return (
                (m || (!m && A && C && g && (!j || (j && I)))) &&
                    f.push({ text: eK.intl.string(eK.t["7lZ31J"]), section: io.RP.WISHLIST }),
                i.id !== r?.id &&
                    u &&
                    (f.push({ text: (0, rg.A)(a), section: io.RP.MUTUAL_FRIENDS }),
                    f.push({ text: (0, rf.A)(d), section: io.RP.MUTUAL_GUILDS })),
                f
            );
        })({ user: l, currentUser: n }),
        { analyticsLocations: eY } = (0, I.Ay)([...F, j.A.USER_PROFILE_MODAL_V2]),
        eq = (0, U.pb)({
            layout: "MODAL_V2",
            userId: l.id,
            sourceSessionId: C,
            guildId: q,
            channelId: c,
            messageId: g,
            roleId: A,
        }),
        e$ = i.useCallback(() => {
            (0, B.Wn)({ analyticsLocations: eY, ...eq, action: io.pt.SHOW_STYLES_PANEL }), eL();
        }, [eY, eq, eL]),
        eZ = i.useCallback(() => {
            (0, B.Wn)({ analyticsLocations: eY, ...eq, action: io.pt.HIDE_STYLES_PANEL }), eO();
        }, [eY, eq, eO]),
        eJ = (0, H.Ay)(l.id, q),
        eQ = void 0 !== eP ? eP?.skuId : eJ?.profileFrame?.skuId,
        e0 = (0, y.A)(eQ, "UserProfileModalV2"),
        e1 = (0, N.A)(eQ),
        { profileFrameStyle: e2, profileFrameClassName: e7 } = (0, k.A)(eQ);
    (0, E.A)({ skuId: eJ?.profileFrame?.skuId, openedAt: _, context: eq, analyticsLocations: eY });
    let e3 = V.Ay.useName(eJ?.guildId, c, l),
        e5 = (0, R.GV)(),
        e9 = (0, s.bG)([M.A], () => (null != q ? M.A.getGuild(q) : null)),
        e8 = X
            ? null != e9
                ? eK.intl.formatToPlainString(eK.t.M7OhOF, { guildName: e9.name })
                : eK.intl.string(eK.t.egQPgM)
            : eK.intl.format(eK.t.KRe1Fk, { name: e3 });
    return (0, t.jsx)(I.f5, {
        value: eY,
        children: (0, t.jsx)(U.of, {
            value: eq,
            openedAt: _,
            fetchStartedAt: eJ?.fetchStartedAt,
            fetchEndedAt: eJ?.fetchEndedAt,
            isLoaded: eJ?.isLoaded,
            children: (0, t.jsx)(eA.Hl, {
                value: eB,
                children: (0, t.jsx)(eh.N, {
                    value: S,
                    children: (0, t.jsxs)(o.EO, {
                        "data-migration-pending": !0,
                        hideShadow: !0,
                        className: a()(rp.zr, { [rp.QF]: eJ?.private === !0 }),
                        transitionState: T,
                        "aria-labelledby": e5,
                        parentComponent: "UserProfileModalV2",
                        children: [
                            (0, t.jsx)(iC, {
                                children: (0, t.jsxs)("div", {
                                    className: a()(rm.layoutContainer, e7, {
                                        [rm.editingPanelEnabled]: ea,
                                        [rm.editingPanelExpanded]: ea && eR,
                                        [rm.isAnimating]: eT,
                                    }),
                                    style: e2,
                                    children: [
                                        (0, t.jsxs)(rI, {
                                            user: l,
                                            displayProfile: eJ,
                                            pendingThemeColors: ej,
                                            children: [
                                                (0, t.jsxs)("div", {
                                                    className: rp.Oo,
                                                    children: [
                                                        (0, t.jsx)(lh.A, { onClose: Y }),
                                                        (0, t.jsx)(f.A, {
                                                            children: (0, t.jsx)(m.H, { id: e5, children: e8 }),
                                                        }),
                                                        eF &&
                                                            (0, t.jsx)(t9, {
                                                                buttonRef: eM,
                                                                onClick: e$,
                                                                className: rm.editingPanelExpandButtonCompact,
                                                            }),
                                                    ],
                                                }),
                                                eV &&
                                                    (0, t.jsx)("div", {
                                                        className: rm.editingPanelExpandButtonDefaultContainer,
                                                        children: (0, t.jsx)(t5, {
                                                            innerRef: ew,
                                                            onClick: e$,
                                                            className: rm.editingPanelExpandButtonDefault,
                                                        }),
                                                    }),
                                            ],
                                        }),
                                        (0, t.jsxs)(m.F, {
                                            children: [
                                                ea &&
                                                    eD((e, l) =>
                                                        l
                                                            ? (0, t.jsx)(t8, {
                                                                  className: a()(rm.editingPanel, {
                                                                      [rm.isExpanded]: eR,
                                                                  }),
                                                                  selectedGuildId: $,
                                                                  originGuildId: d,
                                                                  onSelectGuildId: J,
                                                                  onClose: eZ,
                                                                  collapseButtonRef: eG,
                                                                  isLoading: Z,
                                                                  isEditingDisabled: ee,
                                                              })
                                                            : null,
                                                    ),
                                                (0, t.jsxs)(e_.A, {
                                                    className: a()(K, rp.A7, rm.profileContentOuter),
                                                    innerClassName: rm.profileContentInner,
                                                    user: l,
                                                    displayProfile: eJ,
                                                    themeType: ef.d.MODAL_V2,
                                                    pendingThemeColors: ej,
                                                    isPrivate: eJ?.private === !0,
                                                    children: [
                                                        (0, t.jsx)(rA, { displayProfile: eJ, pendingBanner: eN }),
                                                        eJ?.private === !0 && (0, t.jsx)(eS.A, {}),
                                                        !ev && (0, t.jsx)(iS, { className: rm.noticeContainer }),
                                                        eW &&
                                                            (0, t.jsx)("div", {
                                                                className: rm.noticeContainer,
                                                                role: "alert",
                                                                children: (0, t.jsx)(ip, {
                                                                    icon: (0, t.jsx)(p.i, {
                                                                        size: "sm",
                                                                        color: x.A.colors.ICON_FEEDBACK_WARNING,
                                                                    }),
                                                                    message: eK.intl.string(eK.t.L9wE7H),
                                                                    actionLabel:
                                                                        null != Q
                                                                            ? eK.intl.string(eK.t["5911Lb"])
                                                                            : void 0,
                                                                    onAction: Q,
                                                                    actionDisabled: !ea && Z,
                                                                    autoFocus: !0,
                                                                }),
                                                            }),
                                                        (0, t.jsx)("div", {
                                                            className: rm.profileCardToastContainer,
                                                            children: (0, t.jsx)(ek.A, { userId: l.id, onClose: Y }),
                                                        }),
                                                        (0, t.jsxs)(ib, {
                                                            showScrim: eH,
                                                            showLoadingSpinner: Z,
                                                            className: rm.profileContentColumns,
                                                            children: [
                                                                (0, t.jsx)(rj, {
                                                                    user: l,
                                                                    currentUser: n,
                                                                    guildId: q,
                                                                    channelId: c,
                                                                    displayProfile: eJ,
                                                                    nickname: e3,
                                                                    originGuildId: d,
                                                                    hasEntered: T === v.ip.ENTERED,
                                                                    customStatusPrompt: D,
                                                                    onClose: Y,
                                                                    avatarDecorationOverride: eI,
                                                                    avatarOverride: eC,
                                                                    bannerOverride: eN,
                                                                    accentColorOverride: ey,
                                                                    profileEffectOverride: eE,
                                                                    profileFrame: e0,
                                                                    fadeInProfileFrame: e1,
                                                                    allowEditing: eb,
                                                                    isLoading: Z,
                                                                }),
                                                                (0, t.jsx)(iN.A, {
                                                                    user: l,
                                                                    currentUser: n,
                                                                    displayProfile: eJ,
                                                                    guildId: q,
                                                                    channelId: c,
                                                                    items: eX,
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
                            (0, t.jsx)(t6.A, { userId: l.id, guildId: q, className: rm.pendingChangesToolbar }),
                        ],
                    }),
                }),
            }),
        }),
    });
}
