(n.r(t), n.d(t, { default: () => nU }));
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
    P = n(661531),
    D = n(778712),
    w = n(97808),
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
    eI = n(660183),
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
                        children: (0, l.jsx)(et.SendMessageIcon, { size: "sm", color: P.A.colors.ICON_DEFAULT }),
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
                        children: (0, l.jsx)(k.u, { size: "sm", color: P.A.colors.ICON_MUTED }),
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
            (0, l.jsx)(eD, { user: n, pendingFriendRequestInfo: a, animate: r }),
            (0, l.jsx)(N.m, {
                text: eI.intl.string(eI.t.eaq81S),
                children: (0, l.jsx)(z.K, {
                    icon: en.K,
                    size: "sm",
                    variant: "icon-only",
                    "aria-label": eP(ej.eA$.PENDING_OUTGOING, a, eI.intl.string(eI.t.eaq81S)),
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
                        (0, l.jsx)(eD, {
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
                                            "aria-label": eP(ej.eA$.PENDING_INCOMING, u, eI.intl.string(eI.t.xuio0C)),
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
                                        "aria-label": eP(ej.eA$.PENDING_INCOMING, u, eI.intl.string(eI.t.Zcibdf)),
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
function eP(e, t, n) {
    let { displayName: l, applicationName: i } = t,
        s = { action: n, name: l, application: i ?? "" };
    if (e === ej.eA$.PENDING_INCOMING) {
        let e = null != i ? eI.t.kSmk1F : eI.t["+YIVE1"];
        return eI.intl.formatToPlainString(e, s);
    }
    let r = null != i ? eI.t.BfqcNh : eI.t.vrDIev;
    return eI.intl.formatToPlainString(r, s);
}
function eD(e) {
    let { user: t, pendingFriendRequestInfo: n, animate: i, children: s } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(w.eu, {
                src: t.getAvatarURL(void 0, (0, D.FT)(D._3.SIZE_32), i),
                size: D._3.SIZE_32,
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
                    (0, l.jsx)(ew, { pendingFriendRequestInfo: n }),
                    s,
                ],
            }),
        ],
    });
}
function ew(e) {
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
                  (0, l.jsx)(eo.c, { size: "xxs", color: P.A.colors.ICON_SUBTLE, className: ev.TG }),
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
                  (0, l.jsx)(er.EyeIcon, { size: "xxs", color: P.A.colors.TEXT_BRAND }),
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
                        children: (0, l.jsx)(k.u, { size: "sm", color: P.A.colors.ICON_MUTED }),
                    }),
                ],
            }),
        ],
    });
}
function eU(e) {
    let { facepileUserIds: t, latestUser: n, animate: i } = e;
    return t.length > 1
        ? (0, l.jsx)(G.A, { recipients: t, size: D._3.SIZE_32, "aria-hidden": !0 })
        : (0, l.jsx)(w.eu, {
              src: n.getAvatarURL(void 0, (0, D.FT)(D._3.SIZE_32), i),
              size: D._3.SIZE_32,
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
        d = (function (e, t, n) {
            let i = (0, A.bG)(
                    [tI.A],
                    () => {
                        let t = tI.A.getActivities(e.userId);
                        return null != e.gameActivityIndex ? t[e.gameActivityIndex] : t[0];
                    },
                    [e.userId, e.gameActivityIndex],
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
                            ? eI.intl.format(eC.default.KddZZf, { duration: (0, l.jsx)(tS, { start: t }) })
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
                          content: (0, l.jsx)(tS, { start: 1e3 * o }),
                          tooltip: null,
                      }
                    : null;
            if (null == i) return d;
            let x = (function (e, t) {
                let n =
                    t && (e.status_display_type === eX.A.NAME || null == e.status_display_type)
                        ? (e.details ?? e.state)
                        : (0, e5.A)(e).text;
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
                              duration: (0, l.jsx)("span", { children: (0, l.jsx)(tS, { start: m }) }),
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
        } = (0, tp.A)({ userId: t.userId, size: D._3.SIZE_32, animateOnHover: !0 }),
        [C, v] = i.useState(!1),
        [R, S] = i.useState(!1),
        [k, P] = i.useState(!1),
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
                    (P(!0),
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
                        { onClose: () => P(!1) },
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
                      I = (0, l.jsx)("div", {
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
                                          nameplate: o ? M : null,
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
                                              (0, l.jsx)(w.eu, {
                                                  src: m,
                                                  avatarDecoration: g,
                                                  size: D._3.SIZE_32,
                                                  status: t.status,
                                                  "aria-hidden": !0,
                                                  className: tA.LY,
                                              }),
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
                                                      (0, l.jsx)(ty, { subtitle: d }),
                                                  ],
                                              }),
                                              !h &&
                                                  null != t.gameAppId &&
                                                  s !== eK.ik.GAME &&
                                                  (0, l.jsx)(tR, {
                                                      gameAppId: t.gameAppId,
                                                      gameAssetUrl: t.gameAssetUrl,
                                                  }),
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
                                children: I,
                            })
                          : (0, l.jsx)(eQ.u, {
                                title: t.name,
                                body: d.tooltip,
                                position: "left",
                                asContainer: !0,
                                element: "div",
                                ariaHidden: !0,
                                children: I,
                            })
                      : I;
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
    let { gameAppId: t, gameAssetUrl: n } = e,
        i = (0, tl.O)(null == n ? t : null),
        s = n ?? (0, tc.C4)(i)?.src;
    return (0, l.jsx)(tu.V, { src: s, size: 32 });
}
function tS(e) {
    let { start: t } = e,
        { now: n } = (0, td.G)(),
        l = Math.max(0, Math.round((n - t) / 1e3));
    return (0, tm.WR)({ seconds: l, getFormatter: tm.i });
}
function ty(e) {
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
var tk = n(320448),
    tP = n(847374),
    tD = n(935154),
    tw = n(409626),
    tG = n(692969),
    tT = n(94416);
let t_ = [-1, -1, -1, 0, 0, 2, 2, 1, 3, 1, 3].flatMap((e) => [e, -1]);
function tM() {
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
                t.current = (t.current + 1) % t_.length;
                let n = t_[t.current];
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
            className: tT.Y,
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
var tL = n(416852);
let tF = { left: 8, right: 8 };
function tO(e) {
    let { leading: t, labelAccessory: n, trailing: s, label: r, color: a } = e,
        { collapsed: o } = i.useContext(I),
        c = o ? eZ.A : i.Fragment;
    return (0, l.jsxs)(b.B, {
        direction: "horizontal",
        justify: o ? "center" : "start",
        align: "center",
        padding: tF,
        fullWidth: !1,
        className: tL.UP,
        children: [
            (0, l.jsx)("div", { className: tL.R4, children: t }),
            (0, l.jsx)(c, {
                children: (0, l.jsx)(Q.D, {
                    variant: "text-sm/medium",
                    color: a ?? "text-muted",
                    lineClamp: 1,
                    children: r,
                }),
            }),
            null != n && !o && (0, l.jsx)("div", { className: tL.nr, children: n }),
            null != s && !o && (0, l.jsx)("div", { className: tL.ZY, children: s }),
        ],
    });
}
var tB = n(845311);
let tz = { top: "sm", bottom: "xxs" };
var tH = n(945584);
function tU(e) {
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
function tV(e) {
    let { sectionIndex: t, isCollapsed: n, onToggleCollapsed: s } = e,
        r = (0, A.bG)([eY.A], () => eY.A.getSections()[t]),
        { collapsed: a } = i.useContext(I),
        o = r.key,
        c = i.useCallback(() => s(o), [s, o]),
        u = t > 0 ? tH.Ci : void 0,
        d = tU(r) ?? r.label ?? "";
    if (a)
        return (0, l.jsx)(N.m, {
            position: "left",
            text: d,
            ariaHidden: !0,
            children: (0, l.jsx)(b.B, {
                padding: tz,
                gap: 0,
                className: u,
                children: (0, l.jsx)(tO, { leading: (0, l.jsx)(tW, { section: r }), label: tU(r) }),
            }),
        });
    let x = eI.intl.formatToPlainString(n ? eC.default.QcKHvf : eC.default.jsV9yS, { sectionName: d });
    return (0, l.jsx)(el.s, {
        "aria-label": x,
        onClick: c,
        focusProps: { offset: { right: 4 } },
        className: tH.wx,
        children: (0, l.jsx)(b.B, {
            padding: tz,
            gap: 0,
            className: u,
            children: (0, l.jsx)(tO, {
                leading: (0, l.jsx)(tW, { section: r }),
                label: (0, l.jsx)(tY, { section: r }),
                labelAccessory: (0, l.jsx)(tZ, { isCollapsed: n }),
            }),
        }),
    });
}
function tZ(e) {
    let { isCollapsed: t } = e,
        n = t ? tk._ : tP.a;
    return (0, l.jsx)(n, { size: "xs", color: "var(--icon-muted)", "aria-hidden": !0 });
}
function tW(e) {
    let { section: t } = e;
    switch (t.type) {
        case eK.ik.ACTIVE_NOW:
            return (0, l.jsx)(tM, {});
        case eK.ik.ONLINE:
            return (0, l.jsx)(tB.A, { hasOnlineFriends: !0, color: "var(--icon-muted)" });
        case eK.ik.OFFLINE:
            return (0, l.jsx)(tD.nW, { status: ej.clD.OFFLINE, size: 12 });
        case eK.ik.GAME:
            return (0, l.jsx)(tQ, { assetUrl: t.gameAssetUrl, appId: t.gameAppId });
        case eK.ik.LETTER:
            return (0, l.jsx)(tJ, { letter: t.label ?? "#" });
    }
}
let t$ = "\xa0\xa0\xb7\xa0\xa0";
function tq(e) {
    let t = 0;
    for (let n of e.rows) t += n.type === eK.VZ.VOICE_GROUP ? n.rows.length : 1;
    return t;
}
function tY(e) {
    let { section: t } = e;
    return t.type === eK.ik.GAME
        ? (0, l.jsxs)(l.Fragment, {
              children: [(0, l.jsx)(tX, { appId: t.gameAppId, label: t.label }), `${t$}${tq(t)}`],
          })
        : t.type === eK.ik.ACTIVE_NOW || t.type === eK.ik.ONLINE
          ? `${tU(t)}${t$}${tq(t)}`
          : tU(t);
}
function tK(e) {
    return (0, tG.A)({ applicationId: e, source: tw.GameProfileSources.FriendsList, trackEntryPointImpression: !1 });
}
function tX(e) {
    let { appId: t, label: n } = e,
        i = tK(t);
    return null == i ? n : (0, l.jsx)(E.D, { tag: "span", onClick: i, className: tH.mO, children: n });
}
function tQ(e) {
    let { appId: t, assetUrl: n } = e,
        i = (0, tl.O)(null == n ? t : null),
        s = n ?? (0, tc.C4)(i)?.src,
        r = tK(t),
        a = (0, l.jsx)(tu.V, { src: s, size: 18, "aria-hidden": !0 });
    return null == r
        ? a
        : (0, l.jsx)(E.D, { tag: "span", onClick: r, tabIndex: -1, "aria-hidden": !0, className: tH.Gt, children: a });
}
function tJ(e) {
    let { letter: t } = e;
    return (0, l.jsx)(y.E, { variant: "text-sm/bold", children: t });
}
var t0 = n(214947),
    t6 = n(283973),
    t1 = n(184322);
let t3 = Array.from({ length: 10 }, (e, t) =>
    (0, l.jsxs)(
        "div",
        {
            className: t1._f,
            "aria-hidden": "true",
            children: [(0, l.jsx)("div", { className: t1.RH }), (0, l.jsx)("div", { className: t1.rl })],
        },
        t,
    ),
);
function t7() {
    let { collapsed: e } = i.useContext(I);
    return e ? (0, l.jsx)(t4, {}) : (0, l.jsx)(t8, {});
}
function t8() {
    return (0, l.jsxs)("div", {
        className: t1.kL,
        children: [
            (0, l.jsx)("div", { className: t1.Dd, children: t3 }),
            (0, l.jsx)(b.B, {
                align: "center",
                justify: "center",
                padding: { left: 24, right: 24 },
                className: t1.C,
                children: (0, l.jsxs)(b.B, {
                    align: "center",
                    gap: 16,
                    padding: { bottom: 80 },
                    children: [
                        (0, l.jsx)(t0.$, { size: "lg", color: P.A.colors.ICON_DEFAULT }),
                        (0, l.jsxs)(b.B, {
                            gap: 4,
                            className: t1.Dk,
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
                                    icon: t6.R,
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
function t4() {
    return (0, l.jsx)("div", {
        className: t1.kL,
        children: (0, l.jsxs)("div", {
            className: r()(t1.Dd, t1.yZ),
            children: [
                (0, l.jsx)("div", {
                    className: t1._f,
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
                                    icon: t6.R,
                                    "aria-label": eI.intl.string(eC.default.au4mU4),
                                    onClick: n,
                                }),
                            });
                        },
                    }),
                }),
                t3,
            ],
        }),
    });
}
var t2 = n(983851),
    t9 = n(378570),
    t5 = n(798350);
function ne(e) {
    let { row: t, sectionType: n } = e,
        i = (0, A.bG)([tj.A], () => tj.A.getChannel(t.channelId), [t.channelId]),
        s = (0, ti.Ay)(i) ?? eI.intl.string(eI.t["/YzI63"]),
        a = (0, ts.gU)(i) ?? t2.H,
        o = (0, A.bG)([tv.A], () => tv.A.isInChannel(t.channelId));
    return (0, l.jsxs)(b.B, {
        gap: 0,
        padding: { top: "md", bottom: "md" },
        className: r()(t5.Os, t5.aW),
        role: "group",
        "aria-label": s,
        children: [
            (0, l.jsx)("b", { className: t5.h_ }),
            (0, l.jsx)(tO, {
                leading: (0, l.jsx)(a, { size: "xs", color: "var(--icon-voice-connected)", "aria-hidden": !0 }),
                trailing: (0, l.jsx)(nn, { channelId: t.channelId, channelName: s, isInChannel: o }),
                label: null != i ? (0, l.jsx)(nt, { channelId: t.channelId, channelName: s }) : s,
                color: "text-default",
            }),
            (0, l.jsx)(b.B, {
                gap: 0,
                padding: { top: 4 },
                children: t.rows.map((e) => (0, l.jsx)(tb, { row: e, sectionType: n, inVoiceSubgroup: !0 }, e.userId)),
            }),
            t.extraMemberCount > 0 && (0, l.jsx)(nl, { count: t.extraMemberCount }),
        ],
    });
}
function nt(e) {
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
                          className: t5.HA,
                          onClick: () => (0, t9.iN)(t),
                          ...s,
                          children: n,
                      }),
                  });
              },
          });
}
function nn(e) {
    let { channelId: t, channelName: n, isInChannel: i } = e;
    return (0, l.jsx)(eV.tG, {
        id: `voice:${t}:join`,
        children: (e) => {
            let { role: s, ...a } = e;
            return (0, l.jsx)("div", {
                role: s,
                className: r()(t5.PD, i && t5.RK),
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
function nl(e) {
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
            !n && (0, l.jsx)("b", { className: t5.hF }),
            (0, l.jsx)(y.E, {
                variant: "text-xs/medium",
                color: "text-muted",
                children: eI.intl.formatToPlainString(n ? eC.default.SWPwHW : eC.default.d90MfZ, { count: t }),
            }),
        ],
    });
}
var ni = n(182927);
function ns() {
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
        } = ((e = (0, e$.r)(P.A.space.SPACE_XXS)),
        (t = (0, e$.r)(P.A.space.SPACE_XS)),
        (n = (0, e$.r)(P.A.space.SPACE_SM)),
        {
            rowHeight: 32 + 2 * t,
            sectionHeaderHeight: 24 + n + e,
            sectionDividerHeight: (s = (0, e$.r)(P.A.space.SPACE_MD)),
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
                      ? (0, l.jsx)(ne, { row: s, sectionType: i.type }, s.key)
                      : (0, l.jsx)(tb, { row: s, sectionType: i.type }, s.userId);
            },
            [r, u],
        ),
        E = i.useCallback(
            (e) => {
                let { section: t } = e;
                return (0, l.jsx)(tV, { sectionIndex: t, isCollapsed: u(t), onToggleCollapsed: d });
            },
            [u, d],
        );
    return 0 === r.length
        ? (0, l.jsx)(t7, {})
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
                              className: ni.p,
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
var nr = n(259730),
    na = n(450030),
    no = n(783977),
    nc = n(7689),
    nu = n(683438),
    nd = n(765671),
    nx = n(980707),
    nh = n(477782),
    nf = n(606325),
    nm = n(303911),
    ng = n(67746);
let np = [
    [eK.Vj.ACTIVE_NOW, eC.default["/lMTzd"], eC.default.IzzWNM],
    [eK.Vj.GAME, eC.default.aKZ12v, eC.default.lE79Lm],
    [eK.Vj.ALPHABETICAL, eC.default.eVxFX3, null],
];
function nj(e) {
    let { width: t, closePopout: n } = e,
        i = (0, A.bG)([eY.A], () => eY.A.getGroupingMode()),
        s = (0, A.bG)([eY.A], () => eY.A.isVoiceGroupingEnabled()),
        { analyticsLocations: r } = (0, h.Ay)();
    return (0, l.jsx)("div", {
        className: ng.k,
        style: { "--custom-group-config-popout-width": `${t ?? 264}px` },
        children: (0, l.jsxs)(nx.W, {
            navId: "friends-list-group-config",
            "aria-label": eI.intl.string(eC.default["i+986w"]),
            onClose: n,
            onSelect: void 0,
            children: [
                (0, l.jsx)(nh.rX, {
                    label: eI.intl.string(eC.default.OvTyCX),
                    children: np.map((e) => {
                        let [t, s, a] = e;
                        return (0, l.jsx)(
                            nh.iD,
                            {
                                id: `friends-list-grouping-mode-${t}`,
                                label: eI.intl.string(s),
                                subtext: null != a ? eI.intl.string(a) : null,
                                group: "friends-list-grouping-select",
                                checked: i === t,
                                action: () => {
                                    (t !== i &&
                                        (0, C.r_)({
                                            oldGroupingMode: (0, nm.c7)(i),
                                            newGroupingMode: (0, nm.c7)(t),
                                            analyticsLocations: r,
                                        }),
                                        (0, nf.Je)(t),
                                        n());
                                },
                            },
                            `friends-list-grouping-mode-${t}`,
                        );
                    }),
                }),
                (0, nm.kR)(i) &&
                    (0, l.jsx)(nh.rX, {
                        label: eI.intl.string(eI.t["8/udY0"]),
                        children: (0, l.jsx)(nh.fP, {
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
                                    (0, nf.Lk)(!s),
                                    n());
                            },
                        }),
                    }),
            ],
        }),
    });
}
n(321073);
var nC = n(565860),
    nI = n(723690),
    nv = n(976860),
    nA = n(994500),
    nb = n(972910);
function nN(e) {
    let { friend: t, appendGap: n, closePopout: s } = e,
        [a, o] = i.useState(!1),
        {
            status: c,
            isMobile: u,
            isVR: d,
        } = (0, A.cf)([tI.A], () => ({
            status: tI.A.getStatus(t.userId),
            isMobile: tI.A.isMobileOnline(t.userId),
            isVR: tI.A.isVROnline(t.userId),
        }));
    return (0, l.jsx)(E.D, {
        className: r()(nb.Ke, { [nb.w$]: n }),
        onMouseEnter: () => o(!0),
        onMouseLeave: () => o(!1),
        onClick: function () {
            let e = tj.A.getDMFromUserId(t.user.id);
            (null != e ? (0, nv.pX)(ej.BVt.CHANNEL(ej.ME, e)) : e8.A.openPrivateChannel({ recipientIds: t.user.id }),
                (0, ed.WD)({ targetUserId: t.user.id, tab: C.x3 }),
                s?.());
        },
        children: (0, l.jsx)(nI.A, {
            user: t.user,
            status: c,
            isMobile: u,
            isVR: d,
            subText: (0, l.jsx)(y.E, { variant: "text-xs/medium", color: "text-muted", children: t.user.username }),
            hovered: a,
            showAccountIdentifier: !1,
            className: nb.eF,
        }),
    });
}
function nE(e) {
    let { searchResults: t, closePopout: n } = e,
        i = (0, e$.r)(P.A.space.SPACE_XS),
        s = (0, e$.r)(P.A.space.SPACE_XXS),
        r = 36 + 2 * i,
        a = [t.length];
    return (0, l.jsx)(eW.OZ, {
        renderRow: (e) => {
            let { section: i, row: s } = e,
                r = t[s];
            return (0, l.jsx)(nN, { friend: r, appendGap: s !== t.length - 1, closePopout: n }, r.userId);
        },
        rowHeight: (e, n) => (n === t.length - 1 ? r : r + s),
        sections: a,
        sectionHeight: 18 + s,
        renderSection: (e) => {
            let { section: n } = e;
            return (0, l.jsx)(y.E, {
                className: nb.nw,
                variant: "text-sm/medium",
                children: eI.intl.format(eI.t.xIWGxu, { count: t.length }),
            });
        },
        className: nb.Xv,
    });
}
function nR() {
    return (0, l.jsx)(y.E, {
        variant: "text-sm/medium",
        className: nb.n1,
        children: eI.intl.string(eC.default["0usxBd"]),
    });
}
function nS() {
    return (0, l.jsx)(y.E, {
        variant: "text-sm/medium",
        className: nb.n1,
        children: eI.intl.string(eC.default.VH2HXW),
    });
}
function ny(e) {
    let { rawQuery: t, closePopout: n } = e,
        i = (0, nC.HI)(t),
        s = (0, A.bG)(
            [nA.A, _.default],
            () => {
                if ("" === i) return [];
                let e = nA.A.getFriendIDs(),
                    t = [];
                return (
                    e.forEach((e) => {
                        let n = _.default.getUser(e);
                        if (void 0 === n) return;
                        let l = nA.A.getNickname(e),
                            s = [(0, nC.HI)(n.username)];
                        (null != n.globalName && s.push((0, nC.HI)(n.globalName)),
                            null != l && s.push((0, nC.HI)(l)),
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
        ? (0, l.jsx)(nR, {})
        : s.length > 0
          ? (0, l.jsx)(nE, { searchResults: s, closePopout: n })
          : (0, l.jsx)(nS, {});
}
function nk(e) {
    let { query: t, width: n, closePopout: i } = e;
    return (0, l.jsx)("div", {
        className: r()(nb.kL, nb.zZ),
        style: { "--custom-search-friends-popout-width": `${n ?? 264}px` },
        children: (0, l.jsx)(ny, { rawQuery: t, closePopout: i }),
    });
}
function nP(e) {
    let { closePopout: t } = e,
        [n, s] = i.useState("");
    return (0, l.jsx)(O.l, {
        children: (0, l.jsxs)("div", {
            className: nb.kL,
            children: [
                (0, l.jsx)("div", {
                    className: nb.M6,
                    children: (0, l.jsx)(U.k, { placeholder: eI.intl.string(eI.t.lLDtTK), value: n, onChange: s }),
                }),
                (0, l.jsx)(ny, { rawQuery: n, closePopout: t }),
            ],
        }),
    });
}
var nD = n(540950);
function nw() {
    let { analyticsLocations: e } = (0, h.Ay)();
    return (0, l.jsx)(nz, {
        icon: nr.E,
        label: eI.intl.string(eC.default.JZCSRZ),
        onClick: function () {
            ((0, C.RQ)({ open: !1, source: C.TY.SIDEBAR_HEADER_BUTTON, analyticsLocations: e }),
                u.A.setFriendsSidebarCollapsed(!0));
        },
    });
}
function nG() {
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
    (0, nd.i4)(c, x);
    let h = n
        ? (0, l.jsx)(n_, {})
        : "search" === e
          ? (0, l.jsx)(nO, { isSearching: !0, setActivePopout: t, contentWidthRef: o })
          : (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(nT, {
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
                            (0, l.jsx)(nO, { isSearching: !1, setActivePopout: t, contentWidthRef: o }),
                            (0, l.jsx)(nB, { popoutPosition: "bottom" }),
                            s ? null : (0, l.jsx)(nw, {}),
                        ],
                    }),
                ],
            });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(nT, { ghost: !0, ref: u }),
            (0, l.jsx)(b.B, {
                direction: "horizontal",
                fullWidth: !1,
                justify: n ? "center" : "space-between",
                padding: 8,
                className: nD.wx,
                ref: c,
                children: h,
            }),
        ],
    });
}
function nT(e) {
    let { compact: t = !1, ghost: n = !1, contentWidthRef: s, isPopoutOpen: a = !1, setActivePopout: o, ref: c } = e,
        u = i.useRef(null),
        { analyticsLocations: d } = (0, h.Ay)();
    function x() {
        o?.(null);
    }
    let f = t
            ? (0, l.jsx)(t0.$, { size: "xs", color: "var(--icon-default)" })
            : (0, l.jsx)(y.E, {
                  variant: "heading-md/medium",
                  tag: "span",
                  children: eI.intl.string(eC.default["7kJd9e"]),
              }),
        m = (0, l.jsx)(E.D, {
            className: r()(nD.Iw, { [nD.qy]: n }),
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
                className: nD.$E,
                children: [f, (0, l.jsx)(tP.a, { color: "var(--text-default)", size: "sm" })],
            }),
        });
    if (n) return m;
    let g = (0, l.jsx)(W.Y, {
        targetElementRef: u,
        shouldShow: a,
        onRequestClose: x,
        position: "bottom",
        align: "left",
        renderPopout: () => (0, l.jsx)(nj, { width: s?.current, closePopout: x }),
        children: () => m,
    });
    return a ? g : (0, l.jsx)(N.m, { text: eI.intl.string(eC.default.wvbB3Z), asContainer: !0, children: g });
}
function n_() {
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
        renderPopout: () => (0, l.jsx)(nM, { onClose: a }),
        children: () =>
            (0, l.jsx)(nz, {
                buttonRef: e,
                icon: na.U,
                label: eI.intl.string(eC.default["Dr/+ku"]),
                onContextMenu: r,
                onClick: o,
            }),
    });
}
function nM(e) {
    let { onClose: t } = e;
    return (0, l.jsxs)(b.B, {
        gap: 4,
        padding: 8,
        fullWidth: !1,
        className: nD.QG,
        children: [
            (0, l.jsx)(nL, {}),
            (0, l.jsx)(nF, { onClose: t }),
            (0, l.jsx)(nB, { popoutPosition: "left", tooltipPosition: "left" }),
        ],
    });
}
function nL() {
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
        renderPopout: () => (0, l.jsx)(nj, { closePopout: r }),
        children: () =>
            (0, l.jsx)(nz, {
                buttonRef: e,
                icon: no.R,
                label: eI.intl.string(eC.default["i+986w"]),
                tooltipPosition: "left",
                onClick: a,
            }),
    });
}
function nF(e) {
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
        renderPopout: () => (0, l.jsx)(nP, { closePopout: o }),
        children: () =>
            (0, l.jsx)(nz, {
                buttonRef: n,
                icon: nc.MagnifyingGlassIcon,
                label: eI.intl.string(eC.default["60M8Ae"]),
                tooltipPosition: "left",
                onClick: c,
            }),
    });
}
function nO(e) {
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
              renderPopout: () => (0, l.jsx)(nk, { query: a, width: s.current, closePopout: u }),
              children: () =>
                  (0, l.jsx)("div", {
                      ref: r,
                      className: nD.wB,
                      children: (0, l.jsx)(nu.I, {
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
        : (0, l.jsx)(nz, {
              icon: nc.MagnifyingGlassIcon,
              label: eI.intl.string(eC.default["60M8Ae"]),
              onClick: function () {
                  (n("search"), (0, C.BJ)({ button: C.FT.SEARCH, analyticsLocations: c }));
              },
          });
}
function nB(e) {
    let { popoutPosition: t, tooltipPosition: n, onClose: i } = e,
        { analyticsLocations: s } = (0, h.Ay)();
    return (0, l.jsx)(eF, {
        position: t,
        onClose: i,
        children: (e) => {
            let { buttonRef: t, onClick: i, showPopout: r } = e;
            return (0, l.jsx)(nz, {
                buttonRef: t,
                icon: t6.R,
                label: eI.intl.string(eC.default.au4mU4),
                tooltipPosition: n,
                onClick: () => {
                    (r || (0, C.BJ)({ button: C.FT.ADD_FRIEND, analyticsLocations: s }), i());
                },
            });
        },
    });
}
function nz(e) {
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
            className: nD.x6,
            children: (0, l.jsx)(t, { size: "sm", color: "currentColor" }),
        }),
    });
}
var nH = n(45863);
function nU() {
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
            ((n.current = !0), t.current?.classList?.add(nH.cB), p._.dispatch(ej.jej.FRIENDS_SIDEBAR_RESIZED));
        }, []),
        k = i.useCallback((e) => {
            ((n.current = !1), t.current?.setAttribute("aria-valuenow", `${e}`), t.current?.classList?.remove(nH.cB));
        }, []),
        P = i.useCallback((e) => (N ? Math.min(Math.max(e, 280), 320) : e < 200 ? 64 : Math.min(e, 320)), [N]),
        D = (0, d.A)({
            resizableDomNodeRef: e,
            minDimension: N ? 200 : 64,
            maxDimension: 320,
            orientation: d.R.HORIZONTAL_LEFT,
            onElementResizeStart: y,
            onApplyDimension: S,
            onElementResizeEnd: k,
            getClampedValue: P,
        }),
        w = i.useCallback(
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
                let i = P(l);
                ((n.current = !0), S(i), (n.current = !1));
            },
            [N, P, S],
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
                            className: r()(nH.kL, n),
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
                                        className: nH.Di,
                                        onMouseDown: D,
                                        onKeyDown: w,
                                    }),
                                }),
                                (0, l.jsx)(nG, {}),
                                (0, l.jsxs)("div", {
                                    className: nH.rf,
                                    children: [
                                        (0, l.jsx)(eB, {}),
                                        (0, l.jsx)(c.xp, { containerRef: e, children: (0, l.jsx)(ns, {}) }),
                                    ],
                                }),
                            ],
                        }),
                    }),
            }),
        }),
    });
}
