"use strict";
n.r(t),
    n.d(t, {
        OAuth2AuthorizeModal: () => e3,
        getOAuth2AuthorizeProps: () => tt,
        OAuth2AuthorizePage: () => e2,
        openOAuth2Modal: () => te,
        openOAuth2ModalWithCreateGuildModal: () => e9,
        useOAuth2AuthorizeForm: () => e7,
    }),
    n(323874),
    n(14289),
    n(35956),
    n(321073);
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(873263),
    l = n(172218),
    u = n(935399),
    c = n(607399),
    d = n(485845),
    _ = n(179771),
    h = n(136722),
    f = n(365199),
    E = n(815390),
    p = n(17928),
    m = n(192308),
    g = n(821609),
    A = n(462887),
    I = n(289873),
    T = n(834730),
    S = n(534514),
    N = n(885574),
    C = n(933832),
    y = n(708988),
    O = n(228366),
    R = n(830215),
    v = n(803306),
    b = n(736653),
    L = n(573648),
    D = n(95561),
    w = n(269815),
    P = n(627363),
    M = n(587895),
    x = n(224750),
    U = n(62447),
    k = n(854378),
    G = n(968309),
    V = n(268218),
    F = n(272613),
    B = n(736056),
    H = n(14509),
    j = n(976860),
    W = n(570962),
    Y = n(395671),
    K = n(889227),
    $ = n(280450),
    z = n(30370),
    q = n(287809),
    Z = n(486020),
    X = n(488926),
    Q = n(998218),
    J = n(123677),
    ee = n(501592),
    et = n(652215),
    en = n(375708);
function ei(e, t) {
    return null != e && (0, ee.K)(e) && !1 === t;
}
var er = n(716965),
    es = n(376092),
    ea = n(647053),
    eo = n(671523),
    el = n(998445),
    eu = n(11023),
    ec = n(173936),
    ed = n(194261),
    e_ = n(215026),
    eh = n(406810),
    ef = n(430392),
    eE = n(231483),
    ep = n(20015),
    em = n(935208),
    eg = n(348418);
function eA(e) {
    let t,
        {
            application: n,
            scopes: r,
            redirectUri: s,
            approximateGuildCount: a,
            isEmbeddedFlow: o,
            disclosures: l,
            connectedAccount: u,
        } = e,
        c = new Date(em.default.extractTimestamp(n.id)),
        d = (0, ea.i4)(r),
        h = (0, ep.n)(n, et.gfo.EMBEDDED);
    if (null != s && !h && !o)
        try {
            let e = new URL(s);
            t = null != e.host && e.host.length > 0 ? e.origin : e.href;
        } catch (e) {
            t = null;
        }
    return (0, i.jsxs)("div", {
        className: eg.B_,
        children: [
            null != t ? (0, i.jsx)(eI, { icon: ec.q, text: en.intl.format(en.t["5k5OKD"], { origin: t }) }) : null,
            (0, i.jsx)(eI, {
                icon: ed.X,
                text: (function (e) {
                    let t = (0, U.t)(e);
                    if (null != e.privacy_policy_url && null != e.terms_of_service_url) {
                        let n = t ? en.t.yVfotv : en.t.rxlyKL;
                        return en.intl.format(n, {
                            application: e.name,
                            privacyPolicyURL: e.privacy_policy_url,
                            termsOfServiceURL: e.terms_of_service_url,
                            discordPrivacyPolicyURL: et.X7G.PRIVACY,
                        });
                    }
                    if (null != e.privacy_policy_url) {
                        let n = t ? en.t.pYVSah : en.t.TBvmM2;
                        return en.intl.format(n, {
                            application: e.name,
                            privacyPolicyURL: e.privacy_policy_url,
                            discordPrivacyPolicyURL: et.X7G.PRIVACY,
                        });
                    }
                    if (null != e.terms_of_service_url) {
                        let n = t ? en.t.nBLOp5 : en.t["q0T/Q1"];
                        return en.intl.format(n, {
                            application: e.name,
                            termsOfServiceURL: e.terms_of_service_url,
                            discordPrivacyPolicyURL: et.X7G.PRIVACY,
                        });
                    }
                    let n = t ? en.t["8LemYv"] : en.t["3Ywek3"];
                    return en.intl.format(n, { application: e.name, discordPrivacyPolicyURL: et.X7G.PRIVACY });
                })(n),
            }),
            null != u ? (0, i.jsx)(eI, { icon: e_.w, text: en.intl.string(en.t["8qui3M"]) }) : null,
            (0, i.jsx)(eI, { icon: eh.O, text: en.intl.formatToPlainString(en.t["+1bjc8"], { date: c }) }),
            r.includes(_.F.BOT) && null != a
                ? (0, i.jsx)(eI, { icon: ef.C, text: en.intl.formatToPlainString(en.t.UHGHSP, { guildCount: a }) })
                : null,
            (0, i.jsx)(eI, { icon: eE.l, text: d }),
            null != l
                ? l.map((e) => {
                      let t = (0, x.wI)(e),
                          n = (function (e) {
                              switch (e) {
                                  case x.yW.IP_LOCATION:
                                      return el.L;
                                  case x.yW.DISPLAYS_ADVERTISEMENTS:
                                      return eu.J;
                                  default:
                                      return null;
                              }
                          })(e);
                      return null != n && null != t ? (0, i.jsx)(eI, { icon: n, text: t }) : null;
                  })
                : null,
        ],
    });
}
function eI(e) {
    let { icon: t, text: n } = e;
    return (0, i.jsxs)("div", {
        className: eg.f_,
        children: [
            (0, i.jsx)(t, { className: eg.u7, color: "currentColor" }),
            (0, i.jsx)(T.E, { variant: "text-xs/normal", className: eg.z9, children: n }),
        ],
    });
}
var eT = n(214947),
    eS = n(845798),
    eN = n(687966),
    eC = n(625903),
    ey = n(975571),
    eO = n(645650);
