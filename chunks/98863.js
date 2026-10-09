(n.r(t), n.d(t, { default: () => nP }));
var l = n(477900),
    i = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(333007),
    o = n(43990),
    c = n(559106),
    u = n(604681);
n(183994);
var d = n(761929),
    x = n(713517),
    h = n(386467),
    m = n(97469),
    f = n(625494),
    g = n(925166);
let p = i.createContext({ collapsed: !1, hovered: !1 });
var j = n(605117),
    C = n(17928),
    v = n(331322),
    I = n(866665),
    N = n(939249),
    A = n(862328),
    b = n(812993),
    R = n(834730),
    E = n(881636),
    S = n(661531),
    k = n(778712),
    y = n(97808),
    w = n(954376),
    P = n(454932),
    D = n(287809),
    M = n(902902);
function G() {
    return (0, C.cf)([M.A], () => ({ incoming: M.A.getIncomingRequests(), outgoing: M.A.getOutgoingRequests() }));
}
var _ = n(858899),
    L = n(305866),
    T = n(707554),
    F = n(408278),
    z = n(173936),
    O = n(95477),
    B = n(103557),
    U = n(821609),
    H = n(922016),
    V = n(376728),
    Z = n(279208),
    W = n(189883),
    $ = n(237309),
    q = n(957565),
    X = n(297264),
    Y = n(625903),
    Q = n(689175),
    K = n(559647),
    J = n(428678),
    ee = n(789645),
    et = n(933832),
    en = n(39623),
    el = n(123292),
    ei = n(216964),
    es = n(769015),
    er = n(640708),
    ea = n(22212),
    eo = n(409978),
    ec = n(390848),
    eu = n(780964),
    ed = n(766075),
    ex = n(427262),
    eh = n(652215),
    em = n(682530),
    ef = n(660183),
    eg = n(788868);
