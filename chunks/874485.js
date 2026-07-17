n.d(l, { A: () => rv });
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
    eR = n(743987),
    eS = n(312381),
    eT = n(501193),
    eD = n(383448),
    e_ = n(946356),
    eL = n(983495),
    eO = n(280645),
    eM = n(109112),
    ew = n(939249),
    eG = n(730134),
    eV = n(169869),
    eF = n(837057),
    eU = n(310419),
    eB = n(889227),
    eW = n(967198),
    ez = n(488995),
    eH = n(375708),
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
                        : (0, t.jsx)(eM._, { color: "currentColor", size: "sm" }),
            }),
            (0, t.jsxs)("div", {
                className: eK.Hd,
                children: [
                    (0, t.jsxs)(ew.D, {
                        className: eK.OB,
                        onClick: function () {
                            i?.(),
                                (0, eF.transitionToGlobalDiscovery)({
                                    tab: ez.GlobalDiscoveryTab.APPS,
                                    applicationId: l.application.id,
                                    newSessionState: {
                                        entrypoint: { name: eU.sW.APPLICATION_DIRECTORY_URL },
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
                                children: eH.intl.format(eH.t.zIT9YA, { applicationHook: () => l.application.name }),
                            }),
                        ],
                    }),
                    null != a && a.length > 0 ? (0, t.jsx)("div", { className: eK.yu, children: a }) : null,
                ],
            }),
        ],
    });
}
function eY(e) {
    let { applicationRoleConnections: l, className: n, onClose: i } = e,
        { trackUserProfileAction: r } = (0, U.NJ)(),
        o = (0, s.bG)([Y.default], () => Y.default.locale),
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
var eq = n(240248),
    e$ = n(308244),
    eZ = n(81400),
    eJ = n(428262),
    eQ = n(84540),
    e0 = n(621466);
n(321073);
var e1 = n(219869),
    e7 = n(866665),
    e2 = n(775602),
    e3 = n(916315);
function e8(e) {
    let { value: l, onCommit: n, disabled: t = !1 } = e,
        [r, a] = i.useState("idle"),
        [o, d] = i.useState(l),
        u = "editing" === r && !t,
        c = (0, s.bG)([e2.Ay], () => e2.Ay.useReducedMotion),
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
function e9(e) {
    let { tooltip: l, ...n } = e,
        i = (0, t.jsx)("div", {
            className: e3.L7,
            children: (0, t.jsx)(e1.T, { ...n, size: "sm", variant: "input-accessory" }),
        });
    return null == l ? i : (0, t.jsx)(e7.m, { text: l, ariaHidden: !0, children: i });
}
function e6(e) {
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
function e5(e) {
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
                        "aria-describedby": S,
                        "aria-expanded": !1,
                        onClick: (e) => {
                            e.stopPropagation(), u();
                        },
                        focusProps: { ringTarget: b },
                    }),
                null != g && (0, t.jsx)("div", { className: e3.lD, children: (0, t.jsx)(e9, { ...g }) }),
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
                              k && "compact" !== c && (0, t.jsx)(e6, { id: I, message: P, type: E }),
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
                ? eH.intl.formatToPlainString(eH.t.ICT5S6, { maxLength: v })
                : void 0) ?? b;
    return (0, t.jsx)(e5, {
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
    { value: "HAIKU", label: () => eH.intl.string(eH.t["azW8+y"]) },
    { value: "GAME_CHARACTER", label: () => eH.intl.string(eH.t.CXkR1L) },
    { value: "TELL_US", label: () => eH.intl.string(eH.t.eutr4P) },
    { value: "FUN_FACT", label: () => eH.intl.string(eH.t.wA2XhW) },
    { value: "THREE_EMOJI", label: () => eH.intl.string(eH.t["ZPB6+J"]) },
    { value: "LIFE_ONE_SENTENCE", label: () => eH.intl.string(eH.t.qqCBRd) },
    { value: "VILLAIN_ORIGIN", label: () => eH.intl.string(eH.t.lnZQ9J) },
    { value: "BRIEF_INTRO", label: () => eH.intl.string(eH.t.w0Xxhk) },
    { value: "VIBE_CHAOTIC_OR_CALM", label: () => eH.intl.string(eH.t.ul8ANJ) },
    { value: "VIBE_FIVE_WORDS", label: () => eH.intl.string(eH.t.u7WCGI) },
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
        b = (0, eZ.EC)(g),
        j = A.bio?.[0],
        I = b?.bio?.[0],
        C = i.useMemo(() => {
            let e;
            return (e = Math.floor(Math.random() * ll.length)), ll[e];
        }, []),
        N = c ? eH.intl.string(eH.t.yPJ9xr) : C.label();
    return !c || f
        ? (0, t.jsx)(le, {
              ...v,
              preview: h ? (0, t.jsx)(e$.A, { userBio: p, setLineClamp: !1 }) : null,
              placeholder: N,
              editButtonAriaLabel: eH.intl.string(eH.t.lO3n7a),
              label: eH.intl.string(eH.t["YWo+Zd"]),
              emojiPickerIntention: ln.EmojiIntention.PROFILE,
              maxLength: q.NA2,
              error: j,
              warning: I,
          })
        : h
          ? (0, t.jsx)(e$.A, { userBio: p, setLineClamp: !1, textColor: "text-muted" })
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
                  (0, t.jsx)(f.A, { children: (0, t.jsx)(m.H, { id: r, children: eH.intl.string(eH.t.ZzAR2Y) }) }),
                  n ? (0, t.jsx)(lt, { displayProfile: l }) : (0, t.jsx)(e$.A, { userBio: a, setLineClamp: !1 }),
              ],
          })
        : null;
}
var lr = n(982168),
    la = n(722868),
    ls = n(822775),
    lo = n(982985),
    ld = n(889619),
    lu = n(34188),
    lc = n(662388),
    lg = n(993401);
function lf(e) {
    let { analyticsLocations: l, newestAnalyticsLocation: n } = (0, I.Ay)(),
        r = i.useCallback(() => {
            (0, lc.Cz)({ analyticsLocations: l, analyticsSource: n });
        }, [l, n]);
    return (0, t.jsx)(lg.q3, {
        action: "VISIT_SHOP",
        icon: lu.U,
        tooltipText: eH.intl.string(eH.t.b2d0N0),
        onClick: r,
        ...e,
    });
}
var lm = n(573355),
    lp = n(102951);