function eR(e) {
    let t,
        { application: n, accountScopes: r } = e,
        s = [],
        a = (0, U.A)(n);
    return (r.includes(_.F.SDK_SOCIAL_LAYER)
        ? ((t = a
              ? en.intl.format(en.t.GxjwZM, {
                    applicationName: n.name,
                    learnMoreURL: ey.A.getArticleURL(et.MVz.SOCIAL_LAYER_CONNECTIONS),
                })
              : en.intl.format(en.t.DfBeUq, { learnMoreURL: ey.A.getArticleURL(et.MVz.SOCIAL_LAYER_CONNECTIONS) })),
          s.push(
              {
                  icon: eT.$,
                  text: a
                      ? en.intl.formatToPlainString(en.t.z9peav, { maxFriends: et.$4X })
                      : en.intl.formatToPlainString(en.t.WNKzo9, { maxFriends: et.$4X }),
              },
              { icon: eS.S, text: a ? en.intl.string(en.t.daY6xj) : en.intl.string(en.t.j7peBh) },
              { icon: eN._, text: a ? en.intl.string(en.t["/bdaNN"]) : en.intl.string(en.t["feD3+i"]) },
              { icon: eC.Z, text: a ? en.intl.string(en.t.mSqazC) : en.intl.string(en.t.YFFVM1) },
          ))
        : r.includes(_.F.SDK_SOCIAL_LAYER_PRESENCE) &&
          ((t = a
              ? en.intl.format(en.t.GxjwZM, {
                    applicationName: n.name,
                    learnMoreURL: ey.A.getArticleURL(et.MVz.SOCIAL_LAYER_CONNECTIONS),
                })
              : en.intl.format(en.t.DfBeUq, { learnMoreURL: ey.A.getArticleURL(et.MVz.SOCIAL_LAYER_CONNECTIONS) })),
          s.push(
              {
                  icon: eT.$,
                  text: a
                      ? en.intl.formatToPlainString(en.t.z9peav, { maxFriends: et.$4X })
                      : en.intl.formatToPlainString(en.t.WNKzo9, { maxFriends: et.$4X }),
              },
              { icon: eN._, text: a ? en.intl.string(en.t["/bdaNN"]) : en.intl.string(en.t["feD3+i"]) },
              { icon: eC.Z, text: a ? en.intl.string(en.t.mSqazC) : en.intl.string(en.t.YFFVM1) },
          )),
    0 === s.length)
        ? null
        : (0, i.jsxs)("div", {
              className: eO.b9,
              children: [
                  null != t ? (0, i.jsx)(S.D, { variant: "heading-sm/normal", className: eO.a9, children: t }) : null,
                  s.map((e, t) => {
                      let { icon: n, text: r } = e;
                      return (0, i.jsx)(ev, { icon: n, text: r }, t);
                  }),
              ],
          });
}
function ev(e) {
    let { icon: t, text: n } = e;
    return (0, i.jsxs)("div", {
        className: eO.f_,
        children: [
            (0, i.jsx)(t, { className: eO.u7, color: "currentColor" }),
            (0, i.jsx)(T.E, { variant: "text-md/normal", className: eO.u0, children: n }),
        ],
    });
}
var eb = n(285796),
    eL = n(628284),
    eD = n(444927),
    ew = n(415122);
function eP(e) {
    let { text: t, error: n, isFake: r } = e,
        s = !0 === r ? en.intl.string(en.t.OX8EMU) : en.intl.string(en.t["0lpCFG"]),
        o = `${s}: ${t}${null != n ? `. ${n}` : ""}`;
    return (0, i.jsxs)("div", {
        className: ew.z8,
        role: "group",
        "aria-label": o,
        children: [
            !0 === r
                ? (0, i.jsx)(eb.a, {
                      size: "md",
                      color: "currentColor",
                      className: a()(ew.Kk, ew.RC),
                      "aria-hidden": !0,
                  })
                : (0, i.jsx)(eL.y, {
                      size: "md",
                      color: "currentColor",
                      className: a()(ew.Kk, ew.sc),
                      "aria-hidden": !0,
                  }),
            (0, i.jsxs)("div", {
                className: ew.rv,
                "aria-hidden": !0,
                children: [
                    (0, i.jsx)(T.E, {
                        variant: "text-md/normal",
                        color: !0 === r ? "text-muted" : void 0,
                        children: t,
                    }),
                    null != n
                        ? (0, i.jsx)(T.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: n })
                        : null,
                ],
            }),
        ],
    });
}
function eM(e) {
    let {
            application: t,
            accountScopes: n,
            requestedScopes: r,
            integrationType: s,
            errors: o,
            isTrustedName: l = !1,
            noDivider: u = !1,
        } = e,
        c = (0, eD.A)(() => ea.O_[Math.floor(Math.random() * ea.O_.length)]);
    if (0 === n.length) return null;
    let h = c(),
        f = l ? en.t.PZpY9c : en.t["1Hz+Sl"],
        E = s === d.b.USER_INSTALL && r.includes(_.F.APPLICATIONS_COMMANDS);
    return (0, i.jsxs)("div", {
        className: a()(ew.Wu, u ? ew.bc : void 0),
        children: [
            (0, i.jsx)(S.D, {
                variant: "heading-sm/normal",
                className: ew.a9,
                children: en.intl.format(f, { application: t?.name ?? "" }),
            }),
            n
                .map((e) =>
                    (0, ea.rY)(e, n).map((t, n) =>
                        (0, i.jsx)(eP, { text: t, error: 0 === n ? o?.[e]?.[0] : void 0 }, `${e}-${n}`),
                    ),
                )
                .flat(),
            E && (0, i.jsx)(eP, { text: en.intl.string(en.t.Ls2XRq) }),
            (0, i.jsx)(eP, { text: h, isFake: !0 }),
        ],
    });
}
var ex = n(150934),
    eU = n(789645),
    ek = n(751645);