let ep = "Friends Sidebar Add Friend Popout";
function ej() {
    let { incoming: e, outgoing: t } = G(),
        n = i.useMemo(() => [...e, ...t], [e, t]);
    return ((0, eo.y)(n), 0 === n.length)
        ? null
        : (0, l.jsxs)(v.B, {
              gap: 4,
              padding: { top: 12, bottom: 16, left: 16, right: 8 },
              className: eg.uW,
              children: [
                  (0, l.jsxs)(v.B, {
                      direction: "horizontal",
                      align: "center",
                      justify: "space-between",
                      padding: { left: 8, right: 8 },
                      className: eg.UP,
                      children: [
                          (0, l.jsxs)(v.B, {
                              direction: "horizontal",
                              align: "center",
                              gap: 8,
                              fullWidth: !1,
                              children: [
                                  (0, l.jsx)(X.D, {
                                      variant: "text-sm/medium",
                                      color: "text-muted",
                                      children: ef.intl.string(ef.t.fyA115),
                                  }),
                                  e.length > 0 && (0, l.jsx)(b.hV, { count: e.length }),
                              ],
                          }),
                          (0, l.jsx)(I.m, {
                              text: ef.intl.string(em.default["2vock0"]),
                              position: "bottom",
                              children: (0, l.jsx)(F.K, {
                                  icon: Y.SettingsIcon,
                                  size: "sm",
                                  variant: "icon-only",
                                  "aria-label": ef.intl.string(em.default["2vock0"]),
                                  onClick: () => (0, ed.openUserSettings)(eu.X.FRIEND_REQUESTS_CATEGORY),
                              }),
                          }),
                      ],
                  }),
                  (0, l.jsxs)(Q.Ch, {
                      className: eg.Ge,
                      disableFocusRingScope: !0,
                      children: [
                          t.length > 0 && (0, l.jsx)(eC, { outgoing: t }),
                          e.map((e) => (0, l.jsx)(eA, { request: e }, e.key)),
                      ],
                  }),
              ],
          });
}
function eC(e) {
    let { outgoing: t } = e,
        n = i.useRef(null),
        [s, a] = i.useState(!1);
    return (0, l.jsx)(H.Y, {
        targetElementRef: n,
        shouldShow: s,
        onRequestClose: () => a(!1),
        position: "right",
        align: "top",
        renderPopout: () => (0, l.jsx)(ev, { outgoing: t, returnRef: n }),
        children: () =>
            (0, l.jsxs)(N.D, {
                innerRef: n,
                className: r()(eg.nM, eg.b8, eg.d, { [eg.$F]: s }),
                "aria-expanded": s,
                onClick: () => a(!s),
                children: [
                    (0, l.jsx)("div", {
                        className: eg.iE,
                        children: (0, l.jsx)(K.SendMessageIcon, { size: "sm", color: S.A.colors.ICON_DEFAULT }),
                    }),
                    (0, l.jsxs)("div", {
                        className: eg.Qq,
                        children: [
                            (0, l.jsx)(R.E, {
                                variant: "text-md/medium",
                                color: "text-default",
                                lineClamp: 1,
                                children: ef.intl.string(em.default.JHcSBI),
                            }),
                            (0, l.jsx)(R.E, {
                                variant: "text-xs/medium",
                                color: "text-muted",
                                lineClamp: 1,
                                children: ef.intl.format(em.default.PY1iDb, { count: t.length }),
                            }),
                        ],
                    }),
                    (0, l.jsx)("div", {
                        className: eg.ai,
                        children: (0, l.jsx)(E.u, { size: "sm", color: S.A.colors.ICON_MUTED }),
                    }),
                ],
            }),
    });
}
function ev(e) {
    let { outgoing: t, returnRef: n } = e;
    return (0, l.jsxs)(L.l, {
        className: eg.YM,
        returnRef: n,
        "aria-label": ef.intl.string(em.default.JHcSBI),
        children: [
            (0, l.jsx)(v.B, {
                direction: "horizontal",
                align: "center",
                padding: { left: 8, right: 8 },
                className: eg.S1,
                children: (0, l.jsx)(X.D, {
                    variant: "text-sm/medium",
                    color: "text-subtle",
                    children: ef.intl.format(em.default.eS6Nek, { count: t.length }),
                }),
            }),
            (0, l.jsx)(Q.Ch, { className: eg.Ge, children: t.map((e) => (0, l.jsx)(eI, { request: e }, e.key)) }),
        ],
    });
}
function eI(e) {
    let { request: t } = e,
        n = (0, C.bG)([D.default], () => D.default.getUser(t.userId));
    return null == n ? null : (0, l.jsx)(eN, { request: t, user: n });
}
function eN(e) {
    let { request: t, user: n } = e,
        s = i.useRef(null),
        { isHoveringOrFocusing: r } = (0, x.A)(s),
        a = (0, P.o)({ user: n, applicationId: t.applicationId, isGameRelationship: t.isGameRelationship }),
        { cancelFriendRequest: o } = (0, ec.I)({
            userId: t.userId,
            applicationId: t.applicationId,
            isGameRelationship: t.isGameRelationship,
            location: ep,
        });
    return (0, l.jsxs)(v.B, {
        ref: s,
        direction: "horizontal",
        align: "center",
        gap: 8,
        padding: 8,
        className: eg.nM,
        children: [
            (0, l.jsx)(eE, { user: n, pendingFriendRequestInfo: a, animate: r }),
            (0, l.jsx)(I.m, {
                text: ef.intl.string(ef.t.eaq81S),
                children: (0, l.jsx)(F.K, {
                    icon: J.K,
                    size: "sm",
                    variant: "icon-only",
                    "aria-label": eR(eh.eA$.PENDING_OUTGOING, a, ef.intl.string(ef.t.eaq81S)),
                    onClick: o,
                }),
            }),
        ],
    });
}
function eA(e) {
    let { request: t } = e,
        n = (0, C.bG)([D.default], () => D.default.getUser(t.userId));
    return null == n ? null : (0, l.jsx)(eb, { request: t, user: n });
}
function eb(e) {
    let { request: t, user: n } = e,
        s = i.useRef(null),
        { isHoveringOrFocusing: a } = (0, x.A)(s),
        [o, c] = i.useState(!1),
        u = (0, P.o)({ user: n, applicationId: t.applicationId, isGameRelationship: t.isGameRelationship }),
        { acceptFriendRequest: d, cancelFriendRequest: h } = (0, ec.I)({
            userId: t.userId,
            applicationId: t.applicationId,
            isGameRelationship: t.isGameRelationship,
            location: ep,
            onConfirm: () =>
                (0, _.P0)({
                    text: ef.intl.formatToPlainString(ef.t.cRwkp7, { name: ex.Ay.getName(n) }),
                    variant: "success",
                }),
            onFinally: () => c(!1),
        });
    return (0, l.jsxs)(v.B, {
        ref: s,
        direction: "horizontal",
        align: null != u.note ? "start" : "center",
        gap: 8,
        padding: 8,
        className: r()(eg.nM, eg.b8, eg.ZJ),
        children: [
            (0, l.jsx)(eE, {
                user: n,
                pendingFriendRequestInfo: u,
                animate: a,
                children: null != u.note && (0, l.jsx)(ek, { note: u.note }),
            }),
            (0, l.jsxs)(v.B, {
                direction: "horizontal",
                align: "center",
                gap: 4,
                fullWidth: !1,
                children: [
                    (0, l.jsx)("div", {
                        className: eg.L6,
                        children: (0, l.jsx)(I.m, {
                            text: ef.intl.string(ef.t.xuio0C),
                            children: (0, l.jsx)(F.K, {
                                icon: ee.P,
                                size: "sm",
                                variant: "icon-only",
                                "aria-label": eR(eh.eA$.PENDING_INCOMING, u, ef.intl.string(ef.t.xuio0C)),
                                onClick: h,
                            }),
                        }),
                    }),
                    (0, l.jsx)(I.m, {
                        text: ef.intl.string(ef.t.Zcibdf),
                        children: (0, l.jsx)(F.K, {
                            icon: et.CheckmarkLargeIcon,
                            size: "sm",
                            variant: "icon-only",
                            "aria-label": eR(eh.eA$.PENDING_INCOMING, u, ef.intl.string(ef.t.Zcibdf)),
                            loading: o,
                            onClick: function () {
                                (c(!0), d());
                            },
                        }),
                    }),
                ],
            }),
        ],
    });
}
function eR(e, t, n) {
    let { displayName: l, applicationName: i } = t,
        s = { action: n, name: l, application: i ?? "" };
    if (e === eh.eA$.PENDING_INCOMING) {
        let e = null != i ? ef.t.kSmk1F : ef.t["+YIVE1"];
        return ef.intl.formatToPlainString(e, s);
    }
    let r = null != i ? ef.t.BfqcNh : ef.t.vrDIev;
    return ef.intl.formatToPlainString(r, s);
}
function eE(e) {
    let { user: t, pendingFriendRequestInfo: n, animate: i, children: s } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(y.eu, {
                src: t.getAvatarURL(void 0, (0, k.FT)(k._3.SIZE_32), i),
                size: k._3.SIZE_32,
                "aria-hidden": !0,
            }),
            (0, l.jsxs)("div", {
                className: eg.Qq,
                children: [
                    (0, l.jsx)(R.E, {
                        variant: "text-md/medium",
                        color: "text-default",
                        lineClamp: 1,
                        children: n.displayName,
                    }),
                    (0, l.jsx)(eS, { pendingFriendRequestInfo: n }),
                    s,
                ],
            }),
        ],
    });
}
function eS(e) {
    let { pendingFriendRequestInfo: t } = e,
        { subLabel: n, application: i } = t;
    return null == n && null == i
        ? null
        : (0, l.jsxs)(v.B, {
              direction: "horizontal",
              align: "center",
              gap: 4,
              children: [
                  null != n &&
                      (0, l.jsx)(R.E, { variant: "text-xs/medium", color: "text-muted", lineClamp: 1, children: n }),
                  null != i &&
                      (0, l.jsxs)(l.Fragment, {
                          children: [
                              null != n && (0, l.jsx)(er.A, { height: 2, width: 2 }),
                              (0, l.jsx)(es.A, { game: i, size: es.M.XXSMALL }),
                              (0, l.jsx)(R.E, {
                                  variant: "text-xs/medium",
                                  color: "text-muted",
                                  lineClamp: 1,
                                  children: i.name,
                              }),
                          ],
                      }),
              ],
          });
}
function ek(e) {
    let { note: t } = e,
        [n, s] = i.useState(!1);
    return n
        ? (0, l.jsxs)(R.E, {
              variant: "text-xs/normal",
              color: "text-subtle",
              tag: "p",
              className: eg.N4,
              children: [
                  (0, l.jsx)(ei.c, { size: "xxs", color: S.A.colors.ICON_SUBTLE, className: eg.TG }),
                  t,
                  " ",
                  (0, l.jsx)(el.Q, {
                      text: ef.intl.string(em.default.QX4H2E),
                      textVariant: "text-xs/medium",
                      onClick: () => s(!1),
                  }),
              ],
          })
        : (0, l.jsxs)(v.B, {
              direction: "horizontal",
              align: "center",
              gap: 4,
              children: [
                  (0, l.jsx)(en.EyeIcon, { size: "xxs", color: S.A.colors.TEXT_BRAND }),
                  (0, l.jsx)(el.Q, {
                      text: ef.intl.string(em.default.xZupEi),
                      textVariant: "text-xs/medium",
                      onClick: function () {
                          (s(!0), (0, ea.Yq)({ analyticsLocation: ep, noteLength: t.length }));
                      },
                  }),
              ],
          });
}
var ey = n(499516);
let ew = { sending: !1, success: null, error: null };
function eP(e, t) {
    switch (t.type) {
        case "RESET":
            return ew;
        case "SENDING":
            return { ...ew, sending: !0 };
        case "SUCCESS":
            return { ...ew, sending: !1, success: t.text };
        case "ERROR":
            return { ...ew, sending: !1, error: t.text };
    }
}
function eD() {
    let [e, t] = i.useReducer(eP, ew),
        { sending: n, success: s, error: r } = e,
        [a, o] = i.useState(""),
        [c, u] = i.useState(""),
        [d, x] = i.useState(!1),
        { enabled: h } = W.A.useConfig({ location: "AddFriendPopout" });
    async function m() {
        x(!0);
        try {
            let e = await V.Ay.createFriendInvite(null, eh.PE1.ADD_FRIENDS_POPOUT);
            (0, q.C)(
                (0, Z.A)(e.code),
                () => (0, _.P0)({ text: ef.intl.string(ef.t.tBOSx4), variant: "success" }),
                () => (0, _.P0)({ text: ef.intl.string(ef.t.R0RpRX), variant: "critical" }),
            );
        } catch {
            (0, _.P0)({ text: ef.intl.string(ef.t.R0RpRX), variant: "critical" });
        } finally {
            x(!1);
        }
    }
    return (0, l.jsx)(L.l, {
        children: (0, l.jsx)("div", {
            className: ey.kL,
            children: (0, l.jsxs)(T.F, {
                component: (0, l.jsxs)("div", {
                    className: ey.wx,
                    children: [
                        (0, l.jsx)("div", {
                            className: ey.gn,
                            children: (0, l.jsx)(R.E, {
                                variant: "text-md/medium",
                                color: "text-default",
                                children: ef.intl.string(em.default.au4mU4),
                            }),
                        }),
                        (0, l.jsx)(I.m, {
                            text: ef.intl.string(ef.t.t1T3kD),
                            position: "bottom",
                            align: "right",
                            caretConfig: { align: "end" },
                            children: (0, l.jsx)(F.K, {
                                icon: z.LinkIcon,
                                size: "sm",
                                onClick: m,
                                "aria-label": ef.intl.string(ef.t.t1T3kD),
                                variant: "icon-only",
                                loading: d,
                            }),
                        }),
                    ],
                }),
                children: [
                    (0, l.jsx)("form", {
                        onSubmit: function (e) {
                            (e.preventDefault(),
                                t({ type: "SENDING" }),
                                (0, $.Ay)({
                                    discordTag: a,
                                    note: h && "" !== c ? c : void 0,
                                    location: "Add Friend Popout",
                                    errorUxConfig: $.gB.SHOW_ONLY_IF_ACTION_NEEDED,
                                })
                                    .then((e) => {
                                        (t({ type: "SUCCESS", text: e }), o(""), u(""));
                                    })
                                    .catch((e) => t({ type: "ERROR", text: e })));
                        },
                        autoComplete: "off",
                        children: (0, l.jsxs)("div", {
                            className: ey.hQ,
                            children: [
                                (0, l.jsx)(O.k, {
                                    value: a,
                                    onChange: (e) => {
                                        (o(e), t({ type: "RESET" }));
                                    },
                                    label: ef.intl.string(ef.t["5C3rVr"]),
                                    fullWidth: !0,
                                    required: !0,
                                    placeholder: ef.intl.string(ef.t.jx0GiG),
                                    successMessage: s,
                                    error: r,
                                    disabled: n,
                                    autoComplete: "off",
                                    "data-form-type": "other",
                                    "data-lpignore": !0,
                                    "data-1p-ignore": !0,
                                }),
                                h &&
                                    (0, l.jsx)(B.f, {
                                        label: ef.intl.string(ef.t["6dVPSI"]),
                                        value: c,
                                        onChange: function (e) {
                                            (u(e), t({ type: "RESET" }));
                                        },
                                        helperText: ef.intl.string(ef.t.UtfQNw),
                                        maxLength: $.XG,
                                        showCharacterCount: !0,
                                        rows: 3,
                                        placeholder: ef.intl.string(ef.t.bTMtdN),
                                        disabled: n,
                                    }),
                                (0, l.jsx)(U.$, {
                                    variant: "primary",
                                    size: "md",
                                    text: ef.intl.string(ef.t.HWT3wh),
                                    fullWidth: !0,
                                    disabled: "" === a.trim() || n,
                                    type: "submit",
                                }),
                            ],
                        }),
                    }),
                    (0, l.jsx)(ej, {}),
                ],
            }),
        }),
    });
}
function eM(e) {
    let { position: t, onClose: n, spacing: s, children: r } = e,
        a = i.useRef(null),
        [o, c] = i.useState(!1),
        u = i.useCallback(() => {
            (c(!1), n?.());
        }, [n]);
    return (
        i.useEffect(
            () => (
                f._.subscribe(eh.jej.FRIENDS_SIDEBAR_RESIZED, u),
                () => {
                    f._.unsubscribe(eh.jej.FRIENDS_SIDEBAR_RESIZED, u);
                }
            ),
            [u],
        ),
        (0, l.jsx)(H.Y, {
            targetElementRef: a,
            shouldShow: o,
            onRequestClose: u,
            position: t,
            spacing: s,
            ignoreModalClicks: !0,
            renderPopout: () => (0, l.jsx)(eD, {}),
            children: () => r({ buttonRef: a, onClick: () => c(!o) }),
        })
    );
}
var eG = n(669850);
function e_() {
    let { incoming: e } = G(),
        { collapsed: t } = i.useContext(p),
        n = i.useMemo(
            () =>
                Array.from(
                    new Set(
                        e.map((e) => {
                            let { userId: t } = e;
                            return t;
                        }),
                    ),
                )
                    .slice(0, 2)
                    .reverse(),
            [e],
        ),
        s = e[0],
        r = s?.userId,
        a = (0, C.bG)([D.default], () => D.default.getUser(r), [r]);
    return null == s || null == a
        ? null
        : (0, l.jsx)(v.B, {
              padding: 8,
              className: eG.uW,
              children: (0, l.jsx)(
                  eM,
                  {
                      position: "left",
                      spacing: 16,
                      children: (i) => {
                          let { buttonRef: r, onClick: o } = i;
                          return t
                              ? (0, l.jsx)(eL, {
                                    buttonRef: r,
                                    onClick: o,
                                    incoming: e,
                                    facepileUserIds: n,
                                    latestUser: a,
                                })
                              : (0, l.jsx)(eT, {
                                    buttonRef: r,
                                    onClick: o,
                                    incoming: e,
                                    facepileUserIds: n,
                                    latestRequest: s,
                                    latestUser: a,
                                });
                      },
                  },
                  t ? "collapsed" : "expanded",
              ),
          });
}
function eL(e) {
    let { buttonRef: t, onClick: n, incoming: i, facepileUserIds: s, latestUser: r } = e,
        { isHoveringOrFocusing: a } = (0, x.A)(t);
    return (0, l.jsx)(I.m, {
        text: ef.intl.string(ef.t.fyA115),
        position: "left",
        targetElementRef: t,
        children: (0, l.jsx)(N.D, {
            innerRef: t,
            className: eG.Wj,
            "aria-label": ef.intl.formatToPlainString(ef.t.xxFCW8, { count: i.length }),
            onClick: n,
            children: (0, l.jsx)(A.Q, {
                rounded: 1 === s.length,
                lowerBadge: (0, l.jsx)(b.hV, { count: i.length, "aria-hidden": !0 }),
                lowerBadgeSize: { width: (0, b.o6)(i.length) },
                children: (0, l.jsx)("div", {
                    className: eG.UI,
                    children: (0, l.jsx)(eF, { facepileUserIds: s, latestUser: r, animate: a }),
                }),
            }),
        }),
    });
}
function eT(e) {
    let { buttonRef: t, onClick: n, incoming: i, facepileUserIds: s, latestRequest: r, latestUser: a } = e,
        { isHoveringOrFocusing: o } = (0, x.A)(t),
        { displayName: c } = (0, P.o)({
            user: a,
            applicationId: r.applicationId,
            isGameRelationship: r.isGameRelationship,
        });
    return (0, l.jsxs)(N.D, {
        innerRef: t,
        className: eG.nM,
        onClick: n,
        children: [
            (0, l.jsx)(eF, { facepileUserIds: s, latestUser: a, animate: o }),
            (0, l.jsxs)("div", {
                className: eG.Qq,
                children: [
                    (0, l.jsx)(R.E, {
                        variant: "text-md/medium",
                        color: "text-default",
                        lineClamp: 1,
                        children: ef.intl.string(ef.t.fyA115),
                    }),
                    (0, l.jsx)(R.E, { variant: "text-xs/medium", color: "text-muted", lineClamp: 1, children: c }),
                ],
            }),
            (0, l.jsxs)(v.B, {
                direction: "horizontal",
                align: "center",
                gap: 4,
                fullWidth: !1,
                children: [
                    (0, l.jsx)(b.hV, { count: i.length }),
                    (0, l.jsx)("div", {
                        className: eG.ai,
                        children: (0, l.jsx)(E.u, { size: "sm", color: S.A.colors.ICON_MUTED }),
                    }),
                ],
            }),
        ],
    });
}
function eF(e) {
    let { facepileUserIds: t, latestUser: n, animate: i } = e;
    return t.length > 1
        ? (0, l.jsx)(w.A, { recipients: t, size: k._3.SIZE_32, "aria-hidden": !0 })
        : (0, l.jsx)(y.eu, {
              src: n.getAvatarURL(void 0, (0, k.FT)(k._3.SIZE_32), i),
              size: k._3.SIZE_32,
              "aria-hidden": !0,
          });
}
var ez = n(837381),
    eO = n(140735),
    eB = n(475825),
    eU = n(602853),
    eH = n(928039),
    eV = n(546359),
    eZ = n(736347),
    eW = n(599026),
    e$ = n(365199),
    eq = n(683063),
    eX = n(687966),
    eY = n(432017),
    eQ = n(31300),
    eK = n(442433),
    eJ = n(566903),
    e0 = n(51183),
    e6 = n(80558),
    e1 = n(713654),
    e3 = n(449582),
    e7 = n(88686),
    e8 = n(214881),
    e2 = n(774926),
    e4 = n(263577),
    e9 = n(471107),
    e5 = n(609425),
    te = n(922301),
    tt = n(660184),
    tn = n(381849),
    tl = n(854627),
    ti = n(342296),
    ts = n(734057),
    tr = n(290863),
    ta = n(977997),
    to = n(604506);
