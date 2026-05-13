"use strict";
n.r(t),
    n.d(t, {
        OAuth2AuthorizeModal: () => eJ,
        getOAuth2AuthorizeProps: () => e7,
        OAuth2AuthorizePage: () => eQ,
        openOAuth2Modal: () => e5,
        openOAuth2ModalWithCreateGuildModal: () => e4,
        useOAuth2AuthorizeForm: () => e3,
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
    h = n(365199),
    p = n(815390),
    E = n(17928),
    m = n(192308),
    g = n(821609),
    A = n(462887),
    I = n(289873),
    T = n(834730),
    S = n(534514),
    N = n(885574),
    y = n(933832),
    C = n(708988),
    v = n(228366),
    O = n(830215),
    R = n(803306),
    b = n(736653),
    D = n(573648),
    L = n(95561),
    w = n(269815),
    M = n(627363),
    P = n(587895),
    x = n(224750),
    U = n(62447),
    k = n(854378),
    G = n(968309),
    F = n(268218),
    V = n(272613),
    B = n(736056),
    H = n(14509),
    j = n(976860),
    Y = n(395671),
    W = n(889227),
    K = n(495544),
    z = n(30370),
    $ = n(287809),
    q = n(486020),
    Z = n(488926),
    X = n(998218),
    Q = n(123677),
    J = n(716965),
    ee = n(376092),
    et = n(647053),
    en = n(671523),
    ei = n(998445),
    er = n(11023),
    es = n(173936),
    ea = n(194261),
    eo = n(406810),
    el = n(430392),
    eu = n(231483),
    ec = n(20015),
    ed = n(935208),
    e_ = n(652215),
    ef = n(375708),
    eh = n(348418);
function ep(e) {
    let t,
        { application: n, scopes: r, redirectUri: s, approximateGuildCount: a, isEmbeddedFlow: o, disclosures: l } = e,
        u = new Date(ed.default.extractTimestamp(n.id)),
        c = (0, et.i4)(r),
        d = (0, ec.n)(n, e_.gfo.EMBEDDED);
    if (null != s && !d && !o)
        try {
            let e = new URL(s);
            t = null != e.host && e.host.length > 0 ? e.origin : e.href;
        } catch (e) {
            t = null;
        }
    return (0, i.jsxs)("div", {
        className: eh.B_,
        children: [
            null != t ? (0, i.jsx)(eE, { icon: es.q, text: ef.intl.format(ef.t["5k5OKD"], { origin: t }) }) : null,
            (0, i.jsx)(eE, {
                icon: ea.X,
                text: (function (e) {
                    let t = (0, U.t)(e);
                    if (null != e.privacy_policy_url && null != e.terms_of_service_url) {
                        let n = t ? ef.t.yVfotv : ef.t.rxlyKL;
                        return ef.intl.format(n, {
                            application: e.name,
                            privacyPolicyURL: e.privacy_policy_url,
                            termsOfServiceURL: e.terms_of_service_url,
                            discordPrivacyPolicyURL: e_.X7G.PRIVACY,
                        });
                    }
                    if (null != e.privacy_policy_url) {
                        let n = t ? ef.t.pYVSah : ef.t.TBvmM2;
                        return ef.intl.format(n, {
                            application: e.name,
                            privacyPolicyURL: e.privacy_policy_url,
                            discordPrivacyPolicyURL: e_.X7G.PRIVACY,
                        });
                    }
                    if (null != e.terms_of_service_url) {
                        let n = t ? ef.t.nBLOp5 : ef.t["q0T/Q1"];
                        return ef.intl.format(n, {
                            application: e.name,
                            termsOfServiceURL: e.terms_of_service_url,
                            discordPrivacyPolicyURL: e_.X7G.PRIVACY,
                        });
                    }
                    let n = t ? ef.t["8LemYv"] : ef.t["3Ywek3"];
                    return ef.intl.format(n, { application: e.name, discordPrivacyPolicyURL: e_.X7G.PRIVACY });
                })(n),
            }),
            (0, i.jsx)(eE, { icon: eo.O, text: ef.intl.formatToPlainString(ef.t["+1bjc8"], { date: u }) }),
            r.includes(_.F.BOT) && null != a
                ? (0, i.jsx)(eE, { icon: el.C, text: ef.intl.formatToPlainString(ef.t.UHGHSP, { guildCount: a }) })
                : null,
            (0, i.jsx)(eE, { icon: eu.l, text: c }),
            null != l
                ? l.map((e) => {
                      let t = (0, x.wI)(e),
                          n = ((e) => {
                              switch (e) {
                                  case x.yW.IP_LOCATION:
                                      return ei.L;
                                  case x.yW.DISPLAYS_ADVERTISEMENTS:
                                      return er.J;
                                  default:
                                      return null;
                              }
                          })(e);
                      return null != n && null != t ? (0, i.jsx)(eE, { icon: n, text: t }) : null;
                  })
                : null,
        ],
    });
}
function eE(e) {
    let { icon: t, text: n } = e;
    return (0, i.jsxs)("div", {
        className: eh.f_,
        children: [
            (0, i.jsx)(t, { className: eh.u7, color: "currentColor" }),
            (0, i.jsx)(T.E, { variant: "text-xs/normal", className: eh.z9, children: n }),
        ],
    });
}
var em = n(214947),
    eg = n(845798),
    eA = n(687966),
    eI = n(625903),
    eT = n(975571),
    eS = n(645650);
function eN(e) {
    let t,
        { application: n, accountScopes: r } = e,
        s = [],
        a = (0, U.A)(n);
    return (r.includes(_.F.SDK_SOCIAL_LAYER)
        ? ((t = a
              ? ef.intl.format(ef.t.GxjwZM, {
                    applicationName: n.name,
                    learnMoreURL: eT.A.getArticleURL(e_.MVz.SOCIAL_LAYER_CONNECTIONS),
                })
              : ef.intl.format(ef.t.DfBeUq, { learnMoreURL: eT.A.getArticleURL(e_.MVz.SOCIAL_LAYER_CONNECTIONS) })),
          s.push(
              {
                  icon: em.$,
                  text: a
                      ? ef.intl.formatToPlainString(ef.t.z9peav, { maxFriends: e_.$4X })
                      : ef.intl.formatToPlainString(ef.t.WNKzo9, { maxFriends: e_.$4X }),
              },
              { icon: eg.S, text: a ? ef.intl.string(ef.t.daY6xj) : ef.intl.string(ef.t.j7peBh) },
              { icon: eA._, text: a ? ef.intl.string(ef.t["/bdaNN"]) : ef.intl.string(ef.t["feD3+i"]) },
              { icon: eI.Z, text: a ? ef.intl.string(ef.t.mSqazC) : ef.intl.string(ef.t.YFFVM1) },
          ))
        : r.includes(_.F.SDK_SOCIAL_LAYER_PRESENCE) &&
          ((t = a
              ? ef.intl.format(ef.t.GxjwZM, {
                    applicationName: n.name,
                    learnMoreURL: eT.A.getArticleURL(e_.MVz.SOCIAL_LAYER_CONNECTIONS),
                })
              : ef.intl.format(ef.t.DfBeUq, { learnMoreURL: eT.A.getArticleURL(e_.MVz.SOCIAL_LAYER_CONNECTIONS) })),
          s.push(
              {
                  icon: em.$,
                  text: a
                      ? ef.intl.formatToPlainString(ef.t.z9peav, { maxFriends: e_.$4X })
                      : ef.intl.formatToPlainString(ef.t.WNKzo9, { maxFriends: e_.$4X }),
              },
              { icon: eA._, text: a ? ef.intl.string(ef.t["/bdaNN"]) : ef.intl.string(ef.t["feD3+i"]) },
              { icon: eI.Z, text: a ? ef.intl.string(ef.t.mSqazC) : ef.intl.string(ef.t.YFFVM1) },
          )),
    0 === s.length)
        ? null
        : (0, i.jsxs)("div", {
              className: eS.b9,
              children: [
                  null != t ? (0, i.jsx)(S.D, { variant: "heading-sm/normal", className: eS.a9, children: t }) : null,
                  s.map((e, t) => {
                      let { icon: n, text: r } = e;
                      return (0, i.jsx)(ey, { icon: n, text: r }, t);
                  }),
              ],
          });
}
function ey(e) {
    let { icon: t, text: n } = e;
    return (0, i.jsxs)("div", {
        className: eS.f_,
        children: [
            (0, i.jsx)(t, { className: eS.u7, color: "currentColor" }),
            (0, i.jsx)(T.E, { variant: "text-md/normal", className: eS.u0, children: n }),
        ],
    });
}
var eC = n(285796),
    ev = n(628284),
    eO = n(444927),
    eR = n(415122);
function eb(e) {
    let { text: t, error: n, isFake: r } = e;
    return (0, i.jsxs)("div", {
        className: eR.z8,
        children: [
            r
                ? (0, i.jsx)(eC.a, { size: "md", color: "currentColor", className: a()(eR.Kk, eR.RC) })
                : (0, i.jsx)(ev.y, { size: "md", color: "currentColor", className: a()(eR.Kk, eR.sc) }),
            (0, i.jsxs)("div", {
                className: eR.rv,
                children: [
                    (0, i.jsx)(T.E, { variant: "text-md/normal", color: r ? "text-muted" : void 0, children: t }),
                    null != n
                        ? (0, i.jsx)(T.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: n })
                        : null,
                ],
            }),
        ],
    });
}
function eD(e) {
    let {
            application: t,
            accountScopes: n,
            requestedScopes: r,
            integrationType: s,
            errors: o,
            isTrustedName: l = !1,
            noDivider: u = !1,
        } = e,
        c = (0, eO.A)(() => et.O_[Math.floor(Math.random() * et.O_.length)]);
    if (0 === n.length) return null;
    let f = c(),
        h = l ? ef.t.PZpY9c : ef.t["1Hz+Sl"],
        p = s === d.b.USER_INSTALL && r.includes(_.F.APPLICATIONS_COMMANDS);
    return (0, i.jsxs)("div", {
        className: a()(eR.Wu, u ? eR.bc : void 0),
        children: [
            (0, i.jsx)(S.D, {
                variant: "heading-sm/normal",
                className: eR.a9,
                children: ef.intl.format(h, { application: t?.name ?? "" }),
            }),
            n
                .map((e) =>
                    (0, et.rY)(e, n).map((t, n) =>
                        (0, i.jsx)(eb, { text: t, error: 0 === n ? o?.[e]?.[0] : void 0 }, `${e}-${n}`),
                    ),
                )
                .flat(),
            p && (0, i.jsx)(eb, { text: ef.intl.string(ef.t.Ls2XRq) }),
            (0, i.jsx)(eb, { text: f, isFake: !0 }),
        ],
    });
}
var eL = n(150934),
    ew = n(789645),
    eM = n(751645);
function eP(e) {
    let { application: t, permissions: n, deniedPermissions: s, onPermissionsChange: a, guild: o } = e,
        l = r.useMemo(() => f.B8(o.permissions), [o.permissions]);
    r.useEffect(() => {
        a(!1, f.pb(n, l));
    }, [l, a, n]);
    let u = ee.Q.filter((e) => f.zy(n, e)),
        c = u
            .filter((e) => !f.zy(l, e))
            .map((e) => {
                let t = (0, ee.hx)(e),
                    n = !f.zy(s, e);
                return (0, i.jsx)(
                    "li",
                    {
                        className: eM.EK,
                        children: (0, i.jsx)(eL.S, { checked: n, onChange: (t) => a(t, e), label: t }),
                    },
                    String(e),
                );
            }),
        d = u
            .filter((e) => f.zy(l, e))
            .map((e) => {
                let t = (0, ee.hx)(e);
                return (0, i.jsxs)(
                    "li",
                    {
                        className: eM.EK,
                        children: [
                            (0, i.jsx)("div", {
                                className: eM.nW,
                                children: (0, i.jsx)(ew.P, { size: "md", color: "currentColor", className: eM.Kk }),
                            }),
                            (0, i.jsx)(T.E, { variant: "text-md/normal", children: t }),
                        ],
                    },
                    String(e),
                );
            });
    return (0, i.jsxs)("div", {
        className: eM.AS,
        children: [
            c.length > 0
                ? (0, i.jsxs)("div", {
                      children: [
                          (0, i.jsx)(T.E, {
                              variant: "text-sm/medium",
                              color: "text-default",
                              children: ef.intl.format(ef.t.sOaT2j, { applicationName: t.name, guildName: o.name }),
                          }),
                          (0, i.jsx)("ul", { className: eM.RH, children: c }),
                      ],
                  })
                : null,
            d.length > 0
                ? (0, i.jsxs)("div", {
                      children: [
                          (0, i.jsx)(T.E, {
                              variant: "text-sm/medium",
                              color: "text-default",
                              children: ef.intl.format(ef.t.fsOkF4, { applicationName: t.name }),
                          }),
                          (0, i.jsx)("ul", { className: eM.RH, children: d }),
                      ],
                  })
                : null,
        ],
    });
}
var ex = n(783878),
    eU = n(551280);
function ek(e) {
    let { error: t, selectedGuildId: n, onGuildChange: r, guilds: s, disabled: a = !1 } = e,
        o = s
            .filter((e) => f.zy(e.permissions, e_.xBc.MANAGE_GUILD))
            .map((e) => ({ id: e.id, value: e.id, label: e.name }));
    return (0, i.jsx)("div", {
        className: eU.g,
        children: (0, i.jsx)(ex.Z, {
            label: ef.intl.string(ef.t["1DXFFd"]),
            helperText: ef.intl.format(ef.t.t9Jm9o, {}),
            errorMessage: t,
            selectionMode: "single",
            maxOptionsVisible: 5,
            placeholder: ef.intl.string(ef.t.oM4E1A),
            options: o,
            onSelectionChange: r,
            disabled: a,
            value: n ?? void 0,
        }),
    });
}
var eG = n(665260),
    eF = n(939249),
    eV = n(97808),
    eB = n(709066),
    eH = n(566615),
    ej = n(778712),
    eY = n(510523);
function eW(e) {
    let { user: t, application: n, bot: s, accountScopes: a, showLogout: o, location: l, scopes: u } = e,
        c = (0, eH.i)(),
        d = q.Ay.getApplicationIconURL({ id: n.id, icon: n.icon }),
        _ = q.Ay.getUserAvatarURL(t),
        f = r.useMemo(
            () =>
                u.some((e) => (0, et.RM)(e))
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(T.E, {
                                  variant: "text-lg/normal",
                                  color: "text-default",
                                  children: ef.intl.string(ef.t.uT1CPa),
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
                                          ? (0, i.jsx)(eB.A, {
                                                className: eY.AO,
                                                verified:
                                                    null != s.public_flags &&
                                                    (0, eG.Lt)(s.public_flags, e_.nhx.VERIFIED_BOT),
                                            })
                                          : null,
                                  ],
                              }),
                              a.length > 0
                                  ? (0, i.jsx)(T.E, {
                                        variant: "text-md/normal",
                                        color: "text-default",
                                        children: ef.intl.string(ef.t.jFbDnJ),
                                    })
                                  : (0, i.jsx)(T.E, {
                                        variant: "text-md/normal",
                                        color: "text-default",
                                        children: ef.intl.string(ef.t["X+Fdpo"]),
                                    }),
                          ],
                      }),
            [a.length, n, s, u],
        );
    return (0, i.jsxs)("header", {
        id: c,
        className: eY.wx,
        children: [
            (0, i.jsxs)("div", {
                className: eY.Y,
                children: [
                    (0, i.jsx)(eV.eu, { className: eY.my, src: d, size: ej._3.SIZE_80, "aria-label": n.name }),
                    (0, i.jsxs)("div", {
                        className: eY.I5,
                        children: [
                            (0, i.jsx)("div", { className: eY.pw }),
                            (0, i.jsx)("div", { className: eY.pw }),
                            (0, i.jsx)("div", { className: eY.pw }),
                        ],
                    }),
                    (0, i.jsx)(eV.eu, { className: eY.my, src: _, size: ej._3.SIZE_80, "aria-label": t.username }),
                ],
            }),
            f,
            o
                ? (0, i.jsx)("div", {
                      className: eY.Ny,
                      children: (0, i.jsxs)(T.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: [
                              ef.intl.format(ef.t.qRvpYU, {
                                  userHook: () =>
                                      (0, i.jsxs)(
                                          T.E,
                                          {
                                              className: eY.ZD,
                                              variant: "text-sm/normal",
                                              children: [
                                                  t.username,
                                                  !t.hasUniqueUsername() &&
                                                      (0, i.jsx)(T.E, {
                                                          className: eY.Jb,
                                                          variant: "text-sm/normal",
                                                          children: `#${t.discriminator}`,
                                                      }),
                                              ],
                                          },
                                          t.id,
                                      ),
                              }),
                              (0, i.jsx)(eF.D, {
                                  tag: "a",
                                  className: eY.Pg,
                                  onClick: () => (0, J.Vh)(l, "oauth2_logout"),
                                  children: ef.intl.string(ef.t["yV/hjC"]),
                              }),
                          ],
                      }),
                  })
                : null,
        ],
    });
}
var eK = n(321987),
    ez = n(595244);