function lx(e) {
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
        } = (0, lp.J)({ userId: l.id }),
        x = f.length > 0 || m || p;
    return o === q.eA$.BLOCKED
        ? null
        : l.id === n.id
          ? u
              ? (0, t.jsxs)(t.Fragment, {
                    children: [
                        (0, t.jsx)(lo.e, { userId: l.id, variant: "primary", disabled: !0 }),
                        (0, t.jsx)(lf, {}),
                        (0, t.jsx)(ld.Zt, { user: l, guildId: i, viewProfileItem: g }),
                    ],
                })
              : (0, t.jsxs)(t.Fragment, {
                    children: [
                        (0, t.jsx)(ls.A, { user: l, guildId: i, onClose: d }),
                        (0, t.jsx)(lf, {}),
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
                          (0, t.jsx)(lm.Ef, { user: l, relationshipType: o, analyticsLocation: c }),
                          (0, t.jsx)(ld.Zt, { user: l, guildId: i, viewProfileItem: g }),
                      ],
                  })
                : o === q.eA$.NONE && x
                  ? (0, t.jsxs)(t.Fragment, {
                        children: [
                            (0, t.jsx)(lo.e, { userId: l.id, onClose: lr.A.popAll, autoFocus: !0 }),
                            (0, t.jsx)(lm.ES, {
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
                            (0, t.jsx)(lm.cO, {
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
var lv = n(463156),
    lh = n(349288),
    lA = n(509434),
    lb = n(307301),
    lj = n(228366),
    lI = n(95561),
    lC = n(874490),
    lN = n(968309),
    ly = n(174459),
    lE = n(486020),
    lP = n(123917),
    lk = n(783419);
let lR = "User Profile Modal V2";
function lS(e) {
    let l = Q.A.get(e);
    (0, lN.A)({ platformType: l.type, location: lR }),
        ly.default.track(q.HAw.ACCOUNT_LINK_STEP, {
            previous_step: lR,
            current_step: "desktop oauth",
            platform_type: l.type,
        });
}
function lT() {
    lj.h.dispatch({ type: "CONNECTIONS_GRID_MODAL_SHOW", onComplete: lS, stackingBehavior: "stack" });
}
function lD(e) {
    let { account: l, locale: n, userId: i } = e,
        r = l.metadata ?? {},
        a = (0, X.An)(r[lk.pK.CREATED_AT], n),
        s = Q.A.get((0, lC.ML)(l.type));
    return (0, t.jsx)(lL, {
        renderAccountName: function () {
            let e = s?.getPlatformUserUrl?.(l);
            return null == e
                ? (0, t.jsx)(e7.m, {
                      overflowOnly: !0,
                      text: l.name,
                      children: (0, t.jsx)(eN.E, { variant: "text-sm/normal", className: eK.GW, children: l.name }),
                  })
                : (0, t.jsx)(lh.Anchor, {
                      href: e,
                      className: eK.Y2,
                      useDefaultUnderlineStyles: !1,
                      "aria-label":
                          s?.name != null
                              ? `${s.name}, ${l.name}, ${eH.intl.string(eH.t.q5jLJB)}`
                              : `${l.name}, ${eH.intl.string(eH.t.q5jLJB)}`,
                      onClick: (n) => {
                          (0, lI.zV)(q.HAw.CONNECTED_ACCOUNT_VIEWED, { platform_type: l.type, other_user_id: i }),
                              (0, lP.h)({ href: e, trusted: s?.type !== q.fg2.DOMAIN }, n);
                      },
                      children: (0, t.jsxs)("div", {
                          className: eK.vi,
                          children: [
                              (0, t.jsx)(e7.m, {
                                  overflowOnly: !0,
                                  text: l.name,
                                  children: (0, t.jsx)(eN.E, {
                                      variant: "text-sm/normal",
                                      className: eK.GW,
                                      children: l.name,
                                  }),
                              }),
                              (0, t.jsx)(lA.I, { size: "xs", color: "currentColor" }),
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
function l_(e) {
    let { identityWithApplication: l } = e,
        { identity: n, application: i } = l;
    if (null == n.profile || null == n.profile.username || null == i) return null;
    let r = lE.Ay.getApplicationIconURL({ id: i.id, icon: i.icon });
    return (0, t.jsx)(lL, {
        renderAccountName: function () {
            return (0, t.jsx)(e7.m, {
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
        className: eK.FI,
        children: [
            (0, t.jsx)(e7.m, {
                __unsupportedReactNodeAsText: i,
                children: (0, t.jsx)("div", {
                    className: eK.k_,
                    children: (0, t.jsx)("img", {
                        alt: eH.intl.formatToPlainString(eH.t.rtm15P, { name: i }),
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
                                    children: eH.intl.format(eH.t["9rfonh"], { date: s }),
                                }),
                        ],
                    }),
                    (0, t.jsx)("div", { className: eK.yu, children: n() }),
                ],
            }),
        ],
    });
}
function lO(e) {
    let { connections: l, applicationIdentities: n, userId: i, allowEditing: r, className: o } = e,
        d = (0, s.bG)([Y.default], () => Y.default.locale);
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
                        n?.map((e) => (0, t.jsx)(l_, { identityWithApplication: e }, e.identity.application_id)),
                    ],
                }),
            r &&
                (0, t.jsxs)(ew.D, {
                    className: eK.qG,
                    onClick: lT,
                    children: [
                        (0, t.jsx)(lb.j, { size: "sm", color: "currentColor" }),
                        (0, t.jsx)(eN.E, {
                            variant: "text-xs/medium",
                            color: "none",
                            children: eH.intl.string(eH.t.syl6HS),
                        }),
                    ],
                }),
        ],
    });
}
var lM = n(193885),
    lw = n(408278),
    lG = n(554146),
    lV = n(789645),
    lF = n(297264),
    lU = n(821609),
    lB = n(403581),
    lW = n(194261),
    lz = n(812993),
    lH = n(890377),
    lK = n(517461),
    lX = n(13875),
    lY = n(131607),
    lq = n(248778),
    l$ = n(783420),
    lZ = n(252732),
    lJ = n(976860),
    lQ = n(945810);
let l0 = (0, lQ.mj)({
        name: "2026-06-wysiwyg-show-dns-to-non-nitro",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    l1 = (0, lQ.mj)({
        name: "2026-06-wysiwyg-user-profile-premium-try-it-out",
        kind: "user",
        defaultConfig: { enabled: !1, showPresetName: !1 },
        variations: { 1: { enabled: !0, showPresetName: !0 }, 2: { enabled: !0, showPresetName: !1 } },
    });
var l7 = n(975732),
    l2 = n(487233),
    l3 = n(120386),
    l8 = n(317097),
    l9 = n(602853),
    l6 = n(922016),
    l5 = n(508274),
    l4 = n(654107),
    ne = n(930349);
function nl(e) {
    let { user: l, disabled: n = !1 } = e,
        r = i.useRef(null),
        a = (0, l9.r)(x.A.unsafe_rawColors.PRIMARY_530).hex(),
        o = (0, l4.rh)(l.getAvatarURL(null, 80), a, !1),
        { pendingAccentColor: d, savedAccentColor: u } = (0, s.cf)([eg.A, W.A], () => ({
            pendingAccentColor: eg.A.getPendingChanges().pendingAccentColor,
            savedAccentColor: W.A.getUserProfile(l.id)?.accentColor,
        })),
        c = d ?? u ?? (0, l8.LX)(o[0] ?? a),
        g = i.useCallback((e) => (0, eQ.p)({ accentColor: e }), []);
    return (0, t.jsx)(l6.Y, {
        targetElementRef: r,
        renderPopout: (e) => (0, t.jsx)(l5.VN, { ...e, value: c, onChange: g, suggestedColors: o, showEyeDropper: !0 }),
        children: (e) =>
            (0, t.jsx)(ne.V, {
                ...e,
                variant: "bar",
                buttonRef: r,
                disabled: n,
                accessibleLabel: eH.intl.string(eH.t["/X3fkf"]),
                accessibleValue: (0, l8.Hl)(c),
                showOverlayOnHover: !0,
                renderPreview: () =>
                    (0, t.jsx)("div", { style: { width: "100%", height: "100%", backgroundColor: (0, l8.Hl)(c) } }),
            }),
    });
}
var nn = n(450373),
    nt = n(339984),
    ni = n(111242);
function nr(e) {
    let { backgroundColor: l } = e;
    return (0, t.jsx)("div", { className: ni.o, style: { backgroundColor: l } });
}
function na(e) {
    let { src: l } = e;
    return (0, t.jsx)("img", { src: l, alt: "", className: ni._ });
}
function ns(e) {
    let { displayProfile: l, pendingBanner: n, shouldAnimate: i } = e,
        r = (0, l9.r)(x.A.unsafe_rawColors.PRIMARY_800).hex(),
        a = l?.primaryColor ?? (0, l8.LX)(r),
        { hex: s } = (0, nn.A)(a),
        o = l?.getPreviewBanner(n, i, 296) ?? void 0;
    return null != o ? (0, t.jsx)(na, { src: o }) : (0, t.jsx)(nr, { backgroundColor: s });
}
function no(e) {
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
                  onClick: () => (0, lZ.rM)(null, f, (e) => (0, eQ.p)({ guildId: i ?? void 0, banner: e })),
                  type: h ? "reset" : "remove",
                  accessibleLabel: eH.intl.string(h ? eH.t.jHlJNS : eH.t.tT9n7D),
              }
            : void 0;
    return (0, t.jsx)(ne.V, {
        affordance: A,
        variant: "square",
        onClick: function () {
            return (0, lZ.XD)({
                uploadType: nt.HL.BANNER,
                analyticsSource: o,
                guildId: i ?? void 0,
                stackingBehavior: "stack",
            });
        },
        accessibleLabel: eH.intl.string(eH.t.yiRnNO),
        accessibleValue:
            ((l = void 0 === c),
            null === c || (l && null == f)
                ? eH.intl.string(eH.t["3Xph0/"])
                : l
                  ? eH.intl.string(eH.t.keN7ib)
                  : eH.intl.string(eH.t["l/iJSJ"])),
        "aria-haspopup": "dialog",
        disabled: r,
        showOverlayOnHover: !0,
        errorMessageId: a,
        renderPreview: (e) => (0, t.jsx)(ns, { displayProfile: u, pendingBanner: x, shouldAnimate: e }),
    });
}
var nd = n(913563),
    nu = n(898985),
    nc = n(922301),
    ng = n(660184),
    nf = n(259065),
    nm = n(864386),
    np = n(283607);
let nx = "heading-xl/semibold";
function nv(e) {
    let { displayName: l, stylesPreview: n, shouldAnimate: i = !1 } = e;
    return (0, t.jsx)("div", {
        "aria-hidden": !0,
        className: np.M,
        children:
            null != n
                ? (0, t.jsx)(eN.E, {
                      variant: nx,
                      children: (0, t.jsx)(ng.A, {
                          userName: l,
                          displayNameStyles: n,
                          effectDisplayType: i ? nc.G.ANIMATED : nc.G.STATIC,
                          shouldWrap: !1,
                          inProfile: !0,
                          loop: !0,
                      }),
                  })
                : (0, t.jsx)(eN.E, { variant: nx, className: np.W, color: "text-muted", children: l }),
    });
}
function nh(e) {
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
                      accessibleLabel: eH.intl.string(j ? eH.t.en3ogK : eH.t["Wqmi/h"]),
                  }
                : void 0,
        R = i.useCallback(() => {
            o?.(), (0, nf.L)({ analyticsLocations: d, guildId: n ?? void 0, stackingBehavior: "stack" });
        }, [d, n, o]);
    return (0, t.jsx)(ne.V, {
        affordance: (!b && (A || null != h)) || j ? k : "add",
        variant: "bar",
        onClick: R,
        accessibleLabel: eH.intl.string(eH.t.vKBV4A),
        accessibleValue: (function (e) {
            if (null == e) return eH.intl.string(eH.t["3Xph0/"]);
            let l = eH.intl.string((0, nd.A)(e.fontId)),
                n = eH.intl.string(nu.J[e.effectId] ?? nm.default.OpWJ3f),
                t = e.colors.map((e) => `#${e.toString(16).padStart(6, "0")}`).join(", ");
            return eH.intl.formatToPlainString(eH.t.A2XnI4, { fontName: l, effectName: n, colors: t });
        })(C),
        "aria-haspopup": "dialog",
        errorMessageId: a,
        renderPreview: (e) => (0, t.jsx)(nv, { stylesPreview: C, displayName: E, shouldAnimate: e }),
        disabled: r,
    });
}
var nA = n(373986);
function nb(e) {
    let { heading: l, children: n, disabled: i = !1, showNitroIcon: r = !1, badge: a } = e;
    return (0, t.jsxs)("div", {
        className: nA.Os,
        children: [
            (0, t.jsxs)("div", {
                className: nA.Pf,
                children: [
                    (0, t.jsx)(lF.D, {
                        className: nA.DV,
                        variant: "text-sm/medium",
                        color: i ? "text-muted" : "text-strong",
                        children: l,
                    }),
                    r &&
                        (0, t.jsx)(e7.m, {
                            text: eH.intl.string(eH.t["5AFxuK"]),
                            shouldShow: !i,
                            ariaHidden: !0,
                            children: (0, t.jsx)(lB.t, {
                                className: nA.IX,
                                size: "xs",
                                color: i ? x.A.colors.ICON_MUTED : x.A.colors.ICON_STRONG,
                                "aria-hidden": !0,
                            }),
                        }),
                    null != a && (0, t.jsx)("span", { className: nA.ot, children: a }),
                ],
            }),
            n,
        ],
    });
}
function nj(e) {
    let { id: l, message: n } = e;
    return null == n
        ? null
        : (0, t.jsxs)("div", {
              className: nA.gJ,
              role: "alert",
              children: [
                  (0, t.jsx)(c.E, { size: "xs", color: x.A.colors.TEXT_FEEDBACK_CRITICAL }),
                  (0, t.jsx)(eN.E, { variant: "text-xs/normal", color: "text-feedback-critical", id: l, children: n }),
              ],
          });
}
var nI = n(374654),
    nC = n(366010),
    nN = n(736653),
    ny = n(674658),
    nE = n(617061),
    nP = n(203632),
    nk = n(536572);
let nR = new Set(),
    nS = 0;
var nT = n(993408),
    nD = n(841702),
    n_ = n(515718),
    nL = n(195292);
function nO(e) {
    "" !== e.thumbnailPreviewSrc && (0, n_.NN)(e.thumbnailPreviewSrc).catch(() => {});
}
var nM = n(466681),
    nw = n(970389);
let nG =
        "https://cdn.discordapp.com/assets/content/6ccc97f30d0e11f23e116bb2534831ca573533a9dd726f5859ae527e82cdf37a.png",
    nV =
        "https://cdn.discordapp.com/assets/content/82b9aaf680c9ca85c8e9cdb51056df7d33d865e18e645393934b76c03b944611.png";
function nF(e) {
    let { effect: l, shouldAnimate: n, isEmpty: r, hasMainProfileFallback: s, disabled: o } = e,
        d = (0, nN.Ay)(),
        u = (0, nC.M)(d) ? nG : nV,
        c = (function (e) {
            let { enabled: l, isInteracting: n } = e,
                { categories: t, purchases: r } = (0, nD.Ay)({ stalePurchasesOK: !0 }),
                a = i.useMemo(() => (0, nT.wo)(r, t), [r, t]),
                s = (0, nL.A)({ enabled: l, isInteracting: n, items: a, preload: nO });
            return null != s ? { skuId: s.skuId } : null;
        })({ enabled: r && !s && !o, isInteracting: n }),
        g = null != c,
        f = g ? c : l;
    return (
        i.useEffect(() => {
            n && ((nS += 1), nR.forEach((e) => e()));
        }, [n]),
        (0, t.jsxs)("div", {
            className: nM.ti,
            "aria-hidden": !0,
            children: [
                (0, t.jsx)("img", { src: u, alt: "", className: nM.QQ }),
                f?.skuId != null &&
                    (0, t.jsx)("div", {
                        className: a()(nM.yY, { [nw.O]: g }),
                        children: (0, t.jsx)(C.A, {
                            skuId: f.skuId,
                            autoPlay: !1,
                            resetOnHover: !0,
                            restartMethod: nP.HL.FromStart,
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
function nU(e) {
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
        { product: h } = (0, ny.q)(v?.skuId),
        A = m ? null != f : null != g,
        b =
            null != v && A
                ? {
                      onClick: () => (0, eQ.p)({ guildId: n ?? void 0, profileEffect: null }),
                      type: x ? "reset" : "remove",
                      accessibleLabel: eH.intl.string(x ? eH.t["SQy/Po"] : eH.t.uMuafO),
                  }
                : void 0,
        j = i.useCallback(() => {
            (0, nE.W)({ analyticsLocations: o, guild: u ?? void 0, stackingBehavior: "stack" });
        }, [o, u]);
    return (0, t.jsx)(ne.V, {
        affordance: p && !x ? "add" : b,
        variant: a,
        onClick: j,
        accessibleLabel: eH.intl.string(eH.t.wR5wOo),
        accessibleValue: (function (e) {
            let { profileEffectPreview: l, productName: n, hasPendingSelection: t } = e;
            return null == l
                ? eH.intl.string(eH.t["3Xph0/"])
                : null != n && "" !== n
                  ? n
                  : eH.intl.string(t ? eH.t["1M4m8w"] : eH.t["+Du7ua"]);
        })({ profileEffectPreview: v, productName: (0, nk.VG)(h), hasPendingSelection: null != f }),
        "aria-haspopup": "dialog",
        disabled: r,
        renderPreview: (e) =>
            (0, t.jsx)(nF, { effect: v, shouldAnimate: e, isEmpty: p, hasMainProfileFallback: x, disabled: r }),
    });
}
var nB = n(515727),
    nW = n(746002);
function nz(e) {
    e.layers
        .filter((e) => !0 !== e.responsive)
        .forEach((l) => {
            let n = (0, nW.getCollectiblesItemAssetUrl)({
                skuId: e.skuId,
                assetFormat: nW.CollectiblesItemAssetFormat.STATIC,
                assetId: l.id,
            });
            null != n && (0, n_.NN)(n).catch(() => {});
        });
}
var nH = n(84391);
function nK(e) {
    let { responsive: l } = e;
    return !0 !== l;
}
function nX(e) {
    let { profileFramePreview: l, isEmpty: n, hasMainProfileFallback: r, isInteracting: s, disabled: o } = e,
        d = (0, nN.Ay)(),
        u = (0, nC.M)(d) ? nG : nV,
        c = (0, y.A)(l?.skuId, "EditableTileProfileFrameButton"),
        g = (function (e) {
            let { enabled: l, isInteracting: n } = e,
                { categories: t, purchases: r } = (0, nD.Ay)({ stalePurchasesOK: !0 }),
                a = i.useMemo(() => (0, nT.MG)(r, t), [r, t]);
            return (0, nL.A)({ enabled: l, isInteracting: n, items: a, preload: nz });
        })({ enabled: n && !r && !o, isInteracting: s }),
        f = null != g,
        m = f ? g : c,
        { profileFrameStyle: p, profileFrameClassName: x } =
            null != m ? (0, k.i)(m) : { profileFrameStyle: void 0, profileFrameClassName: void 0 };
    return (0, t.jsxs)(t.Fragment, {
        children: [
            null != m &&
                (0, t.jsx)("div", {
                    className: a()(nH.hm, x, { [nw.O]: f }),
                    style: p,
                    children: (0, t.jsx)(P.A, { frame: m, filterLayer: nK }),
                }),
            (0, t.jsx)("div", {
                className: a()(nH.ti, { [nH.yT]: null == m }),
                children: (0, t.jsx)("img", { src: u, alt: "", className: nH.QQ, draggable: !1 }),
            }),
        ],
    });
}
function nY(e) {
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
        { product: v } = (0, ny.q)(x?.skuId),
        h = f ? null != g : null != c,
        A =
            null != x && h
                ? {
                      onClick: () => (0, eQ.p)({ guildId: n ?? void 0, profileFrame: null }),
                      type: p ? "reset" : "remove",
                      accessibleLabel: eH.intl.string(p ? eH.t.j6hZyM : eH.t.nQBruk),
                  }
                : void 0,
        b = i.useCallback(() => {
            (0, nB.w)({ analyticsLocations: a, guild: d ?? void 0, stackingBehavior: "stack" });
        }, [a, d]);
    return (0, t.jsx)(ne.V, {
        affordance: m && !p ? "add" : A,
        variant: "square",
        onClick: b,
        accessibleLabel: eH.intl.string(eH.t.GWrZOd),
        accessibleValue: (function (e) {
            let { profileFramePreview: l, productName: n, hasPendingSelection: t } = e;
            return null == l
                ? eH.intl.string(eH.t["3Xph0/"])
                : null != n && "" !== n
                  ? n
                  : eH.intl.string(t ? eH.t.yFeGB5 : eH.t["2kAxKM"]);
        })({ profileFramePreview: x, productName: (0, nk.VG)(v), hasPendingSelection: null != g }),
        "aria-haspopup": "dialog",
        disabled: r,
        renderPreview: (e) =>
            (0, t.jsx)(nX, {
                profileFramePreview: x,
                isEmpty: m,
                hasMainProfileFallback: p,
                isInteracting: e,
                disabled: r,
            }),
    });
}
var nq = n(684732),
    n$ = n(498596),
    nZ = n(298387);
function nJ(e) {
    let { color: l, suggestedColors: n, disabled: r, ariaLabel: s, onSelect: o, buttonRef: d } = e,
        u = i.useRef(null),
        c = d ?? u,
        g = (0, l8.Hl)(l),
        f = (0, l8.bJ)(l, 0xffffff) < n$.Tr.NonText;
    return (0, t.jsx)(l6.Y, {
        targetElementRef: c,
        renderPopout: (e) => (0, t.jsx)(l5.VN, { ...e, value: l, onChange: o, suggestedColors: n, showEyeDropper: !0 }),
        children: (e) => {
            let { onClick: l, ...n } = e;
            return (0, t.jsx)(ew.D, {
                ...n,
                innerRef: c,
                className: nZ.Dh,
                onClick: r ? void 0 : l,
                "aria-label": s,
                "aria-disabled": r,
                tabIndex: r ? -1 : 0,
                children: (0, t.jsx)("div", { className: a()(nZ.Hy, { [nZ.rY]: f }), style: { backgroundColor: g } }),
            });
        },
    });
}
function nQ(e) {
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
        m = eH.intl.formatToPlainString(eH.t.FquTfm, { colorLabel: c }),
        p = eH.intl.formatToPlainString(eH.t.xOnm4z, { colorLabel: g }),
        x =
            null != d
                ? {
                      ...d,
                      onClick: () => {
                          d.onClick(), u.current?.focus();
                      },
                  }
                : void 0;
    return (0, t.jsx)(ne.Y, {
        variant: "square",
        disabled: o,
        deleteButton: x,
        children: (0, t.jsxs)("div", {
            className: nZ.D7,
            style: { background: f },
            children: [
                (0, t.jsx)(nJ, { color: l, suggestedColors: s, ariaLabel: m, onSelect: r, disabled: o, buttonRef: u }),
                (0, t.jsx)(nJ, { color: n, suggestedColors: s, ariaLabel: p, onSelect: a, disabled: o }),
            ],
        }),
    });
}
function n0(e) {
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
        p = (0, l9.r)(x.A.unsafe_rawColors.PRIMARY_530).hex(),
        v = null != g ? g : l.getAvatarURL(n ?? void 0, 80),
        h = (0, l4.rh)(v, p, !1),
        A = i.useCallback(
            (e) => {
                (0, eQ.p)({ guildId: n ?? void 0, themeColors: e });
            },
            [n],
        ),
        b =
            null != n && (0, nq.l)(d, o)
                ? {
                      onClick: () => (0, eQ.p)({ guildId: n, themeColors: [null, null] }),
                      type: "reset",
                      accessibleLabel: eH.intl.string(eH.t["L+GmoR"]),
                  }
                : void 0;
    return null == f || null == m
        ? null
        : (0, t.jsx)(nQ, {
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
var n1 = n(684440);
function n7(e) {
    let { children: l, hasGradientBackground: n = !1 } = e;
    return (0, t.jsx)(m.F, { children: (0, t.jsx)("div", { className: a()(n1.k, { [n1.V]: n }), children: l }) });
}
var n2 = n(372684),
    n3 = n(689175),
    n8 = n(917473);
function n9(e) {
    let { children: l, isDismissed: n } = e;
    return (0, d.p)(!n, {
        initial: { opacity: 1, y: 0 },
        from: { opacity: 0, y: 48 },
        enter: { opacity: 1, y: 0, config: { tension: 200, friction: 25 } },
        leave: { opacity: 0, y: 48, config: { tension: 300, friction: 25 } },
    })((e, n) => (n ? (0, t.jsx)(n2.animated.div, { className: n8.iK, style: e, children: l }) : null));
}
function n6(e) {
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
            (0, t.jsx)(n3.zC, {
                ref: r,
                className: a()(n8.XG, { [n8.a5]: f }),
                onScroll: s ? g : void 0,
                children: (0, t.jsx)("div", { className: n8.Qs, children: l }),
            }),
            s && (0, t.jsx)(n9, { isDismissed: o, children: n }),
        ],
    });
}
var n5 = n(315629),
    n4 = n(422936),
    te = n(410516),
    tl = n(202541);
function tn(e) {
    let l = (0, s.bG)([ec.default], () => eJ.Ay.isPremium(ec.default.getCurrentUser())),
        n = (0, n4.O)();
    return l
        ? eH.intl.string(eH.t.AfRWI8)
        : (0, te.U9)(n, tl.pe.TIER_2) && n?.discount.amount != null
          ? eH.intl.formatToPlainString(eH.t.bkQ4bH, { percent: n?.discount.amount })
          : e;
}
var tt = n(235684);
function ti() {
    let e = i.useCallback(() => {
            (0, lJ.pX)(q.BVt.NITRO_HOME), (0, l7.closeUserProfileModal)();
        }, []),
        l = tn(eH.intl.string(eH.t.pj0XBN));
    return (0, t.jsx)(l$.A, {
        subscriptionTier: tl.pe.TIER_2,
        children: (n) => {
            let { onClick: i } = n;
            return (0, t.jsxs)(n5.h, {
                color: "nitro-pink",
                className: tt.U,
                children: [
                    (0, t.jsx)(eN.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: eH.intl.format(eH.t.TmfgI2, { onClick: e }),
                    }),
                    (0, t.jsx)(lU.$, {
                        variant: "expressive",
                        size: "md",
                        icon: lB.t,
                        text: l,
                        onClick: i,
                        fullWidth: !0,
                    }),
                ],
            });
        },
    });
}
var tr = n(55619),
    ta = n(942308);
function ts() {
    return (0, t.jsxs)("div", {
        className: ta.k,
        children: [
            (0, t.jsx)(eN.E, {
                variant: "text-sm/medium",
                color: "text-strong",
                children: eH.intl.string(eH.t.JFY17v),
            }),
            (0, t.jsx)(lU.$, {
                fullWidth: !0,
                variant: "secondary",
                size: "md",
                text: eH.intl.string(eH.t.R9GHya),
                onClick: function () {
                    return tr.A.setEnabled(!1);
                },
            }),
        ],
    });
}
var to = n(847374),
    td = n(111159),
    tu = n(548118),
    tc = n(711014),
    tg = n(540637),
    tf = n(801461),
    tm = n(44482),
    tp = n(844222),
    tx = n(561392),
    tv = n(745113),
    th = n(15626),
    tA = n(930856);
function tb(e) {
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
            let { reducedMotion: e } = i.useContext(tp.C),
                {
                    isOpen: l,
                    setIsOpen: n,
                    refs: t,
                    floatingStyles: r,
                    getReferenceProps: a,
                    getFloatingProps: s,
                    context: o,
                } = (0, tx.u)({ placement: "bottom-start", matchReferenceWidth: !1, transform: e.enabled }),
                { styles: d } = (0, tv.DL)(o, {
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
        N = i.useContext(th._),
        y = i.useId(),
        E = i.useId(),
        P = i.useId(),
        k = i.useRef(null),
        R = i.useRef(null),
        [S, T] = i.useState(null),
        D = null != S ? (0, tf.ZN)(P, S) : void 0,
        _ = i.useRef(!1),
        L = i.useRef(!1),
        O = i.useMemo(() => l.filter((e) => (0, tf.fI)(e.value, [n])), [n, l]),
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
        { activeIndex: U, handleKeyDown: B } = (0, tg.l)(!0, l),
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
                    className: a()(tA.S_, d),
                    ...j(),
                    style: { ...A, ...I },
                    children: (0, t.jsx)(tg.q, {
                        id: P,
                        tabIndex: -1,
                        items: l,
                        selectionMode: "single",
                        selectedItems: O,
                        onSelectionChange: F,
                        shouldFocusWrap: !1,
                        activeDescendantIndex: S,
                        renderListItem: (e) => (null != m ? m(e) : (0, t.jsx)(tm.c, { ...e })),
                        maxVisibleItems: g,
                        loading: c,
                    }),
                }),
        ],
    });
}
var tj = n(138325);
let tI = "MAIN_PROFILE";
function tC(e) {
    let { guild: l } = e;
    return (0, t.jsx)(tu.Ay, { className: tj.$f, guild: l, size: tu.Ay.Sizes.MINI, active: !0, "aria-hidden": !0 });
}
function tN(e) {
    let { leading: l, label: n, description: i } = e;
    return (0, t.jsxs)("div", {
        className: tj.XE,
        children: [
            null != l && (0, t.jsx)("div", { className: tj.fZ, children: l }),
            (0, t.jsxs)("div", {
                className: tj.qL,
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
function ty(e) {
    let { leading: l, label: n, disabled: i, buttonRef: r, selectButtonProps: s } = e;
    return (0, t.jsxs)(ew.D, {
        innerRef: r,
        className: a()(tj.L5, { [tj.r9]: i }),
        tabIndex: !0 === i ? -1 : 0,
        ...s,
        children: [
            l,
            (0, t.jsx)(eN.E, {
                variant: "text-md/medium",
                color: !0 === i ? "text-muted" : "text-strong",
                lineClamp: 1,
                className: tj.v9,
                children: n,
            }),
            (0, t.jsx)(to.a, {
                className: tj.u4,
                size: "sm",
                color: !0 === i ? x.A.colors.ICON_MUTED : x.A.colors.ICON_DEFAULT,
            }),
        ],
    });
}
function tE(e) {
    let { selectedGuildId: l, originGuildId: n, onChange: r, loading: a, disabled: o } = e,
        d = (0, s.bG)([tc.Ay], () => tc.Ay.getFlattenedGuildIds()),
        u = (0, s.bG)([M.A], () => M.A.getGuilds()),
        c = (0, s.bG)([eW.A], () => {
            let e = eW.A.getGuildId();
            return null == e || eg._.has(e) ? null : e;
        }),
        g = (0, s.cf)([eu.Ay, tc.Ay], () => {
            let e = {};
            for (let l of tc.Ay.getFlattenedGuildIds()) {
                let n = eu.Ay.getSelfMember(l)?.nick;
                null != n && (e[l] = n);
            }
            return e;
        }),
        f = i.useMemo(() => {
            let e = {
                    id: tI,
                    label: eH.intl.string(eH.t["2p07FR"]),
                    value: tI,
                    leading: (0, t.jsx)(td.p, { size: "refresh_sm", color: x.A.colors.ICON_DEFAULT }),
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
                                  leading: (0, t.jsx)(tC, { guild: n }),
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
                          leading: (0, t.jsx)(tC, { guild: r }),
                          description: g[r.id] ?? void 0,
                      },
                      ...i,
                  ];
        }, [d, u, n, c, g]),
        m = l ?? tI,
        p = f.find((e) => e.value === m) ?? f[0],
        v = i.useCallback(
            (e) => {
                let n = e === tI ? null : e;
                n !== l && r(n);
            },
            [r, l],
        );
    return (0, t.jsx)(tb, {
        className: tj.kL,
        label: eH.intl.string(eH.t.rki38K),
        listboxClassName: tj.yt,
        options: f,
        value: m,
        onSelectionChange: v,
        loading: a,
        disabled: o,
        renderListItem: (e) => (0, t.jsx)(tN, { leading: e.leading, label: e.label, description: e.description }),
        children: (e) =>
            (0, t.jsx)(ty, { leading: p.value === tI ? null : p.leading, label: p.label, disabled: o, ...e }),
    });
}
var tP = n(207803),
    tk = n(485745);
function tR(e) {
    let l = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = !(0, z.X)("useUnsavedProfileChangesGuard"),
        t = (0, tk.A)(n),
        r = i.useRef(e);
    return (
        i.useLayoutEffect(() => {
            r.current = e;
        }),
        i.useCallback(
            function () {
                for (var e = arguments.length, n = Array(e), i = 0; i < e; i++) n[i] = arguments[i];
                l && t ? (0, tP.VQ)() : r.current(...n);
            },
            [l, t],
        )
    );
}
var tS = n(49999),
    tT = n(725379);
let tD = "profile-editing-nameplate-error",
    t_ = "profile-editing-avatar-error",
    tL = "profile-editing-avatar-decoration-error",
    tO = "profile-editing-banner-error",
    tM = "profile-editing-display-name-style-error";
function tw() {
    let [e, l] = (0, lK.V)("per-server-profile-editing-notice-dismissed", !1);
    return e
        ? null
        : (0, t.jsxs)("div", {
              className: tT.X6,
              children: [
                  (0, t.jsx)(eN.E, {
                      variant: "text-sm/normal",
                      color: "text-default",
                      children: eH.intl.string(eH.t["gBIG/N"]),
                  }),
                  (0, t.jsx)(ew.D, {
                      "aria-label": eH.intl.string(eH.t.rSe9ra),
                      className: tT.TD,
                      onClick: () => l(!0),
                      children: (0, t.jsx)(lV.P, { size: "refresh_sm", color: "currentColor" }),
                  }),
              ],
          });
}
function tG() {
    let e = i.useCallback(() => {
            (0, lJ.pX)(q.BVt.NITRO_HOME), (0, l7.closeUserProfileModal)();
        }, []),
        l = tn(eH.intl.string(eH.t["7IWwak"]));
    return (0, t.jsx)(l$.A, {
        subscriptionTier: tl.pe.TIER_2,
        children: (n) => {
            let { onClick: i } = n;
            return (0, t.jsxs)("div", {
                className: tT.eW,
                children: [
                    (0, t.jsxs)("div", {
                        className: tT.tm,
                        children: [
                            (0, t.jsx)(lF.D, {
                                variant: "text-md/medium",
                                color: "text-default",
                                children: eH.intl.string(eH.t.bO0TOe),
                            }),
                            (0, t.jsx)(eN.E, {
                                variant: "text-xs/medium",
                                color: "text-default",
                                children: eH.intl.format(eH.t["3PujdE"], { onClick: e }),
                            }),
                        ],
                    }),
                    (0, t.jsx)(lU.$, {
                        variant: "expressive",
                        size: "sm",
                        icon: lB.t,
                        text: l,
                        onClick: i,
                        fullWidth: !0,
                    }),
                    (0, t.jsx)("div", {
                        className: tT.D0,
                        children: (0, t.jsx)("div", { className: tT.ZN, children: (0, t.jsx)(lW.X, { size: "xs" }) }),
                    }),
                ],
            });
        },
    });
}
function tV() {
    return (0, t.jsx)(eN.E, {
        variant: "text-xs/normal",
        color: "text-subtle",
        className: tT.BJ,
        "aria-hidden": !0,
        children: eH.intl.format(eH.t.kYv9DM, {
            nitroIconHook: () => (0, t.jsx)(lB.t, { size: "xxs", color: "currentColor", className: tT.qp }),
        }),
    });
}
function tF(e) {
    let { user: l, guildId: n, disabled: i, errorMessage: r } = e;
    return (0, t.jsxs)(nb, {
        heading: eH.intl.string(eH.t.x5CoXR),
        disabled: i,
        children: [
            (0, t.jsx)(nI.A, { user: l, guildId: n, disabled: i, errorMessageId: null != r ? tD : void 0 }),
            (0, t.jsx)(nj, { id: tD, message: r }),
        ],
    });
}
function tU(e) {
    let { user: l, guildId: n, disabled: i, avatarErrorMessage: r, avatarDecorationErrorMessage: a } = e;
    return (0, t.jsxs)(nb, {
        heading: eH.intl.string(eH.t["50Nwpc"]),
        disabled: i,
        children: [
            (0, t.jsx)(l2.A, { user: l, guildId: n, disabled: i, errorMessageId: null != r ? t_ : void 0 }),
            (0, t.jsx)(l3.A, { user: l, guildId: n, disabled: i, errorMessageId: null != a ? tL : void 0 }),
            (0, t.jsx)(nj, { id: t_, message: (0, lZ.d3)(r) }),
            (0, t.jsx)(nj, { id: tL, message: a }),
        ],
    });
}
function tB(e) {
    let { user: l, guildId: n, disabled: i, errorMessage: r } = e,
        a = (0, lq.ux)("UserProfileModalV2EditingPanel"),
        [s, o] = (0, lY.kn)(a && !i ? [lG.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE] : []),
        d = s === lG.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE;
    return (0, t.jsxs)(nb, {
        heading: eH.intl.string(eH.t.NEzEws),
        disabled: i,
        showNitroIcon: !0,
        badge: d ? (0, t.jsx)(lz.Lp, { text: eH.intl.string(eH.t.y2b7CA), "aria-hidden": !0 }) : void 0,
        children: [
            (0, t.jsx)(nh, {
                user: l,
                guildId: n,
                disabled: i,
                errorMessageId: null != r ? tM : void 0,
                onOpen: d ? () => o(tS.i.TAKE_ACTION) : void 0,
            }),
            (0, t.jsx)(nj, { id: tM, message: r }),
        ],
    });
}
function tW(e) {
    let { user: l, guildId: n, disabled: i, canUsePremiumProfileFeatures: r, bannerErrorMessage: a } = e;
    return (0, t.jsxs)(nb, {
        heading: eH.intl.string(eH.t.Zenogr),
        disabled: i,
        showNitroIcon: !0,
        children: [
            (0, t.jsx)(n0, { user: l, guildId: n, disabled: i || !r }),
            (0, t.jsx)(no, { userId: l.id, guildId: n, disabled: i || !r, errorMessageId: null != a ? tO : void 0 }),
            (0, t.jsx)(nj, { id: tO, message: (0, lZ.d3)(a) }),
        ],
    });
}
function tz(e) {
    let { user: l, disabled: n } = e;
    return (0, t.jsx)(nb, {
        heading: eH.intl.string(eH.t["/X3fkf"]),
        disabled: n,
        children: (0, t.jsx)(nl, { user: l, disabled: n }),
    });
}
function tH(e) {
    let { user: l, guildId: n, disabled: i } = e,
        r = (0, lX.sk)("UserProfileModalV2EditingPanel");
    return (0, t.jsxs)(nb, {
        heading: eH.intl.string(r ? eH.t["Vfbar/"] : eH.t.wR5wOo),
        disabled: i,
        children: [
            (0, t.jsx)(nU, { user: l, guildId: n, disabled: i, variant: r ? "square" : "full-height-bar" }),
            r && (0, t.jsx)(nY, { user: l, guildId: n, disabled: i }),
        ],
    });
}
function tK(e) {
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
            return l1.useConfig({ location: l });
        })({ location: "DefaultEditingPanelView" }),
        x = tR(g),
        v = null != i,
        h = eJ.Ay.canUsePremiumProfileCustomization(l),
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
        S = l0.useConfig({ location: "UserProfileModalV2EditingPanel" }).enabled,
        T = h || v ? "inline" : S ? "end" : "hidden",
        D = (0, t.jsx)(tB, { user: l, guildId: i, disabled: C || A, errorMessage: R });
    return (0, t.jsxs)(n7, {
        hasGradientBackground: I,
        children: [
            (0, t.jsxs)("div", {
                className: tT.wx,
                children: [
                    (0, t.jsx)(e7.m, {
                        text: eH.intl.string(eH.t["l/A351"]),
                        ariaHidden: !0,
                        children: (0, t.jsx)(ew.D, {
                            innerRef: d,
                            className: tT.cS,
                            "aria-label": eH.intl.string(eH.t["l/A351"]),
                            onClick: c,
                            "aria-controls": n,
                            "aria-expanded": !0,
                            children: (0, t.jsx)(lH.V, { size: "md", color: "currentColor" }),
                        }),
                    }),
                    (0, t.jsx)(tE, {
                        selectedGuildId: i ?? null,
                        originGuildId: r,
                        onChange: x,
                        loading: a,
                        disabled: m,
                    }),
                ],
            }),
            m
                ? (0, t.jsx)(ts, {})
                : (0, t.jsx)(n6, {
                      floatingFooter: b && !j ? (0, t.jsx)(ti, {}) : void 0,
                      children: (0, t.jsxs)(t.Fragment, {
                          children: [
                              v && (h ? (0, t.jsx)(tw, {}) : (0, t.jsx)(tG, {})),
                              h && (0, t.jsx)(tV, {}),
                              (0, t.jsx)(tF, { user: l, guildId: i, disabled: C || A, errorMessage: y }),
                              (0, t.jsx)(tU, {
                                  user: l,
                                  guildId: i,
                                  disabled: C || A,
                                  avatarErrorMessage: E,
                                  avatarDecorationErrorMessage: P,
                              }),
                              "inline" === T && D,
                              h || v
                                  ? (0, t.jsx)(tW, {
                                        user: l,
                                        guildId: i,
                                        disabled: C || A,
                                        canUsePremiumProfileFeatures: h,
                                        bannerErrorMessage: k,
                                    })
                                  : (0, t.jsx)(tz, { user: l, disabled: C || A }),
                              (0, t.jsx)(tH, { user: l, guildId: i, disabled: C || A }),
                              "end" === T && D,
                              j &&
                                  (0, t.jsx)(lU.$, {
                                      buttonRef: u,
                                      variant: "expressive",
                                      size: "md",
                                      text: eH.intl.string(eH.t.PxUx8e),
                                      onClick: f,
                                      fullWidth: !0,
                                  }),
                          ],
                      }),
                  }),
        ],
    });
}
var tX = n(477155),
    tY = n(801917);
function tq(e) {
    let { onBack: l } = e,
        n = i.useRef(null);
    return (
        i.useEffect(() => {
            n.current?.focus();
        }, []),
        (0, t.jsx)(n7, {
            hasGradientBackground: !0,
            children: (0, t.jsxs)("div", {
                className: tY.wx,
                children: [
                    (0, t.jsx)(ew.D, {
                        innerRef: n,
                        "aria-label": eH.intl.string(eH.t["13/7kX"]),
                        onClick: l,
                        className: tY.Gv,
                        children: (0, t.jsx)(tX.r, { size: "md", color: "currentColor" }),
                    }),
                    (0, t.jsx)(lF.D, {
                        variant: "text-lg/normal",
                        color: "text-default",
                        className: tY.R_,
                        children: eH.intl.string(eH.t.PxUx8e),
                    }),
                    (0, t.jsx)(eN.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        className: tY.Ij,
                        children: eH.intl.string(eH.t.X0ir7L),
                    }),
                ],
            }),
        })
    );
}
var t$ = n(809467);
let tZ = "user-profile-editing-panel",
    tJ = "profile-modal-editing-panel-heading";
function tQ(e) {
    let { onClick: l, className: n, innerRef: i } = e;
    return (0, t.jsx)(e7.m, {
        text: eH.intl.string(eH.t.Qn47Ud),
        delay: 150,
        ariaHidden: !0,
        children: (0, t.jsx)(ew.D, {
            innerRef: i,
            "aria-label": eH.intl.string(eH.t.Qn47Ud),
            "aria-expanded": !1,
            "aria-controls": tZ,
            className: a()(t$.eg, n),
            onClick: l,
            focusProps: { offset: { right: 6 } },
            children: (0, t.jsx)(lM.V, { size: "sm", color: x.A.colors.ICON_STRONG }),
        }),
    });
}
function t0(e) {
    let { onClick: l, className: n, buttonRef: i } = e;
    return (0, t.jsx)("div", {
        className: n,
        children: (0, t.jsx)(e7.m, {
            text: eH.intl.string(eH.t.Qn47Ud),
            ariaHidden: !0,
            children: (0, t.jsx)(lw.K, {
                buttonRef: i,
                "aria-label": eH.intl.string(eH.t.Qn47Ud),
                "aria-expanded": !1,
                "aria-controls": tZ,
                icon: lM.V,
                onClick: l,
                variant: "secondary",
                size: "sm",
            }),
        }),
    });
}
function t1(e) {
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
              id: tZ,
              "aria-labelledby": tJ,
              className: a()(t$.nd, c),
              "aria-busy": o,
              children: (0, t.jsxs)("div", {
                  className: t$.l$,
                  children: [
                      (0, t.jsx)(f.A, {
                          children: (0, t.jsx)(m.H, { id: tJ, children: eH.intl.string(eH.t["L+ch00"]) }),
                      }),
                      x
                          ? (0, t.jsx)(tq, { onBack: b })
                          : (0, t.jsx)(tK, {
                                panelId: tZ,
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
var t7 = n(576260),
    t2 = n(347805),
    t3 = n(629403),
    t8 = n(612630),
    t9 = n(260598);
function t6(e) {
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
        C = null != h && (l ? r : n).length > h ? eH.intl.formatToPlainString(eH.t.ICT5S6, { maxLength: h }) : void 0,
        N = l && r !== n,
        y = C ?? (N ? void 0 : j),
        E = i.useCallback((e) => {
            let l = e.currentTarget;
            l.setSelectionRange(l.value.length, l.value.length);
        }, []);
    return (0, t.jsx)(e5, {
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
        input: (0, t.jsx)(t9.f, {
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
var t5 = n(673451);
function t4(e) {
    let { userId: l, className: n, autoFocus: r = !1, onUpdate: a } = e,
        o = (0, s.bG)([G.A], () => G.A.hidePersonalInformation),
        { loading: d, note: u } = (0, t8.A)(l),
        [c, g] = i.useState(),
        [f, m] = i.useState(),
        p = c ?? u,
        x = i.useCallback(
            async (e) => {
                if ((u ?? "") !== e) {
                    m(void 0), g(e), a?.();
                    try {
                        await t3.A.updateNote(l, e);
                    } catch {
                        m(eH.intl.string(eH.t.F8FvUy));
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
            ? (0, t.jsx)(eN.E, { variant: "text-sm/normal", color: "text-default", className: t5.t, children: p })
            : null;
    return (0, t.jsx)(t6, {
        ...h,
        className: n,
        preview: j,
        editButtonAriaLabel: eH.intl.string(eH.t.PbMNh2),
        label: eH.intl.string(eH.t.PbMNh2),
        placeholder: v ? eH.intl.string(eH.t["WLKx/9"]) : eH.intl.string(eH.t.VBhOe2),
        maxLength: q.T7x,
        rows: 3,
        disabled: v,
        error: f,
    });
}
var ie = n(83013),
    il = n(518477),
    it = n(77085);
function ii(e) {
    let { userId: l } = e,
        n = (0, eh.g)(),
        { trackUserProfileAction: i } = (0, U.NJ)(),
        r = (0, z.X)("UserProfileModalV2NotesSection"),
        a = r ? t4 : t2.A;
    return (0, t.jsx)(ie.A, {
        heading: eH.intl.string(eH.t["mQKv+v"]),
        scrollTargetId: il.bk.NOTE,
        children: (0, t.jsx)(a, {
            userId: l,
            className: r ? it.N : it.w,
            autoFocus: n === il.bk.NOTE,
            onUpdate: () => i({ action: "SET_NOTE" }),
        }),
    });
}
var ir = n(123292),
    ia = n(921701),
    is = n(861173);
function io(e) {
    let { icon: l, message: n, actionLabel: r, onAction: s, actionDisabled: o, type: d, autoFocus: u } = e,
        c = i.useRef(null);
    return (
        i.useEffect(() => {
            u && c.current?.focus();
        }, [u]),
        (0, t.jsx)("div", {
            className: ia.kL,
            children: (0, t.jsxs)("div", {
                className: a()(is.oR, ia.Qs),
                "data-type": d,
                children: [
                    (0, t.jsx)("div", { className: ia.Kk, children: l }),
                    (0, t.jsx)(eN.E, { color: "text-strong", variant: "text-sm/semibold", children: n }),
                    null != r &&
                        null != s &&
                        (0, t.jsx)("div", {
                            className: ia.hP,
                            children: (0, t.jsx)(ir.Q, {
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
var id = n(765178),
    iu = n(346055),
    ic = n(289873),
    ig = n(984180);
function im(e) {
    let { showScrim: l, showLoadingSpinner: n, className: r, children: s } = e;
    i.useEffect(() => {
        n && id.O.announce(eH.intl.string(eH.t["QR+vBP"]));
    }, [n]);
    let o = i.useRef(null);
    return (
        (0, iu.f)(o, l),
        (0, t.jsxs)(t.Fragment, {
            children: [
                (0, t.jsx)("div", {
                    className: a()(ig.f, l && ig.z),
                    children: n && (0, t.jsx)(ic.y, { type: ic.t.SPINNING_CIRCLE_SIMPLE, animated: !0 }),
                }),
                (0, t.jsx)("div", { ref: o, "aria-hidden": l || void 0, className: r, children: s }),
            ],
        })
    );
}
var ip = n(568602),
    ix = n(625494);
function iv(e) {
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
                ix._.subscribe(q.jej.SHAKE_PROFILE_MODAL, e),
                () => {
                    ix._.unsubscribe(q.jej.SHAKE_PROFILE_MODAL, e), null != a.current && clearTimeout(a.current);
                }
            );
        }, []),
        (0, t.jsx)(ip.b, { isShaking: n, intensity: 1.4, children: l })
    );
}
var ih = n(841417),
    iA = n(933832),
    ib = n(972213),
    ij = n(97483),
    iI = n(384377);
let iC = {
        [il.jM.WIDGET_ADDED]: {
            message: eH.intl.string(eH.t.fFP1Uy),
            icon: (0, t.jsx)(iA.A, { size: "sm", color: x.A.colors.STATUS_POSITIVE.css }),
        },
        [il.jM.WIDGET_REMOVED]: {
            message: eH.intl.string(eH.t.zzsK7h),
            icon: (0, t.jsx)(iA.A, { size: "sm", color: x.A.colors.STATUS_POSITIVE.css }),
        },
        [il.jM.PROFILE_SAVE_GENERIC_FAILURE]: {
            message: eH.intl.string(eH.t["84MExs"]),
            icon: (0, t.jsx)(ib.d, { size: "sm", color: x.A.colors.ICON_FEEDBACK_CRITICAL }),
            type: ij.Ck.FAILURE,
        },
        [il.jM.SOMETHING_WENT_WRONG]: {
            message: eH.intl.string(eH.t.F8FvUy),
            icon: (0, t.jsx)(ib.d, { size: "sm", color: x.A.colors.ICON_FEEDBACK_CRITICAL }),
            type: ij.Ck.FAILURE,
        },
    },
    iN = (e) => {
        let { className: l } = e,
            n = (0, iI.fu)(),
            r = (0, s.bG)([e2.Ay], () => e2.Ay.useReducedMotion),
            [a, o] = i.useState(!1),
            [u, c] = i.useState(null);
        i.useEffect(() => {
            null !== n ? (o(!0), c(iC[n]), id.O.announce(iC[n].message)) : o(!1);
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
            i.useEffect(() => () => (0, iI.XA)(null), []),
            i.useEffect(() => {
                if (a) {
                    let e = setTimeout(() => {
                        (0, iI.XA)(null);
                    }, 2e3);
                    return () => clearTimeout(e);
                }
            }, [a]),
            (0, t.jsx)(t.Fragment, {
                children: g(
                    (e, n) =>
                        n &&
                        null !== u &&
                        (0, t.jsx)(n2.animated.div, { className: l, style: e, children: (0, t.jsx)(io, { ...u }) }),
                ),
            })
        );
    };
var iy = n(297413),
    iE = n(878555),
    iP = n(826673),
    ik = n(576705),
    iR = n(292666);
function iS(e) {
    let { isEditing: l, inputRef: n, ...t } = e8(e);
    return (
        i.useEffect(() => {
            l && null != n.current && n.current.setSelectionRange(n.current.value.length, n.current.value.length);
        }, [l, n]),
        { isEditing: l, inputRef: n, ...t }
    );
}
function iT(e) {
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
    return (0, t.jsx)(iR.k, {
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
function iD(e) {
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
                ? eH.intl.formatToPlainString(eH.t.ICT5S6, { maxLength: h })
                : void 0) ?? A,
        y = "compact" === v ? { variant: "compact" } : { variant: "default", trailing: j };
    return (0, t.jsx)(e5, {
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
        input: (0, t.jsx)(iT, {
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
var i_ = n(35783);
function iL(e) {
    return null == e || "" === e ? void 0 : e;
}
function iO(e) {
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
        C = (0, lq.ux)("UserProfileModalV2EditableDisplayName"),
        { canChangeDisplayName: N, permissionsLoaded: y } = (0, s.cf)([ik.A, M.A], () => {
            if (!A || null == b) return { canChangeDisplayName: !0, permissionsLoaded: !0 };
            let e = M.A.getGuild(b);
            return null == e
                ? { canChangeDisplayName: !1, permissionsLoaded: !1 }
                : {
                      canChangeDisplayName: ik.A.can(q.xBc.CHANGE_NICKNAME, e) || ik.A.can(q.xBc.MANAGE_NICKNAMES, e),
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
        (f = iL(c) ?? iL(r) ?? p.username),
        (m = iL(c) ?? p.username),
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
        R = iS({ value: E, onCommit: k, disabled: !N }),
        { isEditing: S, handleCommit: T } = R,
        D = (0, s.bG)([eg.A], () => eg.A.getErrors(b ?? null)),
        _ = (0, eZ.EC)(b ?? null),
        L = A ? D.nick?.[0] : D.global_name?.[0],
        O = _?.nick?.[0],
        w = (0, s.bG)([eg.A], () => eg.A.getPendingChanges(b ?? null).pendingDisplayNameStyles),
        G = eH.intl.string(A ? eH.t.mq6Cg9 : eH.t.XuZU7A),
        V = A ? eH.intl.string(eH.t.YcDKr8) : p.username,
        F = eH.intl.string(A ? eH.t["g7OSZ/"] : eH.t.kyfzzc),
        U = i.useRef(null),
        B = i.useCallback(
            (e) => {
                e.stopPropagation(),
                    S && T(),
                    C &&
                        (0, iP.Dr)(lG.M.DISPLAY_NAME_STYLES_FLYWHEEL_NEW_BADGE_PROFILE_PAGE, {
                            dismissAction: tS.i.INDIRECT_ACTION,
                        }),
                    (0, nf.L)({ analyticsLocations: h, guildId: b, stackingBehavior: "stack", returnRef: U });
            },
            [S, T, h, b, C],
        ),
        W = {
            icon: lM.V,
            tooltip: eH.intl.string(eH.t.lqKKI2),
            "aria-label": eH.intl.string(eH.t["Wkg/CF"]),
            "aria-haspopup": "dialog",
            onClick: B,
            buttonRef: U,
        },
        z =
            A && !N && y
                ? (0, t.jsx)(e7.m, {
                      text: eH.intl.string(eH.t.gzjxQi),
                      children: (0, t.jsx)(ew.D, {
                          tag: "span",
                          className: i_.C,
                          children: (0, t.jsx)(lW.X, {
                              size: "refresh_sm",
                              color: x.A.colors.ICON_SUBTLE,
                              "aria-label": eH.intl.string(eH.t.VPu695),
                          }),
                      }),
                  })
                : null,
        H =
            null != P
                ? (0, t.jsx)(iE.c$, {
                      user: p,
                      guildId: b,
                      displayName: P,
                      size: "lg",
                      pendingDisplayNameStyles: w,
                      className: i_.d,
                      displayNameTrailing: z,
                  })
                : null;
    return (0, t.jsx)(iD, {
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
var iM = n(469432);
function iw(e) {
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
        m = iS({ value: c, onCommit: f }),
        { isEditing: p } = m,
        x = u?.guildId != null,
        v = null != g && g.length > 0,
        h = eH.intl.string(x ? eH.t.AXiE0i : eH.t["76Aqhl"]);
    return (0, t.jsx)(iD, {
        ...m,
        size: "compact",
        className: a()(iM.k, p && iM.J),
        preview: v ? (0, t.jsx)(iE.n2, { pronouns: g }) : null,
        editButtonAriaLabel: eH.intl.string(eH.t.h6VAO7),
        label: eH.intl.string(eH.t["rniRE+"]),
        placeholder: h,
        maxLength: q.VE5,
    });
}
var iG = n(145497),
    iV = n(685073),
    iF = n(318785),
    iU = n(534400),
    iB = n(743981),
    iW = n(724637),
    iz = n(329296);
let iH = "no-server-tag";
function iK(e) {
    let { buttonRef: l, guildId: n, guildTag: i, guildBadge: r, ...s } = e,
        o = null == i || null == n;
    return (0, t.jsx)(ew.D, {
        innerRef: l,
        className: a()(iW.L5, { [iW.wK]: o }),
        ...s,
        children: (0, t.jsxs)(eN.E, {
            variant: o ? "text-xs/normal" : "text-xs/semibold",
            color: o ? "input-placeholder-text-default" : "text-default",
            className: iW.W3,
            tag: "span",
            children: [
                o
                    ? eH.intl.string(eH.t.Pdd1nd)
                    : (0, t.jsxs)(t.Fragment, {
                          children: [
                              (0, t.jsx)(
                                  iU.Z9,
                                  {
                                      src: (0, iV.gC)(n, r, iB.Sl.SIZE_14),
                                      size: iB.Sl.SIZE_14,
                                      className: iW.Ap,
                                      "aria-hidden": !0,
                                  },
                                  (0, iV.gC)(n, r, iB.Sl.SIZE_14) ?? n,
                              ),
                              i,
                          ],
                      }),
                (0, t.jsx)(to.a, { size: "xs", color: "currentColor", className: iW.u4 }),
            ],
        }),
    });
}
function iX() {
    let e = (0, iF.b)(),
        l = i.useMemo(() => new Map(e.map((e) => [e.id, e])), [e]),
        n = (0, s.bG)([ec.default], () => {
            let e = ec.default.getCurrentUser();
            return (0, iV.Zo)(e?.primaryGuild).guildId ?? null;
        }),
        r = (0, s.bG)([eg.A], () => eg.A.getPendingChanges(null).pendingPrimaryGuildId),
        a = void 0 !== r ? r : n,
        o = null != a ? (l.get(a) ?? null) : null,
        d = o?.profile?.tag ?? null,
        u = o?.profile?.badge ?? void 0,
        c = i.useCallback(
            (e) =>
                e.id === iH
                    ? (0, t.jsx)("div", {
                          className: iz.uN,
                          children: (0, t.jsx)(eN.E, {
                              variant: "text-md/normal",
                              color: "input-placeholder-text-default",
                              className: iW.ve,
                              children: e.label,
                          }),
                      })
                    : (0, t.jsx)(tm.c, { ...e }),
            [],
        ),
        g = i.useMemo(
            () => [
                { id: iH, label: eH.intl.string(eH.t.VxdWWH), value: null },
                ...e.flatMap((e) => {
                    let l = e.profile?.tag;
                    if (null == l) return [];
                    let n = e.profile?.badge ?? void 0;
                    return [
                        {
                            id: e.id,
                            label: e.name,
                            value: e.id,
                            leading: (0, t.jsx)(iG.j, {
                                guildId: e.id,
                                guildName: e.name,
                                guildIcon: e.icon,
                                iconSize: 20,
                                animate: !1,
                            }),
                            trailing: (0, t.jsx)(iU.o9, { guildId: e.id, guildTag: l, guildBadge: n }),
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
        : (0, t.jsx)(tb, {
              options: g,
              value: a,
              onSelectionChange: f,
              label: eH.intl.string(eH.t.Pdd1nd),
              listboxClassName: iW.yt,
              renderListItem: c,
              children: (e) => {
                  let { buttonRef: l, selectButtonProps: n } = e;
                  return (0, t.jsx)(iK, { buttonRef: l, guildId: a, guildTag: d, guildBadge: u, ...n });
              },
          });
}
var iY = n(874644);
function iq(e) {
    let { user: l, displayProfile: n, nickname: i, trailing: r, onClose: s, allowEditing: o } = e;
    if (!o)
        return (0, t.jsx)(iE.Ay, {
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
        : (0, t.jsx)(iy.A, {
              user: l,
              forceUsername: !0,
              className: iY.a1,
              usernameClass: iY.eb,
              discriminatorClass: iY.sw,
              hideBotTag: !0,
          });
    return (0, t.jsxs)("div", {
        children: [
            (0, t.jsx)(iO, { displayProfile: n, user: l }),
            (0, t.jsxs)("div", {
                className: a()(iY.AK, iY.j6),
                children: [d, (0, t.jsx)(iE.Ce, {}), (0, t.jsx)(iw, { displayProfile: n }), (0, t.jsx)(iX, {}), r],
            }),
        ],
    });
}
var i$ = n(97808),
    iZ = n(980707),
    iJ = n(477782),
    iQ = n(22231),
    i0 = n(601255),
    i1 = n(562819),
    i7 = n(19575),
    i2 = n(106106),
    i3 = n(338165);
let i8 = i7.Ay.getEnableHardwareAcceleration() ? i$.Js : i$.eu;
function i9(e) {
    let { onMenuClose: l, items: n, ...i } = e;
    return (0, t.jsx)(iZ.W, {
        ...i,
        "data-menu-migrated": !0,
        navId: "avatar-edit-context",
        onClose: l,
        onSelect: l,
        "aria-label": eH.intl.string(eH.t.YAgq3W),
        children: (0, t.jsx)(iJ.rX, { children: n }),
    });
}
function i6(e) {
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
                x = eJ.Ay.canUsePremiumProfileCustomization(l),
                v = x || null == n,
                h = x || null == n,
                A = (0, s.bG)([M.A], () => (null != n ? M.A.getGuild(n) : null)),
                b = (0, eo.a4)({ user: l }),
                j = (0, eo.a4)({ user: l, guildId: n ?? void 0 }),
                { pendingAvatarDecoration: C } = (0, eo.CP)(n ?? void 0),
                N = void 0 !== C,
                y = null != (0, i0.A)(N ? C : j) && (N ? null != C : null != j),
                E = u && null != b,
                P = i.useCallback(() => {
                    r(),
                        (0, lZ.XD)({
                            uploadType: nt.HL.AVATAR,
                            analyticsSource: o,
                            guildId: n ?? void 0,
                            stackingBehavior: "stack",
                            returnRef: a,
                        });
                }, [r, o, n, a]),
                k = i.useCallback(() => {
                    r(),
                        (0, i1.L)({
                            analyticsLocations: d,
                            guild: A ?? void 0,
                            stackingBehavior: "stack",
                            returnRef: a,
                        });
                }, [r, d, A, a]),
                R = i.useCallback(() => {
                    r(),
                        (0, lZ.rM)(null, f, (e) => (0, eQ.p)({ guildId: n ?? void 0, avatar: e })),
                        (0, eo.WU)(p ? "reset" : "remove");
                }, [r, n, f, p]),
                S = i.useCallback(() => {
                    r(), (0, eQ.p)({ guildId: n ?? void 0, avatarDecoration: null });
                }, [r, n]);
            return i.useMemo(() => {
                let e = [];
                return (
                    v &&
                        e.push(
                            (0, t.jsx)(
                                iJ.Dr,
                                { id: "change-avatar", label: eH.intl.string(eH.t["4OynCD"]), action: P },
                                "change-avatar",
                            ),
                        ),
                    h &&
                        e.push(
                            (0, t.jsx)(
                                iJ.Dr,
                                { id: "change-decoration", label: eH.intl.string(eH.t.HykynS), action: k },
                                "change-decoration",
                            ),
                        ),
                    v &&
                        m &&
                        e.push(
                            p
                                ? (0, t.jsx)(
                                      iJ.Dr,
                                      {
                                          id: "reset-avatar",
                                          color: "danger",
                                          label: eH.intl.string(eH.t.TDjKDm),
                                          action: R,
                                      },
                                      "reset-avatar",
                                  )
                                : (0, t.jsx)(
                                      iJ.Dr,
                                      {
                                          id: "remove-avatar",
                                          color: "danger",
                                          label: eH.intl.string(eH.t.twB3fz),
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
                                      iJ.Dr,
                                      {
                                          id: "reset-decoration",
                                          color: "danger",
                                          label: eH.intl.string(eH.t["2u5yu0"]),
                                          action: S,
                                      },
                                      "reset-decoration",
                                  )
                                : (0, t.jsx)(
                                      iJ.Dr,
                                      {
                                          id: "remove-decoration",
                                          color: "danger",
                                          label: eH.intl.string(eH.t["9rx5GO"]),
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
              className: a()(i2.my, i2.vk, i3.kL, { [i3.MO]: d }),
              onMouseDown: (e) => {
                  c.current?.contains(e.target) || u(!0);
              },
              children: [
                  (0, t.jsx)(i8, { ...r, imageClassName: a()(i2.Lw, i3.HU) }),
                  (0, t.jsx)(l6.Y, {
                      targetElementRef: c,
                      shouldShow: d,
                      animation: l6.Y.Animation.NONE,
                      position: "right",
                      align: "top",
                      onRequestClose: f,
                      renderPopout: (e) => (0, t.jsx)(i9, { ...e, items: m, onMenuClose: f }),
                      children: (e) =>
                          (0, t.jsx)("div", {
                              ref: c,
                              className: i3.r9,
                              children: (0, t.jsx)(lw.K, {
                                  ...e,
                                  buttonRef: g,
                                  variant: "overlay-secondary",
                                  size: "sm",
                                  icon: iQ.R,
                                  "aria-label": eH.intl.string(eH.t.YAgq3W),
                                  onClick: (e) => {
                                      e.stopPropagation(), u((e) => !e);
                                  },
                              }),
                          }),
                  }),
              ],
          });
}
var i5 = n(976726);
function i4(e) {
    let { onMenuClose: l, items: n, ...i } = e;
    return (0, t.jsx)(iZ.W, {
        ...i,
        "data-menu-migrated": !0,
        navId: "banner-edit-context",
        onClose: l,
        onSelect: l,
        "aria-label": eH.intl.string(eH.t.FzU73A),
        children: (0, t.jsx)(iJ.rX, { children: n }),
    });
}
function re(e) {
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
                f = (0, lX.sk)("UserProfileModalV2EditableBanner"),
                m = eJ.Ay.canUsePremiumProfileCustomization(l),
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
                        (0, lZ.XD)({
                            uploadType: nt.HL.BANNER,
                            analyticsSource: o,
                            guildId: n ?? void 0,
                            stackingBehavior: "stack",
                            returnRef: a,
                        });
                }, [r, o, n, a]),
                G = i.useCallback(() => {
                    r(),
                        (0, nE.W)({
                            analyticsLocations: d,
                            guild: null != n ? (M.A.getGuild(n) ?? void 0) : void 0,
                            initialSelectedEffect: u,
                            stackingBehavior: "stack",
                            returnRef: a,
                        });
                }, [r, d, n, u, a]),
                V = i.useCallback(() => {
                    r(), (0, lZ.rM)(null, C, (e) => (0, eQ.p)({ guildId: n ?? void 0, banner: e }));
                }, [r, n, C]),
                F = i.useCallback(() => {
                    r(), (0, eQ.p)({ guildId: n ?? void 0, profileEffect: null });
                }, [r, n]),
                U = i.useCallback(() => {
                    r(),
                        (0, nB.w)({
                            analyticsLocations: d,
                            guild: null != n ? (M.A.getGuild(n) ?? void 0) : void 0,
                            initialSelectedProfileFrame: O,
                            stackingBehavior: "stack",
                            returnRef: a,
                        });
                }, [r, d, n, O, a]),
                B = i.useCallback(() => {
                    r(), (0, eQ.p)({ guildId: n ?? void 0, profileFrame: null });
                }, [r, n]);
            return i.useMemo(() => {
                let e = [];
                return (
                    m &&
                        e.push(
                            (0, t.jsx)(
                                iJ.Dr,
                                { id: "change-banner", label: eH.intl.string(eH.t.N0bC3P), action: w },
                                "change-banner",
                            ),
                        ),
                    x &&
                        e.push(
                            (0, t.jsx)(
                                iJ.Dr,
                                { id: "change-effect", label: eH.intl.string(eH.t["/6nv6N"]), action: G },
                                "change-effect",
                            ),
                        ),
                    v &&
                        e.push(
                            (0, t.jsx)(
                                iJ.Dr,
                                { id: "change-frame", label: eH.intl.string(eH.t["oTSa/q"]), action: U },
                                "change-frame",
                            ),
                        ),
                    m &&
                        k &&
                        e.push(
                            R
                                ? (0, t.jsx)(
                                      iJ.Dr,
                                      {
                                          id: "reset-banner",
                                          color: "danger",
                                          label: eH.intl.string(eH.t.jHlJNS),
                                          action: V,
                                      },
                                      "reset-banner",
                                  )
                                : (0, t.jsx)(
                                      iJ.Dr,
                                      {
                                          id: "remove-banner",
                                          color: "danger",
                                          label: eH.intl.string(eH.t.tT9n7D),
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
                                      iJ.Dr,
                                      {
                                          id: "reset-effect",
                                          color: "danger",
                                          label: eH.intl.string(eH.t.Lb7lu9),
                                          action: F,
                                      },
                                      "reset-effect",
                                  )
                                : (0, t.jsx)(
                                      iJ.Dr,
                                      {
                                          id: "remove-effect",
                                          color: "danger",
                                          label: eH.intl.string(eH.t.zUOlT6),
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
                                      iJ.Dr,
                                      {
                                          id: "reset-frame",
                                          color: "danger",
                                          label: eH.intl.string(eH.t.A0pzWn),
                                          action: B,
                                      },
                                      "reset-frame",
                                  )
                                : (0, t.jsx)(
                                      iJ.Dr,
                                      {
                                          id: "remove-frame",
                                          color: "danger",
                                          label: eH.intl.string(eH.t["8DfADq"]),
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
              className: a()(i5.kL, { [i5.MO]: r }),
              onMouseDown: (e) => {
                  d.current?.contains(e.target) || o(!0);
              },
              children: [
                  (0, t.jsx)(eI.A, { ...e, className: i5.Pr }),
                  (0, t.jsx)(l6.Y, {
                      targetElementRef: d,
                      shouldShow: r,
                      animation: l6.Y.Animation.NONE,
                      position: "right",
                      align: "top",
                      onRequestClose: c,
                      renderPopout: (e) => (0, t.jsx)(i4, { ...e, items: g, onMenuClose: c }),
                      children: (e) =>
                          (0, t.jsx)("div", {
                              ref: d,
                              className: i5.r9,
                              children: (0, t.jsx)(lw.K, {
                                  ...e,
                                  buttonRef: u,
                                  variant: "overlay-secondary",
                                  size: "sm",
                                  icon: iQ.R,
                                  "aria-label": eH.intl.string(eH.t.FzU73A),
                                  onClick: (e) => {
                                      e.stopPropagation(), o((e) => !e);
                                  },
                              }),
                          }),
                  }),
              ],
          });
}
var rl = n(777480),
    rn = n(107563),
    rt = n(570287);
n(938796);
var ri = n(913453),
    rr = n(667049),
    ra = n(837531),
    rs = n(186272),
    ro = n(645625),
    rd = n(337796);
let ru = (e) => e * (2 - e),
    rc = { "compact-sm": { avatarOffsetX: 16 }, "compact-xs": { avatarSize: o._3.SIZE_96, avatarOffsetX: 16 } };
function rg(e) {
    let { type: l, anchor: n } = e;
    return "staple" !== l || "bottom" !== n;
}
function rf(e) {
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
        : (0, t.jsx)("div", { className: ro.backgroundImage, style: { backgroundImage: `url(${o})` } });
}
function rm(e) {
    let { displayProfile: l, profileEffectOverride: n, isHovering: r } = e,
        a = void 0 !== n ? n : l?.profileEffect,
        s = i.useSyncExternalStore(
            (e) => (nR.add(e), () => nR.delete(e)),
            () => nS,
        );
    return null == a ? null : (0, t.jsx)(C.A, { skuId: a.skuId, isHovering: r, restartKey: s });
}
function rp(e) {
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
    let H = null != B ? rc[B] : void 0,
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
        ep = R ? re : eI.A,
        ex = R ? i6 : eb.A;
    return (0, t.jsxs)("main", {
        className: a()(ro.profile, null != B && ro[B]),
        ref: V,
        "aria-busy": O,
        children: [
            (0, t.jsxs)("div", {
                className: ro.profileHeader,
                children: [
                    (0, t.jsx)("div", {
                        className: ro.profileHeaderBannerContainer,
                        children: (0, t.jsx)(ep, {
                            user: o,
                            displayProfile: p,
                            guildId: g,
                            themeType: ef.d.MODAL_V2,
                            specOverrides: H,
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
                        specOverrides: H,
                        avatarDecorationOverride: j,
                        avatarOverride: I,
                    }),
                    (0, t.jsx)(eL.A, {
                        user: o,
                        guildId: g,
                        channelId: m,
                        themeType: ef.d.MODAL_V2,
                        hasEntered: v,
                        prompt: M ? $ : null,
                    }),
                ],
            }),
            (0, t.jsxs)(u.Ip, {
                fade: !0,
                className: ro.profileBody,
                children: [
                    (0, t.jsx)(iq, {
                        user: o,
                        displayProfile: p,
                        nickname: x,
                        trailing: (0, t.jsx)(ej.A, { displayProfile: p, themeType: ef.d.MODAL_V2, onClose: b }),
                        onClose: b,
                        allowEditing: R,
                    }),
                    Z === q.eA$.PENDING_INCOMING &&
                        (0, t.jsx)(e_.A.Overlay, {
                            className: ro.profileOverlay,
                            children: (0, t.jsx)(eP.A, {
                                user: o,
                                applicationId: ei,
                                guildId: p?.guildId ?? void 0,
                                channelId: m,
                                className: ro.profileBanner,
                            }),
                        }),
                    eo.map((e) => {
                        let { applicationId: l } = e;
                        return (0, t.jsx)(
                            e_.A.Overlay,
                            {
                                className: ro.profileOverlay,
                                children: (0, t.jsx)(eP.A, {
                                    user: o,
                                    guildId: p?.guildId ?? void 0,
                                    channelId: m,
                                    isGameRelationship: !0,
                                    applicationId: l,
                                    className: ro.profileBanner,
                                }),
                            },
                            l,
                        );
                    }),
                    o.isProvisional &&
                        (0, t.jsx)(e_.A.Overlay, {
                            className: ro.profileOverlay,
                            children: (0, t.jsx)(ie.A, {
                                heading: eH.intl.string(eH.t.Iyka0U),
                                headingVariant: "text-md/semibold",
                                headingIcon: (0, t.jsx)(c.E, { size: "xs", color: "currentColor" }),
                                className: ro.profileBanner,
                                children: (0, t.jsx)(L.T, { userId: o.id, variant: "text-sm/normal" }),
                            }),
                        }),
                    (0, t.jsx)(eD.A, { user: o, className: ro.profileBanner }),
                    p?.private &&
                        (0, t.jsx)(e_.A.Overlay, {
                            className: ro.profileOverlay,
                            children: (0, t.jsx)(eT.A, { username: x }),
                        }),
                    (0, t.jsx)("div", {
                        className: ro.profileButtons,
                        children: (0, t.jsx)(lx, {
                            user: o,
                            currentUser: d,
                            guildId: g,
                            originGuildId: f,
                            channelId: m,
                            displayProfile: p,
                            relationshipType: Z,
                            onClose: b,
                        }),
                    }),
                    M && (0, t.jsx)(eC.A, { isPremiumUser: (0, F.ki)(d) }),
                    !ea && (0, t.jsx)(li, { displayProfile: p, isEditable: R }),
                    es.length > 0 &&
                        (0, t.jsx)(ie.A, {
                            heading: eH.intl.string(eH.t["Uv/eTx"]),
                            children: (0, t.jsx)(eE.A, { applicationIds: es }),
                        }),
                    (0, t.jsx)(ie.A, {
                        heading: eH.intl.string(eH.t.a6XYD9),
                        children: (0, t.jsx)(eR.A, { userId: o.id, guildId: p?.guildId, tooltipDelay: il.In }),
                    }),
                    null != er &&
                        (0, t.jsx)(ie.A, {
                            heading: eH.intl.string(eH.t.wlTO8v),
                            children: (0, t.jsx)(ey, { friendsSinceDate: er }),
                        }),
                    p?.guildId != null &&
                        (0, t.jsx)(eO.A, {
                            userId: o.id,
                            guildId: p.guildId,
                            className: ro.profileRolesSection,
                            headingVariant: "text-xs/medium",
                            headingColor: "text-subtle",
                        }),
                    !ea &&
                        (R || eg) &&
                        (0, t.jsx)(ie.A, {
                            heading: eH.intl.string(eH.t["3fe7U5"]),
                            scrollTargetId: il.bk.CONNECTIONS,
                            children: (0, t.jsx)(lO, {
                                applicationIdentities: ed,
                                connections: eu,
                                userId: o.id,
                                allowEditing: R,
                                className: ro.profileAppConnections,
                            }),
                        }),
                    !ea &&
                        em &&
                        (0, t.jsx)(ie.A, {
                            heading: eH.intl.string(eH.t.PHjkRE),
                            scrollTargetId: il.bk.APPS,
                            children: (0, t.jsx)(eY, {
                                applicationRoleConnections: ec,
                                onClose: b,
                                className: ro.profileAppConnections,
                            }),
                        }),
                    (0, t.jsx)(ii, { userId: o.id }),
                ],
            }),
            (0, t.jsx)(rm, { displayProfile: p, profileEffectOverride: y, isHovering: U }),
            null != E && (0, t.jsx)(P.A, { frame: E, filterLayer: rg, fadeIn: k }),
        ],
    });
}
function rx(e) {
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
function rv(e) {
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
            openedAt: _,
            onClose: L,
            sourceAnalyticsLocations: F = [],
            themeContainerClassName: K,
        } = e,
        X = l.id === n.id,
        Y = tR(L, X),
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
                r = (0, d.p)(e, {
                    keys: (e) => (e ? "panel" : "empty"),
                    from: { progress: 0 },
                    enter: { progress: 1 },
                    leave: { progress: 0 },
                    config: { duration: 300, easing: ru },
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
        eV = ea && !eR,
        eF = ea && (!eR || eT),
        { defaultWishlistId: eU } = (0, s.cf)([W.A], () => ({ defaultWishlistId: W.A.getFirstWishlistId(l.id) }));
    (0, O.fw)({ wishlistId: eU, userId: l.id });
    let eB = (0, eA.fC)(),
        eW = ev && (!ea || !Z),
        ez = ea && ee,
        eK = $ !== q || ez || null != eB.interactionType,
        eX = (function (e) {
            let l,
                n,
                t,
                { user: i, currentUser: r } = e,
                { mutualFriendsCount: a, mutualGuilds: o } = (0, ri.A)(i),
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
                c = (0, rr.A)(i.id),
                g = (0, rt.A)(i.id),
                f = [],
                m = i.id === r?.id,
                p = (0, ei.A)(i.id),
                x = W.A.getFirstWishlistId(i.id),
                v = null != x,
                h = v ? W.A.getWishlistSettings(i.id, x) : null,
                A = (v ? rn.A.getWishlistItems(x) : []).length > 0,
                b = c.length > 0;
            (p || b) && f.push({ text: eH.intl.string(eH.t.laViwx), section: il.RP.WIDGETS }),
                f.push({ text: eH.intl.string(eH.t.chq59f), section: il.RP.ACTIVITY });
            let j = !1 === i.nsfwAllowed,
                I = w.A.isFriend(i.id),
                C = h?.visibility === rl.a.PUBLIC;
            return (
                (m || (!m && A && C && g && (!j || (j && I)))) &&
                    f.push({ text: eH.intl.string(eH.t["7lZ31J"]), section: il.RP.WISHLIST }),
                i.id !== r?.id &&
                    u &&
                    (f.push({ text: (0, ra.A)(a), section: il.RP.MUTUAL_FRIENDS }),
                    f.push({ text: (0, rs.A)(d), section: il.RP.MUTUAL_GUILDS })),
                f
            );
        })({ user: l, currentUser: n }),
        { analyticsLocations: eY } = (0, I.Ay)([...F, j.A.USER_PROFILE_MODAL_V2]),
        eq = (0, U.pb)({
            layout: "MODAL_V2",
            userId: l.id,
            sourceSessionId: C,
            guildId: q,
            channelId: u,
            messageId: c,
            roleId: A,
        }),
        e$ = i.useCallback(() => {
            (0, B.Wn)({ analyticsLocations: eY, ...eq, action: il.pt.SHOW_STYLES_PANEL }), eL();
        }, [eY, eq, eL]),
        eZ = i.useCallback(() => {
            (0, B.Wn)({ analyticsLocations: eY, ...eq, action: il.pt.HIDE_STYLES_PANEL }), eO();
        }, [eY, eq, eO]),
        eJ = (0, H.Ay)(l.id, q),
        eQ = void 0 !== eP ? eP?.skuId : eJ?.profileFrame?.skuId,
        e0 = (0, y.A)(eQ, "UserProfileModalV2"),
        e1 = (0, N.A)(eQ),
        { profileFrameStyle: e7, profileFrameClassName: e2 } = (0, k.A)(eQ);
    (0, E.A)({ skuId: eJ?.profileFrame?.skuId, openedAt: _, context: eq, analyticsLocations: eY });
    let e3 = V.Ay.useName(eJ?.guildId, u, l),
        e8 = (0, R.GV)(),
        e9 = (0, s.bG)([M.A], () => (null != q ? M.A.getGuild(q) : null)),
        e6 = X
            ? null != e9
                ? eH.intl.formatToPlainString(eH.t.M7OhOF, { guildName: e9.name })
                : eH.intl.string(eH.t.egQPgM)
            : eH.intl.format(eH.t.KRe1Fk, { name: e3 });
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
                    children: (0, t.jsxs)(g.EO, {
                        "data-migration-pending": !0,
                        hideShadow: !0,
                        className: a()(rd.zr, { [rd.QF]: eJ?.private === !0 }),
                        transitionState: T,
                        "aria-labelledby": e8,
                        parentComponent: "UserProfileModalV2",
                        children: [
                            (0, t.jsx)(iv, {
                                children: (0, t.jsxs)("div", {
                                    className: a()(ro.layoutContainer, e2, {
                                        [ro.editingPanelEnabled]: ea,
                                        [ro.editingPanelExpanded]: ea && eR,
                                        [ro.isAnimating]: eT,
                                    }),
                                    style: e7,
                                    children: [
                                        (0, t.jsxs)(rx, {
                                            user: l,
                                            displayProfile: eJ,
                                            pendingThemeColors: ej,
                                            children: [
                                                (0, t.jsxs)("div", {
                                                    className: rd.Oo,
                                                    children: [
                                                        (0, t.jsx)(lv.A, { onClose: Y }),
                                                        (0, t.jsx)(f.A, {
                                                            children: (0, t.jsx)(m.H, { id: e8, children: e6 }),
                                                        }),
                                                        eF &&
                                                            (0, t.jsx)(t0, {
                                                                buttonRef: eM,
                                                                onClick: e$,
                                                                className: ro.editingPanelExpandButtonCompact,
                                                            }),
                                                    ],
                                                }),
                                                eV &&
                                                    (0, t.jsx)("div", {
                                                        className: ro.editingPanelExpandButtonDefaultContainer,
                                                        children: (0, t.jsx)(tQ, {
                                                            innerRef: ew,
                                                            onClick: e$,
                                                            className: ro.editingPanelExpandButtonDefault,
                                                        }),
                                                    }),
                                            ],
                                        }),
                                        (0, t.jsxs)(m.F, {
                                            children: [
                                                ea &&
                                                    eD((e, l) =>
                                                        l
                                                            ? (0, t.jsx)(t1, {
                                                                  className: a()(ro.editingPanel, {
                                                                      [ro.isExpanded]: eR,
                                                                  }),
                                                                  selectedGuildId: $,
                                                                  originGuildId: o,
                                                                  onSelectGuildId: J,
                                                                  onClose: eZ,
                                                                  collapseButtonRef: eG,
                                                                  isLoading: Z,
                                                                  isEditingDisabled: ee,
                                                              })
                                                            : null,
                                                    ),
                                                (0, t.jsxs)(e_.A, {
                                                    className: a()(K, rd.A7, ro.profileContentOuter),
                                                    innerClassName: ro.profileContentInner,
                                                    user: l,
                                                    displayProfile: eJ,
                                                    themeType: ef.d.MODAL_V2,
                                                    pendingThemeColors: ej,
                                                    isPrivate: eJ?.private === !0,
                                                    children: [
                                                        (0, t.jsx)(rf, { displayProfile: eJ, pendingBanner: eN }),
                                                        eJ?.private === !0 && (0, t.jsx)(eS.A, {}),
                                                        !ev && (0, t.jsx)(iN, { className: ro.noticeContainer }),
                                                        eW &&
                                                            (0, t.jsx)("div", {
                                                                className: ro.noticeContainer,
                                                                role: "alert",
                                                                children: (0, t.jsx)(io, {
                                                                    icon: (0, t.jsx)(p.i, {
                                                                        size: "sm",
                                                                        color: x.A.colors.ICON_FEEDBACK_WARNING,
                                                                    }),
                                                                    message: eH.intl.string(eH.t.L9wE7H),
                                                                    actionLabel:
                                                                        null != Q
                                                                            ? eH.intl.string(eH.t["5911Lb"])
                                                                            : void 0,
                                                                    onAction: Q,
                                                                    actionDisabled: !ea && Z,
                                                                    autoFocus: !0,
                                                                }),
                                                            }),
                                                        (0, t.jsx)("div", {
                                                            className: ro.profileCardToastContainer,
                                                            children: (0, t.jsx)(ek.A, { userId: l.id, onClose: Y }),
                                                        }),
                                                        (0, t.jsxs)(im, {
                                                            showScrim: eK,
                                                            showLoadingSpinner: Z,
                                                            className: ro.profileContentColumns,
                                                            children: [
                                                                (0, t.jsx)(rp, {
                                                                    user: l,
                                                                    currentUser: n,
                                                                    guildId: q,
                                                                    channelId: u,
                                                                    displayProfile: eJ,
                                                                    nickname: e3,
                                                                    originGuildId: o,
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
                                                                (0, t.jsx)(ih.A, {
                                                                    user: l,
                                                                    currentUser: n,
                                                                    displayProfile: eJ,
                                                                    guildId: q,
                                                                    channelId: u,
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
                            (0, t.jsx)(t7.A, { userId: l.id, guildId: q, className: ro.pendingChangesToolbar }),
                        ],
                    }),
                }),
            }),
        }),
    });
}