function tc(e) {
    let { row: t, sectionType: s, inVoiceSubgroup: a = !1 } = e,
        o = (0, C.bG)([D.default], () => D.default.getUser(t.userId), [t.userId]),
        { collapsed: u } = i.useContext(p),
        d = (function (e, t, n) {
            let i = (0, C.bG)(
                    [tr.A],
                    () => {
                        let t = tr.A.getActivities(e.userId);
                        return null != e.gameActivityIndex ? t[e.gameActivityIndex] : t[0];
                    },
                    [e.userId, e.gameActivityIndex],
                ),
                s = i?.type === eh.$pd.PLAYING || i?.type === eh.$pd.COMPETING ? "text-voice-connected" : "text-muted",
                r = null != e.voiceChannelId && !n,
                a = (0, C.bG)([ts.A], () => (null != e.voiceChannelId ? ts.A.getChannel(e.voiceChannelId) : null), [
                    e.voiceChannelId,
                ]),
                o = (0, C.bG)(
                    [ta.A],
                    () =>
                        n && null != e.voiceChannelId
                            ? ta.A.getVoiceStateForChannel(e.voiceChannelId, e.userId)?.connectedAt
                            : null,
                    [n, e.voiceChannelId, e.userId],
                ),
                c = (0, e1.gU)(a),
                u =
                    null == c
                        ? null
                        : (0, l.jsx)(c, {
                              size: "xxs",
                              color: "var(--text-voice-connected)",
                              "aria-label": ef.intl.string(em.default["8ALChp"]),
                          });
            if (r) {
                let t = null != e.gameName ? i?.timestamps?.start : null,
                    n =
                        null != t
                            ? ef.intl.format(em.default.KddZZf, { duration: (0, l.jsx)(td, { start: t }) })
                            : ef.intl.string(em.default["8ALChp"]);
                return {
                    icon: u,
                    textColor: "text-voice-connected",
                    contentAriaHidden: null == t,
                    content: n,
                    tooltip: n,
                };
            }
            let d =
                null != o
                    ? {
                          icon: null,
                          textColor: "text-voice-connected",
                          contentAriaHidden: !1,
                          content: (0, l.jsx)(td, { start: 1e3 * o }),
                          tooltip: null,
                      }
                    : null;
            if (null == i) return d;
            let x = (function (e, t) {
                let n =
                    t && (e.status_display_type === eW.A.NAME || null == e.status_display_type)
                        ? (e.details ?? e.state)
                        : (0, eJ.A)(e).text;
                switch (e.type) {
                    case eh.$pd.PLAYING:
                    case eh.$pd.COMPETING:
                        return { Icon: eX.GameControllerIcon, text: n };
                    case eh.$pd.LISTENING:
                        return { Icon: eY.T, text: n };
                    case eh.$pd.WATCHING:
                        return { Icon: eQ.k, text: n };
                    case eh.$pd.CUSTOM_STATUS:
                        let i = e.emoji;
                        return {
                            Icon: null != i ? () => (0, l.jsx)(e0.A, { emoji: i, hideTooltip: !0 }) : void 0,
                            text: e.state ?? (null == i ? null : ""),
                        };
                    default:
                        return null;
                }
            })(i, t === eZ.ik.GAME);
            if (null == x || null == x.text) return d;
            let { Icon: h, text: m } = x,
                f = i.timestamps?.start,
                g = (0, l.jsx)("span", { className: to.hc, children: m }),
                p =
                    null != f
                        ? ef.intl.format(em.default.Fb6oNP, {
                              text: g,
                              duration: (0, l.jsx)("span", { children: (0, l.jsx)(td, { start: f }) }),
                          })
                        : null;
            return {
                icon:
                    null != h &&
                    (0, l.jsx)(h, { size: "xxs", color: "var(--icon-voice-connected)", "aria-hidden": !0 }),
                textColor: s,
                contentAriaHidden: !1,
                content: p ?? g,
                tooltip: p ?? m,
            };
        })(t, s, a),
        x = i.useRef(null),
        h = i.useRef(null),
        {
            avatarSrc: m,
            avatarDecorationSrc: f,
            eventHandlers: { onMouseEnter: g, onMouseLeave: j },
        } = (0, tl.A)({ userId: t.userId, size: k._3.SIZE_32, animateOnHover: !0 }),
        [A, b] = i.useState(!1),
        [E, S] = i.useState(!1),
        [w, P] = i.useState(!1),
        M = (0, e3.r)({ user: o }),
        G = (0, e5.A)({ userId: t.userId }),
        _ = (0, ez.rm)(t.userId),
        L = i.useCallback(
            (e) => {
                let i = D.default.getUser(t.userId);
                null != i &&
                    (P(!0),
                    (0, eK.L3)(
                        e,
                        async () => {
                            let { default: e } = await Promise.all([
                                n.e("463317"),
                                n.e("926132"),
                                n.e("146652"),
                                n.e("893190"),
                                n.e("189673"),
                                n.e("882073"),
                                n.e("797558"),
                                n.e("691994"),
                                n.e("576665"),
                                n.e("624198"),
                                n.e("532418"),
                            ]).then(n.bind(n, 668569));
                            return (t) => (0, l.jsx)(e, { ...t, user: i });
                        },
                        { onClose: () => P(!1) },
                    ));
            },
            [t.userId],
        );
    return null == o
        ? null
        : (0, l.jsx)(ti.A, {
              targetElementRef: x,
              user: o,
              position: "left",
              spacing: 16,
              children: (e, n) => {
                  let { isShown: i } = n,
                      a = A || w || i,
                      o = (0, l.jsxs)("div", {
                          className: r()(to.kL, { [to.vu]: a }),
                          onMouseOver: () => {
                              A || (b(!0), g());
                          },
                          onMouseLeave: () => {
                              (b(!1), j());
                          },
                          onContextMenu: L,
                          onFocus: () => S(!0),
                          onBlur: (e) => {
                              e.currentTarget.contains(e.relatedTarget) || S(!1);
                          },
                          children: [
                              (0, l.jsx)(c.vN, {
                                  offset: { right: 4 },
                                  children: (0, l.jsxs)(N.D, {
                                      tag: "div",
                                      innerRef: x,
                                      ...e,
                                      ..._,
                                      className: to.nM,
                                      children: [
                                          (0, l.jsx)(e8.A, {
                                              nameplate: a || E ? M : null,
                                              hovered: a,
                                              content: h,
                                              placement: e7.u.FRIENDS_LIST,
                                          }),
                                          (0, l.jsxs)(v.B, {
                                              ref: h,
                                              direction: "horizontal",
                                              align: "center",
                                              className: to.Qs,
                                              children: [
                                                  (0, l.jsx)(y.eu, {
                                                      src: m,
                                                      avatarDecoration: f,
                                                      size: k._3.SIZE_32,
                                                      status: t.status,
                                                      "aria-hidden": !0,
                                                      className: to.LY,
                                                  }),
                                                  (0, l.jsxs)("div", {
                                                      className: to.rf,
                                                      children: [
                                                          (0, l.jsx)("div", {
                                                              className: to.UU,
                                                              children: (0, l.jsx)(R.E, {
                                                                  variant: "text-md/medium",
                                                                  color: "text-default",
                                                                  children: (0, l.jsx)(tt.A, {
                                                                      userName: t.name,
                                                                      displayNameStyles: G,
                                                                      effectDisplayType:
                                                                          a || E ? te.G.ANIMATED : te.G.PLAIN,
                                                                      loop: !0,
                                                                  }),
                                                              }),
                                                          }),
                                                          (0, l.jsx)(tx, { subtitle: d }),
                                                      ],
                                                  }),
                                                  null != t.gameAppId &&
                                                      s !== eZ.ik.GAME &&
                                                      (0, l.jsx)(tu, {
                                                          gameAppId: t.gameAppId,
                                                          gameAssetUrl: t.gameAssetUrl,
                                                      }),
                                              ],
                                          }),
                                      ],
                                  }),
                              }),
                              !u &&
                                  (a || E) &&
                                  (0, l.jsx)("div", {
                                      className: to.Mj,
                                      children: (0, l.jsx)(I.m, {
                                          text: ef.intl.string(ef.t.PdRCRg),
                                          ariaHidden: !0,
                                          children: (0, l.jsx)(F.K, {
                                              variant: "icon-only",
                                              size: "sm",
                                              icon: e$.MoreHorizontalIcon,
                                              "aria-label": ef.intl.string(ef.t.PdRCRg),
                                              tabIndex: _.tabIndex,
                                              onClick: L,
                                          }),
                                      }),
                                  }),
                          ],
                      });
                  return u
                      ? d?.tooltip == null
                          ? (0, l.jsx)(I.m, {
                                text: t.name,
                                position: "left",
                                asContainer: !0,
                                tag: "div",
                                ariaHidden: !0,
                                children: o,
                            })
                          : (0, l.jsx)(eq.u, {
                                title: t.name,
                                body: d.tooltip,
                                position: "left",
                                asContainer: !0,
                                element: "div",
                                ariaHidden: !0,
                                children: o,
                            })
                      : o;
              },
          });
}
function tu(e) {
    let { gameAppId: t, gameAssetUrl: n } = e,
        i = (0, e6.O)(null == n ? t : null),
        s = n ?? (0, e2.C4)(i)?.src;
    return (0, l.jsx)(e4.V, { src: s, size: 32 });
}
function td(e) {
    let { start: t } = e,
        { now: n } = (0, e9.G)(),
        l = Math.max(0, Math.round((n - t) / 1e3));
    return (0, tn.WR)({ seconds: l, getFormatter: tn.i });
}
function tx(e) {
    let { subtitle: t } = e;
    return null == t
        ? null
        : (0, l.jsxs)(v.B, {
              direction: "horizontal",
              align: "center",
              gap: 4,
              fullWidth: !1,
              children: [
                  null != t.icon && (0, l.jsx)("div", { className: to.LY, children: t.icon }),
                  (0, l.jsx)(R.E, {
                      variant: "text-xs/medium",
                      color: t.textColor,
                      "aria-hidden": t.contentAriaHidden,
                      className: to.o4,
                      children: t.content,
                  }),
              ],
          });
}
var th = n(890856),
    tm = n(320448),
    tf = n(847374),
    tg = n(935154),
    tp = n(409626),
    tj = n(692969),
    tC = n(775602),
    tv = n(94416);
