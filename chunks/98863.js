(n.r(t), n.d(t, { default: () => n$ }));
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
    b = n(331322),
    N = n(866665),
    E = n(939249),
    R = n(862328),
    S = n(812993),
    y = n(834730),
    k = n(881636),
    w = n(661531),
    P = n(778712),
    D = n(97808),
    G = n(954376),
    T = n(454932),
    _ = n(287809),
    M = n(902902);
function L() {
    return (0, A.cf)([M.A], () => ({ incoming: M.A.getIncomingRequests(), outgoing: M.A.getOutgoingRequests() }));
}
var F = n(858899),
    O = n(305866),
    B = n(707554),
    z = n(408278),
    H = n(173936),
    U = n(95477),
    V = n(103557),
    Z = n(821609),
    W = n(922016),
    $ = n(376728),
    q = n(279208),
    Y = n(189883),
    K = n(237309),
    X = n(957565),
    Q = n(297264),
    J = n(625903),
    ee = n(689175),
    et = n(559647),
    en = n(428678),
    el = n(890856),
    ei = n(789645),
    es = n(933832),
    er = n(39623),
    ea = n(123292),
    eo = n(216964),
    ec = n(769015),
    eu = n(640708),
    ed = n(22212),
    ex = n(409978),
    eh = n(390848),
    ef = n(342296),
    em = n(780964),
    eg = n(766075),
    ep = n(427262),
    ej = n(652215),
    eC = n(682530),
    eI = n(105292),
    ev = n(788868);