function eG(e) {
    let { application: t, permissions: n, deniedPermissions: s, onPermissionsChange: a, guild: o } = e,
        l = r.useMemo(() => h.B8(o.permissions), [o.permissions]);
    r.useEffect(() => {
        a(!1, h.pb(n, l));
    }, [l, a, n]);
    let u = es.Q.filter((e) => h.zy(n, e)),
        c = u
            .filter((e) => !h.zy(l, e))
            .map((e) => {
                let t = (0, es.hx)(e),
                    n = !h.zy(s, e);
                return (0, i.jsx)(
                    "li",
                    {
                        className: ek.EK,
                        children: (0, i.jsx)(ex.S, { checked: n, onChange: (t) => a(t, e), label: t }),
                    },
                    String(e),
                );
            }),
        d = u
            .filter((e) => h.zy(l, e))
            .map((e) => {
                let t = (0, es.hx)(e);
                return (0, i.jsxs)(
                    "li",
                    {
                        className: ek.EK,
                        children: [
                            (0, i.jsx)("div", {
                                className: ek.nW,
                                children: (0, i.jsx)(eU.P, { size: "md", color: "currentColor", className: ek.Kk }),
                            }),
                            (0, i.jsx)(T.E, { variant: "text-md/normal", children: t }),
                        ],
                    },
                    String(e),
                );
            });
    return (0, i.jsxs)("div", {
        className: ek.AS,
        children: [
            c.length > 0
                ? (0, i.jsxs)("div", {
                      children: [
                          (0, i.jsx)(T.E, {
                              variant: "text-sm/medium",
                              color: "text-default",
                              children: en.intl.format(en.t.sOaT2j, { applicationName: t.name, guildName: o.name }),
                          }),
                          (0, i.jsx)("ul", { className: ek.RH, children: c }),
                      ],
                  })
                : null,
            d.length > 0
                ? (0, i.jsxs)("div", {
                      children: [
                          (0, i.jsx)(T.E, {
                              variant: "text-sm/medium",
                              color: "text-default",
                              children: en.intl.format(en.t.fsOkF4, { applicationName: t.name }),
                          }),
                          (0, i.jsx)("ul", { className: ek.RH, children: d }),
                      ],
                  })
                : null,
        ],
    });
}
var eV = n(783878),
    eF = n(551280);
function eB(e) {
    let { error: t, selectedGuildId: n, onGuildChange: r, guilds: s, disabled: a = !1 } = e,
        o = s
            .filter((e) => h.zy(e.permissions, et.xBc.MANAGE_GUILD))
            .map((e) => ({ id: e.id, value: e.id, label: e.name }));
    return (0, i.jsx)("div", {
        className: eF.g,
        children: (0, i.jsx)(eV.Z, {
            label: en.intl.string(en.t["1DXFFd"]),
            helperText: en.intl.format(en.t.t9Jm9o, {}),
            errorMessage: t,
            selectionMode: "single",
            maxOptionsVisible: 5,
            placeholder: en.intl.string(en.t.oM4E1A),
            options: o,
            onSelectionChange: r,
            disabled: a,
            value: n ?? void 0,
        }),
    });
}
var eH = n(665260),
    ej = n(939249),
    eW = n(97808),
    eY = n(709066),
    eK = n(566615),
    e$ = n(778712),
    ez = n(510523);
function eq(e) {
    let { user: t, application: n, bot: s, accountScopes: a, showLogout: o, location: l, scopes: u } = e,
        c = (0, eK.i)(),
        d = Z.Ay.getApplicationIconURL({ id: n.id, icon: n.icon }),
        _ = Z.Ay.getUserAvatarURL(t),
        h = r.useMemo(
            () =>
                u.some((e) => (0, ea.RM)(e))
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(T.E, {
                                  variant: "text-lg/normal",
                                  color: "text-default",
                                  children: en.intl.string(en.t.uT1CPa),
                              }),
                              (0, i.jsx)(S.D, { variant: "heading-xxl/bold", color: "text-strong", children: n.name }),
                          ],
                      })
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsxs)(T.E, {
                                  variant: "text-lg/bold",
                                  color: "text-strong",
                                  children: [
                                      n.name,
                                      null != s
                                          ? (0, i.jsx)(eY.A, {
                                                className: ez.AO,
                                                verified:
                                                    null != s.public_flags &&
                                                    (0, eH.Lt)(s.public_flags, et.nhx.VERIFIED_BOT),
                                            })
                                          : null,
                                  ],
                              }),
                              a.length > 0
                                  ? (0, i.jsx)(T.E, {
                                        variant: "text-md/normal",
                                        color: "text-default",
                                        children: en.intl.string(en.t.jFbDnJ),
                                    })
                                  : (0, i.jsx)(T.E, {
                                        variant: "text-md/normal",
                                        color: "text-default",
                                        children: en.intl.string(en.t["X+Fdpo"]),
                                    }),
                          ],
                      }),
            [a.length, n, s, u],
        );
    return (0, i.jsxs)("header", {
        id: c,
        className: ez.wx,
        children: [
            (0, i.jsxs)("div", {
                className: ez.Y,
                children: [
                    (0, i.jsx)(eW.eu, { className: ez.my, src: d, size: e$._3.SIZE_80, "aria-label": n.name }),
                    (0, i.jsxs)("div", {
                        className: ez.I5,
                        children: [
                            (0, i.jsx)("div", { className: ez.pw }),
                            (0, i.jsx)("div", { className: ez.pw }),
                            (0, i.jsx)("div", { className: ez.pw }),
                        ],
                    }),
                    (0, i.jsx)(eW.eu, { className: ez.my, src: _, size: e$._3.SIZE_80, "aria-label": t.username }),
                ],
            }),
            h,
            o
                ? (0, i.jsx)("div", {
                      className: ez.Ny,
                      children: (0, i.jsxs)(T.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: [
                              en.intl.format(en.t.qRvpYU, {
                                  userHook: () =>
                                      (0, i.jsxs)(
                                          T.E,
                                          {
                                              className: ez.ZD,
                                              variant: "text-sm/normal",
                                              children: [
                                                  t.username,
                                                  !t.hasUniqueUsername() &&
                                                      (0, i.jsx)(T.E, {
                                                          className: ez.Jb,
                                                          variant: "text-sm/normal",
                                                          children: `#${t.discriminator}`,
                                                      }),
                                              ],
                                          },
                                          t.id,
                                      ),
                              }),
                              (0, i.jsx)(ej.D, {
                                  tag: "a",
                                  className: ez.Pg,
                                  onClick: () => (0, er.Vh)(l, "oauth2_logout"),
                                  children: en.intl.string(en.t["yV/hjC"]),
                              }),
                          ],
                      }),
                  })
                : null,
        ],
    });
}
var eZ = n(321987),
    eX = n(595244);
