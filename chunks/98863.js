(n.r(t), n.d(t, { default: () => nT }));
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
    x = n(793574),
    h = n(688810),
    f = n(713517),
    m = n(386467),
    g = n(97469),
    p = n(625494),
    j = n(925166),
    C = n(115504);
let I = i.createContext({ collapsed: !1, hovered: !1 });
var v = n(605117),
    A = n(17928),
    N = n(331322),
    b = n(866665),
    E = n(939249),
    R = n(862328),
    S = n(812993),
    y = n(834730),
    k = n(881636),
    D = n(661531),
    w = n(778712),
    P = n(97808),
    _ = n(954376),
    G = n(454932),
    T = n(287809),
    M = n(902902);
function L() {
    return (0, A.cf)([M.A], () => ({ incoming: M.A.getIncomingRequests(), outgoing: M.A.getOutgoingRequests() }));
}
var F = n(858899),
    O = n(305866),
    B = n(707554),
    z = n(408278),
    U = n(173936),
    H = n(95477),
    V = n(103557),
    Z = n(821609),
    W = n(922016),
    $ = n(376728),
    q = n(279208),
    Y = n(189883),
    X = n(237309),
    Q = n(957565),
    K = n(297264),
    J = n(625903),
    ee = n(689175),
    et = n(559647),
    en = n(428678),
    el = n(789645),
    ei = n(933832),
    es = n(39623),
    er = n(123292),
    ea = n(216964),
    eo = n(769015),
    ec = n(640708),
    eu = n(22212),
    ed = n(409978),
    ex = n(390848),
    eh = n(780964),
    ef = n(766075),
    em = n(427262),
    eg = n(652215),
    ep = n(682530),
    ej = n(660183),
    eC = n(788868);