let tI = [-1, -1, -1, 0, 0, 2, 2, 1, 3, 1, 3].flatMap((e) => [e, -1]);
function tN() {
    let e = i.useRef(null),
        t = i.useRef(0),
        { hovered: n } = i.useContext(p),
        s = (0, C.bG)([tC.Ay], () => tC.Ay.useReducedMotion),
        r = n && !s;
    return (
        i.useEffect(() => {
            if (!r) {
                ((t.current = 0),
                    e.current?.childNodes.forEach((e) => {
                        e.setAttribute("opacity", "1");
                    }));
                return;
            }
            let n = setInterval(() => {
                if (null == e.current) return;
                t.current = (t.current + 1) % tI.length;
                let n = tI[t.current];
                e.current.childNodes.forEach((e, t) => {
                    e.setAttribute("opacity", t === n ? "0.5" : "1");
                });
            }, 150);
            return () => {
                clearInterval(n);
            };
        }, [r]),
        (0, l.jsxs)("svg", {
            width: "16",
            height: "16",
            viewBox: "0 0 14 14",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            className: tv.Y,
            ref: e,
            children: [
                (0, l.jsx)("path", {
                    d: "M8.27614 4.05719C8.52619 3.80714 8.66667 3.468 8.66667 3.11438V1.33333C8.66667 0.596955 8.06971 0 7.33333 0H6C5.26362 0 4.66667 0.596954 4.66667 1.33333V3.11438C4.66667 3.468 4.80714 3.80714 5.05719 4.05719L6.19526 5.19526C6.45561 5.45561 6.87772 5.45561 7.13807 5.19526L8.27614 4.05719Z",
                    fill: "currentColor",
                }),
                (0, l.jsx)("path", {
                    d: "M4.05719 5.05719C3.80714 4.80714 3.468 4.66667 3.11438 4.66667H1.33333C0.596955 4.66667 0 5.26362 0 6V7.33333C0 8.06971 0.596954 8.66667 1.33333 8.66667H3.11438C3.468 8.66667 3.80714 8.52619 4.05719 8.27614L5.19526 7.13807C5.45561 6.87772 5.45561 6.45561 5.19526 6.19526L4.05719 5.05719Z",
                    fill: "currentColor",
                }),
                (0, l.jsx)("path", {
                    d: "M5.05719 9.27614C4.80714 9.52619 4.66667 9.86533 4.66667 10.219V12C4.66667 12.7364 5.26362 13.3333 6 13.3333H7.33333C8.06971 13.3333 8.66667 12.7364 8.66667 12V10.219C8.66667 9.86533 8.52619 9.52619 8.27614 9.27614L7.13807 8.13807C6.87772 7.87772 6.45561 7.87772 6.19526 8.13807L5.05719 9.27614Z",
                    fill: "currentColor",
                }),
                (0, l.jsx)("path", {
                    d: "M10.219 4.66667C9.86533 4.66667 9.52619 4.80714 9.27614 5.05719L8.13807 6.19526C7.87772 6.45561 7.87772 6.87772 8.13807 7.13807L9.27614 8.27614C9.52619 8.52619 9.86533 8.66667 10.219 8.66667H12C12.7364 8.66667 13.3333 8.06971 13.3333 7.33333V6C13.3333 5.26362 12.7364 4.66667 12 4.66667H10.219Z",
                    fill: "currentColor",
                }),
            ],
        })
    );
}
var tA = n(416852);
let tb = { left: 8, right: 8 };
function tR(e) {
    let { leading: t, labelAccessory: n, trailing: s, label: r, color: a } = e,
        { collapsed: o } = i.useContext(p),
        c = o ? eO.A : i.Fragment;
    return (0, l.jsxs)(v.B, {
        direction: "horizontal",
        justify: o ? "center" : "start",
        align: "center",
        padding: tb,
        fullWidth: !1,
        className: tA.UP,
        children: [
            (0, l.jsx)("div", { className: tA.R4, children: t }),
            (0, l.jsx)(c, {
                children: (0, l.jsx)(X.D, {
                    variant: "text-sm/medium",
                    color: a ?? "text-muted",
                    lineClamp: 1,
                    children: r,
                }),
            }),
            null != n && !o && (0, l.jsx)("div", { className: tA.nr, children: n }),
            null != s && !o && (0, l.jsx)("div", { className: tA.ZY, children: s }),
        ],
    });
}
var tE = n(845311);
let tS = { top: "sm", bottom: "xxs" };
var tk = n(945584);
function ty(e) {
    switch (e.type) {
        case eZ.ik.ACTIVE_NOW:
            return ef.intl.string(ef.t.TxqPQR);
        case eZ.ik.ONLINE:
            return ef.intl.string(ef.t.WbGtnH);
        case eZ.ik.OFFLINE:
            return ef.intl.string(ef.t.Vv0abJ);
        case eZ.ik.GAME:
            return e.label;
        case eZ.ik.LETTER:
            return null;
    }
}
function tw(e) {
    let { sectionIndex: t, isCollapsed: n, onToggleCollapsed: s } = e,
        r = (0, C.bG)([eV.A], () => eV.A.getSections()[t]),
        { collapsed: a } = i.useContext(p),
        o = r.key,
        c = i.useCallback(() => s(o), [s, o]),
        u = t > 0 ? tk.Ci : void 0,
        d = ty(r) ?? r.label ?? "";
    if (a)
        return (0, l.jsx)(I.m, {
            position: "left",
            text: d,
            ariaHidden: !0,
            children: (0, l.jsx)(v.B, {
                padding: tS,
                gap: 0,
                className: u,
                children: (0, l.jsx)(tR, { leading: (0, l.jsx)(tD, { section: r }), label: ty(r) }),
            }),
        });
    let x = ef.intl.formatToPlainString(n ? em.default.QcKHvf : em.default.jsV9yS, { sectionName: d });
    return (0, l.jsx)(th.s, {
        "aria-label": x,
        onClick: c,
        focusProps: { offset: { right: 4 } },
        className: tk.wx,
        children: (0, l.jsx)(v.B, {
            padding: tS,
            gap: 0,
            className: u,
            children: (0, l.jsx)(tR, {
                leading: (0, l.jsx)(tD, { section: r }),
                label: (0, l.jsx)(t_, { section: r }),
                labelAccessory: (0, l.jsx)(tP, { isCollapsed: n }),
            }),
        }),
    });
}
function tP(e) {
    let { isCollapsed: t } = e,
        n = t ? tm._ : tf.a;
    return (0, l.jsx)(n, { size: "xs", color: "var(--icon-muted)", "aria-hidden": !0 });
}
function tD(e) {
    let { section: t } = e;
    switch (t.type) {
        case eZ.ik.ACTIVE_NOW:
            return (0, l.jsx)(tN, {});
        case eZ.ik.ONLINE:
            return (0, l.jsx)(tE.A, { hasOnlineFriends: !0, color: "var(--icon-muted)" });
        case eZ.ik.OFFLINE:
            return (0, l.jsx)(tg.nW, { status: eh.clD.OFFLINE, size: 12 });
        case eZ.ik.GAME:
            return (0, l.jsx)(tF, { assetUrl: t.gameAssetUrl, appId: t.gameAppId });
        case eZ.ik.LETTER:
            return (0, l.jsx)(tz, { letter: t.label ?? "#" });
    }
}
let tM = "\xa0\xa0\xb7\xa0\xa0";
function tG(e) {
    let t = 0;
    for (let n of e.rows) t += n.type === eZ.VZ.VOICE_GROUP ? n.rows.length : 1;
    return t;
}
function t_(e) {
    let { section: t } = e;
    return t.type === eZ.ik.GAME
        ? (0, l.jsxs)(l.Fragment, {
              children: [(0, l.jsx)(tT, { appId: t.gameAppId, label: t.label }), `${tM}${tG(t)}`],
          })
        : t.type === eZ.ik.ACTIVE_NOW || t.type === eZ.ik.ONLINE
          ? `${ty(t)}${tM}${tG(t)}`
          : ty(t);
}
function tL(e) {
    return (0, tj.A)({ applicationId: e, source: tp.GameProfileSources.FriendsList, trackEntryPointImpression: !1 });
}
function tT(e) {
    let { appId: t, label: n } = e,
        i = tL(t);
    return null == i ? n : (0, l.jsx)(N.D, { tag: "span", onClick: i, className: tk.mO, children: n });
}
function tF(e) {
    let { appId: t, assetUrl: n } = e,
        i = (0, e6.O)(null == n ? t : null),
        s = n ?? (0, e2.C4)(i)?.src,
        r = tL(t),
        a = (0, l.jsx)(e4.V, { src: s, size: 18, "aria-hidden": !0 });
    return null == r
        ? a
        : (0, l.jsx)(N.D, { tag: "span", onClick: r, tabIndex: -1, "aria-hidden": !0, className: tk.Gt, children: a });
}
function tz(e) {
    let { letter: t } = e;
    return (0, l.jsx)(R.E, { variant: "text-sm/bold", children: t });
}
var tO = n(214947),
    tB = n(283973),
    tU = n(184322);
