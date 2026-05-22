"use strict";
n.r(t),
    n.d(t, {
        OAuth2AuthorizeModal: () => e0,
        getOAuth2AuthorizeProps: () => e8,
        OAuth2AuthorizePage: () => eJ,
        openOAuth2Modal: () => e7,
        openOAuth2ModalWithCreateGuildModal: () => e5,
        useOAuth2AuthorizeForm: () => e6,
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
    eo = n(215026),
    el = n(406810),
    eu = n(430392),
    ec = n(231483),
    ed = n(20015),
    e_ = n(935208),
    ef = n(652215),
    eh = n(375708),
    ep = n(348418);
function eE(e) {
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
        c = new Date(e_.default.extractTimestamp(n.id)),
        d = (0, et.i4)(r),
        f = (0, ed.n)(n, ef.gfo.EMBEDDED);
    if (null != s && !f && !o)
        try {
            let e = new URL(s);
            t = null != e.host && e.host.length > 0 ? e.origin : e.href;
        } catch (e) {
            t = null;
        }
    return (0, i.jsxs)("div", {
        className: ep.B_,
        children: [
            null != t ? (0, i.jsx)(em, { icon: es.q, text: eh.intl.format(eh.t["5k5OKD"], { origin: t }) }) : null,
            (0, i.jsx)(em, {
                icon: ea.X,
                text: (function (e) {
                    let t = (0, U.t)(e);
                    if (null != e.privacy_policy_url && null != e.terms_of_service_url) {
                        let n = t ? eh.t.yVfotv : eh.t.rxlyKL;
                        return eh.intl.format(n, {
                            application: e.name,
                            privacyPolicyURL: e.privacy_policy_url,
                            termsOfServiceURL: e.terms_of_service_url,
                            discordPrivacyPolicyURL: ef.X7G.PRIVACY,
                        });
                    }
                    if (null != e.privacy_policy_url) {
                        let n = t ? eh.t.pYVSah : eh.t.TBvmM2;
                        return eh.intl.format(n, {
                            application: e.name,
                            privacyPolicyURL: e.privacy_policy_url,
                            discordPrivacyPolicyURL: ef.X7G.PRIVACY,
                        });
                    }
                    if (null != e.terms_of_service_url) {
                        let n = t ? eh.t.nBLOp5 : eh.t["q0T/Q1"];
                        return eh.intl.format(n, {
                            application: e.name,
                            termsOfServiceURL: e.terms_of_service_url,
                            discordPrivacyPolicyURL: ef.X7G.PRIVACY,
                        });
                    }
                    let n = t ? eh.t["8LemYv"] : eh.t["3Ywek3"];
                    return eh.intl.format(n, { application: e.name, discordPrivacyPolicyURL: ef.X7G.PRIVACY });
                })(n),
            }),
            null != u ? (0, i.jsx)(em, { icon: eo.w, text: eh.intl.string(eh.t["8qui3M"]) }) : null,
            (0, i.jsx)(em, { icon: el.O, text: eh.intl.formatToPlainString(eh.t["+1bjc8"], { date: c }) }),
            r.includes(_.F.BOT) && null != a
                ? (0, i.jsx)(em, { icon: eu.C, text: eh.intl.formatToPlainString(eh.t.UHGHSP, { guildCount: a }) })
                : null,
            (0, i.jsx)(em, { icon: ec.l, text: d }),
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
                      return null != n && null != t ? (0, i.jsx)(em, { icon: n, text: t }) : null;
                  })
                : null,
        ],
    });
}
function em(e) {
    let { icon: t, text: n } = e;
    return (0, i.jsxs)("div", {
        className: ep.f_,
        children: [
            (0, i.jsx)(t, { className: ep.u7, color: "currentColor" }),
            (0, i.jsx)(T.E, { variant: "text-xs/normal", className: ep.z9, children: n }),
        ],
    });
}
var eg = n(214947),
    eA = n(845798),
    eI = n(687966),
    eT = n(625903),
    eS = n(975571),
    eN = n(645650);