let eI = "Friends Sidebar Add Friend Popout";
function ev() {
    let { incoming: e, outgoing: t } = L(),
        n = i.useMemo(() => [...e, ...t], [e, t]);
    return ((0, ed.y)(n), 0 === n.length)
        ? null
        : (0, l.jsxs)(N.B, {
              gap: 4,
              padding: { top: 12, bottom: 16, left: 16, right: 8 },
              className: eC.uW,
              children: [
                  (0, l.jsxs)(N.B, {
                      direction: "horizontal",
                      align: "center",
                      justify: "space-between",
                      padding: { left: 8, right: 8 },
                      className: eC.UP,
                      children: [
                          (0, l.jsxs)(N.B, {
                              direction: "horizontal",
                              align: "center",
                              gap: 8,
                              fullWidth: !1,
                              children: [
                                  (0, l.jsx)(K.D, {
                                      variant: "text-sm/medium",
                                      color: "text-muted",
                                      children: ej.intl.string(ej.t.fyA115),
                                  }),
                                  e.length > 0 && (0, l.jsx)(S.hV, { count: e.length }),
                              ],
                          }),
                          (0, l.jsx)(b.m, {
                              text: ej.intl.string(ep.default["2vock0"]),
                              position: "bottom",
                              children: (0, l.jsx)(z.K, {
                                  icon: J.SettingsIcon,
                                  size: "sm",
                                  variant: "icon-only",
                                  "aria-label": ej.intl.string(ep.default["2vock0"]),
                                  onClick: () => (0, ef.openUserSettings)(eh.X.FRIEND_REQUESTS_CATEGORY),
                              }),
                          }),
                      ],
                  }),
                  (0, l.jsxs)(ee.Ch, {
                      className: eC.Ge,
                      disableFocusRingScope: !0,
                      children: [
                          t.length > 0 && (0, l.jsx)(eA, { outgoing: t }),
                          e.map((e) => (0, l.jsx)(eR, { request: e }, e.key)),
                      ],
                  }),
              ],
          });
}
function eA(e) {
    let { outgoing: t } = e,
        n = i.useRef(null),
        [s, a] = i.useState(!1);
    return (0, l.jsx)(W.Y, {
        targetElementRef: n,
        shouldShow: s,
        onRequestClose: () => a(!1),
        position: "right",
        align: "top",
        renderPopout: () => (0, l.jsx)(eN, { outgoing: t, returnRef: n }),
        children: () =>
            (0, l.jsxs)(E.D, {
                innerRef: n,
                className: r()(eC.nM, eC.b8, eC.d, { [eC.$F]: s }),
                "aria-expanded": s,
                onClick: () => a(!s),
                children: [
                    (0, l.jsx)("div", {
                        className: eC.iE,
                        children: (0, l.jsx)(et.SendMessageIcon, { size: "sm", color: D.A.colors.ICON_DEFAULT }),
                    }),
                    (0, l.jsxs)("div", {
                        className: eC.Qq,
                        children: [
                            (0, l.jsx)(y.E, {
                                variant: "text-md/medium",
                                color: "text-default",
                                lineClamp: 1,
                                children: ej.intl.string(ep.default.JHcSBI),
                            }),
                            (0, l.jsx)(y.E, {
                                variant: "text-xs/medium",
                                color: "text-muted",
                                lineClamp: 1,
                                children: ej.intl.format(ep.default.PY1iDb, { count: t.length }),
                            }),
                        ],
                    }),
                    (0, l.jsx)("div", {
                        className: eC.ai,
                        children: (0, l.jsx)(k.u, { size: "sm", color: D.A.colors.ICON_MUTED }),
                    }),
                ],
            }),
    });
}
function eN(e) {
    let { outgoing: t, returnRef: n } = e;
    return (0, l.jsxs)(O.l, {
        className: eC.YM,
        returnRef: n,
        "aria-label": ej.intl.string(ep.default.JHcSBI),
        children: [
            (0, l.jsx)(N.B, {
                direction: "horizontal",
                align: "center",
                padding: { left: 8, right: 8 },
                className: eC.S1,
                children: (0, l.jsx)(K.D, {
                    variant: "text-sm/medium",
                    color: "text-subtle",
                    children: ej.intl.format(ep.default.eS6Nek, { count: t.length }),
                }),
            }),
            (0, l.jsx)(ee.Ch, { className: eC.Ge, children: t.map((e) => (0, l.jsx)(eb, { request: e }, e.key)) }),
        ],
    });
}
function eb(e) {
    let { request: t } = e,
        n = (0, A.bG)([T.default], () => T.default.getUser(t.userId));
    return null == n ? null : (0, l.jsx)(eE, { request: t, user: n });
}
function eE(e) {
    let { request: t, user: n } = e,
        s = i.useRef(null),
        { isHoveringOrFocusing: r } = (0, f.A)(s),
        a = (0, G.o)({ user: n, applicationId: t.applicationId, isGameRelationship: t.isGameRelationship }),
        { cancelFriendRequest: o } = (0, ex.I)({
            userId: t.userId,
            applicationId: t.applicationId,
            isGameRelationship: t.isGameRelationship,
            location: eI,
        });
    return (0, l.jsxs)(N.B, {
        ref: s,
        direction: "horizontal",
        align: "center",
        gap: 8,
        padding: 8,
        className: eC.nM,
        children: [
            (0, l.jsx)(ek, { user: n, pendingFriendRequestInfo: a, animate: r }),
            (0, l.jsx)(b.m, {
                text: ej.intl.string(ej.t.eaq81S),
                children: (0, l.jsx)(z.K, {
                    icon: en.K,
                    size: "sm",
                    variant: "icon-only",
                    "aria-label": ey(eg.eA$.PENDING_OUTGOING, a, ej.intl.string(ej.t.eaq81S)),
                    onClick: o,
                }),
            }),
        ],
    });
}
function eR(e) {
    let { request: t } = e,
        n = (0, A.bG)([T.default], () => T.default.getUser(t.userId));
    return null == n ? null : (0, l.jsx)(eS, { request: t, user: n });
}
function eS(e) {
    let { request: t, user: n } = e,
        s = i.useRef(null),
        { isHoveringOrFocusing: a } = (0, f.A)(s),
        [o, c] = i.useState(!1),
        u = (0, G.o)({ user: n, applicationId: t.applicationId, isGameRelationship: t.isGameRelationship }),
        { acceptFriendRequest: d, cancelFriendRequest: x } = (0, ex.I)({
            userId: t.userId,
            applicationId: t.applicationId,
            isGameRelationship: t.isGameRelationship,
            location: eI,
            onConfirm: () =>
                (0, F.P0)({
                    text: ej.intl.formatToPlainString(ej.t.cRwkp7, { name: em.Ay.getName(n) }),
                    variant: "success",
                }),
            onFinally: () => c(!1),
        });
    return (0, l.jsxs)(N.B, {
        ref: s,
        direction: "horizontal",
        align: null != u.note ? "start" : "center",
        gap: 8,
        padding: 8,
        className: r()(eC.nM, eC.b8, eC.ZJ),
        children: [
            (0, l.jsx)(ek, {
                user: n,
                pendingFriendRequestInfo: u,
                animate: a,
                children: null != u.note && (0, l.jsx)(ew, { note: u.note }),
            }),
            (0, l.jsxs)(N.B, {
                direction: "horizontal",
                align: "center",
                gap: 4,
                fullWidth: !1,
                children: [
                    (0, l.jsx)("div", {
                        className: eC.L6,
                        children: (0, l.jsx)(b.m, {
                            text: ej.intl.string(ej.t.xuio0C),
                            children: (0, l.jsx)(z.K, {
                                icon: el.P,
                                size: "sm",
                                variant: "icon-only",
                                "aria-label": ey(eg.eA$.PENDING_INCOMING, u, ej.intl.string(ej.t.xuio0C)),
                                onClick: x,
                            }),
                        }),
                    }),
                    (0, l.jsx)(b.m, {
                        text: ej.intl.string(ej.t.Zcibdf),
                        children: (0, l.jsx)(z.K, {
                            icon: ei.CheckmarkLargeIcon,
                            size: "sm",
                            variant: "icon-only",
                            "aria-label": ey(eg.eA$.PENDING_INCOMING, u, ej.intl.string(ej.t.Zcibdf)),
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
function ey(e, t, n) {
    let { displayName: l, applicationName: i } = t,
        s = { action: n, name: l, application: i ?? "" };
    if (e === eg.eA$.PENDING_INCOMING) {
        let e = null != i ? ej.t.kSmk1F : ej.t["+YIVE1"];
        return ej.intl.formatToPlainString(e, s);
    }
    let r = null != i ? ej.t.BfqcNh : ej.t.vrDIev;
    return ej.intl.formatToPlainString(r, s);
}
function ek(e) {
    let { user: t, pendingFriendRequestInfo: n, animate: i, children: s } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(P.eu, {
                src: t.getAvatarURL(void 0, (0, w.FT)(w._3.SIZE_32), i),
                size: w._3.SIZE_32,
                "aria-hidden": !0,
            }),
            (0, l.jsxs)("div", {
                className: eC.Qq,
                children: [
                    (0, l.jsx)(y.E, {
                        variant: "text-md/medium",
                        color: "text-default",
                        lineClamp: 1,
                        children: n.displayName,
                    }),
                    (0, l.jsx)(eD, { pendingFriendRequestInfo: n }),
                    s,
                ],
            }),
        ],
    });
}
function eD(e) {
    let { pendingFriendRequestInfo: t } = e,
        { subLabel: n, application: i } = t;
    return null == n && null == i
        ? null
        : (0, l.jsxs)(N.B, {
              direction: "horizontal",
              align: "center",
              gap: 4,
              children: [
                  null != n &&
                      (0, l.jsx)(y.E, { variant: "text-xs/medium", color: "text-muted", lineClamp: 1, children: n }),
                  null != i &&
                      (0, l.jsxs)(l.Fragment, {
                          children: [
                              null != n && (0, l.jsx)(ec.A, { height: 2, width: 2 }),
                              (0, l.jsx)(eo.A, { game: i, size: eo.M.XXSMALL }),
                              (0, l.jsx)(y.E, {
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
        ? (0, l.jsxs)(y.E, {
              variant: "text-xs/normal",
              color: "text-subtle",
              tag: "p",
              className: eC.N4,
              children: [
                  (0, l.jsx)(ea.c, { size: "xxs", color: D.A.colors.ICON_SUBTLE, className: eC.TG }),
                  t,
                  " ",
                  (0, l.jsx)(er.Q, {
                      text: ej.intl.string(ep.default.QX4H2E),
                      textVariant: "text-xs/medium",
                      onClick: () => s(!1),
                  }),
              ],
          })
        : (0, l.jsxs)(N.B, {
              direction: "horizontal",
              align: "center",
              gap: 4,
              children: [
                  (0, l.jsx)(es.EyeIcon, { size: "xxs", color: D.A.colors.TEXT_BRAND }),
                  (0, l.jsx)(er.Q, {
                      text: ej.intl.string(ep.default.xZupEi),
                      textVariant: "text-xs/medium",
                      onClick: function () {
                          (s(!0), (0, eu.Yq)({ analyticsLocation: eI, noteLength: t.length }));
                      },
                  }),
              ],
          });
}
var eP = n(499516);
let e_ = { sending: !1, success: null, error: null };
function eG(e, t) {
    switch (t.type) {
        case "RESET":
            return e_;
        case "SENDING":
            return { ...e_, sending: !0 };
        case "SUCCESS":
            return { ...e_, sending: !1, success: t.text };
        case "ERROR":
            return { ...e_, sending: !1, error: t.text };
    }
}
function eT() {
    let [e, t] = i.useReducer(eG, e_),
        { sending: n, success: s, error: r } = e,
        [a, o] = i.useState(""),
        [c, u] = i.useState(""),
        [d, x] = i.useState(!1),
        { enabled: h } = Y.A.useConfig({ location: "AddFriendPopout" });
    async function f() {
        x(!0);
        try {
            let e = await $.Ay.createFriendInvite(null, eg.PE1.ADD_FRIENDS_POPOUT);
            (0, Q.C)(
                (0, q.A)(e.code),
                () => (0, F.P0)({ text: ej.intl.string(ej.t.tBOSx4), variant: "success" }),
                () => (0, F.P0)({ text: ej.intl.string(ej.t.R0RpRX), variant: "critical" }),
            );
        } catch {
            (0, F.P0)({ text: ej.intl.string(ej.t.R0RpRX), variant: "critical" });
        } finally {
            x(!1);
        }
    }
    return (0, l.jsx)(O.l, {
        children: (0, l.jsx)("div", {
            className: eP.kL,
            children: (0, l.jsxs)(B.F, {
                component: (0, l.jsxs)("div", {
                    className: eP.wx,
                    children: [
                        (0, l.jsx)("div", {
                            className: eP.gn,
                            children: (0, l.jsx)(y.E, {
                                variant: "text-md/medium",
                                color: "text-default",
                                children: ej.intl.string(ep.default.au4mU4),
                            }),
                        }),
                        (0, l.jsx)(b.m, {
                            text: ej.intl.string(ej.t.t1T3kD),
                            position: "bottom",
                            align: "right",
                            caretConfig: { align: "end" },
                            children: (0, l.jsx)(z.K, {
                                icon: U.LinkIcon,
                                size: "sm",
                                onClick: f,
                                "aria-label": ej.intl.string(ej.t.t1T3kD),
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
                                    note: h && "" !== c ? c : void 0,
                                    location: "Add Friend Popout",
                                    errorUxConfig: X.gB.SHOW_ONLY_IF_ACTION_NEEDED,
                                })
                                    .then((e) => {
                                        (t({ type: "SUCCESS", text: e }), o(""), u(""));
                                    })
                                    .catch((e) => t({ type: "ERROR", text: e })));
                        },
                        autoComplete: "off",
                        children: (0, l.jsxs)("div", {
                            className: eP.hQ,
                            children: [
                                (0, l.jsx)(H.k, {
                                    value: a,
                                    onChange: (e) => {
                                        (o(e), t({ type: "RESET" }));
                                    },
                                    label: ej.intl.string(ej.t["5C3rVr"]),
                                    fullWidth: !0,
                                    required: !0,
                                    placeholder: ej.intl.string(ej.t.jx0GiG),
                                    successMessage: s,
                                    error: r,
                                    disabled: n,
                                    autoComplete: "off",
                                    "data-form-type": "other",
                                    "data-lpignore": !0,
                                    "data-1p-ignore": !0,
                                }),
                                h &&
                                    (0, l.jsx)(V.f, {
                                        label: ej.intl.string(ej.t["6dVPSI"]),
                                        value: c,
                                        onChange: function (e) {
                                            (u(e), t({ type: "RESET" }));
                                        },
                                        helperText: ej.intl.string(ej.t.UtfQNw),
                                        maxLength: X.XG,
                                        showCharacterCount: !0,
                                        rows: 3,
                                        placeholder: ej.intl.string(ej.t.bTMtdN),
                                        disabled: n,
                                    }),
                                (0, l.jsx)(Z.$, {
                                    variant: "primary",
                                    size: "md",
                                    text: ej.intl.string(ej.t.HWT3wh),
                                    fullWidth: !0,
                                    disabled: "" === a.trim() || n,
                                    type: "submit",
                                }),
                            ],
                        }),
                    }),
                    (0, l.jsx)(ev, {}),
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
                p._.subscribe(eg.jej.FRIENDS_SIDEBAR_RESIZED, u),
                () => {
                    p._.unsubscribe(eg.jej.FRIENDS_SIDEBAR_RESIZED, u);
                }
            ),
            [u],
        ),
        (0, l.jsx)(W.Y, {
            targetElementRef: a,
            shouldShow: o,
            onRequestClose: u,
            position: t,
            spacing: s,
            ignoreModalClicks: !0,
            renderPopout: () => (0, l.jsx)(eT, {}),
            children: () => r({ buttonRef: a, onClick: () => c(!o), showPopout: o }),
        })
    );
}
var eL = n(669850);
function eF() {
    let { incoming: e } = L(),
        { collapsed: t } = i.useContext(I),
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
        a = (0, A.bG)([T.default], () => T.default.getUser(r), [r]);
    return null == s || null == a
        ? null
        : (0, l.jsx)(N.B, {
              padding: 8,
              className: eL.uW,
              children: (0, l.jsx)(
                  eM,
                  {
                      position: "left",
                      spacing: 16,
                      children: (i) => {
                          let { buttonRef: r, onClick: o } = i;
                          return t
                              ? (0, l.jsx)(eO, {
                                    buttonRef: r,
                                    onClick: o,
                                    incoming: e,
                                    facepileUserIds: n,
                                    latestUser: a,
                                })
                              : (0, l.jsx)(eB, {
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
function eO(e) {
    let { buttonRef: t, onClick: n, incoming: i, facepileUserIds: s, latestUser: r } = e,
        { isHoveringOrFocusing: a } = (0, f.A)(t);
    return (0, l.jsx)(b.m, {
        text: ej.intl.string(ej.t.fyA115),
        position: "left",
        targetElementRef: t,
        children: (0, l.jsx)(E.D, {
            innerRef: t,
            className: eL.Wj,
            "aria-label": ej.intl.formatToPlainString(ej.t.xxFCW8, { count: i.length }),
            onClick: n,
            children: (0, l.jsx)(R.Q, {
                rounded: 1 === s.length,
                lowerBadge: (0, l.jsx)(S.hV, { count: i.length, "aria-hidden": !0 }),
                lowerBadgeSize: { width: (0, S.o6)(i.length) },
                children: (0, l.jsx)("div", {
                    className: eL.UI,
                    children: (0, l.jsx)(ez, { facepileUserIds: s, latestUser: r, animate: a }),
                }),
            }),
        }),
    });
}
function eB(e) {
    let { buttonRef: t, onClick: n, incoming: i, facepileUserIds: s, latestRequest: r, latestUser: a } = e,
        { isHoveringOrFocusing: o } = (0, f.A)(t),
        { displayName: c } = (0, G.o)({
            user: a,
            applicationId: r.applicationId,
            isGameRelationship: r.isGameRelationship,
        });
    return (0, l.jsxs)(E.D, {
        innerRef: t,
        className: eL.nM,
        onClick: n,
        children: [
            (0, l.jsx)(ez, { facepileUserIds: s, latestUser: a, animate: o }),
            (0, l.jsxs)("div", {
                className: eL.Qq,
                children: [
                    (0, l.jsx)(y.E, {
                        variant: "text-md/medium",
                        color: "text-default",
                        lineClamp: 1,
                        children: ej.intl.string(ej.t.fyA115),
                    }),
                    (0, l.jsx)(y.E, { variant: "text-xs/medium", color: "text-muted", lineClamp: 1, children: c }),
                ],
            }),
            (0, l.jsxs)(N.B, {
                direction: "horizontal",
                align: "center",
                gap: 4,
                fullWidth: !1,
                children: [
                    (0, l.jsx)(S.hV, { count: i.length }),
                    (0, l.jsx)("div", {
                        className: eL.ai,
                        children: (0, l.jsx)(k.u, { size: "sm", color: D.A.colors.ICON_MUTED }),
                    }),
                ],
            }),
        ],
    });
}
function ez(e) {
    let { facepileUserIds: t, latestUser: n, animate: i } = e;
    return t.length > 1
        ? (0, l.jsx)(_.A, { recipients: t, size: w._3.SIZE_32, "aria-hidden": !0 })
        : (0, l.jsx)(P.eu, {
              src: n.getAvatarURL(void 0, (0, w.FT)(w._3.SIZE_32), i),
              size: w._3.SIZE_32,
              "aria-hidden": !0,
          });
}
var eU = n(837381),
    eH = n(140735),
    eV = n(475825),
    eZ = n(602853),
    eW = n(928039),
    e$ = n(546359),
    eq = n(736347),
    eY = n(599026),
    eX = n(365199),
    eQ = n(683063),
    eK = n(687966),
    eJ = n(432017),
    e0 = n(31300),
    e6 = n(442433),
    e1 = n(566903),
    e3 = n(51183),
    e7 = n(80558),
    e8 = n(713654),
    e4 = n(449582),
    e2 = n(88686),
    e9 = n(214881),
    e5 = n(774926),
    te = n(263577),
    tt = n(471107),
    tn = n(609425),
    tl = n(922301),
    ti = n(660184),
    ts = n(381849),
    tr = n(854627),
    ta = n(342296),
    to = n(734057),
    tc = n(290863),
    tu = n(977997),
    td = n(604506);
function tx(e) {
    let { row: t, sectionType: s, inVoiceSubgroup: a = !1 } = e,
        o = (0, A.bG)([T.default], () => T.default.getUser(t.userId), [t.userId]),
        { collapsed: u } = i.useContext(I),
        d = (function (e, t, n) {
            let i = (0, A.bG)(
                    [tc.A],
                    () => {
                        let t = tc.A.getActivities(e.userId);
                        return null != e.gameActivityIndex ? t[e.gameActivityIndex] : t[0];
                    },
                    [e.userId, e.gameActivityIndex],
                ),
                s = i?.type === eg.$pd.PLAYING || i?.type === eg.$pd.COMPETING ? "text-voice-connected" : "text-muted",
                r = null != e.voiceChannelId && !n,
                a = (0, A.bG)([to.A], () => (null != e.voiceChannelId ? to.A.getChannel(e.voiceChannelId) : null), [
                    e.voiceChannelId,
                ]),
                o = (0, A.bG)(
                    [tu.A],
                    () =>
                        n && null != e.voiceChannelId
                            ? tu.A.getVoiceStateForChannel(e.voiceChannelId, e.userId)?.connectedAt
                            : null,
                    [n, e.voiceChannelId, e.userId],
                ),
                c = (0, e8.gU)(a),
                u =
                    null == c
                        ? null
                        : (0, l.jsx)(c, {
                              size: "xxs",
                              color: "var(--text-voice-connected)",
                              "aria-label": ej.intl.string(ep.default["8ALChp"]),
                          });
            if (r) {
                let t = null != e.gameName ? i?.timestamps?.start : null,
                    n =
                        null != t
                            ? ej.intl.format(ep.default.KddZZf, { duration: (0, l.jsx)(tf, { start: t }) })
                            : ej.intl.string(ep.default["8ALChp"]);
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
                          content: (0, l.jsx)(tf, { start: 1e3 * o }),
                          tooltip: null,
                      }
                    : null;
            if (null == i) return d;
            let x = (function (e, t) {
                let n =
                    t && (e.status_display_type === eY.A.NAME || null == e.status_display_type)
                        ? (e.details ?? e.state)
                        : (0, e1.A)(e).text;
                switch (e.type) {
                    case eg.$pd.PLAYING:
                    case eg.$pd.COMPETING:
                        return { Icon: eK.GameControllerIcon, text: n };
                    case eg.$pd.LISTENING:
                        return { Icon: eJ.T, text: n };
                    case eg.$pd.WATCHING:
                        return { Icon: e0.k, text: n };
                    case eg.$pd.CUSTOM_STATUS:
                        let i = e.emoji;
                        return {
                            Icon: null != i ? () => (0, l.jsx)(e3.A, { emoji: i, hideTooltip: !0 }) : void 0,
                            text: e.state ?? (null == i ? null : ""),
                        };
                    default:
                        return null;
                }
            })(i, t === eq.ik.GAME);
            if (null == x || null == x.text) return d;
            let { Icon: h, text: f } = x,
                m = i.timestamps?.start,
                g = (0, l.jsx)("span", { className: td.hc, children: f }),
                p =
                    null != m
                        ? ej.intl.format(ep.default.Fb6oNP, {
                              text: g,
                              duration: (0, l.jsx)("span", { children: (0, l.jsx)(tf, { start: m }) }),
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
        })(t, s, a),
        x = i.useRef(null),
        f = i.useRef(null),
        {
            avatarSrc: m,
            avatarDecorationSrc: g,
            eventHandlers: { onMouseEnter: p, onMouseLeave: j },
        } = (0, tr.A)({ userId: t.userId, size: w._3.SIZE_32, animateOnHover: !0 }),
        [C, v] = i.useState(!1),
        [R, S] = i.useState(!1),
        [k, D] = i.useState(!1),
        _ = (0, e4.r)({ user: o }),
        G = (0, tn.A)({ userId: t.userId }),
        M = (0, eU.rm)(t.userId),
        { analyticsLocations: L } = (0, h.Ay)(),
        F = i.useCallback(
            (e) => {
                let i = T.default.getUser(t.userId);
                null != i &&
                    (D(!0),
                    (0, e6.L3)(
                        e,
                        async () => {
                            let { default: e } = await Promise.all([
                                n.e("463317"),
                                n.e("893190"),
                                n.e("189673"),
                                n.e("882073"),
                                n.e("797558"),
                                n.e("691994"),
                                n.e("576665"),
                                n.e("624198"),
                                n.e("532418"),
                            ]).then(n.bind(n, 668569));
                            return (t) => (0, l.jsx)(e, { ...t, user: i, analyticsLocations: L });
                        },
                        { onClose: () => D(!1) },
                    ));
            },
            [t.userId, L],
        );
    return null == o
        ? null
        : (0, l.jsx)(ta.A, {
              targetElementRef: x,
              user: o,
              position: "left",
              spacing: 16,
              children: (e, n) => {
                  let { isShown: i } = n,
                      a = C || k || i,
                      o = !u && (a || R),
                      h = (0, l.jsxs)("div", {
                          className: r()(td.kL, { [td.vu]: a }),
                          onMouseOver: () => {
                              C || (v(!0), p());
                          },
                          onMouseLeave: () => {
                              (v(!1), j());
                          },
                          onContextMenu: F,
                          onFocus: () => S(!0),
                          onBlur: (e) => {
                              e.currentTarget.contains(e.relatedTarget) || S(!1);
                          },
                          children: [
                              (0, l.jsx)(c.vN, {
                                  offset: { right: 4 },
                                  children: (0, l.jsxs)(E.D, {
                                      tag: "div",
                                      innerRef: x,
                                      ...e,
                                      ...M,
                                      className: td.nM,
                                      children: [
                                          (0, l.jsx)(e9.A, {
                                              nameplate: a || R ? _ : null,
                                              hovered: a,
                                              content: f,
                                              placement: e2.u.FRIENDS_LIST,
                                          }),
                                          (0, l.jsxs)(N.B, {
                                              ref: f,
                                              direction: "horizontal",
                                              align: "center",
                                              className: td.Qs,
                                              children: [
                                                  (0, l.jsx)(P.eu, {
                                                      src: m,
                                                      avatarDecoration: g,
                                                      size: w._3.SIZE_32,
                                                      status: t.status,
                                                      "aria-hidden": !0,
                                                      className: td.LY,
                                                  }),
                                                  (0, l.jsxs)("div", {
                                                      className: td.rf,
                                                      children: [
                                                          (0, l.jsx)("div", {
                                                              className: td.UU,
                                                              children: (0, l.jsx)(y.E, {
                                                                  variant: "text-md/medium",
                                                                  color: "text-default",
                                                                  children: (0, l.jsx)(ti.A, {
                                                                      userName: t.name,
                                                                      displayNameStyles: G,
                                                                      effectDisplayType:
                                                                          a || R ? tl.G.ANIMATED : tl.G.PLAIN,
                                                                      loop: !0,
                                                                  }),
                                                              }),
                                                          }),
                                                          (0, l.jsx)(tm, { subtitle: d }),
                                                      ],
                                                  }),
                                                  !o &&
                                                      null != t.gameAppId &&
                                                      s !== eq.ik.GAME &&
                                                      (0, l.jsx)(th, {
                                                          gameAppId: t.gameAppId,
                                                          gameAssetUrl: t.gameAssetUrl,
                                                      }),
                                              ],
                                          }),
                                      ],
                                  }),
                              }),
                              o &&
                                  (0, l.jsx)("div", {
                                      className: td.Mj,
                                      children: (0, l.jsx)(b.m, {
                                          text: ej.intl.string(ej.t.PdRCRg),
                                          ariaHidden: !0,
                                          children: (0, l.jsx)(z.K, {
                                              variant: "icon-only",
                                              size: "sm",
                                              icon: eX.MoreHorizontalIcon,
                                              "aria-label": ej.intl.string(ej.t.PdRCRg),
                                              tabIndex: M.tabIndex,
                                              onClick: F,
                                          }),
                                      }),
                                  }),
                          ],
                      });
                  return u
                      ? d?.tooltip == null
                          ? (0, l.jsx)(b.m, {
                                text: t.name,
                                position: "left",
                                asContainer: !0,
                                tag: "div",
                                ariaHidden: !0,
                                children: h,
                            })
                          : (0, l.jsx)(eQ.u, {
                                title: t.name,
                                body: d.tooltip,
                                position: "left",
                                asContainer: !0,
                                element: "div",
                                ariaHidden: !0,
                                children: h,
                            })
                      : h;
              },
          });
}
function th(e) {
    let { gameAppId: t, gameAssetUrl: n } = e,
        i = (0, e7.O)(null == n ? t : null),
        s = n ?? (0, e5.C4)(i)?.src;
    return (0, l.jsx)(te.V, { src: s, size: 32 });
}
function tf(e) {
    let { start: t } = e,
        { now: n } = (0, tt.G)(),
        l = Math.max(0, Math.round((n - t) / 1e3));
    return (0, ts.WR)({ seconds: l, getFormatter: ts.i });
}
function tm(e) {
    let { subtitle: t } = e;
    return null == t
        ? null
        : (0, l.jsxs)(N.B, {
              direction: "horizontal",
              align: "center",
              gap: 4,
              fullWidth: !1,
              children: [
                  null != t.icon && (0, l.jsx)("div", { className: td.LY, children: t.icon }),
                  (0, l.jsx)(y.E, {
                      variant: "text-xs/medium",
                      color: t.textColor,
                      "aria-hidden": t.contentAriaHidden,
                      className: td.o4,
                      children: t.content,
                  }),
              ],
          });
}
var tg = n(890856),
    tp = n(320448),
    tj = n(847374),
    tC = n(935154),
    tI = n(409626),
    tv = n(692969),
    tA = n(775602),
    tN = n(94416);
let tb = [-1, -1, -1, 0, 0, 2, 2, 1, 3, 1, 3].flatMap((e) => [e, -1]);
function tE() {
    let e = i.useRef(null),
        t = i.useRef(0),
        { hovered: n } = i.useContext(I),
        s = (0, A.bG)([tA.Ay], () => tA.Ay.useReducedMotion),
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
                t.current = (t.current + 1) % tb.length;
                let n = tb[t.current];
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
            className: tN.Y,
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
var tR = n(416852);
let tS = { left: 8, right: 8 };
function ty(e) {
    let { leading: t, labelAccessory: n, trailing: s, label: r, color: a } = e,
        { collapsed: o } = i.useContext(I),
        c = o ? eH.A : i.Fragment;
    return (0, l.jsxs)(N.B, {
        direction: "horizontal",
        justify: o ? "center" : "start",
        align: "center",
        padding: tS,
        fullWidth: !1,
        className: tR.UP,
        children: [
            (0, l.jsx)("div", { className: tR.R4, children: t }),
            (0, l.jsx)(c, {
                children: (0, l.jsx)(K.D, {
                    variant: "text-sm/medium",
                    color: a ?? "text-muted",
                    lineClamp: 1,
                    children: r,
                }),
            }),
            null != n && !o && (0, l.jsx)("div", { className: tR.nr, children: n }),
            null != s && !o && (0, l.jsx)("div", { className: tR.ZY, children: s }),
        ],
    });
}
var tk = n(845311);
let tD = { top: "sm", bottom: "xxs" };
var tw = n(945584);
function tP(e) {
    switch (e.type) {
        case eq.ik.ACTIVE_NOW:
            return ej.intl.string(ej.t.TxqPQR);
        case eq.ik.ONLINE:
            return ej.intl.string(ej.t.WbGtnH);
        case eq.ik.OFFLINE:
            return ej.intl.string(ej.t.Vv0abJ);
        case eq.ik.GAME:
            return e.label;
        case eq.ik.LETTER:
            return null;
    }
}
function t_(e) {
    let { sectionIndex: t, isCollapsed: n, onToggleCollapsed: s } = e,
        r = (0, A.bG)([e$.A], () => e$.A.getSections()[t]),
        { collapsed: a } = i.useContext(I),
        o = r.key,
        c = i.useCallback(() => s(o), [s, o]),
        u = t > 0 ? tw.Ci : void 0,
        d = tP(r) ?? r.label ?? "";
    if (a)
        return (0, l.jsx)(b.m, {
            position: "left",
            text: d,
            ariaHidden: !0,
            children: (0, l.jsx)(N.B, {
                padding: tD,
                gap: 0,
                className: u,
                children: (0, l.jsx)(ty, { leading: (0, l.jsx)(tT, { section: r }), label: tP(r) }),
            }),
        });
    let x = ej.intl.formatToPlainString(n ? ep.default.QcKHvf : ep.default.jsV9yS, { sectionName: d });
    return (0, l.jsx)(tg.s, {
        "aria-label": x,
        onClick: c,
        focusProps: { offset: { right: 4 } },
        className: tw.wx,
        children: (0, l.jsx)(N.B, {
            padding: tD,
            gap: 0,
            className: u,
            children: (0, l.jsx)(ty, {
                leading: (0, l.jsx)(tT, { section: r }),
                label: (0, l.jsx)(tF, { section: r }),
                labelAccessory: (0, l.jsx)(tG, { isCollapsed: n }),
            }),
        }),
    });
}
function tG(e) {
    let { isCollapsed: t } = e,
        n = t ? tp._ : tj.a;
    return (0, l.jsx)(n, { size: "xs", color: "var(--icon-muted)", "aria-hidden": !0 });
}
function tT(e) {
    let { section: t } = e;
    switch (t.type) {
        case eq.ik.ACTIVE_NOW:
            return (0, l.jsx)(tE, {});
        case eq.ik.ONLINE:
            return (0, l.jsx)(tk.A, { hasOnlineFriends: !0, color: "var(--icon-muted)" });
        case eq.ik.OFFLINE:
            return (0, l.jsx)(tC.nW, { status: eg.clD.OFFLINE, size: 12 });
        case eq.ik.GAME:
            return (0, l.jsx)(tz, { assetUrl: t.gameAssetUrl, appId: t.gameAppId });
        case eq.ik.LETTER:
            return (0, l.jsx)(tU, { letter: t.label ?? "#" });
    }
}
let tM = "\xa0\xa0\xb7\xa0\xa0";
function tL(e) {
    let t = 0;
    for (let n of e.rows) t += n.type === eq.VZ.VOICE_GROUP ? n.rows.length : 1;
    return t;
}
function tF(e) {
    let { section: t } = e;
    return t.type === eq.ik.GAME
        ? (0, l.jsxs)(l.Fragment, {
              children: [(0, l.jsx)(tB, { appId: t.gameAppId, label: t.label }), `${tM}${tL(t)}`],
          })
        : t.type === eq.ik.ACTIVE_NOW || t.type === eq.ik.ONLINE
          ? `${tP(t)}${tM}${tL(t)}`
          : tP(t);
}
function tO(e) {
    return (0, tv.A)({ applicationId: e, source: tI.GameProfileSources.FriendsList, trackEntryPointImpression: !1 });
}
function tB(e) {
    let { appId: t, label: n } = e,
        i = tO(t);
    return null == i ? n : (0, l.jsx)(E.D, { tag: "span", onClick: i, className: tw.mO, children: n });
}
function tz(e) {
    let { appId: t, assetUrl: n } = e,
        i = (0, e7.O)(null == n ? t : null),
        s = n ?? (0, e5.C4)(i)?.src,
        r = tO(t),
        a = (0, l.jsx)(te.V, { src: s, size: 18, "aria-hidden": !0 });
    return null == r
        ? a
        : (0, l.jsx)(E.D, { tag: "span", onClick: r, tabIndex: -1, "aria-hidden": !0, className: tw.Gt, children: a });
}
function tU(e) {
    let { letter: t } = e;
    return (0, l.jsx)(y.E, { variant: "text-sm/bold", children: t });
}
var tH = n(214947),
    tV = n(283973),
    tZ = n(184322);
let tW = Array.from({ length: 10 }, (e, t) =>
    (0, l.jsxs)(
        "div",
        {
            className: tZ._f,
            "aria-hidden": "true",
            children: [(0, l.jsx)("div", { className: tZ.RH }), (0, l.jsx)("div", { className: tZ.rl })],
        },
        t,
    ),
);
function t$() {
    let { collapsed: e } = i.useContext(I);
    return e ? (0, l.jsx)(tY, {}) : (0, l.jsx)(tq, {});
}
function tq() {
    return (0, l.jsxs)("div", {
        className: tZ.kL,
        children: [
            (0, l.jsx)("div", { className: tZ.Dd, children: tW }),
            (0, l.jsx)(N.B, {
                align: "center",
                justify: "center",
                padding: { left: 24, right: 24 },
                className: tZ.C,
                children: (0, l.jsxs)(N.B, {
                    align: "center",
                    gap: 16,
                    padding: { bottom: 80 },
                    children: [
                        (0, l.jsx)(tH.$, { size: "lg", color: D.A.colors.ICON_DEFAULT }),
                        (0, l.jsxs)(N.B, {
                            gap: 4,
                            className: tZ.Dk,
                            children: [
                                (0, l.jsx)(K.D, {
                                    variant: "heading-md/medium",
                                    children: ej.intl.string(ep.default["4fvi9I"]),
                                }),
                                (0, l.jsx)(y.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: ej.intl.string(ep.default.OZj923),
                                }),
                            ],
                        }),
                        (0, l.jsx)(eM, {
                            position: "bottom",
                            children: (e) => {
                                let { buttonRef: t, onClick: n } = e;
                                return (0, l.jsx)(Z.$, {
                                    buttonRef: t,
                                    fullWidth: !0,
                                    size: "md",
                                    variant: "primary",
                                    icon: tV.R,
                                    text: ej.intl.string(ep.default.au4mU4),
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
function tY() {
    return (0, l.jsx)("div", {
        className: tZ.kL,
        children: (0, l.jsxs)("div", {
            className: r()(tZ.Dd, tZ.yZ),
            children: [
                (0, l.jsx)("div", {
                    className: tZ._f,
                    children: (0, l.jsx)(eM, {
                        position: "left",
                        children: (e) => {
                            let { buttonRef: t, onClick: n } = e;
                            return (0, l.jsx)(b.m, {
                                text: ej.intl.string(ep.default.au4mU4),
                                position: "bottom",
                                targetElementRef: t,
                                children: (0, l.jsx)(z.K, {
                                    buttonRef: t,
                                    size: "sm",
                                    variant: "secondary",
                                    icon: tV.R,
                                    "aria-label": ej.intl.string(ep.default.au4mU4),
                                    onClick: n,
                                }),
                            });
                        },
                    }),
                }),
                tW,
            ],
        }),
    });
}
var tX = n(983851),
    tQ = n(730852),
    tK = n(47167),
    tJ = n(378570),
    t0 = n(798350);
function t6(e) {
    let { row: t, sectionType: n } = e,
        i = (0, A.bG)([to.A], () => to.A.getChannel(t.channelId), [t.channelId]),
        s = (0, tK.Ay)(i) ?? ej.intl.string(ej.t["/YzI63"]),
        a = (0, e8.gU)(i) ?? tX.H,
        o = (0, A.bG)([tu.A], () => tu.A.isInChannel(t.channelId));
    return (0, l.jsxs)(N.B, {
        gap: 0,
        padding: { top: "md", bottom: "md" },
        className: r()(t0.Os, t0.aW),
        role: "group",
        "aria-label": s,
        children: [
            (0, l.jsx)("b", { className: t0.h_ }),
            (0, l.jsx)(ty, {
                leading: (0, l.jsx)(a, { size: "xs", color: "var(--icon-voice-connected)", "aria-hidden": !0 }),
                trailing: (0, l.jsx)(t3, { channelId: t.channelId, channelName: s, isInChannel: o }),
                label: null != i ? (0, l.jsx)(t1, { channelId: t.channelId, channelName: s }) : s,
                color: "text-default",
            }),
            (0, l.jsx)(N.B, {
                gap: 0,
                padding: { top: 4 },
                children: t.rows.map((e) => (0, l.jsx)(tx, { row: e, sectionType: n, inVoiceSubgroup: !0 }, e.userId)),
            }),
            t.extraMemberCount > 0 && (0, l.jsx)(t7, { count: t.extraMemberCount }),
        ],
    });
}
function t1(e) {
    let { channelId: t, channelName: n } = e,
        { collapsed: s } = i.useContext(I);
    return s
        ? n
        : (0, l.jsx)(eU.tG, {
              id: `voice:${t}:name`,
              children: (e) => {
                  let { role: i, ...s } = e;
                  return (0, l.jsx)("span", {
                      role: i,
                      children: (0, l.jsx)(E.D, {
                          tag: "span",
                          className: t0.HA,
                          onClick: () => (0, tJ.iN)(t),
                          ...s,
                          children: n,
                      }),
                  });
              },
          });
}
function t3(e) {
    let { channelId: t, channelName: n, isInChannel: i } = e;
    return (0, l.jsx)(eU.tG, {
        id: `voice:${t}:join`,
        children: (e) => {
            let { role: s, ...a } = e;
            return (0, l.jsx)("div", {
                role: s,
                className: r()(t0.PD, i && t0.RK),
                children: (0, l.jsx)(Z.$, {
                    text: ej.intl.string(i ? ej.t["Hi1/aQ"] : ej.t.VJlc0S),
                    variant: i ? "critical-secondary" : "active",
                    size: "sm",
                    "aria-label": i ? void 0 : ej.intl.formatToPlainString(ep.default.gOIq4P, { channel: n }),
                    onClick: () => (i ? tQ.default.disconnect() : tQ.default.selectVoiceChannel(t)),
                    ...a,
                }),
            });
        },
    });
}
function t7(e) {
    let { count: t } = e,
        { collapsed: n } = i.useContext(I);
    return (0, l.jsxs)(N.B, {
        direction: "horizontal",
        align: "center",
        justify: n ? "center" : "start",
        fullWidth: !1,
        gap: 4,
        padding: { top: 4, bottom: 4 },
        children: [
            !n && (0, l.jsx)("b", { className: t0.hF }),
            (0, l.jsx)(y.E, {
                variant: "text-xs/medium",
                color: "text-muted",
                children: ej.intl.formatToPlainString(n ? ep.default.SWPwHW : ep.default.d90MfZ, { count: t }),
            }),
        ],
    });
}
var t8 = n(182927);
function t4() {
    let e,
        t,
        n,
        s,
        r = (0, A.bG)([e$.A], () => e$.A.getSections()),
        { collapsed: a } = i.useContext(I),
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
        f = i.useRef(null),
        m = (0, eW.A)("friends-list", f),
        {
            rowHeight: g,
            sectionHeaderHeight: p,
            sectionDividerHeight: j,
            subgroupPadding: C,
        } = ((e = (0, eZ.r)(D.A.space.SPACE_XXS)),
        (t = (0, eZ.r)(D.A.space.SPACE_XS)),
        (n = (0, eZ.r)(D.A.space.SPACE_SM)),
        {
            rowHeight: 32 + 2 * t,
            sectionHeaderHeight: 24 + n + e,
            sectionDividerHeight: (s = (0, eZ.r)(D.A.space.SPACE_MD)),
            subgroupPadding: s,
        }),
        v = i.useCallback((e) => (e > 0 ? p + j : p), [p, j]),
        N = i.useCallback(
            (e, t) => {
                if (u(e)) return 0;
                let n = r[e]?.rows[t];
                return null == n
                    ? g
                    : n.type === eq.VZ.VOICE_GROUP && n.rows.length > 1
                      ? 2 * C + 24 + 4 + n.rows.length * g + 24 * (n.extraMemberCount > 0)
                      : g;
            },
            [r, u, g, C],
        ),
        b = i.useCallback(
            (e) => {
                let { section: t, row: n } = e;
                if (u(t)) return null;
                let i = r[t],
                    s = i?.rows[n];
                return null == s || null == i
                    ? null
                    : s.type === eq.VZ.VOICE_GROUP
                      ? (0, l.jsx)(t6, { row: s, sectionType: i.type }, s.key)
                      : (0, l.jsx)(tx, { row: s, sectionType: i.type }, s.userId);
            },
            [r, u],
        ),
        E = i.useCallback(
            (e) => {
                let { section: t } = e;
                return (0, l.jsx)(t_, { sectionIndex: t, isCollapsed: u(t), onToggleCollapsed: d });
            },
            [u, d],
        );
    return 0 === r.length
        ? (0, l.jsx)(t$, {})
        : (0, l.jsx)(B.F, {
              component: (0, l.jsx)(eH.A, {
                  children: (0, l.jsx)(B.H, { id: h, children: ej.intl.string(ej.t.TdEu5X) }),
              }),
              children: (0, l.jsx)(eU.hD, {
                  navigator: m,
                  children: (0, l.jsx)(eU.PR, {
                      children: (e) => {
                          let { ref: t, role: n, ...i } = e;
                          return (0, l.jsx)(eV.OZ, {
                              ref: (e) => {
                                  ((f.current = e), (t.current = e?.getScrollerNode() ?? null));
                              },
                              ...i,
                              className: t8.p,
                              "aria-labelledby": h,
                              innerRole: n,
                              sections: x,
                              sectionHeight: v,
                              rowHeight: N,
                              renderSection: E,
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
var t2 = n(259730),
    t9 = n(450030),
    t5 = n(783977),
    ne = n(7689),
    nt = n(683438),
    nn = n(765671),
    nl = n(980707),
    ni = n(477782),
    ns = n(606325),
    nr = n(303911),
    na = n(67746);
let no = [
    [eq.Vj.ACTIVE_NOW, ep.default["/lMTzd"], ep.default.IzzWNM],
    [eq.Vj.GAME, ep.default.aKZ12v, ep.default.lE79Lm],
    [eq.Vj.ALPHABETICAL, ep.default.eVxFX3, null],
];
function nc(e) {
    let { width: t, closePopout: n } = e,
        i = (0, A.bG)([e$.A], () => e$.A.getGroupingMode()),
        s = (0, A.bG)([e$.A], () => e$.A.isVoiceGroupingEnabled()),
        { analyticsLocations: r } = (0, h.Ay)();
    return (0, l.jsx)("div", {
        className: na.k,
        style: { "--custom-group-config-popout-width": `${t ?? 264}px` },
        children: (0, l.jsxs)(nl.W, {
            navId: "friends-list-group-config",
            "aria-label": ej.intl.string(ep.default["i+986w"]),
            onClose: n,
            onSelect: void 0,
            children: [
                (0, l.jsx)(ni.rX, {
                    label: ej.intl.string(ep.default.OvTyCX),
                    children: no.map((e) => {
                        let [t, s, a] = e;
                        return (0, l.jsx)(
                            ni.iD,
                            {
                                id: `friends-list-grouping-mode-${t}`,
                                label: ej.intl.string(s),
                                subtext: null != a ? ej.intl.string(a) : null,
                                group: "friends-list-grouping-select",
                                checked: i === t,
                                action: () => {
                                    (t !== i &&
                                        (0, C.r_)({
                                            oldGroupingMode: (0, nr.c7)(i),
                                            newGroupingMode: (0, nr.c7)(t),
                                            analyticsLocations: r,
                                        }),
                                        (0, ns.Je)(t),
                                        n());
                                },
                            },
                            `friends-list-grouping-mode-${t}`,
                        );
                    }),
                }),
                (0, nr.kR)(i) &&
                    (0, l.jsx)(ni.rX, {
                        label: ej.intl.string(ej.t["8/udY0"]),
                        children: (0, l.jsx)(ni.fP, {
                            id: "friends-list-group-voice-channels",
                            label: ej.intl.string(ep.default["/b1eZT"]),
                            subtext: ej.intl.string(ep.default["/bZ+Av"]),
                            checked: s,
                            action: () => {
                                ((0, C.Sj)({
                                    oldVoiceGroupingEnabled: s,
                                    newVoiceGroupingEnabled: !s,
                                    analyticsLocations: r,
                                }),
                                    (0, ns.Lk)(!s),
                                    n());
                            },
                        }),
                    }),
            ],
        }),
    });
}
n(321073);
var nu = n(308528),
    nd = n(565860),
    nx = n(723690),
    nh = n(976860),
    nf = n(994500),
    nm = n(972910);
function ng(e) {
    let { friend: t, appendGap: n, closePopout: s } = e,
        [a, o] = i.useState(!1),
        {
            status: c,
            isMobile: u,
            isVR: d,
        } = (0, A.cf)([tc.A], () => ({
            status: tc.A.getStatus(t.userId),
            isMobile: tc.A.isMobileOnline(t.userId),
            isVR: tc.A.isVROnline(t.userId),
        }));
    return (0, l.jsx)(E.D, {
        className: r()(nm.Ke, { [nm.w$]: n }),
        onMouseEnter: () => o(!0),
        onMouseLeave: () => o(!1),
        onClick: function () {
            let e = to.A.getDMFromUserId(t.user.id);
            (null != e ? (0, nh.pX)(eg.BVt.CHANNEL(eg.ME, e)) : nu.A.openPrivateChannel({ recipientIds: t.user.id }),
                (0, eu.WD)({ targetUserId: t.user.id, tab: C.x3 }),
                s?.());
        },
        children: (0, l.jsx)(nx.A, {
            user: t.user,
            status: c,
            isMobile: u,
            isVR: d,
            subText: (0, l.jsx)(y.E, { variant: "text-xs/medium", color: "text-muted", children: t.user.username }),
            hovered: a,
            showAccountIdentifier: !1,
            className: nm.eF,
        }),
    });
}
function np(e) {
    let { searchResults: t, closePopout: n } = e,
        i = (0, eZ.r)(D.A.space.SPACE_XS),
        s = (0, eZ.r)(D.A.space.SPACE_XXS),
        r = 36 + 2 * i,
        a = [t.length];
    return (0, l.jsx)(eV.OZ, {
        renderRow: (e) => {
            let { section: i, row: s } = e,
                r = t[s];
            return (0, l.jsx)(ng, { friend: r, appendGap: s !== t.length - 1, closePopout: n }, r.userId);
        },
        rowHeight: (e, n) => (n === t.length - 1 ? r : r + s),
        sections: a,
        sectionHeight: 18 + s,
        renderSection: (e) => {
            let { section: n } = e;
            return (0, l.jsx)(y.E, {
                className: nm.nw,
                variant: "text-sm/medium",
                children: ej.intl.format(ej.t.xIWGxu, { count: t.length }),
            });
        },
        className: nm.Xv,
    });
}
function nj() {
    return (0, l.jsx)(y.E, {
        variant: "text-sm/medium",
        className: nm.n1,
        children: ej.intl.string(ep.default["0usxBd"]),
    });
}
function nC() {
    return (0, l.jsx)(y.E, {
        variant: "text-sm/medium",
        className: nm.n1,
        children: ej.intl.string(ep.default.VH2HXW),
    });
}
function nI(e) {
    let { rawQuery: t, closePopout: n } = e,
        i = (0, nd.HI)(t),
        s = (0, A.bG)(
            [nf.A, T.default],
            () => {
                if ("" === i) return [];
                let e = nf.A.getFriendIDs(),
                    t = [];
                return (
                    e.forEach((e) => {
                        let n = T.default.getUser(e);
                        if (void 0 === n) return;
                        let l = nf.A.getNickname(e),
                            s = [(0, nd.HI)(n.username)];
                        (null != n.globalName && s.push((0, nd.HI)(n.globalName)),
                            null != l && s.push((0, nd.HI)(l)),
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
        ? (0, l.jsx)(nj, {})
        : s.length > 0
          ? (0, l.jsx)(np, { searchResults: s, closePopout: n })
          : (0, l.jsx)(nC, {});
}
function nv(e) {
    let { query: t, width: n, closePopout: i } = e;
    return (0, l.jsx)("div", {
        className: r()(nm.kL, nm.zZ),
        style: { "--custom-search-friends-popout-width": `${n ?? 264}px` },
        children: (0, l.jsx)(nI, { rawQuery: t, closePopout: i }),
    });
}
function nA(e) {
    let { closePopout: t } = e,
        [n, s] = i.useState("");
    return (0, l.jsx)(O.l, {
        children: (0, l.jsxs)("div", {
            className: nm.kL,
            children: [
                (0, l.jsx)("div", {
                    className: nm.M6,
                    children: (0, l.jsx)(H.k, { placeholder: ej.intl.string(ej.t.lLDtTK), value: n, onChange: s }),
                }),
                (0, l.jsx)(nI, { rawQuery: n, closePopout: t }),
            ],
        }),
    });
}
var nN = n(540950);
function nb() {
    let { analyticsLocations: e } = (0, h.Ay)();
    return (0, l.jsx)(n_, {
        icon: t2.E,
        label: ej.intl.string(ep.default.JZCSRZ),
        onClick: function () {
            ((0, C.RQ)({ open: !1, source: C.TY.SIDEBAR_HEADER_BUTTON, analyticsLocations: e }),
                u.A.setFriendsSidebarCollapsed(!0));
        },
    });
}
function nE() {
    let [e, t] = i.useState(null);
    i.useEffect(() => {
        function e() {
            t(null);
        }
        return (
            p._.subscribe(eg.jej.FRIENDS_SIDEBAR_RESIZED, e),
            () => {
                p._.unsubscribe(eg.jej.FRIENDS_SIDEBAR_RESIZED, e);
            }
        );
    }, []);
    let { collapsed: n } = i.useContext(I),
        { appBarToggleEnabled: s } = j.A.useConfig({ location: "FriendsListHeader" }),
        [r, a] = i.useState(!1),
        o = i.useRef(void 0),
        c = i.useRef(null),
        u = i.useRef(null),
        d = i.useRef(null),
        x = i.useCallback((e) => {
            let { width: t } = e,
                n = u.current?.getBoundingClientRect().width,
                l = d.current?.getBoundingClientRect().width;
            (null != t && (o.current = t - 16), null != t && null != n && null != l && a(t - (n + l) <= 24));
        }, []);
    (0, nn.i4)(c, x);
    let h = n
        ? (0, l.jsx)(nS, {})
        : "search" === e
          ? (0, l.jsx)(nw, { isSearching: !0, setActivePopout: t, contentWidthRef: o })
          : (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(nR, {
                        compact: r,
                        contentWidthRef: o,
                        isPopoutOpen: "groupConfig" === e,
                        setActivePopout: t,
                    }),
                    (0, l.jsxs)(N.B, {
                        direction: "horizontal",
                        align: "center",
                        fullWidth: !1,
                        ref: d,
                        children: [
                            (0, l.jsx)(nw, { isSearching: !1, setActivePopout: t, contentWidthRef: o }),
                            (0, l.jsx)(nP, { popoutPosition: "bottom" }),
                            s ? null : (0, l.jsx)(nb, {}),
                        ],
                    }),
                ],
            });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(nR, { ghost: !0, ref: u }),
            (0, l.jsx)(N.B, {
                direction: "horizontal",
                fullWidth: !1,
                justify: n ? "center" : "space-between",
                padding: 8,
                className: nN.wx,
                ref: c,
                children: h,
            }),
        ],
    });
}
function nR(e) {
    let { compact: t = !1, ghost: n = !1, contentWidthRef: s, isPopoutOpen: a = !1, setActivePopout: o, ref: c } = e,
        u = i.useRef(null),
        { analyticsLocations: d } = (0, h.Ay)();
    function x() {
        o?.(null);
    }
    let f = t
            ? (0, l.jsx)(tH.$, { size: "xs", color: "var(--icon-default)" })
            : (0, l.jsx)(y.E, {
                  variant: "heading-md/medium",
                  tag: "span",
                  children: ej.intl.string(ep.default["7kJd9e"]),
              }),
        m = (0, l.jsx)(E.D, {
            className: r()(nN.Iw, { [nN.qy]: n }),
            "aria-label": ej.intl.string(ep.default["7kJd9e"]),
            "aria-hidden": n,
            "aria-haspopup": n ? void 0 : "menu",
            "aria-expanded": n ? void 0 : a,
            onClick: function () {
                !n &&
                    (o?.(a ? null : "groupConfig"),
                    a || (0, C.BJ)({ button: C.FT.GROUPING_MODE_SELECT, analyticsLocations: d }));
            },
            innerRef: c ?? u,
            children: (0, l.jsxs)(N.B, {
                direction: "horizontal",
                gap: 4,
                align: "center",
                padding: { top: 6, bottom: 6, left: 8, right: 8 },
                className: nN.$E,
                children: [f, (0, l.jsx)(tj.a, { color: "var(--text-default)", size: "sm" })],
            }),
        });
    if (n) return m;
    let g = (0, l.jsx)(W.Y, {
        targetElementRef: u,
        shouldShow: a,
        onRequestClose: x,
        position: "bottom",
        align: "left",
        renderPopout: () => (0, l.jsx)(nc, { width: s?.current, closePopout: x }),
        children: () => m,
    });
    return a ? g : (0, l.jsx)(b.m, { text: ej.intl.string(ep.default.wvbB3Z), asContainer: !0, children: g });
}
function nS() {
    let e = i.useRef(null),
        [t, n] = i.useState(!1),
        { analyticsLocations: s } = (0, h.Ay)();
    function r(e) {
        (e.preventDefault(), n(!0));
    }
    function a() {
        n(!1);
    }
    function o() {
        ((0, C.RQ)({ open: !0, source: C.TY.SIDEBAR_HEADER_BUTTON, analyticsLocations: s }),
            u.A.setFriendsSidebarCollapsed(!1));
    }
    return (0, l.jsx)(W.Y, {
        targetElementRef: e,
        shouldShow: t,
        onRequestClose: a,
        position: "bottom",
        renderPopout: () => (0, l.jsx)(ny, { onClose: a }),
        children: () =>
            (0, l.jsx)(n_, {
                buttonRef: e,
                icon: t9.U,
                label: ej.intl.string(ep.default["Dr/+ku"]),
                onContextMenu: r,
                onClick: o,
            }),
    });
}
function ny(e) {
    let { onClose: t } = e;
    return (0, l.jsxs)(N.B, {
        gap: 4,
        padding: 8,
        fullWidth: !1,
        className: nN.QG,
        children: [
            (0, l.jsx)(nk, {}),
            (0, l.jsx)(nD, { onClose: t }),
            (0, l.jsx)(nP, { popoutPosition: "left", tooltipPosition: "left" }),
        ],
    });
}
function nk() {
    let e = i.useRef(null),
        [t, n] = i.useState(!1),
        { analyticsLocations: s } = (0, h.Ay)();
    function r() {
        n(!1);
    }
    function a() {
        (t || (0, C.BJ)({ button: C.FT.GROUPING_MODE_SELECT, analyticsLocations: s }), n(!t));
    }
    return (0, l.jsx)(W.Y, {
        targetElementRef: e,
        shouldShow: t,
        onRequestClose: r,
        position: "left",
        renderPopout: () => (0, l.jsx)(nc, { closePopout: r }),
        children: () =>
            (0, l.jsx)(n_, {
                buttonRef: e,
                icon: t5.R,
                label: ej.intl.string(ep.default["i+986w"]),
                tooltipPosition: "left",
                onClick: a,
            }),
    });
}
function nD(e) {
    let { onClose: t } = e,
        n = i.useRef(null),
        [s, r] = i.useState(!1),
        { analyticsLocations: a } = (0, h.Ay)();
    function o() {
        (r(!1), t?.());
    }
    function c() {
        (s || (0, C.BJ)({ button: C.FT.SEARCH, analyticsLocations: a }), r(!s));
    }
    return (0, l.jsx)(W.Y, {
        targetElementRef: n,
        shouldShow: s,
        onRequestClose: o,
        position: "left",
        renderPopout: () => (0, l.jsx)(nA, { closePopout: o }),
        children: () =>
            (0, l.jsx)(n_, {
                buttonRef: n,
                icon: ne.MagnifyingGlassIcon,
                label: ej.intl.string(ep.default["60M8Ae"]),
                tooltipPosition: "left",
                onClick: c,
            }),
    });
}
function nw(e) {
    let { isSearching: t, setActivePopout: n, contentWidthRef: s } = e,
        r = i.useRef(null),
        [a, o] = i.useState(""),
        { analyticsLocations: c } = (0, h.Ay)();
    function u() {
        (n(null), o(""));
    }
    return t
        ? (0, l.jsx)(W.Y, {
              targetElementRef: r,
              shouldShow: !0,
              onRequestClose: u,
              position: "bottom",
              align: "center",
              nudgeAlignIntoViewport: !1,
              renderPopout: () => (0, l.jsx)(nv, { query: a, width: s.current, closePopout: u }),
              children: () =>
                  (0, l.jsx)("div", {
                      ref: r,
                      className: nN.wB,
                      children: (0, l.jsx)(nt.I, {
                          autoFocus: !0,
                          "aria-label": ej.intl.string(ep.default["60M8Ae"]),
                          placeholder: ej.intl.string(ej.t.lLDtTK),
                          query: a,
                          onChange: o,
                          onClear: () => o(""),
                          size: "sm",
                      }),
                  }),
          })
        : (0, l.jsx)(n_, {
              icon: ne.MagnifyingGlassIcon,
              label: ej.intl.string(ep.default["60M8Ae"]),
              onClick: function () {
                  (n("search"), (0, C.BJ)({ button: C.FT.SEARCH, analyticsLocations: c }));
              },
          });
}
function nP(e) {
    let { popoutPosition: t, tooltipPosition: n, onClose: i } = e,
        { analyticsLocations: s } = (0, h.Ay)();
    return (0, l.jsx)(eM, {
        position: t,
        onClose: i,
        children: (e) => {
            let { buttonRef: t, onClick: i, showPopout: r } = e;
            return (0, l.jsx)(n_, {
                buttonRef: t,
                icon: tV.R,
                label: ej.intl.string(ep.default.au4mU4),
                tooltipPosition: n,
                onClick: () => {
                    (r || (0, C.BJ)({ button: C.FT.ADD_FRIEND, analyticsLocations: s }), i());
                },
            });
        },
    });
}
function n_(e) {
    let { icon: t, label: n, onClick: s, onContextMenu: r, tooltipPosition: a, buttonRef: o } = e,
        c = i.useRef(null),
        u = o ?? c;
    return (0, l.jsx)(b.m, {
        text: n,
        position: a,
        targetElementRef: u,
        anchorRef: u,
        children: (0, l.jsx)(E.D, {
            "aria-label": n,
            onClick: s,
            onContextMenu: r,
            innerRef: u,
            className: nN.x6,
            children: (0, l.jsx)(t, { size: "sm", color: "currentColor" }),
        }),
    });
}
var nG = n(45863);
function nT() {
    let e = i.useRef(null),
        t = i.useRef(null),
        n = i.useRef(!1),
        s = i.useRef(0),
        A = (0, v.c)(),
        { isHoveringOrFocusing: N } = (0, f.A)(e),
        { appBarToggleEnabled: b } = j.A.useConfig({ location: "FriendsSidebar" }),
        { analyticsLocations: E } = (0, h.Ay)(x.A.FRIENDS_SIDEBAR),
        R = i.useCallback((n) => {
            ((s.current = n),
                null != e.current &&
                    ((e.current.style.width = `${n}px`),
                    e.current.style.setProperty("--custom-friends-sidebar-width", `${n}px`)),
                t.current?.setAttribute("aria-valuenow", `${n}`));
        }, []);
    i.useLayoutEffect(() => {
        n.current || R(A ? 64 : 280);
    }, [A, R]);
    let S = i.useCallback(
            (e) => {
                R(e);
                let t = e < 200;
                t !== A &&
                    ((0, C.RQ)({ open: !t, source: C.TY.RESIZE_HANDLE, analyticsLocations: E }),
                    (0, a.flushSync)(() => u.A.setFriendsSidebarCollapsed(t)));
            },
            [R, A, E],
        ),
        y = i.useCallback(() => {
            ((n.current = !0), t.current?.classList?.add(nG.cB), p._.dispatch(eg.jej.FRIENDS_SIDEBAR_RESIZED));
        }, []),
        k = i.useCallback((e) => {
            ((n.current = !1), t.current?.setAttribute("aria-valuenow", `${e}`), t.current?.classList?.remove(nG.cB));
        }, []),
        D = i.useCallback((e) => (b ? Math.min(Math.max(e, 280), 320) : e < 200 ? 64 : Math.min(e, 320)), [b]),
        w = (0, d.A)({
            resizableDomNodeRef: e,
            minDimension: b ? 200 : 64,
            maxDimension: 320,
            orientation: d.R.HORIZONTAL_LEFT,
            onElementResizeStart: y,
            onApplyDimension: S,
            onElementResizeEnd: k,
            getClampedValue: D,
        }),
        P = i.useCallback(
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
                        l = b ? 280 : 64;
                        break;
                    case "End":
                        l = 320;
                        break;
                    default:
                        return;
                }
                t.preventDefault();
                let i = D(l);
                ((n.current = !0), S(i), (n.current = !1));
            },
            [b, D, S],
        ),
        _ = (0, g.NC)(),
        G = i.useMemo(() => ({ collapsed: A, hovered: N }), [A, N]);
    return (0, l.jsx)(m.A.Provider, {
        value: void 0,
        children: (0, l.jsx)(h.f5, {
            value: E,
            children: (0, l.jsx)(o.N, {
                theme: _,
                children: (n) =>
                    (0, l.jsx)(I.Provider, {
                        value: G,
                        children: (0, l.jsxs)("div", {
                            ref: e,
                            className: r()(nG.kL, n),
                            children: [
                                (0, l.jsx)(c.vN, {
                                    children: (0, l.jsx)("div", {
                                        ref: t,
                                        role: "separator",
                                        tabIndex: 0,
                                        "aria-orientation": "vertical",
                                        "aria-label": ej.intl.string(ep.default["F3+Xei"]),
                                        "aria-valuemin": b ? 280 : 64,
                                        "aria-valuemax": 320,
                                        className: nG.Di,
                                        onMouseDown: w,
                                        onKeyDown: P,
                                    }),
                                }),
                                (0, l.jsx)(nE, {}),
                                (0, l.jsxs)("div", {
                                    className: nG.rf,
                                    children: [
                                        (0, l.jsx)(eF, {}),
                                        (0, l.jsx)(c.xp, { containerRef: e, children: (0, l.jsx)(t4, {}) }),
                                    ],
                                }),
                            ],
                        }),
                    }),
            }),
        }),
    });
}