let tH = Array.from({ length: 10 }, (e, t) =>
    (0, l.jsxs)(
        "div",
        {
            className: tU._f,
            "aria-hidden": "true",
            children: [(0, l.jsx)("div", { className: tU.RH }), (0, l.jsx)("div", { className: tU.rl })],
        },
        t,
    ),
);
function tV() {
    let { collapsed: e } = i.useContext(p);
    return e ? (0, l.jsx)(tW, {}) : (0, l.jsx)(tZ, {});
}
function tZ() {
    return (0, l.jsxs)("div", {
        className: tU.kL,
        children: [
            (0, l.jsx)("div", { className: tU.Dd, children: tH }),
            (0, l.jsx)(v.B, {
                align: "center",
                justify: "center",
                padding: { left: 24, right: 24 },
                className: tU.C,
                children: (0, l.jsxs)(v.B, {
                    align: "center",
                    gap: 16,
                    padding: { bottom: 80 },
                    children: [
                        (0, l.jsx)(tO.$, { size: "lg", color: S.A.colors.ICON_DEFAULT }),
                        (0, l.jsxs)(v.B, {
                            gap: 4,
                            className: tU.Dk,
                            children: [
                                (0, l.jsx)(X.D, {
                                    variant: "heading-md/medium",
                                    children: ef.intl.string(em.default["4fvi9I"]),
                                }),
                                (0, l.jsx)(R.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: ef.intl.string(em.default.OZj923),
                                }),
                            ],
                        }),
                        (0, l.jsx)(eM, {
                            position: "bottom",
                            children: (e) => {
                                let { buttonRef: t, onClick: n } = e;
                                return (0, l.jsx)(U.$, {
                                    buttonRef: t,
                                    fullWidth: !0,
                                    size: "md",
                                    variant: "primary",
                                    icon: tB.R,
                                    text: ef.intl.string(em.default.au4mU4),
                                    onClick: n,
                                });
                            },
                        }),
                    ],
                }),
            }),
        ],
    });
}
function tW() {
    return (0, l.jsx)("div", {
        className: tU.kL,
        children: (0, l.jsxs)("div", {
            className: r()(tU.Dd, tU.yZ),
            children: [
                (0, l.jsx)("div", {
                    className: tU._f,
                    children: (0, l.jsx)(eM, {
                        position: "left",
                        children: (e) => {
                            let { buttonRef: t, onClick: n } = e;
                            return (0, l.jsx)(I.m, {
                                text: ef.intl.string(em.default.au4mU4),
                                position: "bottom",
                                targetElementRef: t,
                                children: (0, l.jsx)(F.K, {
                                    buttonRef: t,
                                    size: "sm",
                                    variant: "secondary",
                                    icon: tB.R,
                                    "aria-label": ef.intl.string(em.default.au4mU4),
                                    onClick: n,
                                }),
                            });
                        },
                    }),
                }),
                tH,
            ],
        }),
    });
}
var t$ = n(983851),
    tq = n(730852),
    tX = n(47167),
    tY = n(378570),
    tQ = n(798350);