function ey(e) {
    let t,
        { application: n, accountScopes: r } = e,
        s = [],
        a = (0, U.A)(n);
    return (r.includes(_.F.SDK_SOCIAL_LAYER)
        ? ((t = a
              ? eh.intl.format(eh.t.GxjwZM, {
                    applicationName: n.name,
                    learnMoreURL: eS.A.getArticleURL(ef.MVz.SOCIAL_LAYER_CONNECTIONS),
                })
              : eh.intl.format(eh.t.DfBeUq, { learnMoreURL: eS.A.getArticleURL(ef.MVz.SOCIAL_LAYER_CONNECTIONS) })),
          s.push(
              {
                  icon: eg.$,
                  text: a
                      ? eh.intl.formatToPlainString(eh.t.z9peav, { maxFriends: ef.$4X })
                      : eh.intl.formatToPlainString(eh.t.WNKzo9, { maxFriends: ef.$4X }),
              },
              { icon: eA.S, text: a ? eh.intl.string(eh.t.daY6xj) : eh.intl.string(eh.t.j7peBh) },
              { icon: eI._, text: a ? eh.intl.string(eh.t["/bdaNN"]) : eh.intl.string(eh.t["feD3+i"]) },
              { icon: eT.Z, text: a ? eh.intl.string(eh.t.mSqazC) : eh.intl.string(eh.t.YFFVM1) },
          ))
        : r.includes(_.F.SDK_SOCIAL_LAYER_PRESENCE) &&
          ((t = a
              ? eh.intl.format(eh.t.GxjwZM, {
                    applicationName: n.name,
                    learnMoreURL: eS.A.getArticleURL(ef.MVz.SOCIAL_LAYER_CONNECTIONS),
                })
              : eh.intl.format(eh.t.DfBeUq, { learnMoreURL: eS.A.getArticleURL(ef.MVz.SOCIAL_LAYER_CONNECTIONS) })),
          s.push(
              {
                  icon: eg.$,
                  text: a
                      ? eh.intl.formatToPlainString(eh.t.z9peav, { maxFriends: ef.$4X })
                      : eh.intl.formatToPlainString(eh.t.WNKzo9, { maxFriends: ef.$4X }),
              },
              { icon: eI._, text: a ? eh.intl.string(eh.t["/bdaNN"]) : eh.intl.string(eh.t["feD3+i"]) },
              { icon: eT.Z, text: a ? eh.intl.string(eh.t.mSqazC) : eh.intl.string(eh.t.YFFVM1) },
          )),
    0 === s.length)
        ? null
        : (0, i.jsxs)("div", {
              className: eN.b9,
              children: [
                  null != t ? (0, i.jsx)(S.D, { variant: "heading-sm/normal", className: eN.a9, children: t }) : null,
                  s.map((e, t) => {
                      let { icon: n, text: r } = e;
                      return (0, i.jsx)(eC, { icon: n, text: r }, t);
                  }),
              ],
          });
}
function eC(e) {
    let { icon: t, text: n } = e;
    return (0, i.jsxs)("div", {
        className: eN.f_,
        children: [
            (0, i.jsx)(t, { className: eN.u7, color: "currentColor" }),
            (0, i.jsx)(T.E, { variant: "text-md/normal", className: eN.u0, children: n }),
        ],
    });
}
var ev = n(285796),
    eO = n(628284),
    eR = n(444927),
    eb = n(415122);
