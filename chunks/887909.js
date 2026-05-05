"use strict";
n.r(t),
    n.d(t, {
        OAuth2AuthorizeModal: () => ej,
        getOAuth2AuthorizeProps: () => eq,
        OAuth2AuthorizePage: () => eH,
        openOAuth2Modal: () => e$,
        openOAuth2ModalWithCreateGuildModal: () => ez,
        useOAuth2AuthorizeForm: () => eW,
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
    f = n(136722),
    h = n(815390),
    p = n(17928),
    E = n(192308),
    m = n(821609),
    g = n(289873),
    A = n(834730),
    I = n(708988),
    T = n(228366),
    S = n(830215),
    N = n(803306),
    y = n(95561),
    C = n(269815),
    v = n(627363),
    O = n(224750),
    R = n(62447),
    b = n(854378),
    D = n(268218),
    L = n(272613),
    w = n(736056),
    M = n(14509),
    P = n(976860),
    x = n(395671),
    U = n(889227),
    k = n(495544),
    G = n(488926),
    F = n(998218),
    V = n(123677),
    B = n(716965),
    H = n(376092),
    j = n(647053),
    Y = n(671523),
    W = n(998445),
    K = n(11023),
    z = n(173936),
    $ = n(194261),
    q = n(406810),
    Z = n(430392),
    X = n(231483),
    Q = n(20015),
    J = n(935208),
    ee = n(375708),
    et = n(652215),
    en = n(348418);
function ei(e) {
    let t,
        { application: n, scopes: r, redirectUri: s, approximateGuildCount: a, isEmbeddedFlow: o, disclosures: l } = e,
        u = new Date(J.default.extractTimestamp(n.id)),
        c = (0, j.i4)(r),
        d = (0, Q.n)(n, et.gfo.EMBEDDED);
    if (null != s && !d && !o)
        try {
            let e = new URL(s);
            t = null != e.host && e.host.length > 0 ? e.origin : e.href;
        } catch (e) {
            t = null;
        }
    return (0, i.jsxs)("div", {
        className: en.B_,
        children: [
            null != t ? (0, i.jsx)(er, { icon: z.q, text: ee.intl.format(ee.t["5k5OKD"], { origin: t }) }) : null,
            (0, i.jsx)(er, {
                icon: $.X,
                text: (function (e) {
                    let t = (0, R.t)(e);
                    if (null != e.privacy_policy_url && null != e.terms_of_service_url) {
                        let n = t ? ee.t.yVfotv : ee.t.rxlyKL;
                        return ee.intl.format(n, {
                            application: e.name,
                            privacyPolicyURL: e.privacy_policy_url,
                            termsOfServiceURL: e.terms_of_service_url,
                        });
                    }
                    if (null != e.privacy_policy_url) {
                        let n = t ? ee.t.pYVSah : ee.t.TBvmM2;
                        return ee.intl.format(n, { application: e.name, privacyPolicyURL: e.privacy_policy_url });
                    }
                    if (null != e.terms_of_service_url) {
                        let n = t ? ee.t.nBLOp5 : ee.t["q0T/Q1"];
                        return ee.intl.format(n, { application: e.name, termsOfServiceURL: e.terms_of_service_url });
                    }
                    let n = t ? ee.t["8LemYv"] : ee.t["3Ywek3"];
                    return ee.intl.formatToPlainString(n, { application: e.name });
                })(n),
            }),
            (0, i.jsx)(er, { icon: q.O, text: ee.intl.formatToPlainString(ee.t["+1bjc8"], { date: u }) }),
            r.includes(_.F.BOT) && null != a
                ? (0, i.jsx)(er, { icon: Z.C, text: ee.intl.formatToPlainString(ee.t.UHGHSP, { guildCount: a }) })
                : null,
            (0, i.jsx)(er, { icon: X.l, text: c }),
            null != l
                ? l.map((e) => {
                      let t = (0, O.wI)(e),
                          n = ((e) => {
                              switch (e) {
                                  case O.yW.IP_LOCATION:
                                      return W.L;
                                  case O.yW.DISPLAYS_ADVERTISEMENTS:
                                      return K.J;
                                  default:
                                      return null;
                              }
                          })(e);
                      return null != n && null != t ? (0, i.jsx)(er, { icon: n, text: t }) : null;
                  })
                : null,
        ],
    });
}
function er(e) {
    let { icon: t, text: n } = e;
    return (0, i.jsxs)("div", {
        className: en.f_,
        children: [
            (0, i.jsx)(t, { className: en.u7, color: "currentColor" }),
            (0, i.jsx)(A.E, { variant: "text-xs/normal", className: en.z9, children: n }),
        ],
    });
}
var es = n(214947),
    ea = n(845798),
    eo = n(687966),
    el = n(625903),
    eu = n(534514),
    ec = n(975571),
    ed = n(645650);
function e_(e) {
    let t,
        { application: n, accountScopes: r } = e,
        s = [],
        a = (0, R.A)(n);
    return (r.includes(_.F.SDK_SOCIAL_LAYER)
        ? ((t = a
              ? ee.intl.format(ee.t.GxjwZM, {
                    applicationName: n.name,
                    learnMoreURL: ec.A.getArticleURL(et.MVz.SOCIAL_LAYER_CONNECTIONS),
                })
              : ee.intl.format(ee.t.DfBeUq, { learnMoreURL: ec.A.getArticleURL(et.MVz.SOCIAL_LAYER_CONNECTIONS) })),
          s.push(
              {
                  icon: es.$,
                  text: a
                      ? ee.intl.formatToPlainString(ee.t.z9peav, { maxFriends: et.$4X })
                      : ee.intl.formatToPlainString(ee.t.WNKzo9, { maxFriends: et.$4X }),
              },
              { icon: ea.S, text: a ? ee.intl.string(ee.t.daY6xj) : ee.intl.string(ee.t.j7peBh) },
              { icon: eo._, text: a ? ee.intl.string(ee.t["/bdaNN"]) : ee.intl.string(ee.t["feD3+i"]) },
              { icon: el.Z, text: a ? ee.intl.string(ee.t.mSqazC) : ee.intl.string(ee.t.YFFVM1) },
          ))
        : r.includes(_.F.SDK_SOCIAL_LAYER_PRESENCE) &&
          ((t = a
              ? ee.intl.format(ee.t.GxjwZM, {
                    applicationName: n.name,
                    learnMoreURL: ec.A.getArticleURL(et.MVz.SOCIAL_LAYER_CONNECTIONS),
                })
              : ee.intl.format(ee.t.DfBeUq, { learnMoreURL: ec.A.getArticleURL(et.MVz.SOCIAL_LAYER_CONNECTIONS) })),
          s.push(
              {
                  icon: es.$,
                  text: a
                      ? ee.intl.formatToPlainString(ee.t.z9peav, { maxFriends: et.$4X })
                      : ee.intl.formatToPlainString(ee.t.WNKzo9, { maxFriends: et.$4X }),
              },
              { icon: eo._, text: a ? ee.intl.string(ee.t["/bdaNN"]) : ee.intl.string(ee.t["feD3+i"]) },
              { icon: el.Z, text: a ? ee.intl.string(ee.t.mSqazC) : ee.intl.string(ee.t.YFFVM1) },
          )),
    0 === s.length)
        ? null
        : (0, i.jsxs)("div", {
              className: ed.b9,
              children: [
                  null != t ? (0, i.jsx)(eu.D, { variant: "heading-sm/normal", className: ed.a9, children: t }) : null,
                  s.map((e, t) => {
                      let { icon: n, text: r } = e;
                      return (0, i.jsx)(ef, { icon: n, text: r }, t);
                  }),
              ],
          });
}
function ef(e) {
    let { icon: t, text: n } = e;
    return (0, i.jsxs)("div", {
        className: ed.f_,
        children: [
            (0, i.jsx)(t, { className: ed.u7, color: "currentColor" }),
            (0, i.jsx)(A.E, { variant: "text-md/normal", className: ed.u0, children: n }),
        ],
    });
}
var eh = n(285796),
    ep = n(628284),
    eE = n(444927),
    em = n(415122);
function eg(e) {
    let { text: t, error: n, isFake: r } = e;
    return (0, i.jsxs)("div", {
        className: em.z8,
        children: [
            r
                ? (0, i.jsx)(eh.a, { size: "md", color: "currentColor", className: a()(em.Kk, em.RC) })
                : (0, i.jsx)(ep.y, { size: "md", color: "currentColor", className: a()(em.Kk, em.sc) }),
            (0, i.jsxs)("div", {
                className: em.rv,
                children: [
                    (0, i.jsx)(A.E, { variant: "text-md/normal", color: r ? "text-muted" : void 0, children: t }),
                    null != n
                        ? (0, i.jsx)(A.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: n })
                        : null,
                ],
            }),
        ],
    });
}
function eA(e) {
    let {
            application: t,
            accountScopes: n,
            requestedScopes: r,
            integrationType: s,
            errors: o,
            isTrustedName: l = !1,
            noDivider: u = !1,
        } = e,
        c = (0, eE.A)(() => j.O_[Math.floor(Math.random() * j.O_.length)]);
    if (0 === n.length) return null;
    let f = c(),
        h = l ? ee.t.PZpY9c : ee.t["1Hz+Sl"],
        p = s === d.b.USER_INSTALL && r.includes(_.F.APPLICATIONS_COMMANDS);
    return (0, i.jsxs)("div", {
        className: a()(em.Wu, u ? em.bc : void 0),
        children: [
            (0, i.jsx)(eu.D, {
                variant: "heading-sm/normal",
                className: em.a9,
                children: ee.intl.format(h, { application: t?.name ?? "" }),
            }),
            n
                .map((e) =>
                    (0, j.rY)(e, n).map((t, n) =>
                        (0, i.jsx)(eg, { text: t, error: 0 === n ? o?.[e]?.[0] : void 0 }, `${e}-${n}`),
                    ),
                )
                .flat(),
            p && (0, i.jsx)(eg, { text: ee.intl.string(ee.t.Ls2XRq) }),
            (0, i.jsx)(eg, { text: f, isFake: !0 }),
        ],
    });
}
var eI = n(150934),
    eT = n(789645),
    eS = n(751645);
function eN(e) {
    let { application: t, permissions: n, deniedPermissions: s, onPermissionsChange: a, guild: o } = e,
        l = r.useMemo(() => f.B8(o.permissions), [o.permissions]);
    r.useEffect(() => {
        a(!1, f.pb(n, l));
    }, [l, a, n]);
    let u = H.Q.filter((e) => f.zy(n, e)),
        c = u
            .filter((e) => !f.zy(l, e))
            .map((e) => {
                let t = (0, H.hx)(e),
                    n = !f.zy(s, e);
                return (0, i.jsx)(
                    "li",
                    {
                        className: eS.EK,
                        children: (0, i.jsx)(eI.S, { checked: n, onChange: (t) => a(t, e), label: t }),
                    },
                    String(e),
                );
            }),
        d = u
            .filter((e) => f.zy(l, e))
            .map((e) => {
                let t = (0, H.hx)(e);
                return (0, i.jsxs)(
                    "li",
                    {
                        className: eS.EK,
                        children: [
                            (0, i.jsx)("div", {
                                className: eS.nW,
                                children: (0, i.jsx)(eT.P, { size: "md", color: "currentColor", className: eS.Kk }),
                            }),
                            (0, i.jsx)(A.E, { variant: "text-md/normal", children: t }),
                        ],
                    },
                    String(e),
                );
            });
    return (0, i.jsxs)("div", {
        className: eS.AS,
        children: [
            c.length > 0
                ? (0, i.jsxs)("div", {
                      children: [
                          (0, i.jsx)(A.E, {
                              variant: "text-sm/medium",
                              color: "text-default",
                              children: ee.intl.format(ee.t.sOaT2j, { applicationName: t.name, guildName: o.name }),
                          }),
                          (0, i.jsx)("ul", { className: eS.RH, children: c }),
                      ],
                  })
                : null,
            d.length > 0
                ? (0, i.jsxs)("div", {
                      children: [
                          (0, i.jsx)(A.E, {
                              variant: "text-sm/medium",
                              color: "text-default",
                              children: ee.intl.format(ee.t.fsOkF4, { applicationName: t.name }),
                          }),
                          (0, i.jsx)("ul", { className: eS.RH, children: d }),
                      ],
                  })
                : null,
        ],
    });
}
var ey = n(783878),
    eC = n(551280);
function ev(e) {
    let { error: t, selectedGuildId: n, onGuildChange: r, guilds: s, disabled: a = !1 } = e,
        o = s
            .filter((e) => f.zy(e.permissions, et.xBc.MANAGE_GUILD))
            .map((e) => ({ id: e.id, value: e.id, label: e.name }));
    return (0, i.jsx)("div", {
        className: eC.g,
        children: (0, i.jsx)(ey.Z, {
            label: ee.intl.string(ee.t["1DXFFd"]),
            helperText: ee.intl.format(ee.t.t9Jm9o, {}),
            errorMessage: t,
            selectionMode: "single",
            maxOptionsVisible: 5,
            placeholder: ee.intl.string(ee.t.oM4E1A),
            options: o,
            onSelectionChange: r,
            disabled: a,
            value: n ?? void 0,
        }),
    });
}
var eO = n(665260),
    eR = n(939249),
    eb = n(97808),
    eD = n(709066),
    eL = n(486020),
    ew = n(566615),
    eM = n(778712),
    eP = n(510523);
function ex(e) {
    let { user: t, application: n, bot: s, accountScopes: a, showLogout: o, location: l, scopes: u } = e,
        c = (0, ew.i)(),
        d = eL.Ay.getApplicationIconURL({ id: n.id, icon: n.icon }),
        _ = eL.Ay.getUserAvatarURL(t),
        f = r.useMemo(
            () =>
                u.some((e) => (0, j.RM)(e))
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(A.E, {
                                  variant: "text-lg/normal",
                                  color: "text-default",
                                  children: ee.intl.string(ee.t.uT1CPa),
                              }),
                              (0, i.jsx)(eu.D, { variant: "heading-xxl/bold", color: "text-strong", children: n.name }),
                          ],
                      })
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsxs)(A.E, {
                                  variant: "text-lg/bold",
                                  color: "text-strong",
                                  children: [
                                      n.name,
                                      null != s
                                          ? (0, i.jsx)(eD.A, {
                                                className: eP.AO,
                                                verified:
                                                    null != s.public_flags &&
                                                    (0, eO.Lt)(s.public_flags, et.nhx.VERIFIED_BOT),
                                            })
                                          : null,
                                  ],
                              }),
                              a.length > 0
                                  ? (0, i.jsx)(A.E, {
                                        variant: "text-md/normal",
                                        color: "text-default",
                                        children: ee.intl.string(ee.t.jFbDnJ),
                                    })
                                  : (0, i.jsx)(A.E, {
                                        variant: "text-md/normal",
                                        color: "text-default",
                                        children: ee.intl.string(ee.t["X+Fdpo"]),
                                    }),
                          ],
                      }),
            [a.length, n, s, u],
        );
    return (0, i.jsxs)("header", {
        id: c,
        className: eP.wx,
        children: [
            (0, i.jsxs)("div", {
                className: eP.Y,
                children: [
                    (0, i.jsx)(eb.eu, { className: eP.my, src: d, size: eM._3.SIZE_80, "aria-label": n.name }),
                    (0, i.jsxs)("div", {
                        className: eP.I5,
                        children: [
                            (0, i.jsx)("div", { className: eP.pw }),
                            (0, i.jsx)("div", { className: eP.pw }),
                            (0, i.jsx)("div", { className: eP.pw }),
                        ],
                    }),
                    (0, i.jsx)(eb.eu, { className: eP.my, src: _, size: eM._3.SIZE_80, "aria-label": t.username }),
                ],
            }),
            f,
            o
                ? (0, i.jsx)("div", {
                      className: eP.Ny,
                      children: (0, i.jsxs)(A.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: [
                              ee.intl.format(ee.t.qRvpYU, {
                                  userHook: () =>
                                      (0, i.jsxs)(
                                          A.E,
                                          {
                                              className: eP.ZD,
                                              variant: "text-sm/normal",
                                              children: [
                                                  t.username,
                                                  !t.hasUniqueUsername() &&
                                                      (0, i.jsx)(A.E, {
                                                          className: eP.Jb,
                                                          variant: "text-sm/normal",
                                                          children: `#${t.discriminator}`,
                                                      }),
                                              ],
                                          },
                                          t.id,
                                      ),
                              }),
                              (0, i.jsx)(eR.D, {
                                  tag: "a",
                                  className: eP.Pg,
                                  onClick: () => (0, B.Vh)(l, "oauth2_logout"),
                                  children: ee.intl.string(ee.t["yV/hjC"]),
                              }),
                          ],
                      }),
                  })
                : null,
        ],
    });
}
var eU = n(321987),
    ek = n(595244);