function eQ(e) {
    let { selectedGuildId: t, selectedChannelId: n, onChannelChange: s, error: a } = e,
        [o, l] = r.useState(null),
        u = r.useRef(!1);
    if (
        (r.useEffect(() => {
            async function e(e) {
                let n = await (0, er.$Q)(e);
                t === e &&
                    (n.sort((e, t) => e.name.localeCompare(t.name)), l({ guildId: e, channels: n }), (u.current = !0));
            }
            l(null), null == t ? s(null) : e(t);
        }, [s, t]),
        r.useEffect(() => {
            !u.current || (null == o ? null != n && s(null) : o.channels.some((e) => e.id === n) || s(null));
        }, [o, s, n, t]),
        null == t)
    )
        return null;
    let c =
        null == o || o.guildId !== t ? [] : (o?.channels ?? []).map((e) => ({ id: e.id, value: e.id, label: e.name }));
    return (0, i.jsx)("div", {
        className: eF.g,
        children: (0, i.jsx)(eV.Z, {
            label: en.intl.string(en.t["8qKd+J"]),
            helperText: en.intl.string(en.t.kQXMfN),
            selectionMode: "single",
            maxOptionsVisible: 5,
            errorMessage: a,
            onSelectionChange: s,
            placeholder: en.intl.string(en.t["Re/64R"]),
            options: c,
            value: n ?? void 0,
        }),
    });
}
var eJ = n(613057),
    e0 = n(636663);