function tK(e) {
    let { row: t, sectionType: n } = e,
        i = (0, C.bG)([ts.A], () => ts.A.getChannel(t.channelId), [t.channelId]),
        s = (0, tX.Ay)(i) ?? ef.intl.string(ef.t["/YzI63"]),
        a = (0, e1.gU)(i) ?? t$.H,
        o = (0, C.bG)([ta.A], () => ta.A.isInChannel(t.channelId));
    return (0, l.jsxs)(v.B, {
        gap: 0,
        padding: { top: "md", bottom: "md" },
        className: r()(tQ.Os, tQ.aW),
        role: "group",
        "aria-label": s,
        children: [
            (0, l.jsx)("b", { className: tQ.h_ }),
            (0, l.jsx)(tR, {
                leading: (0, l.jsx)(a, { size: "xs", color: "var(--icon-voice-connected)", "aria-hidden": !0 }),
                trailing: (0, l.jsx)(t0, { channelId: t.channelId, channelName: s, isInChannel: o }),
                label: null != i ? (0, l.jsx)(tJ, { channelId: t.channelId, channelName: s }) : s,
                color: "text-default",
            }),
            (0, l.jsx)(v.B, {
                gap: 0,
                padding: { top: 4 },
                children: t.rows.map((e) => (0, l.jsx)(tc, { row: e, sectionType: n, inVoiceSubgroup: !0 }, e.userId)),
            }),
            t.extraMemberCount > 0 && (0, l.jsx)(t6, { count: t.extraMemberCount }),
        ],
    });
}
function tJ(e) {
    let { channelId: t, channelName: n } = e,
        { collapsed: s } = i.useContext(p);
    return s
        ? n
        : (0, l.jsx)(ez.tG, {
              id: `voice:${t}:name`,
              children: (e) => {
                  let { role: i, ...s } = e;
                  return (0, l.jsx)("span", {
                      role: i,
                      children: (0, l.jsx)(N.D, {
                          tag: "span",
                          className: tQ.HA,
                          onClick: () => (0, tY.iN)(t),
                          ...s,
                          children: n,
                      }),
                  });
              },
          });
}
function t0(e) {
    let { channelId: t, channelName: n, isInChannel: i } = e;
    return (0, l.jsx)(ez.tG, {
        id: `voice:${t}:join`,
        children: (e) => {
            let { role: s, ...a } = e;
            return (0, l.jsx)("div", {
                role: s,
                className: r()(tQ.PD, i && tQ.RK),
                children: (0, l.jsx)(U.$, {
                    text: ef.intl.string(i ? ef.t["Hi1/aQ"] : ef.t.VJlc0S),
                    variant: i ? "critical-secondary" : "active",
                    size: "sm",
                    "aria-label": i ? void 0 : ef.intl.formatToPlainString(em.default.gOIq4P, { channel: n }),
                    onClick: () => (i ? tq.default.disconnect() : tq.default.selectVoiceChannel(t)),
                    ...a,
                }),
            });
        },
    });
}
function t6(e) {
    let { count: t } = e,
        { collapsed: n } = i.useContext(p);
    return (0, l.jsxs)(v.B, {
        direction: "horizontal",
        align: "center",
        justify: n ? "center" : "start",
        fullWidth: !1,
        gap: 4,
        padding: { top: 4, bottom: 4 },
        children: [
            !n && (0, l.jsx)("b", { className: tQ.hF }),
            (0, l.jsx)(R.E, {
                variant: "text-xs/medium",
                color: "text-muted",
                children: ef.intl.formatToPlainString(n ? em.default.SWPwHW : em.default.d90MfZ, { count: t }),
            }),
        ],
    });
}
var t1 = n(182927);
function t3() {
    let e,
        t,
        n,
        s,
        r = (0, C.bG)([eV.A], () => eV.A.getSections()),
        { collapsed: a } = i.useContext(p),
        [o, c] = i.useState(() => new Set()),
        u = i.useCallback(
            (e) => {
                if (a) return !1;
                let t = r[e]?.key;
                return null != t && o.has(t);
            },
            [a, r, o],
        ),
        d = i.useCallback((e) => {
            c((t) => {
                let n = new Set(t);
                return (n.delete(e) || n.add(e), n);
            });
        }, []),
        x = i.useMemo(() => r.map((e, t) => (u(t) ? 1 : e.rows.length)), [r, u]),
        h = i.useId(),
        m = i.useRef(null),
        f = (0, eH.A)("friends-list", m),
        {
            rowHeight: g,
            sectionHeaderHeight: j,
            sectionDividerHeight: v,
            subgroupPadding: I,
        } = ((e = (0, eU.r)(S.A.space.SPACE_XXS)),
        (t = (0, eU.r)(S.A.space.SPACE_XS)),
        (n = (0, eU.r)(S.A.space.SPACE_SM)),
        {
            rowHeight: 32 + 2 * t,
            sectionHeaderHeight: 24 + n + e,
            sectionDividerHeight: (s = (0, eU.r)(S.A.space.SPACE_MD)),
            subgroupPadding: s,
        }),
        N = i.useCallback((e) => (e > 0 ? j + v : j), [j, v]),
        A = i.useCallback(
            (e, t) => {
                if (u(e)) return 0;
                let n = r[e]?.rows[t];
                return null == n
                    ? g
                    : n.type === eZ.VZ.VOICE_GROUP && n.rows.length > 1
                      ? 2 * I + 24 + 4 + n.rows.length * g + 24 * (n.extraMemberCount > 0)
                      : g;
            },
            [r, u, g, I],
        ),
        b = i.useCallback(
            (e) => {
                let { section: t, row: n } = e;
                if (u(t)) return null;
                let i = r[t],
                    s = i?.rows[n];
                return null == s || null == i
                    ? null
                    : s.type === eZ.VZ.VOICE_GROUP
                      ? (0, l.jsx)(tK, { row: s, sectionType: i.type }, s.key)
                      : (0, l.jsx)(tc, { row: s, sectionType: i.type }, s.userId);
            },
            [r, u],
        ),
        R = i.useCallback(
            (e) => {
                let { section: t } = e;
                return (0, l.jsx)(tw, { sectionIndex: t, isCollapsed: u(t), onToggleCollapsed: d });
            },
            [u, d],
        );
    return 0 === r.length
        ? (0, l.jsx)(tV, {})
        : (0, l.jsx)(T.F, {
              component: (0, l.jsx)(eO.A, {
                  children: (0, l.jsx)(T.H, { id: h, children: ef.intl.string(ef.t.TdEu5X) }),
              }),
              children: (0, l.jsx)(ez.hD, {
                  navigator: f,
                  children: (0, l.jsx)(ez.PR, {
                      children: (e) => {
                          let { ref: t, role: n, ...i } = e;
                          return (0, l.jsx)(eB.OZ, {
                              ref: (e) => {
                                  ((m.current = e), (t.current = e?.getScrollerNode() ?? null));
                              },
                              ...i,
                              className: t1.p,
                              "aria-labelledby": h,
                              innerRole: n,
                              sections: x,
                              sectionHeight: N,
                              rowHeight: A,
                              renderSection: R,
                              renderRow: b,
                              fade: !0,
                              paddingBottom: 4,
                              scrollbarGutter: "both-edges",
                              style: { "--custom-friend-row-height": "32px" },
                          });
                      },
                  }),
              }),
          });
}
var t7 = n(259730),
    t8 = n(450030),
    t2 = n(783977),
    t4 = n(7689),
    t9 = n(683438),
    t5 = n(765671),
    ne = n(980707),
    nt = n(477782),
    nn = n(606325),
    nl = n(303911),
    ni = n(67746);