function eD(e) {
    let { text: t, error: n, isFake: r } = e,
        s = !0 === r ? eh.intl.string(eh.t.OX8EMU) : eh.intl.string(eh.t["0lpCFG"]),
        o = `${s}: ${t}${null != n ? `. ${n}` : ""}`;
    return (0, i.jsxs)("div", {
        className: eb.z8,
        role: "group",
        "aria-label": o,
        children: [
            !0 === r
                ? (0, i.jsx)(ev.a, {
                      size: "md",
                      color: "currentColor",
                      className: a()(eb.Kk, eb.RC),
                      "aria-hidden": !0,
                  })
                : (0, i.jsx)(eO.y, {
                      size: "md",
                      color: "currentColor",
                      className: a()(eb.Kk, eb.sc),
                      "aria-hidden": !0,
                  }),
            (0, i.jsxs)("div", {
                className: eb.rv,
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
function eL(e) {
    let {
            application: t,
            accountScopes: n,
            requestedScopes: r,
            integrationType: s,
            errors: o,
            isTrustedName: l = !1,
            noDivider: u = !1,
        } = e,
        c = (0, eR.A)(() => et.O_[Math.floor(Math.random() * et.O_.length)]);
    if (0 === n.length) return null;
    let f = c(),
        h = l ? eh.t.PZpY9c : eh.t["1Hz+Sl"],
        p = s === d.b.USER_INSTALL && r.includes(_.F.APPLICATIONS_COMMANDS);
    return (0, i.jsxs)("div", {
        className: a()(eb.Wu, u ? eb.bc : void 0),
        children: [
            (0, i.jsx)(S.D, {
                variant: "heading-sm/normal",
                className: eb.a9,
                children: eh.intl.format(h, { application: t?.name ?? "" }),
            }),
            n
                .map((e) =>
                    (0, et.rY)(e, n).map((t, n) =>
                        (0, i.jsx)(eD, { text: t, error: 0 === n ? o?.[e]?.[0] : void 0 }, `${e}-${n}`),
                    ),
                )
                .flat(),
            p && (0, i.jsx)(eD, { text: eh.intl.string(eh.t.Ls2XRq) }),
            (0, i.jsx)(eD, { text: f, isFake: !0 }),
        ],
    });
}
var ew = n(150934),
    eM = n(789645),
    eP = n(751645);
function ex(e) {
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
                        className: eP.EK,
                        children: (0, i.jsx)(ew.S, { checked: n, onChange: (t) => a(t, e), label: t }),
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
                        className: eP.EK,
                        children: [
                            (0, i.jsx)("div", {
                                className: eP.nW,
                                children: (0, i.jsx)(eM.P, { size: "md", color: "currentColor", className: eP.Kk }),
                            }),
                            (0, i.jsx)(T.E, { variant: "text-md/normal", children: t }),
                        ],
                    },
                    String(e),
                );
            });
    return (0, i.jsxs)("div", {
        className: eP.AS,
        children: [
            c.length > 0
                ? (0, i.jsxs)("div", {
                      children: [
                          (0, i.jsx)(T.E, {
                              variant: "text-sm/medium",
                              color: "text-default",
                              children: eh.intl.format(eh.t.sOaT2j, { applicationName: t.name, guildName: o.name }),
                          }),
                          (0, i.jsx)("ul", { className: eP.RH, children: c }),
                      ],
                  })
                : null,
            d.length > 0
                ? (0, i.jsxs)("div", {
                      children: [
                          (0, i.jsx)(T.E, {
                              variant: "text-sm/medium",
                              color: "text-default",
                              children: eh.intl.format(eh.t.fsOkF4, { applicationName: t.name }),
                          }),
                          (0, i.jsx)("ul", { className: eP.RH, children: d }),
                      ],
                  })
                : null,
        ],
    });
}
var eU = n(783878),
    ek = n(551280);
function eG(e) {
    let { error: t, selectedGuildId: n, onGuildChange: r, guilds: s, disabled: a = !1 } = e,
        o = s
            .filter((e) => f.zy(e.permissions, ef.xBc.MANAGE_GUILD))
            .map((e) => ({ id: e.id, value: e.id, label: e.name }));
    return (0, i.jsx)("div", {
        className: ek.g,
        children: (0, i.jsx)(eU.Z, {
            label: eh.intl.string(eh.t["1DXFFd"]),
            helperText: eh.intl.format(eh.t.t9Jm9o, {}),
            errorMessage: t,
            selectionMode: "single",
            maxOptionsVisible: 5,
            placeholder: eh.intl.string(eh.t.oM4E1A),
            options: o,
            onSelectionChange: r,
            disabled: a,
            value: n ?? void 0,
        }),
    });
}
var eF = n(665260),
    eV = n(939249),
    eB = n(97808),
    eH = n(709066),
    ej = n(566615),
    eY = n(778712),
    eW = n(510523);
function eK(e) {
    let { user: t, application: n, bot: s, accountScopes: a, showLogout: o, location: l, scopes: u } = e,
        c = (0, ej.i)(),
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
                                  children: eh.intl.string(eh.t.uT1CPa),
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
                                          ? (0, i.jsx)(eH.A, {
                                                className: eW.AO,
                                                verified:
                                                    null != s.public_flags &&
                                                    (0, eF.Lt)(s.public_flags, ef.nhx.VERIFIED_BOT),
                                            })
                                          : null,
                                  ],
                              }),
                              a.length > 0
                                  ? (0, i.jsx)(T.E, {
                                        variant: "text-md/normal",
                                        color: "text-default",
                                        children: eh.intl.string(eh.t.jFbDnJ),
                                    })
                                  : (0, i.jsx)(T.E, {
                                        variant: "text-md/normal",
                                        color: "text-default",
                                        children: eh.intl.string(eh.t["X+Fdpo"]),
                                    }),
                          ],
                      }),
            [a.length, n, s, u],
        );
    return (0, i.jsxs)("header", {
        id: c,
        className: eW.wx,
        children: [
            (0, i.jsxs)("div", {
                className: eW.Y,
                children: [
                    (0, i.jsx)(eB.eu, { className: eW.my, src: d, size: eY._3.SIZE_80, "aria-label": n.name }),
                    (0, i.jsxs)("div", {
                        className: eW.I5,
                        children: [
                            (0, i.jsx)("div", { className: eW.pw }),
                            (0, i.jsx)("div", { className: eW.pw }),
                            (0, i.jsx)("div", { className: eW.pw }),
                        ],
                    }),
                    (0, i.jsx)(eB.eu, { className: eW.my, src: _, size: eY._3.SIZE_80, "aria-label": t.username }),
                ],
            }),
            f,
            o
                ? (0, i.jsx)("div", {
                      className: eW.Ny,
                      children: (0, i.jsxs)(T.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: [
                              eh.intl.format(eh.t.qRvpYU, {
                                  userHook: () =>
                                      (0, i.jsxs)(
                                          T.E,
                                          {
                                              className: eW.ZD,
                                              variant: "text-sm/normal",
                                              children: [
                                                  t.username,
                                                  !t.hasUniqueUsername() &&
                                                      (0, i.jsx)(T.E, {
                                                          className: eW.Jb,
                                                          variant: "text-sm/normal",
                                                          children: `#${t.discriminator}`,
                                                      }),
                                              ],
                                          },
                                          t.id,
                                      ),
                              }),
                              (0, i.jsx)(eV.D, {
                                  tag: "a",
                                  className: eW.Pg,
                                  onClick: () => (0, J.Vh)(l, "oauth2_logout"),
                                  children: eh.intl.string(eh.t["yV/hjC"]),
                              }),
                          ],
                      }),
                  })
                : null,
        ],
    });
}
var ez = n(321987),
    e$ = n(595244);
function eq(e) {
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
        className: ek.g,
        children: (0, i.jsx)(eU.Z, {
            label: eh.intl.string(eh.t["8qKd+J"]),
            helperText: eh.intl.string(eh.t.kQXMfN),
            selectionMode: "single",
            maxOptionsVisible: 5,
            errorMessage: a,
            onSelectionChange: s,
            placeholder: eh.intl.string(eh.t["Re/64R"]),
            options: c,
            value: n ?? void 0,
        }),
    });
}
var eZ = n(613057),
    eX = n(636663);
