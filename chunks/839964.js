(n.r(t), n.d(t, { default: () => n0 }));
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
    p = n(188567),
    j = n(925166),
    I = n(115504),
    C = n(73153);
function b() {
    C.h.dispatch({ type: "FRIENDS_LIST_TEAR_DOWN" });
}
let v = i.createContext({ collapsed: !1, hovered: !1 });
var A = n(605117),
    N = n(855986),
    E = n(331322),
    R = n(866665),
    S = n(939249),
    y = n(862328),
    k = n(812993),
    D = n(834730),
    P = n(881636),
    w = n(646514),
    T = n(778712),
    _ = n(97808),
    G = n(954376),
    M = n(454932),
    L = n(287809),
    F = n(902902);
function O() {
    return (0, N.cf)([F.A], () => ({ incoming: F.A.getIncomingRequests(), outgoing: F.A.getOutgoingRequests() }));
}
var B = n(408278),
    z = n(625903),
    U = n(780964),
    H = n(766075),
    V = n(265872),
    W = n(559647),
    Z = n(428678),
    $ = n(858899),
    q = n(890856),
    K = n(789645),
    X = n(933832),
    Y = n(39623),
    Q = n(123292),
    J = n(216964),
    ee = n(769015),
    et = n(640708),
    en = n(22212),
    el = n(409978),
    ei = n(390848),
    es = n(342296),
    er = n(427262),
    ea = n(305866),
    eo = n(707554),
    ec = n(516521),
    eu = n(520016);
function ed(e) {
    let { title: t, accessory: n, returnRef: i, "aria-label": s, children: r } = e;
    return (0, l.jsx)(ea.l, {
        returnRef: i,
        "aria-label": s,
        children: (0, l.jsx)("div", {
            className: eu.kL,
            children: (0, l.jsx)(eo.F, {
                component: (0, l.jsxs)("div", {
                    className: eu.wx,
                    children: [(0, l.jsx)("div", { className: eu.gn, children: t }), n],
                }),
                children: (0, l.jsx)(ec.Ch, { className: eu.rf, disableFocusRingScope: !0, children: r }),
            }),
        }),
    });
}
var ex = n(652215),
    eh = n(820249),
    ef = n(792996),
    em = n(788868);
