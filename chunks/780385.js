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
    R = n(915089),
    S = n(713517),
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
    B = n(841595),
    z = n(591179),
    H = n(999291),
    W = n(702841),
    K = n(370480),
    X = n(773669),
    q = n(652215),
    Y = n(101928),
    Z = n(837529),
    $ = n(346713),
    J = n(573648),
    Q = n(941314),
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
    ey = n(834730);
function eN(e) {
    let { friendsSinceDate: l } = e;
    return (0, t.jsx)(ey.E, { variant: "text-sm/normal", children: l });
}
var eE = n(361311),
    eP = n(931481),
    ek = n(439053),
    eR = n(743987),
    eS = n(312381),
    eT = n(501193),
    eD = n(383448),
    eO = n(946356),
    eM = n(983495),
    ew = n(280645),
    eL = n(109112),
    e_ = n(939249),
    eG = n(730134),
    eV = n(169869),
    eU = n(837057),
    eF = n(310419),
    eB = n(889227),
    ez = n(967198),
    eH = n(488995),
    eW = n(375708),
    eK = n(985176);
function eX(e) {
    let { applicationRoleConnection: l, locale: n, onApplicationClicked: i, selectedGuildId: r } = e,
        a = (0, eV.VW)(l, n);
    return (0, t.jsxs)(t.Fragment, {
        children: [
            (0, t.jsx)("div", {
                className: eK.k_,
                children:
                    null != l.application.bot
                        ? (0, t.jsx)(eG.A, { user: new eB.A(l.application.bot), size: o._3.SIZE_16 })
                        : (0, t.jsx)(eL._, { color: "currentColor", size: "sm" }),
            }),
            (0, t.jsxs)("div", {
                className: eK.Hd,
                children: [
                    (0, t.jsxs)(e_.D, {
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
                                className: eK.nk,
                                children: eW.intl.format(eW.t.zIT9YA, { applicationHook: () => l.application.name }),
                            }),
                        ],
                    }),
                    null != a && a.length > 0 ? (0, t.jsx)("div", { className: eK.yu, children: a }) : null,
                ],
            }),
        ],
    });
}
function eq(e) {
    let { applicationRoleConnections: l, className: n, onClose: i } = e,
        { trackUserProfileAction: r } = (0, F.NJ)(),
        o = (0, s.bG)([X.default], () => X.default.locale),
        d = (0, s.bG)([ez.A], () => ez.A.getGuildId());
    return 0 === l.length
        ? null
        : (0, t.jsx)("ul", {
              className: a()(eK.kL, n),
              children: l.map((e, l) =>
                  (0, t.jsx)(
                      "li",
                      {
                          className: eK.FI,
                          children: (0, t.jsx)(eX, {
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
var eY = n(240248),
    eZ = n(308244),
    e$ = n(81400),
    eJ = n(428262),
    eQ = n(84540),
    e0 = n(621466);
n(321073);
var e1 = n(219869),
    e2 = n(990078),
    e7 = n(775602),
    e3 = n(916315);
function e5(e) {
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
function e8(e) {
    let { tooltip: l, ...n } = e,
        i = (0, t.jsx)("div", {
            className: e3.L7,
            children: (0, t.jsx)(e1.T, { ...n, size: "sm", variant: "input-accessory" }),
        });
    return null == l ? i : (0, t.jsx)(e2.m, { text: l, ariaHidden: !0, children: i });
}
function e9(e) {
    let { id: l, message: n, type: i } = e,
        r = "error" === i,
        a = r ? c.E : p.i;
    return (0, t.jsxs)(ey.E, {
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
        y = null != f,
        N = null != m && !y,
        E = y ? "error" : N ? "warning" : null,
        P = y ? f : m,
        k = null != E && null != P,
        R = [];
    C && R.push(j), k && "compact" !== c && R.push(I);
    let S = R.length > 0 ? R.join(" ") : void 0,
        T = (0, t.jsxs)("div", {
            ref: b,
            className: a()(e3.LL, { [e3.JD]: y, [e3.xe]: N, [e3.r9]: A }),
            onClick: A ? void 0 : u,
            children: [
                C
                    ? (0, t.jsx)(ey.E, {
                          id: j,
                          variant: "text-sm/normal",
                          color: "text-muted",
                          className: e3.qf,
                          children: r,
                      })
                    : n,
                !A &&
                    (0, t.jsx)(e_.D, {
                        innerRef: o,
                        "aria-label": d,
                        "aria-describedby": S,
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
                              k && "compact" !== c && (0, t.jsx)(e9, { id: I, message: P, type: E }),
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
                ? eW.intl.formatToPlainString(eW.t.ICT5S6, { maxLength: v })
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
            let { isEditing: l, wrapperRef: n, handleCommit: t, ...r } = e5(e),
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
        h = !(0, eY.uJ)(p),
        A = (0, s.bG)([eg.A], () => eg.A.getErrors(g)),
        b = (0, e$.EC)(g),
        j = A.bio?.[0],
        I = b?.bio?.[0],
        C = i.useMemo(() => {
            let e;
            return (e = Math.floor(Math.random() * ll.length)), ll[e];
        }, []),
        y = c ? eW.intl.string(eW.t.yPJ9xr) : C.label();
    return !c || f
        ? (0, t.jsx)(le, {
              ...v,
              preview: h ? (0, t.jsx)(eZ.A, { userBio: p, setLineClamp: !1 }) : null,
              placeholder: y,
              editButtonAriaLabel: eW.intl.string(eW.t.lO3n7a),
              label: eW.intl.string(eW.t["YWo+Zd"]),
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
        s = !(0, eY.uJ)(a);
    return n || s
        ? (0, t.jsxs)("section", {
              "aria-labelledby": r,
              children: [
                  (0, t.jsx)(f.A, { children: (0, t.jsx)(m.H, { id: r, children: eW.intl.string(eW.t.ZzAR2Y) }) }),
                  n ? (0, t.jsx)(lt, { displayProfile: l }) : (0, t.jsx)(eZ.A, { userBio: a, setLineClamp: !1 }),
              ],
          })
        : null;
}
var lr = n(982168),
    la = n(722868),
    ls = n(822775),
    lo = n(982985),
    ld = n(700174),
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
        tooltipText: eW.intl.string(eW.t.b2d0N0),
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
        u = (0, z.X)("UserProfileModalV2Buttons"),
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
    ly = n(874490),
    lN = n(968309),
    lE = n(174459),
    lP = n(486020),
    lk = n(123917),
    lR = n(783419);
let lS = "User Profile Modal V2";
function lT(e) {
    let l = J.A.get(e);
    (0, lN.A)({ platformType: l.type, location: lS }),
        lE.default.track(q.HAw.ACCOUNT_LINK_STEP, {
            previous_step: lS,
            current_step: "desktop oauth",
            platform_type: l.type,
        });
}
function lD() {
    lI.h.dispatch({ type: "CONNECTIONS_GRID_MODAL_SHOW", onComplete: lT, stackingBehavior: "stack" });
}
function lO(e) {
    let { account: l, locale: n, userId: i } = e,
        r = l.metadata ?? {},
        a = (0, K.An)(r[lR.pK.CREATED_AT], n),
        s = J.A.get((0, ly.ML)(l.type));
    return (0, t.jsx)(lw, {
        renderAccountName: () => {
            let e = s?.getPlatformUserUrl?.(l);
            return null == e
                ? (0, t.jsx)(e2.m, {
                      overflowOnly: !0,
                      text: l.name,
                      children: (0, t.jsx)(ey.E, { variant: "text-sm/normal", className: eK.GW, children: l.name }),
                  })
                : (0, t.jsx)(lA.Anchor, {
                      href: e,
                      className: eK.Y2,
                      useDefaultUnderlineStyles: !1,
                      "aria-label":
                          s?.name != null
                              ? `${s.name}, ${l.name}, ${eW.intl.string(eW.t.q5jLJB)}`
                              : `${l.name}, ${eW.intl.string(eW.t.q5jLJB)}`,
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
                                  children: (0, t.jsx)(ey.E, {
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
function lM(e) {
    let { identityWithApplication: l } = e,
        { identity: n, application: i } = l;
    if (null == n.profile || null == n.profile.username || null == i) return null;
    let r = lP.Ay.getApplicationIconURL({ id: i.id, icon: i.icon });
    return (0, t.jsx)(lw, {
        renderAccountName: function () {
            return (0, t.jsx)(e2.m, {
                overflowOnly: !0,
                text: n.profile.username,
                children: (0, t.jsx)(ey.E, {
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
function lw(e) {
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
                        alt: eW.intl.formatToPlainString(eW.t.rtm15P, { name: i }),
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
                                (0, t.jsx)(ey.E, {
                                    variant: "text-xs/normal",
                                    children: eW.intl.format(eW.t["9rfonh"], { date: s }),
                                }),
                        ],
                    }),
                    (0, t.jsx)("div", { className: eK.yu, children: n() }),
                ],
            }),
        ],
    });
}
function lL(e) {
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
                        l.map((e) => (0, t.jsx)(lO, { account: e, userId: i, locale: d }, `${e.type}:${e.id}`)),
                        n?.map((e) => (0, t.jsx)(lM, { identityWithApplication: e }, e.identity.application_id)),
                    ],
                }),
            r &&
                (0, t.jsxs)(e_.D, {
                    className: eK.qG,
                    onClick: lD,
                    children: [
                        (0, t.jsx)(lj.j, { size: "sm", color: "currentColor" }),
                        (0, t.jsx)(ey.E, {
                            variant: "text-xs/medium",
                            color: "none",
                            children: eW.intl.string(eW.t.syl6HS),
                        }),
                    ],
                }),
        ],
    });
}
var l_ = n(308186),
    lG = n(193885),
    lV = n(408278),
    lU = n(890377),
    lF = n(789645),
    lB = n(534514),
    lz = n(821609),
    lH = n(403581),
    lW = n(194261),
    lK = n(689175),
    lX = n(517461),
    lq = n(13875),
    lY = n(783420),
    lZ = n(252732),
    l$ = n(976860);
let lJ = (0, n(945810).mj)({
    name: "2026-06-wysiwyg-show-dns-to-non-nitro",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var lQ = n(975732),
    l0 = n(487233),
    l1 = n(120386),
    l2 = n(317097),
    l7 = n(602853),
    l3 = n(922016),
    l5 = n(508274),
    l8 = n(654107),
    l9 = n(930349);
function l6(e) {
    let { user: l, disabled: n = !1 } = e,
        r = i.useRef(null),
        a = (0, l7.r)(x.A.unsafe_rawColors.PRIMARY_530).hex(),
        o = (0, l8.rh)(l.getAvatarURL(null, 80), a, !1),
        { pendingAccentColor: d, savedAccentColor: u } = (0, s.cf)([eg.A, B.A], () => ({
            pendingAccentColor: eg.A.getPendingChanges().pendingAccentColor,
            savedAccentColor: B.A.getUserProfile(l.id)?.accentColor,
        })),
        c = d ?? u ?? (0, l2.LX)(o[0] ?? a),
        g = i.useCallback((e) => (0, eQ.p)({ accentColor: e }), []);
    return (0, t.jsx)(l3.Y, {
        targetElementRef: r,
        renderPopout: (e) => (0, t.jsx)(l5.VN, { ...e, value: c, onChange: g, suggestedColors: o, showEyeDropper: !0 }),
        children: (e) =>
            (0, t.jsx)(l9.V, {
                ...e,
                variant: "bar",
                buttonRef: r,
                disabled: n,
                accessibleLabel: eW.intl.string(eW.t["/X3fkf"]),
                accessibleValue: (0, l2.Hl)(c),
                showOverlayOnHover: !0,
                renderPreview: () =>
                    (0, t.jsx)("div", { style: { width: "100%", height: "100%", backgroundColor: (0, l2.Hl)(c) } }),
            }),
    });
}
var l4 = n(450373),
    ne = n(339984),
    nl = n(111242);
function nn(e) {
    let { backgroundColor: l } = e;
    return (0, t.jsx)("div", { className: nl.o, style: { backgroundColor: l } });
}
function nt(e) {
    let { src: l } = e;
    return (0, t.jsx)("img", { src: l, alt: "", className: nl._ });
}
function ni(e) {
    let { displayProfile: l, pendingBanner: n, shouldAnimate: i } = e,
        r = (0, l7.r)(x.A.unsafe_rawColors.PRIMARY_800).hex(),
        a = l?.primaryColor ?? (0, l2.LX)(r),
        { hex: s } = (0, l4.A)(a),
        o = l?.getPreviewBanner(n, i, 296) ?? void 0;
    return null != o ? (0, t.jsx)(nt, { src: o }) : (0, t.jsx)(nn, { backgroundColor: s });
}
function nr(e) {
    let l,
        { userId: n, guildId: i, disabled: r, errorMessageId: a } = e,
        { newestAnalyticsLocation: o } = (0, I.Ay)(),
        d = null != i,
        u = (0, H.Ay)(n, i),
        c = (0, s.bG)([eg.A], () => eg.A.getPendingChanges(i ?? void 0).pendingBanner),
        g = (0, s.bG)([ec.default], () => ec.default.getCurrentUser()?.banner),
        f = (0, s.bG)([B.A], () =>
            null != i ? B.A.getGuildMemberProfile(n, i)?.banner : B.A.getUserProfile(n)?.banner,
        ),
        m = null === c,
        p = d && (u?.isUsingGuildMemberBanner() ?? !1),
        x = m && d && !p ? void 0 : c,
        v = (0, eo.Ac)(c, f),
        h = d && null != g,
        A = v
            ? {
                  onClick: () => (0, lZ.rM)(null, f, (e) => (0, eQ.p)({ guildId: i ?? void 0, banner: e })),
                  type: h ? "reset" : "remove",
                  accessibleLabel: eW.intl.string(h ? eW.t.jHlJNS : eW.t.tT9n7D),
              }
            : void 0;
    return (0, t.jsx)(l9.V, {
        affordance: A,
        variant: "square",
        onClick: function () {
            return (0, lZ.XD)({
                uploadType: ne.HL.BANNER,
                analyticsSource: o,
                guildId: i ?? void 0,
                stackingBehavior: "stack",
            });
        },
        accessibleLabel: eW.intl.string(eW.t.yiRnNO),
        accessibleValue:
            ((l = void 0 === c),
            null === c || (l && null == f)
                ? eW.intl.string(eW.t["3Xph0/"])
                : l
                  ? eW.intl.string(eW.t.keN7ib)
                  : eW.intl.string(eW.t["l/iJSJ"])),
        "aria-haspopup": "dialog",
        disabled: r,
        showOverlayOnHover: !0,
        errorMessageId: a,
        renderPreview: (e) => (0, t.jsx)(ni, { displayProfile: u, pendingBanner: x, shouldAnimate: e }),
    });
}
var na = n(913563),
    ns = n(898985),
    no = n(922301),
    nd = n(660184),
    nu = n(259065),
    nc = n(864386),
    ng = n(283607);
let nf = "heading-xl/semibold";
function nm(e) {
    let { displayName: l, stylesPreview: n, shouldAnimate: i = !1 } = e;
    return (0, t.jsx)("div", {
        "aria-hidden": !0,
        className: ng.M,
        children:
            null != n
                ? (0, t.jsx)(ey.E, {
                      variant: nf,
                      children: (0, t.jsx)(nd.A, {
                          userName: l,
                          displayNameStyles: n,
                          effectDisplayType: i ? no.G.ANIMATED : no.G.STATIC,
                          shouldWrap: !1,
                          inProfile: !0,
                          loop: !0,
                      }),
                  })
                : (0, t.jsx)(ey.E, { variant: nf, className: ng.W, color: "text-muted", children: l }),
    });
}
function np(e) {
    let { user: l, guildId: n, disabled: r, errorMessageId: a } = e,
        { analyticsLocations: o } = (0, I.Ay)(),
        d = null != n,
        u = (0, s.bG)([eu.Ay], () => (null != n ? (eu.Ay.getMember(n, l.id)?.nick ?? null) : null)),
        c = (0, s.bG)([ec.default], () => ec.default.getCurrentUser()?.globalName ?? null),
        g = (0, s.bG)([eg.A], () => eg.A.getPendingChanges(null).pendingGlobalName),
        f = (0, s.bG)([eg.A], () => eg.A.getPendingChanges(n ?? null).pendingNickname),
        {
            userDisplayNameStyles: m,
            guildDisplayNameStyles: p,
            pendingDisplayNameStyles: x,
        } = (0, eo.B0)(l, n ?? void 0),
        v = d ? p : m,
        h = void 0 !== x,
        A = null === x,
        b = d && null != m,
        j = (0, eo.lw)({ pendingValue: x, userValue: m, guildValue: p, guildId: n ?? void 0 });
    function C(e) {
        return null == e || "" === e ? void 0 : e;
    }
    let y = void 0 !== g ? g : c,
        N = d ? (C(void 0 !== f ? f : u) ?? C(y) ?? l.username) : (C(y) ?? l.username),
        E = h ? null != x : null != v,
        P =
            null != j && E
                ? {
                      onClick: () => (0, eQ.p)({ guildId: n ?? void 0, displayNameStyles: null }),
                      type: b ? "reset" : "remove",
                      accessibleLabel: eW.intl.string(b ? eW.t.en3ogK : eW.t["Wqmi/h"]),
                  }
                : void 0,
        k = i.useCallback(() => {
            (0, nu.L)({ analyticsLocations: o, guildId: n ?? void 0, stackingBehavior: "stack" });
        }, [o, n]);
    return (0, t.jsx)(l9.V, {
        affordance: (!A && (h || null != v)) || b ? P : "add",
        variant: "bar",
        onClick: k,
        accessibleLabel: eW.intl.string(eW.t.vKBV4A),
        accessibleValue: (function (e) {
            if (null == e) return eW.intl.string(eW.t["3Xph0/"]);
            let l = eW.intl.string((0, na.A)(e.fontId)),
                n = eW.intl.string(ns.J[e.effectId] ?? nc.default.OpWJ3f),
                t = e.colors.map((e) => `#${e.toString(16).padStart(6, "0")}`).join(", ");
            return eW.intl.formatToPlainString(eW.t.A2XnI4, { fontName: l, effectName: n, colors: t });
        })(j),
        "aria-haspopup": "dialog",
        errorMessageId: a,
        renderPreview: (e) => (0, t.jsx)(nm, { stylesPreview: j, displayName: N, shouldAnimate: e }),
        disabled: r,
    });
}
var nx = n(374654),
    nv = n(366010),
    nh = n(736653),
    nA = n(674658),
    nb = n(617061),
    nj = n(203632),
    nI = n(536572);
let nC = new Set(),
    ny = 0;
var nN = n(993408),
    nE = n(841702),
    nP = n(515718),
    nk = n(195292);
function nR(e) {
    "" !== e.thumbnailPreviewSrc && (0, nP.NN)(e.thumbnailPreviewSrc).catch(() => {});
}
var nS = n(466681),
    nT = n(970389);
let nD =
        "https://cdn.discordapp.com/assets/content/6ccc97f30d0e11f23e116bb2534831ca573533a9dd726f5859ae527e82cdf37a.png",
    nO =
        "https://cdn.discordapp.com/assets/content/82b9aaf680c9ca85c8e9cdb51056df7d33d865e18e645393934b76c03b944611.png";
function nM(e) {
    let { effect: l, shouldAnimate: n, isEmpty: r, hasMainProfileFallback: s, disabled: o } = e,
        d = (0, nh.Ay)(),
        u = (0, nv.M)(d) ? nD : nO,
        c = (function (e) {
            let { enabled: l, isInteracting: n } = e,
                { categories: t, purchases: r } = (0, nE.Ay)({ stalePurchasesOK: !0 }),
                a = i.useMemo(() => (0, nN.wo)(r, t), [r, t]),
                s = (0, nk.A)({ enabled: l, isInteracting: n, items: a, preload: nR });
            return null != s ? { skuId: s.skuId } : null;
        })({ enabled: r && !s && !o, isInteracting: n }),
        g = null != c,
        f = g ? c : l;
    return (
        i.useEffect(() => {
            n && ((ny += 1), nC.forEach((e) => e()));
        }, [n]),
        (0, t.jsxs)("div", {
            className: nS.ti,
            "aria-hidden": !0,
            children: [
                (0, t.jsx)("img", { src: u, alt: "", className: nS.QQ }),
                f?.skuId != null &&
                    (0, t.jsx)("div", {
                        className: a()(nS.yY, { [nT.O]: g }),
                        children: (0, t.jsx)(C.A, {
                            skuId: f.skuId,
                            autoPlay: !1,
                            resetOnHover: !0,
                            restartMethod: nj.HL.FromStart,
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
function nw(e) {
    let { user: l, guildId: n, disabled: r, variant: a = "full-height-bar" } = e,
        { analyticsLocations: o } = (0, I.Ay)(),
        d = null != n,
        u = (0, s.bG)([L.A], () => (null != n ? L.A.getGuild(n) : null)),
        c = (0, eo.N2)({ user: l }),
        g = (0, eo.N2)({ user: l, guildId: n ?? void 0 }),
        { pendingProfileEffect: f } = (0, eo.nZ)(n ?? void 0),
        m = void 0 !== f,
        p = null === f || (!m && null == g),
        x = d && null != c,
        v = (0, eo.lw)({ pendingValue: f, userValue: c, guildValue: g, guildId: n ?? void 0 }),
        { product: h } = (0, nA.q)(v?.skuId),
        A = m ? null != f : null != g,
        b =
            null != v && A
                ? {
                      onClick: () => (0, eQ.p)({ guildId: n ?? void 0, profileEffect: null }),
                      type: x ? "reset" : "remove",
                      accessibleLabel: eW.intl.string(x ? eW.t["SQy/Po"] : eW.t.uMuafO),
                  }
                : void 0,
        j = i.useCallback(() => {
            (0, nb.W)({ analyticsLocations: o, guild: u ?? void 0, stackingBehavior: "stack" });
        }, [o, u]);
    return (0, t.jsx)(l9.V, {
        affordance: p && !x ? "add" : b,
        variant: a,
        onClick: j,
        accessibleLabel: eW.intl.string(eW.t.wR5wOo),
        accessibleValue: (function (e) {
            let { profileEffectPreview: l, productName: n, hasPendingSelection: t } = e;
            return null == l
                ? eW.intl.string(eW.t["3Xph0/"])
                : null != n && "" !== n
                  ? n
                  : eW.intl.string(t ? eW.t["1M4m8w"] : eW.t["+Du7ua"]);
        })({ profileEffectPreview: v, productName: (0, nI.VG)(h), hasPendingSelection: null != f }),
        "aria-haspopup": "dialog",
        disabled: r,
        renderPreview: (e) =>
            (0, t.jsx)(nM, { effect: v, shouldAnimate: e, isEmpty: p, hasMainProfileFallback: x, disabled: r }),
    });
}
var nL = n(515727),
    n_ = n(746002);
function nG(e) {
    e.layers
        .filter((e) => !0 !== e.responsive)
        .forEach((l) => {
            let n = (0, n_.getCollectiblesItemAssetUrl)({
                skuId: e.skuId,
                assetFormat: n_.CollectiblesItemAssetFormat.STATIC,
                assetId: l.id,
            });
            null != n && (0, nP.NN)(n).catch(() => {});
        });
}
var nV = n(84391);
function nU(e) {
    let { responsive: l } = e;
    return !0 !== l;
}
function nF(e) {
    let { profileFramePreview: l, isEmpty: n, hasMainProfileFallback: r, isInteracting: s, disabled: o } = e,
        d = (0, nh.Ay)(),
        u = (0, nv.M)(d) ? nD : nO,
        c = (0, N.A)(l?.skuId, "EditableTileProfileFrameButton"),
        g = (function (e) {
            let { enabled: l, isInteracting: n } = e,
                { categories: t, purchases: r } = (0, nE.Ay)({ stalePurchasesOK: !0 }),
                a = i.useMemo(() => (0, nN.MG)(r, t), [r, t]);
            return (0, nk.A)({ enabled: l, isInteracting: n, items: a, preload: nG });
        })({ enabled: n && !r && !o, isInteracting: s }),
        f = null != g,
        m = f ? g : c,
        { profileFrameStyle: p, profileFrameClassName: x } =
            null != m ? (0, k.i)(m) : { profileFrameStyle: void 0, profileFrameClassName: void 0 };
    return (0, t.jsxs)(t.Fragment, {
        children: [
            null != m &&
                (0, t.jsx)("div", {
                    className: a()(nV.hm, x, { [nT.O]: f }),
                    style: p,
                    children: (0, t.jsx)(P.A, { frame: m, filterLayer: nU }),
                }),
            (0, t.jsx)("div", {
                className: a()(nV.ti, { [nV.yT]: null == m }),
                children: (0, t.jsx)("img", { src: u, alt: "", className: nV.QQ, draggable: !1 }),
            }),
        ],
    });
}
function nB(e) {
    let { user: l, guildId: n, disabled: r } = e,
        { analyticsLocations: a } = (0, I.Ay)(),
        o = null != n,
        d = (0, s.bG)([L.A], () => (null != n ? L.A.getGuild(n) : null)),
        u = (0, eo.Xf)({ user: l }),
        c = (0, eo.Xf)({ user: l, guildId: n ?? void 0 }),
        { pendingProfileFrame: g } = (0, eo.Tu)(n ?? void 0),
        f = void 0 !== g,
        m = null === g || (!f && null == c),
        p = o && null != u,
        x = (0, eo.lw)({ pendingValue: g, userValue: u, guildValue: c, guildId: n ?? void 0 }),
        { product: v } = (0, nA.q)(x?.skuId),
        h = f ? null != g : null != c,
        A =
            null != x && h
                ? {
                      onClick: () => (0, eQ.p)({ guildId: n ?? void 0, profileFrame: null }),
                      type: p ? "reset" : "remove",
                      accessibleLabel: eW.intl.string(p ? eW.t.j6hZyM : eW.t.nQBruk),
                  }
                : void 0,
        b = i.useCallback(() => {
            (0, nL.w)({ analyticsLocations: a, guild: d ?? void 0, stackingBehavior: "stack" });
        }, [a, d]);
    return (0, t.jsx)(l9.V, {
        affordance: m && !p ? "add" : A,
        variant: "square",
        onClick: b,
        accessibleLabel: eW.intl.string(eW.t.GWrZOd),
        accessibleValue: (function (e) {
            let { profileFramePreview: l, productName: n, hasPendingSelection: t } = e;
            return null == l
                ? eW.intl.string(eW.t["3Xph0/"])
                : null != n && "" !== n
                  ? n
                  : eW.intl.string(t ? eW.t.yFeGB5 : eW.t["2kAxKM"]);
        })({ profileFramePreview: x, productName: (0, nI.VG)(v), hasPendingSelection: null != g }),
        "aria-haspopup": "dialog",
        disabled: r,
        renderPreview: (e) =>
            (0, t.jsx)(nF, {
                profileFramePreview: x,
                isEmpty: m,
                hasMainProfileFallback: p,
                isInteracting: e,
                disabled: r,
            }),
    });
}
var nz = n(684732),
    nH = n(498596),
    nW = n(298387);
function nK(e) {
    let { color: l, suggestedColors: n, disabled: r, ariaLabel: s, onSelect: o, buttonRef: d } = e,
        u = i.useRef(null),
        c = d ?? u,
        g = (0, l2.Hl)(l),
        f = (0, l2.bJ)(l, 0xffffff) < nH.Tr.NonText;
    return (0, t.jsx)(l3.Y, {
        targetElementRef: c,
        renderPopout: (e) => (0, t.jsx)(l5.VN, { ...e, value: l, onChange: o, suggestedColors: n, showEyeDropper: !0 }),
        children: (e) => {
            let { onClick: l, ...n } = e;
            return (0, t.jsx)(e_.D, {
                ...n,
                innerRef: c,
                className: nW.Dh,
                onClick: r ? void 0 : l,
                "aria-label": s,
                "aria-disabled": r,
                tabIndex: r ? -1 : 0,
                children: (0, t.jsx)("div", { className: a()(nW.Hy, { [nW.rY]: f }), style: { backgroundColor: g } }),
            });
        },
    });
}
function nX(e) {
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
        m = eW.intl.formatToPlainString(eW.t.FquTfm, { colorLabel: c }),
        p = eW.intl.formatToPlainString(eW.t.xOnm4z, { colorLabel: g }),
        x =
            null != d
                ? {
                      ...d,
                      onClick: () => {
                          d.onClick(), u.current?.focus();
                      },
                  }
                : void 0;
    return (0, t.jsx)(l9.Y, {
        variant: "square",
        disabled: o,
        deleteButton: x,
        children: (0, t.jsxs)("div", {
            className: nW.D7,
            style: { background: f },
            children: [
                (0, t.jsx)(nK, { color: l, suggestedColors: s, ariaLabel: m, onSelect: r, disabled: o, buttonRef: u }),
                (0, t.jsx)(nK, { color: n, suggestedColors: s, ariaLabel: p, onSelect: a, disabled: o }),
            ],
        }),
    });
}
function nq(e) {
    let { user: l, guildId: n, disabled: r = !1 } = e,
        a = (0, H.Ay)(l.id, n),
        {
            currentProfileThemeColors: o,
            pendingThemeColors: d,
            pendingAvatar: u,
        } = (0, s.cf)([eg.A, B.A], () => {
            let e = eg.A.getPendingChanges(n ?? void 0),
                t = B.A.getUserProfile(l.id)?.themeColors ?? null;
            return {
                currentProfileThemeColors: null != n ? (B.A.getGuildMemberProfile(l.id, n)?.themeColors ?? null) : t,
                pendingThemeColors: e.pendingThemeColors,
                pendingAvatar: e.pendingAvatar,
            };
        }),
        c = void 0 !== d ? d : o,
        g = (0, ed.V7)({ userId: l.id, image: u }),
        { primaryColor: f, secondaryColor: m } = (0, Y.A)({
            user: l,
            displayProfile: a,
            pendingThemeColors: d,
            pendingAvatarSrc: g ?? void 0,
            isPreview: !0,
        }),
        p = (0, l7.r)(x.A.unsafe_rawColors.PRIMARY_530).hex(),
        v = null != g ? g : l.getAvatarURL(n ?? void 0, 80),
        h = (0, l8.rh)(v, p, !1),
        A = i.useCallback(
            (e) => {
                (0, eQ.p)({ guildId: n ?? void 0, themeColors: e });
            },
            [n],
        ),
        b =
            null != n && (0, nz.l)(d, o)
                ? {
                      onClick: () => (0, eQ.p)({ guildId: n, themeColors: [null, null] }),
                      type: "reset",
                      accessibleLabel: eW.intl.string(eW.t["L+GmoR"]),
                  }
                : void 0;
    return null == f || null == m
        ? null
        : (0, t.jsx)(nX, {
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
var nY = n(315629),
    nZ = n(422936),
    n$ = n(410516),
    nJ = n(788868);
function nQ(e) {
    let l = (0, s.bG)([ec.default], () => eJ.Ay.isPremium(ec.default.getCurrentUser())),
        n = (0, nZ.O)();
    return l
        ? eW.intl.string(eW.t.AfRWI8)
        : (0, n$.U9)(n, nJ.pe.TIER_2) && n?.discount.amount != null
          ? eW.intl.formatToPlainString(eW.t.bkQ4bH, { percent: n?.discount.amount })
          : e;
}
var n0 = n(235684);
function n1() {
    let e = i.useCallback(() => {
            (0, l$.pX)(q.BVt.NITRO_HOME), (0, lQ.closeUserProfileModal)();
        }, []),
        l = (0, lg.A)(e),
        n = nQ(eW.intl.string(eW.t.pj0XBN));
    return (0, t.jsx)(lY.A, {
        subscriptionTier: nJ.pe.TIER_2,
        children: (e) => {
            let { onClick: i } = e;
            return (0, t.jsxs)(nY.h, {
                color: "nitro-pink",
                className: n0.U,
                children: [
                    (0, t.jsx)(ey.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: eW.intl.format(eW.t.TmfgI2, { onClick: l }),
                    }),
                    (0, t.jsx)(lz.$, {
                        variant: "expressive",
                        size: "md",
                        icon: lH.t,
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
    n7 = n(942308);
function n3() {
    return (0, t.jsxs)("div", {
        className: n7.k,
        children: [
            (0, t.jsx)(ey.E, {
                variant: "text-sm/medium",
                color: "text-strong",
                children: eW.intl.string(eW.t.JFY17v),
            }),
            (0, t.jsx)(lz.$, {
                fullWidth: !0,
                variant: "secondary",
                size: "md",
                text: eW.intl.string(eW.t.R9GHya),
                onClick: function () {
                    return n2.A.setEnabled(!1);
                },
            }),
        ],
    });
}
var n5 = n(847374),
    n8 = n(111159),
    n9 = n(548118),
    n6 = n(711014),
    n4 = n(540637),
    te = n(801461),
    tl = n(44482),
    tn = n(844222),
    tt = n(561392),
    ti = n(716263),
    tr = n(15626),
    ta = n(930856);
function ts(e) {
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
            let { reducedMotion: e } = i.useContext(tn.C),
                {
                    isOpen: l,
                    setIsOpen: n,
                    refs: t,
                    floatingStyles: r,
                    getReferenceProps: a,
                    getFloatingProps: s,
                    context: o,
                } = (0, tt.u)({ placement: "bottom-start", matchReferenceWidth: !1, transform: e.enabled }),
                { styles: d } = (0, ti.DL)(o, {
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
        y = i.useContext(tr._),
        N = i.useId(),
        E = i.useId(),
        P = i.useId(),
        k = i.useRef(null),
        R = i.useRef(null),
        [S, T] = i.useState(null),
        D = null != S ? (0, te.ZN)(P, S) : void 0,
        O = i.useRef(!1),
        M = i.useRef(!1),
        w = i.useMemo(() => l.filter((e) => (0, te.fI)(e.value, [n])), [n, l]),
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
                if (!R.current?.contains(e.relatedTarget)) {
                    if (M.current) {
                        M.current = !1;
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
        U = i.useCallback(
            (e) => {
                if (u) return;
                let l = e[0];
                null != l && (r(l.value), G());
            },
            [u, r, G],
        ),
        { activeIndex: F, handleKeyDown: B } = (0, n4.l)(!0, l),
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
                            if (null != S) {
                                let e = l[S];
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
                        if (null == S || S > n - 1) return;
                        {
                            let e = l[S];
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
                        if (x && null != S) {
                            let e = l[S];
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
            [u, x, l, S, U, G, r, v, B],
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
            (R.current = e), h.setReference(e);
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
                    className: a()(ta.S_, d),
                    ...j(),
                    style: { ...A, ...I },
                    children: (0, t.jsx)(n4.q, {
                        id: P,
                        tabIndex: -1,
                        items: l,
                        selectionMode: "single",
                        selectedItems: w,
                        onSelectionChange: U,
                        shouldFocusWrap: !1,
                        activeDescendantIndex: S,
                        renderListItem: (e) => (null != m ? m(e) : (0, t.jsx)(tl.c, { ...e })),
                        maxVisibleItems: g,
                        loading: c,
                    }),
                }),
        ],
    });
}
var to = n(138325);
let td = "MAIN_PROFILE";
function tu(e) {
    let { guild: l } = e;
    return (0, t.jsx)(n9.Ay, { className: to.$f, guild: l, size: n9.Ay.Sizes.MINI, active: !0, "aria-hidden": !0 });
}
function tc(e) {
    let { leading: l, label: n, description: i } = e;
    return (0, t.jsxs)("div", {
        className: to.XE,
        children: [
            null != l && (0, t.jsx)("div", { className: to.fZ, children: l }),
            (0, t.jsxs)("div", {
                className: to.qL,
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
function tg(e) {
    let { leading: l, label: n, disabled: i, buttonRef: r, selectButtonProps: s } = e;
    return (0, t.jsxs)(e_.D, {
        innerRef: r,
        className: a()(to.L5, { [to.r9]: i }),
        tabIndex: !0 === i ? -1 : 0,
        ...s,
        children: [
            l,
            (0, t.jsx)(ey.E, {
                variant: "text-md/medium",
                color: !0 === i ? "text-muted" : "text-strong",
                lineClamp: 1,
                className: to.v9,
                children: n,
            }),
            (0, t.jsx)(n5.a, {
                className: to.u4,
                size: "sm",
                color: !0 === i ? x.A.colors.ICON_MUTED : x.A.colors.ICON_DEFAULT,
            }),
        ],
    });
}
function tf(e) {
    let { selectedGuildId: l, originGuildId: n, onChange: r, loading: a, disabled: o } = e,
        d = (0, s.bG)([n6.Ay], () => n6.Ay.getFlattenedGuildIds()),
        u = (0, s.bG)([L.A], () => L.A.getGuilds()),
        c = (0, s.bG)([ez.A], () => {
            let e = ez.A.getGuildId();
            return null == e || eg._.has(e) ? null : e;
        }),
        g = (0, s.cf)([eu.Ay, n6.Ay], () => {
            let e = {};
            for (let l of n6.Ay.getFlattenedGuildIds()) {
                let n = eu.Ay.getSelfMember(l)?.nick;
                null != n && (e[l] = n);
            }
            return e;
        }),
        f = i.useMemo(() => {
            let e = {
                    id: td,
                    label: eW.intl.string(eW.t["2p07FR"]),
                    value: td,
                    leading: (0, t.jsx)(n8.p, { size: "refresh_sm", color: x.A.colors.ICON_DEFAULT }),
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
                                  leading: (0, t.jsx)(tu, { guild: n }),
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
                          leading: (0, t.jsx)(tu, { guild: r }),
                          description: g[r.id] ?? void 0,
                      },
                      ...i,
                  ];
        }, [d, u, n, c, g]),
        m = l ?? td,
        p = f.find((e) => e.value === m) ?? f[0],
        v = i.useCallback(
            (e) => {
                let n = e === td ? null : e;
                n !== l && r(n);
            },
            [r, l],
        );
    return (0, t.jsx)(ts, {
        className: to.kL,
        label: eW.intl.string(eW.t.rki38K),
        listboxClassName: to.yt,
        options: f,
        value: m,
        onSelectionChange: v,
        loading: a,
        disabled: o,
        renderListItem: (e) => (0, t.jsx)(tc, { leading: e.leading, label: e.label, description: e.description }),
        children: (e) =>
            (0, t.jsx)(tg, { leading: p.value === td ? null : p.leading, label: p.label, disabled: o, ...e }),
    });
}
var tm = n(809467);
let tp = "profile-modal-editing-panel",
    tx = "profile-modal-editing-panel-heading",
    tv = "profile-editing-nameplate-error",
    th = "profile-editing-avatar-error",
    tA = "profile-editing-avatar-decoration-error",
    tb = "profile-editing-banner-error",
    tj = "profile-editing-display-name-style-error";
function tI(e) {
    let { onClick: l, className: n, innerRef: i } = e;
    return (0, t.jsx)(e2.m, {
        text: eW.intl.string(eW.t.Qn47Ud),
        delay: 150,
        ariaHidden: !0,
        children: (0, t.jsx)(e_.D, {
            innerRef: i,
            "aria-label": eW.intl.string(eW.t.Qn47Ud),
            "aria-expanded": !1,
            "aria-controls": tp,
            className: a()(tm.eg, n),
            onClick: l,
            focusProps: { offset: { right: 6 } },
            children: (0, t.jsx)(lG.V, { size: "sm", color: x.A.colors.ICON_STRONG }),
        }),
    });
}
function tC(e) {
    let { onClick: l, className: n, buttonRef: i } = e;
    return (0, t.jsx)("div", {
        className: n,
        children: (0, t.jsx)(e2.m, {
            text: eW.intl.string(eW.t.Qn47Ud),
            ariaHidden: !0,
            children: (0, t.jsx)(lV.K, {
                buttonRef: i,
                "aria-label": eW.intl.string(eW.t.Qn47Ud),
                "aria-expanded": !1,
                "aria-controls": tp,
                icon: lG.V,
                onClick: l,
                variant: "secondary",
                size: "sm",
            }),
        }),
    });
}
function ty(e) {
    let { onClick: l, innerRef: n } = e;
    return (0, t.jsx)(e2.m, {
        text: eW.intl.string(eW.t["l/A351"]),
        ariaHidden: !0,
        children: (0, t.jsx)(e_.D, {
            innerRef: n,
            className: tm.cS,
            "aria-label": eW.intl.string(eW.t["l/A351"]),
            onClick: l,
            "aria-controls": tp,
            "aria-expanded": !0,
            children: (0, t.jsx)(lU.V, { size: "md", color: "currentColor" }),
        }),
    });
}
function tN() {
    let [e, l] = (0, lX.V)("per-server-profile-editing-notice-dismissed", !1);
    return e
        ? null
        : (0, t.jsxs)("div", {
              className: tm.X6,
              children: [
                  (0, t.jsx)(ey.E, {
                      variant: "text-sm/normal",
                      color: "text-default",
                      children: eW.intl.string(eW.t["gBIG/N"]),
                  }),
                  (0, t.jsx)(e_.D, {
                      "aria-label": eW.intl.string(eW.t.rSe9ra),
                      className: tm.TD,
                      onClick: () => l(!0),
                      children: (0, t.jsx)(lF.P, { size: "refresh_sm", color: "currentColor" }),
                  }),
              ],
          });
}
function tE() {
    let e = i.useCallback(() => {
            (0, l$.pX)(q.BVt.NITRO_HOME), (0, lQ.closeUserProfileModal)();
        }, []),
        l = (0, lg.A)(e),
        n = nQ(eW.intl.string(eW.t["7IWwak"]));
    return (0, t.jsx)(lY.A, {
        subscriptionTier: nJ.pe.TIER_2,
        children: (e) => {
            let { onClick: i } = e;
            return (0, t.jsxs)("div", {
                className: tm.eW,
                children: [
                    (0, t.jsxs)("div", {
                        className: tm.tm,
                        children: [
                            (0, t.jsx)(lB.D, {
                                variant: "text-md/medium",
                                color: "text-default",
                                children: eW.intl.string(eW.t.bO0TOe),
                            }),
                            (0, t.jsx)(ey.E, {
                                variant: "text-xs/medium",
                                color: "text-default",
                                children: eW.intl.format(eW.t["3PujdE"], { onClick: l }),
                            }),
                        ],
                    }),
                    (0, t.jsx)(lz.$, {
                        variant: "expressive",
                        size: "sm",
                        icon: lH.t,
                        text: n,
                        onClick: i,
                        fullWidth: !0,
                    }),
                    (0, t.jsx)("div", {
                        className: tm.D0,
                        children: (0, t.jsx)("div", { className: tm.ZN, children: (0, t.jsx)(lW.X, { size: "xs" }) }),
                    }),
                ],
            });
        },
    });
}
function tP() {
    return (0, t.jsx)(ey.E, {
        variant: "text-xs/normal",
        color: "text-subtle",
        className: tm.BJ,
        "aria-hidden": !0,
        children: eW.intl.format(eW.t.kYv9DM, {
            nitroIconHook: () => (0, t.jsx)(lH.t, { size: "xxs", color: "currentColor", className: tm.qp }),
        }),
    });
}
function tk(e) {
    let { heading: l, children: n, disabled: i = !1, showNitroIcon: r = !1 } = e;
    return (0, t.jsxs)("div", {
        className: tm.Os,
        children: [
            (0, t.jsxs)("div", {
                className: tm.AM,
                children: [
                    (0, t.jsx)(lB.D, {
                        className: tm.i_,
                        variant: "text-sm/medium",
                        color: i ? "text-muted" : "text-strong",
                        children: l,
                    }),
                    r &&
                        (0, t.jsx)(e2.m, {
                            text: eW.intl.string(eW.t["5AFxuK"]),
                            shouldShow: !i,
                            ariaHidden: !0,
                            children: (0, t.jsx)(lH.t, {
                                className: tm.l3,
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
              className: tm.Zi,
              role: "alert",
              children: [
                  (0, t.jsx)(c.E, { size: "xs", color: x.A.colors.TEXT_FEEDBACK_CRITICAL }),
                  (0, t.jsx)(ey.E, { variant: "text-xs/normal", color: "text-feedback-critical", id: l, children: n }),
              ],
          });
}
function tS(e) {
    let { isDismissed: l } = e;
    return (0, d.p)(!l, {
        initial: { opacity: 1, y: 0 },
        from: { opacity: 0, y: 48 },
        enter: { opacity: 1, y: 0, config: { tension: 200, friction: 25 } },
        leave: { opacity: 0, y: 48, config: { tension: 300, friction: 25 } },
    })((e, l) =>
        l ? (0, t.jsx)(l_.animated.div, { className: tm.HT, style: e, children: (0, t.jsx)(n1, {}) }) : null,
    );
}
function tT(e) {
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
        I = (0, lq.sk)("UserProfileModalV2EditingPanel"),
        C = lJ.useConfig({ location: "UserProfileModalV2EditingPanel" }).enabled,
        y = (0, s.bG)([eg.A], () => eg.A.getErrors(l)),
        N = y.nameplate?.[0] ?? y.nameplate_sku_id?.[0],
        E = y.avatar?.[0],
        P = y.avatar_decoration_sku_id?.[0],
        k = y.banner?.[0],
        R = y.display_name_font_id?.[0] ?? y.display_name_effect_id?.[0] ?? y.display_name_colors?.[0],
        S = (0, lg.A)(r),
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
    let w = (0, t.jsxs)(tk, {
            heading: eW.intl.string(eW.t.NEzEws),
            disabled: v || j,
            showNitroIcon: !0,
            children: [
                (0, t.jsx)(np, { user: p, guildId: l, disabled: v || j, errorMessageId: null != R ? tj : void 0 }),
                (0, t.jsx)(tR, { id: tj, message: R }),
            ],
        }),
        L = A || h ? "inline" : C ? "end" : "hidden";
    return (0, t.jsx)("aside", {
        id: tp,
        "aria-labelledby": tx,
        className: a()(tm.nd, { [tm.VU]: j && !x }, c),
        "aria-busy": o,
        children: (0, t.jsxs)("div", {
            className: tm.l$,
            children: [
                (0, t.jsx)(f.A, { children: (0, t.jsx)(m.H, { id: tx, children: eW.intl.string(eW.t["L+ch00"]) }) }),
                (0, t.jsxs)("div", {
                    className: tm.wx,
                    children: [
                        (0, t.jsx)(ty, { innerRef: g, onClick: u }),
                        (0, t.jsx)(tf, {
                            selectedGuildId: l ?? null,
                            originGuildId: n,
                            onChange: S,
                            loading: o,
                            disabled: x,
                        }),
                    ],
                }),
                x
                    ? (0, t.jsx)(n3, {})
                    : (0, t.jsxs)(t.Fragment, {
                          children: [
                              (0, t.jsx)(m.F, {
                                  children: (0, t.jsxs)(lK.zC, {
                                      ref: T,
                                      className: a()(tm.XG, { [tm.uH]: M }),
                                      onScroll: O,
                                      children: [
                                          h && (A ? (0, t.jsx)(tN, {}) : (0, t.jsx)(tE, {})),
                                          A && (0, t.jsx)(tP, {}),
                                          (0, t.jsxs)(tk, {
                                              heading: eW.intl.string(eW.t.x5CoXR),
                                              disabled: v || j,
                                              children: [
                                                  (0, t.jsx)(nx.A, {
                                                      user: p,
                                                      guildId: l,
                                                      disabled: v || j,
                                                      errorMessageId: null != N ? tv : void 0,
                                                  }),
                                                  (0, t.jsx)(tR, { id: tv, message: N }),
                                              ],
                                          }),
                                          (0, t.jsxs)(tk, {
                                              heading: eW.intl.string(eW.t["50Nwpc"]),
                                              disabled: v || j,
                                              children: [
                                                  (0, t.jsx)(l0.A, {
                                                      user: p,
                                                      guildId: l,
                                                      disabled: v || j,
                                                      errorMessageId: null != E ? th : void 0,
                                                  }),
                                                  (0, t.jsx)(l1.A, {
                                                      user: p,
                                                      guildId: l,
                                                      disabled: v || j,
                                                      errorMessageId: null != P ? tA : void 0,
                                                  }),
                                                  (0, t.jsx)(tR, { id: th, message: (0, lZ.d3)(E) }),
                                                  (0, t.jsx)(tR, { id: tA, message: P }),
                                              ],
                                          }),
                                          "inline" === L && w,
                                          A || h
                                              ? (0, t.jsxs)(tk, {
                                                    heading: eW.intl.string(eW.t.Zenogr),
                                                    disabled: v || j,
                                                    showNitroIcon: !0,
                                                    children: [
                                                        (0, t.jsx)(nq, { user: p, guildId: l, disabled: v || !A }),
                                                        (0, t.jsx)(nr, {
                                                            userId: p.id,
                                                            guildId: l,
                                                            disabled: v || !A,
                                                            errorMessageId: null != k ? tb : void 0,
                                                        }),
                                                        (0, t.jsx)(tR, { id: tb, message: (0, lZ.d3)(k) }),
                                                    ],
                                                })
                                              : (0, t.jsx)(tk, {
                                                    heading: eW.intl.string(eW.t["/X3fkf"]),
                                                    disabled: v || j,
                                                    children: (0, t.jsx)(l6, { user: p, disabled: v }),
                                                }),
                                          (0, t.jsxs)(tk, {
                                              heading: eW.intl.string(I ? eW.t["Vfbar/"] : eW.t.wR5wOo),
                                              disabled: v || j,
                                              children: [
                                                  (0, t.jsx)(nw, {
                                                      user: p,
                                                      guildId: l,
                                                      disabled: v || j,
                                                      variant: I ? "square" : "full-height-bar",
                                                  }),
                                                  I && (0, t.jsx)(nB, { user: p, guildId: l, disabled: v || j }),
                                              ],
                                          }),
                                          "end" === L && w,
                                      ],
                                  }),
                              }),
                              b && (0, t.jsx)(tS, { isDismissed: D }),
                          ],
                      }),
            ],
        }),
    });
}
var tD = n(982599),
    tO = n(347805),
    tM = n(629403),
    tw = n(612630),
    tL = n(260598);
function t_(e) {
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
        C = null != h && (l ? r : n).length > h ? eW.intl.formatToPlainString(eW.t.ICT5S6, { maxLength: h }) : void 0,
        y = l && r !== n,
        N = C ?? (y ? void 0 : j),
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
        previewErrorMessage: N,
        input: (0, t.jsx)(tL.f, {
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
var tG = n(673451);
function tV(e) {
    let { userId: l, className: n, autoFocus: r = !1, onUpdate: a } = e,
        o = (0, s.bG)([G.A], () => G.A.hidePersonalInformation),
        { loading: d, note: u } = (0, tw.A)(l),
        [c, g] = i.useState(),
        [f, m] = i.useState(),
        p = c ?? u,
        x = i.useCallback(
            async (e) => {
                if ((u ?? "") !== e) {
                    m(void 0), g(e), a?.();
                    try {
                        await tM.A.updateNote(l, e);
                    } catch {
                        m(eW.intl.string(eW.t.F8FvUy));
                    }
                }
            },
            [l, u, a],
        ),
        v = d && null == p,
        h = e5({ value: p ?? "", onCommit: x, disabled: v }),
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
            ? (0, t.jsx)(ey.E, { variant: "text-sm/normal", color: "text-default", className: tG.t, children: p })
            : null;
    return (0, t.jsx)(t_, {
        ...h,
        className: n,
        preview: j,
        editButtonAriaLabel: eW.intl.string(eW.t.PbMNh2),
        label: eW.intl.string(eW.t.PbMNh2),
        placeholder: v ? eW.intl.string(eW.t["WLKx/9"]) : eW.intl.string(eW.t.VBhOe2),
        maxLength: q.T7x,
        rows: 3,
        disabled: v,
        error: f,
    });
}
var tU = n(83013),
    tF = n(518477),
    tB = n(77085);
function tz(e) {
    let { userId: l } = e,
        n = (0, eh.g)(),
        { trackUserProfileAction: i } = (0, F.NJ)(),
        r = (0, z.X)("UserProfileModalV2NotesSection"),
        a = r ? tV : tO.A;
    return (0, t.jsx)(tU.A, {
        heading: eW.intl.string(eW.t["mQKv+v"]),
        scrollTargetId: tF.bk.NOTE,
        children: (0, t.jsx)(a, {
            userId: l,
            className: r ? tB.N : tB.w,
            autoFocus: n === tF.bk.NOTE,
            onUpdate: () => i({ action: "SET_NOTE" }),
        }),
    });
}
var tH = n(123292),
    tW = n(921701),
    tK = n(861173);
function tX(e) {
    let { icon: l, message: n, actionLabel: r, onAction: s, actionDisabled: o, type: d, autoFocus: u } = e,
        c = i.useRef(null);
    return (
        i.useEffect(() => {
            u && c.current?.focus();
        }, [u]),
        (0, t.jsx)("div", {
            className: tW.kL,
            children: (0, t.jsxs)("div", {
                className: a()(tK.oR, tW.Qs),
                "data-type": d,
                children: [
                    (0, t.jsx)("div", { className: tW.Kk, children: l }),
                    (0, t.jsx)(ey.E, { color: "text-strong", variant: "text-sm/semibold", children: n }),
                    null != r &&
                        null != s &&
                        (0, t.jsx)("div", {
                            className: tW.hP,
                            children: (0, t.jsx)(tH.Q, {
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
var tq = n(765178),
    tY = n(346055),
    tZ = n(289873),
    t$ = n(984180);
function tJ(e) {
    let { showScrim: l, showLoadingSpinner: n, className: r, children: s } = e;
    i.useEffect(() => {
        n && tq.O.announce(eW.intl.string(eW.t["QR+vBP"]));
    }, [n]);
    let o = i.useRef(null);
    return (
        (0, tY.f)(o, l),
        (0, t.jsxs)(t.Fragment, {
            children: [
                (0, t.jsx)("div", {
                    className: a()(t$.f, l && t$.z),
                    children: n && (0, t.jsx)(tZ.y, { type: tZ.t.SPINNING_CIRCLE_SIMPLE, animated: !0 }),
                }),
                (0, t.jsx)("div", { ref: o, "aria-hidden": l || void 0, className: r, children: s }),
            ],
        })
    );
}
var tQ = n(568602),
    t0 = n(625494);
function t1(e) {
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
                t0._.subscribe(q.jej.SHAKE_PROFILE_MODAL, e),
                () => {
                    t0._.unsubscribe(q.jej.SHAKE_PROFILE_MODAL, e);
                }
            );
        }, []),
        (0, t.jsx)(tQ.b, { isShaking: n, intensity: 1.4, children: l })
    );
}
var t2 = n(515054),
    t7 = n(933832),
    t3 = n(972213),
    t5 = n(97483),
    t8 = n(606758);
let t9 = {
        [tF.jM.WIDGET_ADDED]: {
            message: eW.intl.string(eW.t.fFP1Uy),
            icon: (0, t.jsx)(t7.A, { size: "sm", color: x.A.colors.STATUS_POSITIVE.css }),
        },
        [tF.jM.WIDGET_REMOVED]: {
            message: eW.intl.string(eW.t.zzsK7h),
            icon: (0, t.jsx)(t7.A, { size: "sm", color: x.A.colors.STATUS_POSITIVE.css }),
        },
        [tF.jM.PROFILE_SAVE_GENERIC_FAILURE]: {
            message: eW.intl.string(eW.t["84MExs"]),
            icon: (0, t.jsx)(t3.d, { size: "sm", color: x.A.colors.ICON_FEEDBACK_CRITICAL }),
            type: t5.Ck.FAILURE,
        },
        [tF.jM.SOMETHING_WENT_WRONG]: {
            message: eW.intl.string(eW.t.F8FvUy),
            icon: (0, t.jsx)(t3.d, { size: "sm", color: x.A.colors.ICON_FEEDBACK_CRITICAL }),
            type: t5.Ck.FAILURE,
        },
    },
    t6 = (e) => {
        let { className: l } = e,
            n = (0, t8.fu)(),
            r = (0, s.bG)([e7.Ay], () => e7.Ay.useReducedMotion),
            [a, o] = i.useState(!1),
            [u, c] = i.useState(null);
        i.useEffect(() => {
            null !== n ? (o(!0), c(t9[n]), tq.O.announce(t9[n].message)) : o(!1);
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
            i.useEffect(() => () => (0, t8.XA)(null), []),
            i.useEffect(() => {
                if (a) {
                    let e = setTimeout(() => {
                        (0, t8.XA)(null);
                    }, 2e3);
                    return () => clearTimeout(e);
                }
            }, [a]),
            (0, t.jsx)(t.Fragment, {
                children: g(
                    (e, n) =>
                        n &&
                        null !== u &&
                        (0, t.jsx)(l_.animated.div, { className: l, style: e, children: (0, t.jsx)(tX, { ...u }) }),
                ),
            })
        );
    };
var t4 = n(297413),
    ie = n(878555),
    il = n(576705),
    it = n(292666);
function ii(e) {
    let { isEditing: l, inputRef: n, ...t } = e5(e);
    return (
        i.useEffect(() => {
            l && null != n.current && n.current.setSelectionRange(n.current.value.length, n.current.value.length);
        }, [l, n]),
        { isEditing: l, inputRef: n, ...t }
    );
}
function ir(e) {
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
    return (0, t.jsx)(it.k, {
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
function ia(e) {
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
                ? eW.intl.formatToPlainString(eW.t.ICT5S6, { maxLength: h })
                : void 0) ?? A,
        N = "compact" === v ? { variant: "compact" } : { variant: "default", trailing: j };
    return (0, t.jsx)(e6, {
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
        input: (0, t.jsx)(ir, {
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
var is = n(35783);
function io(e) {
    return null == e || "" === e ? void 0 : e;
}
function id(e) {
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
        { canChangeDisplayName: C, permissionsLoaded: y } = (0, s.cf)([il.A, L.A], () => {
            if (!A || null == b) return { canChangeDisplayName: !0, permissionsLoaded: !0 };
            let e = L.A.getGuild(b);
            return null == e
                ? { canChangeDisplayName: !1, permissionsLoaded: !1 }
                : {
                      canChangeDisplayName: il.A.can(q.xBc.CHANGE_NICKNAME, e) || il.A.can(q.xBc.MANAGE_NICKNAMES, e),
                      permissionsLoaded: !0,
                  };
        }),
        {
            value: N,
            previewValue: E,
            onCommit: P,
        } = ((n = null != (l = v?.guildId ?? null)),
        (r = (0, s.bG)([ec.default], () => ec.default.getCurrentUser()?.globalName ?? null)),
        (a = (0, s.bG)([eu.Ay], () => (null != l ? (eu.Ay.getMember(l, p.id)?.nick ?? null) : null))),
        (o = (0, s.bG)([eg.A], () => eg.A.getPendingChanges(null).pendingGlobalName)),
        (d = (0, s.bG)([eg.A], () => eg.A.getPendingChanges(l).pendingNickname)),
        (g = (c = void 0 !== (u = n ? d : o) ? u : n ? a : r) ?? ""),
        (f = io(c) ?? io(r) ?? p.username),
        (m = io(c) ?? p.username),
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
        k = ii({ value: N, onCommit: P, disabled: !C }),
        { isEditing: R, handleCommit: S } = k,
        T = (0, s.bG)([eg.A], () => eg.A.getErrors(b ?? null)),
        D = (0, e$.EC)(b ?? null),
        O = A ? T.nick?.[0] : T.global_name?.[0],
        M = D?.nick?.[0],
        w = (0, s.bG)([eg.A], () => eg.A.getPendingChanges(b ?? null).pendingDisplayNameStyles),
        _ = eW.intl.string(A ? eW.t.mq6Cg9 : eW.t.XuZU7A),
        G = A ? eW.intl.string(eW.t.YcDKr8) : p.username,
        V = eW.intl.string(A ? eW.t["g7OSZ/"] : eW.t.kyfzzc),
        U = i.useRef(null),
        F = i.useCallback(
            (e) => {
                e.stopPropagation(),
                    R && S(),
                    (0, nu.L)({ analyticsLocations: h, guildId: b, stackingBehavior: "stack", returnRef: U });
            },
            [R, S, h, b],
        ),
        B = {
            icon: lG.V,
            tooltip: eW.intl.string(eW.t.lqKKI2),
            "aria-label": eW.intl.string(eW.t["Wkg/CF"]),
            "aria-haspopup": "dialog",
            onClick: F,
            buttonRef: U,
        },
        z =
            A && !C && y
                ? (0, t.jsx)(e2.m, {
                      text: eW.intl.string(eW.t.gzjxQi),
                      children: (0, t.jsx)(e_.D, {
                          tag: "span",
                          className: is.C,
                          children: (0, t.jsx)(lW.X, {
                              size: "refresh_sm",
                              color: x.A.colors.ICON_SUBTLE,
                              "aria-label": eW.intl.string(eW.t.VPu695),
                          }),
                      }),
                  })
                : null,
        H =
            null != E
                ? (0, t.jsx)(ie.c$, {
                      user: p,
                      guildId: b,
                      displayName: E,
                      size: "lg",
                      pendingDisplayNameStyles: w,
                      className: is.d,
                      displayNameTrailing: z,
                  })
                : null;
    return (0, t.jsx)(ia, {
        ...k,
        preview: H,
        placeholder: G,
        editButtonAriaLabel: V,
        label: _,
        maxLength: q.zzC,
        trailing: C && j ? B : void 0,
        error: O,
        warning: M,
        disabled: !C,
    });
}
var iu = n(469432);
function ic(e) {
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
        m = ii({ value: c, onCommit: f }),
        { isEditing: p } = m,
        x = u?.guildId != null,
        v = null != g && g.length > 0,
        h = eW.intl.string(x ? eW.t.AXiE0i : eW.t["76Aqhl"]);
    return (0, t.jsx)(ia, {
        ...m,
        size: "compact",
        className: a()(iu.k, p && iu.J),
        preview: v ? (0, t.jsx)(ie.n2, { pronouns: g }) : null,
        editButtonAriaLabel: eW.intl.string(eW.t.h6VAO7),
        label: eW.intl.string(eW.t["rniRE+"]),
        placeholder: h,
        maxLength: q.VE5,
    });
}
var ig = n(145497),
    im = n(685073),
    ip = n(318785),
    ix = n(534400),
    iv = n(743981),
    ih = n(724637),
    iA = n(329296);
let ib = "no-server-tag";
function ij(e) {
    let { buttonRef: l, guildId: n, guildTag: i, guildBadge: r, ...s } = e,
        o = null == i || null == n;
    return (0, t.jsx)(e_.D, {
        innerRef: l,
        className: a()(ih.L5, { [ih.wK]: o }),
        ...s,
        children: (0, t.jsxs)(ey.E, {
            variant: o ? "text-xs/normal" : "text-xs/semibold",
            color: o ? "input-placeholder-text-default" : "text-default",
            className: ih.W3,
            tag: "span",
            children: [
                o
                    ? eW.intl.string(eW.t.Pdd1nd)
                    : (0, t.jsxs)(t.Fragment, {
                          children: [
                              (0, t.jsx)(
                                  ix.Z9,
                                  {
                                      src: (0, im.gC)(n, r, iv.Sl.SIZE_14),
                                      size: iv.Sl.SIZE_14,
                                      className: ih.Ap,
                                      "aria-hidden": !0,
                                  },
                                  (0, im.gC)(n, r, iv.Sl.SIZE_14) ?? n,
                              ),
                              i,
                          ],
                      }),
                (0, t.jsx)(n5.a, { size: "xs", color: "currentColor", className: ih.u4 }),
            ],
        }),
    });
}
function iI() {
    let e = (0, ip.b)(),
        l = i.useMemo(() => new Map(e.map((e) => [e.id, e])), [e]),
        n = (0, s.bG)([ec.default], () => {
            let e = ec.default.getCurrentUser();
            return (0, im.Zo)(e?.primaryGuild).guildId ?? null;
        }),
        r = (0, s.bG)([eg.A], () => eg.A.getPendingChanges(null).pendingPrimaryGuildId),
        a = void 0 !== r ? r : n,
        o = null != a ? (l.get(a) ?? null) : null,
        d = o?.profile?.tag ?? null,
        u = o?.profile?.badge ?? void 0,
        c = i.useCallback(
            (e) =>
                e.id === ib
                    ? (0, t.jsx)("div", {
                          className: iA.uN,
                          children: (0, t.jsx)(ey.E, {
                              variant: "text-md/normal",
                              color: "input-placeholder-text-default",
                              className: ih.ve,
                              children: e.label,
                          }),
                      })
                    : (0, t.jsx)(tl.c, { ...e }),
            [],
        ),
        g = i.useMemo(
            () => [
                { id: ib, label: eW.intl.string(eW.t.VxdWWH), value: null },
                ...e.flatMap((e) => {
                    let l = e.profile?.tag;
                    if (null == l) return [];
                    let n = e.profile?.badge ?? void 0;
                    return [
                        {
                            id: e.id,
                            label: e.name,
                            value: e.id,
                            leading: (0, t.jsx)(ig.j, {
                                guildId: e.id,
                                guildName: e.name,
                                guildIcon: e.icon,
                                iconSize: 20,
                                animate: !1,
                            }),
                            trailing: (0, t.jsx)(ix.o9, { guildId: e.id, guildTag: l, guildBadge: n }),
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
        : (0, t.jsx)(ts, {
              options: g,
              value: a,
              onSelectionChange: f,
              label: eW.intl.string(eW.t.Pdd1nd),
              listboxClassName: ih.yt,
              renderListItem: c,
              children: (e) => {
                  let { buttonRef: l, selectButtonProps: n } = e;
                  return (0, t.jsx)(ij, { buttonRef: l, guildId: a, guildTag: d, guildBadge: u, ...n });
              },
          });
}
var iC = n(874644);
function iy(e) {
    let { user: l, displayProfile: n, nickname: i, trailing: r, onClose: s, allowEditing: o } = e;
    if (!o)
        return (0, t.jsx)(ie.Ay, {
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
        : (0, t.jsx)(t4.A, {
              user: l,
              forceUsername: !0,
              className: iC.a1,
              usernameClass: iC.eb,
              discriminatorClass: iC.sw,
              hideBotTag: !0,
          });
    return (0, t.jsxs)("div", {
        children: [
            (0, t.jsx)(id, { displayProfile: n, user: l }),
            (0, t.jsxs)("div", {
                className: a()(iC.AK, iC.j6),
                children: [d, (0, t.jsx)(ie.Ce, {}), (0, t.jsx)(ic, { displayProfile: n }), (0, t.jsx)(iI, {}), r],
            }),
        ],
    });
}
var iN = n(97808),
    iE = n(980707),
    iP = n(477782),
    ik = n(22231),
    iR = n(601255),
    iS = n(562819),
    iT = n(19575),
    iD = n(106106),
    iO = n(338165);
let iM = iT.Ay.getEnableHardwareAcceleration() ? iN.Js : iN.eu;
function iw(e) {
    let { onMenuClose: l, items: n, ...i } = e;
    return (0, t.jsx)(iE.W, {
        ...i,
        "data-menu-migrated": !0,
        navId: "avatar-edit-context",
        onClose: l,
        onSelect: l,
        "aria-label": eW.intl.string(eW.t.YAgq3W),
        children: (0, t.jsx)(iP.rX, { children: n }),
    });
}
function iL(e) {
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
                h = (0, s.bG)([L.A], () => (null != n ? L.A.getGuild(n) : null)),
                A = (0, eo.a4)({ user: l }),
                b = (0, eo.a4)({ user: l, guildId: n ?? void 0 }),
                { pendingAvatarDecoration: j } = (0, eo.CP)(n ?? void 0),
                C = void 0 !== j,
                y = null != (0, iR.A)(C ? j : b) && (C ? null != j : null != b),
                N = d && null != A,
                E = i.useCallback(() => {
                    r(),
                        (0, lZ.XD)({
                            uploadType: ne.HL.AVATAR,
                            analyticsSource: a,
                            guildId: n ?? void 0,
                            stackingBehavior: "stack",
                        });
                }, [r, a, n]),
                P = i.useCallback(() => {
                    r(), (0, iS.L)({ analyticsLocations: o, guild: h ?? void 0, stackingBehavior: "stack" });
                }, [r, o, h]),
                k = i.useCallback(() => {
                    r(),
                        (0, lZ.rM)(null, g, (e) => (0, eQ.p)({ guildId: n ?? void 0, avatar: e })),
                        (0, eo.WU)(m ? "reset" : "remove");
                }, [r, n, g, m]),
                R = i.useCallback(() => {
                    r(), (0, eQ.p)({ guildId: n ?? void 0, avatarDecoration: null });
                }, [r, n]);
            return i.useMemo(() => {
                let e = [];
                return (
                    x &&
                        e.push(
                            (0, t.jsx)(
                                iP.Dr,
                                { id: "change-avatar", label: eW.intl.string(eW.t["4OynCD"]), action: E },
                                "change-avatar",
                            ),
                        ),
                    v &&
                        e.push(
                            (0, t.jsx)(
                                iP.Dr,
                                { id: "change-decoration", label: eW.intl.string(eW.t.HykynS), action: P },
                                "change-decoration",
                            ),
                        ),
                    x &&
                        f &&
                        e.push(
                            m
                                ? (0, t.jsx)(
                                      iP.Dr,
                                      {
                                          id: "reset-avatar",
                                          color: "danger",
                                          label: eW.intl.string(eW.t.TDjKDm),
                                          action: k,
                                      },
                                      "reset-avatar",
                                  )
                                : (0, t.jsx)(
                                      iP.Dr,
                                      {
                                          id: "remove-avatar",
                                          color: "danger",
                                          label: eW.intl.string(eW.t.twB3fz),
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
                                      iP.Dr,
                                      {
                                          id: "reset-decoration",
                                          color: "danger",
                                          label: eW.intl.string(eW.t["2u5yu0"]),
                                          action: R,
                                      },
                                      "reset-decoration",
                                  )
                                : (0, t.jsx)(
                                      iP.Dr,
                                      {
                                          id: "remove-decoration",
                                          color: "danger",
                                          label: eW.intl.string(eW.t["9rx5GO"]),
                                          action: R,
                                      },
                                      "remove-decoration",
                                  ),
                        ),
                    e
                );
            }, [m, x, v, N, f, y, E, P, k, R]);
        })({ user: l, guildId: n, onClose: g });
    return 0 === f.length
        ? (0, t.jsx)(eb.A, { ...e })
        : (0, t.jsxs)("div", {
              ...o,
              className: a()(iD.my, iD.vk, iO.kL, { [iO.MO]: d }),
              onMouseDown: (e) => {
                  c.current?.contains(e.target) || u(!0);
              },
              children: [
                  (0, t.jsx)(iM, { ...r, imageClassName: a()(iD.Lw, iO.HU) }),
                  (0, t.jsx)(l3.Y, {
                      targetElementRef: c,
                      shouldShow: d,
                      animation: l3.Y.Animation.NONE,
                      position: "right",
                      align: "top",
                      onRequestClose: g,
                      renderPopout: (e) => (0, t.jsx)(iw, { ...e, items: f, onMenuClose: g }),
                      children: (e) =>
                          (0, t.jsx)("div", {
                              ref: c,
                              className: iO.r9,
                              children: (0, t.jsx)(lV.K, {
                                  ...e,
                                  variant: "overlay-secondary",
                                  size: "sm",
                                  icon: ik.R,
                                  "aria-label": eW.intl.string(eW.t.YAgq3W),
                                  onClick: (e) => {
                                      e.stopPropagation(), u((e) => !e);
                                  },
                              }),
                          }),
                  }),
              ],
          });
}
var i_ = n(976726);
function iG(e) {
    let { onMenuClose: l, items: n, ...i } = e;
    return (0, t.jsx)(iE.W, {
        ...i,
        "data-menu-migrated": !0,
        navId: "banner-edit-context",
        onClose: l,
        onSelect: l,
        "aria-label": eW.intl.string(eW.t.FzU73A),
        children: (0, t.jsx)(iP.rX, { children: n }),
    });
}
function iV(e) {
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
                g = (0, lq.sk)("UserProfileModalV2EditableBanner"),
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
                j = (0, s.bG)([B.A], () =>
                    null != n ? B.A.getGuildMemberProfile(l.id, n)?.banner : B.A.getUserProfile(l.id)?.banner,
                ),
                C = (0, s.bG)([ec.default], () => ec.default.getCurrentUser()?.banner != null),
                y = (0, s.bG)([B.A], () => B.A.getUserProfile(l.id)?.profileEffect != null),
                E = (0, s.bG)([B.A], () => B.A.getUserProfile(l.id)?.profileFrame != null),
                P = (0, eo.Ac)(h, j),
                k = v && C,
                R = v && y,
                S = v && E,
                T = void 0 === A ? null != d : null != A,
                D = void 0 === b ? null != u : null != b,
                O = (0, eo.lw)({
                    pendingValue: b,
                    userValue: c,
                    guildValue: null != n ? u : void 0,
                    guildId: n ?? void 0,
                }),
                M = (0, N.A)(O?.skuId, "UserProfileModalV2EditableBanner"),
                w = i.useCallback(() => {
                    r(),
                        (0, lZ.XD)({
                            uploadType: ne.HL.BANNER,
                            analyticsSource: a,
                            guildId: n ?? void 0,
                            stackingBehavior: "stack",
                        });
                }, [r, a, n]),
                _ = i.useCallback(() => {
                    r(),
                        (0, nb.W)({
                            analyticsLocations: o,
                            guild: null != n ? (L.A.getGuild(n) ?? void 0) : void 0,
                            initialSelectedEffect: d,
                            stackingBehavior: "stack",
                        });
                }, [r, o, n, d]),
                G = i.useCallback(() => {
                    r(), (0, lZ.rM)(null, j, (e) => (0, eQ.p)({ guildId: n ?? void 0, banner: e }));
                }, [r, n, j]),
                V = i.useCallback(() => {
                    r(), (0, eQ.p)({ guildId: n ?? void 0, profileEffect: null });
                }, [r, n]),
                U = i.useCallback(() => {
                    r(),
                        (0, nL.w)({
                            analyticsLocations: o,
                            guild: null != n ? (L.A.getGuild(n) ?? void 0) : void 0,
                            initialSelectedProfileFrame: M,
                            stackingBehavior: "stack",
                        });
                }, [r, o, n, M]),
                F = i.useCallback(() => {
                    r(), (0, eQ.p)({ guildId: n ?? void 0, profileFrame: null });
                }, [r, n]);
            return i.useMemo(() => {
                let e = [];
                return (
                    f &&
                        e.push(
                            (0, t.jsx)(
                                iP.Dr,
                                { id: "change-banner", label: eW.intl.string(eW.t.N0bC3P), action: w },
                                "change-banner",
                            ),
                        ),
                    p &&
                        e.push(
                            (0, t.jsx)(
                                iP.Dr,
                                { id: "change-effect", label: eW.intl.string(eW.t["/6nv6N"]), action: _ },
                                "change-effect",
                            ),
                        ),
                    x &&
                        e.push(
                            (0, t.jsx)(
                                iP.Dr,
                                { id: "change-frame", label: eW.intl.string(eW.t["oTSa/q"]), action: U },
                                "change-frame",
                            ),
                        ),
                    f &&
                        P &&
                        e.push(
                            k
                                ? (0, t.jsx)(
                                      iP.Dr,
                                      {
                                          id: "reset-banner",
                                          color: "danger",
                                          label: eW.intl.string(eW.t.jHlJNS),
                                          action: G,
                                      },
                                      "reset-banner",
                                  )
                                : (0, t.jsx)(
                                      iP.Dr,
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
                        T &&
                        e.push(
                            R
                                ? (0, t.jsx)(
                                      iP.Dr,
                                      {
                                          id: "reset-effect",
                                          color: "danger",
                                          label: eW.intl.string(eW.t.Lb7lu9),
                                          action: V,
                                      },
                                      "reset-effect",
                                  )
                                : (0, t.jsx)(
                                      iP.Dr,
                                      {
                                          id: "remove-effect",
                                          color: "danger",
                                          label: eW.intl.string(eW.t.zUOlT6),
                                          action: V,
                                      },
                                      "remove-effect",
                                  ),
                        ),
                    x &&
                        D &&
                        e.push(
                            S
                                ? (0, t.jsx)(
                                      iP.Dr,
                                      {
                                          id: "reset-frame",
                                          color: "danger",
                                          label: eW.intl.string(eW.t.A0pzWn),
                                          action: F,
                                      },
                                      "reset-frame",
                                  )
                                : (0, t.jsx)(
                                      iP.Dr,
                                      {
                                          id: "remove-frame",
                                          color: "danger",
                                          label: eW.intl.string(eW.t["8DfADq"]),
                                          action: F,
                                      },
                                      "remove-frame",
                                  ),
                        ),
                    e
                );
            }, [k, f, p, x, R, S, P, T, D, w, _, U, G, V, F]);
        })({ user: l, guildId: n, onClose: u });
    return 0 === c.length
        ? (0, t.jsx)(eI.A, { ...e })
        : (0, t.jsxs)("div", {
              className: a()(i_.kL, { [i_.MO]: r }),
              onMouseDown: (e) => {
                  d.current?.contains(e.target) || o(!0);
              },
              children: [
                  (0, t.jsx)(eI.A, { ...e, className: i_.Pr }),
                  (0, t.jsx)(l3.Y, {
                      targetElementRef: d,
                      shouldShow: r,
                      animation: l3.Y.Animation.NONE,
                      position: "right",
                      align: "top",
                      onRequestClose: u,
                      renderPopout: (e) => (0, t.jsx)(iG, { ...e, items: c, onMenuClose: u }),
                      children: (e) =>
                          (0, t.jsx)("div", {
                              ref: d,
                              className: i_.r9,
                              children: (0, t.jsx)(lV.K, {
                                  ...e,
                                  variant: "overlay-secondary",
                                  size: "sm",
                                  icon: ik.R,
                                  "aria-label": eW.intl.string(eW.t.FzU73A),
                                  onClick: (e) => {
                                      e.stopPropagation(), o((e) => !e);
                                  },
                              }),
                          }),
                  }),
              ],
          });
}
var iU = n(777480),
    iF = n(107563),
    iB = n(570287);
n(938796);
var iz = n(913453),
    iH = n(667049),
    iW = n(837531),
    iK = n(186272),
    iX = n(645625),
    iq = n(337796);
let iY = (e) => e * (2 - e),
    iZ = { "compact-sm": { avatarOffsetX: 16 }, "compact-xs": { avatarSize: o._3.SIZE_96, avatarOffsetX: 16 } };
function i$(e) {
    let { type: l, anchor: n } = e;
    return "staple" !== l || "bottom" !== n;
}
function iJ(e) {
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
        : (0, t.jsx)("div", { className: iX.backgroundImage, style: { backgroundImage: `url(${o})` } });
}
function iQ(e) {
    let { displayProfile: l, profileEffectOverride: n, isHovering: r } = e,
        a = void 0 !== n ? n : l?.profileEffect,
        s = i.useSyncExternalStore(
            (e) => (nC.add(e), () => nC.delete(e)),
            () => ny,
        );
    return null == a ? null : (0, t.jsx)(C.A, { skuId: a.skuId, isHovering: r, restartKey: s });
}
function i0(e) {
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
            allowEditing: R,
            isLoading: w = !1,
        } = e,
        L = o.id === d.id,
        V = i.useRef(null),
        { isHoveringOrFocusing: F } = (0, S.A)(V),
        [B, z] = i.useState(),
        H = i.useCallback((e) => {
            let l = e.contentRect.width;
            l <= 350 ? z("compact-xs") : l <= 380 ? z("compact-sm") : z(void 0);
        }, []);
    (0, A.g)(V, H, [], { fireOnMount: !0 });
    let Y = null != B ? iZ[B] : void 0,
        Z = i.useMemo(() => h ?? (0, T.A)(), [h]),
        { relationshipType: ei, originApplicationId: er } = (0, s.cf)([_.A], () => ({
            relationshipType: _.A.getRelationshipType(o.id),
            originApplicationId: _.A.getOriginApplicationId(o.id),
        })),
        ea =
            ((l = o.id),
            (n = (0, W.bG)([X.default], () => X.default.locale)),
            (r = (0, W.bG)([_.A], () => (_.A.getRelationshipType(l) === q.eA$.FRIEND ? _.A.getSince(l) : null), [l])),
            (0, K.An)(r, n)),
        es = (0, s.bG)([G.A], () => G.A.hidePersonalInformation),
        eo = (0, O.q)({ userId: o.id }),
        ed = (0, D.fi)(o.id),
        { appIdentities: eu, connections: ec } = (function (e) {
            let { filteredAppIdentities: l } = (0, el.A)(e),
                n = (0, et.A)(e),
                t = (0, Q.useIsRiotSocialSDKMigrationEnabled)({
                    location: "useVisibleUserProfileConnectionsAndAppIdentities",
                }),
                r = i.useMemo(() => new Set(t ? (l?.map((e) => e.application_id) ?? []) : []), [l, t]),
                a = (0, ee.A)([...r]).filter(en.Vq);
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
                                  let l = J.A.get(e.type);
                                  return l?.replacedBy == null || !r.has(l.replacedBy);
                              })
                            : n,
                    [n, r, t],
                ),
            };
        })(o.id),
        eg = (0, $.A)(o.id),
        em = ec.length > 0 || eu.length > 0,
        ep = eg.length > 0,
        ex = R ? iV : eI.A,
        ev = R ? iL : eb.A;
    return (0, t.jsxs)("main", {
        className: a()(iX.profile, null != B && iX[B]),
        ref: V,
        "aria-busy": w,
        children: [
            (0, t.jsxs)("div", {
                className: iX.profileHeader,
                children: [
                    (0, t.jsx)("div", {
                        className: iX.profileHeaderBannerContainer,
                        children: (0, t.jsx)(ex, {
                            user: o,
                            displayProfile: p,
                            guildId: g,
                            themeType: ef.d.MODAL_V2,
                            specOverrides: Y,
                            pendingBanner: C,
                            pendingAccentColor: y,
                        }),
                    }),
                    (0, t.jsx)(ev, {
                        user: o,
                        displayProfile: p,
                        guildId: g,
                        channelId: m,
                        themeType: ef.d.MODAL_V2,
                        specOverrides: Y,
                        avatarDecorationOverride: j,
                        avatarOverride: I,
                    }),
                    (0, t.jsx)(eM.A, {
                        user: o,
                        guildId: g,
                        channelId: m,
                        themeType: ef.d.MODAL_V2,
                        hasEntered: v,
                        prompt: L ? Z : null,
                    }),
                ],
            }),
            (0, t.jsxs)(u.Ip, {
                fade: !0,
                className: iX.profileBody,
                children: [
                    (0, t.jsx)(iy, {
                        user: o,
                        displayProfile: p,
                        nickname: x,
                        trailing: (0, t.jsx)(ej.A, { displayProfile: p, themeType: ef.d.MODAL_V2, onClose: b }),
                        onClose: b,
                        allowEditing: R,
                    }),
                    ei === q.eA$.PENDING_INCOMING &&
                        (0, t.jsx)(eO.A.Overlay, {
                            className: iX.profileOverlay,
                            children: (0, t.jsx)(eP.A, {
                                user: o,
                                applicationId: er,
                                guildId: p?.guildId ?? void 0,
                                channelId: m,
                                className: iX.profileBanner,
                            }),
                        }),
                    ed.map((e) => {
                        let { applicationId: l } = e;
                        return (0, t.jsx)(
                            eO.A.Overlay,
                            {
                                className: iX.profileOverlay,
                                children: (0, t.jsx)(eP.A, {
                                    user: o,
                                    guildId: p?.guildId ?? void 0,
                                    channelId: m,
                                    isGameRelationship: !0,
                                    applicationId: l,
                                    className: iX.profileBanner,
                                }),
                            },
                            l,
                        );
                    }),
                    o.isProvisional &&
                        (0, t.jsx)(eO.A.Overlay, {
                            className: iX.profileOverlay,
                            children: (0, t.jsx)(tU.A, {
                                heading: eW.intl.string(eW.t.Iyka0U),
                                headingVariant: "text-md/semibold",
                                headingIcon: (0, t.jsx)(c.E, { size: "xs", color: "currentColor" }),
                                className: iX.profileBanner,
                                children: (0, t.jsx)(M.T, { userId: o.id, variant: "text-sm/normal" }),
                            }),
                        }),
                    (0, t.jsx)(eD.A, { user: o, className: iX.profileBanner }),
                    p?.private &&
                        (0, t.jsx)(eO.A.Overlay, {
                            className: iX.profileOverlay,
                            children: (0, t.jsx)(eT.A, { username: x }),
                        }),
                    (0, t.jsx)("div", {
                        className: iX.profileButtons,
                        children: (0, t.jsx)(lv, {
                            user: o,
                            currentUser: d,
                            guildId: g,
                            originGuildId: f,
                            channelId: m,
                            displayProfile: p,
                            relationshipType: ei,
                            onClose: b,
                        }),
                    }),
                    L && (0, t.jsx)(eC.A, { isPremiumUser: (0, U.ki)(d), onInteraction: b }),
                    !es && (0, t.jsx)(li, { displayProfile: p, isEditable: R }),
                    eo.length > 0 &&
                        (0, t.jsx)(tU.A, {
                            heading: eW.intl.string(eW.t["Uv/eTx"]),
                            children: (0, t.jsx)(eE.A, { applicationIds: eo }),
                        }),
                    (0, t.jsx)(tU.A, {
                        heading: eW.intl.string(eW.t.a6XYD9),
                        children: (0, t.jsx)(eR.A, { userId: o.id, guildId: p?.guildId, tooltipDelay: tF.In }),
                    }),
                    null != ea &&
                        (0, t.jsx)(tU.A, {
                            heading: eW.intl.string(eW.t.wlTO8v),
                            children: (0, t.jsx)(eN, { friendsSinceDate: ea }),
                        }),
                    p?.guildId != null &&
                        (0, t.jsx)(ew.A, {
                            userId: o.id,
                            guildId: p.guildId,
                            className: iX.profileRolesSection,
                            headingVariant: "text-xs/medium",
                            headingColor: "text-subtle",
                        }),
                    !es &&
                        (R || em) &&
                        (0, t.jsx)(tU.A, {
                            heading: eW.intl.string(eW.t["3fe7U5"]),
                            scrollTargetId: tF.bk.CONNECTIONS,
                            children: (0, t.jsx)(lL, {
                                applicationIdentities: eu,
                                connections: ec,
                                userId: o.id,
                                allowEditing: R,
                                className: iX.profileAppConnections,
                            }),
                        }),
                    !es &&
                        ep &&
                        (0, t.jsx)(tU.A, {
                            heading: eW.intl.string(eW.t.PHjkRE),
                            scrollTargetId: tF.bk.APPS,
                            children: (0, t.jsx)(eq, {
                                applicationRoleConnections: eg,
                                onClose: b,
                                className: iX.profileAppConnections,
                            }),
                        }),
                    (0, t.jsx)(tz, { userId: o.id }),
                ],
            }),
            (0, t.jsx)(iQ, { displayProfile: p, profileEffectOverride: N, isHovering: F }),
            null != E && (0, t.jsx)(P.A, { frame: E, filterLayer: i$, fadeIn: k }),
        ],
    });
}
function i1(e) {
    let { user: l, displayProfile: n, pendingThemeColors: i, children: r } = e,
        {
            theme: a,
            primaryColor: s,
            secondaryColor: o,
        } = (0, Y.A)({ user: l, displayProfile: n, pendingThemeColors: i }),
        { profileThemeStyle: d, profileThemeClassName: u } = (0, ea.A)({
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
            initialScrollTarget: S,
            transitionState: T,
            customStatusPrompt: D,
            openedAt: O,
            onClose: M,
            sourceAnalyticsLocations: U = [],
            themeContainerClassName: W,
        } = e,
        K = l.id === n.id,
        {
            guildId: X,
            pendingGuildId: q,
            isFetching: Y,
            handleSelectUserProfile: Z,
            handleRetry: $,
            hasError: J,
        } = (function (e) {
            let { userId: l, initialGuildId: n } = e,
                [t, r] = i.useState(n),
                [a, o] = i.useState(n),
                [d, u] = i.useState("idle"),
                [c, g] = i.useState(0),
                f = (0, s.bG)([B.A], () => B.A.getUserProfile(l)?.fetchError?.status ?? null, [l]),
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
        Q = i.useMemo(() => (null != X ? { [X]: [l.id] } : {}), [X, l.id]);
    (0, b.Eq)(Q, "UserProfileModalV2");
    let ee = (0, z.X)("UserProfileModalV2"),
        el = (0, s.bG)([G.A], () => G.A.hidePersonalInformation),
        en = (0, ei.A)(l.id) && ee,
        et = (0, er.W)(l.id),
        ea = J && !et,
        em = en && !el && !J,
        {
            pendingThemeColors: ev,
            avatarDecorationOverride: eb,
            avatarOverride: ej,
            bannerOverride: eI,
            accentColorOverride: eC,
            profileEffectOverride: ey,
            profileFrameOverride: eN,
        } = (function (e) {
            let { userId: l, guildId: n, allowEditingInModal: t } = e;
            return (0, s.cf)([eg.A, ec.default, eu.Ay, B.A], () => {
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
                    g = B.A.getUserProfile(l),
                    f = null != n ? B.A.getGuildMemberProfile(l, n) : null;
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
        })({ userId: l.id, allowEditingInModal: em, guildId: X }),
        {
            isExpanded: eE,
            isAnimating: eP,
            transition: eR,
            handleExpand: eT,
            handleCollapse: eD,
            refs: { expandIconButtonRef: eM, expandTabButtonRef: ew, collapseButtonRef: eL },
        } = (function () {
            let [e, l] = i.useState(() => window.innerWidth > 928),
                [n, t] = i.useState(!1),
                r = (0, d.p)(e, {
                    keys: (e) => (e ? "panel" : "empty"),
                    from: { progress: 0 },
                    enter: { progress: 1 },
                    leave: { progress: 0 },
                    config: { duration: 300, easing: iY },
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
        e_ = en && !eE,
        eG = en && (!eE || eP),
        { defaultWishlistId: eV } = (0, s.cf)([B.A], () => ({ defaultWishlistId: B.A.getFirstWishlistId(l.id) }));
    (0, w.fw)({ wishlistId: eV, userId: l.id });
    let eU = (0, eA.fC)(),
        eF = ea && (!en || !Y),
        eB = en && J,
        ez = q !== X || eB || null != eU.interactionType,
        eH = (function (e) {
            let l,
                n,
                t,
                { user: i, currentUser: r } = e,
                { mutualFriendsCount: a, mutualGuilds: o } = (0, iz.A)(i),
                d = o?.length,
                u =
                    ((l = (0, s.bG)([ec.default], () => ec.default.getCurrentUser())),
                    (n = (0, s.bG)([B.A], () => B.A.getUserProfile(i.id))),
                    (t =
                        n?.bio === "" &&
                        n?.pronouns === "" &&
                        n?.banner === void 0 &&
                        n?.accentColor === void 0 &&
                        n?.banner === void 0 &&
                        i.flags === i.publicFlags &&
                        (n?.badges == null || n?.badges?.length === 0)),
                    l?.id !== i.id && !t),
                c = (0, iH.A)(i.id),
                g = (0, iB.A)(i.id),
                f = [],
                m = i.id === r?.id,
                p = (0, ei.A)(i.id),
                x = B.A.getFirstWishlistId(i.id),
                v = null != x,
                h = v ? B.A.getWishlistSettings(i.id, x) : null,
                A = (v ? iF.A.getWishlistItems(x) : []).length > 0,
                b = c.length > 0;
            (p || b) && f.push({ text: eW.intl.string(eW.t.laViwx), section: tF.RP.WIDGETS }),
                f.push({ text: eW.intl.string(eW.t.chq59f), section: tF.RP.ACTIVITY });
            let j = !1 === i.nsfwAllowed,
                I = _.A.isFriend(i.id),
                C = h?.visibility === iU.a.PUBLIC;
            return (
                (m || (!m && A && C && g && (!j || (j && I)))) &&
                    f.push({ text: eW.intl.string(eW.t["7lZ31J"]), section: tF.RP.WISHLIST }),
                i.id !== r?.id &&
                    u &&
                    (f.push({ text: (0, iW.A)(a), section: tF.RP.MUTUAL_FRIENDS }),
                    f.push({ text: (0, iK.A)(d), section: tF.RP.MUTUAL_GUILDS })),
                f
            );
        })({ user: l, currentUser: n }),
        { analyticsLocations: eK } = (0, I.Ay)([...U, j.A.USER_PROFILE_MODAL_V2]),
        eX = (0, F.pb)({
            layout: "MODAL_V2",
            userId: l.id,
            sourceSessionId: C,
            guildId: X,
            channelId: u,
            messageId: c,
            roleId: A,
        }),
        eq = (0, H.Ay)(l.id, X),
        eY = void 0 !== eN ? eN?.skuId : eq?.profileFrame?.skuId,
        eZ = (0, N.A)(eY, "UserProfileModalV2"),
        e$ = (0, y.A)(eY),
        { profileFrameStyle: eJ, profileFrameClassName: eQ } = (0, k.A)(eY);
    (0, E.A)({ skuId: eq?.profileFrame?.skuId, openedAt: O, context: eX, analyticsLocations: eK });
    let e0 = V.Ay.useName(eq?.guildId, u, l),
        e1 = (0, R.GV)(),
        e2 = (0, s.bG)([L.A], () => (null != X ? L.A.getGuild(X) : null)),
        e7 = K
            ? null != e2
                ? eW.intl.formatToPlainString(eW.t.M7OhOF, { guildName: e2.name })
                : eW.intl.string(eW.t.egQPgM)
            : eW.intl.format(eW.t.KRe1Fk, { name: e0 });
    return (0, t.jsx)(I.f5, {
        value: eK,
        children: (0, t.jsx)(F.of, {
            value: eX,
            openedAt: O,
            fetchStartedAt: eq?.fetchStartedAt,
            fetchEndedAt: eq?.fetchEndedAt,
            isLoaded: eq?.isLoaded,
            children: (0, t.jsx)(eA.Hl, {
                value: eU,
                children: (0, t.jsx)(eh.N, {
                    value: S,
                    children: (0, t.jsxs)(g.EO, {
                        "data-migration-pending": !0,
                        hideShadow: !0,
                        className: a()(iq.zr, { [iq.QF]: eq?.private === !0 }),
                        transitionState: T,
                        "aria-labelledby": e1,
                        parentComponent: "UserProfileModalV2",
                        children: [
                            (0, t.jsx)(t1, {
                                children: (0, t.jsxs)("div", {
                                    className: a()(iX.layoutContainer, eQ, {
                                        [iX.editingPanelEnabled]: en,
                                        [iX.editingPanelExpanded]: en && eE,
                                        [iX.isAnimating]: eP,
                                    }),
                                    style: eJ,
                                    children: [
                                        (0, t.jsxs)(i1, {
                                            user: l,
                                            displayProfile: eq,
                                            pendingThemeColors: ev,
                                            children: [
                                                (0, t.jsxs)("div", {
                                                    className: iq.Oo,
                                                    children: [
                                                        (0, t.jsx)(lh.A, { isCurrentUser: K, onClose: M }),
                                                        (0, t.jsx)(f.A, {
                                                            children: (0, t.jsx)(m.H, { id: e1, children: e7 }),
                                                        }),
                                                        eG &&
                                                            (0, t.jsx)(tC, {
                                                                buttonRef: eM,
                                                                onClick: eT,
                                                                className: iX.editingPanelExpandButtonCompact,
                                                            }),
                                                    ],
                                                }),
                                                e_ &&
                                                    (0, t.jsx)("div", {
                                                        className: iX.editingPanelExpandButtonDefaultContainer,
                                                        children: (0, t.jsx)(tI, {
                                                            innerRef: ew,
                                                            onClick: eT,
                                                            className: iX.editingPanelExpandButtonDefault,
                                                        }),
                                                    }),
                                            ],
                                        }),
                                        (0, t.jsxs)(m.F, {
                                            children: [
                                                en &&
                                                    eR((e, l) =>
                                                        l
                                                            ? (0, t.jsx)(tT, {
                                                                  className: a()(iX.editingPanel, {
                                                                      [iX.isExpanded]: eE,
                                                                  }),
                                                                  selectedGuildId: q,
                                                                  originGuildId: o,
                                                                  onSelectGuildId: Z,
                                                                  onClose: eD,
                                                                  collapseButtonRef: eL,
                                                                  isLoading: Y,
                                                                  isEditingDisabled: J,
                                                              })
                                                            : null,
                                                    ),
                                                (0, t.jsxs)(eO.A, {
                                                    className: a()(W, iq.A7, iX.profileContentOuter),
                                                    innerClassName: iX.profileContentInner,
                                                    user: l,
                                                    displayProfile: eq,
                                                    themeType: ef.d.MODAL_V2,
                                                    pendingThemeColors: ev,
                                                    isPrivate: eq?.private === !0,
                                                    children: [
                                                        (0, t.jsx)(iJ, { displayProfile: eq, pendingBanner: eI }),
                                                        eq?.private === !0 && (0, t.jsx)(eS.A, {}),
                                                        !ea && (0, t.jsx)(t6, { className: iX.noticeContainer }),
                                                        eF &&
                                                            (0, t.jsx)("div", {
                                                                className: iX.noticeContainer,
                                                                role: "alert",
                                                                children: (0, t.jsx)(tX, {
                                                                    icon: (0, t.jsx)(p.i, {
                                                                        size: "sm",
                                                                        color: x.A.colors.ICON_FEEDBACK_WARNING,
                                                                    }),
                                                                    message: eW.intl.string(eW.t.L9wE7H),
                                                                    actionLabel:
                                                                        null != $
                                                                            ? eW.intl.string(eW.t["5911Lb"])
                                                                            : void 0,
                                                                    onAction: $,
                                                                    actionDisabled: !en && Y,
                                                                    autoFocus: !0,
                                                                }),
                                                            }),
                                                        (0, t.jsx)("div", {
                                                            className: iX.profileCardToastContainer,
                                                            children: (0, t.jsx)(ek.A, { userId: l.id, onClose: M }),
                                                        }),
                                                        (0, t.jsxs)(tJ, {
                                                            showScrim: ez,
                                                            showLoadingSpinner: Y,
                                                            className: iX.profileContentColumns,
                                                            children: [
                                                                (0, t.jsx)(i0, {
                                                                    user: l,
                                                                    currentUser: n,
                                                                    guildId: X,
                                                                    channelId: u,
                                                                    displayProfile: eq,
                                                                    nickname: e0,
                                                                    originGuildId: o,
                                                                    hasEntered: T === v.ip.ENTERED,
                                                                    customStatusPrompt: D,
                                                                    onClose: M,
                                                                    avatarDecorationOverride: eb,
                                                                    avatarOverride: ej,
                                                                    bannerOverride: eI,
                                                                    accentColorOverride: eC,
                                                                    profileEffectOverride: ey,
                                                                    profileFrame: eZ,
                                                                    fadeInProfileFrame: e$,
                                                                    allowEditing: em,
                                                                    isLoading: Y,
                                                                }),
                                                                (0, t.jsx)(t2.A, {
                                                                    user: l,
                                                                    currentUser: n,
                                                                    displayProfile: eq,
                                                                    guildId: X,
                                                                    channelId: u,
                                                                    items: eH,
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
                            (0, t.jsx)(tD.A, { userId: l.id, guildId: X, className: iX.pendingChangesToolbar }),
                        ],
                    }),
                }),
            }),
        }),
    });
}