let e1 = (0, V.Fe)({
    createPromise: () =>
        Promise.all([
            n.e("99796"),
            n.e("97270"),
            n.e("71133"),
            n.e("78050"),
            n.e("80262"),
            n.e("56385"),
            n.e("91220"),
            n.e("58405"),
        ]).then(n.bind(n, 991054)),
    webpackId: 991054,
});
function e2() {
    let e = (0, o.zy)(),
        t = r.useMemo(() => (0, J._)(e.search), [e.search]);
    (0, w.A)();
    let s = !e.search.includes("response_type"),
        [a, l] = r.useState(!1),
        u = r.useRef(!1),
        [d, _] = r.useState(null),
        h = !c.Fr && !a && (s || !$.default.isAuthenticated());
    if (
        (r.useEffect(() => {
            if (c.Ct && s) {
                let t = new URL("discord://action/oauth2/authorize");
                (t.search = e.search), window.open(t.toString(), "_self");
            } else
                c.Fr ||
                    (!s && $.default.isAuthenticated()) ||
                    u.current ||
                    ((u.current = !0),
                    Promise.resolve()
                        .then(n.bind(n, 129014))
                        .then((t) => {
                            let { default: n } = t;
                            if (s)
                                n.request(et.e$_.DEEP_LINK, { type: eJ.XK.OAUTH2, params: { search: e.search } })
                                    .then((e) => {
                                        _(e ?? !1);
                                    })
                                    .catch(() => _(!1))
                                    .then(() => n.disconnect());
                            else {
                                _(!0);
                                let t = new URLSearchParams(e.search);
                                n.request(et.e$_.AUTHORIZE, {
                                    client_id: t.get("client_id"),
                                    scope: t.get("scope"),
                                    response_type: t.get("response_type"),
                                    redirect_uri: t.get("redirect_uri"),
                                    code_challenge: t.get("code_challenge"),
                                    code_challenge_method: t.get("code_challenge_method"),
                                    state: t.get("state"),
                                    permissions: t.get("permissions"),
                                    guild_id: t.get("guild_id"),
                                    channel_id: t.get("channel_id"),
                                    prompt: t.get("prompt"),
                                    disable_guild_select: t.get("disable_guild_select"),
                                    integration_type: t.get("integration_type"),
                                    nonce: t.get("nonce"),
                                })
                                    .then((e) => {
                                        let { location: t } = e;
                                        t && (window.location.href = t);
                                    })
                                    .catch(() => _(!1))
                                    .then(() => n.disconnect());
                            }
                        }));
        }, [e.search, s]),
        h && !1 !== d)
    ) {
        let e;
        return (
            (e =
                !0 === d
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(k.hE, { children: en.intl.string(en.t.csrAMJ) }),
                              (0, i.jsx)(k.tK, {
                                  children: s ? en.intl.string(en.t["m1+IBn"]) : en.intl.string(en.t.kRzrSO),
                              }),
                              (0, i.jsx)(g.$, {
                                  onClick: () => l(!0),
                                  variant: "primary",
                                  text: en.intl.string(en.t.fIv16B),
                              }),
                          ],
                      })
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(k.hE, { children: en.intl.string(en.t["Z+hCVU"]) }),
                              (0, i.jsx)(I.y, {}),
                          ],
                      })),
            (0, i.jsx)(eZ.$, { removeChildWrapper: !0, children: (0, i.jsx)("div", { className: e0.ah, children: e }) })
        );
    }
    return (0, i.jsx)(eZ.$, {
        removeChildWrapper: !0,
        children: (0, i.jsx)(e3, {
            transitionState: E.i.ENTERED,
            ...t,
            showLogout: !0,
            isExternalStandaloneOAuthPage: !0,
            hideHeader: !0,
        }),
    });
}
function e3(e) {
    let {
            label: t,
            title: n,
            subtitle: r,
            header: s,
            body: o,
            actions: l,
            nextStep: u,
            appDetails: c,
            hasContentBackground: d,
            noPadding: _,
            modalSize: h,
            obscured: f,
        } = e7({ ...e }),
        E =
            null != s || null != o || null != c
                ? (0, i.jsxs)("div", {
                      className: e0.Gq,
                      children: [
                          s,
                          (0, i.jsx)("div", {
                              className: e0.FG,
                              children: (0, i.jsxs)("div", {
                                  className: a()(e0.Qs, d ? e0.cw : null, _ ? e0.pN : null),
                                  children: [o, null == u ? c : null],
                              }),
                          }),
                      ],
                  })
                : null;
    return (0, i.jsx)(eZ.f, {
        ...e,
        onClose: () => Promise.resolve(e.onClose?.()),
        size: h,
        actions: l,
        title: n,
        subtitle: r,
        "aria-label": t,
        children: (0, i.jsx)(W.A, { className: e0.dx, obscured: !0 === f, children: E }),
    });
}
function e6(e) {
    let { clientId: t, platformType: n, platformName: s } = e,
        a = (0, p.bG)([M.A], () => M.A.getApplication(t), [t]),
        o = (0, p.bG)([$.default, q.default], () => (null != $.default.getId() ? q.default.getCurrentUser() : null)),
        l = (0, b.Ay)(),
        u = L.A.get(n),
        c = null != u ? ((0, A.q)(l) ? u.icon.lightSVG : u.icon.darkSVG) : null,
        d = null != a ? Z.Ay.getApplicationIconURL({ id: a.id, icon: a.icon }) : null,
        _ = null != o ? Z.Ay.getUserAvatarURL(o) : null,
        h = a?.name ?? "";
    return (
        r.useEffect(() => {
            P.Ay.fetchApplication(t);
        }, [t]),
        (0, i.jsxs)("div", {
            className: e0.E4,
            children: [
                (0, i.jsxs)("div", {
                    className: e0.z1,
                    children: [
                        (0, i.jsxs)("div", {
                            className: e0.q3,
                            children: [
                                null != d
                                    ? (0, i.jsx)("img", { src: d, alt: h, className: e0.gO })
                                    : (0, i.jsx)("div", { className: e0.gO }),
                                (0, i.jsx)(f.j, { size: "md", color: "currentColor" }),
                                null != _ && (0, i.jsx)("img", { src: _, alt: "", className: e0.eh }),
                            ],
                        }),
                        (0, i.jsx)(T.E, { variant: "text-lg/normal", children: en.intl.string(en.t.uT1CPa) }),
                        (0, i.jsx)(S.D, { variant: "heading-xl/semibold", children: h }),
                    ],
                }),
                (0, i.jsx)(T.E, {
                    variant: "text-sm/normal",
                    children: en.intl.format(en.t["aJRE/Q"], { applicationName: h, platformName: s }),
                }),
                (0, i.jsxs)("div", {
                    className: e0.eD,
                    children: [
                        null != c && (0, i.jsx)("img", { src: c, alt: "", className: e0.sw }),
                        (0, i.jsx)(T.E, { variant: "text-md/medium", className: e0.PP, children: s }),
                        (0, i.jsx)(g.$, {
                            variant: "primary",
                            size: "sm",
                            onClick: function () {
                                (0, G.A)({ platformType: n, location: "OAuth2 Connect Account Step" });
                            },
                            text: en.intl.string(en.t.S0W8Z5),
                        }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: e0.sT,
                    children: [
                        (0, i.jsx)(N.m, { size: "sm", color: "currentColor", className: e0.Vi }),
                        (0, i.jsx)(T.E, {
                            variant: "text-sm/normal",
                            children: en.intl.format(en.t["8psEFX"], { platformName: s, applicationName: h }),
                        }),
                    ],
                }),
            ],
        })
    );
}
function e4(e) {
    let { platformType: t, platformName: n, connectedAccount: r, applicationName: s } = e,
        a = (0, b.Ay)(),
        o = L.A.get(t),
        l = null != o ? ((0, A.q)(a) ? o.icon.lightSVG : o.icon.darkSVG) : null;
    return (0, i.jsxs)("div", {
        className: e0.E4,
        children: [
            (0, i.jsx)(T.E, {
                variant: "text-sm/normal",
                children: en.intl.format(en.t["+oaRw3"], { platformName: n }),
            }),
            (0, i.jsxs)("div", {
                className: e0.eD,
                children: [
                    null != l && (0, i.jsx)("img", { src: l, alt: "", className: e0.sw }),
                    (0, i.jsxs)("div", {
                        className: e0.mG,
                        children: [
                            (0, i.jsx)(T.E, { variant: "text-md/medium", children: r.name }),
                            (0, i.jsx)(T.E, {
                                variant: "text-xs/normal",
                                children: en.intl.format(en.t.Dkd7sE, { platformName: n, connectedAccountId: r.id }),
                            }),
                        ],
                    }),
                    (0, i.jsx)(C.A, { size: "sm", color: "status-positive" }),
                ],
            }),
            (0, i.jsx)(T.E, {
                variant: "text-sm/normal",
                children: en.intl.format(en.t.pyRNXJ, { applicationName: s }),
            }),
            (0, i.jsx)("div", { className: e0.zd }),
        ],
    });
}
function e5() {
    return (0, i.jsx)("div", { className: e0.g4, children: (0, i.jsx)(I.y, { className: e0.u1 }) });
}
function e7(e) {
    let t,
        n,
        s,
        a,
        c,
        {
            clientId: f,
            responseType: E,
            redirectUri: m,
            codeChallenge: g,
            codeChallengeMethod: A,
            state: I,
            nonce: S,
            prompt: N,
            authorizations: C,
            scopes: b,
            permissions: w,
            guildId: M,
            channelId: k,
            integrationType: G,
            disableGuildSelect: V = !1,
            showLogout: F = !1,
            isTrustedName: H = !1,
            isEmbeddedFlow: W = !1,
            callback: Z,
            callbackWithoutPost: ee,
            onClose: el,
            disclosures: eu,
            isExternalStandaloneOAuthPage: ec = !1,
            isTwoWayLinkDiscordConsent: ed = !1,
            connectedAccountProvider: e_,
        } = e,
        eh = null != G ? C?.get(G) : void 0,
        ef = (0, o.zy)(),
        eE = (0, p.bG)([B.A], () => B.A.hasLoadedExperiments);
    r.useEffect(() => {
        $.default.isAuthenticated() && !eE && R.A.getExperiments();
    }, [eE]);
    let [ep, em] = r.useState(null),
        [eg, eI] = r.useState(null),
        [eT, eS] = r.useState(null),
        [eN, eC] = r.useState(!1),
        [ey, eO] = r.useState(!1),
        ev = ep?.guilds,
        [eb, eL] = r.useState(M ?? null),
        [eD, ew] = r.useState(k ?? null),
        [eP, ex] = r.useState(X.x3),
        eU = (0, p.bG)([z.A], () => (null == e_ ? null : (z.A.getAccounts().find((e) => e.type === e_) ?? null)), [e_]),
        ek = null == e_ || null != eU,
        eV = r.useMemo(() => (ep?.user != null ? new K.A(ep.user) : null), [ep?.user]),
        eF = (0, p.bG)([q.default], () => q.default.getCurrentUser()?.nsfwAllowed),
        eH = (0, U.A)(ep?.application ?? null),
        ej = r.useMemo(() => ev?.find((e) => e.id === eb), [ev, eb]),
        [eW, eY] = r.useState(null),
        eK = r.useMemo(() => null == eh && null == G && (b?.length ?? 0) === 0 && null == m, [eh, b?.length, m, G]),
        [e$, ez] = r.useState(null);
    r.useEffect(() => {
        eK && P.Ay.fetchApplication(f).then((e) => ez(Y.Ay.createFromServer(e)));
    }, [f, eK]);
    let eZ = r.useMemo(
            () => (null == eW ? null : e$?.integrationTypesConfig?.[eW]?.oauth2InstallParams),
            [e$?.integrationTypesConfig, eW],
        ),
        { requestedScopes: eJ, accountScopes: e2 } = r.useMemo(() => {
            let e = eK ? eZ?.scopes : b,
                t = (0, J.e)(e ?? []),
                n = ea.k$.filter((e) => t.includes(e));
            return { requestedScopes: t, accountScopes: n };
        }, [eZ?.scopes, b, eK]),
        e3 = r.useMemo(() => (eK ? h.iu(eZ?.permissions ?? 0) : w) ?? X.x3, [eZ?.permissions, w, eK]),
        e7 = r.useRef(!1),
        [e8, e9] = r.useState(eu ?? []),
        [te, tt] = r.useState(null != eu && eu.length > 0);
    (0, u.Ay)(() => {
        let e = $.default.getAnalyticsToken();
        null != e
            ? O.h.dispatch({ type: "SET_ANALYTICS_TOKEN", analyticsToken: e, userId: $.default.getId() })
            : (0, v.rQ)({ withAnalyticsToken: !0 }).catch(et.tEg);
    }),
        r.useEffect(() => {
            if (!e7.current && null == eu) {
                if (!$.default.isAuthenticated()) return void (0, er.Vh)(ef, "oauth2_error_not_authenticated");
                e();
            }
            async function e() {
                e7.current = !0;
                try {
                    let { disclosures: e, allAcked: t } = await (0, x.vG)(f);
                    tt(!t), e9(e);
                } catch (n) {
                    let { status: e, body: t } = n;
                    if (401 === e) return void (0, er.Vh)(ef, "oauth2_error_failed_disclosures");
                    eS(Error(null != t.message ? t.message : `${Object.keys(t)[0]}: ${Object.values(t)[0]}`));
                } finally {
                    e7.current = !1;
                }
            }
        }, [f, ef, eu, e9, eS, tt, eI]);
    let tn = ei(ep?.application.content_classification ?? e$?.contentClassification, eF),
        ti = r.useCallback(
            async function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                if (null != ee) {
                    eC(!0), ee(e);
                    return;
                }
                if (null == eW) return void eS(Error("No integration type was selected."));
                try {
                    eC(!0);
                    let n = await (0, er.Gq)({
                        authorize: e,
                        clientId: f,
                        scopes: eJ,
                        responseType: E,
                        redirectUri: m,
                        codeChallenge: g,
                        codeChallengeMethod: A,
                        state: I,
                        nonce: S,
                        integrationType: eW,
                        connectedAccountProvider: e_,
                        permissions: h.TF(e3, eP),
                        guildId: eW === d.b.GUILD_INSTALL && null != eb ? eb : void 0,
                        channelId: eW === d.b.GUILD_INSTALL && null != eD ? eD : void 0,
                    });
                    if ((e && (await (0, x.Yx)(f, e8)), null != Z))
                        Z({ application: ep?.application, location: n.location, guild: ej, scopes: eJ, canceled: t }),
                            el?.();
                    else if (null != n.location) {
                        let e = Q.A.toURLSafe(n.location)?.pathname;
                        Q.A.isDiscordUrl(n.location) && e === et.BVt.OAUTH2_AUTHORIZED
                            ? (0, j.pX)(et.BVt.OAUTH2_AUTHORIZED, {
                                  state: { application: ep?.application, guild: ej },
                              })
                            : (window.location = n.location);
                    } else eC(!1);
                } catch (t) {
                    let e = t.body;
                    e?.message != null && "" !== e.message ? eS(Error(e.message)) : eS(e),
                        eI("AUTHORIZE_SCOPES"),
                        eC(!1);
                }
            },
            [ee, Z, ep?.application, ej, el, f, eJ, E, m, g, A, I, S, e3, eP, eb, eW, e_, eD, e8],
        ),
        tr = r.useRef(!1),
        ts = r.useCallback(async () => {
            if (!$.default.isAuthenticated()) return void (0, er.Vh)(ef, "oauth2_error_not_authenticated");
            if (!e7.current && !tr.current) {
                tr.current = !0;
                try {
                    var e;
                    let t =
                            null != eh
                                ? eh
                                : await (0, er.qY)({
                                      clientId: f,
                                      scopes: eJ,
                                      responseType: E,
                                      redirectUri: m,
                                      codeChallenge: g,
                                      codeChallengeMethod: A,
                                      state: I,
                                      nonce: S,
                                      integrationType: eW ?? void 0,
                                      connectedAccountProvider: e_,
                                  }),
                        n = ei(t.application.content_classification, eF);
                    em(
                        ((e = t),
                        null == e.guilds
                            ? e
                            : { ...e, guilds: e.guilds.map((e) => ({ ...e, permissions: h.iu(e.permissions) })) }),
                    ),
                        N !== eo.l.NONE || !t.authorized || te || n || ti(!0),
                        (0, D.zV)(et.HAw.OAUTH2_AUTHORIZE_VIEWED, { application_id: t.application.id });
                } catch (n) {
                    let { status: e, body: t } = n;
                    if (401 === e) return void (0, er.Vh)(ef, "oauth2_error_unauthorized");
                    eS(Error(null != t.message ? t.message : `${Object.keys(t)[0]}: ${Object.values(t)[0]}`));
                } finally {
                    tr.current = !1;
                }
            }
        }, [ef, eh, f, eJ, E, m, g, A, I, S, eW, e_, N, ti, te, eF]),
        ta = r.useMemo(
            () =>
                null != e$ && eK
                    ? Object.entries(e$.integrationTypesConfig ?? {})
                          .filter((e) => {
                              let [t, n] = e;
                              return null != n.oauth2InstallParams;
                          })
                          .map((e) => {
                              let [t, n] = e;
                              return Number(t);
                          })
                    : [],
            [e$, eK],
        ),
        to = r.useRef(null);
    r.useEffect(() => {
        eg !== to.current &&
            ((to.current = eg),
            (0, D.zV)(et.HAw.OAUTH2_AUTHORIZE_STEP_VIEWED, {
                step: eg,
                application_id: f,
                integration_type: eW,
                scopes: eJ,
                permissions: e3.toString(),
            }));
    }, [f, eW, e3, eJ, eg]),
        r.useEffect(() => {
            null == eg &&
                (!eK || null != e$) &&
                eE &&
                (null == e_ || ek
                    ? null != eh
                        ? (eY(eh.integration_type ?? d.b.GUILD_INSTALL), eI("AUTHORIZE_SCOPES"))
                        : ta.length > 1
                          ? eI("SELECT_INSTALL_TYPE")
                          : (1 === ta.length ? eY(ta[0]) : null != G ? eY(G) : eY(d.b.GUILD_INSTALL),
                            eI("AUTHORIZE_SCOPES"))
                    : eI("CONNECT_ACCOUNT"));
        }, [eh, ta, e$, eK, e_, ek, G, eg, eE]),
        r.useEffect(() => {
            "CONNECT_ACCOUNT" === eg && ek && (eY(G ?? d.b.USER_INSTALL), eI("AUTHORIZE_SCOPES"));
        }, [eg, ek, G]),
        r.useEffect(() => {
            if (null == eW || null != ep || null != eT) return;
            eW === d.b.USER_INSTALL && (eL(null), ew(null));
            let e = eJ.filter((e) => !ea.gX.includes(e));
            0 === eJ.length
                ? eS(Error("No scopes were provided."))
                : e.length > 0
                  ? eS(Error(`Invalid scope: ${e[0]}`))
                  : (0, es.F7)(e3)
                    ? eS(Error("Invalid permission(s) provided."))
                    : ts();
        }, [te, ts, eJ, e3, eW, ep, eT]);
    let tl = r.useCallback((e) => {
            e && eO(!0);
        }, []),
        tu = (0, l.K)(tl);
    if (eT instanceof Error)
        return ec
            ? { body: (0, i.jsx)(eX.gz, { message: eT.message }) }
            : ed
              ? {
                    label: en.intl.string(en.t.j2d6Km),
                    header: (0, i.jsx)(T.E, {
                        variant: "text-lg/bold",
                        color: "text-strong",
                        children: en.intl.string(en.t.j2d6Km),
                    }),
                    body: (0, i.jsx)(T.E, { variant: "text-md/normal", color: "text-default", children: eT.message }),
                    actions: [{ onClick: el, text: en.intl.string(en.t.cpT0Cq) }],
                    noPadding: !0,
                }
              : {
                    title: en.intl.string(en.t.j2d6Km),
                    subtitle: eT.message,
                    actions: [{ onClick: el, text: en.intl.string(en.t.cpT0Cq) }],
                };
    let tc = null != e_ ? (L.A.get(e_)?.name ?? "") : "",
        td = !1,
        t_ = !1,
        th = !0,
        tf = !0,
        tE = !0,
        tp = !1;
    switch (eg) {
        case null:
            return { label: en.intl.string(en.t.ZTNur7), body: (0, i.jsx)(e5, {}) };
        case "CONNECT_ACCOUNT":
            (t = (0, i.jsx)(e6, { clientId: f, platformType: e_, platformName: tc })),
                (th = !1),
                (tf = !1),
                (tE = !1),
                (td = !0);
            break;
        case "SELECT_INSTALL_TYPE":
            if (null == e$) return { label: en.intl.string(en.t.ZTNur7), body: (0, i.jsx)(e5, {}) };
            (t = (0, i.jsx)(e1, {
                application: e$,
                onSelect: function (e) {
                    eY(e), em(null), eI("AUTHORIZE_SCOPES");
                },
            })),
                (th = !1),
                (tf = !1),
                (tE = !1),
                (tp = !0);
            break;
        case "AUTHORIZE_SCOPES":
            if (null == ep || null == eV || null == eW)
                return { label: en.intl.string(en.t.ZTNur7), body: (0, i.jsx)(e5, {}) };
            let tm = null == eT || eT instanceof Error ? {} : eT,
                tg = ev?.sort((e, t) => e.name.toLowerCase().localeCompare(t.name.toLowerCase())),
                tA = eW === d.b.GUILD_INSTALL && eJ.includes(_.F.WEBHOOK_INCOMING),
                tI =
                    tA ||
                    (eW === d.b.GUILD_INSTALL && (eJ.includes(_.F.BOT) || eJ.includes(_.F.APPLICATIONS_COMMANDS)));
            (t = (0, i.jsxs)(i.Fragment, {
                children: [
                    null != eU &&
                        ek &&
                        (0, i.jsx)(e4, {
                            platformType: eU.type,
                            platformName: tc,
                            connectedAccount: eU,
                            applicationName: ep.application.name,
                        }),
                    (0, i.jsx)(eR, { application: ep.application, accountScopes: e2 }),
                    (0, i.jsx)(eM, {
                        application: ep.application,
                        accountScopes: e2,
                        requestedScopes: eJ,
                        integrationType: eW,
                        errors: tm,
                        isTrustedName: H || eH,
                    }),
                    (0, i.jsx)("div", { className: e0.sL, ref: tu }),
                    tI
                        ? (0, i.jsx)(eB, {
                              error: (tm[_.F.BOT] ?? tm[_.F.APPLICATIONS_COMMANDS] ?? [])[0],
                              selectedGuildId: eb,
                              onGuildChange: eL,
                              guilds: tg ?? [],
                              disabled: "" !== eb && null != eb && !0 === V,
                          })
                        : null,
                    tA
                        ? (0, i.jsx)(eQ, {
                              error: (tm[_.F.WEBHOOK_INCOMING] ?? [])[0],
                              selectedChannelId: eD,
                              selectedGuildId: eb,
                              onChannelChange: ew,
                          })
                        : null,
                ],
            })),
                eJ.includes(_.F.BOT) && !h.aI(e3, X.x3) && (s = "AUTHORIZE_BOT_PERMISSIONS"),
                ta.length > 1 && (n = "SELECT_INSTALL_TYPE"),
                (t_ = (tI && null == ej) || (tA && null == eD)),
                (td = !0);
            break;
        case "AUTHORIZE_BOT_PERMISSIONS":
            if (null == ep) return { label: en.intl.string(en.t.ZTNur7), body: (0, i.jsx)(e5, {}) };
            (t = (0, i.jsx)(eG, {
                application: ep.application,
                permissions: e3,
                deniedPermissions: eP,
                onPermissionsChange: function (e, t) {
                    ex((n) => (e ? h.TF(n, t) : h.WQ(n, t)));
                },
                guild: ej,
            })),
                (n = "AUTHORIZE_SCOPES"),
                (td = !0);
    }
    let tT = [];
    if (th && null != ep) {
        let e = ep?.application.approximate_guild_count ?? ep?.bot?.approximate_guild_count;
        a = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(eA, {
                    application: ep.application,
                    scopes: eJ,
                    disclosures: e8,
                    redirectUri: ep.redirect_uri ?? null,
                    approximateGuildCount: void 0 !== e ? e : null,
                    isEmbeddedFlow: W,
                    connectedAccount: eU,
                }),
                (0, i.jsx)("div", { className: e0.sL, ref: tu }),
            ],
        });
    }
    if (
        (tf &&
            null != ep &&
            null != eV &&
            (c = (0, i.jsx)(eq, {
                user: eV,
                application: ep.application,
                bot: ep.bot,
                accountScopes: e2,
                showLogout: F || !1,
                location: ef,
                scopes: eJ,
            })),
        tE &&
            (tT.push(
                null != n
                    ? { variant: "secondary", onClick: () => eI(n), text: en.intl.string(en.t["13/7kX"]) }
                    : { variant: "secondary", onClick: () => ti(!1, !0), text: en.intl.string(en.t["ETE/oC"]) },
            ),
            "SELECT_INSTALL_TYPE" !== eg))
    ) {
        let e = "CONNECT_ACCOUNT" !== eg && !ey;
        tT.push(
            e
                ? { disabled: !0, loading: eN, text: en.intl.string(en.t.N22i9F), icon: y.M }
                : {
                      onClick: null != s ? () => eI(s) : () => ti(!0),
                      loading: eN,
                      disabled: ("CONNECT_ACCOUNT" !== eg && null == a) || t_ || tn,
                      text: t_
                          ? en.intl.string(en.t.BwwiSM)
                          : null != s
                            ? en.intl.string(en.t["3PatSz"])
                            : en.intl.string(en.t["y+/PE9"]),
                  },
        );
    }
    return {
        label: "CONNECT_ACCOUNT" === eg ? en.intl.string(en.t.JGuDTr) : void 0,
        header: c,
        body: t,
        actions: tT,
        nextStep: s,
        appDetails: a,
        sendAuthorize: ti,
        hasContentBackground: td,
        noPadding: tp,
        obscured: tn,
    };
}
function e8(e, t) {
    if (null == t.location || (null != e.callback && e.callback(t))) return;
    let { host: n, pathname: r, searchParams: s } = Q.A.toURLSafe(t.location) ?? {},
        a = Q.A.isDiscordHostname(n ?? null) || window.location.host === n;
    if (a && r === et.BVt.OAUTH2_AUTHORIZED)
        (0, m.openModal)((e) => (0, i.jsx)(eX.dR, { guild: t.guild, application: t.application, ...e }));
    else if (a && r?.startsWith(et.BVt.OAUTH2_ERROR)) {
        if (!0 === t.canceled) return;
        (0, m.openModal)((e) => {
            let t = s?.get("error_description") ?? s?.get("error") ?? en.intl.string(en.t.mqn873);
            return (
                Array.isArray(t) && (t = t[0]),
                (0, i.jsx)(eZ.f, { ...e, children: (0, i.jsx)(eX.gz, { message: t, onClose: e.onClose }) })
            );
        });
    } else window.open(t.location, "_blank")?.focus();
}
function e9(e, t) {
    (0, H._9)() ? F.A.openCreateGuildModal({ onSuccess: (n) => te({ ...e, guildId: n }, t) }) : te(e, t);
}
function te(e, t) {
    (0, m.openModal)((t) => (0, i.jsx)(e3, { ...t, ...e, callback: e8.bind(null, e) }), { onCloseCallback: t });
}
function tt(e) {
    let { hostname: t = "", host: n, pathname: i, search: r } = Q.A.toURLSafe(e) ?? {};
    return null != i &&
        null != r &&
        (Q.A.isDiscordHostname(t) || n === window.location.host) &&
        (i.startsWith(`/api${et.Rsh.OAUTH2_AUTHORIZE}`) || i.startsWith(et.BVt.OAUTH2_AUTHORIZE))
        ? (0, J._)(r)
        : null;
}