let eA = "Friends Sidebar Add Friend Popout";
function eb() {
    let { incoming: e, outgoing: t } = L(),
        n = i.useMemo(() => [...e, ...t], [e, t]);
    return ((0, ex.y)(n), 0 === n.length)
        ? null
        : (0, l.jsxs)(b.B, {
              gap: 4,
              padding: { top: 12, bottom: 16, left: 16, right: 8 },
              className: ev.uW,
              children: [
                  (0, l.jsxs)(b.B, {
                      direction: "horizontal",
                      align: "center",
                      justify: "space-between",
                      padding: { left: 8, right: 8 },
                      className: ev.UP,
                      children: [
                          (0, l.jsxs)(b.B, {
                              direction: "horizontal",
                              align: "center",
                              gap: 8,
                              fullWidth: !1,
                              children: [
                                  (0, l.jsx)(Q.D, {
                                      variant: "text-sm/medium",
                                      color: "text-muted",
                                      children: eI.intl.string(eI.t.fyA115),
                                  }),
                                  e.length > 0 && (0, l.jsx)(S.hV, { count: e.length }),
                              ],
                          }),
                          (0, l.jsx)(N.m, {
                              text: eI.intl.string(eC.default["2vock0"]),
                              position: "bottom",
                              children: (0, l.jsx)(z.K, {
                                  icon: J.SettingsIcon,
                                  size: "sm",
                                  variant: "icon-only",
                                  "aria-label": eI.intl.string(eC.default["2vock0"]),
                                  onClick: () => (0, eg.openUserSettings)(em.X.FRIEND_REQUESTS_CATEGORY),
                              }),
                          }),
                      ],
                  }),
                  (0, l.jsxs)(ee.Ch, {
                      className: ev.Ge,
                      disableFocusRingScope: !0,
                      children: [
                          t.length > 0 && (0, l.jsx)(eN, { outgoing: t }),
                          e.map((e) => (0, l.jsx)(ey, { request: e }, e.key)),
                      ],
                  }),
              ],
          });
}
function eN(e) {
    let { outgoing: t } = e,
        n = i.useRef(null),
        [s, a] = i.useState(!1);
    return (0, l.jsx)(W.Y, {
        targetElementRef: n,
        shouldShow: s,
        onRequestClose: () => a(!1),
        position: "right",
        align: "top",
        renderPopout: () => (0, l.jsx)(eE, { outgoing: t, returnRef: n }),
        children: () =>
            (0, l.jsxs)(E.D, {
                innerRef: n,
                className: r()(ev.nM, ev.b8, ev.d, { [ev.$F]: s }),
                "aria-expanded": s,
                onClick: () => a(!s),
                children: [
                    (0, l.jsx)("div", {
                        className: ev.iE,
                        children: (0, l.jsx)(et.SendMessageIcon, { size: "sm", color: w.A.colors.ICON_DEFAULT }),
                    }),
                    (0, l.jsxs)("div", {
                        className: ev.Qq,
                        children: [
                            (0, l.jsx)(y.E, {
                                variant: "text-md/medium",
                                color: "text-default",
                                lineClamp: 1,
                                children: eI.intl.string(eC.default.JHcSBI),
                            }),
                            (0, l.jsx)(y.E, {
                                variant: "text-xs/medium",
                                color: "text-muted",
                                lineClamp: 1,
                                children: eI.intl.format(eC.default.PY1iDb, { count: t.length }),
                            }),
                        ],
                    }),
                    (0, l.jsx)("div", {
                        className: ev.ai,
                        children: (0, l.jsx)(k.u, { size: "sm", color: w.A.colors.ICON_MUTED }),
                    }),
                ],
            }),
    });
}
function eE(e) {
    let { outgoing: t, returnRef: n } = e;
    return (0, l.jsxs)(O.l, {
        className: ev.YM,
        returnRef: n,
        "aria-label": eI.intl.string(eC.default.JHcSBI),
        children: [
            (0, l.jsx)(b.B, {
                direction: "horizontal",
                align: "center",
                padding: { left: 8, right: 8 },
                className: ev.S1,
                children: (0, l.jsx)(Q.D, {
                    variant: "text-sm/medium",
                    color: "text-subtle",
                    children: eI.intl.format(eC.default.eS6Nek, { count: t.length }),
                }),
            }),
            (0, l.jsx)(ee.Ch, { className: ev.Ge, children: t.map((e) => (0, l.jsx)(eR, { request: e }, e.key)) }),
        ],
    });
}
function eR(e) {
    let { request: t } = e,
        n = (0, A.bG)([_.default], () => _.default.getUser(t.userId));
    return null == n ? null : (0, l.jsx)(eS, { request: t, user: n });
}
function eS(e) {
    let { request: t, user: n } = e,
        s = i.useRef(null),
        { isHoveringOrFocusing: r } = (0, f.A)(s),
        a = (0, T.o)({ user: n, applicationId: t.applicationId, isGameRelationship: t.isGameRelationship }),
        { cancelFriendRequest: o } = (0, eh.I)({
            userId: t.userId,
            applicationId: t.applicationId,
            isGameRelationship: t.isGameRelationship,
            location: eA,
        });
    return (0, l.jsxs)(b.B, {
        ref: s,
        direction: "horizontal",
        align: "center",
        gap: 8,
        padding: 8,
        className: ev.nM,
        children: [
            (0, l.jsx)(eP, { user: n, pendingFriendRequestInfo: a, animate: r }),
            (0, l.jsx)(N.m, {
                text: eI.intl.string(eI.t.eaq81S),
                children: (0, l.jsx)(z.K, {
                    icon: en.K,
                    size: "sm",
                    variant: "icon-only",
                    "aria-label": ew(ej.eA$.PENDING_OUTGOING, a, eI.intl.string(eI.t.eaq81S)),
                    onClick: o,
                }),
            }),
        ],
    });
}
function ey(e) {
    let { request: t } = e,
        n = (0, A.bG)([_.default], () => _.default.getUser(t.userId));
    return null == n ? null : (0, l.jsx)(ek, { request: t, user: n });
}
function ek(e) {
    let { request: t, user: n } = e,
        s = i.useRef(null),
        { isHoveringOrFocusing: a } = (0, f.A)(s),
        [o, c] = i.useState(!1),
        u = (0, T.o)({ user: n, applicationId: t.applicationId, isGameRelationship: t.isGameRelationship }),
        { acceptFriendRequest: d, cancelFriendRequest: x } = (0, eh.I)({
            userId: t.userId,
            applicationId: t.applicationId,
            isGameRelationship: t.isGameRelationship,
            location: eA,
            onConfirm: () =>
                (0, F.P0)({
                    text: eI.intl.formatToPlainString(eI.t.cRwkp7, { name: ep.Ay.getName(n) }),
                    variant: "success",
                }),
            onFinally: () => c(!1),
        });
    function h(e) {
        (e.stopPropagation(), c(!0), d());
    }
    function m(e) {
        (e.stopPropagation(), x());
    }
    return (0, l.jsx)(ef.A, {
        targetElementRef: s,
        user: n,
        position: "right",
        align: "top",
        children: (e, t) => {
            let { isShown: i } = t;
            return (0, l.jsx)(el.s, {
                ref: s,
                onClick: e.onClick,
                onKeyDown: e.onKeyDown,
                onMouseDown: e.onMouseDown,
                "aria-expanded": e["aria-expanded"],
                "aria-label": eI.intl.formatToPlainString(eI.t.M8NKGR, { name: u.displayName }),
                className: r()(ev.nM, ev.b8, ev.ZJ, { [ev.$F]: i }),
                children: (0, l.jsxs)(b.B, {
                    direction: "horizontal",
                    align: null != u.note ? "start" : "center",
                    gap: 8,
                    padding: 8,
                    fullWidth: !1,
                    children: [
                        (0, l.jsx)(eP, {
                            user: n,
                            pendingFriendRequestInfo: u,
                            animate: a,
                            children: null != u.note && (0, l.jsx)(eG, { note: u.note }),
                        }),
                        (0, l.jsxs)(b.B, {
                            direction: "horizontal",
                            align: "center",
                            gap: 4,
                            fullWidth: !1,
                            children: [
                                (0, l.jsx)("div", {
                                    className: ev.L6,
                                    children: (0, l.jsx)(N.m, {
                                        text: eI.intl.string(eI.t.xuio0C),
                                        children: (0, l.jsx)(z.K, {
                                            icon: ei.P,
                                            size: "sm",
                                            variant: "icon-only",
                                            "aria-label": ew(ej.eA$.PENDING_INCOMING, u, eI.intl.string(eI.t.xuio0C)),
                                            onClick: m,
                                        }),
                                    }),
                                }),
                                (0, l.jsx)(N.m, {
                                    text: eI.intl.string(eI.t.Zcibdf),
                                    children: (0, l.jsx)(z.K, {
                                        icon: es.CheckmarkLargeIcon,
                                        size: "sm",
                                        variant: "icon-only",
                                        "aria-label": ew(ej.eA$.PENDING_INCOMING, u, eI.intl.string(eI.t.Zcibdf)),
                                        loading: o,
                                        onClick: h,
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
            });
        },
    });
}
function ew(e, t, n) {
    let { displayName: l, applicationName: i } = t,
        s = { action: n, name: l, application: i ?? "" };
    if (e === ej.eA$.PENDING_INCOMING) {
        let e = null != i ? eI.t.kSmk1F : eI.t["+YIVE1"];
        return eI.intl.formatToPlainString(e, s);
    }
    let r = null != i ? eI.t.BfqcNh : eI.t.vrDIev;
    return eI.intl.formatToPlainString(r, s);
}
function eP(e) {
    let { user: t, pendingFriendRequestInfo: n, animate: i, children: s } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(D.eu, {
                src: t.getAvatarURL(void 0, (0, P.FT)(P._3.SIZE_32), i),
                size: P._3.SIZE_32,
                "aria-hidden": !0,
            }),
            (0, l.jsxs)("div", {
                className: ev.Qq,
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
        : (0, l.jsxs)(b.B, {
              direction: "horizontal",
              align: "center",
              gap: 4,
              children: [
                  null != n &&
                      (0, l.jsx)(y.E, { variant: "text-xs/medium", color: "text-muted", lineClamp: 1, children: n }),
                  null != i &&
                      (0, l.jsxs)(l.Fragment, {
                          children: [
                              null != n && (0, l.jsx)(eu.A, { height: 2, width: 2 }),
                              (0, l.jsx)(ec.A, { game: i, size: ec.M.XXSMALL }),
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
function eG(e) {
    let { note: t } = e,
        [n, s] = i.useState(!1);
    return n
        ? (0, l.jsxs)(y.E, {
              variant: "text-xs/normal",
              color: "text-subtle",
              tag: "p",
              className: ev.N4,
              children: [
                  (0, l.jsx)(eo.c, { size: "xxs", color: w.A.colors.ICON_SUBTLE, className: ev.TG }),
                  t,
                  " ",
                  (0, l.jsx)(ea.Q, {
                      text: eI.intl.string(eC.default.QX4H2E),
                      textVariant: "text-xs/medium",
                      onClick: function (e) {
                          (e.stopPropagation(), s(!1));
                      },
                  }),
              ],
          })
        : (0, l.jsxs)(b.B, {
              direction: "horizontal",
              align: "center",
              gap: 4,
              children: [
                  (0, l.jsx)(er.EyeIcon, { size: "xxs", color: w.A.colors.TEXT_BRAND }),
                  (0, l.jsx)(ea.Q, {
                      text: eI.intl.string(eC.default.xZupEi),
                      textVariant: "text-xs/medium",
                      onClick: function (e) {
                          (e.stopPropagation(), s(!0), (0, ed.Yq)({ analyticsLocation: eA, noteLength: t.length }));
                      },
                  }),
              ],
          });
}
var eT = n(499516);
let e_ = { sending: !1, success: null, error: null };
function eM(e, t) {
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
function eL() {
    let [e, t] = i.useReducer(eM, e_),
        { sending: n, success: s, error: r } = e,
        [a, o] = i.useState(""),
        [c, u] = i.useState(""),
        [d, x] = i.useState(!1),
        { enabled: h } = Y.A.useConfig({ location: "AddFriendPopout" });
    async function f() {
        x(!0);
        try {
            let e = await $.Ay.createFriendInvite(null, ej.PE1.ADD_FRIENDS_POPOUT);
            (0, X.C)(
                (0, q.A)(e.code),
                () => (0, F.P0)({ text: eI.intl.string(eI.t.tBOSx4), variant: "success" }),
                () => (0, F.P0)({ text: eI.intl.string(eI.t.R0RpRX), variant: "critical" }),
            );
        } catch {
            (0, F.P0)({ text: eI.intl.string(eI.t.R0RpRX), variant: "critical" });
        } finally {
            x(!1);
        }
    }
    return (0, l.jsx)(O.l, {
        children: (0, l.jsx)("div", {
            className: eT.kL,
            children: (0, l.jsxs)(B.F, {
                component: (0, l.jsxs)("div", {
                    className: eT.wx,
                    children: [
                        (0, l.jsx)("div", {
                            className: eT.gn,
                            children: (0, l.jsx)(y.E, {
                                variant: "text-md/medium",
                                color: "text-default",
                                children: eI.intl.string(eC.default.au4mU4),
                            }),
                        }),
                        (0, l.jsx)(N.m, {
                            text: eI.intl.string(eI.t.t1T3kD),
                            position: "bottom",
                            align: "right",
                            caretConfig: { align: "end" },
                            children: (0, l.jsx)(z.K, {
                                icon: H.LinkIcon,
                                size: "sm",
                                onClick: f,
                                "aria-label": eI.intl.string(eI.t.t1T3kD),
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
                                (0, K.Ay)({
                                    discordTag: a,
                                    note: h && "" !== c ? c : void 0,
                                    location: "Add Friend Popout",
                                    errorUxConfig: K.gB.SHOW_ONLY_IF_ACTION_NEEDED,
                                })
                                    .then((e) => {
                                        (t({ type: "SUCCESS", text: e }), o(""), u(""));
                                    })
                                    .catch((e) => t({ type: "ERROR", text: e })));
                        },
                        autoComplete: "off",
                        children: (0, l.jsxs)("div", {
                            className: eT.hQ,
                            children: [
                                (0, l.jsx)(U.k, {
                                    value: a,
                                    onChange: (e) => {
                                        (o(e), t({ type: "RESET" }));
                                    },
                                    label: eI.intl.string(eI.t["5C3rVr"]),
                                    fullWidth: !0,
                                    required: !0,
                                    placeholder: eI.intl.string(eI.t.jx0GiG),
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
                                        label: eI.intl.string(eI.t["6dVPSI"]),
                                        value: c,
                                        onChange: function (e) {
                                            (u(e), t({ type: "RESET" }));
                                        },
                                        helperText: eI.intl.string(eI.t.UtfQNw),
                                        maxLength: K.XG,
                                        showCharacterCount: !0,
                                        rows: 3,
                                        placeholder: eI.intl.string(eI.t.bTMtdN),
                                        disabled: n,
                                    }),
                                (0, l.jsx)(Z.$, {
                                    variant: "primary",
                                    size: "md",
                                    text: eI.intl.string(eI.t.HWT3wh),
                                    fullWidth: !0,
                                    disabled: "" === a.trim() || n,
                                    type: "submit",
                                }),
                            ],
                        }),
                    }),
                    (0, l.jsx)(eb, {}),
                ],
            }),
        }),
    });
}
function eF(e) {
    let { position: t, onClose: n, spacing: s, children: r } = e,
        a = i.useRef(null),
        [o, c] = i.useState(!1),
        u = i.useCallback(() => {
            (c(!1), n?.());
        }, [n]);
    return (
        i.useEffect(
            () => (
                p._.subscribe(ej.jej.FRIENDS_SIDEBAR_RESIZED, u),
                () => {
                    p._.unsubscribe(ej.jej.FRIENDS_SIDEBAR_RESIZED, u);
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
            renderPopout: () => (0, l.jsx)(eL, {}),
            children: () => r({ buttonRef: a, onClick: () => c(!o), showPopout: o }),
        })
    );
}
var eO = n(669850);
function eB() {
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
        a = (0, A.bG)([_.default], () => _.default.getUser(r), [r]);
    return null == s || null == a
        ? null
        : (0, l.jsx)(b.B, {
              padding: 8,
              className: eO.uW,
              children: (0, l.jsx)(
                  eF,
                  {
                      position: "left",
                      spacing: 16,
                      children: (i) => {
                          let { buttonRef: r, onClick: o } = i;
                          return t
                              ? (0, l.jsx)(ez, {
                                    buttonRef: r,
                                    onClick: o,
                                    incoming: e,
                                    facepileUserIds: n,
                                    latestUser: a,
                                })
                              : (0, l.jsx)(eH, {
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
function ez(e) {
    let { buttonRef: t, onClick: n, incoming: i, facepileUserIds: s, latestUser: r } = e,
        { isHoveringOrFocusing: a } = (0, f.A)(t);
    return (0, l.jsx)(N.m, {
        text: eI.intl.string(eI.t.fyA115),
        position: "left",
        targetElementRef: t,
        children: (0, l.jsx)(E.D, {
            innerRef: t,
            className: eO.Wj,
            "aria-label": eI.intl.formatToPlainString(eI.t.xxFCW8, { count: i.length }),
            onClick: n,
            children: (0, l.jsx)(R.Q, {
                rounded: 1 === s.length,
                lowerBadge: (0, l.jsx)(S.hV, { count: i.length, "aria-hidden": !0 }),
                lowerBadgeSize: { width: (0, S.o6)(i.length) },
                children: (0, l.jsx)("div", {
                    className: eO.UI,
                    children: (0, l.jsx)(eU, { facepileUserIds: s, latestUser: r, animate: a }),
                }),
            }),
        }),
    });
}
function eH(e) {
    let { buttonRef: t, onClick: n, incoming: i, facepileUserIds: s, latestRequest: r, latestUser: a } = e,
        { isHoveringOrFocusing: o } = (0, f.A)(t),
        { displayName: c } = (0, T.o)({
            user: a,
            applicationId: r.applicationId,
            isGameRelationship: r.isGameRelationship,
        });
    return (0, l.jsxs)(E.D, {
        innerRef: t,
        className: eO.nM,
        onClick: n,
        children: [
            (0, l.jsx)(eU, { facepileUserIds: s, latestUser: a, animate: o }),
            (0, l.jsxs)("div", {
                className: eO.Qq,
                children: [
                    (0, l.jsx)(y.E, {
                        variant: "text-md/medium",
                        color: "text-default",
                        lineClamp: 1,
                        children: eI.intl.string(eI.t.fyA115),
                    }),
                    (0, l.jsx)(y.E, { variant: "text-xs/medium", color: "text-muted", lineClamp: 1, children: c }),
                ],
            }),
            (0, l.jsxs)(b.B, {
                direction: "horizontal",
                align: "center",
                gap: 4,
                fullWidth: !1,
                children: [
                    (0, l.jsx)(S.hV, { count: i.length }),
                    (0, l.jsx)("div", {
                        className: eO.ai,
                        children: (0, l.jsx)(k.u, { size: "sm", color: w.A.colors.ICON_MUTED }),
                    }),
                ],
            }),
        ],
    });
}
function eU(e) {
    let { facepileUserIds: t, latestUser: n, animate: i } = e;
    return t.length > 1
        ? (0, l.jsx)(G.A, { recipients: t, size: P._3.SIZE_32, "aria-hidden": !0 })
        : (0, l.jsx)(D.eu, {
              src: n.getAvatarURL(void 0, (0, P.FT)(P._3.SIZE_32), i),
              size: P._3.SIZE_32,
              "aria-hidden": !0,
          });
}
var eV = n(837381),
    eZ = n(140735),
    eW = n(475825),
    e$ = n(602853),
    eq = n(928039),
    eY = n(546359),
    eK = n(736347),
    eX = n(599026),
    eQ = n(683063),
    eJ = n(808666),
    e0 = n(534890),
    e6 = n(365199),
    e1 = n(687966),
    e3 = n(432017),
    e7 = n(31300),
    e8 = n(308528),
    e4 = n(442433),
    e2 = n(730852),
    e9 = n(775602),
    e5 = n(566903),
    te = n(51183),
    tt = n(323073),
    tn = n(597306),
    tl = n(80558),
    ti = n(47167),
    ts = n(713654),
    tr = n(449582),
    ta = n(88686),
    to = n(214881),
    tc = n(774926),
    tu = n(263577),
    td = n(471107),
    tx = n(609425),
    th = n(922301),
    tf = n(660184),
    tm = n(381849),
    tg = n(747376),
    tp = n(854627),
    tj = n(734057),
    tC = n(576705),
    tI = n(290863),
    tv = n(977997),
    tA = n(604506);
function tb(e) {
    let { row: t, sectionType: s, inVoiceSubgroup: a = !1 } = e,
        o = (0, A.bG)([_.default], () => _.default.getUser(t.userId), [t.userId]),
        { collapsed: u } = i.useContext(I),
        d = tw(t, s, a),
        x = i.useRef(null),
        f = i.useRef(null),
        {
            avatarSrc: m,
            avatarDecorationSrc: g,
            eventHandlers: { onMouseEnter: p, onMouseLeave: j },
        } = (0, tp.A)({ userId: t.userId, size: P._3.SIZE_32, animateOnHover: !0 }),
        [C, v] = i.useState(!1),
        [R, S] = i.useState(!1),
        [k, w] = i.useState(!1),
        G = (0, A.bG)([e9.Ay], () => e9.Ay.keyboardModeEnabled),
        T = R && G,
        M = (0, tr.r)({ user: o }),
        L = (0, tx.A)({ userId: t.userId }),
        F = (0, eV.rm)(t.userId),
        { analyticsLocations: O } = (0, h.Ay)(),
        B = (0, A.bG)(
            [tj.A, tC.A, tv.A],
            () => {
                if (a || null == t.voiceChannelId) return null;
                let e = tj.A.getChannel(t.voiceChannelId);
                return null == e ||
                    tv.A.isInChannel(e.id) ||
                    ((0, tn.r)() && (0, tt.UK)(e.id)) ||
                    (!e.isPrivate() && !tC.A.can(ej.xBc.CONNECT, e))
                    ? null
                    : e;
            },
            [a, t.voiceChannelId],
        ),
        z = i.useCallback(
            (e) => {
                let i = _.default.getUser(t.userId);
                null != i &&
                    (w(!0),
                    (0, e4.L3)(
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
                            return (t) => (0, l.jsx)(e, { ...t, user: i, analyticsLocations: O });
                        },
                        { onClose: () => w(!1) },
                    ));
            },
            [t.userId, O],
        );
    return null == o
        ? null
        : (0, l.jsx)(ef.A, {
              targetElementRef: x,
              user: o,
              position: "left",
              spacing: 16,
              children: (e, n) => {
                  let { isShown: i } = n,
                      a = C || k || i,
                      o = a || T,
                      h = !u && o,
                      I = (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsxs)("div", {
                                  className: tA.rf,
                                  children: [
                                      (0, l.jsx)(y.E, {
                                          variant: "text-md/medium",
                                          color: "text-default",
                                          lineClamp: 1,
                                          children: (0, l.jsx)(tf.A, {
                                              userName: t.name,
                                              displayNameStyles: L,
                                              effectDisplayType: o ? th.G.ANIMATED : th.G.PLAIN,
                                              loop: !0,
                                          }),
                                      }),
                                      (0, l.jsx)(tP, { subtitle: d }),
                                  ],
                              }),
                              !h && (0, l.jsx)(tR, { row: t, sectionType: s }),
                          ],
                      }),
                      A = (0, l.jsx)("div", {
                          className: r()(tA.kL, { [tA.vu]: o }),
                          onMouseOver: () => {
                              C || (v(!0), p());
                          },
                          onMouseLeave: () => {
                              (v(!1), j());
                          },
                          onContextMenu: z,
                          onFocus: () => S(!0),
                          onBlur: (e) => {
                              e.currentTarget.contains(e.relatedTarget) || S(!1);
                          },
                          children: (0, l.jsx)(c.vN, {
                              offset: { right: 4 },
                              children: (0, l.jsxs)(E.D, {
                                  tag: "div",
                                  innerRef: x,
                                  ...e,
                                  ...F,
                                  className: tA.nM,
                                  children: [
                                      (0, l.jsx)(to.A, {
                                          nameplate: o || !u ? M : null,
                                          hovered: a,
                                          content: f,
                                          placement: ta.u.FRIENDS_LIST,
                                      }),
                                      (0, l.jsxs)(b.B, {
                                          ref: f,
                                          direction: "horizontal",
                                          align: "center",
                                          className: tA.Qs,
                                          children: [
                                              (0, l.jsx)(D.eu, {
                                                  src: m,
                                                  avatarDecoration: g,
                                                  size: P._3.SIZE_32,
                                                  status: t.status,
                                                  "aria-hidden": !0,
                                                  className: tA.LY,
                                              }),
                                              u ? (0, l.jsx)(eZ.A, { children: I }) : I,
                                          ],
                                      }),
                                      !u &&
                                          (0, l.jsx)(tE, {
                                              userId: t.userId,
                                              voiceChannel: B,
                                              tabIndex: F.tabIndex,
                                              onMoreClick: z,
                                          }),
                                  ],
                              }),
                          }),
                      });
                  return u
                      ? d?.tooltip == null
                          ? (0, l.jsx)(N.m, {
                                text: t.name,
                                position: "left",
                                asContainer: !0,
                                tag: "div",
                                ariaHidden: !0,
                                children: A,
                            })
                          : (0, l.jsx)(eQ.u, {
                                title: t.name,
                                body: d.tooltip,
                                position: "left",
                                asContainer: !0,
                                element: "div",
                                ariaHidden: !0,
                                children: A,
                            })
                      : A;
              },
          });
}
function tN(e) {
    e.stopPropagation();
}
function tE(e) {
    let { userId: t, voiceChannel: n, tabIndex: i, onMoreClick: s } = e,
        r = (0, ti.Ay)(n),
        a = null != r ? eI.intl.formatToPlainString(eC.default.gOIq4P, { channel: r }) : eI.intl.string(eI.t["96ANUN"]);
    return (0, l.jsxs)("div", {
        className: tA.o1,
        onClick: tN,
        onKeyPress: tN,
        children: [
            null != n &&
                (0, l.jsx)(N.m, {
                    text: a,
                    ariaHidden: !0,
                    children: (0, l.jsx)(z.K, {
                        variant: "active",
                        size: "sm",
                        icon: eJ.I,
                        "aria-label": a,
                        tabIndex: i,
                        onClick: () => {
                            n.isGuildStageVoice() ? (0, tg.av)(n) : e2.default.selectVoiceChannel(n.id);
                        },
                    }),
                }),
            (0, l.jsx)(N.m, {
                text: eI.intl.string(eI.t.oeb1vg),
                ariaHidden: !0,
                children: (0, l.jsx)(z.K, {
                    variant: "overlay-secondary",
                    size: "sm",
                    icon: e0.ChatIcon,
                    "aria-label": eI.intl.string(eI.t.oeb1vg),
                    tabIndex: i,
                    onClick: () => e8.A.openPrivateChannel({ recipientIds: t }),
                }),
            }),
            (0, l.jsx)(N.m, {
                text: eI.intl.string(eI.t.PdRCRg),
                ariaHidden: !0,
                children: (0, l.jsx)(z.K, {
                    variant: "overlay-secondary",
                    size: "sm",
                    icon: e6.MoreHorizontalIcon,
                    "aria-label": eI.intl.string(eI.t.PdRCRg),
                    tabIndex: i,
                    onClick: s,
                }),
            }),
        ],
    });
}
function tR(e) {
    let { row: t, sectionType: n } = e;
    return null != t.gameAppId
        ? n === eK.ik.GAME
            ? null
            : (0, l.jsx)(tS, { gameAppId: t.gameAppId, gameAssetUrl: t.gameAssetUrl })
        : t.isListening
          ? (0, l.jsx)(ty, { userId: t.userId })
          : null;
}
function tS(e) {
    let { gameAppId: t, gameAssetUrl: n } = e,
        i = (0, tl.O)(null == n ? t : null),
        s = n ?? (0, tc.C4)(i)?.src;
    return (0, l.jsx)(tu.V, { src: s, size: 32 });
}
function ty(e) {
    let { userId: t } = e,
        n = (0, A.bG)(
            [tI.A],
            () =>
                tI.A.getActivities(t).find((e) => {
                    let { type: t } = e;
                    return t === ej.$pd.LISTENING;
                }) ?? null,
            [t],
        ),
        { largeImage: i } = (0, tc.D8)(n);
    return (0, l.jsx)(tu.V, { src: i?.src, size: 32, alt: i?.text });
}
function tk(e) {
    let { start: t } = e,
        { now: n } = (0, td.G)(),
        l = Math.max(0, Math.round((n - t) / 1e3));
    return (0, tm.WR)({ seconds: l, getFormatter: tm.i });
}
function tw(e, t, n) {
    let i = (0, A.bG)(
            [tI.A],
            () => {
                let t = tI.A.getActivities(e.userId);
                return null != e.gameActivityIndex
                    ? t[e.gameActivityIndex]
                    : e.isListening
                      ? (t.find((e) => {
                            let { type: t } = e;
                            return t === ej.$pd.LISTENING;
                        }) ?? t[0])
                      : t[0];
            },
            [e.userId, e.gameActivityIndex, e.isListening],
        ),
        s = i?.type === ej.$pd.PLAYING || i?.type === ej.$pd.COMPETING ? "text-voice-connected" : "text-muted",
        r = null != e.voiceChannelId && !n,
        a = (0, A.bG)([tj.A], () => (null != e.voiceChannelId ? tj.A.getChannel(e.voiceChannelId) : null), [
            e.voiceChannelId,
        ]),
        o = (0, A.bG)(
            [tv.A],
            () =>
                n && null != e.voiceChannelId
                    ? tv.A.getVoiceStateForChannel(e.voiceChannelId, e.userId)?.connectedAt
                    : null,
            [n, e.voiceChannelId, e.userId],
        ),
        c = (0, ts.gU)(a),
        u =
            null == c
                ? null
                : (0, l.jsx)(c, {
                      size: "xxs",
                      color: "var(--text-voice-connected)",
                      "aria-label": eI.intl.string(eC.default["8ALChp"]),
                  });
    if (r) {
        let t = null != e.gameName ? i?.timestamps?.start : null,
            n =
                null != t
                    ? eI.intl.format(eC.default.KddZZf, { duration: (0, l.jsx)(tk, { start: t }) })
                    : eI.intl.string(eC.default["8ALChp"]);
        return {
            icon: u,
            textColor: "text-voice-connected",
            contentAriaHidden: null == t,
            content: (0, l.jsx)("span", { className: tA.hc, children: n }),
            tooltip: n,
        };
    }
    let d =
        null != o
            ? {
                  icon: null,
                  textColor: "text-voice-connected",
                  contentAriaHidden: !1,
                  content: (0, l.jsx)(tk, { start: 1e3 * o }),
                  tooltip: null,
              }
            : null;
    if (null == i) return d;
    let x = (function (e, t) {
        let n =
            t && (e.status_display_type === eX.A.NAME || null == e.status_display_type)
                ? (e.details ?? e.state)
                : (0, e5.A)(e, !0).text;
        switch (e.type) {
            case ej.$pd.PLAYING:
            case ej.$pd.COMPETING:
                return { Icon: e1.GameControllerIcon, text: n };
            case ej.$pd.LISTENING:
                return { Icon: e3.T, text: n };
            case ej.$pd.WATCHING:
                return { Icon: e7.k, text: n };
            case ej.$pd.CUSTOM_STATUS:
                let i = e.emoji;
                return {
                    Icon: null != i ? () => (0, l.jsx)(te.A, { emoji: i, hideTooltip: !0 }) : void 0,
                    text: e.state ?? (null == i ? null : ""),
                };
            default:
                return null;
        }
    })(i, t === eK.ik.GAME);
    if (null == x || null == x.text) return d;
    let { Icon: h, text: f } = x,
        m = i.timestamps?.start,
        g = (0, l.jsx)("span", { className: tA.hc, children: f }),
        p =
            null != m
                ? eI.intl.format(eC.default.Fb6oNP, {
                      text: g,
                      duration: (0, l.jsx)("span", { children: (0, l.jsx)(tk, { start: m }) }),
                  })
                : null;
    return {
        icon: null != h && (0, l.jsx)(h, { size: "xxs", color: "var(--icon-voice-connected)", "aria-hidden": !0 }),
        textColor: s,
        contentAriaHidden: !1,
        content: p ?? g,
        tooltip: p ?? f,
    };
}
function tP(e) {
    let { subtitle: t } = e;
    return null == t
        ? null
        : (0, l.jsxs)(b.B, {
              direction: "horizontal",
              align: "center",
              gap: 4,
              fullWidth: !1,
              children: [
                  null != t.icon && (0, l.jsx)("div", { className: tA.LY, children: t.icon }),
                  (0, l.jsx)(y.E, {
                      variant: "text-xs/medium",
                      color: t.textColor,
                      "aria-hidden": t.contentAriaHidden,
                      className: tA.o4,
                      children: t.content,
                  }),
              ],
          });
}
var tD = n(320448),
    tG = n(847374),
    tT = n(935154),
    t_ = n(409626),
    tM = n(692969),
    tL = n(94416);
let tF = [-1, -1, -1, 0, 0, 2, 2, 1, 3, 1, 3].flatMap((e) => [e, -1]);
function tO() {
    let e = i.useRef(null),
        t = i.useRef(0),
        { hovered: n } = i.useContext(I),
        s = (0, A.bG)([e9.Ay], () => e9.Ay.useReducedMotion),
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
                t.current = (t.current + 1) % tF.length;
                let n = tF[t.current];
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
            className: tL.Y,
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
var tB = n(416852);
let tz = { left: 8, right: 8 };
function tH(e) {
    let { leading: t, labelAccessory: n, trailing: s, label: r, color: a, ref: o } = e,
        { collapsed: c } = i.useContext(I),
        u = c ? eZ.A : i.Fragment;
    return (0, l.jsxs)(b.B, {
        ref: o,
        direction: "horizontal",
        justify: c ? "center" : "start",
        align: "center",
        padding: tz,
        fullWidth: !1,
        className: tB.UP,
        children: [
            (0, l.jsx)("div", { className: tB.R4, children: t }),
            (0, l.jsx)(u, {
                children: (0, l.jsx)(Q.D, {
                    variant: "text-sm/medium",
                    color: a ?? "text-muted",
                    lineClamp: 1,
                    children: r,
                }),
            }),
            null != n && !c && (0, l.jsx)("div", { className: tB.nr, children: n }),
            null != s && !c && (0, l.jsx)("div", { className: tB.ZY, children: s }),
        ],
    });
}
var tU = n(845311);
let tV = { top: "sm", bottom: "xxs" };
var tZ = n(945584);
function tW(e) {
    switch (e.type) {
        case eK.ik.ACTIVE_NOW:
            return eI.intl.string(eI.t.TxqPQR);
        case eK.ik.ONLINE:
            return eI.intl.string(eI.t.WbGtnH);
        case eK.ik.OFFLINE:
            return eI.intl.string(eI.t.Vv0abJ);
        case eK.ik.GAME:
            return e.label;
        case eK.ik.LETTER:
            return null;
    }
}
function t$(e) {
    let { sectionIndex: t, isCollapsed: n, onToggleCollapsed: s } = e,
        r = i.useRef(null),
        a = i.useRef(null),
        o = (0, A.bG)([eY.A], () => eY.A.getSections()[t]),
        { collapsed: u } = i.useContext(I),
        d = o.key,
        x = i.useCallback(() => s(d), [s, d]),
        h = t > 0 ? tZ.Ci : void 0,
        f = tW(o) ?? o.label ?? "";
    if (u)
        return (0, l.jsx)(N.m, {
            position: "left",
            text: f,
            ariaHidden: !0,
            children: (0, l.jsx)(b.B, {
                padding: tV,
                gap: 0,
                className: h,
                children: (0, l.jsx)(tH, { leading: (0, l.jsx)(tY, { section: o }), label: tW(o) }),
            }),
        });
    let m = eI.intl.formatToPlainString(n ? eC.default.QcKHvf : eC.default.jsV9yS, { sectionName: f });
    return (0, l.jsx)(c.vN, {
        focusTarget: r,
        ringTarget: a,
        offset: { right: 4 },
        children: (0, l.jsx)(el.s, {
            "aria-label": m,
            onClick: x,
            buttonRef: r,
            focusProps: { enabled: !1 },
            className: tZ.wx,
            children: (0, l.jsx)(b.B, {
                padding: tV,
                gap: 0,
                className: h,
                children: (0, l.jsx)(tH, {
                    ref: a,
                    leading: (0, l.jsx)(tY, { section: o }),
                    label: (0, l.jsx)(tQ, { section: o }),
                    labelAccessory: (0, l.jsx)(tq, { isCollapsed: n }),
                }),
            }),
        }),
    });
}
function tq(e) {
    let { isCollapsed: t } = e,
        n = t ? tD._ : tG.a;
    return (0, l.jsx)(n, { size: "xs", color: "var(--icon-muted)", "aria-hidden": !0 });
}
function tY(e) {
    let { section: t } = e;
    switch (t.type) {
        case eK.ik.ACTIVE_NOW:
            return (0, l.jsx)(tO, {});
        case eK.ik.ONLINE:
            return (0, l.jsx)(tU.A, { hasOnlineFriends: !0, color: "var(--icon-muted)" });
        case eK.ik.OFFLINE:
            return (0, l.jsx)(tT.nW, { status: ej.clD.OFFLINE, size: 12 });
        case eK.ik.GAME:
            return (0, l.jsx)(t6, { assetUrl: t.gameAssetUrl, appId: t.gameAppId });
        case eK.ik.LETTER:
            return (0, l.jsx)(t1, { letter: t.label ?? "#" });
    }
}
let tK = "\xa0\xa0\xb7\xa0\xa0";
function tX(e) {
    let t = 0;
    for (let n of e.rows) t += n.type === eK.VZ.VOICE_GROUP ? n.rows.length : 1;
    return t;
}
function tQ(e) {
    let { section: t } = e;
    return t.type === eK.ik.GAME
        ? (0, l.jsxs)(l.Fragment, {
              children: [(0, l.jsx)(t0, { appId: t.gameAppId, label: t.label }), `${tK}${tX(t)}`],
          })
        : t.type === eK.ik.ACTIVE_NOW || t.type === eK.ik.ONLINE
          ? `${tW(t)}${tK}${tX(t)}`
          : tW(t);
}
function tJ(e) {
    return (0, tM.A)({ applicationId: e, source: t_.GameProfileSources.FriendsList, trackEntryPointImpression: !1 });
}
function t0(e) {
    let { appId: t, label: n } = e,
        i = tJ(t);
    return null == i ? n : (0, l.jsx)(E.D, { tag: "span", onClick: i, className: tZ.mO, children: n });
}
function t6(e) {
    let { appId: t, assetUrl: n } = e,
        i = (0, tl.O)(null == n ? t : null),
        s = n ?? (0, tc.C4)(i)?.src,
        r = tJ(t),
        a = (0, l.jsx)(tu.V, { src: s, size: 18, "aria-hidden": !0 });
    return null == r
        ? a
        : (0, l.jsx)(E.D, { tag: "span", onClick: r, tabIndex: -1, "aria-hidden": !0, className: tZ.Gt, children: a });
}
function t1(e) {
    let { letter: t } = e;
    return (0, l.jsx)(y.E, { variant: "text-sm/bold", children: t });
}
var t3 = n(214947),
    t7 = n(283973),
    t8 = n(184322);
let t4 = Array.from({ length: 10 }, (e, t) =>
    (0, l.jsxs)(
        "div",
        {
            className: t8._f,
            "aria-hidden": "true",
            children: [(0, l.jsx)("div", { className: t8.RH }), (0, l.jsx)("div", { className: t8.rl })],
        },
        t,
    ),
);
function t2() {
    let { collapsed: e } = i.useContext(I);
    return e ? (0, l.jsx)(t5, {}) : (0, l.jsx)(t9, {});
}
function t9() {
    return (0, l.jsxs)("div", {
        className: t8.kL,
        children: [
            (0, l.jsx)("div", { className: t8.Dd, children: t4 }),
            (0, l.jsx)(b.B, {
                align: "center",
                justify: "center",
                padding: { left: 24, right: 24 },
                className: t8.C,
                children: (0, l.jsxs)(b.B, {
                    align: "center",
                    gap: 16,
                    padding: { bottom: 80 },
                    children: [
                        (0, l.jsx)(t3.$, { size: "lg", color: w.A.colors.ICON_DEFAULT }),
                        (0, l.jsxs)(b.B, {
                            gap: 4,
                            className: t8.Dk,
                            children: [
                                (0, l.jsx)(Q.D, {
                                    variant: "heading-md/medium",
                                    children: eI.intl.string(eC.default["4fvi9I"]),
                                }),
                                (0, l.jsx)(y.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: eI.intl.string(eC.default.OZj923),
                                }),
                            ],
                        }),
                        (0, l.jsx)(eF, {
                            position: "bottom",
                            children: (e) => {
                                let { buttonRef: t, onClick: n } = e;
                                return (0, l.jsx)(Z.$, {
                                    buttonRef: t,
                                    fullWidth: !0,
                                    size: "md",
                                    variant: "primary",
                                    icon: t7.R,
                                    text: eI.intl.string(eC.default.au4mU4),
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
function t5() {
    return (0, l.jsx)("div", {
        className: t8.kL,
        children: (0, l.jsxs)("div", {
            className: r()(t8.Dd, t8.yZ),
            children: [
                (0, l.jsx)("div", {
                    className: t8._f,
                    children: (0, l.jsx)(eF, {
                        position: "left",
                        children: (e) => {
                            let { buttonRef: t, onClick: n } = e;
                            return (0, l.jsx)(N.m, {
                                text: eI.intl.string(eC.default.au4mU4),
                                position: "bottom",
                                targetElementRef: t,
                                children: (0, l.jsx)(z.K, {
                                    buttonRef: t,
                                    size: "sm",
                                    variant: "secondary",
                                    icon: t7.R,
                                    "aria-label": eI.intl.string(eC.default.au4mU4),
                                    onClick: n,
                                }),
                            });
                        },
                    }),
                }),
                t4,
            ],
        }),
    });
}
var ne = n(983851),
    nt = n(378570),
    nn = n(798350);
function nl(e) {
    let { row: t, sectionType: n } = e,
        i = (0, A.bG)([tj.A], () => tj.A.getChannel(t.channelId), [t.channelId]),
        s = (0, ti.Ay)(i) ?? eI.intl.string(eI.t["/YzI63"]),
        a = (0, ts.gU)(i) ?? ne.H,
        o = (0, A.bG)([tv.A], () => tv.A.isInChannel(t.channelId));
    return (0, l.jsxs)(b.B, {
        gap: 0,
        padding: { top: "md", bottom: "md" },
        className: r()(nn.Os, nn.aW),
        role: "group",
        "aria-label": s,
        children: [
            (0, l.jsx)("b", { className: nn.h_ }),
            (0, l.jsx)(tH, {
                leading: (0, l.jsx)(a, { size: "xs", color: "var(--icon-voice-connected)", "aria-hidden": !0 }),
                trailing: (0, l.jsx)(ns, { channelId: t.channelId, channelName: s, isInChannel: o }),
                label: null != i ? (0, l.jsx)(ni, { channelId: t.channelId, channelName: s }) : s,
                color: "text-default",
            }),
            (0, l.jsx)(b.B, {
                gap: 0,
                padding: { top: 4 },
                children: t.rows.map((e) => (0, l.jsx)(tb, { row: e, sectionType: n, inVoiceSubgroup: !0 }, e.userId)),
            }),
            t.extraMemberCount > 0 && (0, l.jsx)(nr, { count: t.extraMemberCount }),
        ],
    });
}
function ni(e) {
    let { channelId: t, channelName: n } = e,
        { collapsed: s } = i.useContext(I);
    return s
        ? n
        : (0, l.jsx)(eV.tG, {
              id: `voice:${t}:name`,
              children: (e) => {
                  let { role: i, ...s } = e;
                  return (0, l.jsx)("span", {
                      role: i,
                      children: (0, l.jsx)(E.D, {
                          tag: "span",
                          className: nn.HA,
                          onClick: () => (0, nt.iN)(t),
                          ...s,
                          children: n,
                      }),
                  });
              },
          });
}
function ns(e) {
    let { channelId: t, channelName: n, isInChannel: i } = e;
    return (0, l.jsx)(eV.tG, {
        id: `voice:${t}:join`,
        children: (e) => {
            let { role: s, ...a } = e;
            return (0, l.jsx)("div", {
                role: s,
                className: r()(nn.PD, i && nn.RK),
                children: (0, l.jsx)(Z.$, {
                    text: eI.intl.string(i ? eI.t["Hi1/aQ"] : eI.t.VJlc0S),
                    variant: i ? "critical-secondary" : "active",
                    size: "sm",
                    "aria-label": i ? void 0 : eI.intl.formatToPlainString(eC.default.gOIq4P, { channel: n }),
                    onClick: () => (i ? e2.default.disconnect() : e2.default.selectVoiceChannel(t)),
                    ...a,
                }),
            });
        },
    });
}
function nr(e) {
    let { count: t } = e,
        { collapsed: n } = i.useContext(I);
    return (0, l.jsxs)(b.B, {
        direction: "horizontal",
        align: "center",
        justify: n ? "center" : "start",
        fullWidth: !1,
        gap: 4,
        padding: { top: 4, bottom: 4 },
        children: [
            !n && (0, l.jsx)("b", { className: nn.hF }),
            (0, l.jsx)(y.E, {
                variant: "text-xs/medium",
                color: "text-muted",
                children: eI.intl.formatToPlainString(n ? eC.default.SWPwHW : eC.default.d90MfZ, { count: t }),
            }),
        ],
    });
}
var na = n(182927);
function no() {
    let e,
        t,
        n,
        s,
        r = (0, A.bG)([eY.A], () => eY.A.getSections()),
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
        m = (0, eq.A)("friends-list", f),
        {
            rowHeight: g,
            sectionHeaderHeight: p,
            sectionDividerHeight: j,
            subgroupPadding: C,
        } = ((e = (0, e$.r)(w.A.space.SPACE_XXS)),
        (t = (0, e$.r)(w.A.space.SPACE_XS)),
        (n = (0, e$.r)(w.A.space.SPACE_SM)),
        {
            rowHeight: 32 + (t + 1) * 2,
            sectionHeaderHeight: 24 + n + e,
            sectionDividerHeight: (s = (0, e$.r)(w.A.space.SPACE_MD)),
            subgroupPadding: s,
        }),
        v = i.useCallback((e) => (e > 0 ? p + j : p), [p, j]),
        b = i.useCallback(
            (e, t) => {
                if (u(e)) return 0;
                let n = r[e]?.rows[t];
                return null == n
                    ? g
                    : n.type === eK.VZ.VOICE_GROUP && n.rows.length > 1
                      ? 2 * C + 24 + 4 + n.rows.length * g + 24 * (n.extraMemberCount > 0)
                      : g;
            },
            [r, u, g, C],
        ),
        N = i.useCallback(
            (e) => {
                let { section: t, row: n } = e;
                if (u(t)) return null;
                let i = r[t],
                    s = i?.rows[n];
                return null == s || null == i
                    ? null
                    : s.type === eK.VZ.VOICE_GROUP
                      ? (0, l.jsx)(nl, { row: s, sectionType: i.type }, s.key)
                      : (0, l.jsx)(tb, { row: s, sectionType: i.type }, s.userId);
            },
            [r, u],
        ),
        E = i.useCallback(
            (e) => {
                let { section: t } = e;
                return (0, l.jsx)(t$, { sectionIndex: t, isCollapsed: u(t), onToggleCollapsed: d });
            },
            [u, d],
        );
    return 0 === r.length
        ? (0, l.jsx)(t2, {})
        : (0, l.jsx)(B.F, {
              component: (0, l.jsx)(eZ.A, {
                  children: (0, l.jsx)(B.H, { id: h, children: eI.intl.string(eI.t.TdEu5X) }),
              }),
              children: (0, l.jsx)(eV.hD, {
                  navigator: m,
                  children: (0, l.jsx)(eV.PR, {
                      children: (e) => {
                          let { ref: t, role: n, ...i } = e;
                          return (0, l.jsx)(eW.OZ, {
                              ref: (e) => {
                                  ((f.current = e), (t.current = e?.getScrollerNode() ?? null));
                              },
                              ...i,
                              className: na.p,
                              "aria-labelledby": h,
                              innerRole: n,
                              sections: x,
                              sectionHeight: v,
                              rowHeight: b,
                              renderSection: E,
                              renderRow: N,
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
var nc = n(259730),
    nu = n(450030),
    nd = n(783977),
    nx = n(7689),
    nh = n(683438),
    nf = n(765671),
    nm = n(980707),
    ng = n(477782),
    np = n(606325),
    nj = n(303911),
    nC = n(67746);
let nI = [
    [eK.Vj.ACTIVE_NOW, eC.default["/lMTzd"], eC.default.IzzWNM],
    [eK.Vj.GAME, eC.default.aKZ12v, eC.default.lE79Lm],
    [eK.Vj.ALPHABETICAL, eC.default.eVxFX3, null],
];
function nv(e) {
    let { width: t, closePopout: n } = e,
        i = (0, A.bG)([eY.A], () => eY.A.getGroupingMode()),
        s = (0, A.bG)([eY.A], () => eY.A.isVoiceGroupingEnabled()),
        { analyticsLocations: r } = (0, h.Ay)();
    return (0, l.jsx)("div", {
        className: nC.k,
        style: { "--custom-group-config-popout-width": `${t ?? 264}px` },
        children: (0, l.jsxs)(nm.W, {
            navId: "friends-list-group-config",
            "aria-label": eI.intl.string(eC.default["i+986w"]),
            onClose: n,
            onSelect: void 0,
            children: [
                (0, l.jsx)(ng.rX, {
                    label: eI.intl.string(eC.default.OvTyCX),
                    children: nI.map((e) => {
                        let [t, s, a] = e;
                        return (0, l.jsx)(
                            ng.iD,
                            {
                                id: `friends-list-grouping-mode-${t}`,
                                label: eI.intl.string(s),
                                subtext: null != a ? eI.intl.string(a) : null,
                                group: "friends-list-grouping-select",
                                checked: i === t,
                                action: () => {
                                    (t !== i &&
                                        (0, C.r_)({
                                            oldGroupingMode: (0, nj.c7)(i),
                                            newGroupingMode: (0, nj.c7)(t),
                                            analyticsLocations: r,
                                        }),
                                        (0, np.Je)(t),
                                        n());
                                },
                            },
                            `friends-list-grouping-mode-${t}`,
                        );
                    }),
                }),
                (0, nj.kR)(i) &&
                    (0, l.jsx)(ng.rX, {
                        label: eI.intl.string(eI.t["8/udY0"]),
                        children: (0, l.jsx)(ng.fP, {
                            id: "friends-list-group-voice-channels",
                            label: eI.intl.string(eC.default["/b1eZT"]),
                            subtext: eI.intl.string(eC.default["/bZ+Av"]),
                            checked: s,
                            action: () => {
                                ((0, C.Sj)({
                                    oldVoiceGroupingEnabled: s,
                                    newVoiceGroupingEnabled: !s,
                                    analyticsLocations: r,
                                }),
                                    (0, np.Lk)(!s),
                                    n());
                            },
                        }),
                    }),
            ],
        }),
    });
}
n(321073);
var nA = n(565860),
    nb = n(723690),
    nN = n(976860),
    nE = n(994500),
    nR = n(972910);
function nS(e) {
    let { row: t, username: n } = e,
        i = tw(t, eK.ik.ONLINE, !1);
    return null == i
        ? (0, l.jsx)(y.E, { variant: "text-xs/medium", color: "text-muted", children: n })
        : (0, l.jsx)(tP, { subtitle: i });
}
function ny(e) {
    let { friend: t, appendGap: n, closePopout: s } = e,
        [a, o] = i.useState(!1),
        c = (0, A.bG)([eY.A], () => eY.A.getRow(t.userId), [t.userId]),
        {
            status: u,
            isMobile: d,
            isVR: x,
        } = (0, A.cf)([tI.A], () => ({
            status: tI.A.getStatus(t.userId),
            isMobile: tI.A.isMobileOnline(t.userId),
            isVR: tI.A.isVROnline(t.userId),
        }));
    return (0, l.jsx)(E.D, {
        className: r()(nR.Ke, { [nR.w$]: n }),
        onMouseEnter: () => o(!0),
        onMouseLeave: () => o(!1),
        onClick: function () {
            let e = tj.A.getDMFromUserId(t.user.id);
            (null != e ? (0, nN.pX)(ej.BVt.CHANNEL(ej.ME, e)) : e8.A.openPrivateChannel({ recipientIds: t.user.id }),
                (0, ed.WD)({ targetUserId: t.user.id, tab: C.x3 }),
                s?.());
        },
        children: (0, l.jsx)(nb.A, {
            user: t.user,
            status: u,
            isMobile: d,
            isVR: x,
            subText:
                null != c
                    ? (0, l.jsx)(nS, { row: c, username: t.user.username })
                    : (0, l.jsx)(y.E, { variant: "text-xs/medium", color: "text-muted", children: t.user.username }),
            hovered: a,
            showAccountIdentifier: !1,
            className: nR.eF,
        }),
    });
}
function nk(e) {
    let { searchResults: t, closePopout: n } = e,
        i = (0, e$.r)(w.A.space.SPACE_XS),
        s = (0, e$.r)(w.A.space.SPACE_XXS),
        r = 36 + 2 * i,
        a = [t.length];
    return (0, l.jsx)(eW.OZ, {
        renderRow: (e) => {
            let { section: i, row: s } = e,
                r = t[s];
            return (0, l.jsx)(ny, { friend: r, appendGap: s !== t.length - 1, closePopout: n }, r.userId);
        },
        rowHeight: (e, n) => (n === t.length - 1 ? r : r + s),
        sections: a,
        sectionHeight: 18 + s,
        renderSection: (e) => {
            let { section: n } = e;
            return (0, l.jsx)(y.E, {
                className: nR.nw,
                variant: "text-sm/medium",
                children: eI.intl.format(eI.t.xIWGxu, { count: t.length }),
            });
        },
        className: nR.Xv,
    });
}
function nw() {
    return (0, l.jsx)(y.E, {
        variant: "text-sm/medium",
        className: nR.n1,
        children: eI.intl.string(eC.default["0usxBd"]),
    });
}
function nP() {
    return (0, l.jsx)(y.E, {
        variant: "text-sm/medium",
        className: nR.n1,
        children: eI.intl.string(eC.default.VH2HXW),
    });
}
function nD(e) {
    let { rawQuery: t, closePopout: n } = e,
        i = (0, nA.HI)(t),
        s = (0, A.bG)(
            [nE.A, _.default],
            () => {
                if ("" === i) return [];
                let e = nE.A.getFriendIDs(),
                    t = [];
                return (
                    e.forEach((e) => {
                        let n = _.default.getUser(e);
                        if (void 0 === n) return;
                        let l = nE.A.getNickname(e),
                            s = [(0, nA.HI)(n.username)];
                        (null != n.globalName && s.push((0, nA.HI)(n.globalName)),
                            null != l && s.push((0, nA.HI)(l)),
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
        ? (0, l.jsx)(nw, {})
        : s.length > 0
          ? (0, l.jsx)(nk, { searchResults: s, closePopout: n })
          : (0, l.jsx)(nP, {});
}
function nG(e) {
    let { query: t, width: n, closePopout: i } = e;
    return (0, l.jsx)("div", {
        className: r()(nR.kL, nR.zZ),
        style: { "--custom-search-friends-popout-width": `${n ?? 264}px` },
        children: (0, l.jsx)(nD, { rawQuery: t, closePopout: i }),
    });
}
function nT(e) {
    let { closePopout: t } = e,
        [n, s] = i.useState("");
    return (0, l.jsx)(O.l, {
        children: (0, l.jsxs)("div", {
            className: nR.kL,
            children: [
                (0, l.jsx)("div", {
                    className: nR.M6,
                    children: (0, l.jsx)(U.k, { placeholder: eI.intl.string(eI.t.lLDtTK), value: n, onChange: s }),
                }),
                (0, l.jsx)(nD, { rawQuery: n, closePopout: t }),
            ],
        }),
    });
}
var n_ = n(540950);
function nM() {
    let { analyticsLocations: e } = (0, h.Ay)();
    return (0, l.jsx)(nZ, {
        icon: nc.E,
        label: eI.intl.string(eC.default.JZCSRZ),
        onClick: function () {
            ((0, C.RQ)({ open: !1, source: C.TY.SIDEBAR_HEADER_BUTTON, analyticsLocations: e }),
                u.A.setFriendsSidebarCollapsed(!0));
        },
    });
}
function nL() {
    let [e, t] = i.useState(null);
    i.useEffect(() => {
        function e() {
            t(null);
        }
        return (
            p._.subscribe(ej.jej.FRIENDS_SIDEBAR_RESIZED, e),
            () => {
                p._.unsubscribe(ej.jej.FRIENDS_SIDEBAR_RESIZED, e);
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
    (0, nf.i4)(c, x);
    let h = n
        ? (0, l.jsx)(nO, {})
        : "search" === e
          ? (0, l.jsx)(nU, { isSearching: !0, setActivePopout: t, contentWidthRef: o })
          : (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(nF, {
                        compact: r,
                        contentWidthRef: o,
                        isPopoutOpen: "groupConfig" === e,
                        setActivePopout: t,
                    }),
                    (0, l.jsxs)(b.B, {
                        direction: "horizontal",
                        align: "center",
                        fullWidth: !1,
                        ref: d,
                        children: [
                            (0, l.jsx)(nU, { isSearching: !1, setActivePopout: t, contentWidthRef: o }),
                            (0, l.jsx)(nV, { popoutPosition: "bottom" }),
                            s ? null : (0, l.jsx)(nM, {}),
                        ],
                    }),
                ],
            });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(nF, { ghost: !0, ref: u }),
            (0, l.jsx)(b.B, {
                direction: "horizontal",
                fullWidth: !1,
                justify: n ? "center" : "space-between",
                padding: 8,
                className: n_.wx,
                ref: c,
                children: h,
            }),
        ],
    });
}
function nF(e) {
    let { compact: t = !1, ghost: n = !1, contentWidthRef: s, isPopoutOpen: a = !1, setActivePopout: o, ref: c } = e,
        u = i.useRef(null),
        { analyticsLocations: d } = (0, h.Ay)();
    function x() {
        o?.(null);
    }
    let f = t
            ? (0, l.jsx)(t3.$, { size: "xs", color: "var(--icon-default)" })
            : (0, l.jsx)(y.E, {
                  variant: "heading-md/medium",
                  tag: "span",
                  children: eI.intl.string(eC.default["7kJd9e"]),
              }),
        m = (0, l.jsx)(E.D, {
            className: r()(n_.Iw, { [n_.qy]: n }),
            "aria-label": eI.intl.string(eC.default["7kJd9e"]),
            "aria-hidden": n,
            "aria-haspopup": n ? void 0 : "menu",
            "aria-expanded": n ? void 0 : a,
            onClick: function () {
                !n &&
                    (o?.(a ? null : "groupConfig"),
                    a || (0, C.BJ)({ button: C.FT.GROUPING_MODE_SELECT, analyticsLocations: d }));
            },
            innerRef: c ?? u,
            children: (0, l.jsxs)(b.B, {
                direction: "horizontal",
                gap: 4,
                align: "center",
                padding: { top: 6, bottom: 6, left: 8, right: 8 },
                className: n_.$E,
                children: [f, (0, l.jsx)(tG.a, { color: "var(--text-default)", size: "sm" })],
            }),
        });
    if (n) return m;
    let g = (0, l.jsx)(W.Y, {
        targetElementRef: u,
        shouldShow: a,
        onRequestClose: x,
        position: "bottom",
        align: "left",
        renderPopout: () => (0, l.jsx)(nv, { width: s?.current, closePopout: x }),
        children: () => m,
    });
    return a ? g : (0, l.jsx)(N.m, { text: eI.intl.string(eC.default.wvbB3Z), asContainer: !0, children: g });
}
function nO() {
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
        renderPopout: () => (0, l.jsx)(nB, { onClose: a }),
        children: () =>
            (0, l.jsx)(nZ, {
                buttonRef: e,
                icon: nu.U,
                label: eI.intl.string(eC.default["Dr/+ku"]),
                onContextMenu: r,
                onClick: o,
            }),
    });
}
function nB(e) {
    let { onClose: t } = e;
    return (0, l.jsxs)(b.B, {
        gap: 4,
        padding: 8,
        fullWidth: !1,
        className: n_.QG,
        children: [
            (0, l.jsx)(nz, {}),
            (0, l.jsx)(nH, { onClose: t }),
            (0, l.jsx)(nV, { popoutPosition: "left", tooltipPosition: "left" }),
        ],
    });
}
function nz() {
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
        renderPopout: () => (0, l.jsx)(nv, { closePopout: r }),
        children: () =>
            (0, l.jsx)(nZ, {
                buttonRef: e,
                icon: nd.R,
                label: eI.intl.string(eC.default["i+986w"]),
                tooltipPosition: "left",
                onClick: a,
            }),
    });
}
function nH(e) {
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
        renderPopout: () => (0, l.jsx)(nT, { closePopout: o }),
        children: () =>
            (0, l.jsx)(nZ, {
                buttonRef: n,
                icon: nx.MagnifyingGlassIcon,
                label: eI.intl.string(eC.default["60M8Ae"]),
                tooltipPosition: "left",
                onClick: c,
            }),
    });
}
function nU(e) {
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
              renderPopout: () => (0, l.jsx)(nG, { query: a, width: s.current, closePopout: u }),
              children: () =>
                  (0, l.jsx)("div", {
                      ref: r,
                      className: n_.wB,
                      children: (0, l.jsx)(nh.I, {
                          autoFocus: !0,
                          "aria-label": eI.intl.string(eC.default["60M8Ae"]),
                          placeholder: eI.intl.string(eI.t.lLDtTK),
                          query: a,
                          onChange: o,
                          onClear: () => o(""),
                          size: "sm",
                      }),
                  }),
          })
        : (0, l.jsx)(nZ, {
              icon: nx.MagnifyingGlassIcon,
              label: eI.intl.string(eC.default["60M8Ae"]),
              onClick: function () {
                  (n("search"), (0, C.BJ)({ button: C.FT.SEARCH, analyticsLocations: c }));
              },
          });
}
function nV(e) {
    let { popoutPosition: t, tooltipPosition: n, onClose: i } = e,
        { analyticsLocations: s } = (0, h.Ay)();
    return (0, l.jsx)(eF, {
        position: t,
        onClose: i,
        children: (e) => {
            let { buttonRef: t, onClick: i, showPopout: r } = e;
            return (0, l.jsx)(nZ, {
                buttonRef: t,
                icon: t7.R,
                label: eI.intl.string(eC.default.au4mU4),
                tooltipPosition: n,
                onClick: () => {
                    (r || (0, C.BJ)({ button: C.FT.ADD_FRIEND, analyticsLocations: s }), i());
                },
            });
        },
    });
}
function nZ(e) {
    let { icon: t, label: n, onClick: s, onContextMenu: r, tooltipPosition: a, buttonRef: o } = e,
        c = i.useRef(null),
        u = o ?? c;
    return (0, l.jsx)(N.m, {
        text: n,
        position: a,
        targetElementRef: u,
        anchorRef: u,
        children: (0, l.jsx)(E.D, {
            "aria-label": n,
            onClick: s,
            onContextMenu: r,
            innerRef: u,
            className: n_.x6,
            children: (0, l.jsx)(t, { size: "sm", color: "currentColor" }),
        }),
    });
}
var nW = n(45863);
function n$() {
    let e = i.useRef(null),
        t = i.useRef(null),
        n = i.useRef(!1),
        s = i.useRef(0),
        A = (0, v.c)(),
        { isHoveringOrFocusing: b } = (0, f.A)(e),
        { appBarToggleEnabled: N } = j.A.useConfig({ location: "FriendsSidebar" }),
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
            ((n.current = !0), t.current?.classList?.add(nW.cB), p._.dispatch(ej.jej.FRIENDS_SIDEBAR_RESIZED));
        }, []),
        k = i.useCallback((e) => {
            ((n.current = !1), t.current?.setAttribute("aria-valuenow", `${e}`), t.current?.classList?.remove(nW.cB));
        }, []),
        w = i.useCallback((e) => (N ? Math.min(Math.max(e, 280), 320) : e < 200 ? 64 : Math.min(e, 320)), [N]),
        P = (0, d.A)({
            resizableDomNodeRef: e,
            minDimension: N ? 200 : 64,
            maxDimension: 320,
            orientation: d.R.HORIZONTAL_LEFT,
            onElementResizeStart: y,
            onApplyDimension: S,
            onElementResizeEnd: k,
            getClampedValue: w,
        }),
        D = i.useCallback(
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
                        l = N ? 280 : 64;
                        break;
                    case "End":
                        l = 320;
                        break;
                    default:
                        return;
                }
                t.preventDefault();
                let i = w(l);
                ((n.current = !0), S(i), (n.current = !1));
            },
            [N, w, S],
        ),
        G = (0, g.NC)(),
        T = i.useMemo(() => ({ collapsed: A, hovered: b }), [A, b]);
    return (0, l.jsx)(m.A.Provider, {
        value: void 0,
        children: (0, l.jsx)(h.f5, {
            value: E,
            children: (0, l.jsx)(o.N, {
                theme: G,
                children: (n) =>
                    (0, l.jsx)(I.Provider, {
                        value: T,
                        children: (0, l.jsxs)("div", {
                            ref: e,
                            className: r()(nW.kL, n),
                            children: [
                                (0, l.jsx)(c.vN, {
                                    children: (0, l.jsx)("div", {
                                        ref: t,
                                        role: "separator",
                                        tabIndex: 0,
                                        "aria-orientation": "vertical",
                                        "aria-label": eI.intl.string(eC.default["F3+Xei"]),
                                        "aria-valuemin": N ? 280 : 64,
                                        "aria-valuemax": 320,
                                        className: nW.Di,
                                        onMouseDown: P,
                                        onKeyDown: D,
                                    }),
                                }),
                                (0, l.jsx)(nL, {}),
                                (0, l.jsxs)("div", {
                                    className: nW.rf,
                                    children: [
                                        (0, l.jsx)(eB, {}),
                                        (0, l.jsx)(c.xp, { containerRef: e, children: (0, l.jsx)(no, {}) }),
                                    ],
                                }),
                            ],
                        }),
                    }),
            }),
        }),
    });
}