let eQ = (0, F.Fe)({
    createPromise: () =>
        Promise.all([
            n.e("83004"),
            n.e("24010"),
            n.e("97477"),
            n.e("31841"),
            n.e("88228"),
            n.e("21986"),
            n.e("68835"),
            n.e("18477"),
            n.e("21173"),
            n.e("34136"),
            n.e("5636"),
            n.e("25867"),
            n.e("71934"),
            n.e("37182"),
            n.e("26439"),
            n.e("26738"),
            n.e("22513"),
            n.e("34291"),
            n.e("39995"),
            n.e("25568"),
            n.e("32260"),
            n.e("63016"),
            n.e("68953"),
            n.e("28746"),
            n.e("18125"),
            n.e("24199"),
            n.e("207"),
            n.e("89281"),
            n.e("57036"),
            n.e("98839"),
            n.e("88941"),
            n.e("62680"),
            n.e("87306"),
            n.e("41043"),
            n.e("18441"),
            n.e("61379"),
            n.e("98125"),
            n.e("21825"),
            n.e("76640"),
            n.e("25693"),
            n.e("66900"),
            n.e("43039"),
            n.e("28154"),
            n.e("48804"),
            n.e("88077"),
            n.e("33902"),
            n.e("32606"),
            n.e("18401"),
            n.e("14879"),
            n.e("13681"),
            n.e("53729"),
            n.e("10004"),
            n.e("55314"),
            n.e("89094"),
            n.e("29177"),
            n.e("99999"),
            n.e("32551"),
            n.e("31658"),
            n.e("4369"),
            n.e("53930"),
            n.e("46270"),
            n.e("86949"),
            n.e("23353"),
            n.e("50015"),
            n.e("11523"),
            n.e("1555"),
            n.e("44695"),
            n.e("21690"),
            n.e("44376"),
            n.e("98793"),
            n.e("31644"),
            n.e("70653"),
            n.e("45723"),
            n.e("70697"),
            n.e("18546"),
            n.e("38835"),
            n.e("37622"),
            n.e("90244"),
            n.e("18943"),
            n.e("84103"),
            n.e("17225"),
            n.e("9915"),
            n.e("53614"),
            n.e("96123"),
            n.e("31825"),
            n.e("36320"),
            n.e("20320"),
            n.e("50401"),
            n.e("84967"),
            n.e("31390"),
            n.e("99657"),
            n.e("47017"),
            n.e("31145"),
            n.e("90889"),
            n.e("51243"),
            n.e("46248"),
            n.e("26780"),
            n.e("44265"),
            n.e("99141"),
            n.e("92731"),
            n.e("25990"),
            n.e("11527"),
            n.e("63095"),
            n.e("68647"),
            n.e("63070"),
            n.e("5131"),
            n.e("64615"),
            n.e("45099"),
            n.e("66322"),
            n.e("87225"),
            n.e("75134"),
            n.e("93158"),
            n.e("46249"),
            n.e("55184"),
            n.e("23216"),
            n.e("87079"),
            n.e("25637"),
            n.e("78707"),
            n.e("51130"),
            n.e("73547"),
            n.e("84456"),
            n.e("99593"),
            n.e("61935"),
            n.e("58821"),
            n.e("62168"),
            n.e("55602"),
            n.e("54364"),
            n.e("58157"),
            n.e("24994"),
            n.e("10034"),
            n.e("23701"),
            n.e("71133"),
            n.e("78050"),
            n.e("80262"),
            n.e("56385"),
            n.e("59132"),
            n.e("58405"),
        ]).then(n.bind(n, 991054)),
    webpackId: 991054,
});
function eJ() {
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
                                n.request(ef.e$_.DEEP_LINK, { type: eZ.XK.OAUTH2, params: { search: e.search } })
                                    .then((e) => {
                                        _(e ?? !1);
                                    })
                                    .catch(() => _(!1))
                                    .then(() => n.disconnect());
                            else {
                                _(!0);
                                let t = new URLSearchParams(e.search);
                                n.request(ef.e$_.AUTHORIZE, {
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
                              (0, i.jsx)(k.hE, { children: eh.intl.string(eh.t.csrAMJ) }),
                              (0, i.jsx)(k.tK, {
                                  children: s ? eh.intl.string(eh.t["m1+IBn"]) : eh.intl.string(eh.t.kRzrSO),
                              }),
                              (0, i.jsx)(g.$, {
                                  onClick: () => l(!0),
                                  variant: "primary",
                                  text: eh.intl.string(eh.t.fIv16B),
                              }),
                          ],
                      })
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(k.hE, { children: eh.intl.string(eh.t["Z+hCVU"]) }),
                              (0, i.jsx)(I.y, {}),
                          ],
                      })),
            (0, i.jsx)(ez.$, { removeChildWrapper: !0, children: (0, i.jsx)("div", { className: eX.ah, children: e }) })
        );
    }
    return (0, i.jsx)(ez.$, {
        removeChildWrapper: !0,
        children: (0, i.jsx)(e0, {
            transitionState: p.i.ENTERED,
            ...t,
            showLogout: !0,
            isExternalStandaloneOAuthPage: !0,
            hideHeader: !0,
        }),
    });
}
function e0(e) {
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
        } = e6({ ...e }),
        h =
            null != s || null != o || null != c
                ? (0, i.jsxs)("div", {
                      className: eX.Gq,
                      children: [
                          s,
                          (0, i.jsx)("div", {
                              className: eX.FG,
                              children: (0, i.jsxs)("div", {
                                  className: a()(eX.Qs, d ? eX.cw : null, _ ? eX.pN : null),
                                  children: [o, null == u ? c : null],
                              }),
                          }),
                      ],
                  })
                : null;
    return (0, i.jsx)(ez.f, {
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
function e1(e) {
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
            className: eX.E4,
            children: [
                (0, i.jsxs)("div", {
                    className: eX.z1,
                    children: [
                        (0, i.jsxs)("div", {
                            className: eX.q3,
                            children: [
                                null != d
                                    ? (0, i.jsx)("img", { src: d, alt: f, className: eX.gO })
                                    : (0, i.jsx)("div", { className: eX.gO }),
                                (0, i.jsx)(h.j, { size: "md", color: "currentColor" }),
                                null != _ && (0, i.jsx)("img", { src: _, alt: "", className: eX.eh }),
                            ],
                        }),
                        (0, i.jsx)(T.E, { variant: "text-lg/normal", children: eh.intl.string(eh.t.uT1CPa) }),
                        (0, i.jsx)(S.D, { variant: "heading-xl/semibold", children: f }),
                    ],
                }),
                (0, i.jsx)(T.E, {
                    variant: "text-sm/normal",
                    children: eh.intl.format(eh.t["aJRE/Q"], { applicationName: f, platformName: s }),
                }),
                (0, i.jsxs)("div", {
                    className: eX.eD,
                    children: [
                        null != c && (0, i.jsx)("img", { src: c, alt: "", className: eX.sw }),
                        (0, i.jsx)(T.E, { variant: "text-md/medium", className: eX.PP, children: s }),
                        (0, i.jsx)(g.$, {
                            variant: "primary",
                            size: "sm",
                            onClick: function () {
                                (0, G.A)({ platformType: n, location: "OAuth2 Connect Account Step" });
                            },
                            text: eh.intl.string(eh.t.S0W8Z5),
                        }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: eX.sT,
                    children: [
                        (0, i.jsx)(N.m, { size: "sm", color: "currentColor", className: eX.Vi }),
                        (0, i.jsx)(T.E, {
                            variant: "text-sm/normal",
                            children: eh.intl.format(eh.t["8psEFX"], { platformName: s, applicationName: f }),
                        }),
                    ],
                }),
            ],
        })
    );
}
function e2(e) {
    let { platformType: t, platformName: n, connectedAccount: r, applicationName: s } = e,
        a = (0, b.Ay)(),
        o = D.A.get(t),
        l = null != o ? ((0, A.q)(a) ? o.icon.lightSVG : o.icon.darkSVG) : null;
    return (0, i.jsxs)("div", {
        className: eX.E4,
        children: [
            (0, i.jsx)(T.E, {
                variant: "text-sm/normal",
                children: eh.intl.format(eh.t["+oaRw3"], { platformName: n }),
            }),
            (0, i.jsxs)("div", {
                className: eX.eD,
                children: [
                    null != l && (0, i.jsx)("img", { src: l, alt: "", className: eX.sw }),
                    (0, i.jsxs)("div", {
                        className: eX.mG,
                        children: [
                            (0, i.jsx)(T.E, { variant: "text-md/medium", children: r.name }),
                            (0, i.jsx)(T.E, {
                                variant: "text-xs/normal",
                                children: eh.intl.format(eh.t.Dkd7sE, { platformName: n, connectedAccountId: r.id }),
                            }),
                        ],
                    }),
                    (0, i.jsx)(y.A, { size: "sm", color: "status-positive" }),
                ],
            }),
            (0, i.jsx)(T.E, {
                variant: "text-sm/normal",
                children: eh.intl.format(eh.t.pyRNXJ, { applicationName: s }),
            }),
            (0, i.jsx)("div", { className: eX.zd }),
        ],
    });
}
function e3() {
    return (0, i.jsx)("div", { className: eX.g4, children: (0, i.jsx)(I.y, { className: eX.u1 }) });
}
function e6(e) {
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
            isTrustedName: H = !1,
            isEmbeddedFlow: $ = !1,
            callback: q,
            callbackWithoutPost: ei,
            onClose: er,
            disclosures: es,
            isExternalStandaloneOAuthPage: ea = !1,
            isTwoWayLinkDiscordConsent: eo = !1,
            connectedAccountProvider: el,
        } = e,
        eu = null != G ? y?.get(G) : void 0,
        ec = (0, o.zy)(),
        ed = (0, E.bG)([B.A], () => B.A.hasLoadedExperiments);
    r.useEffect(() => {
        K.default.isAuthenticated() && !ed && O.A.getExperiments();
    }, [ed]);
    let [e_, ep] = r.useState(null),
        [em, eg] = r.useState(null),
        [eA, eI] = r.useState(null),
        [eT, eS] = r.useState(!1),
        [eN, eC] = r.useState(!1),
        ev = e_?.guilds,
        [eO, eR] = r.useState(P ?? null),
        [eb, eD] = r.useState(k ?? null),
        [ew, eM] = r.useState(Z.x3),
        eP = (0, E.bG)([z.A], () => (null == el ? null : (z.A.getAccounts().find((e) => e.type === el) ?? null)), [el]),
        eU = null == el || null != eP,
        ek = r.useMemo(() => (e_?.user != null ? new W.A(e_.user) : null), [e_?.user]),
        eF = (0, U.A)(e_?.application ?? null),
        eV = r.useMemo(() => ev?.find((e) => e.id === eO), [ev, eO]),
        [eB, eH] = r.useState(null),
        ej = r.useMemo(() => null == eu && null == G && (b?.length ?? 0) === 0 && null == m, [eu, b?.length, m, G]),
        [eY, eW] = r.useState(null);
    r.useEffect(() => {
        ej && M.Ay.fetchApplication(h).then((e) => eW(Y.Ay.createFromServer(e)));
    }, [h, ej]);
    let ez = r.useMemo(
            () => (null == eB ? null : eY?.integrationTypesConfig?.[eB]?.oauth2InstallParams),
            [eY?.integrationTypesConfig, eB],
        ),
        { requestedScopes: eZ, accountScopes: eJ } = r.useMemo(() => {
            let e = ej ? ez?.scopes : b,
                t = (0, Q.e)(e ?? []),
                n = et.k$.filter((e) => t.includes(e));
            return { requestedScopes: t, accountScopes: n };
        }, [ez?.scopes, b, ej]),
        e0 = r.useMemo(() => (ej ? f.iu(ez?.permissions ?? 0) : w) ?? Z.x3, [ez?.permissions, w, ej]),
        e6 = r.useRef(!1),
        [e4, e5] = r.useState(es ?? []),
        [e7, e8] = r.useState(null != es && es.length > 0);
    (0, u.Ay)(() => {
        let e = K.default.getAnalyticsToken();
        null != e
            ? v.h.dispatch({ type: "SET_ANALYTICS_TOKEN", analyticsToken: e, userId: K.default.getId() })
            : (0, R.rQ)({ withAnalyticsToken: !0 }).catch(ef.tEg);
    }),
        r.useEffect(() => {
            if (e6.current) return;
            let e = async () => {
                e6.current = !0;
                try {
                    let { disclosures: e, allAcked: t } = await (0, x.vG)(h);
                    e8(!t), e5(e);
                } catch (n) {
                    let { status: e, body: t } = n;
                    if (401 === e) return void (0, J.Vh)(ec, "oauth2_error_failed_disclosures");
                    eI(Error(null != t.message ? t.message : `${Object.keys(t)[0]}: ${Object.values(t)[0]}`));
                } finally {
                    e6.current = !1;
                }
            };
            if (null == es) {
                if (!K.default.isAuthenticated()) return void (0, J.Vh)(ec, "oauth2_error_not_authenticated");
                e();
            }
        }, [h, ec, es, e5, eI, e8, eg]);
    let e9 = r.useCallback(
            async (e) => {
                if (null != ei) {
                    eS(!0), ei(e);
                    return;
                }
                if (null == eB) return void eI(Error("No integration type was selected."));
                try {
                    eS(!0);
                    let t = await (0, J.Gq)({
                        authorize: e,
                        clientId: h,
                        scopes: eZ,
                        responseType: p,
                        redirectUri: m,
                        codeChallenge: g,
                        codeChallengeMethod: A,
                        state: I,
                        nonce: S,
                        integrationType: eB,
                        connectedAccountProvider: el,
                        permissions: f.TF(e0, ew),
                        guildId: eB === d.b.GUILD_INSTALL && null != eO ? eO : void 0,
                        channelId: eB === d.b.GUILD_INSTALL && null != eb ? eb : void 0,
                    });
                    if ((e && (await (0, x.Yx)(h, e4)), null != q))
                        q({ application: e_?.application, location: t.location, guild: eV, scopes: eZ }), er?.();
                    else if (null != t.location) {
                        let e = X.A.toURLSafe(t.location)?.pathname;
                        X.A.isDiscordUrl(t.location) && e === ef.BVt.OAUTH2_AUTHORIZED
                            ? (0, j.pX)(ef.BVt.OAUTH2_AUTHORIZED, {
                                  state: { application: e_?.application, guild: eV },
                              })
                            : (window.location = t.location);
                    } else eS(!1);
                } catch (t) {
                    let e = t.body;
                    e?.message != null && "" !== e.message ? eI(Error(e.message)) : eI(e),
                        eg("AUTHORIZE_SCOPES"),
                        eS(!1);
                }
            },
            [ei, q, e_?.application, eV, er, h, eZ, p, m, g, A, I, S, e0, ew, eO, eB, el, eb, e4],
        ),
        te = r.useRef(!1),
        tt = r.useCallback(async () => {
            if (!K.default.isAuthenticated()) return void (0, J.Vh)(ec, "oauth2_error_not_authenticated");
            if (!e6.current && !te.current) {
                te.current = !0;
                try {
                    var e;
                    let t =
                        null != eu
                            ? eu
                            : await (0, J.qY)({
                                  clientId: h,
                                  scopes: eZ,
                                  responseType: p,
                                  redirectUri: m,
                                  codeChallenge: g,
                                  codeChallengeMethod: A,
                                  state: I,
                                  nonce: S,
                                  integrationType: eB ?? void 0,
                                  connectedAccountProvider: el,
                              });
                    ep(
                        ((e = t),
                        null == e.guilds
                            ? e
                            : { ...e, guilds: e.guilds.map((e) => ({ ...e, permissions: f.iu(e.permissions) })) }),
                    ),
                        N === en.l.NONE && t.authorized && !e7 && e9(!0),
                        (0, L.zV)(ef.HAw.OAUTH2_AUTHORIZE_VIEWED, { application_id: t.application.id });
                } catch (n) {
                    let { status: e, body: t } = n;
                    if (401 === e) return void (0, J.Vh)(ec, "oauth2_error_unauthorized");
                    eI(Error(null != t.message ? t.message : `${Object.keys(t)[0]}: ${Object.values(t)[0]}`));
                } finally {
                    te.current = !1;
                }
            }
        }, [ec, eu, h, eZ, p, m, g, A, I, S, eB, el, N, e9, e7]),
        tn = r.useMemo(
            () =>
                null != eY && ej
                    ? Object.entries(eY.integrationTypesConfig ?? {})
                          .filter((e) => {
                              let [t, n] = e;
                              return null != n.oauth2InstallParams;
                          })
                          .map((e) => {
                              let [t, n] = e;
                              return Number(t);
                          })
                    : [],
            [eY, ej],
        ),
        ti = r.useRef(null);
    r.useEffect(() => {
        em !== ti.current &&
            ((ti.current = em),
            (0, L.zV)(ef.HAw.OAUTH2_AUTHORIZE_STEP_VIEWED, {
                step: em,
                application_id: h,
                integration_type: eB,
                scopes: eZ,
                permissions: e0.toString(),
            }));
    }, [h, eB, e0, eZ, em]),
        r.useEffect(() => {
            null == em &&
                (!ej || null != eY) &&
                ed &&
                (null == el || eU
                    ? null != eu
                        ? (eH(eu.integration_type ?? d.b.GUILD_INSTALL), eg("AUTHORIZE_SCOPES"))
                        : tn.length > 1
                          ? eg("SELECT_INSTALL_TYPE")
                          : (1 === tn.length ? eH(tn[0]) : null != G ? eH(G) : eH(d.b.GUILD_INSTALL),
                            eg("AUTHORIZE_SCOPES"))
                    : eg("CONNECT_ACCOUNT"));
        }, [eu, tn, eY, ej, el, eU, G, em, ed]),
        r.useEffect(() => {
            "CONNECT_ACCOUNT" === em && eU && (eH(G ?? d.b.USER_INSTALL), eg("AUTHORIZE_SCOPES"));
        }, [em, eU, G]),
        r.useEffect(() => {
            if (null == eB || null != e_ || null != eA) return;
            eB === d.b.USER_INSTALL && (eR(null), eD(null));
            let e = eZ.filter((e) => !et.gX.includes(e));
            0 === eZ.length
                ? eI(Error("No scopes were provided."))
                : e.length > 0
                  ? eI(Error(`Invalid scope: ${e[0]}`))
                  : (0, ee.F7)(e0)
                    ? eI(Error("Invalid permission(s) provided."))
                    : tt();
        }, [e7, tt, eZ, e0, eB, e_, eA]);
    let tr = r.useCallback((e) => {
            e && eC(!0);
        }, []),
        ts = (0, l.K)(tr);
    if (eA instanceof Error)
        return ea
            ? { body: (0, i.jsx)(e$.gz, { message: eA.message }) }
            : eo
              ? {
                    label: eh.intl.string(eh.t.j2d6Km),
                    header: (0, i.jsx)(T.E, {
                        variant: "text-lg/bold",
                        color: "text-strong",
                        children: eh.intl.string(eh.t.j2d6Km),
                    }),
                    body: (0, i.jsx)(T.E, { variant: "text-md/normal", color: "text-default", children: eA.message }),
                    actions: [{ onClick: er, text: eh.intl.string(eh.t.cpT0Cq) }],
                    noPadding: !0,
                }
              : {
                    title: eh.intl.string(eh.t.j2d6Km),
                    subtitle: eA.message,
                    actions: [{ onClick: er, text: eh.intl.string(eh.t.cpT0Cq) }],
                };
    let ta = null != el ? (D.A.get(el)?.name ?? "") : "",
        to = !1,
        tl = !1,
        tu = !0,
        tc = !0,
        td = !0,
        t_ = !1;
    switch (em) {
        case null:
            return { label: eh.intl.string(eh.t.ZTNur7), body: (0, i.jsx)(e3, {}) };
        case "CONNECT_ACCOUNT":
            (t = (0, i.jsx)(e1, { clientId: h, platformType: el, platformName: ta })),
                (tu = !1),
                (tc = !1),
                (td = !1),
                (to = !0);
            break;
        case "SELECT_INSTALL_TYPE":
            if (null == eY) return { label: eh.intl.string(eh.t.ZTNur7), body: (0, i.jsx)(e3, {}) };
            (t = (0, i.jsx)(eQ, {
                application: eY,
                onSelect: (e) => {
                    eH(e), ep(null), eg("AUTHORIZE_SCOPES");
                },
            })),
                (tu = !1),
                (tc = !1),
                (td = !1),
                (t_ = !0);
            break;
        case "AUTHORIZE_SCOPES":
            if (null == e_ || null == ek || null == eB)
                return { label: eh.intl.string(eh.t.ZTNur7), body: (0, i.jsx)(e3, {}) };
            let tf = null == eA || eA instanceof Error ? {} : eA,
                th = ev?.sort((e, t) => e.name.toLowerCase().localeCompare(t.name.toLowerCase())),
                tp = eB === d.b.GUILD_INSTALL && eZ.includes(_.F.WEBHOOK_INCOMING),
                tE =
                    tp ||
                    (eB === d.b.GUILD_INSTALL && (eZ.includes(_.F.BOT) || eZ.includes(_.F.APPLICATIONS_COMMANDS)));
            (t = (0, i.jsxs)(i.Fragment, {
                children: [
                    null != eP &&
                        eU &&
                        (0, i.jsx)(e2, {
                            platformType: eP.type,
                            platformName: ta,
                            connectedAccount: eP,
                            applicationName: e_.application.name,
                        }),
                    (0, i.jsx)(ey, { application: e_.application, accountScopes: eJ }),
                    (0, i.jsx)(eL, {
                        application: e_.application,
                        accountScopes: eJ,
                        requestedScopes: eZ,
                        integrationType: eB,
                        errors: tf,
                        isTrustedName: H || eF,
                    }),
                    (0, i.jsx)("div", { className: eX.sL, ref: ts }),
                    tE
                        ? (0, i.jsx)(eG, {
                              error: (tf[_.F.BOT] ?? tf[_.F.APPLICATIONS_COMMANDS] ?? [])[0],
                              selectedGuildId: eO,
                              onGuildChange: eR,
                              guilds: th ?? [],
                              disabled: "" !== eO && null != eO && !0 === F,
                          })
                        : null,
                    tp
                        ? (0, i.jsx)(eq, {
                              error: (tf[_.F.WEBHOOK_INCOMING] ?? [])[0],
                              selectedChannelId: eb,
                              selectedGuildId: eO,
                              onChannelChange: eD,
                          })
                        : null,
                ],
            })),
                eZ.includes(_.F.BOT) && !f.aI(e0, Z.x3) && (s = "AUTHORIZE_BOT_PERMISSIONS"),
                tn.length > 1 && (n = "SELECT_INSTALL_TYPE"),
                (tl = (tE && null == eV) || (tp && null == eb)),
                (to = !0);
            break;
        case "AUTHORIZE_BOT_PERMISSIONS":
            if (null == e_) return { label: eh.intl.string(eh.t.ZTNur7), body: (0, i.jsx)(e3, {}) };
            (t = (0, i.jsx)(ex, {
                application: e_.application,
                permissions: e0,
                deniedPermissions: ew,
                onPermissionsChange: (e, t) => {
                    eM((n) => (e ? f.TF(n, t) : f.WQ(n, t)));
                },
                guild: eV,
            })),
                (n = "AUTHORIZE_SCOPES"),
                (to = !0);
    }
    let tm = [];
    if (tu && null != e_) {
        let e = e_?.application.approximate_guild_count ?? e_?.bot?.approximate_guild_count;
        a = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(eE, {
                    application: e_.application,
                    scopes: eZ,
                    disclosures: e4,
                    redirectUri: e_.redirect_uri ?? null,
                    approximateGuildCount: void 0 !== e ? e : null,
                    isEmbeddedFlow: $,
                    connectedAccount: eP,
                }),
                (0, i.jsx)("div", { className: eX.sL, ref: ts }),
            ],
        });
    }
    if (
        (tc &&
            null != e_ &&
            null != ek &&
            (c = (0, i.jsx)(eK, {
                user: ek,
                application: e_.application,
                bot: e_.bot,
                accountScopes: eJ,
                showLogout: V || !1,
                location: ec,
                scopes: eZ,
            })),
        td &&
            (tm.push(
                null != n
                    ? { variant: "secondary", onClick: () => eg(n), text: eh.intl.string(eh.t["13/7kX"]) }
                    : { variant: "secondary", onClick: () => e9(!1), text: eh.intl.string(eh.t["ETE/oC"]) },
            ),
            "SELECT_INSTALL_TYPE" !== em))
    ) {
        let e = "CONNECT_ACCOUNT" !== em && !eN;
        tm.push(
            e
                ? { disabled: !0, loading: eT, text: eh.intl.string(eh.t.N22i9F), icon: C.M }
                : {
                      onClick: null != s ? () => eg(s) : () => e9(!0),
                      loading: eT,
                      disabled: ("CONNECT_ACCOUNT" !== em && null == a) || tl,
                      text: tl
                          ? eh.intl.string(eh.t.BwwiSM)
                          : null != s
                            ? eh.intl.string(eh.t["3PatSz"])
                            : eh.intl.string(eh.t["y+/PE9"]),
                  },
        );
    }
    return {
        label: "CONNECT_ACCOUNT" === em ? eh.intl.string(eh.t.JGuDTr) : void 0,
        header: c,
        body: t,
        actions: tm,
        nextStep: s,
        appDetails: a,
        sendAuthorize: e9,
        hasContentBackground: to,
        noPadding: t_,
    };
}
function e4(e, t) {
    if (null == t.location || (null != e.callback && e.callback(t))) return;
    let { host: n, pathname: r, searchParams: s } = X.A.toURLSafe(t.location) ?? {},
        a = X.A.isDiscordHostname(n ?? null) || window.location.host === n;
    a && r === ef.BVt.OAUTH2_AUTHORIZED
        ? (0, m.openModal)((e) => (0, i.jsx)(e$.dR, { guild: t.guild, application: t.application, ...e }))
        : a && r?.startsWith(ef.BVt.OAUTH2_ERROR)
          ? (0, m.openModal)((e) => {
                let t = s?.get("error_description") ?? s?.get("error") ?? eh.intl.string(eh.t.mqn873);
                return (
                    Array.isArray(t) && (t = t[0]),
                    (0, i.jsx)(ez.f, { ...e, children: (0, i.jsx)(e$.gz, { message: t, onClose: e.onClose }) })
                );
            })
          : window.open(t.location, "_blank")?.focus();
}
function e5(e, t) {
    (0, H._9)() ? V.A.openCreateGuildModal({ onSuccess: (n) => e7({ ...e, guildId: n }, t) }) : e7(e, t);
}
function e7(e, t) {
    (0, m.openModal)((t) => (0, i.jsx)(e0, { ...t, ...e, callback: e4.bind(null, e) }), { onCloseCallback: t });
}
function e8(e) {
    let { hostname: t = "", host: n, pathname: i, search: r } = X.A.toURLSafe(e) ?? {};
    return null != i &&
        null != r &&
        (X.A.isDiscordHostname(t) || n === window.location.host) &&
        (i.startsWith(`/api${ef.Rsh.OAUTH2_AUTHORIZE}`) || i.startsWith(ef.BVt.OAUTH2_AUTHORIZE))
        ? (0, Q._)(r)
        : null;
}
