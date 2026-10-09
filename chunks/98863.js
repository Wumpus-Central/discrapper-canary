(n.r(t), n.d(t, { default: () => nk }));
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
    f = n(97469),
    m = n(625494),
    g = n(925166);
let p = i.createContext({ collapsed: !1, hovered: !1 });
var j = n(605117),
    C = n(17928),
    I = n(331322),
    v = n(866665),
    b = n(939249),
    N = n(862328),
    A = n(812993),
    R = n(834730),
    E = n(881636),
    S = n(661531),
    k = n(778712),
    y = n(97808),
    w = n(954376),
    P = n(454932),
    D = n(287809),
    G = n(902902);
function M() {
    return (0, C.cf)([G.A], () => ({ incoming: G.A.getIncomingRequests(), outgoing: G.A.getOutgoingRequests() }));
}
var L = n(376357),
    _ = n(305866),
    T = n(707554),
    F = n(408278),
    z = n(173936),
    U = n(95477),
    O = n(103557),
    B = n(821609),
    H = n(922016),
    V = n(376728),
    Z = n(279208),
    W = n(189883),
    q = n(237309),
    $ = n(957565),
    Y = n(297264),
    X = n(625903),
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
    ef = n(682530),
    em = n(660183),
    eg = n(788868);
let ep = "Friends Sidebar Add Friend Popout";
function ej() {
    let { incoming: e, outgoing: t } = M(),
        n = i.useMemo(() => [...e, ...t], [e, t]);
    return ((0, eo.y)(n), 0 === n.length)
        ? null
        : (0, l.jsxs)(I.B, {
              gap: 4,
              padding: { top: 12, bottom: 16, left: 16, right: 8 },
              className: eg.uW,
              children: [
                  (0, l.jsxs)(I.B, {
                      direction: "horizontal",
                      align: "center",
                      justify: "space-between",
                      padding: { left: 8, right: 8 },
                      className: eg.UP,
                      children: [
                          (0, l.jsxs)(I.B, {
                              direction: "horizontal",
                              align: "center",
                              gap: 8,
                              fullWidth: !1,
                              children: [
                                  (0, l.jsx)(Y.D, {
                                      variant: "text-sm/medium",
                                      color: "text-muted",
                                      children: em.intl.string(em.t.fyA115),
                                  }),
                                  e.length > 0 && (0, l.jsx)(A.hV, { count: e.length }),
                              ],
                          }),
                          (0, l.jsx)(v.m, {
                              text: em.intl.string(ef.default["2vock0"]),
                              position: "bottom",
                              children: (0, l.jsx)(F.K, {
                                  icon: X.SettingsIcon,
                                  size: "sm",
                                  variant: "icon-only",
                                  "aria-label": em.intl.string(ef.default["2vock0"]),
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
                          e.map((e) => (0, l.jsx)(eN, { request: e }, e.key)),
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
        renderPopout: () => (0, l.jsx)(eI, { outgoing: t, returnRef: n }),
        children: () =>
            (0, l.jsxs)(b.D, {
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
                                children: em.intl.string(ef.default.JHcSBI),
                            }),
                            (0, l.jsx)(R.E, {
                                variant: "text-xs/medium",
                                color: "text-muted",
                                lineClamp: 1,
                                children: em.intl.format(ef.default.PY1iDb, { count: t.length }),
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
function eI(e) {
    let { outgoing: t, returnRef: n } = e;
    return (0, l.jsxs)(_.l, {
        className: eg.YM,
        returnRef: n,
        "aria-label": em.intl.string(ef.default.JHcSBI),
        children: [
            (0, l.jsx)(I.B, {
                direction: "horizontal",
                align: "center",
                padding: { left: 8, right: 8 },
                className: eg.S1,
                children: (0, l.jsx)(Y.D, {
                    variant: "text-sm/medium",
                    color: "text-subtle",
                    children: em.intl.format(ef.default.eS6Nek, { count: t.length }),
                }),
            }),
            (0, l.jsx)(Q.Ch, { className: eg.Ge, children: t.map((e) => (0, l.jsx)(ev, { request: e }, e.key)) }),
        ],
    });
}
function ev(e) {
    let { request: t } = e,
        n = (0, C.bG)([D.default], () => D.default.getUser(t.userId));
    return null == n ? null : (0, l.jsx)(eb, { request: t, user: n });
}
function eb(e) {
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
    return (0, l.jsxs)(I.B, {
        ref: s,
        direction: "horizontal",
        align: "center",
        gap: 8,
        padding: 8,
        className: eg.nM,
        children: [
            (0, l.jsx)(eE, { user: n, pendingFriendRequestInfo: a, animate: r }),
            (0, l.jsx)(v.m, {
                text: em.intl.string(em.t.eaq81S),
                children: (0, l.jsx)(F.K, {
                    icon: J.K,
                    size: "sm",
                    variant: "icon-only",
                    "aria-label": eR(eh.eA$.PENDING_OUTGOING, a, em.intl.string(em.t.eaq81S)),
                    onClick: o,
                }),
            }),
        ],
    });
}
function eN(e) {
    let { request: t } = e,
        n = (0, C.bG)([D.default], () => D.default.getUser(t.userId));
    return null == n ? null : (0, l.jsx)(eA, { request: t, user: n });
}
function eA(e) {
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
                (0, L.P0)(
                    (0, L.ox)(em.intl.formatToPlainString(em.t.cRwkp7, { name: ex.Ay.getName(n) }), L.Ck.SUCCESS),
                ),
            onFinally: () => c(!1),
        });
    return (0, l.jsxs)(I.B, {
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
            (0, l.jsxs)(I.B, {
                direction: "horizontal",
                align: "center",
                gap: 4,
                fullWidth: !1,
                children: [
                    (0, l.jsx)("div", {
                        className: eg.L6,
                        children: (0, l.jsx)(v.m, {
                            text: em.intl.string(em.t.xuio0C),
                            children: (0, l.jsx)(F.K, {
                                icon: ee.P,
                                size: "sm",
                                variant: "icon-only",
                                "aria-label": eR(eh.eA$.PENDING_INCOMING, u, em.intl.string(em.t.xuio0C)),
                                onClick: h,
                            }),
                        }),
                    }),
                    (0, l.jsx)(v.m, {
                        text: em.intl.string(em.t.Zcibdf),
                        children: (0, l.jsx)(F.K, {
                            icon: et.CheckmarkLargeIcon,
                            size: "sm",
                            variant: "icon-only",
                            "aria-label": eR(eh.eA$.PENDING_INCOMING, u, em.intl.string(em.t.Zcibdf)),
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
        let e = null != i ? em.t.kSmk1F : em.t["+YIVE1"];
        return em.intl.formatToPlainString(e, s);
    }
    let r = null != i ? em.t.BfqcNh : em.t.vrDIev;
    return em.intl.formatToPlainString(r, s);
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
        : (0, l.jsxs)(I.B, {
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
                      text: em.intl.string(ef.default.QX4H2E),
                      textVariant: "text-xs/medium",
                      onClick: () => s(!1),
                  }),
              ],
          })
        : (0, l.jsxs)(I.B, {
              direction: "horizontal",
              align: "center",
              gap: 4,
              children: [
                  (0, l.jsx)(en.EyeIcon, { size: "xxs", color: S.A.colors.TEXT_BRAND }),
                  (0, l.jsx)(el.Q, {
                      text: em.intl.string(ef.default.xZupEi),
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
    async function f() {
        x(!0);
        try {
            let e = await V.Ay.createFriendInvite(null, eh.PE1.ADD_FRIENDS_POPOUT);
            (0, $.C)(
                (0, Z.A)(e.code),
                () => (0, L.P0)((0, L.ox)(em.intl.string(em.t.tBOSx4), L.Ck.SUCCESS)),
                () => (0, L.P0)((0, L.ox)(em.intl.string(em.t.R0RpRX), L.Ck.FAILURE)),
            );
        } catch {
            (0, L.P0)((0, L.ox)(em.intl.string(em.t.R0RpRX), L.Ck.FAILURE));
        } finally {
            x(!1);
        }
    }
    return (0, l.jsx)(_.l, {
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
                                children: em.intl.string(em.t.zIJnA6),
                            }),
                        }),
                        (0, l.jsx)(v.m, {
                            text: em.intl.string(em.t.t1T3kD),
                            position: "bottom",
                            align: "right",
                            caretConfig: { align: "end" },
                            children: (0, l.jsx)(F.K, {
                                icon: z.LinkIcon,
                                size: "sm",
                                onClick: f,
                                "aria-label": em.intl.string(em.t.t1T3kD),
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
                                (0, q.Ay)({
                                    discordTag: a,
                                    note: h && "" !== c ? c : void 0,
                                    location: "Add Friend Popout",
                                    errorUxConfig: q.gB.SHOW_ONLY_IF_ACTION_NEEDED,
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
                                (0, l.jsx)(U.k, {
                                    value: a,
                                    onChange: (e) => {
                                        (o(e), t({ type: "RESET" }));
                                    },
                                    label: em.intl.string(em.t["5C3rVr"]),
                                    fullWidth: !0,
                                    required: !0,
                                    placeholder: em.intl.string(em.t.jx0GiG),
                                    successMessage: s,
                                    error: r,
                                    disabled: n,
                                    autoComplete: "off",
                                    "data-form-type": "other",
                                    "data-lpignore": !0,
                                    "data-1p-ignore": !0,
                                }),
                                h &&
                                    (0, l.jsx)(O.f, {
                                        label: em.intl.string(em.t["6dVPSI"]),
                                        value: c,
                                        onChange: function (e) {
                                            (u(e), t({ type: "RESET" }));
                                        },
                                        helperText: em.intl.string(em.t.UtfQNw),
                                        maxLength: q.XG,
                                        showCharacterCount: !0,
                                        rows: 3,
                                        placeholder: em.intl.string(em.t.bTMtdN),
                                        disabled: n,
                                    }),
                                (0, l.jsx)(B.$, {
                                    variant: "primary",
                                    size: "md",
                                    text: em.intl.string(em.t.HWT3wh),
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
function eG(e) {
    let { position: t, onClose: n, spacing: s, children: r } = e,
        a = i.useRef(null),
        [o, c] = i.useState(!1),
        u = i.useCallback(() => {
            (c(!1), n?.());
        }, [n]);
    return (
        i.useEffect(
            () => (
                m._.subscribe(eh.jej.FRIENDS_SIDEBAR_RESIZED, u),
                () => {
                    m._.unsubscribe(eh.jej.FRIENDS_SIDEBAR_RESIZED, u);
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
var eM = n(669850);
function eL() {
    let { incoming: e } = M(),
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
        : (0, l.jsx)(I.B, {
              padding: 8,
              className: eM.uW,
              children: (0, l.jsx)(
                  eG,
                  {
                      position: "left",
                      spacing: 16,
                      children: (i) => {
                          let { buttonRef: r, onClick: o } = i;
                          return t
                              ? (0, l.jsx)(e_, {
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
function e_(e) {
    let { buttonRef: t, onClick: n, incoming: i, facepileUserIds: s, latestUser: r } = e,
        { isHoveringOrFocusing: a } = (0, x.A)(t);
    return (0, l.jsx)(v.m, {
        text: em.intl.string(em.t.fyA115),
        position: "left",
        targetElementRef: t,
        children: (0, l.jsx)(b.D, {
            innerRef: t,
            className: eM.Wj,
            "aria-label": em.intl.formatToPlainString(em.t.xxFCW8, { count: i.length }),
            onClick: n,
            children: (0, l.jsx)(N.Q, {
                rounded: 1 === s.length,
                lowerBadge: (0, l.jsx)(A.hV, { count: i.length, "aria-hidden": !0 }),
                lowerBadgeSize: { width: (0, A.o6)(i.length) },
                children: (0, l.jsx)("div", {
                    className: eM.UI,
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
    return (0, l.jsxs)(b.D, {
        innerRef: t,
        className: eM.nM,
        onClick: n,
        children: [
            (0, l.jsx)(eF, { facepileUserIds: s, latestUser: a, animate: o }),
            (0, l.jsxs)("div", {
                className: eM.Qq,
                children: [
                    (0, l.jsx)(R.E, {
                        variant: "text-md/medium",
                        color: "text-default",
                        lineClamp: 1,
                        children: em.intl.string(em.t.fyA115),
                    }),
                    (0, l.jsx)(R.E, { variant: "text-xs/medium", color: "text-muted", lineClamp: 1, children: c }),
                ],
            }),
            (0, l.jsxs)(I.B, {
                direction: "horizontal",
                align: "center",
                gap: 4,
                fullWidth: !1,
                children: [
                    (0, l.jsx)(A.hV, { count: i.length }),
                    (0, l.jsx)("div", {
                        className: eM.ai,
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
    eU = n(140735),
    eO = n(475825),
    eB = n(928039),
    eH = n(546359),
    eV = n(736347),
    eZ = n(599026),
    eW = n(683063),
    eq = n(687966),
    e$ = n(432017),
    eY = n(31300),
    eX = n(442433),
    eQ = n(566903),
    eK = n(51183),
    eJ = n(80558),
    e0 = n(713654),
    e6 = n(449582),
    e1 = n(88686),
    e3 = n(214881),
    e7 = n(774926),
    e8 = n(263577),
    e4 = n(471107),
    e2 = n(609425),
    e9 = n(922301),
    e5 = n(660184),
    te = n(381849),
    tt = n(854627),
    tn = n(342296),
    tl = n(734057),
    ti = n(290863),
    ts = n(977997),
    tr = n(604506);
function ta(e) {
    let { row: t, sectionType: s, inVoiceSubgroup: r = !1 } = e,
        a = (0, C.bG)([D.default], () => D.default.getUser(t.userId), [t.userId]),
        { collapsed: o } = i.useContext(p),
        u = (function (e, t, n) {
            let i = (0, C.bG)(
                    [ti.A],
                    () => {
                        let t = ti.A.getActivities(e.userId);
                        return null != e.gameActivityIndex ? t[e.gameActivityIndex] : t[0];
                    },
                    [e.userId, e.gameActivityIndex],
                ),
                s = i?.type === eh.$pd.PLAYING || i?.type === eh.$pd.COMPETING ? "text-voice-connected" : "text-muted",
                r = null != e.voiceChannelId && !n,
                a = (0, C.bG)([tl.A], () => (null != e.voiceChannelId ? tl.A.getChannel(e.voiceChannelId) : null), [
                    e.voiceChannelId,
                ]),
                o = (0, C.bG)(
                    [ts.A],
                    () =>
                        n && null != e.voiceChannelId
                            ? ts.A.getVoiceStateForChannel(e.voiceChannelId, e.userId)?.connectedAt
                            : null,
                    [n, e.voiceChannelId, e.userId],
                ),
                c = (0, e0.gU)(a),
                u =
                    null == c
                        ? null
                        : (0, l.jsx)(c, {
                              size: "xxs",
                              color: "var(--text-voice-connected)",
                              "aria-label": em.intl.string(ef.default["8ALChp"]),
                          });
            if (r) {
                let t = null != e.gameName ? i?.timestamps?.start : null,
                    n =
                        null != t
                            ? em.intl.format(ef.default.KddZZf, { duration: (0, l.jsx)(tc, { start: t }) })
                            : em.intl.string(ef.default["8ALChp"]);
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
                          content: (0, l.jsx)(tc, { start: 1e3 * o }),
                          tooltip: null,
                      }
                    : null;
            if (null == i) return d;
            let x = (function (e, t) {
                let n =
                    t && (e.status_display_type === eZ.A.NAME || null == e.status_display_type)
                        ? (e.details ?? e.state)
                        : (0, eQ.A)(e).text;
                switch (e.type) {
                    case eh.$pd.PLAYING:
                    case eh.$pd.COMPETING:
                        return { Icon: eq.GameControllerIcon, text: n };
                    case eh.$pd.LISTENING:
                        return { Icon: e$.T, text: n };
                    case eh.$pd.WATCHING:
                        return { Icon: eY.k, text: n };
                    case eh.$pd.CUSTOM_STATUS:
                        let i = e.emoji;
                        return {
                            Icon: null != i ? () => (0, l.jsx)(eK.A, { emoji: i, hideTooltip: !0 }) : void 0,
                            text: e.state ?? (null == i ? null : ""),
                        };
                    default:
                        return null;
                }
            })(i, t === eV.ik.GAME);
            if (null == x || null == x.text) return d;
            let { Icon: h, text: f } = x,
                m = i.timestamps?.start,
                g = (0, l.jsx)("span", { className: tr.hc, children: f }),
                p =
                    null != m
                        ? em.intl.format(ef.default.Fb6oNP, {
                              text: g,
                              duration: (0, l.jsx)("span", { children: (0, l.jsx)(tc, { start: m }) }),
                          })
                        : null;
            return {
                icon:
                    null != h &&
                    (0, l.jsx)(h, { size: "xxs", color: "var(--icon-voice-connected)", "aria-hidden": !0 }),
                textColor: s,
                contentAriaHidden: !1,
                content: p ?? g,
                tooltip: p ?? f,
            };
        })(t, s, r),
        d = i.useRef(null),
        x = i.useRef(null),
        {
            avatarSrc: h,
            avatarDecorationSrc: f,
            eventHandlers: { onMouseEnter: m, onMouseLeave: g },
        } = (0, tt.A)({ userId: t.userId, size: k._3.SIZE_32, animateOnHover: !0 }),
        [j, N] = i.useState(!1),
        [A, E] = i.useState(!1),
        S = (0, e6.r)({ user: a }),
        w = (0, e2.A)({ userId: t.userId }),
        P = (0, ez.rm)(t.userId),
        G = i.useCallback(
            (e) => {
                let i = D.default.getUser(t.userId);
                null != i &&
                    (0, eX.L3)(e, async () => {
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
                    });
            },
            [t.userId],
        );
    return null == a
        ? null
        : (0, l.jsx)(tn.A, {
              targetElementRef: d,
              user: a,
              position: "left",
              spacing: 16,
              children: (e) => {
                  let n = (0, l.jsx)(c.vN, {
                      offset: { right: 4 },
                      children: (0, l.jsxs)(b.D, {
                          tag: "div",
                          innerRef: d,
                          ...e,
                          ...P,
                          onContextMenu: G,
                          onMouseEnter: () => {
                              (N(!0), m());
                          },
                          onMouseLeave: () => {
                              (N(!1), g());
                          },
                          onFocus: () => {
                              (P.onFocus(), E(!0));
                          },
                          onBlur: () => E(!1),
                          className: tr.nM,
                          children: [
                              (0, l.jsx)(e3.A, {
                                  nameplate: j || A ? S : null,
                                  hovered: j,
                                  content: x,
                                  placement: e1.u.FRIENDS_LIST,
                              }),
                              (0, l.jsxs)(I.B, {
                                  ref: x,
                                  direction: "horizontal",
                                  align: "center",
                                  className: tr.Qs,
                                  children: [
                                      (0, l.jsx)(y.eu, {
                                          src: h,
                                          avatarDecoration: f,
                                          size: k._3.SIZE_32,
                                          status: t.status,
                                          "aria-hidden": !0,
                                          className: tr.LY,
                                      }),
                                      (0, l.jsxs)("div", {
                                          className: tr.rf,
                                          children: [
                                              (0, l.jsx)("div", {
                                                  className: tr.UU,
                                                  children: (0, l.jsx)(R.E, {
                                                      variant: "text-md/medium",
                                                      color: "text-default",
                                                      children: (0, l.jsx)(e5.A, {
                                                          userName: t.name,
                                                          displayNameStyles: w,
                                                          effectDisplayType: j || A ? e9.G.ANIMATED : e9.G.PLAIN,
                                                          loop: !0,
                                                      }),
                                                  }),
                                              }),
                                              (0, l.jsx)(tu, { subtitle: u }),
                                          ],
                                      }),
                                      null != t.gameAppId &&
                                          s !== eV.ik.GAME &&
                                          (0, l.jsx)(to, { gameAppId: t.gameAppId, gameAssetUrl: t.gameAssetUrl }),
                                  ],
                              }),
                          ],
                      }),
                  });
                  return o
                      ? u?.tooltip == null
                          ? (0, l.jsx)(v.m, {
                                text: t.name,
                                position: "left",
                                asContainer: !0,
                                tag: "div",
                                ariaHidden: !0,
                                children: n,
                            })
                          : (0, l.jsx)(eW.u, {
                                title: t.name,
                                body: u.tooltip,
                                position: "left",
                                asContainer: !0,
                                element: "div",
                                ariaHidden: !0,
                                children: n,
                            })
                      : n;
              },
          });
}
function to(e) {
    let { gameAppId: t, gameAssetUrl: n } = e,
        i = (0, eJ.O)(null == n ? t : null),
        s = n ?? (0, e7.C4)(i)?.src;
    return (0, l.jsx)(e8.V, { src: s, size: 32 });
}
function tc(e) {
    let { start: t } = e,
        { now: n } = (0, e4.G)(),
        l = Math.max(0, Math.round((n - t) / 1e3));
    return (0, te.WR)({ seconds: l, getFormatter: te.i });
}
function tu(e) {
    let { subtitle: t } = e;
    return null == t
        ? null
        : (0, l.jsxs)(I.B, {
              direction: "horizontal",
              align: "center",
              gap: 4,
              fullWidth: !1,
              children: [
                  null != t.icon && (0, l.jsx)("div", { className: tr.LY, children: t.icon }),
                  (0, l.jsx)(R.E, {
                      variant: "text-xs/medium",
                      color: t.textColor,
                      "aria-hidden": t.contentAriaHidden,
                      className: tr.o4,
                      children: t.content,
                  }),
              ],
          });
}
var td = n(890856),
    tx = n(320448),
    th = n(847374),
    tf = n(935154),
    tm = n(409626),
    tg = n(692969),
    tp = n(775602),
    tj = n(94416);
let tC = [-1, -1, -1, 0, 0, 2, 2, 1, 3, 1, 3].flatMap((e) => [e, -1]);
function tI() {
    let e = i.useRef(null),
        t = i.useRef(0),
        { hovered: n } = i.useContext(p),
        s = (0, C.bG)([tp.Ay], () => tp.Ay.useReducedMotion),
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
                t.current = (t.current + 1) % tC.length;
                let n = tC[t.current];
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
            className: tj.Y,
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
var tv = n(416852);
let tb = { left: 8, right: 8 };
function tN(e) {
    let { leading: t, trailing: n, label: s, color: r } = e,
        { collapsed: a } = i.useContext(p),
        o = a ? eU.A : i.Fragment;
    return (0, l.jsxs)(I.B, {
        direction: "horizontal",
        justify: a ? "center" : "start",
        align: "center",
        padding: tb,
        fullWidth: !1,
        className: tv.UP,
        children: [
            (0, l.jsx)("div", { className: tv.R4, children: t }),
            (0, l.jsx)(o, {
                children: (0, l.jsx)(Y.D, {
                    variant: "text-sm/medium",
                    color: r ?? "text-muted",
                    lineClamp: 1,
                    children: s,
                }),
            }),
            null != n && !a && (0, l.jsx)("div", { className: tv.ZY, children: n }),
        ],
    });
}
var tA = n(845311);
let tR = { top: 12, bottom: 4 },
    tE = 24 + tR.top + tR.bottom;
var tS = n(945584);
function tk(e) {
    switch (e.type) {
        case eV.ik.ACTIVE_NOW:
            return em.intl.string(em.t.TxqPQR);
        case eV.ik.ONLINE:
            return em.intl.string(em.t.WbGtnH);
        case eV.ik.OFFLINE:
            return em.intl.string(em.t.Vv0abJ);
        case eV.ik.GAME:
            return e.label;
        case eV.ik.LETTER:
            return null;
    }
}
function ty(e) {
    let { sectionIndex: t, isCollapsed: n, onToggleCollapsed: s } = e,
        r = (0, C.bG)([eH.A], () => eH.A.getSections()[t]),
        { collapsed: a } = i.useContext(p),
        o = r.key,
        c = i.useCallback(() => s(o), [s, o]),
        u = t > 0 ? tS.Ci : void 0,
        d = tk(r) ?? r.label ?? "";
    if (a)
        return (0, l.jsx)(v.m, {
            position: "left",
            text: d,
            ariaHidden: !0,
            children: (0, l.jsx)(I.B, {
                padding: tR,
                gap: 0,
                className: u,
                children: (0, l.jsx)(tN, { leading: (0, l.jsx)(tP, { section: r }), label: tk(r) }),
            }),
        });
    let x = em.intl.formatToPlainString(n ? ef.default.QcKHvf : ef.default.jsV9yS, { sectionName: d });
    return (0, l.jsx)(td.s, {
        "aria-label": x,
        onClick: c,
        focusProps: { offset: { right: 4 } },
        className: tS.wx,
        children: (0, l.jsx)(I.B, {
            padding: tR,
            gap: 0,
            className: u,
            children: (0, l.jsx)(tN, {
                leading: (0, l.jsx)(tP, { section: r }),
                label: (0, l.jsx)(tD, { section: r }),
                trailing: (0, l.jsx)(tw, { isCollapsed: n }),
            }),
        }),
    });
}
function tw(e) {
    let { isCollapsed: t } = e,
        n = t ? tx._ : th.a;
    return (0, l.jsx)(n, { size: "xs", color: "var(--icon-muted)", "aria-hidden": !0 });
}
function tP(e) {
    let { section: t } = e;
    switch (t.type) {
        case eV.ik.ACTIVE_NOW:
            return (0, l.jsx)(tI, {});
        case eV.ik.ONLINE:
            return (0, l.jsx)(tA.A, { hasOnlineFriends: !0, color: "var(--icon-muted)" });
        case eV.ik.OFFLINE:
            return (0, l.jsx)(tf.nW, { status: eh.clD.OFFLINE, size: 12 });
        case eV.ik.GAME:
            return (0, l.jsx)(tL, { assetUrl: t.gameAssetUrl, appId: t.gameAppId });
        case eV.ik.LETTER:
            return (0, l.jsx)(t_, { letter: t.label ?? "#" });
    }
}
function tD(e) {
    let { section: t } = e;
    return t.type === eV.ik.GAME ? (0, l.jsx)(tM, { appId: t.gameAppId, label: t.label }) : tk(t);
}
function tG(e) {
    return (0, tg.A)({ applicationId: e, source: tm.GameProfileSources.FriendsList, trackEntryPointImpression: !1 });
}
function tM(e) {
    let { appId: t, label: n } = e,
        i = tG(t);
    return null == i ? n : (0, l.jsx)(b.D, { tag: "span", onClick: i, className: tS.mO, children: n });
}
function tL(e) {
    let { appId: t, assetUrl: n } = e,
        i = (0, eJ.O)(null == n ? t : null),
        s = n ?? (0, e7.C4)(i)?.src,
        r = tG(t),
        a = (0, l.jsx)(e8.V, { src: s, size: 18, "aria-hidden": !0 });
    return null == r
        ? a
        : (0, l.jsx)(b.D, { tag: "span", onClick: r, tabIndex: -1, "aria-hidden": !0, className: tS.Gt, children: a });
}
function t_(e) {
    let { letter: t } = e;
    return (0, l.jsx)(R.E, { variant: "text-sm/bold", children: t });
}
var tT = n(214947),
    tF = n(283973),
    tz = n(184322);
let tU = Array.from({ length: 10 }, (e, t) =>
    (0, l.jsxs)(
        "div",
        {
            className: tz._f,
            "aria-hidden": "true",
            children: [(0, l.jsx)("div", { className: tz.RH }), (0, l.jsx)("div", { className: tz.rl })],
        },
        t,
    ),
);
function tO() {
    let { collapsed: e } = i.useContext(p);
    return e ? (0, l.jsx)(tH, {}) : (0, l.jsx)(tB, {});
}
function tB() {
    return (0, l.jsxs)("div", {
        className: tz.kL,
        children: [
            (0, l.jsx)("div", { className: tz.Dd, children: tU }),
            (0, l.jsx)(I.B, {
                align: "center",
                justify: "center",
                padding: { left: 24, right: 24 },
                className: tz.C,
                children: (0, l.jsxs)(I.B, {
                    align: "center",
                    gap: 16,
                    padding: { bottom: 80 },
                    children: [
                        (0, l.jsx)(tT.$, { size: "lg", color: S.A.colors.ICON_DEFAULT }),
                        (0, l.jsxs)(I.B, {
                            gap: 4,
                            className: tz.Dk,
                            children: [
                                (0, l.jsx)(Y.D, {
                                    variant: "heading-md/medium",
                                    children: em.intl.string(ef.default["4fvi9I"]),
                                }),
                                (0, l.jsx)(R.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: em.intl.string(ef.default.OZj923),
                                }),
                            ],
                        }),
                        (0, l.jsx)(eG, {
                            position: "bottom",
                            children: (e) => {
                                let { buttonRef: t, onClick: n } = e;
                                return (0, l.jsx)(B.$, {
                                    buttonRef: t,
                                    fullWidth: !0,
                                    size: "md",
                                    variant: "primary",
                                    icon: tF.R,
                                    text: em.intl.string(ef.default.au4mU4),
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
function tH() {
    return (0, l.jsx)("div", {
        className: tz.kL,
        children: (0, l.jsxs)("div", {
            className: r()(tz.Dd, tz.yZ),
            children: [
                (0, l.jsx)("div", {
                    className: tz._f,
                    children: (0, l.jsx)(eG, {
                        position: "left",
                        children: (e) => {
                            let { buttonRef: t, onClick: n } = e;
                            return (0, l.jsx)(v.m, {
                                text: em.intl.string(ef.default.au4mU4),
                                position: "bottom",
                                targetElementRef: t,
                                children: (0, l.jsx)(F.K, {
                                    buttonRef: t,
                                    size: "sm",
                                    variant: "secondary",
                                    icon: tF.R,
                                    "aria-label": em.intl.string(ef.default.au4mU4),
                                    onClick: n,
                                }),
                            });
                        },
                    }),
                }),
                tU,
            ],
        }),
    });
}
var tV = n(983851),
    tZ = n(730852),
    tW = n(47167),
    tq = n(798350);
function t$(e) {
    let { row: t, sectionType: n } = e,
        i = (0, C.bG)([tl.A], () => tl.A.getChannel(t.channelId), [t.channelId]),
        s = (0, tW.Ay)(i) ?? em.intl.string(em.t["/YzI63"]),
        a = (0, e0.gU)(i) ?? tV.H,
        o = (0, C.bG)([ts.A], () => ts.A.isInChannel(t.channelId));
    return (0, l.jsxs)(I.B, {
        gap: 4,
        padding: { top: 16, bottom: 16 },
        className: r()(tq.Os, tq.aW),
        role: "group",
        "aria-label": s,
        children: [
            (0, l.jsx)("b", { className: tq.h_ }),
            (0, l.jsx)(tN, {
                leading: (0, l.jsx)(a, { size: "xs", color: "var(--icon-voice-connected)", "aria-hidden": !0 }),
                trailing: (0, l.jsx)(tY, { channelId: t.channelId, channelName: s, isInChannel: o }),
                label: s,
                color: "text-default",
            }),
            (0, l.jsx)("div", {
                children: t.rows.map((e) => (0, l.jsx)(ta, { row: e, sectionType: n, inVoiceSubgroup: !0 }, e.userId)),
            }),
            t.extraMemberCount > 0 && (0, l.jsx)(tX, { count: t.extraMemberCount }),
        ],
    });
}
function tY(e) {
    let { channelId: t, channelName: n, isInChannel: i } = e;
    return (0, l.jsx)(ez.tG, {
        id: `voice:${t}:join`,
        children: (e) => {
            let { role: s, ...a } = e;
            return (0, l.jsx)("div", {
                role: s,
                className: r()(tq.PD, i && tq.RK),
                children: (0, l.jsx)(B.$, {
                    text: em.intl.string(i ? em.t["Hi1/aQ"] : em.t.VJlc0S),
                    variant: i ? "critical-secondary" : "active",
                    size: "sm",
                    "aria-label": i ? void 0 : em.intl.formatToPlainString(ef.default.gOIq4P, { channel: n }),
                    onClick: () => (i ? tZ.default.disconnect() : tZ.default.selectVoiceChannel(t)),
                    ...a,
                }),
            });
        },
    });
}
function tX(e) {
    let { count: t } = e,
        { collapsed: n } = i.useContext(p);
    return (0, l.jsxs)(I.B, {
        direction: "horizontal",
        align: "center",
        justify: n ? "center" : "start",
        fullWidth: !1,
        gap: 4,
        padding: { top: 4, bottom: 4 },
        children: [
            !n && (0, l.jsx)("b", { className: tq.hF }),
            (0, l.jsx)(R.E, {
                variant: "text-xs/medium",
                color: "text-muted",
                children: em.intl.formatToPlainString(n ? ef.default.SWPwHW : ef.default.d90MfZ, { count: t }),
            }),
        ],
    });
}
var tQ = n(182927);
function tK() {
    let e = (0, C.bG)([eH.A], () => eH.A.getSections()),
        { collapsed: t } = i.useContext(p),
        [n, s] = i.useState(() => new Set()),
        r = i.useCallback(
            (l) => {
                if (t) return !1;
                let i = e[l]?.key;
                return null != i && n.has(i);
            },
            [t, e, n],
        ),
        a = i.useCallback((e) => {
            s((t) => {
                let n = new Set(t);
                return (n.delete(e) || n.add(e), n);
            });
        }, []),
        o = i.useMemo(() => e.map((e, t) => (r(t) ? 1 : e.rows.length)), [e, r]),
        c = i.useId(),
        u = i.useRef(null),
        d = (0, eB.A)("friends-list", u),
        x = i.useCallback(
            (t, n) => {
                if (r(t)) return 0;
                let l = e[t]?.rows[n];
                return null == l
                    ? 48
                    : l.type === eV.VZ.VOICE_GROUP && l.rows.length > 1
                      ? 60 + 48 * l.rows.length + 28 * (l.extraMemberCount > 0)
                      : 48;
            },
            [e, r],
        ),
        h = i.useCallback(
            (t) => {
                let { section: n, row: i } = t;
                if (r(n)) return null;
                let s = e[n],
                    a = s?.rows[i];
                return null == a || null == s
                    ? null
                    : a.type === eV.VZ.VOICE_GROUP
                      ? (0, l.jsx)(t$, { row: a, sectionType: s.type }, a.key)
                      : (0, l.jsx)(ta, { row: a, sectionType: s.type }, a.userId);
            },
            [e, r],
        ),
        f = i.useCallback(
            (e) => {
                let { section: t } = e;
                return (0, l.jsx)(ty, { sectionIndex: t, isCollapsed: r(t), onToggleCollapsed: a });
            },
            [r, a],
        );
    return 0 === e.length
        ? (0, l.jsx)(tO, {})
        : (0, l.jsx)(T.F, {
              component: (0, l.jsx)(eU.A, {
                  children: (0, l.jsx)(T.H, { id: c, children: em.intl.string(em.t.TdEu5X) }),
              }),
              children: (0, l.jsx)(ez.hD, {
                  navigator: d,
                  children: (0, l.jsx)(ez.PR, {
                      children: (e) => {
                          let { ref: t, role: n, ...i } = e;
                          return (0, l.jsx)(eO.OZ, {
                              ref: (e) => {
                                  ((u.current = e), (t.current = e?.getScrollerNode() ?? null));
                              },
                              ...i,
                              className: tQ.p,
                              "aria-labelledby": c,
                              innerRole: n,
                              sections: o,
                              sectionHeight: tJ,
                              rowHeight: x,
                              renderSection: f,
                              renderRow: h,
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
function tJ(e) {
    return e > 0 ? tE + 12 : tE;
}
var t0 = n(259730),
    t6 = n(450030),
    t1 = n(783977),
    t3 = n(7689),
    t7 = n(683438),
    t8 = n(765671),
    t4 = n(980707),
    t2 = n(477782),
    t9 = n(606325),
    t5 = n(303911),
    ne = n(67746);
let nt = [
    [eV.Vj.ACTIVE_NOW, ef.default["/lMTzd"], ef.default.IzzWNM],
    [eV.Vj.GAME, ef.default.aKZ12v, ef.default.lE79Lm],
    [eV.Vj.ALPHABETICAL, ef.default.eVxFX3, null],
];
function nn(e) {
    let { width: t, closePopout: n } = e,
        i = (0, C.bG)([eH.A], () => eH.A.getGroupingMode()),
        s = (0, C.bG)([eH.A], () => eH.A.isVoiceGroupingEnabled());
    return (0, l.jsx)("div", {
        className: ne.k,
        style: { "--custom-group-config-popout-width": `${t ?? 264}px` },
        children: (0, l.jsxs)(t4.W, {
            navId: "friends-list-group-config",
            "aria-label": em.intl.string(ef.default["i+986w"]),
            onClose: n,
            onSelect: void 0,
            children: [
                (0, l.jsx)(t2.rX, {
                    label: em.intl.string(ef.default.OvTyCX),
                    children: nt.map((e) => {
                        let [t, s, r] = e;
                        return (0, l.jsx)(
                            t2.iD,
                            {
                                id: `friends-list-grouping-mode-${t}`,
                                label: em.intl.string(s),
                                subtext: null != r ? em.intl.string(r) : null,
                                group: "friends-list-grouping-select",
                                checked: i === t,
                                action: () => {
                                    ((0, t9.Je)(t), n());
                                },
                            },
                            `friends-list-grouping-mode-${t}`,
                        );
                    }),
                }),
                (0, t5.kR)(i) &&
                    (0, l.jsx)(t2.rX, {
                        label: em.intl.string(em.t["8/udY0"]),
                        children: (0, l.jsx)(t2.fP, {
                            id: "friends-list-group-voice-channels",
                            label: em.intl.string(ef.default["/b1eZT"]),
                            subtext: em.intl.string(ef.default["/bZ+Av"]),
                            checked: s,
                            action: () => {
                                ((0, t9.Lk)(!s), n());
                            },
                        }),
                    }),
            ],
        }),
    });
}
n(321073);
var nl = n(602853),
    ni = n(308528),
    ns = n(565860),
    nr = n(723690),
    na = n(976860),
    no = n(994500),
    nc = n(972910);
function nu(e) {
    let { friend: t, appendGap: n, closePopout: s } = e,
        [a, o] = i.useState(!1),
        {
            status: c,
            isMobile: u,
            isVR: d,
        } = (0, C.cf)([ti.A], () => ({
            status: ti.A.getStatus(t.userId),
            isMobile: ti.A.isMobileOnline(t.userId),
            isVR: ti.A.isVROnline(t.userId),
        }));
    return (0, l.jsx)(b.D, {
        className: r()(nc.Ke, { [nc.w$]: n }),
        onMouseEnter: () => o(!0),
        onMouseLeave: () => o(!1),
        onClick: function () {
            let e = tl.A.getDMFromUserId(t.user.id);
            (null != e ? (0, na.pX)(eh.BVt.CHANNEL(eh.ME, e)) : ni.A.openPrivateChannel({ recipientIds: t.user.id }),
                s?.());
        },
        children: (0, l.jsx)(nr.A, {
            user: t.user,
            status: c,
            isMobile: u,
            isVR: d,
            subText: (0, l.jsx)(R.E, { variant: "text-xs/medium", color: "text-muted", children: t.user.username }),
            hovered: a,
            showAccountIdentifier: !1,
            className: nc.eF,
        }),
    });
}
function nd(e) {
    let { searchResults: t, closePopout: n } = e,
        i = (0, nl.r)(S.A.space.SPACE_XS),
        s = (0, nl.r)(S.A.space.SPACE_XXS),
        r = 36 + 2 * i,
        a = [t.length];
    return (0, l.jsx)(eO.OZ, {
        renderRow: (e) => {
            let { section: i, row: s } = e,
                r = t[s];
            return (0, l.jsx)(nu, { friend: r, appendGap: s !== t.length - 1, closePopout: n }, r.userId);
        },
        rowHeight: (e, n) => (n === t.length - 1 ? r : r + s),
        sections: a,
        sectionHeight: 18 + s,
        renderSection: (e) => {
            let { section: n } = e;
            return (0, l.jsx)(R.E, {
                className: nc.nw,
                variant: "text-sm/medium",
                children: em.intl.format(em.t.xIWGxu, { count: t.length }),
            });
        },
        className: nc.Xv,
    });
}
function nx() {
    return (0, l.jsx)(R.E, {
        variant: "text-sm/medium",
        className: nc.n1,
        children: em.intl.string(ef.default["0usxBd"]),
    });
}
function nh() {
    return (0, l.jsx)(R.E, {
        variant: "text-sm/medium",
        className: nc.n1,
        children: em.intl.string(ef.default.VH2HXW),
    });
}
function nf(e) {
    let { rawQuery: t, closePopout: n } = e,
        i = (0, ns.HI)(t),
        s = (0, C.bG)(
            [no.A, D.default],
            () => {
                if ("" === i) return [];
                let e = no.A.getFriendIDs(),
                    t = [];
                return (
                    e.forEach((e) => {
                        let n = D.default.getUser(e);
                        if (void 0 === n) return;
                        let l = no.A.getNickname(e),
                            s = [(0, ns.HI)(n.username)];
                        (null != n.globalName && s.push((0, ns.HI)(n.globalName)),
                            null != l && s.push((0, ns.HI)(l)),
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
        ? (0, l.jsx)(nx, {})
        : s.length > 0
          ? (0, l.jsx)(nd, { searchResults: s, closePopout: n })
          : (0, l.jsx)(nh, {});
}
function nm(e) {
    let { query: t, width: n, closePopout: i } = e;
    return (0, l.jsx)("div", {
        className: r()(nc.kL, nc.zZ),
        style: { "--custom-search-friends-popout-width": `${n ?? 264}px` },
        children: (0, l.jsx)(nf, { rawQuery: t, closePopout: i }),
    });
}
function ng(e) {
    let { closePopout: t } = e,
        [n, s] = i.useState("");
    return (0, l.jsx)(_.l, {
        children: (0, l.jsxs)("div", {
            className: nc.kL,
            children: [
                (0, l.jsx)("div", {
                    className: nc.M6,
                    children: (0, l.jsx)(U.k, { placeholder: em.intl.string(em.t.lLDtTK), value: n, onChange: s }),
                }),
                (0, l.jsx)(nf, { rawQuery: n, closePopout: t }),
            ],
        }),
    });
}
var np = n(540950);
function nj() {
    let [e, t] = i.useState(null);
    i.useEffect(() => {
        function e() {
            t(null);
        }
        return (
            m._.subscribe(eh.jej.FRIENDS_SIDEBAR_RESIZED, e),
            () => {
                m._.unsubscribe(eh.jej.FRIENDS_SIDEBAR_RESIZED, e);
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
    (0, t8.i4)(c, h);
    let f = n
        ? (0, l.jsx)(nI, {})
        : "search" === e
          ? (0, l.jsx)(nA, { isSearching: !0, setActivePopout: t, contentWidthRef: o })
          : (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(nC, {
                        compact: r,
                        contentWidthRef: o,
                        isPopoutOpen: "groupConfig" === e,
                        setActivePopout: t,
                    }),
                    (0, l.jsxs)(I.B, {
                        direction: "horizontal",
                        align: "center",
                        fullWidth: !1,
                        ref: x,
                        children: [
                            (0, l.jsx)(nA, { isSearching: !1, setActivePopout: t, contentWidthRef: o }),
                            (0, l.jsx)(nR, { popoutPosition: "bottom" }),
                            s
                                ? null
                                : (0, l.jsx)(nE, {
                                      icon: t0.E,
                                      label: em.intl.string(ef.default.JZCSRZ),
                                      onClick: () => u.A.setFriendsSidebarCollapsed(!0),
                                  }),
                        ],
                    }),
                ],
            });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(nC, { ghost: !0, ref: d }),
            (0, l.jsx)(I.B, {
                direction: "horizontal",
                fullWidth: !1,
                justify: n ? "center" : "space-between",
                padding: 8,
                className: np.wx,
                ref: c,
                children: f,
            }),
        ],
    });
}
function nC(e) {
    let { compact: t = !1, ghost: n = !1, contentWidthRef: s, isPopoutOpen: a = !1, setActivePopout: o, ref: c } = e,
        u = i.useRef(null);
    function d() {
        o?.(null);
    }
    let x = t
            ? (0, l.jsx)(tT.$, { size: "xs", color: "var(--icon-default)" })
            : (0, l.jsx)(R.E, {
                  variant: "heading-md/medium",
                  tag: "span",
                  children: em.intl.string(ef.default["7kJd9e"]),
              }),
        h = (0, l.jsx)(b.D, {
            className: r()(np.Iw, { [np.qy]: n }),
            "aria-label": em.intl.string(ef.default["7kJd9e"]),
            "aria-hidden": n,
            "aria-haspopup": n ? void 0 : "menu",
            "aria-expanded": n ? void 0 : a,
            onClick: n ? void 0 : () => o?.(a ? null : "groupConfig"),
            innerRef: c ?? u,
            children: (0, l.jsxs)(I.B, {
                direction: "horizontal",
                gap: 4,
                align: "center",
                padding: { top: 6, bottom: 6, left: 8, right: 8 },
                className: np.$E,
                children: [x, (0, l.jsx)(th.a, { color: "var(--text-default)", size: "sm" })],
            }),
        });
    if (n) return h;
    let f = (0, l.jsx)(H.Y, {
        targetElementRef: u,
        shouldShow: a,
        onRequestClose: d,
        position: "bottom",
        align: "left",
        renderPopout: () => (0, l.jsx)(nn, { width: s?.current, closePopout: d }),
        children: () => h,
    });
    return a ? f : (0, l.jsx)(v.m, { text: em.intl.string(ef.default.wvbB3Z), asContainer: !0, children: f });
}
function nI() {
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
        renderPopout: () => (0, l.jsx)(nv, { onClose: r }),
        children: () =>
            (0, l.jsx)(nE, {
                buttonRef: e,
                icon: t6.U,
                label: em.intl.string(ef.default["Dr/+ku"]),
                onContextMenu: s,
                onClick: () => u.A.setFriendsSidebarCollapsed(!1),
            }),
    });
}
function nv(e) {
    let { onClose: t } = e;
    return (0, l.jsxs)(I.B, {
        gap: 4,
        padding: 8,
        fullWidth: !1,
        className: np.QG,
        children: [
            (0, l.jsx)(nb, {}),
            (0, l.jsx)(nN, { onClose: t }),
            (0, l.jsx)(nR, { popoutPosition: "left", tooltipPosition: "left" }),
        ],
    });
}
function nb() {
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
        renderPopout: () => (0, l.jsx)(nn, { closePopout: s }),
        children: () =>
            (0, l.jsx)(nE, {
                buttonRef: e,
                icon: t1.R,
                label: em.intl.string(ef.default["i+986w"]),
                tooltipPosition: "left",
                onClick: () => n(!t),
            }),
    });
}
function nN(e) {
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
        renderPopout: () => (0, l.jsx)(ng, { closePopout: a }),
        children: () =>
            (0, l.jsx)(nE, {
                buttonRef: n,
                icon: t3.MagnifyingGlassIcon,
                label: em.intl.string(ef.default["60M8Ae"]),
                tooltipPosition: "left",
                onClick: () => r(!s),
            }),
    });
}
function nA(e) {
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
              renderPopout: () => (0, l.jsx)(nm, { query: a, width: s.current, closePopout: c }),
              children: () =>
                  (0, l.jsx)("div", {
                      ref: r,
                      className: np.wB,
                      children: (0, l.jsx)(t7.I, {
                          autoFocus: !0,
                          "aria-label": em.intl.string(ef.default["60M8Ae"]),
                          placeholder: em.intl.string(em.t.lLDtTK),
                          query: a,
                          onChange: o,
                          onClear: () => o(""),
                          size: "sm",
                      }),
                  }),
          })
        : (0, l.jsx)(nE, {
              icon: t3.MagnifyingGlassIcon,
              label: em.intl.string(ef.default["60M8Ae"]),
              onClick: () => n("search"),
          });
}
function nR(e) {
    let { popoutPosition: t, tooltipPosition: n, onClose: i } = e;
    return (0, l.jsx)(eG, {
        position: t,
        onClose: i,
        children: (e) => {
            let { buttonRef: t, onClick: i } = e;
            return (0, l.jsx)(nE, {
                buttonRef: t,
                icon: tF.R,
                label: em.intl.string(ef.default.au4mU4),
                tooltipPosition: n,
                onClick: i,
            });
        },
    });
}
function nE(e) {
    let { icon: t, label: n, onClick: s, onContextMenu: r, tooltipPosition: a, buttonRef: o } = e,
        c = i.useRef(null),
        u = o ?? c;
    return (0, l.jsx)(v.m, {
        text: n,
        position: a,
        targetElementRef: u,
        anchorRef: u,
        children: (0, l.jsx)(b.D, {
            "aria-label": n,
            onClick: s,
            onContextMenu: r,
            innerRef: u,
            className: np.x6,
            children: (0, l.jsx)(t, { size: "sm", color: "currentColor" }),
        }),
    });
}
var nS = n(45863);
function nk() {
    let e = i.useRef(null),
        t = i.useRef(null),
        n = i.useRef(!1),
        s = i.useRef(0),
        C = (0, j.c)(),
        { isHoveringOrFocusing: I } = (0, x.A)(e),
        { appBarToggleEnabled: v } = g.A.useConfig({ location: "FriendsSidebar" }),
        b = i.useCallback((n) => {
            ((s.current = n),
                null != e.current &&
                    ((e.current.style.width = `${n}px`),
                    e.current.style.setProperty("--custom-friends-sidebar-width", `${n}px`)),
                t.current?.setAttribute("aria-valuenow", `${n}`));
        }, []);
    i.useLayoutEffect(() => {
        n.current || b(C ? 64 : 280);
    }, [C, b]);
    let N = i.useCallback(
            (e) => {
                b(e);
                let t = e < 200;
                t !== C && (0, a.flushSync)(() => u.A.setFriendsSidebarCollapsed(t));
            },
            [b, C],
        ),
        A = i.useCallback(() => {
            ((n.current = !0), t.current?.classList?.add(nS.cB), m._.dispatch(eh.jej.FRIENDS_SIDEBAR_RESIZED));
        }, []),
        R = i.useCallback((e) => {
            ((n.current = !1), t.current?.setAttribute("aria-valuenow", `${e}`), t.current?.classList?.remove(nS.cB));
        }, []),
        E = i.useCallback((e) => (v ? Math.min(Math.max(e, 280), 320) : e < 200 ? 64 : Math.min(e, 320)), [v]),
        S = (0, d.A)({
            resizableDomNodeRef: e,
            minDimension: v ? 200 : 64,
            maxDimension: 320,
            orientation: d.R.HORIZONTAL_LEFT,
            onElementResizeStart: A,
            onApplyDimension: N,
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
                        l = v ? 280 : 64;
                        break;
                    case "End":
                        l = 320;
                        break;
                    default:
                        return;
                }
                t.preventDefault();
                let i = E(l);
                ((n.current = !0), N(i), (n.current = !1));
            },
            [v, E, N],
        ),
        y = (0, f.NC)(),
        w = i.useMemo(() => ({ collapsed: C, hovered: I }), [C, I]);
    return (0, l.jsx)(h.A.Provider, {
        value: void 0,
        children: (0, l.jsx)(o.N, {
            theme: y,
            children: (n) =>
                (0, l.jsx)(p.Provider, {
                    value: w,
                    children: (0, l.jsxs)("div", {
                        ref: e,
                        className: r()(nS.kL, n),
                        children: [
                            (0, l.jsx)(c.vN, {
                                children: (0, l.jsx)("div", {
                                    ref: t,
                                    role: "separator",
                                    tabIndex: 0,
                                    "aria-orientation": "vertical",
                                    "aria-label": em.intl.string(ef.default["F3+Xei"]),
                                    "aria-valuemin": v ? 280 : 64,
                                    "aria-valuemax": 320,
                                    className: nS.Di,
                                    onMouseDown: S,
                                    onKeyDown: k,
                                }),
                            }),
                            (0, l.jsx)(nj, {}),
                            (0, l.jsxs)("div", {
                                className: nS.rf,
                                children: [
                                    (0, l.jsx)(eL, {}),
                                    (0, l.jsx)(c.xp, { containerRef: e, children: (0, l.jsx)(tK, {}) }),
                                ],
                            }),
                        ],
                    }),
                }),
        }),
    });
}