function eG(e) {
    let { selectedGuildId: t, selectedChannelId: n, onChannelChange: s, error: a } = e,
        [o, l] = r.useState(null),
        u = r.useRef(!1);
    if (
        (r.useEffect(() => {
            async function e(e) {
                let n = await (0, B.$Q)(e);
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
        className: eC.g,
        children: (0, i.jsx)(ey.Z, {
            label: ee.intl.string(ee.t["8qKd+J"]),
            helperText: ee.intl.string(ee.t.kQXMfN),
            selectionMode: "single",
            maxOptionsVisible: 5,
            errorMessage: a,
            onSelectionChange: s,
            placeholder: ee.intl.string(ee.t["Re/64R"]),
            options: c,
            value: n ?? void 0,
        }),
    });
}
var eF = n(613057),
    eV = n(636663);
let eB = (0, D.Fe)({
    createPromise: () =>
        Promise.all([
            n.e("83004"),
            n.e("90261"),
            n.e("16933"),
            n.e("6305"),
            n.e("25853"),
            n.e("31483"),
            n.e("10191"),
            n.e("98268"),
            n.e("36469"),
            n.e("65420"),
            n.e("71934"),
            n.e("1806"),
            n.e("12272"),
            n.e("22513"),
            n.e("7053"),
            n.e("18570"),
            n.e("86483"),
            n.e("39995"),
            n.e("25568"),
            n.e("32260"),
            n.e("40153"),
            n.e("68953"),
            n.e("26032"),
            n.e("22433"),
            n.e("18125"),
            n.e("13498"),
            n.e("24199"),
            n.e("207"),
            n.e("57036"),
            n.e("98839"),
            n.e("88941"),
            n.e("61379"),
            n.e("62680"),
            n.e("43039"),
            n.e("25693"),
            n.e("21825"),
            n.e("98125"),
            n.e("28154"),
            n.e("18441"),
            n.e("48804"),
            n.e("88077"),
            n.e("76640"),
            n.e("85502"),
            n.e("18401"),
            n.e("13681"),
            n.e("53729"),
            n.e("10004"),
            n.e("55314"),
            n.e("89094"),
            n.e("29177"),
            n.e("32551"),
            n.e("32885"),
            n.e("4369"),
            n.e("23353"),
            n.e("53930"),
            n.e("32817"),
            n.e("50015"),
            n.e("47017"),
            n.e("14879"),
            n.e("11523"),
            n.e("66900"),
            n.e("1555"),
            n.e("44695"),
            n.e("21690"),
            n.e("44376"),
            n.e("33902"),
            n.e("11527"),
            n.e("31644"),
            n.e("70653"),
            n.e("45723"),
            n.e("63070"),
            n.e("70697"),
            n.e("18546"),
            n.e("72535"),
            n.e("86949"),
            n.e("61622"),
            n.e("38835"),
            n.e("76170"),
            n.e("18943"),
            n.e("84103"),
            n.e("9915"),
            n.e("99999"),
            n.e("5501"),
            n.e("53614"),
            n.e("96123"),
            n.e("31825"),
            n.e("36320"),
            n.e("20320"),
            n.e("31390"),
            n.e("43919"),
            n.e("57906"),
            n.e("90889"),
            n.e("37622"),
            n.e("51243"),
            n.e("45421"),
            n.e("44265"),
            n.e("99141"),
            n.e("21435"),
            n.e("98793"),
            n.e("92731"),
            n.e("25990"),
            n.e("63095"),
            n.e("68647"),
            n.e("66541"),
            n.e("27413"),
            n.e("64615"),
            n.e("87225"),
            n.e("75134"),
            n.e("84967"),
            n.e("23216"),
            n.e("87079"),
            n.e("78707"),
            n.e("3458"),
            n.e("62827"),
            n.e("73547"),
            n.e("32823"),
            n.e("34691"),
            n.e("99593"),
            n.e("61935"),
            n.e("62168"),
            n.e("55602"),
            n.e("28128"),
            n.e("59023"),
            n.e("91381"),
            n.e("93158"),
            n.e("10034"),
            n.e("73500"),
            n.e("31145"),
            n.e("25252"),
            n.e("79440"),
            n.e("71133"),
            n.e("78050"),
            n.e("80262"),
            n.e("56385"),
            n.e("59132"),
            n.e("58405"),
        ]).then(n.bind(n, 991054)),
    webpackId: 991054,
});
function eH() {
    let e = (0, o.zy)(),
        t = r.useMemo(() => (0, V._)(e.search), [e.search]);
    (0, C.A)();
    let s = !e.search.includes("response_type"),
        [a, l] = r.useState(!1),
        u = r.useRef(!1),
        [d, _] = r.useState(null),
        f = !c.Fr && !a && (s || !k.default.isAuthenticated());
    if (
        (r.useEffect(() => {
            if (c.Ct && s) {
                let t = new URL("discord://action/oauth2/authorize");
                (t.search = e.search), window.open(t.toString(), "_self");
            } else
                c.Fr ||
                    (!s && k.default.isAuthenticated()) ||
                    u.current ||
                    ((u.current = !0),
                    Promise.resolve()
                        .then(n.bind(n, 129014))
                        .then((t) => {
                            let { default: n } = t;
                            if (s)
                                n.request(et.e$_.DEEP_LINK, { type: eF.XK.OAUTH2, params: { search: e.search } })
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
        f && !1 !== d)
    ) {
        let e;
        return (
            (e =
                !0 === d
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(b.hE, { children: ee.intl.string(ee.t.csrAMJ) }),
                              (0, i.jsx)(b.tK, {
                                  children: s ? ee.intl.string(ee.t["m1+IBn"]) : ee.intl.string(ee.t.kRzrSO),
                              }),
                              (0, i.jsx)(m.$, {
                                  onClick: () => l(!0),
                                  variant: "primary",
                                  text: ee.intl.string(ee.t.fIv16B),
                              }),
                          ],
                      })
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(b.hE, { children: ee.intl.string(ee.t["Z+hCVU"]) }),
                              (0, i.jsx)(g.y, {}),
                          ],
                      })),
            (0, i.jsx)(eU.$, { removeChildWrapper: !0, children: (0, i.jsx)("div", { className: eV.ah, children: e }) })
        );
    }
    return (0, i.jsx)(eU.$, {
        removeChildWrapper: !0,
        children: (0, i.jsx)(ej, {
            transitionState: h.i.ENTERED,
            ...t,
            showLogout: !0,
            isExternalStandaloneOAuthPage: !0,
            hideHeader: !0,
        }),
    });
}
function ej(e) {
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
            modalSize: f,
        } = eW({ ...e }),
        h =
            null != s || null != o || null != c
                ? (0, i.jsxs)("div", {
                      className: eV.Gq,
                      children: [
                          s,
                          (0, i.jsx)("div", {
                              className: eV.FG,
                              children: (0, i.jsxs)("div", {
                                  className: a()(eV.Qs, d ? eV.cw : null, _ ? eV.pN : null),
                                  children: [o, null == u ? c : null],
                              }),
                          }),
                      ],
                  })
                : null;
    return (0, i.jsx)(eU.f, {
        ...e,
        onClose: () => Promise.resolve(e.onClose?.()),
        size: f,
        actions: l,
        title: n,
        subtitle: r,
        "aria-label": t,
        children: h,
    });
}
function eY() {
    return (0, i.jsx)("div", { className: eV.g4, children: (0, i.jsx)(g.y, { className: eV.u1 }) });
}
function eW(e) {
    let t,
        n,
        s,
        a,
        c,
        {
            clientId: h,
            responseType: E,
            redirectUri: m,
            codeChallenge: g,
            codeChallengeMethod: C,
            state: b,
            nonce: D,
            prompt: L,
            authorizations: M,
            scopes: W,
            permissions: K,
            guildId: z,
            channelId: $,
            integrationType: q,
            disableGuildSelect: Z = !1,
            showLogout: X = !1,
            cancelCompletesFlow: Q = !0,
            isTrustedName: J = !1,
            isEmbeddedFlow: en = !1,
            callback: er,
            callbackWithoutPost: es,
            onClose: ea,
            disclosures: eo,
            isExternalStandaloneOAuthPage: el = !1,
            isTwoWayLinkDiscordConsent: eu = !1,
        } = e,
        ec = null != q ? M?.get(q) : void 0,
        ed = (0, o.zy)(),
        ef = (0, p.bG)([w.A], () => w.A.hasLoadedExperiments);
    r.useEffect(() => {
        k.default.isAuthenticated() && !ef && S.A.getExperiments();
    }, [ef]);
    let [eh, ep] = r.useState(null),
        [eE, em] = r.useState(null),
        [eg, eI] = r.useState(null),
        [eT, eS] = r.useState(!1),
        [ey, eC] = r.useState(!1),
        eO = eh?.guilds,
        [eR, eb] = r.useState(z ?? null),
        [eD, eL] = r.useState($ ?? null),
        [ew, eM] = r.useState(G.x3),
        eP = r.useMemo(() => (eh?.user != null ? new U.A(eh.user) : null), [eh?.user]),
        eU = (0, R.A)(eh?.application ?? null),
        eF = r.useMemo(() => eO?.find((e) => e.id === eR), [eO, eR]),
        [eH, ej] = r.useState(null),
        eW = r.useMemo(() => null == ec && null == q && (W?.length ?? 0) === 0 && null == m, [ec, W?.length, m, q]),
        [eK, ez] = r.useState(null);
    r.useEffect(() => {
        eW && v.Ay.fetchApplication(h).then((e) => ez(x.Ay.createFromServer(e)));
    }, [h, eW]);
    let e$ = r.useMemo(
            () => (null == eH ? null : eK?.integrationTypesConfig?.[eH]?.oauth2InstallParams),
            [eK?.integrationTypesConfig, eH],
        ),
        { requestedScopes: eq, accountScopes: eZ } = r.useMemo(() => {
            let e = eW ? e$?.scopes : W,
                t = (0, V.e)(e ?? []),
                n = j.k$.filter((e) => t.includes(e));
            return { requestedScopes: t, accountScopes: n };
        }, [e$?.scopes, W, eW]),
        eX = r.useMemo(() => (eW ? f.iu(e$?.permissions ?? 0) : K) ?? G.x3, [e$?.permissions, K, eW]),
        eQ = r.useRef(!1),
        [eJ, e0] = r.useState(eo ?? []),
        [e1, e2] = r.useState(null != eo && eo.length > 0);
    (0, u.Ay)(() => {
        let e = k.default.getAnalyticsToken();
        null != e
            ? T.h.dispatch({ type: "SET_ANALYTICS_TOKEN", analyticsToken: e, userId: k.default.getId() })
            : (0, N.rQ)({ withAnalyticsToken: !0 }).catch(et.tEg);
    }),
        r.useEffect(() => {
            if (eQ.current) return;
            let e = async () => {
                eQ.current = !0;
                try {
                    let { disclosures: e, allAcked: t } = await (0, O.vG)(h);
                    e2(!t), e0(e);
                } catch (n) {
                    let { status: e, body: t } = n;
                    if (401 === e) return void (0, B.Vh)(ed, "oauth2_error_failed_disclosures");
                    eI(Error(null != t.message ? t.message : `${Object.keys(t)[0]}: ${Object.values(t)[0]}`));
                } finally {
                    eQ.current = !1;
                }
            };
            if (null == eo) {
                if (!k.default.isAuthenticated()) return void (0, B.Vh)(ed, "oauth2_error_not_authenticated");
                e();
            }
        }, [h, ed, eo, e0, eI, e2, em]);
    let e3 = r.useCallback(
            async (e) => {
                if (null != es) {
                    eS(!0), es(e);
                    return;
                }
                if (!e && !Q) {
                    null != er && (er({ application: eh?.application, guild: eF }), ea?.());
                    return;
                }
                if (null == eH) return void eI(Error("No integration type was selected."));
                try {
                    eS(!0);
                    let t = await (0, B.Gq)({
                        authorize: e,
                        clientId: h,
                        scopes: eq,
                        responseType: E,
                        redirectUri: m,
                        codeChallenge: g,
                        codeChallengeMethod: C,
                        state: b,
                        nonce: D,
                        integrationType: eH,
                        permissions: f.TF(eX, ew),
                        guildId: eH === d.b.GUILD_INSTALL && null != eR ? eR : void 0,
                        channelId: eH === d.b.GUILD_INSTALL && null != eD ? eD : void 0,
                    });
                    if ((e && (await (0, O.Yx)(h, eJ)), null != er))
                        er({ application: eh?.application, location: t.location, guild: eF }), ea?.();
                    else if (null != t.location) {
                        let e = F.A.toURLSafe(t.location)?.pathname;
                        F.A.isDiscordUrl(t.location) && e === et.BVt.OAUTH2_AUTHORIZED
                            ? (0, P.pX)(et.BVt.OAUTH2_AUTHORIZED, {
                                  state: { application: eh?.application, guild: eF },
                              })
                            : (window.location = t.location);
                    } else eS(!1);
                } catch (t) {
                    let e = t.body;
                    e?.message != null && "" !== e.message ? eI(Error(e.message)) : eI(e),
                        em("AUTHORIZE_SCOPES"),
                        eS(!1);
                }
            },
            [es, Q, er, eh?.application, eF, ea, h, eq, E, m, g, C, b, D, eX, ew, eR, eH, eD, eJ],
        ),
        e6 = r.useRef(!1),
        e4 = r.useCallback(async () => {
            if (!k.default.isAuthenticated()) return void (0, B.Vh)(ed, "oauth2_error_not_authenticated");
            if (!eQ.current && !e6.current) {
                e6.current = !0;
                try {
                    var e;
                    let t =
                        null != ec
                            ? ec
                            : await (0, B.qY)({
                                  clientId: h,
                                  scopes: eq,
                                  responseType: E,
                                  redirectUri: m,
                                  codeChallenge: g,
                                  codeChallengeMethod: C,
                                  state: b,
                                  nonce: D,
                                  integrationType: eH ?? void 0,
                              });
                    ep(
                        ((e = t),
                        null == e.guilds
                            ? e
                            : { ...e, guilds: e.guilds.map((e) => ({ ...e, permissions: f.iu(e.permissions) })) }),
                    ),
                        L === Y.l.NONE && t.authorized && !e1 && e3(!0),
                        (0, y.zV)(et.HAw.OAUTH2_AUTHORIZE_VIEWED, { application_id: t.application.id });
                } catch (n) {
                    let { status: e, body: t } = n;
                    if (401 === e) return void (0, B.Vh)(ed, "oauth2_error_unauthorized");
                    eI(Error(null != t.message ? t.message : `${Object.keys(t)[0]}: ${Object.values(t)[0]}`));
                } finally {
                    e6.current = !1;
                }
            }
        }, [ed, ec, h, eq, E, m, g, C, b, D, eH, L, e3, e1]),
        e5 = r.useMemo(
            () =>
                null != eK && eW
                    ? Object.entries(eK.integrationTypesConfig ?? {})
                          .filter((e) => {
                              let [t, n] = e;
                              return null != n.oauth2InstallParams;
                          })
                          .map((e) => {
                              let [t, n] = e;
                              return Number(t);
                          })
                    : [],
            [eK, eW],
        ),
        e7 = r.useRef(null);
    r.useEffect(() => {
        eE !== e7.current &&
            ((e7.current = eE),
            (0, y.zV)(et.HAw.OAUTH2_AUTHORIZE_STEP_VIEWED, {
                step: eE,
                application_id: h,
                integration_type: eH,
                scopes: eq,
                permissions: eX.toString(),
            }));
    }, [h, eH, eX, eq, eE]),
        r.useEffect(() => {
            null == eE &&
                (!eW || null != eK) &&
                ef &&
                (null != ec
                    ? (ej(ec.integration_type ?? d.b.GUILD_INSTALL), em("AUTHORIZE_SCOPES"))
                    : e5.length > 1
                      ? em("SELECT_INSTALL_TYPE")
                      : (1 === e5.length ? ej(e5[0]) : null != q ? ej(q) : ej(d.b.GUILD_INSTALL),
                        em("AUTHORIZE_SCOPES")));
        }, [ec, e5, eK, eW, q, eE, ef]),
        r.useEffect(() => {
            if (null == eH || null != eh || null != eg) return;
            eH === d.b.USER_INSTALL && (eb(null), eL(null));
            let e = eq.filter((e) => !j.gX.includes(e));
            0 === eq.length
                ? eI(Error("No scopes were provided."))
                : e.length > 0
                  ? eI(Error(`Invalid scope: ${e[0]}`))
                  : (0, H.F7)(eX)
                    ? eI(Error("Invalid permission(s) provided."))
                    : e4();
        }, [e1, e4, eq, eX, eH, eh, eg]);
    let e8 = r.useCallback((e) => {
            e && eC(!0);
        }, []),
        e9 = (0, l.K)(e8);
    if (eg instanceof Error)
        return el
            ? { body: (0, i.jsx)(ek.gz, { message: eg.message }) }
            : eu
              ? {
                    label: ee.intl.string(ee.t.j2d6Km),
                    header: (0, i.jsx)(A.E, {
                        variant: "text-lg/bold",
                        color: "text-strong",
                        children: ee.intl.string(ee.t.j2d6Km),
                    }),
                    body: (0, i.jsx)(A.E, { variant: "text-md/normal", color: "text-default", children: eg.message }),
                    actions: [{ onClick: ea, text: ee.intl.string(ee.t.cpT0Cq) }],
                    noPadding: !0,
                }
              : {
                    title: ee.intl.string(ee.t.j2d6Km),
                    subtitle: eg.message,
                    actions: [{ onClick: ea, text: ee.intl.string(ee.t.cpT0Cq) }],
                };
    let te = !1,
        tt = !1,
        tn = !0,
        ti = !0,
        tr = !0,
        ts = !1;
    switch (eE) {
        case null:
            return { label: ee.intl.string(ee.t.ZTNur7), body: (0, i.jsx)(eY, {}) };
        case "SELECT_INSTALL_TYPE":
            if (null == eK) return { label: ee.intl.string(ee.t.ZTNur7), body: (0, i.jsx)(eY, {}) };
            (t = (0, i.jsx)(eB, {
                application: eK,
                onSelect: (e) => {
                    ej(e), ep(null), em("AUTHORIZE_SCOPES");
                },
            })),
                (tn = !1),
                (ti = !1),
                (tr = !1),
                (ts = !0);
            break;
        case "AUTHORIZE_SCOPES":
            if (null == eh || null == eP || null == eH)
                return { label: ee.intl.string(ee.t.ZTNur7), body: (0, i.jsx)(eY, {}) };
            let ta = null == eg || eg instanceof Error ? {} : eg,
                to = eO?.sort((e, t) => e.name.toLowerCase().localeCompare(t.name.toLowerCase())),
                tl = eH === d.b.GUILD_INSTALL && eq.includes(_.F.WEBHOOK_INCOMING),
                tu =
                    tl ||
                    (eH === d.b.GUILD_INSTALL && (eq.includes(_.F.BOT) || eq.includes(_.F.APPLICATIONS_COMMANDS)));
            (t = (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(e_, { application: eh.application, accountScopes: eZ }),
                    (0, i.jsx)(eA, {
                        application: eh.application,
                        accountScopes: eZ,
                        requestedScopes: eq,
                        integrationType: eH,
                        errors: ta,
                        isTrustedName: J || eU,
                    }),
                    (0, i.jsx)("div", { className: eV.sL, ref: e9 }),
                    tu
                        ? (0, i.jsx)(ev, {
                              error: (ta[_.F.BOT] ?? ta[_.F.APPLICATIONS_COMMANDS] ?? [])[0],
                              selectedGuildId: eR,
                              onGuildChange: eb,
                              guilds: to ?? [],
                              disabled: "" !== eR && null != eR && !0 === Z,
                          })
                        : null,
                    tl
                        ? (0, i.jsx)(eG, {
                              error: (ta[_.F.WEBHOOK_INCOMING] ?? [])[0],
                              selectedChannelId: eD,
                              selectedGuildId: eR,
                              onChannelChange: eL,
                          })
                        : null,
                ],
            })),
                eq.includes(_.F.BOT) && !f.aI(eX, G.x3) && (s = "AUTHORIZE_BOT_PERMISSIONS"),
                e5.length > 1 && (n = "SELECT_INSTALL_TYPE"),
                (tt = (tu && null == eF) || (tl && null == eD)),
                (te = !0);
            break;
        case "AUTHORIZE_BOT_PERMISSIONS":
            if (null == eh) return { label: ee.intl.string(ee.t.ZTNur7), body: (0, i.jsx)(eY, {}) };
            (t = (0, i.jsx)(eN, {
                application: eh.application,
                permissions: eX,
                deniedPermissions: ew,
                onPermissionsChange: (e, t) => {
                    eM((n) => (e ? f.TF(n, t) : f.WQ(n, t)));
                },
                guild: eF,
            })),
                (n = "AUTHORIZE_SCOPES"),
                (te = !0);
    }
    let tc = [];
    if (tn && null != eh) {
        let e = eh?.application.approximate_guild_count ?? eh?.bot?.approximate_guild_count;
        a = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(ei, {
                    application: eh.application,
                    scopes: eq,
                    disclosures: eJ,
                    redirectUri: eh.redirect_uri ?? null,
                    approximateGuildCount: void 0 !== e ? e : null,
                    isEmbeddedFlow: en,
                }),
                (0, i.jsx)("div", { className: eV.sL, ref: e9 }),
            ],
        });
    }
    return (
        ti &&
            null != eh &&
            null != eP &&
            (c = (0, i.jsx)(ex, {
                user: eP,
                application: eh.application,
                bot: eh.bot,
                accountScopes: eZ,
                showLogout: X || !1,
                location: ed,
                scopes: eq,
            })),
        tr &&
            (tc.push(
                null != n
                    ? { variant: "secondary", onClick: () => em(n), text: ee.intl.string(ee.t["13/7kX"]) }
                    : { variant: "secondary", onClick: () => e3(!1), text: ee.intl.string(ee.t["ETE/oC"]) },
            ),
            "SELECT_INSTALL_TYPE" !== eE &&
                tc.push(
                    ey
                        ? {
                              onClick: null != s ? () => em(s) : () => e3(!0),
                              loading: eT,
                              disabled: null == a || tt,
                              text: tt
                                  ? ee.intl.string(ee.t.BwwiSM)
                                  : null != s
                                    ? ee.intl.string(ee.t["3PatSz"])
                                    : ee.intl.string(ee.t["y+/PE9"]),
                          }
                        : { disabled: !0, loading: eT, text: ee.intl.string(ee.t.N22i9F), icon: I.M },
                )),
        {
            header: c,
            body: t,
            actions: tc,
            nextStep: s,
            appDetails: a,
            sendAuthorize: e3,
            hasContentBackground: te,
            noPadding: ts,
        }
    );
}
function eK(e, t) {
    if (null == t.location || (null != e.callback && e.callback(t))) return;
    let { host: n, pathname: r, searchParams: s } = F.A.toURLSafe(t.location) ?? {},
        a = F.A.isDiscordHostname(n ?? null) || window.location.host === n;
    a && r === et.BVt.OAUTH2_AUTHORIZED
        ? (0, E.openModal)((e) => (0, i.jsx)(ek.dR, { guild: t.guild, application: t.application, ...e }))
        : a && r?.startsWith(et.BVt.OAUTH2_ERROR)
          ? (0, E.openModal)((e) => {
                let t = s?.get("error_description") ?? s?.get("error") ?? ee.intl.string(ee.t.mqn873);
                return (
                    Array.isArray(t) && (t = t[0]),
                    (0, i.jsx)(eU.f, { ...e, children: (0, i.jsx)(ek.gz, { message: t, onClose: e.onClose }) })
                );
            })
          : window.open(t.location, "_blank")?.focus();
}
function ez(e, t) {
    (0, M._9)() ? L.A.openCreateGuildModal({ onSuccess: (n) => e$({ ...e, guildId: n }, t) }) : e$(e, t);
}
function e$(e, t) {
    (0, E.openModal)((t) => (0, i.jsx)(ej, { ...t, ...e, cancelCompletesFlow: !1, callback: eK.bind(null, e) }), {
        onCloseCallback: t,
    });
}
function eq(e) {
    let { hostname: t = "", host: n, pathname: i, search: r } = F.A.toURLSafe(e) ?? {};
    return null != i &&
        null != r &&
        (F.A.isDiscordHostname(t) || n === window.location.host) &&
        (i.startsWith(`/api${et.Rsh.OAUTH2_AUTHORIZE}`) || i.startsWith(et.BVt.OAUTH2_AUTHORIZE))
        ? (0, V._)(r)
        : null;
}