function e$(e) {
    let { selectedGuildId: t, selectedChannelId: n, onChannelChange: s, error: a } = e,
        [o, l] = r.useState(null),
        u = r.useRef(!1);
    if (
        (r.useEffect(() => {
            async function e(e) {
                let n = await (0, J.$Q)(e);
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
        className: eU.g,
        children: (0, i.jsx)(ex.Z, {
            label: ef.intl.string(ef.t["8qKd+J"]),
            helperText: ef.intl.string(ef.t.kQXMfN),
            selectionMode: "single",
            maxOptionsVisible: 5,
            errorMessage: a,
            onSelectionChange: s,
            placeholder: ef.intl.string(ef.t["Re/64R"]),
            options: c,
            value: n ?? void 0,
        }),
    });
}
var eq = n(613057),
    eZ = n(636663);
let eX = (0, F.Fe)({
    createPromise: () =>
        Promise.all([
            n.e("83004"),
            n.e("6772"),
            n.e("60060"),
            n.e("86522"),
            n.e("83419"),
            n.e("758"),
            n.e("89203"),
            n.e("55719"),
            n.e("58858"),
            n.e("80747"),
            n.e("88999"),
            n.e("60571"),
            n.e("9131"),
            n.e("71934"),
            n.e("52196"),
            n.e("74672"),
            n.e("94864"),
            n.e("22513"),
            n.e("7053"),
            n.e("86483"),
            n.e("32260"),
            n.e("84617"),
            n.e("68953"),
            n.e("26032"),
            n.e("76283"),
            n.e("18125"),
            n.e("13498"),
            n.e("24199"),
            n.e("207"),
            n.e("57036"),
            n.e("98839"),
            n.e("88941"),
            n.e("61379"),
            n.e("62680"),
            n.e("21825"),
            n.e("98125"),
            n.e("43039"),
            n.e("18441"),
            n.e("76640"),
            n.e("25693"),
            n.e("28154"),
            n.e("48804"),
            n.e("88077"),
            n.e("32606"),
            n.e("18401"),
            n.e("14879"),
            n.e("13681"),
            n.e("53729"),
            n.e("10004"),
            n.e("55314"),
            n.e("89094"),
            n.e("29177"),
            n.e("33902"),
            n.e("32551"),
            n.e("31658"),
            n.e("4369"),
            n.e("23353"),
            n.e("53930"),
            n.e("46270"),
            n.e("86949"),
            n.e("50015"),
            n.e("47017"),
            n.e("11523"),
            n.e("66900"),
            n.e("1555"),
            n.e("44695"),
            n.e("21690"),
            n.e("44376"),
            n.e("99999"),
            n.e("11527"),
            n.e("31644"),
            n.e("70653"),
            n.e("45723"),
            n.e("63070"),
            n.e("70697"),
            n.e("18546"),
            n.e("72535"),
            n.e("38835"),
            n.e("76170"),
            n.e("37622"),
            n.e("18943"),
            n.e("84103"),
            n.e("9915"),
            n.e("53614"),
            n.e("96123"),
            n.e("31825"),
            n.e("36320"),
            n.e("20320"),
            n.e("95387"),
            n.e("31390"),
            n.e("43919"),
            n.e("90889"),
            n.e("51243"),
            n.e("46248"),
            n.e("45421"),
            n.e("44265"),
            n.e("99141"),
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
            n.e("93158"),
            n.e("84967"),
            n.e("23216"),
            n.e("87079"),
            n.e("31145"),
            n.e("78707"),
            n.e("3458"),
            n.e("62827"),
            n.e("73547"),
            n.e("99593"),
            n.e("61935"),
            n.e("62168"),
            n.e("55602"),
            n.e("28128"),
            n.e("59023"),
            n.e("91381"),
            n.e("10034"),
            n.e("73500"),
            n.e("25252"),
            n.e("71133"),
            n.e("78050"),
            n.e("80262"),
            n.e("56385"),
            n.e("59132"),
            n.e("58405"),
        ]).then(n.bind(n, 991054)),
    webpackId: 991054,
});
function eQ() {
    let e = (0, o.zy)(),
        t = r.useMemo(() => (0, Q._)(e.search), [e.search]);
    (0, w.A)();
    let s = !e.search.includes("response_type"),
        [a, l] = r.useState(!1),
        u = r.useRef(!1),
        [d, _] = r.useState(null),
        f = !c.Fr && !a && (s || !K.default.isAuthenticated());
    if (
        (r.useEffect(() => {
            if (c.Ct && s) {
                let t = new URL("discord://action/oauth2/authorize");
                (t.search = e.search), window.open(t.toString(), "_self");
            } else
                c.Fr ||
                    (!s && K.default.isAuthenticated()) ||
                    u.current ||
                    ((u.current = !0),
                    Promise.resolve()
                        .then(n.bind(n, 129014))
                        .then((t) => {
                            let { default: n } = t;
                            if (s)
                                n.request(e_.e$_.DEEP_LINK, { type: eq.XK.OAUTH2, params: { search: e.search } })
                                    .then((e) => {
                                        _(e ?? !1);
                                    })
                                    .catch(() => _(!1))
                                    .then(() => n.disconnect());
                            else {
                                _(!0);
                                let t = new URLSearchParams(e.search);
                                n.request(e_.e$_.AUTHORIZE, {
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
                              (0, i.jsx)(k.hE, { children: ef.intl.string(ef.t.csrAMJ) }),
                              (0, i.jsx)(k.tK, {
                                  children: s ? ef.intl.string(ef.t["m1+IBn"]) : ef.intl.string(ef.t.kRzrSO),
                              }),
                              (0, i.jsx)(g.$, {
                                  onClick: () => l(!0),
                                  variant: "primary",
                                  text: ef.intl.string(ef.t.fIv16B),
                              }),
                          ],
                      })
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(k.hE, { children: ef.intl.string(ef.t["Z+hCVU"]) }),
                              (0, i.jsx)(I.y, {}),
                          ],
                      })),
            (0, i.jsx)(eK.$, { removeChildWrapper: !0, children: (0, i.jsx)("div", { className: eZ.ah, children: e }) })
        );
    }
    return (0, i.jsx)(eK.$, {
        removeChildWrapper: !0,
        children: (0, i.jsx)(eJ, {
            transitionState: p.i.ENTERED,
            ...t,
            showLogout: !0,
            isExternalStandaloneOAuthPage: !0,
            hideHeader: !0,
        }),
    });
}
function eJ(e) {
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
        } = e3({ ...e }),
        h =
            null != s || null != o || null != c
                ? (0, i.jsxs)("div", {
                      className: eZ.Gq,
                      children: [
                          s,
                          (0, i.jsx)("div", {
                              className: eZ.FG,
                              children: (0, i.jsxs)("div", {
                                  className: a()(eZ.Qs, d ? eZ.cw : null, _ ? eZ.pN : null),
                                  children: [o, null == u ? c : null],
                              }),
                          }),
                      ],
                  })
                : null;
    return (0, i.jsx)(eK.f, {
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
function e0(e) {
    let { clientId: t, platformType: n, platformName: s } = e,
        a = (0, E.bG)([P.A], () => P.A.getApplication(t), [t]),
        o = (0, E.bG)([K.default, $.default], () => (null != K.default.getId() ? $.default.getCurrentUser() : null)),
        l = (0, b.Ay)(),
        u = D.A.get(n),
        c = null != u ? ((0, A.q)(l) ? u.icon.lightSVG : u.icon.darkSVG) : null,
        d = null != a ? q.Ay.getApplicationIconURL({ id: a.id, icon: a.icon }) : null,
        _ = null != o ? q.Ay.getUserAvatarURL(o) : null,
        f = a?.name ?? "";
    return (
        r.useEffect(() => {
            M.Ay.fetchApplication(t);
        }, [t]),
        (0, i.jsxs)("div", {
            className: eZ.E4,
            children: [
                (0, i.jsxs)("div", {
                    className: eZ.z1,
                    children: [
                        (0, i.jsxs)("div", {
                            className: eZ.q3,
                            children: [
                                null != d
                                    ? (0, i.jsx)("img", { src: d, alt: f, className: eZ.gO })
                                    : (0, i.jsx)("div", { className: eZ.gO }),
                                (0, i.jsx)(h.j, { size: "md", color: "currentColor" }),
                                null != _ && (0, i.jsx)("img", { src: _, alt: "", className: eZ.eh }),
                            ],
                        }),
                        (0, i.jsx)(T.E, { variant: "text-lg/normal", children: ef.intl.string(ef.t.uT1CPa) }),
                        (0, i.jsx)(S.D, { variant: "heading-xl/semibold", children: f }),
                    ],
                }),
                (0, i.jsx)(T.E, {
                    variant: "text-sm/normal",
                    children: ef.intl.format(ef.t["aJRE/Q"], { applicationName: f, platformName: s }),
                }),
                (0, i.jsxs)("div", {
                    className: eZ.eD,
                    children: [
                        null != c && (0, i.jsx)("img", { src: c, alt: "", className: eZ.sw }),
                        (0, i.jsx)(T.E, { variant: "text-md/medium", className: eZ.PP, children: s }),
                        (0, i.jsx)(g.$, {
                            variant: "primary",
                            size: "sm",
                            onClick: function () {
                                (0, G.A)({ platformType: n, location: "OAuth2 Connect Account Step" });
                            },
                            text: ef.intl.string(ef.t.S0W8Z5),
                        }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: eZ.sT,
                    children: [
                        (0, i.jsx)(N.m, { size: "sm", color: "currentColor", className: eZ.Vi }),
                        (0, i.jsx)(T.E, {
                            variant: "text-sm/normal",
                            children: ef.intl.format(ef.t["8psEFX"], { platformName: s, applicationName: f }),
                        }),
                    ],
                }),
            ],
        })
    );
}
function e1(e) {
    let { platformType: t, platformName: n, connectedAccount: r } = e,
        s = (0, b.Ay)(),
        a = D.A.get(t),
        o = null != a ? ((0, A.q)(s) ? a.icon.lightSVG : a.icon.darkSVG) : null;
    return (0, i.jsxs)("div", {
        className: eZ.E4,
        children: [
            (0, i.jsx)(T.E, {
                variant: "text-sm/normal",
                children: ef.intl.format(ef.t["+oaRw3"], { platformName: n }),
            }),
            (0, i.jsxs)("div", {
                className: eZ.eD,
                children: [
                    null != o && (0, i.jsx)("img", { src: o, alt: "", className: eZ.sw }),
                    (0, i.jsxs)("div", {
                        className: eZ.mG,
                        children: [
                            (0, i.jsx)(T.E, { variant: "text-md/medium", children: r.name }),
                            (0, i.jsx)(T.E, {
                                variant: "text-xs/normal",
                                children: ef.intl.format(ef.t.Dkd7sE, { platformName: n, connectedAccountId: r.id }),
                            }),
                        ],
                    }),
                    (0, i.jsx)(y.A, { size: "sm", color: "status-positive" }),
                ],
            }),
            (0, i.jsx)("div", { className: eZ.zd }),
        ],
    });
}
function e2() {
    return (0, i.jsx)("div", { className: eZ.g4, children: (0, i.jsx)(I.y, { className: eZ.u1 }) });
}
function e3(e) {
    let t,
        n,
        s,
        a,
        c,
        {
            clientId: h,
            responseType: p,
            redirectUri: m,
            codeChallenge: g,
            codeChallengeMethod: A,
            state: I,
            nonce: S,
            prompt: N,
            authorizations: y,
            scopes: b,
            permissions: w,
            guildId: P,
            channelId: k,
            integrationType: G,
            disableGuildSelect: F = !1,
            showLogout: V = !1,
            cancelCompletesFlow: H = !0,
            isTrustedName: $ = !1,
            isEmbeddedFlow: q = !1,
            callback: ei,
            callbackWithoutPost: er,
            onClose: es,
            disclosures: ea,
            isExternalStandaloneOAuthPage: eo = !1,
            isTwoWayLinkDiscordConsent: el = !1,
            connectedAccountProvider: eu,
        } = e,
        ec = null != G ? y?.get(G) : void 0,
        ed = (0, o.zy)(),
        eh = (0, E.bG)([B.A], () => B.A.hasLoadedExperiments);
    r.useEffect(() => {
        K.default.isAuthenticated() && !eh && O.A.getExperiments();
    }, [eh]);
    let [eE, em] = r.useState(null),
        [eg, eA] = r.useState(null),
        [eI, eT] = r.useState(null),
        [eS, ey] = r.useState(!1),
        [eC, ev] = r.useState(!1),
        eO = eE?.guilds,
        [eR, eb] = r.useState(P ?? null),
        [eL, ew] = r.useState(k ?? null),
        [eM, ex] = r.useState(Z.x3),
        eU = (0, E.bG)([z.A], () => (null == eu ? null : (z.A.getAccounts().find((e) => e.type === eu) ?? null)), [eu]),
        eG = null == eu || null != eU,
        eF = r.useMemo(() => (eE?.user != null ? new W.A(eE.user) : null), [eE?.user]),
        eV = (0, U.A)(eE?.application ?? null),
        eB = r.useMemo(() => eO?.find((e) => e.id === eR), [eO, eR]),
        [eH, ej] = r.useState(null),
        eY = r.useMemo(() => null == ec && null == G && (b?.length ?? 0) === 0 && null == m, [ec, b?.length, m, G]),
        [eK, eq] = r.useState(null);
    r.useEffect(() => {
        eY && M.Ay.fetchApplication(h).then((e) => eq(Y.Ay.createFromServer(e)));
    }, [h, eY]);
    let eQ = r.useMemo(
            () => (null == eH ? null : eK?.integrationTypesConfig?.[eH]?.oauth2InstallParams),
            [eK?.integrationTypesConfig, eH],
        ),
        { requestedScopes: eJ, accountScopes: e3 } = r.useMemo(() => {
            let e = eY ? eQ?.scopes : b,
                t = (0, Q.e)(e ?? []),
                n = et.k$.filter((e) => t.includes(e));
            return { requestedScopes: t, accountScopes: n };
        }, [eQ?.scopes, b, eY]),
        e6 = r.useMemo(() => (eY ? f.iu(eQ?.permissions ?? 0) : w) ?? Z.x3, [eQ?.permissions, w, eY]),
        e4 = r.useRef(!1),
        [e5, e7] = r.useState(ea ?? []),
        [e8, e9] = r.useState(null != ea && ea.length > 0);
    (0, u.Ay)(() => {
        let e = K.default.getAnalyticsToken();
        null != e
            ? v.h.dispatch({ type: "SET_ANALYTICS_TOKEN", analyticsToken: e, userId: K.default.getId() })
            : (0, R.rQ)({ withAnalyticsToken: !0 }).catch(e_.tEg);
    }),
        r.useEffect(() => {
            if (e4.current) return;
            let e = async () => {
                e4.current = !0;
                try {
                    let { disclosures: e, allAcked: t } = await (0, x.vG)(h);
                    e9(!t), e7(e);
                } catch (n) {
                    let { status: e, body: t } = n;
                    if (401 === e) return void (0, J.Vh)(ed, "oauth2_error_failed_disclosures");
                    eT(Error(null != t.message ? t.message : `${Object.keys(t)[0]}: ${Object.values(t)[0]}`));
                } finally {
                    e4.current = !1;
                }
            };
            if (null == ea) {
                if (!K.default.isAuthenticated()) return void (0, J.Vh)(ed, "oauth2_error_not_authenticated");
                e();
            }
        }, [h, ed, ea, e7, eT, e9, eA]);
    let te = r.useCallback(
            async (e) => {
                if (null != er) {
                    ey(!0), er(e);
                    return;
                }
                if (!e && !H) {
                    null != ei && (ei({ application: eE?.application, guild: eB }), es?.());
                    return;
                }
                if (null == eH) return void eT(Error("No integration type was selected."));
                try {
                    ey(!0);
                    let t = await (0, J.Gq)({
                        authorize: e,
                        clientId: h,
                        scopes: eJ,
                        responseType: p,
                        redirectUri: m,
                        codeChallenge: g,
                        codeChallengeMethod: A,
                        state: I,
                        nonce: S,
                        integrationType: eH,
                        connectedAccountProvider: eu,
                        permissions: f.TF(e6, eM),
                        guildId: eH === d.b.GUILD_INSTALL && null != eR ? eR : void 0,
                        channelId: eH === d.b.GUILD_INSTALL && null != eL ? eL : void 0,
                    });
                    if ((e && (await (0, x.Yx)(h, e5)), null != ei))
                        ei({ application: eE?.application, location: t.location, guild: eB, scopes: eJ }), es?.();
                    else if (null != t.location) {
                        let e = X.A.toURLSafe(t.location)?.pathname;
                        X.A.isDiscordUrl(t.location) && e === e_.BVt.OAUTH2_AUTHORIZED
                            ? (0, j.pX)(e_.BVt.OAUTH2_AUTHORIZED, {
                                  state: { application: eE?.application, guild: eB },
                              })
                            : (window.location = t.location);
                    } else ey(!1);
                } catch (t) {
                    let e = t.body;
                    e?.message != null && "" !== e.message ? eT(Error(e.message)) : eT(e),
                        eA("AUTHORIZE_SCOPES"),
                        ey(!1);
                }
            },
            [er, H, ei, eE?.application, eB, es, h, eJ, p, m, g, A, I, S, e6, eM, eR, eH, eu, eL, e5],
        ),
        tt = r.useRef(!1),
        tn = r.useCallback(async () => {
            if (!K.default.isAuthenticated()) return void (0, J.Vh)(ed, "oauth2_error_not_authenticated");
            if (!e4.current && !tt.current) {
                tt.current = !0;
                try {
                    var e;
                    let t =
                        null != ec
                            ? ec
                            : await (0, J.qY)({
                                  clientId: h,
                                  scopes: eJ,
                                  responseType: p,
                                  redirectUri: m,
                                  codeChallenge: g,
                                  codeChallengeMethod: A,
                                  state: I,
                                  nonce: S,
                                  integrationType: eH ?? void 0,
                                  connectedAccountProvider: eu,
                              });
                    em(
                        ((e = t),
                        null == e.guilds
                            ? e
                            : { ...e, guilds: e.guilds.map((e) => ({ ...e, permissions: f.iu(e.permissions) })) }),
                    ),
                        N === en.l.NONE && t.authorized && !e8 && te(!0),
                        (0, L.zV)(e_.HAw.OAUTH2_AUTHORIZE_VIEWED, { application_id: t.application.id });
                } catch (n) {
                    let { status: e, body: t } = n;
                    if (401 === e) return void (0, J.Vh)(ed, "oauth2_error_unauthorized");
                    eT(Error(null != t.message ? t.message : `${Object.keys(t)[0]}: ${Object.values(t)[0]}`));
                } finally {
                    tt.current = !1;
                }
            }
        }, [ed, ec, h, eJ, p, m, g, A, I, S, eH, eu, N, te, e8]),
        ti = r.useMemo(
            () =>
                null != eK && eY
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
            [eK, eY],
        ),
        tr = r.useRef(null);
    r.useEffect(() => {
        eg !== tr.current &&
            ((tr.current = eg),
            (0, L.zV)(e_.HAw.OAUTH2_AUTHORIZE_STEP_VIEWED, {
                step: eg,
                application_id: h,
                integration_type: eH,
                scopes: eJ,
                permissions: e6.toString(),
            }));
    }, [h, eH, e6, eJ, eg]),
        r.useEffect(() => {
            null == eg &&
                (!eY || null != eK) &&
                eh &&
                (null == eu || eG
                    ? null != ec
                        ? (ej(ec.integration_type ?? d.b.GUILD_INSTALL), eA("AUTHORIZE_SCOPES"))
                        : ti.length > 1
                          ? eA("SELECT_INSTALL_TYPE")
                          : (1 === ti.length ? ej(ti[0]) : null != G ? ej(G) : ej(d.b.GUILD_INSTALL),
                            eA("AUTHORIZE_SCOPES"))
                    : eA("CONNECT_ACCOUNT"));
        }, [ec, ti, eK, eY, eu, eG, G, eg, eh]),
        r.useEffect(() => {
            "CONNECT_ACCOUNT" === eg && eG && (ej(G ?? d.b.USER_INSTALL), eA("AUTHORIZE_SCOPES"));
        }, [eg, eG, G]),
        r.useEffect(() => {
            if (null == eH || null != eE || null != eI) return;
            eH === d.b.USER_INSTALL && (eb(null), ew(null));
            let e = eJ.filter((e) => !et.gX.includes(e));
            0 === eJ.length
                ? eT(Error("No scopes were provided."))
                : e.length > 0
                  ? eT(Error(`Invalid scope: ${e[0]}`))
                  : (0, ee.F7)(e6)
                    ? eT(Error("Invalid permission(s) provided."))
                    : tn();
        }, [e8, tn, eJ, e6, eH, eE, eI]);
    let ts = r.useCallback((e) => {
            e && ev(!0);
        }, []),
        ta = (0, l.K)(ts);
    if (eI instanceof Error)
        return eo
            ? { body: (0, i.jsx)(ez.gz, { message: eI.message }) }
            : el
              ? {
                    label: ef.intl.string(ef.t.j2d6Km),
                    header: (0, i.jsx)(T.E, {
                        variant: "text-lg/bold",
                        color: "text-strong",
                        children: ef.intl.string(ef.t.j2d6Km),
                    }),
                    body: (0, i.jsx)(T.E, { variant: "text-md/normal", color: "text-default", children: eI.message }),
                    actions: [{ onClick: es, text: ef.intl.string(ef.t.cpT0Cq) }],
                    noPadding: !0,
                }
              : {
                    title: ef.intl.string(ef.t.j2d6Km),
                    subtitle: eI.message,
                    actions: [{ onClick: es, text: ef.intl.string(ef.t.cpT0Cq) }],
                };
    let to = null != eu ? (D.A.get(eu)?.name ?? "") : "",
        tl = !1,
        tu = !1,
        tc = !0,
        td = !0,
        t_ = !0,
        tf = !1;
    switch (eg) {
        case null:
            return { label: ef.intl.string(ef.t.ZTNur7), body: (0, i.jsx)(e2, {}) };
        case "CONNECT_ACCOUNT":
            (t = (0, i.jsx)(e0, { clientId: h, platformType: eu, platformName: to })),
                (tc = !1),
                (td = !1),
                (t_ = !1),
                (tl = !0);
            break;
        case "SELECT_INSTALL_TYPE":
            if (null == eK) return { label: ef.intl.string(ef.t.ZTNur7), body: (0, i.jsx)(e2, {}) };
            (t = (0, i.jsx)(eX, {
                application: eK,
                onSelect: (e) => {
                    ej(e), em(null), eA("AUTHORIZE_SCOPES");
                },
            })),
                (tc = !1),
                (td = !1),
                (t_ = !1),
                (tf = !0);
            break;
        case "AUTHORIZE_SCOPES":
            if (null == eE || null == eF || null == eH)
                return { label: ef.intl.string(ef.t.ZTNur7), body: (0, i.jsx)(e2, {}) };
            let th = null == eI || eI instanceof Error ? {} : eI,
                tp = eO?.sort((e, t) => e.name.toLowerCase().localeCompare(t.name.toLowerCase())),
                tE = eH === d.b.GUILD_INSTALL && eJ.includes(_.F.WEBHOOK_INCOMING),
                tm =
                    tE ||
                    (eH === d.b.GUILD_INSTALL && (eJ.includes(_.F.BOT) || eJ.includes(_.F.APPLICATIONS_COMMANDS)));
            (t = (0, i.jsxs)(i.Fragment, {
                children: [
                    null != eU &&
                        eG &&
                        (0, i.jsx)(e1, { platformType: eU.type, platformName: to, connectedAccount: eU }),
                    (0, i.jsx)(eN, { application: eE.application, accountScopes: e3 }),
                    (0, i.jsx)(eD, {
                        application: eE.application,
                        accountScopes: e3,
                        requestedScopes: eJ,
                        integrationType: eH,
                        errors: th,
                        isTrustedName: $ || eV,
                    }),
                    (0, i.jsx)("div", { className: eZ.sL, ref: ta }),
                    tm
                        ? (0, i.jsx)(ek, {
                              error: (th[_.F.BOT] ?? th[_.F.APPLICATIONS_COMMANDS] ?? [])[0],
                              selectedGuildId: eR,
                              onGuildChange: eb,
                              guilds: tp ?? [],
                              disabled: "" !== eR && null != eR && !0 === F,
                          })
                        : null,
                    tE
                        ? (0, i.jsx)(e$, {
                              error: (th[_.F.WEBHOOK_INCOMING] ?? [])[0],
                              selectedChannelId: eL,
                              selectedGuildId: eR,
                              onChannelChange: ew,
                          })
                        : null,
                ],
            })),
                eJ.includes(_.F.BOT) && !f.aI(e6, Z.x3) && (s = "AUTHORIZE_BOT_PERMISSIONS"),
                ti.length > 1 && (n = "SELECT_INSTALL_TYPE"),
                (tu = (tm && null == eB) || (tE && null == eL)),
                (tl = !0);
            break;
        case "AUTHORIZE_BOT_PERMISSIONS":
            if (null == eE) return { label: ef.intl.string(ef.t.ZTNur7), body: (0, i.jsx)(e2, {}) };
            (t = (0, i.jsx)(eP, {
                application: eE.application,
                permissions: e6,
                deniedPermissions: eM,
                onPermissionsChange: (e, t) => {
                    ex((n) => (e ? f.TF(n, t) : f.WQ(n, t)));
                },
                guild: eB,
            })),
                (n = "AUTHORIZE_SCOPES"),
                (tl = !0);
    }
    let tg = [];
    if (tc && null != eE) {
        let e = eE?.application.approximate_guild_count ?? eE?.bot?.approximate_guild_count;
        a = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(ep, {
                    application: eE.application,
                    scopes: eJ,
                    disclosures: e5,
                    redirectUri: eE.redirect_uri ?? null,
                    approximateGuildCount: void 0 !== e ? e : null,
                    isEmbeddedFlow: q,
                }),
                (0, i.jsx)("div", { className: eZ.sL, ref: ta }),
            ],
        });
    }
    if (
        (td &&
            null != eE &&
            null != eF &&
            (c = (0, i.jsx)(eW, {
                user: eF,
                application: eE.application,
                bot: eE.bot,
                accountScopes: e3,
                showLogout: V || !1,
                location: ed,
                scopes: eJ,
            })),
        t_ &&
            (tg.push(
                null != n
                    ? { variant: "secondary", onClick: () => eA(n), text: ef.intl.string(ef.t["13/7kX"]) }
                    : { variant: "secondary", onClick: () => te(!1), text: ef.intl.string(ef.t["ETE/oC"]) },
            ),
            "SELECT_INSTALL_TYPE" !== eg))
    ) {
        let e = "CONNECT_ACCOUNT" !== eg && !eC;
        tg.push(
            e
                ? { disabled: !0, loading: eS, text: ef.intl.string(ef.t.N22i9F), icon: C.M }
                : {
                      onClick: null != s ? () => eA(s) : () => te(!0),
                      loading: eS,
                      disabled: ("CONNECT_ACCOUNT" !== eg && null == a) || tu,
                      text: tu
                          ? ef.intl.string(ef.t.BwwiSM)
                          : null != s
                            ? ef.intl.string(ef.t["3PatSz"])
                            : ef.intl.string(ef.t["y+/PE9"]),
                  },
        );
    }
    return {
        label: "CONNECT_ACCOUNT" === eg ? ef.intl.string(ef.t.JGuDTr) : void 0,
        header: c,
        body: t,
        actions: tg,
        nextStep: s,
        appDetails: a,
        sendAuthorize: te,
        hasContentBackground: tl,
        noPadding: tf,
    };
}
function e6(e, t) {
    if (null == t.location || (null != e.callback && e.callback(t))) return;
    let { host: n, pathname: r, searchParams: s } = X.A.toURLSafe(t.location) ?? {},
        a = X.A.isDiscordHostname(n ?? null) || window.location.host === n;
    a && r === e_.BVt.OAUTH2_AUTHORIZED
        ? (0, m.openModal)((e) => (0, i.jsx)(ez.dR, { guild: t.guild, application: t.application, ...e }))
        : a && r?.startsWith(e_.BVt.OAUTH2_ERROR)
          ? (0, m.openModal)((e) => {
                let t = s?.get("error_description") ?? s?.get("error") ?? ef.intl.string(ef.t.mqn873);
                return (
                    Array.isArray(t) && (t = t[0]),
                    (0, i.jsx)(eK.f, { ...e, children: (0, i.jsx)(ez.gz, { message: t, onClose: e.onClose }) })
                );
            })
          : window.open(t.location, "_blank")?.focus();
}
function e4(e, t) {
    (0, H._9)() ? V.A.openCreateGuildModal({ onSuccess: (n) => e5({ ...e, guildId: n }, t) }) : e5(e, t);
}
function e5(e, t) {
    (0, m.openModal)((t) => (0, i.jsx)(eJ, { ...t, ...e, cancelCompletesFlow: !1, callback: e6.bind(null, e) }), {
        onCloseCallback: t,
    });
}
function e7(e) {
    let { hostname: t = "", host: n, pathname: i, search: r } = X.A.toURLSafe(e) ?? {};
    return null != i &&
        null != r &&
        (X.A.isDiscordHostname(t) || n === window.location.host) &&
        (i.startsWith(`/api${e_.Rsh.OAUTH2_AUTHORIZE}`) || i.startsWith(e_.BVt.OAUTH2_AUTHORIZE))
        ? (0, Q._)(r)
        : null;
}
