(n.r(t), n.d(t, { default: () => nw }));
var l = n(477900),
    i = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(333007),
    o = n(43990),
    u = n(559106),
    c = n(604681);
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
    D = n(454932),
    P = n(287809),
    G = n(902902);
function M() {
    return (0, C.cf)([G.A], () => ({ incoming: G.A.getIncomingRequests(), outgoing: G.A.getOutgoingRequests() }));
}
var L = n(739187),
    _ = n(857250),
    T = n(97483),
    F = n(305866),
    z = n(707554),
    U = n(408278),
    B = n(173936),
    O = n(95477),
    H = n(103557),
    V = n(821609),
    Z = n(922016),
    W = n(376728),
    q = n(279208),
    $ = n(189883),
    X = n(237309),
    Y = n(957565),
    Q = n(297264),
    K = n(625903),
    J = n(689175),
    ee = n(559647),
    et = n(428678),
    en = n(789645),
    el = n(933832),
    ei = n(39623),
    es = n(123292),
    er = n(216964),
    ea = n(769015),
    eo = n(640708),
    eu = n(22212),
    ec = n(409978),
    ed = n(390848),
    ex = n(780964),
    eh = n(766075),
    ef = n(427262),
    em = n(652215),
    eg = n(682530),
    ep = n(660183),
    ej = n(788868);