let eg = "Friends Sidebar Add Friend Popout";
function ep() {
    let { incoming: e } = O();
    return (
        (0, el.y)(e),
        (0, l.jsx)(E.B, {
            gap: 4,
            padding: { top: 8, bottom: 8, left: 8 },
            fullWidth: !1,
            children: e.map((e) => (0, l.jsx)(eA, { request: e }, e.key)),
        })
    );
}
function ej() {
    let { outgoing: e } = O();
    return ((0, el.y)(e), 0 === e.length)
        ? null
        : (0, l.jsx)(E.B, {
              padding: { top: 8, bottom: 8, left: 8 },
              className: em.uW,
              children: (0, l.jsx)(eI, { outgoing: e }),
          });
}
function eI(e) {
    let { outgoing: t } = e,
        n = i.useRef(null),
        [s, a] = i.useState(!1);
    return (0, l.jsx)(V.Y, {
        targetElementRef: n,
        shouldShow: s,
        onRequestClose: () => a(!1),
        position: "right",
        align: "top",
        renderPopout: () => (0, l.jsx)(eC, { outgoing: t, returnRef: n }),
        children: () =>
            (0, l.jsxs)(S.D, {
                innerRef: n,
                className: r()(em.nM, em.b8, em.d, { [em.$F]: s }),
                "aria-expanded": s,
                onClick: () => a(!s),
                children: [
                    (0, l.jsx)("div", {
                        className: em.iE,
                        children: (0, l.jsx)(W.SendMessageIcon, { size: "sm", color: w.A.colors.ICON_DEFAULT }),
                    }),
                    (0, l.jsxs)("div", {
                        className: em.Qq,
                        children: [
                            (0, l.jsx)(D.E, {
                                variant: "body-md/medium",
                                color: "text-default",
                                lineClamp: 1,
                                children: ef.intl.string(eh.default.JHcSBI),
                            }),
                            (0, l.jsx)(D.E, {
                                variant: "body-xs/medium",
                                color: "text-muted",
                                lineClamp: 1,
                                children: ef.intl.format(eh.default.PY1iDb, { count: t.length }),
                            }),
                        ],
                    }),
                    (0, l.jsx)("div", {
                        className: em.ai,
                        children: (0, l.jsx)(P.ChevronLargeRightIcon, { size: "sm", color: w.A.colors.ICON_MUTED }),
                    }),
                ],
            }),
    });
}
function eC(e) {
    let { outgoing: t, returnRef: n } = e;
    return (0, l.jsx)(ed, {
        returnRef: n,
        "aria-label": ef.intl.string(eh.default.JHcSBI),
        title: (0, l.jsx)(D.E, {
            variant: "body-md/medium",
            color: "text-default",
            children: ef.intl.string(eh.default.JHcSBI),
        }),
        children: (0, l.jsx)(E.B, {
            gap: 4,
            padding: { top: 8, bottom: 8, left: 8 },
            fullWidth: !1,
            children: t.map((e) => (0, l.jsx)(eb, { request: e }, e.key)),
        }),
    });
}
function eb(e) {
    let { request: t } = e,
        n = (0, N.bG)([L.default], () => L.default.getUser(t.userId));
    return null == n ? null : (0, l.jsx)(ev, { request: t, user: n });
}
function ev(e) {
    let { request: t, user: n } = e,
        s = i.useRef(null),
        { isHoveringOrFocusing: r } = (0, f.A)(s),
        a = (0, M.o)({ user: n, applicationId: t.applicationId, isGameRelationship: t.isGameRelationship }),
        { cancelFriendRequest: o } = (0, ei.I)({
            userId: t.userId,
            applicationId: t.applicationId,
            isGameRelationship: t.isGameRelationship,
            location: eg,
        });
    return (0, l.jsxs)(E.B, {
        ref: s,
        direction: "horizontal",
        align: "center",
        gap: 8,
        padding: 8,
        className: em.nM,
        children: [
            (0, l.jsx)(eR, { user: n, pendingFriendRequestInfo: a, animate: r }),
            (0, l.jsx)(R.m, {
                text: ef.intl.string(ef.t.eaq81S),
                children: (0, l.jsx)(B.K, {
                    icon: Z.DenyIcon,
                    size: "sm",
                    variant: "icon-only",
                    "aria-label": eE(ex.eA$.PENDING_OUTGOING, a, ef.intl.string(ef.t.eaq81S)),
                    onClick: o,
                }),
            }),
        ],
    });
}
function eA(e) {
    let { request: t } = e,
        n = (0, N.bG)([L.default], () => L.default.getUser(t.userId));
    return null == n ? null : (0, l.jsx)(eN, { request: t, user: n });
}
function eN(e) {
    let { request: t, user: n } = e,
        s = i.useRef(null),
        { isHoveringOrFocusing: a } = (0, f.A)(s),
        [o, c] = i.useState(!1),
        u = (0, M.o)({ user: n, applicationId: t.applicationId, isGameRelationship: t.isGameRelationship }),
        { acceptFriendRequest: d, cancelFriendRequest: x } = (0, ei.I)({
            userId: t.userId,
            applicationId: t.applicationId,
            isGameRelationship: t.isGameRelationship,
            location: eg,
            onConfirm: () =>
                (0, $.P0)({
                    text: ef.intl.formatToPlainString(ef.t.cRwkp7, { name: er.Ay.getName(n) }),
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
    return (0, l.jsx)(es.A, {
        targetElementRef: s,
        user: n,
        position: "right",
        align: "top",
        children: (e, t) => {
            let { isShown: i } = t;
            return (0, l.jsx)(q.s, {
                ref: s,
                onClick: e.onClick,
                onKeyDown: e.onKeyDown,
                onMouseDown: e.onMouseDown,
                "aria-expanded": e["aria-expanded"],
                "aria-label": ef.intl.formatToPlainString(ef.t.M8NKGR, { name: u.displayName }),
                className: r()(em.nM, em.b8, em.ZJ, { [em.$F]: i }),
                children: (0, l.jsxs)(E.B, {
                    direction: "horizontal",
                    align: null != u.note ? "start" : "center",
                    gap: 8,
                    padding: 8,
                    fullWidth: !1,
                    children: [
                        (0, l.jsx)(eR, {
                            user: n,
                            pendingFriendRequestInfo: u,
                            animate: a,
                            children: null != u.note && (0, l.jsx)(ey, { note: u.note }),
                        }),
                        (0, l.jsxs)(E.B, {
                            direction: "horizontal",
                            align: "center",
                            gap: 4,
                            fullWidth: !1,
                            children: [
                                (0, l.jsx)(R.m, {
                                    text: ef.intl.string(ef.t.xuio0C),
                                    children: (0, l.jsx)(B.K, {
                                        icon: K.XSmallIcon,
                                        size: "sm",
                                        variant: "icon-only",
                                        "aria-label": eE(ex.eA$.PENDING_INCOMING, u, ef.intl.string(ef.t.xuio0C)),
                                        onClick: m,
                                    }),
                                }),
                                (0, l.jsx)(R.m, {
                                    text: ef.intl.string(ef.t.Zcibdf),
                                    children: (0, l.jsx)(B.K, {
                                        icon: X.CheckmarkLargeIcon,
                                        size: "sm",
                                        variant: "icon-only",
                                        "aria-label": eE(ex.eA$.PENDING_INCOMING, u, ef.intl.string(ef.t.Zcibdf)),
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
function eE(e, t, n) {
    let { displayName: l, applicationName: i } = t,
        s = { action: n, name: l, application: i ?? "" };
    if (e === ex.eA$.PENDING_INCOMING) {
        let e = null != i ? ef.t.kSmk1F : ef.t["+YIVE1"];
        return ef.intl.formatToPlainString(e, s);
    }
    let r = null != i ? ef.t.BfqcNh : ef.t.vrDIev;
    return ef.intl.formatToPlainString(r, s);
}
function eR(e) {
    let { user: t, pendingFriendRequestInfo: n, animate: i, children: s } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(_.eu, {
                src: t.getAvatarURL(void 0, (0, T.FT)(T._3.SIZE_32), i),
                size: T._3.SIZE_32,
                "aria-hidden": !0,
            }),
            (0, l.jsxs)("div", {
                className: em.Qq,
                children: [
                    (0, l.jsx)(D.E, {
                        variant: "body-md/medium",
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
        : (0, l.jsxs)(E.B, {
              direction: "horizontal",
              align: "center",
              gap: 4,
              children: [
                  null != n &&
                      (0, l.jsx)(D.E, { variant: "body-xs/medium", color: "text-muted", lineClamp: 1, children: n }),
                  null != i &&
                      (0, l.jsxs)(l.Fragment, {
                          children: [
                              null != n && (0, l.jsx)(et.A, { height: 2, width: 2 }),
                              (0, l.jsx)(ee.A, { game: i, size: ee.M.XXSMALL }),
                              (0, l.jsx)(D.E, {
                                  variant: "body-xs/medium",
                                  color: "text-muted",
                                  lineClamp: 1,
                                  children: i.name,
                              }),
                          ],
                      }),
              ],
          });
}
function ey(e) {
    let { note: t } = e,
        [n, s] = i.useState(!1);
    return n
        ? (0, l.jsxs)(D.E, {
              variant: "body-xs/normal",
              color: "text-subtle",
              tag: "p",
              className: em.N4,
              children: [
                  (0, l.jsx)(J.QuoteIcon, { size: "xxs", color: w.A.colors.ICON_SUBTLE, className: em.TG }),
                  t,
                  " ",
                  (0, l.jsx)(Q.Q, {
                      text: ef.intl.string(eh.default.QX4H2E),
                      textVariant: "body-xs/medium",
                      onClick: function (e) {
                          (e.stopPropagation(), s(!1));
                      },
                  }),
              ],
          })
        : (0, l.jsxs)(E.B, {
              direction: "horizontal",
              align: "center",
              gap: 4,
              children: [
                  (0, l.jsx)(Y.EyeIcon, { size: "xxs", color: w.A.colors.TEXT_BRAND }),
                  (0, l.jsx)(Q.Q, {
                      text: ef.intl.string(eh.default.xZupEi),
                      textVariant: "body-xs/medium",
                      onClick: function (e) {
                          (e.stopPropagation(), s(!0), (0, en.Yq)({ analyticsLocation: eg, noteLength: t.length }));
                      },
                  }),
              ],
          });
}
function ek(e) {
    let { renderPopout: t, position: n, onClose: s, spacing: r, children: a } = e,
        o = i.useRef(null),
        [c, u] = i.useState(!1),
        d = i.useCallback(() => {
            (u(!1), s?.());
        }, [s]);
    return (
        i.useEffect(
            () => (
                p._.subscribe(ex.jej.FRIENDS_SIDEBAR_RESIZED, d),
                () => {
                    p._.unsubscribe(ex.jej.FRIENDS_SIDEBAR_RESIZED, d);
                }
            ),
            [d],
        ),
        (0, l.jsx)(V.Y, {
            targetElementRef: o,
            shouldShow: c,
            onRequestClose: d,
            position: n,
            spacing: r,
            ignoreModalClicks: !0,
            renderPopout: t,
            children: () => a({ buttonRef: o, onClick: () => u(!c), showPopout: c }),
        })
    );
}
function eD() {
    return (0, l.jsx)(ed, {
        title: (0, l.jsx)(D.E, {
            variant: "body-md/medium",
            color: "text-default",
            children: ef.intl.string(ef.t.fyA115),
        }),
        accessory: (0, l.jsx)(R.m, {
            text: ef.intl.string(eh.default["2vock0"]),
            position: "bottom",
            align: "right",
            caretConfig: { align: "end" },
            children: (0, l.jsx)(B.K, {
                icon: z.SettingsIcon,
                size: "sm",
                variant: "icon-only",
                "aria-label": ef.intl.string(eh.default["2vock0"]),
                onClick: () => (0, H.openUserSettings)(U.X.FRIEND_REQUESTS_CATEGORY),
            }),
        }),
        children: (0, l.jsx)(ep, {}),
    });
}
function eP(e) {
    return (0, l.jsx)(ek, { ...e, renderPopout: () => (0, l.jsx)(eD, {}) });
}
var ew = n(669850);
function eT() {
    let { incoming: e } = O(),
        { collapsed: t } = i.useContext(v),
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
        a = (0, N.bG)([L.default], () => L.default.getUser(r), [r]);
    return null == s || null == a
        ? null
        : (0, l.jsx)(E.B, {
              padding: 8,
              className: ew.uW,
              children: (0, l.jsx)(
                  eP,
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
                              : (0, l.jsx)(eG, {
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
        { isHoveringOrFocusing: a } = (0, f.A)(t);
    return (0, l.jsx)(R.m, {
        text: ef.intl.string(ef.t.fyA115),
        position: "left",
        targetElementRef: t,
        children: (0, l.jsx)(S.D, {
            innerRef: t,
            className: ew.Wj,
            "aria-label": ef.intl.formatToPlainString(ef.t.xxFCW8, { count: i.length }),
            onClick: n,
            children: (0, l.jsx)(y.Q, {
                rounded: 1 === s.length,
                lowerBadge: (0, l.jsx)(k.hV, { count: i.length, "aria-hidden": !0 }),
                lowerBadgeSize: { width: (0, k.o6)(i.length) },
                children: (0, l.jsx)("div", {
                    className: ew.UI,
                    children: (0, l.jsx)(eM, { facepileUserIds: s, latestUser: r, animate: a }),
                }),
            }),
        }),
    });
}
function eG(e) {
    let { buttonRef: t, onClick: n, incoming: i, facepileUserIds: s, latestRequest: r, latestUser: a } = e,
        { isHoveringOrFocusing: o } = (0, f.A)(t),
        { displayName: c } = (0, M.o)({
            user: a,
            applicationId: r.applicationId,
            isGameRelationship: r.isGameRelationship,
        });
    return (0, l.jsxs)(S.D, {
        innerRef: t,
        className: ew.nM,
        onClick: n,
        children: [
            (0, l.jsx)(eM, { facepileUserIds: s, latestUser: a, animate: o }),
            (0, l.jsxs)("div", {
                className: ew.Qq,
                children: [
                    (0, l.jsx)(D.E, {
                        variant: "body-md/medium",
                        color: "text-default",
                        lineClamp: 1,
                        children: ef.intl.string(ef.t.fyA115),
                    }),
                    (0, l.jsx)(D.E, {
                        variant: "body-xs/medium",
                        color: "text-muted",
                        lineClamp: 1,
                        children:
                            i.length > 1
                                ? ef.intl.formatToPlainString(eh.default.A5gTu2, { name: c, count: i.length - 1 })
                                : c,
                    }),
                ],
            }),
            (0, l.jsxs)(E.B, {
                direction: "horizontal",
                align: "center",
                gap: 4,
                fullWidth: !1,
                children: [
                    (0, l.jsx)(k.hV, { count: i.length }),
                    (0, l.jsx)("div", {
                        className: ew.ai,
                        children: (0, l.jsx)(P.ChevronLargeRightIcon, { size: "sm", color: w.A.colors.ICON_MUTED }),
                    }),
                ],
            }),
        ],
    });
}
function eM(e) {
    let { facepileUserIds: t, latestUser: n, animate: i } = e;
    return t.length > 1
        ? (0, l.jsx)(G.A, { recipients: t, size: T._3.SIZE_32, "aria-hidden": !0 })
        : (0, l.jsx)(_.eu, {
              src: n.getAvatarURL(void 0, (0, T.FT)(T._3.SIZE_32), i),
              size: T._3.SIZE_32,
              "aria-hidden": !0,
          });
}
var eL = n(837381),
    eF = n(140735),
    eO = n(475825),
    eB = n(602853),
    ez = n(928039),
    eU = n(546359),
    eH = n(736347),
    eV = n(350835),
    eW = n(599026),
    eZ = n(683063),
    e$ = n(808666),
    eq = n(534890),
    eK = n(365199),
    eX = n(687966),
    eY = n(432017),
    eQ = n(31300),
    eJ = n(308528),
    e0 = n(442433),
    e6 = n(597798),
    e1 = n(775602),
    e3 = n(566903),
    e7 = n(51183),
    e8 = n(323073),
    e4 = n(597306),
    e2 = n(80558),
    e5 = n(47167),
    e9 = n(713654),
    te = n(449582),
    tt = n(88686),
    tn = n(214881),
    tl = n(325158),
    ti = n(263577),
    ts = n(471107),
    tr = n(609425),
    ta = n(922301),
    to = n(16371),
    tc = n(381849),
    tu = n(129095),
    td = n(854627),
    tx = n(734057),
    th = n(576705),
    tf = n(290863),
    tm = n(977997),
    tg = n(303911),
    tp = n(604506);
function tj(e) {
    let { row: t, sectionType: s, inVoiceSubgroup: a = !1 } = e,
        o = (0, N.bG)([L.default], () => L.default.getUser(t.userId), [t.userId]),
        { collapsed: u } = i.useContext(v),
        d = tE(t, s, a),
        x = i.useRef(null),
        f = i.useRef(null),
        {
            avatarSrc: m,
            avatarDecorationSrc: g,
            eventHandlers: { onMouseEnter: p, onMouseLeave: j },
        } = (0, td.A)({ userId: t.userId, size: T._3.SIZE_32, animateOnHover: !0 }),
        [I, C] = i.useState(!1),
        [b, A] = i.useState(!1),
        [y, k] = i.useState(!1),
        P = (0, N.bG)([e1.Ay], () => e1.Ay.keyboardModeEnabled),
        w = b && P,
        G = (0, te.r)({ user: o }),
        M = (0, tr.A)({ userId: t.userId }),
        F = (0, eL.rm)(t.userId),
        { analyticsLocations: O } = (0, h.Ay)(),
        B = (0, N.bG)(
            [tx.A, th.A, tm.A],
            () => {
                if (a || null == t.voiceChannelId) return null;
                let e = tx.A.getChannel(t.voiceChannelId);
                return null == e ||
                    tm.A.isInChannel(e.id) ||
                    ((0, e4.r)() && (0, e8.UK)(e.id)) ||
                    (!e.isPrivate() && !th.A.can(ex.xBc.CONNECT, e))
                    ? null
                    : e;
            },
            [a, t.voiceChannelId],
        ),
        z = i.useCallback(
            (e) => {
                let i = L.default.getUser(t.userId);
                null != i &&
                    (k(!0),
                    (0, e0.L3)(
                        e,
                        async () => {
                            let { default: e } = await Promise.all([
                                n.e(463317),
                                n.e(893190),
                                n.e(189673),
                                n.e(576432),
                                n.e(797558),
                                n.e(451162),
                                n.e(576665),
                                n.e(624198),
                                n.e(532418),
                            ]).then(n.bind(n, 668569));
                            return (t) => (0, l.jsx)(e, { ...t, user: i, analyticsLocations: O });
                        },
                        { onClose: () => k(!1) },
                    ));
            },
            [t.userId, O],
        );
    return null == o
        ? null
        : (0, l.jsx)(es.A, {
              targetElementRef: x,
              user: o,
              position: "left",
              spacing: 16,
              children: (e, n) => {
                  let { isShown: i } = n,
                      a = I || y || i,
                      o = a || w,
                      h = (0, tg.iX)(t.status),
                      b = (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsxs)("div", {
                                  className: tp.rf,
                                  children: [
                                      (0, l.jsx)(D.E, {
                                          variant: "body-md/medium",
                                          color: "text-default",
                                          lineClamp: 1,
                                          children: (0, l.jsx)(to.A, {
                                              userName: t.name,
                                              displayNameStyles: M,
                                              effectDisplayType: o ? ta.G.ANIMATED : ta.G.PLAIN,
                                              loop: !0,
                                          }),
                                      }),
                                      (0, l.jsx)(tR, { subtitle: d }),
                                  ],
                              }),
                              (0, l.jsx)(tb, { row: t, sectionType: s }),
                          ],
                      }),
                      v = (0, l.jsx)("div", {
                          className: r()(tp.kL, { [tp.vu]: o }),
                          onMouseOver: () => {
                              I || (C(!0), p());
                          },
                          onMouseLeave: () => {
                              (C(!1), j());
                          },
                          onContextMenu: z,
                          onFocus: () => A(!0),
                          onBlur: (e) => {
                              e.currentTarget.contains(e.relatedTarget) || A(!1);
                          },
                          children: (0, l.jsx)(c.vN, {
                              offset: { right: 4 },
                              children: (0, l.jsxs)(S.D, {
                                  tag: "div",
                                  innerRef: x,
                                  ...e,
                                  ...F,
                                  className: tp.nM,
                                  children: [
                                      (0, l.jsx)(tn.A, {
                                          nameplate: o || !u ? G : null,
                                          hovered: a,
                                          content: f,
                                          placement: tt.u.FRIENDS_LIST,
                                      }),
                                      (0, l.jsxs)(E.B, {
                                          ref: f,
                                          direction: "horizontal",
                                          justify: "center",
                                          align: "center",
                                          className: r()(tp.Qs, h && tp.WK),
                                          children: [
                                              (0, l.jsx)(_.eu, {
                                                  src: m,
                                                  avatarDecoration: g,
                                                  size: T._3.SIZE_32,
                                                  status: h ? null : t.status,
                                                  "aria-hidden": !0,
                                                  className: tp.LY,
                                              }),
                                              u ? (0, l.jsx)(eF.A, { children: b }) : b,
                                          ],
                                      }),
                                      !u &&
                                          (0, l.jsx)(tC, {
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
                          ? (0, l.jsx)(R.m, {
                                text: t.name,
                                position: "left",
                                asContainer: !0,
                                tag: "div",
                                ariaHidden: !0,
                                children: v,
                            })
                          : (0, l.jsx)(eZ.u, {
                                title: t.name,
                                body: d.tooltip,
                                position: "left",
                                asContainer: !0,
                                element: "div",
                                ariaHidden: !0,
                                children: v,
                            })
                      : v;
              },
          });
}
function tI(e) {
    e.stopPropagation();
}
function tC(e) {
    let { userId: t, voiceChannel: n, tabIndex: i, onMoreClick: s } = e,
        r = (0, e5.Ay)(n),
        a = null != r ? ef.intl.formatToPlainString(eh.default.gOIq4P, { channel: r }) : ef.intl.string(ef.t["96ANUN"]);
    return (0, l.jsxs)("div", {
        className: tp.o1,
        onClick: tI,
        onKeyPress: tI,
        children: [
            null != n &&
                (0, l.jsx)(R.m, {
                    text: a,
                    ariaHidden: !0,
                    children: (0, l.jsx)(B.K, {
                        variant: "active",
                        size: "sm",
                        icon: e$.DoorEnterIcon,
                        "aria-label": a,
                        tabIndex: i,
                        onClick: () => {
                            n.isGuildStageVoice() ? (0, tu.av)(n) : e6.default.selectVoiceChannel(n.id);
                        },
                    }),
                }),
            (0, l.jsx)(R.m, {
                text: ef.intl.string(ef.t.oeb1vg),
                ariaHidden: !0,
                children: (0, l.jsx)(B.K, {
                    variant: "overlay-secondary",
                    size: "sm",
                    icon: eq.ChatIcon,
                    "aria-label": ef.intl.string(ef.t.oeb1vg),
                    tabIndex: i,
                    onClick: () => eJ.A.openPrivateChannel({ recipientIds: t }),
                }),
            }),
            (0, l.jsx)(R.m, {
                text: ef.intl.string(ef.t.PdRCRg),
                ariaHidden: !0,
                children: (0, l.jsx)(B.K, {
                    variant: "overlay-secondary",
                    size: "sm",
                    icon: eK.MoreHorizontalIcon,
                    "aria-label": ef.intl.string(ef.t.PdRCRg),
                    tabIndex: i,
                    onClick: s,
                }),
            }),
        ],
    });
}
function tb(e) {
    let t,
        { row: n, sectionType: i } = e;
    if (null != n.gameAppId) {
        if (i === eH.ik.GAME) return null;
        t = (0, l.jsx)(tv, { gameAppId: n.gameAppId, gameAssetUrl: n.gameAssetUrl });
    } else {
        if (!n.isListening) return null;
        t = (0, l.jsx)(tA, { userId: n.userId });
    }
    return (0, l.jsx)("div", { className: tp.P0, children: t });
}
function tv(e) {
    let { gameAppId: t, gameAssetUrl: n } = e,
        i = (0, e2.O)(null == n ? t : null),
        s = n ?? (0, tl.C4)(i)?.src;
    return (0, l.jsx)(ti.V, { src: s, size: 32 });
}
function tA(e) {
    let { userId: t } = e,
        n = (0, N.bG)(
            [tf.A],
            () =>
                tf.A.getActivities(t).find((e) => {
                    let { type: t } = e;
                    return t === eV.$.LISTENING;
                }) ?? null,
            [t],
        ),
        { largeImage: i } = (0, tl.D8)(n);
    return (0, l.jsx)(ti.V, { src: i?.src, size: 32, alt: i?.text });
}
function tN(e) {
    let { start: t } = e,
        { now: n } = (0, ts.G)(),
        l = Math.max(0, Math.round((n - t) / 1e3));
    return (0, tc.WR)({ seconds: l, getFormatter: tc.i });
}
function tE(e, t, n) {
    let i = (0, N.bG)(
            [tf.A],
            () => {
                let t = tf.A.getActivities(e.userId);
                return null != e.gameActivityIndex
                    ? t[e.gameActivityIndex]
                    : e.isListening
                      ? (t.find((e) => {
                            let { type: t } = e;
                            return t === eV.$.LISTENING;
                        }) ?? t[0])
                      : t[0];
            },
            [e.userId, e.gameActivityIndex, e.isListening],
        ),
        s = i?.type === eV.$.PLAYING || i?.type === eV.$.COMPETING ? "text-voice-connected" : "text-muted",
        r = null != e.voiceChannelId && !n,
        a = (0, N.bG)([tx.A], () => (null != e.voiceChannelId ? tx.A.getChannel(e.voiceChannelId) : null), [
            e.voiceChannelId,
        ]),
        o = (0, N.bG)(
            [tm.A],
            () =>
                n && null != e.voiceChannelId
                    ? tm.A.getVoiceStateForChannel(e.voiceChannelId, e.userId)?.connectedAt
                    : null,
            [n, e.voiceChannelId, e.userId],
        ),
        c = (0, e9.gU)(a),
        u =
            null == c
                ? null
                : (0, l.jsx)(c, {
                      size: "xxs",
                      color: "var(--text-voice-connected)",
                      "aria-label": ef.intl.string(eh.default["8ALChp"]),
                  });
    if (r) {
        let t = null != e.gameName ? i?.timestamps?.start : null,
            n =
                null != t
                    ? ef.intl.format(eh.default.KddZZf, { duration: (0, l.jsx)(tN, { start: t }) })
                    : ef.intl.string(eh.default["8ALChp"]);
        return {
            icon: u,
            textColor: "text-voice-connected",
            contentAriaHidden: null == t,
            content: (0, l.jsx)("span", { className: tp.hc, children: n }),
            tooltip: n,
        };
    }
    let d =
        null != o
            ? {
                  icon: null,
                  textColor: "text-voice-connected",
                  contentAriaHidden: !1,
                  content: (0, l.jsx)(tN, { start: 1e3 * o }),
                  tooltip: null,
              }
            : null;
    if (null == i) return d;
    let x = (function (e, t) {
        let n =
            t && (e.status_display_type === eW.A.NAME || null == e.status_display_type)
                ? (e.details ?? e.state)
                : (0, e3.A)(e, !0).text;
        switch (e.type) {
            case eV.$.PLAYING:
            case eV.$.COMPETING:
                return { Icon: eX.GameControllerIcon, text: n };
            case eV.$.LISTENING:
                return { Icon: eY.MusicIcon, text: n };
            case eV.$.WATCHING:
                return { Icon: eQ.ScreenIcon, text: n };
            case eV.$.CUSTOM_STATUS:
                let i = e.emoji;
                return {
                    Icon: null != i ? () => (0, l.jsx)(e7.A, { emoji: i, hideTooltip: !0 }) : void 0,
                    text: e.state ?? (null == i ? null : ""),
                };
            default:
                return null;
        }
    })(i, t === eH.ik.GAME);
    if (null == x || null == x.text) return d;
    let { Icon: h, text: f } = x,
        m = i.timestamps?.start,
        g = (0, l.jsx)("span", { className: tp.hc, children: f }),
        p =
            null != m
                ? ef.intl.format(eh.default.Fb6oNP, {
                      text: g,
                      duration: (0, l.jsx)("span", { children: (0, l.jsx)(tN, { start: m }) }),
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
function tR(e) {
    let { subtitle: t } = e;
    return null == t
        ? null
        : (0, l.jsxs)(E.B, {
              direction: "horizontal",
              align: "center",
              gap: 4,
              fullWidth: !1,
              children: [
                  null != t.icon && (0, l.jsx)("div", { className: tp.LY, children: t.icon }),
                  (0, l.jsx)(D.E, {
                      variant: "body-xs/medium",
                      color: t.textColor,
                      "aria-hidden": t.contentAriaHidden,
                      className: tp.o4,
                      children: t.content,
                  }),
              ],
          });
}
var tS = n(320448),
    ty = n(847374),
    tk = n(935154),
    tD = n(409626),
    tP = n(692969),
    tw = n(94416);
let tT = [-1, -1, -1, 0, 0, 2, 2, 1, 3, 1, 3].flatMap((e) => [e, -1]);
function t_() {
    let e = i.useRef(null),
        t = i.useRef(0),
        { hovered: n } = i.useContext(v),
        s = (0, N.bG)([e1.Ay], () => e1.Ay.useReducedMotion),
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
                t.current = (t.current + 1) % tT.length;
                let n = tT[t.current];
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
            className: tw.Y,
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
var tG = n(534514),
    tM = n(416852);
let tL = { left: 8, right: 8 };
function tF(e) {
    let { leading: t, labelAccessory: n, trailing: s, label: r, color: a, ref: o } = e,
        { collapsed: c } = i.useContext(v),
        u = c ? eF.A : i.Fragment;
    return (0, l.jsxs)(E.B, {
        ref: o,
        direction: "horizontal",
        justify: c ? "center" : "start",
        align: "center",
        padding: tL,
        fullWidth: !1,
        className: tM.UP,
        children: [
            (0, l.jsx)("div", { className: tM.R4, children: t }),
            (0, l.jsx)(u, {
                children: (0, l.jsx)(tG.D, {
                    variant: "body-sm/medium",
                    color: a ?? "text-muted",
                    lineClamp: 1,
                    children: r,
                }),
            }),
            null != n && !c && (0, l.jsx)("div", { className: tM.nr, children: n }),
            null != s && !c && (0, l.jsx)("div", { className: tM.ZY, children: s }),
        ],
    });
}
var tO = n(845311);
let tB = { top: "sm", bottom: "xxs" };
var tz = n(945584);
function tU(e) {
    switch (e.type) {
        case eH.ik.ACTIVE_NOW:
            return ef.intl.string(ef.t.TxqPQR);
        case eH.ik.ONLINE:
            return ef.intl.string(ef.t.WbGtnH);
        case eH.ik.OFFLINE:
            return ef.intl.string(ef.t.Vv0abJ);
        case eH.ik.GAME:
            return e.label;
        case eH.ik.LETTER:
            return null;
    }
}
function tH(e) {
    let { sectionIndex: t, isCollapsed: n, onToggleCollapsed: s } = e,
        r = i.useRef(null),
        a = i.useRef(null),
        o = (0, N.bG)([eU.A], () => eU.A.getSections()[t]),
        { collapsed: u } = i.useContext(v),
        d = o.key,
        x = i.useCallback(() => s(d), [s, d]),
        h = t > 0 ? tz.Ci : void 0,
        f = tU(o) ?? o.label ?? "";
    if (u)
        return (0, l.jsx)(E.B, {
            padding: tB,
            gap: 0,
            className: h,
            children: (0, l.jsx)(R.m, {
                position: "left",
                text: f,
                ariaHidden: !0,
                asContainer: !0,
                children: (0, l.jsx)(tF, { leading: (0, l.jsx)(tW, { section: o }), label: tU(o) }),
            }),
        });
    let m = ef.intl.formatToPlainString(n ? eh.default.QcKHvf : eh.default.jsV9yS, { sectionName: f });
    return (0, l.jsx)(c.vN, {
        focusTarget: r,
        ringTarget: a,
        offset: { right: 4 },
        children: (0, l.jsx)(q.s, {
            "aria-label": m,
            onClick: x,
            buttonRef: r,
            focusProps: { enabled: !1 },
            className: tz.wx,
            children: (0, l.jsx)(E.B, {
                padding: tB,
                gap: 0,
                className: h,
                children: (0, l.jsx)(tF, {
                    ref: a,
                    leading: (0, l.jsx)(tW, { section: o }),
                    label: (0, l.jsx)(tq, { section: o }),
                    labelAccessory: (0, l.jsx)(tV, { isCollapsed: n }),
                }),
            }),
        }),
    });
}
function tV(e) {
    let { isCollapsed: t } = e,
        n = t ? tS.ChevronSmallRightIcon : ty.ChevronSmallDownIcon;
    return (0, l.jsx)(n, { size: "xs", color: "var(--icon-muted)", "aria-hidden": !0 });
}
function tW(e) {
    let { section: t } = e;
    switch (t.type) {
        case eH.ik.ACTIVE_NOW:
            return (0, l.jsx)(t_, {});
        case eH.ik.ONLINE:
            return (0, l.jsx)(tO.A, { hasOnlineFriends: !0, color: "var(--icon-muted)" });
        case eH.ik.OFFLINE:
            return (0, l.jsx)(tk.nW, { status: ex.clD.OFFLINE, size: 12 });
        case eH.ik.GAME:
            return (0, l.jsx)(tY, { assetUrl: t.gameAssetUrl, appId: t.gameAppId });
        case eH.ik.LETTER:
            return (0, l.jsx)(tQ, { letter: t.label ?? "#" });
    }
}
let tZ = "\xa0\xa0\xb7\xa0\xa0";
function t$(e) {
    let t = 0;
    for (let n of e.rows) t += n.type === eH.VZ.VOICE_GROUP ? n.rows.length : 1;
    return t;
}
function tq(e) {
    let { section: t } = e;
    return t.type === eH.ik.GAME
        ? (0, l.jsxs)(l.Fragment, {
              children: [(0, l.jsx)(tX, { appId: t.gameAppId, label: t.label }), `${tZ}${t$(t)}`],
          })
        : t.type === eH.ik.ACTIVE_NOW || t.type === eH.ik.ONLINE
          ? `${tU(t)}${tZ}${t$(t)}`
          : tU(t);
}
function tK(e) {
    return (0, tP.A)({ applicationId: e, source: tD.GameProfileSources.FriendsList, trackEntryPointImpression: !1 });
}
function tX(e) {
    let { appId: t, label: n } = e,
        i = tK(t);
    return null == i ? n : (0, l.jsx)(S.D, { tag: "span", onClick: i, className: tz.mO, children: n });
}
function tY(e) {
    let { appId: t, assetUrl: n } = e,
        i = (0, e2.O)(null == n ? t : null),
        s = n ?? (0, tl.C4)(i)?.src,
        r = tK(t),
        a = (0, l.jsx)(ti.V, { src: s, size: 18, "aria-hidden": !0 });
    return null == r
        ? a
        : (0, l.jsx)(S.D, { tag: "span", onClick: r, tabIndex: -1, "aria-hidden": !0, className: tz.Gt, children: a });
}
function tQ(e) {
    let { letter: t } = e;
    return (0, l.jsx)(D.E, { variant: "body-sm/semibold", children: t });
}
var tJ = n(214947),
    t0 = n(821609),
    t6 = n(283973),
    t1 = n(173936),
    t3 = n(95477),
    t7 = n(103557),
    t8 = n(574332),
    t4 = n(279208),
    t2 = n(237309),
    t5 = n(957565),
    t9 = n(499516);
let ne = { sending: !1, success: null, error: null };
function nt(e, t) {
    switch (t.type) {
        case "RESET":
            return ne;
        case "SENDING":
            return { ...ne, sending: !0 };
        case "SUCCESS":
            return { ...ne, sending: !1, success: t.text };
        case "ERROR":
            return { ...ne, sending: !1, error: t.text };
    }
}
function nn() {
    let [e, t] = i.useReducer(nt, ne),
        { sending: n, success: s, error: r } = e,
        [a, o] = i.useState(""),
        [c, u] = i.useState(""),
        [d, x] = i.useState(!1);
    return (0, l.jsxs)(ed, {
        title: (0, l.jsx)(D.E, {
            variant: "body-md/medium",
            color: "text-default",
            children: ef.intl.string(eh.default.au4mU4),
        }),
        accessory: (0, l.jsx)(R.m, {
            text: ef.intl.string(ef.t.t1T3kD),
            position: "bottom",
            align: "right",
            caretConfig: { align: "end" },
            children: (0, l.jsx)(B.K, {
                icon: t1.LinkIcon,
                size: "sm",
                onClick: async function () {
                    x(!0);
                    try {
                        let e = await t8.Ay.createFriendInvite(null, ex.PE1.ADD_FRIENDS_POPOUT);
                        (0, t5.C)(
                            (0, t4.A)(e.code),
                            () => (0, $.P0)({ text: ef.intl.string(ef.t.tBOSx4), variant: "success" }),
                            () => (0, $.P0)({ text: ef.intl.string(ef.t.R0RpRX), variant: "critical" }),
                        );
                    } catch {
                        (0, $.P0)({ text: ef.intl.string(ef.t.R0RpRX), variant: "critical" });
                    } finally {
                        x(!1);
                    }
                },
                "aria-label": ef.intl.string(ef.t.t1T3kD),
                variant: "icon-only",
                loading: d,
            }),
        }),
        children: [
            (0, l.jsx)("form", {
                onSubmit: function (e) {
                    (e.preventDefault(),
                        t({ type: "SENDING" }),
                        (0, t2.A)({
                            discordTag: a,
                            note: "" !== c ? c : void 0,
                            location: "Add Friend Popout",
                            errorUxConfig: t2.g.SHOW_ONLY_IF_ACTION_NEEDED,
                        })
                            .then((e) => {
                                (t({ type: "SUCCESS", text: e }), o(""), u(""));
                            })
                            .catch((e) => t({ type: "ERROR", text: e })));
                },
                autoComplete: "off",
                children: (0, l.jsxs)("div", {
                    className: t9.h,
                    children: [
                        (0, l.jsx)(t3.k, {
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
                        (0, l.jsx)(t7.f, {
                            label: ef.intl.string(ef.t["6dVPSI"]),
                            value: c,
                            onChange: function (e) {
                                (u(e), t({ type: "RESET" }));
                            },
                            helperText: ef.intl.string(ef.t.UtfQNw),
                            maxLength: 120,
                            showCharacterCount: !0,
                            rows: 3,
                            placeholder: ef.intl.string(ef.t.bTMtdN),
                            disabled: n,
                        }),
                        (0, l.jsx)(t0.$, {
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
    });
}
function nl(e) {
    return (0, l.jsx)(ek, { ...e, renderPopout: () => (0, l.jsx)(nn, {}) });
}
var ni = n(184322);
let ns = Array.from({ length: 10 }, (e, t) =>
    (0, l.jsxs)(
        "div",
        {
            className: ni._f,
            "aria-hidden": "true",
            children: [(0, l.jsx)("div", { className: ni.RH }), (0, l.jsx)("div", { className: ni.rl })],
        },
        t,
    ),
);
function nr() {
    let { collapsed: e } = i.useContext(v);
    return e ? (0, l.jsx)(no, {}) : (0, l.jsx)(na, {});
}
function na() {
    return (0, l.jsxs)("div", {
        className: ni.kL,
        children: [
            (0, l.jsx)("div", { className: ni.Dd, children: ns }),
            (0, l.jsx)(E.B, {
                align: "center",
                justify: "center",
                padding: { left: 24, right: 24 },
                className: ni.C,
                children: (0, l.jsxs)(E.B, {
                    align: "center",
                    gap: 16,
                    padding: { bottom: 80 },
                    children: [
                        (0, l.jsx)(tJ.FriendsIcon, { size: "lg", color: w.A.colors.ICON_DEFAULT }),
                        (0, l.jsxs)(E.B, {
                            gap: 4,
                            className: ni.Dk,
                            children: [
                                (0, l.jsx)(tG.D, {
                                    variant: "heading-sm/medium",
                                    children: ef.intl.string(eh.default["4fvi9I"]),
                                }),
                                (0, l.jsx)(D.E, {
                                    variant: "body-sm/normal",
                                    color: "text-muted",
                                    children: ef.intl.string(eh.default.OZj923),
                                }),
                            ],
                        }),
                        (0, l.jsx)(nl, {
                            position: "bottom",
                            children: (e) => {
                                let { buttonRef: t, onClick: n } = e;
                                return (0, l.jsx)(t0.$, {
                                    buttonRef: t,
                                    fullWidth: !0,
                                    size: "md",
                                    variant: "primary",
                                    icon: t6.UserPlusIcon,
                                    text: ef.intl.string(eh.default.au4mU4),
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
function no() {
    return (0, l.jsx)("div", {
        className: ni.kL,
        children: (0, l.jsxs)("div", {
            className: r()(ni.Dd, ni.yZ),
            children: [
                (0, l.jsx)("div", {
                    className: ni._f,
                    children: (0, l.jsx)(nl, {
                        position: "left",
                        children: (e) => {
                            let { buttonRef: t, onClick: n } = e;
                            return (0, l.jsx)(R.m, {
                                text: ef.intl.string(eh.default.au4mU4),
                                position: "bottom",
                                targetElementRef: t,
                                children: (0, l.jsx)(B.K, {
                                    buttonRef: t,
                                    size: "sm",
                                    variant: "secondary",
                                    icon: t6.UserPlusIcon,
                                    "aria-label": ef.intl.string(eh.default.au4mU4),
                                    onClick: n,
                                }),
                            });
                        },
                    }),
                }),
                ns,
            ],
        }),
    });
}
var nc = n(983851),
    nu = n(378570),
    nd = n(798350);
function nx(e) {
    let { row: t, sectionType: n } = e,
        i = (0, N.bG)([tx.A], () => tx.A.getChannel(t.channelId), [t.channelId]),
        s = (0, e5.Ay)(i) ?? ef.intl.string(ef.t["/YzI63"]),
        a = (0, e9.gU)(i) ?? nc.VoiceNormalIcon,
        o = (0, N.bG)([tm.A], () => tm.A.isInChannel(t.channelId));
    return (0, l.jsxs)(E.B, {
        gap: 0,
        padding: { top: "md", bottom: "md" },
        className: r()(nd.Os, nd.aW),
        role: "group",
        "aria-label": s,
        children: [
            (0, l.jsx)("b", { className: nd.h_ }),
            (0, l.jsx)(tF, {
                leading: (0, l.jsx)(a, { size: "xs", color: "var(--icon-voice-connected)", "aria-hidden": !0 }),
                trailing: (0, l.jsx)(nf, { channelId: t.channelId, channelName: s, isInChannel: o }),
                label: null != i ? (0, l.jsx)(nh, { channelId: t.channelId, channelName: s }) : s,
                color: "text-default",
            }),
            (0, l.jsx)(E.B, {
                gap: 0,
                padding: { top: 4 },
                children: t.rows.map((e) => (0, l.jsx)(tj, { row: e, sectionType: n, inVoiceSubgroup: !0 }, e.userId)),
            }),
            t.extraMemberCount > 0 && (0, l.jsx)(nm, { count: t.extraMemberCount }),
        ],
    });
}
function nh(e) {
    let { channelId: t, channelName: n } = e,
        { collapsed: s } = i.useContext(v);
    return s
        ? n
        : (0, l.jsx)(eL.tG, {
              id: `voice:${t}:name`,
              children: (e) => {
                  let { role: i, ...s } = e;
                  return (0, l.jsx)("span", {
                      role: i,
                      children: (0, l.jsx)(S.D, {
                          tag: "span",
                          className: nd.HA,
                          onClick: () => (0, nu.iN)(t),
                          ...s,
                          children: n,
                      }),
                  });
              },
          });
}
function nf(e) {
    let { channelId: t, channelName: n, isInChannel: i } = e;
    return (0, l.jsx)(eL.tG, {
        id: `voice:${t}:join`,
        children: (e) => {
            let { role: s, ...a } = e;
            return (0, l.jsx)("div", {
                role: s,
                className: r()(nd.PD, i && nd.RK),
                children: (0, l.jsx)(t0.$, {
                    text: ef.intl.string(i ? ef.t["Hi1/aQ"] : ef.t.VJlc0S),
                    variant: i ? "critical-secondary" : "active",
                    size: "sm",
                    "aria-label": i ? void 0 : ef.intl.formatToPlainString(eh.default.gOIq4P, { channel: n }),
                    onClick: () => (i ? e6.default.disconnect() : e6.default.selectVoiceChannel(t)),
                    ...a,
                }),
            });
        },
    });
}
function nm(e) {
    let { count: t } = e,
        { collapsed: n } = i.useContext(v);
    return (0, l.jsxs)(E.B, {
        direction: "horizontal",
        align: "center",
        justify: n ? "center" : "start",
        fullWidth: !1,
        gap: 4,
        padding: { top: 4, bottom: 4 },
        children: [
            !n && (0, l.jsx)("b", { className: nd.hF }),
            (0, l.jsx)(D.E, {
                variant: "body-xs/medium",
                color: "text-muted",
                children: ef.intl.formatToPlainString(n ? eh.default.SWPwHW : eh.default.d90MfZ, { count: t }),
            }),
        ],
    });
}
var ng = n(182927);
function np() {
    let e,
        t,
        n,
        s,
        r = (0, N.bG)([eU.A], () => eU.A.getSections()),
        { collapsed: a } = i.useContext(v),
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
        m = (0, ez.A)("friends-list", f),
        {
            rowHeight: g,
            sectionHeaderHeight: p,
            sectionDividerHeight: j,
            subgroupPadding: I,
        } = ((e = (0, eB.r)(w.A.space.SPACE_XXS)),
        (t = (0, eB.r)(w.A.space.SPACE_XS)),
        (n = (0, eB.r)(w.A.space.SPACE_SM)),
        {
            rowHeight: 32 + (t + 1) * 2,
            sectionHeaderHeight: 24 + n + e,
            sectionDividerHeight: (s = (0, eB.r)(w.A.space.SPACE_MD)),
            subgroupPadding: s,
        }),
        C = i.useCallback((e) => (e > 0 ? p + j : p), [p, j]),
        b = i.useCallback(
            (e, t) => {
                if (u(e)) return 0;
                let n = r[e]?.rows[t];
                return null == n
                    ? g
                    : n.type === eH.VZ.VOICE_GROUP && n.rows.length > 1
                      ? 2 * I + 24 + 4 + n.rows.length * g + 24 * (n.extraMemberCount > 0)
                      : g;
            },
            [r, u, g, I],
        ),
        A = i.useCallback(
            (e) => {
                let { section: t, row: n } = e;
                if (u(t)) return null;
                let i = r[t],
                    s = i?.rows[n];
                return null == s || null == i
                    ? null
                    : s.type === eH.VZ.VOICE_GROUP
                      ? (0, l.jsx)(nx, { row: s, sectionType: i.type }, s.key)
                      : (0, l.jsx)(tj, { row: s, sectionType: i.type }, s.userId);
            },
            [r, u],
        ),
        E = i.useCallback(
            (e) => {
                let { section: t } = e;
                return (0, l.jsx)(tH, { sectionIndex: t, isCollapsed: u(t), onToggleCollapsed: d });
            },
            [u, d],
        );
    return 0 === r.length
        ? (0, l.jsx)(nr, {})
        : (0, l.jsx)(eo.F, {
              component: (0, l.jsx)(eF.A, {
                  children: (0, l.jsx)(eo.H, { id: h, children: ef.intl.string(ef.t.TdEu5X) }),
              }),
              children: (0, l.jsx)(eL.hD, {
                  navigator: m,
                  children: (0, l.jsx)(eL.PR, {
                      children: (e) => {
                          let { ref: t, role: n, ...i } = e;
                          return (0, l.jsx)(eO.OZ, {
                              ref: (e) => {
                                  ((f.current = e), (t.current = e?.getScrollerNode() ?? null));
                              },
                              ...i,
                              className: ng.p,
                              "aria-labelledby": h,
                              innerRole: n,
                              sections: x,
                              sectionHeight: C,
                              rowHeight: b,
                              renderSection: E,
                              renderRow: A,
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
var nj = n(259730),
    nI = n(450030),
    nC = n(783977),
    nb = n(7689),
    nv = n(683438),
    nA = n(765671),
    nN = n(165862),
    nE = n(477782),
    nR = n(67746);
let nS = [
    [eH.Vj.ACTIVE_NOW, eh.default["/lMTzd"], eh.default.IzzWNM],
    [eH.Vj.GAME, eh.default.aKZ12v, eh.default.lE79Lm],
    [eH.Vj.ALPHABETICAL, eh.default.eVxFX3, null],
];
function ny(e) {
    let { width: t, closePopout: n } = e,
        i = (0, N.bG)([eU.A], () => eU.A.getGroupingMode()),
        s = (0, N.bG)([eU.A], () => eU.A.isVoiceGroupingEnabled()),
        { analyticsLocations: r } = (0, h.Ay)();
    return (0, l.jsx)("div", {
        className: nR.k,
        style: { "--custom-group-config-popout-width": `${t ?? 264}px` },
        children: (0, l.jsxs)(nN.W, {
            navId: "friends-list-group-config",
            "aria-label": ef.intl.string(eh.default["i+986w"]),
            onClose: n,
            onSelect: void 0,
            children: [
                (0, l.jsx)(nE.rX, {
                    label: ef.intl.string(eh.default.OvTyCX),
                    children: nS.map((e) => {
                        let [t, s, a] = e;
                        return (0, l.jsx)(
                            nE.iD,
                            {
                                id: `friends-list-grouping-mode-${t}`,
                                label: ef.intl.string(s),
                                subtext: null != a ? ef.intl.string(a) : null,
                                group: "friends-list-grouping-select",
                                checked: i === t,
                                action: () => {
                                    (t !== i &&
                                        (0, I.r_)({
                                            oldGroupingMode: (0, tg.c7)(i),
                                            newGroupingMode: (0, tg.c7)(t),
                                            analyticsLocations: r,
                                        }),
                                        C.h.dispatch({ type: "FRIENDS_LIST_SET_GROUPING_MODE", mode: t }),
                                        n());
                                },
                            },
                            `friends-list-grouping-mode-${t}`,
                        );
                    }),
                }),
                (0, tg.kR)(i) &&
                    (0, l.jsx)(nE.rX, {
                        label: ef.intl.string(ef.t["8/udY0"]),
                        children: (0, l.jsx)(nE.fP, {
                            id: "friends-list-group-voice-channels",
                            label: ef.intl.string(eh.default["/b1eZT"]),
                            subtext: ef.intl.string(eh.default["/bZ+Av"]),
                            checked: s,
                            action: () => {
                                var e;
                                ((0, I.Sj)({
                                    oldVoiceGroupingEnabled: s,
                                    newVoiceGroupingEnabled: !s,
                                    analyticsLocations: r,
                                }),
                                    (e = !s),
                                    C.h.dispatch({ type: "FRIENDS_LIST_SET_VOICE_GROUPING_ENABLED", enabled: e }),
                                    n());
                            },
                        }),
                    }),
            ],
        }),
    });
}
n(321073);
var nk = n(565860),
    nD = n(723690),
    nP = n(976860),
    nw = n(994500),
    nT = n(972910);
function n_(e) {
    let { row: t, username: n } = e,
        i = tE(t, eH.ik.ONLINE, !1);
    return null == i
        ? (0, l.jsx)(D.E, { variant: "body-xs/medium", color: "text-muted", children: n })
        : (0, l.jsx)(tR, { subtitle: i });
}
function nG(e) {
    let { friend: t, appendGap: n, closePopout: s } = e,
        [a, o] = i.useState(!1),
        c = (0, N.bG)([eU.A], () => eU.A.getRow(t.userId), [t.userId]),
        {
            status: u,
            isMobile: d,
            isVR: x,
        } = (0, N.cf)([tf.A], () => ({
            status: tf.A.getStatus(t.userId),
            isMobile: tf.A.isMobileOnline(t.userId),
            isVR: tf.A.isVROnline(t.userId),
        }));
    return (0, l.jsx)(S.D, {
        className: r()(nT.Ke, { [nT.w$]: n }),
        onMouseEnter: () => o(!0),
        onMouseLeave: () => o(!1),
        onClick: function () {
            let e = tx.A.getDMFromUserId(t.user.id);
            (null != e ? (0, nP.pX)(ex.BVt.CHANNEL(ex.ME, e)) : eJ.A.openPrivateChannel({ recipientIds: t.user.id }),
                (0, en.WD)({ targetUserId: t.user.id, tab: I.x3 }),
                s?.());
        },
        children: (0, l.jsx)(nD.A, {
            user: t.user,
            status: u,
            isMobile: d,
            isVR: x,
            subText:
                null != c
                    ? (0, l.jsx)(n_, { row: c, username: t.user.username })
                    : (0, l.jsx)(D.E, { variant: "body-xs/medium", color: "text-muted", children: t.user.username }),
            hovered: a,
            showAccountIdentifier: !1,
            className: nT.eF,
        }),
    });
}
function nM(e) {
    let { searchResults: t, closePopout: n } = e,
        i = (0, eB.r)(w.A.space.SPACE_XS),
        s = (0, eB.r)(w.A.space.SPACE_XXS),
        r = 36 + 2 * i,
        a = [t.length];
    return (0, l.jsx)(eO.OZ, {
        renderRow: (e) => {
            let { section: i, row: s } = e,
                r = t[s];
            return (0, l.jsx)(nG, { friend: r, appendGap: s !== t.length - 1, closePopout: n }, r.userId);
        },
        rowHeight: (e, n) => (n === t.length - 1 ? r : r + s),
        sections: a,
        sectionHeight: 18 + s,
        renderSection: (e) => {
            let { section: n } = e;
            return (0, l.jsx)(D.E, {
                className: nT.nw,
                variant: "body-sm/medium",
                children: ef.intl.format(ef.t.xIWGxu, { count: t.length }),
            });
        },
        className: nT.Xv,
    });
}
function nL() {
    return (0, l.jsx)(D.E, {
        variant: "body-sm/medium",
        className: nT.n1,
        children: ef.intl.string(eh.default["0usxBd"]),
    });
}
function nF() {
    return (0, l.jsx)(D.E, {
        variant: "body-sm/medium",
        className: nT.n1,
        children: ef.intl.string(eh.default.VH2HXW),
    });
}
function nO(e) {
    let { rawQuery: t, closePopout: n } = e,
        i = (0, nk.HI)(t),
        s = (0, N.bG)(
            [nw.A, L.default],
            () => {
                if ("" === i) return [];
                let e = nw.A.getFriendIDs(),
                    t = [];
                return (
                    e.forEach((e) => {
                        let n = L.default.getUser(e);
                        if (void 0 === n) return;
                        let l = nw.A.getNickname(e),
                            s = [(0, nk.HI)(n.username)];
                        (null != n.globalName && s.push((0, nk.HI)(n.globalName)),
                            null != l && s.push((0, nk.HI)(l)),
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
        ? (0, l.jsx)(nL, {})
        : s.length > 0
          ? (0, l.jsx)(nM, { searchResults: s, closePopout: n })
          : (0, l.jsx)(nF, {});
}
function nB(e) {
    let { query: t, width: n, closePopout: i } = e;
    return (0, l.jsx)("div", {
        className: r()(nT.kL, nT.zZ),
        style: { "--custom-search-friends-popout-width": `${n ?? 264}px` },
        children: (0, l.jsx)(nO, { rawQuery: t, closePopout: i }),
    });
}
function nz(e) {
    let { closePopout: t } = e,
        [n, s] = i.useState("");
    return (0, l.jsx)(ea.l, {
        children: (0, l.jsxs)("div", {
            className: nT.kL,
            style: { "--custom-search-friends-popout-width": "264px" },
            children: [
                (0, l.jsx)("div", {
                    className: nT.M6,
                    children: (0, l.jsx)(nv.I, {
                        query: n,
                        onChange: s,
                        onClear: () => s(""),
                        placeholder: ef.intl.string(ef.t.lLDtTK),
                        "aria-label": ef.intl.string(ef.t.lLDtTK),
                    }),
                }),
                (0, l.jsx)(nO, { rawQuery: n, closePopout: t }),
            ],
        }),
    });
}
var nU = n(540950);
function nH() {
    let { analyticsLocations: e } = (0, h.Ay)();
    return (0, l.jsx)(nQ, {
        icon: nj.PanelOpenIcon,
        label: ef.intl.string(eh.default.JZCSRZ),
        onClick: function () {
            ((0, I.RQ)({ open: !1, source: I.TY.SIDEBAR_HEADER_BUTTON, analyticsLocations: e }),
                u.A.setFriendsSidebarCollapsed(!0));
        },
    });
}
function nV() {
    let [e, t] = i.useState(null);
    i.useEffect(() => {
        function e() {
            t(null);
        }
        return (
            p._.subscribe(ex.jej.FRIENDS_SIDEBAR_RESIZED, e),
            () => {
                p._.unsubscribe(ex.jej.FRIENDS_SIDEBAR_RESIZED, e);
            }
        );
    }, []);
    let { collapsed: n } = i.useContext(v),
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
    (0, nA.i4)(c, x);
    let h = n
        ? (0, l.jsx)(nZ, {})
        : "search" === e
          ? (0, l.jsx)(nX, { isSearching: !0, setActivePopout: t, contentWidthRef: o })
          : (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(nW, {
                        compact: r,
                        contentWidthRef: o,
                        isPopoutOpen: "groupConfig" === e,
                        setActivePopout: t,
                    }),
                    (0, l.jsxs)(E.B, {
                        direction: "horizontal",
                        align: "center",
                        fullWidth: !1,
                        ref: d,
                        children: [
                            (0, l.jsx)(nX, { isSearching: !1, setActivePopout: t, contentWidthRef: o }),
                            (0, l.jsx)(nY, { popoutPosition: "bottom" }),
                            s ? null : (0, l.jsx)(nH, {}),
                        ],
                    }),
                ],
            });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(nW, { ghost: !0, ref: u }),
            (0, l.jsx)(E.B, {
                direction: "horizontal",
                fullWidth: !1,
                justify: n ? "center" : "space-between",
                padding: 8,
                className: nU.wx,
                ref: c,
                children: h,
            }),
        ],
    });
}
function nW(e) {
    let { compact: t = !1, ghost: n = !1, contentWidthRef: s, isPopoutOpen: a = !1, setActivePopout: o, ref: c } = e,
        u = i.useRef(null),
        { analyticsLocations: d } = (0, h.Ay)();
    function x() {
        o?.(null);
    }
    let f = t
            ? (0, l.jsx)(tJ.FriendsIcon, { size: "xs", color: "var(--icon-default)" })
            : (0, l.jsx)(D.E, {
                  variant: "heading-sm/medium",
                  tag: "span",
                  children: ef.intl.string(eh.default["7kJd9e"]),
              }),
        m = (0, l.jsx)(S.D, {
            className: r()(nU.Iw, { [nU.qy]: n }),
            "aria-label": ef.intl.string(eh.default["7kJd9e"]),
            "aria-hidden": n,
            "aria-haspopup": n ? void 0 : "menu",
            "aria-expanded": n ? void 0 : a,
            onClick: function () {
                !n &&
                    (o?.(a ? null : "groupConfig"),
                    a || (0, I.BJ)({ button: I.FT.GROUPING_MODE_SELECT, analyticsLocations: d }));
            },
            innerRef: c ?? u,
            children: (0, l.jsxs)(E.B, {
                direction: "horizontal",
                gap: 4,
                align: "center",
                padding: { top: 6, bottom: 6, left: 8, right: 8 },
                className: nU.$E,
                children: [f, (0, l.jsx)(ty.ChevronSmallDownIcon, { color: "var(--text-default)", size: "sm" })],
            }),
        });
    if (n) return m;
    let g = (0, l.jsx)(V.Y, {
        targetElementRef: u,
        shouldShow: a,
        onRequestClose: x,
        position: "bottom",
        align: "left",
        renderPopout: () => (0, l.jsx)(ny, { width: s?.current, closePopout: x }),
        children: () => m,
    });
    return a ? g : (0, l.jsx)(R.m, { text: ef.intl.string(eh.default.wvbB3Z), asContainer: !0, children: g });
}
function nZ() {
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
        ((0, I.RQ)({ open: !0, source: I.TY.SIDEBAR_HEADER_BUTTON, analyticsLocations: s }),
            u.A.setFriendsSidebarCollapsed(!1));
    }
    return (0, l.jsx)(V.Y, {
        targetElementRef: e,
        shouldShow: t,
        onRequestClose: a,
        position: "bottom",
        renderPopout: () => (0, l.jsx)(n$, { onClose: a }),
        children: () =>
            (0, l.jsx)(nQ, {
                buttonRef: e,
                icon: nI.PanelClosedIcon,
                label: ef.intl.string(eh.default["Dr/+ku"]),
                onContextMenu: r,
                onClick: o,
            }),
    });
}
function n$(e) {
    let { onClose: t } = e;
    return (0, l.jsxs)(E.B, {
        gap: 4,
        padding: 8,
        fullWidth: !1,
        className: nU.QG,
        children: [
            (0, l.jsx)(nq, {}),
            (0, l.jsx)(nK, { onClose: t }),
            (0, l.jsx)(nY, { popoutPosition: "left", tooltipPosition: "left" }),
        ],
    });
}
function nq() {
    let e = i.useRef(null),
        [t, n] = i.useState(!1),
        { analyticsLocations: s } = (0, h.Ay)();
    function r() {
        n(!1);
    }
    function a() {
        (t || (0, I.BJ)({ button: I.FT.GROUPING_MODE_SELECT, analyticsLocations: s }), n(!t));
    }
    return (0, l.jsx)(V.Y, {
        targetElementRef: e,
        shouldShow: t,
        onRequestClose: r,
        position: "left",
        renderPopout: () => (0, l.jsx)(ny, { closePopout: r }),
        children: () =>
            (0, l.jsx)(nQ, {
                buttonRef: e,
                icon: nC.FiltersHorizontalIcon,
                label: ef.intl.string(eh.default["i+986w"]),
                tooltipPosition: "left",
                onClick: a,
            }),
    });
}
function nK(e) {
    let { onClose: t } = e,
        n = i.useRef(null),
        [s, r] = i.useState(!1),
        { analyticsLocations: a } = (0, h.Ay)();
    function o() {
        (r(!1), t?.());
    }
    function c() {
        (s || (0, I.BJ)({ button: I.FT.SEARCH, analyticsLocations: a }), r(!s));
    }
    return (0, l.jsx)(V.Y, {
        targetElementRef: n,
        shouldShow: s,
        onRequestClose: o,
        position: "left",
        renderPopout: () => (0, l.jsx)(nz, { closePopout: o }),
        children: () =>
            (0, l.jsx)(nQ, {
                buttonRef: n,
                icon: nb.MagnifyingGlassIcon,
                label: ef.intl.string(eh.default["60M8Ae"]),
                tooltipPosition: "left",
                onClick: c,
            }),
    });
}
function nX(e) {
    let { isSearching: t, setActivePopout: n, contentWidthRef: s } = e,
        r = i.useRef(null),
        [a, o] = i.useState(""),
        { analyticsLocations: c } = (0, h.Ay)();
    function u() {
        (n(null), o(""));
    }
    return t
        ? (0, l.jsx)(V.Y, {
              targetElementRef: r,
              shouldShow: !0,
              onRequestClose: u,
              position: "bottom",
              align: "center",
              nudgeAlignIntoViewport: !1,
              renderPopout: () => (0, l.jsx)(nB, { query: a, width: s.current, closePopout: u }),
              children: () =>
                  (0, l.jsx)("div", {
                      ref: r,
                      className: nU.wB,
                      children: (0, l.jsx)(nv.I, {
                          autoFocus: !0,
                          "aria-label": ef.intl.string(eh.default["60M8Ae"]),
                          placeholder: ef.intl.string(ef.t.lLDtTK),
                          query: a,
                          onChange: o,
                          onClear: () => o(""),
                          size: "sm",
                      }),
                  }),
          })
        : (0, l.jsx)(nQ, {
              icon: nb.MagnifyingGlassIcon,
              label: ef.intl.string(eh.default["60M8Ae"]),
              onClick: function () {
                  (n("search"), (0, I.BJ)({ button: I.FT.SEARCH, analyticsLocations: c }));
              },
          });
}
function nY(e) {
    let { popoutPosition: t, tooltipPosition: n, onClose: i } = e,
        { analyticsLocations: s } = (0, h.Ay)();
    return (0, l.jsx)(nl, {
        position: t,
        onClose: i,
        children: (e) => {
            let { buttonRef: t, onClick: i, showPopout: r } = e;
            return (0, l.jsx)(nQ, {
                buttonRef: t,
                icon: t6.UserPlusIcon,
                label: ef.intl.string(eh.default.au4mU4),
                tooltipPosition: n,
                onClick: () => {
                    (r || (0, I.BJ)({ button: I.FT.ADD_FRIEND, analyticsLocations: s }), i());
                },
            });
        },
    });
}
function nQ(e) {
    let { icon: t, label: n, onClick: s, onContextMenu: r, tooltipPosition: a, buttonRef: o } = e,
        c = i.useRef(null),
        u = o ?? c;
    return (0, l.jsx)(R.m, {
        text: n,
        position: a,
        targetElementRef: u,
        anchorRef: u,
        children: (0, l.jsx)(S.D, {
            "aria-label": n,
            onClick: s,
            onContextMenu: r,
            innerRef: u,
            className: nU.x6,
            children: (0, l.jsx)(t, { size: "sm", color: "currentColor" }),
        }),
    });
}
var nJ = n(45863);
function n0() {
    let e = i.useRef(null),
        t = i.useRef(null),
        n = i.useRef(!1),
        s = i.useRef(0),
        C = (0, A.c)(),
        { isHoveringOrFocusing: N } = (0, f.A)(e),
        { appBarToggleEnabled: E } = j.A.useConfig({ location: "FriendsSidebar" }),
        { analyticsLocations: R } = (0, h.Ay)(x.A.FRIENDS_SIDEBAR);
    i.useEffect(() => b, []);
    let S = i.useCallback((n) => {
        ((s.current = n),
            null != e.current &&
                ((e.current.style.width = `${n}px`),
                e.current.style.setProperty("--custom-friends-sidebar-width", `${n}px`)),
            t.current?.setAttribute("aria-valuenow", `${n}`));
    }, []);
    i.useLayoutEffect(() => {
        n.current || S(C ? 64 : 280);
    }, [C, S]);
    let y = i.useCallback(
            (e) => {
                S(e);
                let t = e < 200;
                t !== C &&
                    ((0, I.RQ)({ open: !t, source: I.TY.RESIZE_HANDLE, analyticsLocations: R }),
                    (0, a.flushSync)(() => u.A.setFriendsSidebarCollapsed(t)));
            },
            [S, C, R],
        ),
        k = i.useCallback(() => {
            ((n.current = !0), t.current?.classList?.add(nJ.cB), p._.dispatch(ex.jej.FRIENDS_SIDEBAR_RESIZED));
        }, []),
        D = i.useCallback((e) => {
            ((n.current = !1), t.current?.setAttribute("aria-valuenow", `${e}`), t.current?.classList?.remove(nJ.cB));
        }, []),
        P = i.useCallback((e) => (E ? Math.min(Math.max(e, 280), 320) : e < 200 ? 64 : Math.min(e, 320)), [E]),
        w = (0, d.A)({
            resizableDomNodeRef: e,
            minDimension: E ? 200 : 64,
            maxDimension: 320,
            orientation: d.R.HORIZONTAL_LEFT,
            onElementResizeStart: k,
            onApplyDimension: y,
            onElementResizeEnd: D,
            getClampedValue: P,
        }),
        T = i.useCallback(
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
                        l = E ? 280 : 64;
                        break;
                    case "End":
                        l = 320;
                        break;
                    default:
                        return;
                }
                t.preventDefault();
                let i = P(l);
                ((n.current = !0), y(i), (n.current = !1));
            },
            [E, P, y],
        ),
        _ = (0, g.NC)(),
        G = i.useMemo(() => ({ collapsed: C, hovered: N }), [C, N]);
    return (0, l.jsx)(m.A.Provider, {
        value: void 0,
        children: (0, l.jsx)(h.f5, {
            value: R,
            children: (0, l.jsx)(o.N, {
                theme: _,
                children: (n) =>
                    (0, l.jsx)(v.Provider, {
                        value: G,
                        children: (0, l.jsxs)("div", {
                            ref: e,
                            className: r()(nJ.kL, n),
                            children: [
                                (0, l.jsx)(c.vN, {
                                    children: (0, l.jsx)("div", {
                                        ref: t,
                                        role: "separator",
                                        tabIndex: 0,
                                        "aria-orientation": "vertical",
                                        "aria-label": ef.intl.string(eh.default["F3+Xei"]),
                                        "aria-valuemin": E ? 280 : 64,
                                        "aria-valuemax": 320,
                                        className: nJ.Di,
                                        onMouseDown: w,
                                        onKeyDown: T,
                                    }),
                                }),
                                (0, l.jsx)(nV, {}),
                                (0, l.jsxs)("div", {
                                    className: nJ.rf,
                                    children: [
                                        (0, l.jsx)(eT, {}),
                                        (0, l.jsx)(c.xp, { containerRef: e, children: (0, l.jsx)(np, {}) }),
                                    ],
                                }),
                            ],
                        }),
                    }),
            }),
        }),
    });
}