let ns = [
    [eZ.Vj.ACTIVE_NOW, em.default["/lMTzd"], em.default.IzzWNM],
    [eZ.Vj.GAME, em.default.aKZ12v, em.default.lE79Lm],
    [eZ.Vj.ALPHABETICAL, em.default.eVxFX3, null],
];
function nr(e) {
    let { width: t, closePopout: n } = e,
        i = (0, C.bG)([eV.A], () => eV.A.getGroupingMode()),
        s = (0, C.bG)([eV.A], () => eV.A.isVoiceGroupingEnabled());
    return (0, l.jsx)("div", {
        className: ni.k,
        style: { "--custom-group-config-popout-width": `${t ?? 264}px` },
        children: (0, l.jsxs)(ne.W, {
            navId: "friends-list-group-config",
            "aria-label": ef.intl.string(em.default["i+986w"]),
            onClose: n,
            onSelect: void 0,
            children: [
                (0, l.jsx)(nt.rX, {
                    label: ef.intl.string(em.default.OvTyCX),
                    children: ns.map((e) => {
                        let [t, s, r] = e;
                        return (0, l.jsx)(
                            nt.iD,
                            {
                                id: `friends-list-grouping-mode-${t}`,
                                label: ef.intl.string(s),
                                subtext: null != r ? ef.intl.string(r) : null,
                                group: "friends-list-grouping-select",
                                checked: i === t,
                                action: () => {
                                    ((0, nn.Je)(t), n());
                                },
                            },
                            `friends-list-grouping-mode-${t}`,
                        );
                    }),
                }),
                (0, nl.kR)(i) &&
                    (0, l.jsx)(nt.rX, {
                        label: ef.intl.string(ef.t["8/udY0"]),
                        children: (0, l.jsx)(nt.fP, {
                            id: "friends-list-group-voice-channels",
                            label: ef.intl.string(em.default["/b1eZT"]),
                            subtext: ef.intl.string(em.default["/bZ+Av"]),
                            checked: s,
                            action: () => {
                                ((0, nn.Lk)(!s), n());
                            },
                        }),
                    }),
            ],
        }),
    });
}
n(321073);
var na = n(308528),
    no = n(565860),
    nc = n(723690),
    nu = n(976860),
    nd = n(994500),
    nx = n(972910);