let eC = "Friends Sidebar Add Friend Popout";
function eI() {
    let { incoming: e, outgoing: t } = M(),
        n = i.useMemo(() => [...e, ...t], [e, t]);
    return ((0, ec.y)(n), 0 === n.length)
        ? null
        : (0, l.jsxs)(I.B, {
              gap: 4,
              padding: { top: 12, bottom: 16, left: 16, right: 8 },
              className: ej.uW,
              children: [
                  (0, l.jsxs)(I.B, {
                      direction: "horizontal",
                      align: "center",
                      justify: "space-between",
                      padding: { left: 8, right: 8 },
                      className: ej.UP,
                      children: [
                          (0, l.jsxs)(I.B, {
                              direction: "horizontal",
                              align: "center",
                              gap: 8,
                              fullWidth: !1,
                              children: [
                                  (0, l.jsx)(Q.D, {
                                      variant: "text-sm/medium",
                                      color: "text-muted",
                                      children: ep.intl.string(ep.t.fyA115),
                                  }),
                                  e.length > 0 && (0, l.jsx)(A.hV, { count: e.length }),
                              ],
                          }),
                          (0, l.jsx)(v.m, {
                              text: ep.intl.string(eg.default["2vock0"]),
                              position: "bottom",
                              children: (0, l.jsx)(U.K, {
                                  icon: K.SettingsIcon,
                                  size: "sm",
                                  variant: "icon-only",
                                  "aria-label": ep.intl.string(eg.default["2vock0"]),
                                  onClick: () => (0, eh.openUserSettings)(ex.X.FRIEND_REQUESTS_CATEGORY),
                              }),
                          }),
                      ],
                  }),
                  (0, l.jsxs)(J.Ch, {
                      className: ej.Ge,
                      disableFocusRingScope: !0,
                      children: [
                          t.length > 0 && (0, l.jsx)(ev, { outgoing: t }),
                          e.map((e) => (0, l.jsx)(eR, { request: e }, e.key)),
                      ],
                  }),
              ],
          });
}
function ev(e) {
    let { outgoing: t } = e,
        n = i.useRef(null),
        [s, a] = i.useState(!1);
    return (0, l.jsx)(Z.Y, {
        targetElementRef: n,
        shouldShow: s,
        onRequestClose: () => a(!1),
        position: "right",
        align: "top",
        renderPopout: () => (0, l.jsx)(eb, { outgoing: t, returnRef: n }),
        children: () =>
            (0, l.jsxs)(b.D, {
                innerRef: n,
                className: r()(ej.nM, ej.b8, ej.d, { [ej.$F]: s }),
                "aria-expanded": s,
                onClick: () => a(!s),
                children: [
                    (0, l.jsx)("div", {
                        className: ej.iE,
                        children: (0, l.jsx)(ee.SendMessageIcon, { size: "sm", color: S.A.colors.ICON_DEFAULT }),
                    }),
                    (0, l.jsxs)("div", {
                        className: ej.Qq,
                        children: [
                            (0, l.jsx)(R.E, {
                                variant: "text-md/medium",
                                color: "text-default",
                                lineClamp: 1,
                                children: ep.intl.string(eg.default.JHcSBI),
                            }),
                            (0, l.jsx)(R.E, {
                                variant: "text-xs/medium",
                                color: "text-muted",
                                lineClamp: 1,
                                children: ep.intl.format(eg.default.PY1iDb, { count: t.length }),
                            }),
                        ],
                    }),
                    (0, l.jsx)("div", {
                        className: ej.ai,
                        children: (0, l.jsx)(E.u, { size: "sm", color: S.A.colors.ICON_MUTED }),
                    }),
                ],
            }),
    });
}
function eb(e) {
    let { outgoing: t, returnRef: n } = e;
    return (0, l.jsxs)(F.l, {
        className: ej.YM,
        returnRef: n,
        "aria-label": ep.intl.string(eg.default.JHcSBI),
        children: [
            (0, l.jsx)(I.B, {
                direction: "horizontal",
                align: "center",
                padding: { left: 8, right: 8 },
                className: ej.S1,
                children: (0, l.jsx)(Q.D, {
                    variant: "text-sm/medium",
                    color: "text-subtle",
                    children: ep.intl.format(eg.default.eS6Nek, { count: t.length }),
                }),
            }),
            (0, l.jsx)(J.Ch, { className: ej.Ge, children: t.map((e) => (0, l.jsx)(eN, { request: e }, e.key)) }),
        ],
    });
}
function eN(e) {
    let { request: t } = e,
        n = (0, C.bG)([P.default], () => P.default.getUser(t.userId));
    return null == n ? null : (0, l.jsx)(eA, { request: t, user: n });
}
function eA(e) {
    let { request: t, user: n } = e,
        s = i.useRef(null),
        { isHoveringOrFocusing: r } = (0, x.A)(s),
        a = (0, D.o)({ user: n, applicationId: t.applicationId, isGameRelationship: t.isGameRelationship }),
        { cancelFriendRequest: o } = (0, ed.I)({
            userId: t.userId,
            applicationId: t.applicationId,
            isGameRelationship: t.isGameRelationship,
            location: eC,
        });
    return (0, l.jsxs)(I.B, {
        ref: s,
        direction: "horizontal",
        align: "center",
        gap: 8,
        padding: 8,
        className: ej.nM,
        children: [
            (0, l.jsx)(ek, { user: n, pendingFriendRequestInfo: a, animate: r }),
            (0, l.jsx)(v.m, {
                text: ep.intl.string(ep.t.eaq81S),
                children: (0, l.jsx)(U.K, {
                    icon: et.K,
                    size: "sm",
                    variant: "icon-only",
                    "aria-label": eS(em.eA$.PENDING_OUTGOING, a, ep.intl.string(ep.t.eaq81S)),
                    onClick: o,
                }),
            }),
        ],
    });
}
function eR(e) {
    let { request: t } = e,
        n = (0, C.bG)([P.default], () => P.default.getUser(t.userId));
    return null == n ? null : (0, l.jsx)(eE, { request: t, user: n });
}
function eE(e) {
    let { request: t, user: n } = e,
        s = i.useRef(null),
        { isHoveringOrFocusing: a } = (0, x.A)(s),
        [o, u] = i.useState(!1),
        c = (0, D.o)({ user: n, applicationId: t.applicationId, isGameRelationship: t.isGameRelationship }),
        { acceptFriendRequest: d, cancelFriendRequest: h } = (0, ed.I)({
            userId: t.userId,
            applicationId: t.applicationId,
            isGameRelationship: t.isGameRelationship,
            location: eC,
            onConfirm: () =>
                (0, L.P)((0, _.o)(ep.intl.formatToPlainString(ep.t.cRwkp7, { name: ef.Ay.getName(n) }), T.Ck.SUCCESS)),
            onFinally: () => u(!1),
        });
    return (0, l.jsxs)(I.B, {
        ref: s,
        direction: "horizontal",
        align: null != c.note ? "start" : "center",
        gap: 8,
        padding: 8,
        className: r()(ej.nM, ej.b8, ej.ZJ),
        children: [
            (0, l.jsx)(ek, {
                user: n,
                pendingFriendRequestInfo: c,
                animate: a,
                children: null != c.note && (0, l.jsx)(ew, { note: c.note }),
            }),
            (0, l.jsxs)(I.B, {
                direction: "horizontal",
                align: "center",
                gap: 4,
                fullWidth: !1,
                children: [
                    (0, l.jsx)("div", {
                        className: ej.L6,
                        children: (0, l.jsx)(v.m, {
                            text: ep.intl.string(ep.t.xuio0C),
                            children: (0, l.jsx)(U.K, {
                                icon: en.P,
                                size: "sm",
                                variant: "icon-only",
                                "aria-label": eS(em.eA$.PENDING_INCOMING, c, ep.intl.string(ep.t.xuio0C)),
                                onClick: h,
                            }),
                        }),
                    }),
                    (0, l.jsx)(v.m, {
                        text: ep.intl.string(ep.t.Zcibdf),
                        children: (0, l.jsx)(U.K, {
                            icon: el.CheckmarkLargeIcon,
                            size: "sm",
                            variant: "icon-only",
                            "aria-label": eS(em.eA$.PENDING_INCOMING, c, ep.intl.string(ep.t.Zcibdf)),
                            loading: o,
                            onClick: function () {
                                (u(!0), d());
                            },
                        }),
                    }),
                ],
            }),
        ],
    });
}
function eS(e, t, n) {
    let { displayName: l, applicationName: i } = t,
        s = { action: n, name: l, application: i ?? "" };
    if (e === em.eA$.PENDING_INCOMING) {
        let e = null != i ? ep.t.kSmk1F : ep.t["+YIVE1"];
        return ep.intl.formatToPlainString(e, s);
    }
    let r = null != i ? ep.t.BfqcNh : ep.t.vrDIev;
    return ep.intl.formatToPlainString(r, s);
}
function ek(e) {
    let { user: t, pendingFriendRequestInfo: n, animate: i, children: s } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(y.eu, {
                src: t.getAvatarURL(void 0, (0, k.FT)(k._3.SIZE_32), i),
                size: k._3.SIZE_32,
                "aria-hidden": !0,
            }),
            (0, l.jsxs)("div", {
                className: ej.Qq,
                children: [
                    (0, l.jsx)(R.E, {
                        variant: "text-md/medium",
                        color: "text-default",
                        lineClamp: 1,
                        children: n.displayName,
                    }),
                    (0, l.jsx)(ey, { pendingFriendRequestInfo: n }),
                    s,
                ],
            }),
        ],
    });
}
function ey(e) {
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
                              null != n && (0, l.jsx)(eo.A, { height: 2, width: 2 }),
                              (0, l.jsx)(ea.A, { game: i, size: ea.M.XXSMALL }),
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
function ew(e) {
    let { note: t } = e,
        [n, s] = i.useState(!1);
    return n
        ? (0, l.jsxs)(R.E, {
              variant: "text-xs/normal",
              color: "text-subtle",
              tag: "p",
              className: ej.N4,
              children: [
                  (0, l.jsx)(er.c, { size: "xxs", color: S.A.colors.ICON_SUBTLE, className: ej.TG }),
                  t,
                  " ",
                  (0, l.jsx)(es.Q, {
                      text: ep.intl.string(eg.default.QX4H2E),
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
                  (0, l.jsx)(ei.EyeIcon, { size: "xxs", color: S.A.colors.TEXT_BRAND }),
                  (0, l.jsx)(es.Q, {
                      text: ep.intl.string(eg.default.xZupEi),
                      textVariant: "text-xs/medium",
                      onClick: function () {
                          (s(!0), (0, eu.Yq)({ analyticsLocation: eC, noteLength: t.length }));
                      },
                  }),
              ],
          });
}
var eD = n(499516);
let eP = { sending: !1, success: null, error: null };
function eG(e, t) {
    switch (t.type) {
        case "RESET":
            return eP;
        case "SENDING":
            return { ...eP, sending: !0 };
        case "SUCCESS":
            return { ...eP, sending: !1, success: t.text };
        case "ERROR":
            return { ...eP, sending: !1, error: t.text };
    }
}
function eM() {
    let [e, t] = i.useReducer(eG, eP),
        { sending: n, success: s, error: r } = e,
        [a, o] = i.useState(""),
        [u, c] = i.useState(""),
        [d, x] = i.useState(!1),
        { enabled: h } = $.A.useConfig({ location: "AddFriendPopout" });
    async function f() {
        x(!0);
        try {
            let e = await W.Ay.createFriendInvite(null, em.PE1.ADD_FRIENDS_POPOUT);
            (0, Y.C)(
                (0, q.A)(e.code),
                () => (0, L.P)((0, _.o)(ep.intl.string(ep.t.tBOSx4), T.Ck.SUCCESS)),
                () => (0, L.P)((0, _.o)(ep.intl.string(ep.t.R0RpRX), T.Ck.FAILURE)),
            );
        } catch {
            (0, L.P)((0, _.o)(ep.intl.string(ep.t.R0RpRX), T.Ck.FAILURE));
        } finally {
            x(!1);
        }
    }
    return (0, l.jsx)(F.l, {
        children: (0, l.jsx)("div", {
            className: eD.kL,
            children: (0, l.jsxs)(z.F, {
                component: (0, l.jsxs)("div", {
                    className: eD.wx,
                    children: [
                        (0, l.jsx)("div", {
                            className: eD.gn,
                            children: (0, l.jsx)(R.E, {
                                variant: "text-md/medium",
                                color: "text-default",
                                children: ep.intl.string(ep.t.zIJnA6),
                            }),
                        }),
                        (0, l.jsx)(v.m, {
                            text: ep.intl.string(ep.t.t1T3kD),
                            position: "bottom",
                            align: "right",
                            caretConfig: { align: "end" },
                            children: (0, l.jsx)(U.K, {
                                icon: B.LinkIcon,
                                size: "sm",
                                onClick: f,
                                "aria-label": ep.intl.string(ep.t.t1T3kD),
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
                                (0, X.Ay)({
                                    discordTag: a,
                                    note: h && "" !== u ? u : void 0,
                                    location: "Add Friend Popout",
                                    errorUxConfig: X.gB.SHOW_ONLY_IF_ACTION_NEEDED,
                                })
                                    .then((e) => {
                                        (t({ type: "SUCCESS", text: e }), o(""), c(""));
                                    })
                                    .catch((e) => t({ type: "ERROR", text: e })));
                        },
                        autoComplete: "off",
                        children: (0, l.jsxs)("div", {
                            className: eD.hQ,
                            children: [
                                (0, l.jsx)(O.k, {
                                    value: a,
                                    onChange: (e) => {
                                        (o(e), t({ type: "RESET" }));
                                    },
                                    label: ep.intl.string(ep.t["5C3rVr"]),
                                    fullWidth: !0,
                                    required: !0,
                                    placeholder: ep.intl.string(ep.t.jx0GiG),
                                    successMessage: s,
                                    error: r,
                                    disabled: n,
                                    autoComplete: "off",
                                    "data-form-type": "other",
                                    "data-lpignore": !0,
                                    "data-1p-ignore": !0,
                                }),
                                h &&
                                    (0, l.jsx)(H.f, {
                                        label: ep.intl.string(ep.t["6dVPSI"]),
                                        value: u,
                                        onChange: function (e) {
                                            (c(e), t({ type: "RESET" }));
                                        },
                                        helperText: ep.intl.string(ep.t.UtfQNw),
                                        maxLength: X.XG,
                                        showCharacterCount: !0,
                                        rows: 3,
                                        placeholder: ep.intl.string(ep.t.bTMtdN),
                                        disabled: n,
                                    }),
                                (0, l.jsx)(V.$, {
                                    variant: "primary",
                                    size: "md",
                                    text: ep.intl.string(ep.t.HWT3wh),
                                    fullWidth: !0,
                                    disabled: "" === a.trim() || n,
                                    type: "submit",
                                }),
                            ],
                        }),
                    }),
                    (0, l.jsx)(eI, {}),
                ],
            }),
        }),
    });
}
function eL(e) {
    let { position: t, onClose: n, spacing: s, children: r } = e,
        a = i.useRef(null),
        [o, u] = i.useState(!1),
        c = i.useCallback(() => {
            (u(!1), n?.());
        }, [n]);
    return (
        i.useEffect(
            () => (
                m._.subscribe(em.jej.FRIENDS_SIDEBAR_RESIZED, c),
                () => {
                    m._.unsubscribe(em.jej.FRIENDS_SIDEBAR_RESIZED, c);
                }
            ),
            [c],
        ),
        (0, l.jsx)(Z.Y, {
            targetElementRef: a,
            shouldShow: o,
            onRequestClose: c,
            position: t,
            spacing: s,
            ignoreModalClicks: !0,
            renderPopout: () => (0, l.jsx)(eM, {}),
            children: () => r({ buttonRef: a, onClick: () => u(!o) }),
        })
    );
}
var e_ = n(669850);
function eT() {
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
        a = (0, C.bG)([P.default], () => P.default.getUser(r), [r]);
    return null == s || null == a
        ? null
        : (0, l.jsx)(I.B, {
              padding: 8,
              className: e_.uW,
              children: (0, l.jsx)(
                  eL,
                  {
                      position: "left",
                      spacing: 16,
                      children: (i) => {
                          let { buttonRef: r, onClick: o } = i;
                          return t
                              ? (0, l.jsx)(eF, {
                                    buttonRef: r,
                                    onClick: o,
                                    incoming: e,
                                    facepileUserIds: n,
                                    latestUser: a,
                                })
                              : (0, l.jsx)(ez, {
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
function eF(e) {
    let { buttonRef: t, onClick: n, incoming: i, facepileUserIds: s, latestUser: r } = e,
        { isHoveringOrFocusing: a } = (0, x.A)(t);
    return (0, l.jsx)(v.m, {
        text: ep.intl.string(ep.t.fyA115),
        position: "left",
        targetElementRef: t,
        children: (0, l.jsx)(b.D, {
            innerRef: t,
            className: e_.Wj,
            "aria-label": ep.intl.formatToPlainString(ep.t.xxFCW8, { count: i.length }),
            onClick: n,
            children: (0, l.jsx)(N.Q, {
                rounded: 1 === s.length,
                lowerBadge: (0, l.jsx)(A.hV, { count: i.length, "aria-hidden": !0 }),
                lowerBadgeSize: { width: (0, A.o6)(i.length) },
                children: (0, l.jsx)("div", {
                    className: e_.UI,
                    children: (0, l.jsx)(eU, { facepileUserIds: s, latestUser: r, animate: a }),
                }),
            }),
        }),
    });
}
function ez(e) {
    let { buttonRef: t, onClick: n, incoming: i, facepileUserIds: s, latestRequest: r, latestUser: a } = e,
        { isHoveringOrFocusing: o } = (0, x.A)(t),
        { displayName: u } = (0, D.o)({
            user: a,
            applicationId: r.applicationId,
            isGameRelationship: r.isGameRelationship,
        });
    return (0, l.jsxs)(b.D, {
        innerRef: t,
        className: e_.nM,
        onClick: n,
        children: [
            (0, l.jsx)(eU, { facepileUserIds: s, latestUser: a, animate: o }),
            (0, l.jsxs)("div", {
                className: e_.Qq,
                children: [
                    (0, l.jsx)(R.E, {
                        variant: "text-md/medium",
                        color: "text-default",
                        lineClamp: 1,
                        children: ep.intl.string(ep.t.fyA115),
                    }),
                    (0, l.jsx)(R.E, { variant: "text-xs/medium", color: "text-muted", lineClamp: 1, children: u }),
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
                        className: e_.ai,
                        children: (0, l.jsx)(E.u, { size: "sm", color: S.A.colors.ICON_MUTED }),
                    }),
                ],
            }),
        ],
    });
}
function eU(e) {
    let { facepileUserIds: t, latestUser: n, animate: i } = e;
    return t.length > 1
        ? (0, l.jsx)(w.A, { recipients: t, size: k._3.SIZE_32, "aria-hidden": !0 })
        : (0, l.jsx)(y.eu, {
              src: n.getAvatarURL(void 0, (0, k.FT)(k._3.SIZE_32), i),
              size: k._3.SIZE_32,
              "aria-hidden": !0,
          });
}
var eB = n(837381),
    eO = n(140735),
    eH = n(475825),
    eV = n(928039),
    eZ = n(546359),
    eW = n(736347),
    eq = n(599026),
    e$ = n(683063),
    eX = n(687966),
    eY = n(432017),
    eQ = n(31300),
    eK = n(442433),
    eJ = n(566903),
    e0 = n(51183),
    e6 = n(713654),
    e1 = n(449582),
    e3 = n(88686),
    e7 = n(214881),
    e8 = n(263577),
    e2 = n(471107),
    e4 = n(609425),
    e9 = n(922301),
    e5 = n(660184),
    te = n(381849),
    tt = n(854627),
    tn = n(342296),
    tl = n(734057),
    ti = n(290863),
    ts = n(604506);
function tr(e) {
    let { row: t, sectionType: s, inVoiceSubgroup: r = !1 } = e,
        a = (0, C.bG)([P.default], () => P.default.getUser(t.userId), [t.userId]),
        { collapsed: o } = i.useContext(p),
        c = (function (e, t, n) {
            let i = (0, C.bG)(
                    [ti.A],
                    () => {
                        let t = ti.A.getActivities(e.userId);
                        return null != e.gameActivityIndex ? t[e.gameActivityIndex] : t[0];
                    },
                    [e.userId, e.gameActivityIndex],
                ),
                s = i?.type === em.$pd.PLAYING || i?.type === em.$pd.COMPETING ? "text-voice-connected" : "text-muted",
                r = null != e.voiceChannelId && !n,
                a = (0, C.bG)([tl.A], () => (r ? tl.A.getChannel(e.voiceChannelId) : null), [r, e.voiceChannelId]);
            if (r) {
                let t = null != e.gameName ? i?.timestamps?.start : null,
                    n = (0, e6.gU)(a);
                return {
                    icon:
                        null == n
                            ? null
                            : (0, l.jsx)(n, {
                                  size: "xxs",
                                  color: "var(--text-voice-connected)",
                                  "aria-label": ep.intl.string(eg.default["8ALChp"]),
                              }),
                    textColor: "text-voice-connected",
                    contentAriaHidden: null == t,
                    content:
                        null != t
                            ? ep.intl.format(eg.default.KddZZf, { duration: (0, l.jsx)(ta, { start: t }) })
                            : ep.intl.string(eg.default["8ALChp"]),
                };
            }
            if (null == i) return null;
            let o = (function (e, t) {
                let n =
                    t && (e.status_display_type === eq.A.NAME || null == e.status_display_type)
                        ? (e.details ?? e.state)
                        : (0, eJ.A)(e).text;
                switch (e.type) {
                    case em.$pd.PLAYING:
                    case em.$pd.COMPETING:
                        return { Icon: eX.GameControllerIcon, text: n };
                    case em.$pd.LISTENING:
                        return { Icon: eY.T, text: n };
                    case em.$pd.WATCHING:
                        return { Icon: eQ.k, text: n };
                    case em.$pd.CUSTOM_STATUS:
                        let i = e.emoji;
                        return {
                            Icon: null != i ? () => (0, l.jsx)(e0.A, { emoji: i, hideTooltip: !0 }) : void 0,
                            text: e.state ?? (null == i ? null : ""),
                        };
                    default:
                        return null;
                }
            })(i, t === eW.ik.GAME);
            if (null == o || null == o.text) return null;
            let { Icon: u, text: c } = o,
                d = i.timestamps?.start;
            return {
                icon:
                    null != u &&
                    (0, l.jsx)(u, { size: "xxs", color: "var(--icon-voice-connected)", "aria-hidden": !0 }),
                textColor: s,
                contentAriaHidden: !1,
                content:
                    null != d
                        ? ep.intl.format(eg.default.Fb6oNP, { text: c, duration: (0, l.jsx)(ta, { start: d }) })
                        : c,
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
        S = (0, e1.r)({ user: a }),
        w = (0, e4.A)({ userId: t.userId }),
        D = (0, eB.rm)(t.userId),
        G = i.useCallback(
            (e) => {
                let i = P.default.getUser(t.userId);
                null != i &&
                    (0, eK.L3)(e, async () => {
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
                  let n = (0, l.jsx)(u.vN, {
                      offset: { right: 4 },
                      children: (0, l.jsxs)(b.D, {
                          tag: "div",
                          innerRef: d,
                          ...e,
                          ...D,
                          onContextMenu: G,
                          onMouseEnter: () => {
                              (N(!0), m());
                          },
                          onMouseLeave: () => {
                              (N(!1), g());
                          },
                          onFocus: () => {
                              (D.onFocus(), E(!0));
                          },
                          onBlur: () => E(!1),
                          className: ts.nM,
                          children: [
                              (0, l.jsx)(e7.A, {
                                  nameplate: j || A ? S : null,
                                  hovered: j,
                                  content: x,
                                  placement: e3.u.FRIENDS_LIST,
                              }),
                              (0, l.jsxs)(I.B, {
                                  ref: x,
                                  direction: "horizontal",
                                  align: "center",
                                  className: ts.Qs,
                                  children: [
                                      (0, l.jsx)(y.eu, {
                                          src: h,
                                          avatarDecoration: f,
                                          size: k._3.SIZE_32,
                                          status: t.status,
                                          "aria-hidden": !0,
                                          className: ts.LY,
                                      }),
                                      (0, l.jsxs)("div", {
                                          className: ts.rf,
                                          children: [
                                              (0, l.jsx)("div", {
                                                  className: ts.UU,
                                                  children: (0, l.jsx)(R.E, {
                                                      variant: "text-md/normal",
                                                      color: "text-default",
                                                      children: (0, l.jsx)(e5.A, {
                                                          userName: t.name,
                                                          displayNameStyles: w,
                                                          effectDisplayType: j || A ? e9.G.ANIMATED : e9.G.PLAIN,
                                                          loop: !0,
                                                      }),
                                                  }),
                                              }),
                                              (0, l.jsx)(to, { subtitle: c }),
                                          ],
                                      }),
                                      null != t.gameAssetUrl &&
                                          s !== eW.ik.GAME &&
                                          (0, l.jsx)(e8.V, { src: t.gameAssetUrl, size: 32 }),
                                  ],
                              }),
                          ],
                      }),
                  });
                  return o
                      ? null == c
                          ? (0, l.jsx)(v.m, {
                                text: t.name,
                                position: "left",
                                asContainer: !0,
                                tag: "div",
                                ariaHidden: !0,
                                children: n,
                            })
                          : (0, l.jsx)(e$.u, {
                                title: t.name,
                                body: c.content,
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
function ta(e) {
    let { start: t } = e,
        { now: n } = (0, e2.G)(),
        l = Math.max(0, Math.round((n - t) / 1e3));
    return (0, te.WR)({ seconds: l, getFormatter: te.i });
}
function to(e) {
    let { subtitle: t } = e;
    return null == t
        ? null
        : (0, l.jsxs)(I.B, {
              direction: "horizontal",
              align: "center",
              gap: 4,
              fullWidth: !1,
              children: [
                  t.icon,
                  (0, l.jsx)(R.E, {
                      variant: "text-xs/normal",
                      color: t.textColor,
                      lineClamp: 1,
                      "aria-hidden": t.contentAriaHidden,
                      children: t.content,
                  }),
              ],
          });
}
var tu = n(890856),
    tc = n(320448),
    td = n(847374),
    tx = n(935154),
    th = n(80558),
    tf = n(774926),
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
            width: "18",
            height: "18",
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
        o = a ? eO.A : i.Fragment;
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
                children: (0, l.jsx)(Q.D, {
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
let tA = { top: 12, bottom: 4 },
    tR = 24 + tA.top + tA.bottom;
var tE = n(945584);
function tS(e) {
    switch (e.type) {
        case eW.ik.ACTIVE_NOW:
            return ep.intl.string(ep.t.TxqPQR);
        case eW.ik.ONLINE:
            return ep.intl.string(ep.t.WbGtnH);
        case eW.ik.OFFLINE:
            return ep.intl.string(ep.t.Vv0abJ);
        case eW.ik.GAME:
            return e.label;
        case eW.ik.LETTER:
            return null;
    }
}
function tk(e) {
    let { sectionIndex: t, isCollapsed: n, onToggleCollapsed: s } = e,
        r = (0, C.bG)([eZ.A], () => eZ.A.getSections()[t]),
        { collapsed: a } = i.useContext(p),
        o = r.key,
        u = i.useCallback(() => s(o), [s, o]),
        c = t > 0 ? tE.Ci : void 0;
    if (a)
        return (0, l.jsx)(I.B, {
            padding: tA,
            gap: 0,
            className: c,
            children: (0, l.jsx)(tN, { leading: (0, l.jsx)(tw, { section: r }), label: tS(r) }),
        });
    let d = tS(r) ?? r.label ?? "",
        x = ep.intl.formatToPlainString(n ? eg.default.QcKHvf : eg.default.jsV9yS, { sectionName: d });
    return (0, l.jsx)(tu.s, {
        "aria-label": x,
        onClick: u,
        focusProps: { offset: { right: 4 } },
        className: tE.wx,
        children: (0, l.jsx)(I.B, {
            padding: tA,
            gap: 0,
            className: c,
            children: (0, l.jsx)(tN, {
                leading: (0, l.jsx)(tw, { section: r }),
                label: (0, l.jsx)(tD, { section: r }),
                trailing: (0, l.jsx)(ty, { isCollapsed: n }),
            }),
        }),
    });
}
function ty(e) {
    let { isCollapsed: t } = e,
        n = t ? tc._ : td.a;
    return (0, l.jsx)(n, { size: "xs", color: "var(--icon-muted)", "aria-hidden": !0 });
}
function tw(e) {
    let { section: t } = e;
    switch (t.type) {
        case eW.ik.ACTIVE_NOW:
            return (0, l.jsx)(tI, {});
        case eW.ik.ONLINE:
            return (0, l.jsx)(tM, {});
        case eW.ik.OFFLINE:
            return (0, l.jsx)(tL, {});
        case eW.ik.GAME:
            return (0, l.jsx)(t_, { assetUrl: t.gameAssetUrl, appId: t.gameAppId });
        case eW.ik.LETTER:
            return (0, l.jsx)(tT, { letter: t.label ?? "#" });
    }
}
function tD(e) {
    let { section: t } = e;
    return t.type === eW.ik.GAME ? (0, l.jsx)(tG, { appId: t.gameAppId, label: t.label }) : tS(t);
}
function tP(e) {
    return (0, tg.A)({ applicationId: e, source: tm.GameProfileSources.FriendsList, trackEntryPointImpression: !1 });
}
function tG(e) {
    let { appId: t, label: n } = e,
        i = tP(t);
    return null == i ? n : (0, l.jsx)(b.D, { tag: "span", onClick: i, className: tE.mO, children: n });
}
function tM() {
    return (0, l.jsx)(tx.nW, { status: em.clD.ONLINE, size: 12 });
}
function tL() {
    return (0, l.jsx)(tx.nW, { status: em.clD.OFFLINE, size: 12 });
}
function t_(e) {
    let { appId: t, assetUrl: n } = e,
        i = (0, th.O)(null == n ? t : null),
        s = n ?? (0, tf.C4)(i)?.src,
        r = tP(t),
        a = (0, l.jsx)(e8.V, { src: s, size: 18, "aria-hidden": !0 });
    return null == r
        ? a
        : (0, l.jsx)(b.D, { tag: "span", onClick: r, tabIndex: -1, "aria-hidden": !0, className: tE.Gt, children: a });
}
function tT(e) {
    let { letter: t } = e;
    return (0, l.jsx)(R.E, { variant: "text-sm/bold", children: t });
}
var tF = n(214947),
    tz = n(283973),
    tU = n(184322);
let tB = Array.from({ length: 10 }, (e, t) =>
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
function tO() {
    let { collapsed: e } = i.useContext(p);
    return e ? (0, l.jsx)(tV, {}) : (0, l.jsx)(tH, {});
}
function tH() {
    return (0, l.jsxs)("div", {
        className: tU.kL,
        children: [
            (0, l.jsx)("div", { className: tU.Dd, children: tB }),
            (0, l.jsx)(I.B, {
                align: "center",
                justify: "center",
                padding: { left: 24, right: 24 },
                className: tU.C,
                children: (0, l.jsxs)(I.B, {
                    align: "center",
                    gap: 16,
                    padding: { bottom: 80 },
                    children: [
                        (0, l.jsx)(tF.$, { size: "lg", color: S.A.colors.ICON_DEFAULT }),
                        (0, l.jsxs)(I.B, {
                            gap: 4,
                            className: tU.Dk,
                            children: [
                                (0, l.jsx)(Q.D, {
                                    variant: "heading-md/medium",
                                    children: ep.intl.string(eg.default["4fvi9I"]),
                                }),
                                (0, l.jsx)(R.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: ep.intl.string(eg.default.OZj923),
                                }),
                            ],
                        }),
                        (0, l.jsx)(eL, {
                            position: "bottom",
                            children: (e) => {
                                let { buttonRef: t, onClick: n } = e;
                                return (0, l.jsx)(V.$, {
                                    buttonRef: t,
                                    fullWidth: !0,
                                    size: "md",
                                    variant: "primary",
                                    icon: tz.R,
                                    text: ep.intl.string(eg.default.au4mU4),
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
function tV() {
    return (0, l.jsx)("div", {
        className: tU.kL,
        children: (0, l.jsxs)("div", {
            className: r()(tU.Dd, tU.yZ),
            children: [
                (0, l.jsx)("div", {
                    className: tU._f,
                    children: (0, l.jsx)(eL, {
                        position: "left",
                        children: (e) => {
                            let { buttonRef: t, onClick: n } = e;
                            return (0, l.jsx)(v.m, {
                                text: ep.intl.string(eg.default.au4mU4),
                                position: "bottom",
                                targetElementRef: t,
                                children: (0, l.jsx)(U.K, {
                                    buttonRef: t,
                                    size: "sm",
                                    variant: "secondary",
                                    icon: tz.R,
                                    "aria-label": ep.intl.string(eg.default.au4mU4),
                                    onClick: n,
                                }),
                            });
                        },
                    }),
                }),
                tB,
            ],
        }),
    });
}
var tZ = n(983851),
    tW = n(730852),
    tq = n(47167),
    t$ = n(977997),
    tX = n(798350);
function tY(e) {
    let { row: t, sectionType: n } = e,
        i = (0, C.bG)([tl.A], () => tl.A.getChannel(t.channelId), [t.channelId]),
        s = (0, tq.Ay)(i) ?? ep.intl.string(ep.t["/YzI63"]),
        a = (0, e6.gU)(i) ?? tZ.H,
        o = (0, C.bG)([t$.A], () => t$.A.isInChannel(t.channelId))
            ? null
            : (0, l.jsx)(tQ, { channelId: t.channelId, channelName: s });
    return (0, l.jsxs)(I.B, {
        gap: 4,
        padding: { top: 16, bottom: 16 },
        className: r()(tX.Os, tX.aW),
        role: "group",
        "aria-label": s,
        children: [
            (0, l.jsx)("b", { className: tX.h_ }),
            (0, l.jsx)(tN, {
                leading: (0, l.jsx)(a, { size: "xs", color: "var(--icon-voice-connected)", "aria-hidden": !0 }),
                trailing: o,
                label: s,
                color: "text-default",
            }),
            (0, l.jsx)("div", {
                children: t.rows.map((e) => (0, l.jsx)(tr, { row: e, sectionType: n, inVoiceSubgroup: !0 }, e.userId)),
            }),
            t.extraMemberCount > 0 && (0, l.jsx)(tK, { count: t.extraMemberCount }),
        ],
    });
}
function tQ(e) {
    let { channelId: t, channelName: n } = e;
    return (0, l.jsx)(eB.tG, {
        id: `voice:${t}:join`,
        children: (e) => {
            let { role: i, ...s } = e;
            return (0, l.jsx)("div", {
                role: i,
                className: tX.PD,
                children: (0, l.jsx)(V.$, {
                    text: ep.intl.string(ep.t.VJlc0S),
                    variant: "active",
                    size: "sm",
                    "aria-label": ep.intl.formatToPlainString(eg.default.gOIq4P, { channel: n }),
                    onClick: () => tW.default.selectVoiceChannel(t),
                    ...s,
                }),
            });
        },
    });
}
function tK(e) {
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
            !n && (0, l.jsx)("b", { className: tX.hF }),
            (0, l.jsx)(R.E, {
                variant: "text-xs/medium",
                color: "text-muted",
                children: ep.intl.formatToPlainString(n ? eg.default.SWPwHW : eg.default.d90MfZ, { count: t }),
            }),
        ],
    });
}
var tJ = n(182927);
function t0() {
    let e = (0, C.bG)([eZ.A], () => eZ.A.getSections()),
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
        u = i.useId(),
        c = i.useRef(null),
        d = (0, eV.A)("friends-list", c),
        x = i.useCallback(
            (t, n) => {
                if (r(t)) return 0;
                let l = e[t]?.rows[n];
                return null == l
                    ? 48
                    : l.type === eW.VZ.VOICE_GROUP && l.rows.length > 1
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
                    : a.type === eW.VZ.VOICE_GROUP
                      ? (0, l.jsx)(tY, { row: a, sectionType: s.type }, a.key)
                      : (0, l.jsx)(tr, { row: a, sectionType: s.type }, a.userId);
            },
            [e, r],
        ),
        f = i.useCallback(
            (e) => {
                let { section: t } = e;
                return (0, l.jsx)(tk, { sectionIndex: t, isCollapsed: r(t), onToggleCollapsed: a });
            },
            [r, a],
        );
    return 0 === e.length
        ? (0, l.jsx)(tO, {})
        : (0, l.jsx)(z.F, {
              component: (0, l.jsx)(eO.A, {
                  children: (0, l.jsx)(z.H, { id: u, children: ep.intl.string(ep.t.TdEu5X) }),
              }),
              children: (0, l.jsx)(eB.hD, {
                  navigator: d,
                  children: (0, l.jsx)(eB.PR, {
                      children: (e) => {
                          let { ref: t, role: n, ...i } = e;
                          return (0, l.jsx)(eH.OZ, {
                              ref: (e) => {
                                  ((c.current = e), (t.current = e?.getScrollerNode() ?? null));
                              },
                              ...i,
                              className: tJ.p,
                              "aria-labelledby": u,
                              innerRole: n,
                              sections: o,
                              sectionHeight: t6,
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
function t6(e) {
    return e > 0 ? tR + 12 : tR;
}
var t1 = n(259730),
    t3 = n(450030),
    t7 = n(783977),
    t8 = n(7689),
    t2 = n(683438),
    t4 = n(765671),
    t9 = n(980707),
    t5 = n(477782),
    ne = n(606325),
    nt = n(303911),
    nn = n(67746);
let nl = [
    [eW.Vj.ACTIVE_NOW, eg.default["/lMTzd"], eg.default.IzzWNM],
    [eW.Vj.GAME, eg.default.aKZ12v, eg.default.lE79Lm],
    [eW.Vj.ALPHABETICAL, eg.default.eVxFX3, null],
];
function ni(e) {
    let { width: t, closePopout: n } = e,
        i = (0, C.bG)([eZ.A], () => eZ.A.getGroupingMode()),
        s = (0, C.bG)([eZ.A], () => eZ.A.isVoiceGroupingEnabled());
    return (0, l.jsx)("div", {
        className: nn.k,
        style: { "--custom-group-config-popout-width": `${t ?? 264}px` },
        children: (0, l.jsxs)(t9.W, {
            navId: "friends-list-group-config",
            "aria-label": ep.intl.string(eg.default["i+986w"]),
            onClose: n,
            onSelect: void 0,
            children: [
                (0, l.jsx)(t5.rX, {
                    label: ep.intl.string(eg.default.OvTyCX),
                    children: nl.map((e) => {
                        let [t, s, r] = e;
                        return (0, l.jsx)(
                            t5.iD,
                            {
                                id: `friends-list-grouping-mode-${t}`,
                                label: ep.intl.string(s),
                                subtext: null != r ? ep.intl.string(r) : null,
                                group: "friends-list-grouping-select",
                                checked: i === t,
                                action: () => {
                                    ((0, ne.Je)(t), n());
                                },
                            },
                            `friends-list-grouping-mode-${t}`,
                        );
                    }),
                }),
                (0, nt.kR)(i) &&
                    (0, l.jsx)(t5.rX, {
                        label: ep.intl.string(ep.t["8/udY0"]),
                        children: (0, l.jsx)(t5.fP, {
                            id: "friends-list-group-voice-channels",
                            label: ep.intl.string(eg.default["/b1eZT"]),
                            subtext: ep.intl.string(eg.default["/bZ+Av"]),
                            checked: s,
                            action: () => {
                                ((0, ne.Lk)(!s), n());
                            },
                        }),
                    }),
            ],
        }),
    });
}
n(321073);
var ns = n(602853),
    nr = n(308528),
    na = n(565860),
    no = n(723690),
    nu = n(976860),
    nc = n(994500),
    nd = n(972910);
function nx(e) {
    let { friend: t, appendGap: n, closePopout: s } = e,
        [a, o] = i.useState(!1),
        {
            status: u,
            isMobile: c,
            isVR: d,
        } = (0, C.cf)([ti.A], () => ({
            status: ti.A.getStatus(t.userId),
            isMobile: ti.A.isMobileOnline(t.userId),
            isVR: ti.A.isVROnline(t.userId),
        }));
    return (0, l.jsx)(b.D, {
        className: r()(nd.Ke, { [nd.w$]: n }),
        onMouseEnter: () => o(!0),
        onMouseLeave: () => o(!1),
        onClick: function () {
            let e = tl.A.getDMFromUserId(t.user.id);
            (null != e ? (0, nu.pX)(em.BVt.CHANNEL(em.ME, e)) : nr.A.openPrivateChannel({ recipientIds: t.user.id }),
                s?.());
        },
        children: (0, l.jsx)(no.A, {
            user: t.user,
            status: u,
            isMobile: c,
            isVR: d,
            subText: (0, l.jsx)(R.E, { variant: "text-xs/medium", color: "text-muted", children: t.user.username }),
            hovered: a,
            showAccountIdentifier: !1,
            className: nd.eF,
        }),
    });
}
function nh(e) {
    let { searchResults: t, closePopout: n } = e,
        i = (0, ns.r)(S.A.space.SPACE_XS),
        s = (0, ns.r)(S.A.space.SPACE_XXS),
        r = 36 + 2 * i,
        a = [t.length];
    return (0, l.jsx)(eH.OZ, {
        renderRow: (e) => {
            let { section: i, row: s } = e,
                r = t[s];
            return (0, l.jsx)(nx, { friend: r, appendGap: s !== t.length - 1, closePopout: n }, r.userId);
        },
        rowHeight: (e, n) => (n === t.length - 1 ? r : r + s),
        sections: a,
        sectionHeight: 18 + s,
        renderSection: (e) => {
            let { section: n } = e;
            return (0, l.jsx)(R.E, {
                className: nd.nw,
                variant: "text-sm/medium",
                children: ep.intl.format(ep.t.xIWGxu, { count: t.length }),
            });
        },
        className: nd.Xv,
    });
}
function nf() {
    return (0, l.jsx)(R.E, {
        variant: "text-sm/medium",
        className: nd.n1,
        children: ep.intl.string(eg.default["0usxBd"]),
    });
}
function nm() {
    return (0, l.jsx)(R.E, {
        variant: "text-sm/medium",
        className: nd.n1,
        children: ep.intl.string(eg.default.VH2HXW),
    });
}
function ng(e) {
    let { rawQuery: t, closePopout: n } = e,
        i = (0, na.HI)(t),
        s = (0, C.bG)(
            [nc.A, P.default],
            () => {
                if ("" === i) return [];
                let e = nc.A.getFriendIDs(),
                    t = [];
                return (
                    e.forEach((e) => {
                        let n = P.default.getUser(e);
                        if (void 0 === n) return;
                        let l = nc.A.getNickname(e),
                            s = [(0, na.HI)(n.username)];
                        (null != n.globalName && s.push((0, na.HI)(n.globalName)),
                            null != l && s.push((0, na.HI)(l)),
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
          ? (0, l.jsx)(nh, { searchResults: s, closePopout: n })
          : (0, l.jsx)(nm, {});
}
function np(e) {
    let { query: t, width: n, closePopout: i } = e;
    return (0, l.jsx)("div", {
        className: r()(nd.kL, nd.zZ),
        style: { "--custom-search-friends-popout-width": `${n ?? 264}px` },
        children: (0, l.jsx)(ng, { rawQuery: t, closePopout: i }),
    });
}
function nj(e) {
    let { closePopout: t } = e,
        [n, s] = i.useState("");
    return (0, l.jsx)(F.l, {
        children: (0, l.jsxs)("div", {
            className: nd.kL,
            children: [
                (0, l.jsx)("div", {
                    className: nd.M6,
                    children: (0, l.jsx)(O.k, { placeholder: ep.intl.string(ep.t.lLDtTK), value: n, onChange: s }),
                }),
                (0, l.jsx)(ng, { rawQuery: n, closePopout: t }),
            ],
        }),
    });
}
var nC = n(540950);
function nI() {
    let [e, t] = i.useState(null);
    i.useEffect(() => {
        function e() {
            t(null);
        }
        return (
            m._.subscribe(em.jej.FRIENDS_SIDEBAR_RESIZED, e),
            () => {
                m._.unsubscribe(em.jej.FRIENDS_SIDEBAR_RESIZED, e);
            }
        );
    }, []);
    let { collapsed: n } = i.useContext(p),
        { appBarToggleEnabled: s } = g.A.useConfig({ location: "FriendsListHeader" }),
        [r, a] = i.useState(!1),
        o = i.useRef(void 0),
        u = i.useRef(null),
        d = i.useRef(null),
        x = i.useRef(null),
        h = i.useCallback((e) => {
            let { width: t } = e,
                n = d.current?.getBoundingClientRect().width,
                l = x.current?.getBoundingClientRect().width;
            (null != t && (o.current = t - 16), null != t && null != n && null != l && a(t - (n + l) <= 24));
        }, []);
    (0, t4.i4)(u, h);
    let f = n
        ? (0, l.jsx)(nb, {})
        : "search" === e
          ? (0, l.jsx)(nE, { isSearching: !0, setActivePopout: t, contentWidthRef: o })
          : (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(nv, {
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
                            (0, l.jsx)(nE, { isSearching: !1, setActivePopout: t, contentWidthRef: o }),
                            (0, l.jsx)(nS, { popoutPosition: "bottom" }),
                            s
                                ? null
                                : (0, l.jsx)(nk, {
                                      icon: t1.E,
                                      label: ep.intl.string(eg.default.JZCSRZ),
                                      onClick: () => c.A.setFriendsSidebarCollapsed(!0),
                                  }),
                        ],
                    }),
                ],
            });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(nv, { ghost: !0, ref: d }),
            (0, l.jsx)(I.B, {
                direction: "horizontal",
                fullWidth: !1,
                justify: n ? "center" : "space-between",
                padding: 8,
                className: nC.wx,
                ref: u,
                children: f,
            }),
        ],
    });
}
function nv(e) {
    let { compact: t = !1, ghost: n = !1, contentWidthRef: s, isPopoutOpen: a = !1, setActivePopout: o, ref: u } = e,
        c = i.useRef(null);
    function d() {
        o?.(null);
    }
    let x = t
            ? (0, l.jsx)(tF.$, { size: "xs", color: "var(--icon-default)" })
            : (0, l.jsx)(R.E, {
                  variant: "heading-md/medium",
                  tag: "span",
                  children: ep.intl.string(eg.default["7kJd9e"]),
              }),
        h = (0, l.jsx)(b.D, {
            className: r()(nC.Iw, { [nC.qy]: n }),
            "aria-label": ep.intl.string(eg.default["7kJd9e"]),
            "aria-hidden": n,
            "aria-haspopup": n ? void 0 : "menu",
            "aria-expanded": n ? void 0 : a,
            onClick: n ? void 0 : () => o?.(a ? null : "groupConfig"),
            innerRef: u ?? c,
            children: (0, l.jsxs)(I.B, {
                direction: "horizontal",
                gap: 4,
                align: "center",
                padding: { top: 6, bottom: 6, left: 8, right: 8 },
                className: nC.$E,
                children: [x, (0, l.jsx)(td.a, { color: "var(--text-default)", size: "sm" })],
            }),
        });
    if (n) return h;
    let f = (0, l.jsx)(Z.Y, {
        targetElementRef: c,
        shouldShow: a,
        onRequestClose: d,
        position: "bottom",
        align: "left",
        renderPopout: () => (0, l.jsx)(ni, { width: s?.current, closePopout: d }),
        children: () => h,
    });
    return a ? f : (0, l.jsx)(v.m, { text: ep.intl.string(eg.default.wvbB3Z), asContainer: !0, children: f });
}
function nb() {
    let e = i.useRef(null),
        [t, n] = i.useState(!1);
    function s(e) {
        (e.preventDefault(), n(!0));
    }
    function r() {
        n(!1);
    }
    return (0, l.jsx)(Z.Y, {
        targetElementRef: e,
        shouldShow: t,
        onRequestClose: r,
        position: "bottom",
        renderPopout: () => (0, l.jsx)(nN, { onClose: r }),
        children: () =>
            (0, l.jsx)(nk, {
                buttonRef: e,
                icon: t3.U,
                label: ep.intl.string(eg.default["Dr/+ku"]),
                onContextMenu: s,
                onClick: () => c.A.setFriendsSidebarCollapsed(!1),
            }),
    });
}
function nN(e) {
    let { onClose: t } = e;
    return (0, l.jsxs)(I.B, {
        gap: 4,
        padding: 8,
        fullWidth: !1,
        className: nC.QG,
        children: [
            (0, l.jsx)(nA, {}),
            (0, l.jsx)(nR, { onClose: t }),
            (0, l.jsx)(nS, { popoutPosition: "left", tooltipPosition: "left" }),
        ],
    });
}
function nA() {
    let e = i.useRef(null),
        [t, n] = i.useState(!1);
    function s() {
        n(!1);
    }
    return (0, l.jsx)(Z.Y, {
        targetElementRef: e,
        shouldShow: t,
        onRequestClose: s,
        position: "left",
        renderPopout: () => (0, l.jsx)(ni, { closePopout: s }),
        children: () =>
            (0, l.jsx)(nk, {
                buttonRef: e,
                icon: t7.R,
                label: ep.intl.string(eg.default["i+986w"]),
                tooltipPosition: "left",
                onClick: () => n(!t),
            }),
    });
}
function nR(e) {
    let { onClose: t } = e,
        n = i.useRef(null),
        [s, r] = i.useState(!1);
    function a() {
        (r(!1), t?.());
    }
    return (0, l.jsx)(Z.Y, {
        targetElementRef: n,
        shouldShow: s,
        onRequestClose: a,
        position: "left",
        renderPopout: () => (0, l.jsx)(nj, { closePopout: a }),
        children: () =>
            (0, l.jsx)(nk, {
                buttonRef: n,
                icon: t8.MagnifyingGlassIcon,
                label: ep.intl.string(eg.default["60M8Ae"]),
                tooltipPosition: "left",
                onClick: () => r(!s),
            }),
    });
}
function nE(e) {
    let { isSearching: t, setActivePopout: n, contentWidthRef: s } = e,
        r = i.useRef(null),
        [a, o] = i.useState("");
    function u() {
        (n(null), o(""));
    }
    return t
        ? (0, l.jsx)(Z.Y, {
              targetElementRef: r,
              shouldShow: !0,
              onRequestClose: u,
              position: "bottom",
              align: "center",
              nudgeAlignIntoViewport: !1,
              renderPopout: () => (0, l.jsx)(np, { query: a, width: s.current, closePopout: u }),
              children: () =>
                  (0, l.jsx)("div", {
                      ref: r,
                      className: nC.wB,
                      children: (0, l.jsx)(t2.I, {
                          autoFocus: !0,
                          "aria-label": ep.intl.string(eg.default["60M8Ae"]),
                          placeholder: ep.intl.string(ep.t.lLDtTK),
                          query: a,
                          onChange: o,
                          onClear: () => o(""),
                          size: "sm",
                      }),
                  }),
          })
        : (0, l.jsx)(nk, {
              icon: t8.MagnifyingGlassIcon,
              label: ep.intl.string(eg.default["60M8Ae"]),
              onClick: () => n("search"),
          });
}
function nS(e) {
    let { popoutPosition: t, tooltipPosition: n, onClose: i } = e;
    return (0, l.jsx)(eL, {
        position: t,
        onClose: i,
        children: (e) => {
            let { buttonRef: t, onClick: i } = e;
            return (0, l.jsx)(nk, {
                buttonRef: t,
                icon: tz.R,
                label: ep.intl.string(eg.default.au4mU4),
                tooltipPosition: n,
                onClick: i,
            });
        },
    });
}
function nk(e) {
    let { icon: t, label: n, onClick: s, onContextMenu: r, tooltipPosition: a, buttonRef: o } = e,
        u = i.useRef(null),
        c = o ?? u;
    return (0, l.jsx)(v.m, {
        text: n,
        position: a,
        targetElementRef: c,
        anchorRef: c,
        children: (0, l.jsx)(b.D, {
            "aria-label": n,
            onClick: s,
            onContextMenu: r,
            innerRef: c,
            className: nC.x6,
            children: (0, l.jsx)(t, { size: "sm", color: "currentColor" }),
        }),
    });
}
var ny = n(45863);
function nw() {
    let e = i.useRef(null),
        t = i.useRef(null),
        n = i.useRef(!1),
        s = i.useRef(0),
        C = (0, j.c)(),
        { isHoveringOrFocusing: I } = (0, x.A)(e),
        { appBarToggleEnabled: v } = g.A.useConfig({ location: "FriendsSidebar" }),
        b = i.useCallback((n) => {
            ((s.current = n),
                null != e.current && (e.current.style.width = `${n}px`),
                t.current?.setAttribute("aria-valuenow", `${n}`));
        }, []);
    i.useLayoutEffect(() => {
        n.current || b(C ? 64 : 280);
    }, [C, b]);
    let N = i.useCallback(
            (e) => {
                b(e);
                let t = e < 200;
                t !== C && (0, a.flushSync)(() => c.A.setFriendsSidebarCollapsed(t));
            },
            [b, C],
        ),
        A = i.useCallback(() => {
            ((n.current = !0), t.current?.classList?.add(ny.cB), m._.dispatch(em.jej.FRIENDS_SIDEBAR_RESIZED));
        }, []),
        R = i.useCallback((e) => {
            ((n.current = !1), t.current?.setAttribute("aria-valuenow", `${e}`), t.current?.classList?.remove(ny.cB));
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
                        className: r()(ny.kL, n),
                        children: [
                            (0, l.jsx)(u.vN, {
                                children: (0, l.jsx)("div", {
                                    ref: t,
                                    role: "separator",
                                    tabIndex: 0,
                                    "aria-orientation": "vertical",
                                    "aria-label": ep.intl.string(eg.default["F3+Xei"]),
                                    "aria-valuemin": v ? 280 : 64,
                                    "aria-valuemax": 320,
                                    className: ny.Di,
                                    onMouseDown: S,
                                    onKeyDown: k,
                                }),
                            }),
                            (0, l.jsx)(nI, {}),
                            (0, l.jsx)(eT, {}),
                            (0, l.jsx)(u.xp, { containerRef: e, children: (0, l.jsx)(t0, {}) }),
                        ],
                    }),
                }),
        }),
    });
}