function nh(e) {
    let { friend: t, appendGap: n, closePopout: s } = e,
        [a, o] = i.useState(!1),
        {
            status: c,
            isMobile: u,
            isVR: d,
        } = (0, C.cf)([tr.A], () => ({
            status: tr.A.getStatus(t.userId),
            isMobile: tr.A.isMobileOnline(t.userId),
            isVR: tr.A.isVROnline(t.userId),
        }));
    return (0, l.jsx)(N.D, {
        className: r()(nx.Ke, { [nx.w$]: n }),
        onMouseEnter: () => o(!0),
        onMouseLeave: () => o(!1),
        onClick: function () {
            let e = ts.A.getDMFromUserId(t.user.id);
            (null != e ? (0, nu.pX)(eh.BVt.CHANNEL(eh.ME, e)) : na.A.openPrivateChannel({ recipientIds: t.user.id }),
                s?.());
        },
        children: (0, l.jsx)(nc.A, {
            user: t.user,
            status: c,
            isMobile: u,
            isVR: d,
            subText: (0, l.jsx)(R.E, { variant: "text-xs/medium", color: "text-muted", children: t.user.username }),
            hovered: a,
            showAccountIdentifier: !1,
            className: nx.eF,
        }),
    });
}
function nm(e) {
    let { searchResults: t, closePopout: n } = e,
        i = (0, eU.r)(S.A.space.SPACE_XS),
        s = (0, eU.r)(S.A.space.SPACE_XXS),
        r = 36 + 2 * i,
        a = [t.length];
    return (0, l.jsx)(eB.OZ, {
        renderRow: (e) => {
            let { section: i, row: s } = e,
                r = t[s];
            return (0, l.jsx)(nh, { friend: r, appendGap: s !== t.length - 1, closePopout: n }, r.userId);
        },
        rowHeight: (e, n) => (n === t.length - 1 ? r : r + s),
        sections: a,
        sectionHeight: 18 + s,
        renderSection: (e) => {
            let { section: n } = e;
            return (0, l.jsx)(R.E, {
                className: nx.nw,
                variant: "text-sm/medium",
                children: ef.intl.format(ef.t.xIWGxu, { count: t.length }),
            });
        },
        className: nx.Xv,
    });
}
function nf() {
    return (0, l.jsx)(R.E, {
        variant: "text-sm/medium",
        className: nx.n1,
        children: ef.intl.string(em.default["0usxBd"]),
    });
}
function ng() {
    return (0, l.jsx)(R.E, {
        variant: "text-sm/medium",
        className: nx.n1,
        children: ef.intl.string(em.default.VH2HXW),
    });
}
function np(e) {
    let { rawQuery: t, closePopout: n } = e,
        i = (0, no.HI)(t),
        s = (0, C.bG)(
            [nd.A, D.default],
            () => {
                if ("" === i) return [];
                let e = nd.A.getFriendIDs(),
                    t = [];
                return (
                    e.forEach((e) => {
                        let n = D.default.getUser(e);
                        if (void 0 === n) return;
                        let l = nd.A.getNickname(e),
                            s = [(0, no.HI)(n.username)];
                        (null != n.globalName && s.push((0, no.HI)(n.globalName)),
                            null != l && s.push((0, no.HI)(l)),
                            s.some((e) => e.includes(i)) &&
                                t.push({
                                    userId: e,
                                    user: n,
                                    nickname: l,
                                    sortName:
                                        l?.toLowerCase() ?? n.globalName?.toLowerCase() ?? n.username.toLowerCase(),
                                }));
                    }),
                    t.sort((e, t) => e.sortName.localeCompare(t.sortName)),
                    t
                );
            },
            [i],
        );
    return "" === i
        ? (0, l.jsx)(nf, {})
        : s.length > 0
          ? (0, l.jsx)(nm, { searchResults: s, closePopout: n })
          : (0, l.jsx)(ng, {});
}
function nj(e) {
    let { query: t, width: n, closePopout: i } = e;
    return (0, l.jsx)("div", {
        className: r()(nx.kL, nx.zZ),
        style: { "--custom-search-friends-popout-width": `${n ?? 264}px` },
        children: (0, l.jsx)(np, { rawQuery: t, closePopout: i }),
    });
}
function nC(e) {
    let { closePopout: t } = e,
        [n, s] = i.useState("");
    return (0, l.jsx)(L.l, {
        children: (0, l.jsxs)("div", {
            className: nx.kL,
            children: [
                (0, l.jsx)("div", {
                    className: nx.M6,
                    children: (0, l.jsx)(O.k, { placeholder: ef.intl.string(ef.t.lLDtTK), value: n, onChange: s }),
                }),
                (0, l.jsx)(np, { rawQuery: n, closePopout: t }),
            ],
        }),
    });
}
var nv = n(540950);
function nI() {
    let [e, t] = i.useState(null);
    i.useEffect(() => {
        function e() {
            t(null);
        }
        return (
            f._.subscribe(eh.jej.FRIENDS_SIDEBAR_RESIZED, e),
            () => {
                f._.unsubscribe(eh.jej.FRIENDS_SIDEBAR_RESIZED, e);
            }
        );
    }, []);
    let { collapsed: n } = i.useContext(p),
        { appBarToggleEnabled: s } = g.A.useConfig({ location: "FriendsListHeader" }),
        [r, a] = i.useState(!1),
        o = i.useRef(void 0),
        c = i.useRef(null),
        d = i.useRef(null),
        x = i.useRef(null),
        h = i.useCallback((e) => {
            let { width: t } = e,
                n = d.current?.getBoundingClientRect().width,
                l = x.current?.getBoundingClientRect().width;
            (null != t && (o.current = t - 16), null != t && null != n && null != l && a(t - (n + l) <= 24));
        }, []);
    (0, t5.i4)(c, h);
    let m = n
        ? (0, l.jsx)(nA, {})
        : "search" === e
          ? (0, l.jsx)(nS, { isSearching: !0, setActivePopout: t, contentWidthRef: o })
          : (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(nN, {
                        compact: r,
                        contentWidthRef: o,
                        isPopoutOpen: "groupConfig" === e,
                        setActivePopout: t,
                    }),
                    (0, l.jsxs)(v.B, {
                        direction: "horizontal",
                        align: "center",
                        fullWidth: !1,
                        ref: x,
                        children: [
                            (0, l.jsx)(nS, { isSearching: !1, setActivePopout: t, contentWidthRef: o }),
                            (0, l.jsx)(nk, { popoutPosition: "bottom" }),
                            s
                                ? null
                                : (0, l.jsx)(ny, {
                                      icon: t7.E,
                                      label: ef.intl.string(em.default.JZCSRZ),
                                      onClick: () => u.A.setFriendsSidebarCollapsed(!0),
                                  }),
                        ],
                    }),
                ],
            });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(nN, { ghost: !0, ref: d }),
            (0, l.jsx)(v.B, {
                direction: "horizontal",
                fullWidth: !1,
                justify: n ? "center" : "space-between",
                padding: 8,
                className: nv.wx,
                ref: c,
                children: m,
            }),
        ],
    });
}
function nN(e) {
    let { compact: t = !1, ghost: n = !1, contentWidthRef: s, isPopoutOpen: a = !1, setActivePopout: o, ref: c } = e,
        u = i.useRef(null);
    function d() {
        o?.(null);
    }
    let x = t
            ? (0, l.jsx)(tO.$, { size: "xs", color: "var(--icon-default)" })
            : (0, l.jsx)(R.E, {
                  variant: "heading-md/medium",
                  tag: "span",
                  children: ef.intl.string(em.default["7kJd9e"]),
              }),
        h = (0, l.jsx)(N.D, {
            className: r()(nv.Iw, { [nv.qy]: n }),
            "aria-label": ef.intl.string(em.default["7kJd9e"]),
            "aria-hidden": n,
            "aria-haspopup": n ? void 0 : "menu",
            "aria-expanded": n ? void 0 : a,
            onClick: n ? void 0 : () => o?.(a ? null : "groupConfig"),
            innerRef: c ?? u,
            children: (0, l.jsxs)(v.B, {
                direction: "horizontal",
                gap: 4,
                align: "center",
                padding: { top: 6, bottom: 6, left: 8, right: 8 },
                className: nv.$E,
                children: [x, (0, l.jsx)(tf.a, { color: "var(--text-default)", size: "sm" })],
            }),
        });
    if (n) return h;
    let m = (0, l.jsx)(H.Y, {
        targetElementRef: u,
        shouldShow: a,
        onRequestClose: d,
        position: "bottom",
        align: "left",
        renderPopout: () => (0, l.jsx)(nr, { width: s?.current, closePopout: d }),
        children: () => h,
    });
    return a ? m : (0, l.jsx)(I.m, { text: ef.intl.string(em.default.wvbB3Z), asContainer: !0, children: m });
}
function nA() {
    let e = i.useRef(null),
        [t, n] = i.useState(!1);
    function s(e) {
        (e.preventDefault(), n(!0));
    }
    function r() {
        n(!1);
    }
    return (0, l.jsx)(H.Y, {
        targetElementRef: e,
        shouldShow: t,
        onRequestClose: r,
        position: "bottom",
        renderPopout: () => (0, l.jsx)(nb, { onClose: r }),
        children: () =>
            (0, l.jsx)(ny, {
                buttonRef: e,
                icon: t8.U,
                label: ef.intl.string(em.default["Dr/+ku"]),
                onContextMenu: s,
                onClick: () => u.A.setFriendsSidebarCollapsed(!1),
            }),
    });
}
function nb(e) {
    let { onClose: t } = e;
    return (0, l.jsxs)(v.B, {
        gap: 4,
        padding: 8,
        fullWidth: !1,
        className: nv.QG,
        children: [
            (0, l.jsx)(nR, {}),
            (0, l.jsx)(nE, { onClose: t }),
            (0, l.jsx)(nk, { popoutPosition: "left", tooltipPosition: "left" }),
        ],
    });
}
function nR() {
    let e = i.useRef(null),
        [t, n] = i.useState(!1);
    function s() {
        n(!1);
    }
    return (0, l.jsx)(H.Y, {
        targetElementRef: e,
        shouldShow: t,
        onRequestClose: s,
        position: "left",
        renderPopout: () => (0, l.jsx)(nr, { closePopout: s }),
        children: () =>
            (0, l.jsx)(ny, {
                buttonRef: e,
                icon: t2.R,
                label: ef.intl.string(em.default["i+986w"]),
                tooltipPosition: "left",
                onClick: () => n(!t),
            }),
    });
}
function nE(e) {
    let { onClose: t } = e,
        n = i.useRef(null),
        [s, r] = i.useState(!1);
    function a() {
        (r(!1), t?.());
    }
    return (0, l.jsx)(H.Y, {
        targetElementRef: n,
        shouldShow: s,
        onRequestClose: a,
        position: "left",
        renderPopout: () => (0, l.jsx)(nC, { closePopout: a }),
        children: () =>
            (0, l.jsx)(ny, {
                buttonRef: n,
                icon: t4.MagnifyingGlassIcon,
                label: ef.intl.string(em.default["60M8Ae"]),
                tooltipPosition: "left",
                onClick: () => r(!s),
            }),
    });
}
function nS(e) {
    let { isSearching: t, setActivePopout: n, contentWidthRef: s } = e,
        r = i.useRef(null),
        [a, o] = i.useState("");
    function c() {
        (n(null), o(""));
    }
    return t
        ? (0, l.jsx)(H.Y, {
              targetElementRef: r,
              shouldShow: !0,
              onRequestClose: c,
              position: "bottom",
              align: "center",
              nudgeAlignIntoViewport: !1,
              renderPopout: () => (0, l.jsx)(nj, { query: a, width: s.current, closePopout: c }),
              children: () =>
                  (0, l.jsx)("div", {
                      ref: r,
                      className: nv.wB,
                      children: (0, l.jsx)(t9.I, {
                          autoFocus: !0,
                          "aria-label": ef.intl.string(em.default["60M8Ae"]),
                          placeholder: ef.intl.string(ef.t.lLDtTK),
                          query: a,
                          onChange: o,
                          onClear: () => o(""),
                          size: "sm",
                      }),
                  }),
          })
        : (0, l.jsx)(ny, {
              icon: t4.MagnifyingGlassIcon,
              label: ef.intl.string(em.default["60M8Ae"]),
              onClick: () => n("search"),
          });
}
function nk(e) {
    let { popoutPosition: t, tooltipPosition: n, onClose: i } = e;
    return (0, l.jsx)(eM, {
        position: t,
        onClose: i,
        children: (e) => {
            let { buttonRef: t, onClick: i } = e;
            return (0, l.jsx)(ny, {
                buttonRef: t,
                icon: tB.R,
                label: ef.intl.string(em.default.au4mU4),
                tooltipPosition: n,
                onClick: i,
            });
        },
    });
}
function ny(e) {
    let { icon: t, label: n, onClick: s, onContextMenu: r, tooltipPosition: a, buttonRef: o } = e,
        c = i.useRef(null),
        u = o ?? c;
    return (0, l.jsx)(I.m, {
        text: n,
        position: a,
        targetElementRef: u,
        anchorRef: u,
        children: (0, l.jsx)(N.D, {
            "aria-label": n,
            onClick: s,
            onContextMenu: r,
            innerRef: u,
            className: nv.x6,
            children: (0, l.jsx)(t, { size: "sm", color: "currentColor" }),
        }),
    });
}
var nw = n(45863);
function nP() {
    let e = i.useRef(null),
        t = i.useRef(null),
        n = i.useRef(!1),
        s = i.useRef(0),
        C = (0, j.c)(),
        { isHoveringOrFocusing: v } = (0, x.A)(e),
        { appBarToggleEnabled: I } = g.A.useConfig({ location: "FriendsSidebar" }),
        N = i.useCallback((n) => {
            ((s.current = n),
                null != e.current &&
                    ((e.current.style.width = `${n}px`),
                    e.current.style.setProperty("--custom-friends-sidebar-width", `${n}px`)),
                t.current?.setAttribute("aria-valuenow", `${n}`));
        }, []);
    i.useLayoutEffect(() => {
        n.current || N(C ? 64 : 280);
    }, [C, N]);
    let A = i.useCallback(
            (e) => {
                N(e);
                let t = e < 200;
                t !== C && (0, a.flushSync)(() => u.A.setFriendsSidebarCollapsed(t));
            },
            [N, C],
        ),
        b = i.useCallback(() => {
            ((n.current = !0), t.current?.classList?.add(nw.cB), f._.dispatch(eh.jej.FRIENDS_SIDEBAR_RESIZED));
        }, []),
        R = i.useCallback((e) => {
            ((n.current = !1), t.current?.setAttribute("aria-valuenow", `${e}`), t.current?.classList?.remove(nw.cB));
        }, []),
        E = i.useCallback((e) => (I ? Math.min(Math.max(e, 280), 320) : e < 200 ? 64 : Math.min(e, 320)), [I]),
        S = (0, d.A)({
            resizableDomNodeRef: e,
            minDimension: I ? 200 : 64,
            maxDimension: 320,
            orientation: d.R.HORIZONTAL_LEFT,
            onElementResizeStart: b,
            onApplyDimension: A,
            onElementResizeEnd: R,
            getClampedValue: E,
        }),
        k = i.useCallback(
            (t) => {
                let l;
                if (null == e.current) return;
                switch (t.key) {
                    case "ArrowLeft":
                        l = Math.max(200, s.current + 10);
                        break;
                    case "ArrowRight":
                        l = s.current - 10;
                        break;
                    case "Home":
                        l = I ? 280 : 64;
                        break;
                    case "End":
                        l = 320;
                        break;
                    default:
                        return;
                }
                t.preventDefault();
                let i = E(l);
                ((n.current = !0), A(i), (n.current = !1));
            },
            [I, E, A],
        ),
        y = (0, m.NC)(),
        w = i.useMemo(() => ({ collapsed: C, hovered: v }), [C, v]);
    return (0, l.jsx)(h.A.Provider, {
        value: void 0,
        children: (0, l.jsx)(o.N, {
            theme: y,
            children: (n) =>
                (0, l.jsx)(p.Provider, {
                    value: w,
                    children: (0, l.jsxs)("div", {
                        ref: e,
                        className: r()(nw.kL, n),
                        children: [
                            (0, l.jsx)(c.vN, {
                                children: (0, l.jsx)("div", {
                                    ref: t,
                                    role: "separator",
                                    tabIndex: 0,
                                    "aria-orientation": "vertical",
                                    "aria-label": ef.intl.string(em.default["F3+Xei"]),
                                    "aria-valuemin": I ? 280 : 64,
                                    "aria-valuemax": 320,
                                    className: nw.Di,
                                    onMouseDown: S,
                                    onKeyDown: k,
                                }),
                            }),
                            (0, l.jsx)(nI, {}),
                            (0, l.jsxs)("div", {
                                className: nw.rf,
                                children: [
                                    (0, l.jsx)(e_, {}),
                                    (0, l.jsx)(c.xp, { containerRef: e, children: (0, l.jsx)(t3, {}) }),
                                ],
                            }),
                        ],
                    }),
                }),
        }),
    });
}
