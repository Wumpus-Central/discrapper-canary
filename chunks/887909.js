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
    p = n(815390),
    E = n(17928),
    m = n(192308),
    g = n(821609),
    A = n(462887),
    I = n(289873),
    T = n(834730),
    S = n(534514),
    y = n(885574),
    C = n(933832),
    N = n(708988),
    v = n(228366),
    R = n(830215),
    O = n(803306),
    b = n(736653),
    D = n(573648),
    L = n(95561),
    w = n(269815),
    M = n(627363),
    P = n(587895),
    x = n(224750),
    k = n(62447),
    U = n(854378),
    G = n(968309),
    F = n(268218),
    V = n(272613),
    B = n(736056),
    j = n(14509),
    H = n(976860),
    Y = n(570962),
    W = n(395671),
    K = n(889227),
    $ = n(495544),
    z = n(30370),
    q = n(287809),
    Z = n(486020),
    X = n(488926),
    Q = n(998218),
    J = n(123677),
    ee = n(457408),
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
    ep = n(231483),
    eE = n(20015),
    em = n(935208),
    eg = n(129090);
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
        h = (0, eE.n)(n, et.gfo.EMBEDDED);
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
                    let t = (0, k.t)(e);
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
            (0, i.jsx)(eI, { icon: ep.l, text: d }),
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
    ey = n(687966),
    eC = n(625903),
    eN = n(975571),
    ev = n(458642);
function eR(e) {
    let t,
        { application: n, accountScopes: r } = e,
        s = [],
        a = (0, k.A)(n);
    return (r.includes(_.F.SDK_SOCIAL_LAYER)
        ? ((t = a
              ? en.intl.format(en.t.GxjwZM, {
                    applicationName: n.name,
                    learnMoreURL: eN.A.getArticleURL(et.MVz.SOCIAL_LAYER_CONNECTIONS),
                })
              : en.intl.format(en.t.DfBeUq, { learnMoreURL: eN.A.getArticleURL(et.MVz.SOCIAL_LAYER_CONNECTIONS) })),
          s.push(
              {
                  icon: eT.$,
                  text: a
                      ? en.intl.formatToPlainString(en.t.z9peav, { maxFriends: et.$4X })
                      : en.intl.formatToPlainString(en.t.WNKzo9, { maxFriends: et.$4X }),
              },
              { icon: eS.S, text: a ? en.intl.string(en.t.daY6xj) : en.intl.string(en.t.j7peBh) },
              { icon: ey._, text: a ? en.intl.string(en.t["/bdaNN"]) : en.intl.string(en.t["feD3+i"]) },
              { icon: eC.Z, text: a ? en.intl.string(en.t.mSqazC) : en.intl.string(en.t.YFFVM1) },
          ))
        : r.includes(_.F.SDK_SOCIAL_LAYER_PRESENCE) &&
          ((t = a
              ? en.intl.format(en.t.GxjwZM, {
                    applicationName: n.name,
                    learnMoreURL: eN.A.getArticleURL(et.MVz.SOCIAL_LAYER_CONNECTIONS),
                })
              : en.intl.format(en.t.DfBeUq, { learnMoreURL: eN.A.getArticleURL(et.MVz.SOCIAL_LAYER_CONNECTIONS) })),
          s.push(
              {
                  icon: eT.$,
                  text: a
                      ? en.intl.formatToPlainString(en.t.z9peav, { maxFriends: et.$4X })
                      : en.intl.formatToPlainString(en.t.WNKzo9, { maxFriends: et.$4X }),
              },
              { icon: ey._, text: a ? en.intl.string(en.t["/bdaNN"]) : en.intl.string(en.t["feD3+i"]) },
              { icon: eC.Z, text: a ? en.intl.string(en.t.mSqazC) : en.intl.string(en.t.YFFVM1) },
          )),
    0 === s.length)
        ? null
        : (0, i.jsxs)("div", {
              className: ev.b9,
              children: [
                  null != t ? (0, i.jsx)(S.D, { variant: "heading-sm/normal", className: ev.a9, children: t }) : null,
                  s.map((e, t) => {
                      let { icon: n, text: r } = e;
                      return (0, i.jsx)(eO, { icon: n, text: r }, t);
                  }),
              ],
          });
}
function eO(e) {
    let { icon: t, text: n } = e;
    return (0, i.jsxs)("div", {
        className: ev.f_,
        children: [
            (0, i.jsx)(t, { className: ev.u7, color: "currentColor" }),
            (0, i.jsx)(T.E, { variant: "text-md/normal", className: ev.u0, children: n }),
        ],
    });
}
var eb = n(285796),
    eD = n(628284),
    eL = n(444927),
    ew = n(563410);
function eM(e) {
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
                : (0, i.jsx)(eD.y, {
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
function eP(e) {
    let {
            application: t,
            accountScopes: n,
            requestedScopes: r,
            integrationType: s,
            errors: o,
            isTrustedName: l = !1,
            noDivider: u = !1,
        } = e,
        c = (0, eL.A)(() => ea.O_[Math.floor(Math.random() * ea.O_.length)]);
    if (0 === n.length) return null;
    let h = c(),
        f = l ? en.t.PZpY9c : en.t["1Hz+Sl"],
        p = s === d.b.USER_INSTALL && r.includes(_.F.APPLICATIONS_COMMANDS);
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
                        (0, i.jsx)(eM, { text: t, error: 0 === n ? o?.[e]?.[0] : void 0 }, `${e}-${n}`),
                    ),
                )
                .flat(),
            p && (0, i.jsx)(eM, { text: en.intl.string(en.t.Ls2XRq) }),
            (0, i.jsx)(eM, { text: h, isFake: !0 }),
        ],
    });
}
var ex = n(150934),
    ek = n(789645),
    eU = n(729501);
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
                        className: eU.EK,
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
                        className: eU.EK,
                        children: [
                            (0, i.jsx)("div", {
                                className: eU.nW,
                                children: (0, i.jsx)(ek.P, { size: "md", color: "currentColor", className: eU.Kk }),
                            }),
                            (0, i.jsx)(T.E, { variant: "text-md/normal", children: t }),
                        ],
                    },
                    String(e),
                );
            });
    return (0, i.jsxs)("div", {
        className: eU.AS,
        children: [
            c.length > 0
                ? (0, i.jsxs)("div", {
                      children: [
                          (0, i.jsx)(T.E, {
                              variant: "text-sm/medium",
                              color: "text-default",
                              children: en.intl.format(en.t.sOaT2j, { applicationName: t.name, guildName: o.name }),
                          }),
                          (0, i.jsx)("ul", { className: eU.RH, children: c }),
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
                          (0, i.jsx)("ul", { className: eU.RH, children: d }),
                      ],
                  })
                : null,
        ],
    });
}
var eF = n(783878),
    eV = n(808432);
function eB(e) {
    let { error: t, selectedGuildId: n, onGuildChange: r, guilds: s, disabled: a = !1 } = e,
        o = s
            .filter((e) => h.zy(e.permissions, et.xBc.MANAGE_GUILD))
            .map((e) => ({ id: e.id, value: e.id, label: e.name }));
    return (0, i.jsx)("div", {
        className: eV.g,
        children: (0, i.jsx)(eF.Z, {
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
var ej = n(665260),
    eH = n(939249),
    eY = n(97808),
    eW = n(709066),
    eK = n(566615),
    e$ = n(778712),
    ez = n(908539);
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
                                          ? (0, i.jsx)(eW.A, {
                                                className: ez.AO,
                                                verified:
                                                    null != s.public_flags &&
                                                    (0, ej.Lt)(s.public_flags, et.nhx.VERIFIED_BOT),
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
                    (0, i.jsx)(eY.eu, { className: ez.my, src: d, size: e$._3.SIZE_80, "aria-label": n.name }),
                    (0, i.jsxs)("div", {
                        className: ez.I5,
                        children: [
                            (0, i.jsx)("div", { className: ez.pw }),
                            (0, i.jsx)("div", { className: ez.pw }),
                            (0, i.jsx)("div", { className: ez.pw }),
                        ],
                    }),
                    (0, i.jsx)(eY.eu, { className: ez.my, src: _, size: e$._3.SIZE_80, "aria-label": t.username }),
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
                              (0, i.jsx)(eH.D, {
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
        className: eV.g,
        children: (0, i.jsx)(eF.Z, {
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
    e0 = n(733239);
let e1 = (0, F.Fe)({
    createPromise: () =>
        Promise.all([
            n.e("28596"),
            n.e("71696"),
            n.e("85414"),
            n.e("44078"),
            n.e("12126"),
            n.e("87870"),
            n.e("11006"),
            n.e("40719"),
            n.e("75518"),
            n.e("34041"),
            n.e("50815"),
            n.e("44204"),
            n.e("61749"),
            n.e("10849"),
            n.e("51416"),
            n.e("87751"),
            n.e("76375"),
            n.e("82372"),
            n.e("12633"),
            n.e("36027"),
            n.e("68880"),
            n.e("74577"),
            n.e("44613"),
            n.e("6643"),
            n.e("70369"),
            n.e("12932"),
            n.e("86380"),
            n.e("52564"),
            n.e("11868"),
            n.e("64633"),
            n.e("17665"),
            n.e("8872"),
            n.e("68006"),
            n.e("61661"),
            n.e("58247"),
            n.e("38789"),
            n.e("53915"),
            n.e("46903"),
            n.e("69738"),
            n.e("93601"),
            n.e("41842"),
            n.e("84346"),
            n.e("97106"),
            n.e("10038"),
            n.e("11586"),
            n.e("64923"),
            n.e("84949"),
            n.e("71334"),
            n.e("10940"),
            n.e("77015"),
            n.e("61355"),
            n.e("97101"),
            n.e("45446"),
            n.e("71455"),
            n.e("41117"),
            n.e("33958"),
            n.e("84411"),
            n.e("15426"),
            n.e("54377"),
            n.e("10436"),
            n.e("19353"),
            n.e("73523"),
            n.e("65485"),
            n.e("69184"),
            n.e("71436"),
            n.e("66270"),
            n.e("71716"),
            n.e("27184"),
            n.e("66238"),
            n.e("78771"),
            n.e("17640"),
            n.e("7266"),
            n.e("65438"),
            n.e("38413"),
            n.e("11152"),
            n.e("74756"),
            n.e("89969"),
            n.e("97865"),
            n.e("12030"),
            n.e("75370"),
            n.e("68463"),
            n.e("37842"),
            n.e("67962"),
            n.e("39754"),
            n.e("58865"),
            n.e("34689"),
            n.e("49996"),
            n.e("98515"),
            n.e("45522"),
            n.e("11411"),
            n.e("8473"),
            n.e("49279"),
            n.e("85244"),
            n.e("84059"),
            n.e("46864"),
            n.e("16633"),
            n.e("16058"),
            n.e("64248"),
            n.e("6712"),
            n.e("1491"),
            n.e("36732"),
            n.e("63661"),
            n.e("32394"),
            n.e("79479"),
            n.e("20939"),
            n.e("23443"),
            n.e("47336"),
            n.e("48058"),
            n.e("35837"),
            n.e("89088"),
            n.e("48902"),
            n.e("38119"),
            n.e("45914"),
            n.e("22843"),
            n.e("32577"),
            n.e("2423"),
            n.e("26729"),
            n.e("76487"),
            n.e("93247"),
            n.e("43440"),
            n.e("97867"),
            n.e("54702"),
            n.e("7364"),
            n.e("46195"),
            n.e("26736"),
            n.e("58201"),
            n.e("42977"),
            n.e("5990"),
            n.e("77388"),
            n.e("47813"),
            n.e("36810"),
            n.e("840"),
            n.e("16907"),
            n.e("35422"),
            n.e("8289"),
            n.e("16336"),
            n.e("2043"),
            n.e("50878"),
            n.e("14148"),
            n.e("57836"),
            n.e("39367"),
            n.e("9473"),
            n.e("35186"),
            n.e("66225"),
            n.e("77573"),
            n.e("76084"),
            n.e("22944"),
            n.e("33365"),
            n.e("51695"),
            n.e("65126"),
            n.e("73990"),
            n.e("50175"),
            n.e("78071"),
            n.e("41724"),
            n.e("86744"),
            n.e("3311"),
            n.e("22084"),
            n.e("57801"),
            n.e("79183"),
            n.e("51628"),
            n.e("32911"),
            n.e("84868"),
            n.e("6919"),
            n.e("37363"),
            n.e("9466"),
            n.e("44384"),
            n.e("41577"),
            n.e("93514"),
            n.e("30320"),
            n.e("24839"),
            n.e("16614"),
            n.e("80309"),
            n.e("4693"),
            n.e("2912"),
            n.e("59539"),
            n.e("91680"),
            n.e("57036"),
            n.e("57174"),
            n.e("86847"),
            n.e("48226"),
            n.e("207"),
            n.e("24199"),
            n.e("54048"),
            n.e("88941"),
            n.e("61379"),
            n.e("25693"),
            n.e("32606"),
            n.e("28154"),
            n.e("4369"),
            n.e("34236"),
            n.e("11523"),
            n.e("4361"),
            n.e("77473"),
            n.e("31549"),
            n.e("23353"),
            n.e("18943"),
            n.e("7167"),
            n.e("56048"),
            n.e("25279"),
            n.e("39810"),
            n.e("87306"),
            n.e("57598"),
            n.e("92789"),
            n.e("31390"),
            n.e("37687"),
            n.e("41043"),
            n.e("43039"),
            n.e("26780"),
            n.e("44265"),
            n.e("48804"),
            n.e("95569"),
            n.e("84103"),
            n.e("17225"),
            n.e("78179"),
            n.e("65030"),
            n.e("63095"),
            n.e("70653"),
            n.e("52266"),
            n.e("53039"),
            n.e("96123"),
            n.e("76640"),
            n.e("92583"),
            n.e("64615"),
            n.e("31825"),
            n.e("36320"),
            n.e("97526"),
            n.e("79525"),
            n.e("82069"),
            n.e("75134"),
            n.e("1462"),
            n.e("99666"),
            n.e("55184"),
            n.e("74926"),
            n.e("28866"),
            n.e("50015"),
            n.e("72442"),
            n.e("54282"),
            n.e("21574"),
            n.e("90889"),
            n.e("62931"),
            n.e("18181"),
            n.e("59880"),
            n.e("14805"),
            n.e("73547"),
            n.e("24761"),
            n.e("99593"),
            n.e("45587"),
            n.e("83057"),
            n.e("50997"),
            n.e("36845"),
            n.e("2773"),
            n.e("27582"),
            n.e("18573"),
            n.e("29177"),
            n.e("21435"),
            n.e("61935"),
            n.e("88990"),
            n.e("21856"),
            n.e("58038"),
            n.e("24622"),
            n.e("32551"),
            n.e("62680"),
            n.e("40218"),
            n.e("43426"),
            n.e("96443"),
            n.e("65743"),
            n.e("87079"),
            n.e("88559"),
            n.e("21825"),
            n.e("60177"),
            n.e("25637"),
            n.e("39665"),
            n.e("75676"),
            n.e("23532"),
            n.e("18441"),
            n.e("43549"),
            n.e("31644"),
            n.e("89790"),
            n.e("86949"),
            n.e("33902"),
            n.e("53614"),
            n.e("52574"),
            n.e("18401"),
            n.e("31145"),
            n.e("27773"),
            n.e("63618"),
            n.e("99999"),
            n.e("53374"),
            n.e("93158"),
            n.e("56313"),
            n.e("31445"),
            n.e("71577"),
            n.e("52073"),
            n.e("9915"),
            n.e("34691"),
            n.e("92731"),
            n.e("28152"),
            n.e("36126"),
            n.e("7962"),
            n.e("64325"),
            n.e("1555"),
            n.e("32823"),
            n.e("78050"),
            n.e("80262"),
            n.e("56385"),
            n.e("59132"),
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
                              (0, i.jsx)(U.hE, { children: en.intl.string(en.t.csrAMJ) }),
                              (0, i.jsx)(U.tK, {
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
                              (0, i.jsx)(U.hE, { children: en.intl.string(en.t["Z+hCVU"]) }),
                              (0, i.jsx)(I.y, {}),
                          ],
                      })),
            (0, i.jsx)(eZ.$, { removeChildWrapper: !0, children: (0, i.jsx)("div", { className: e0.ah, children: e }) })
        );
    }
    return (0, i.jsx)(eZ.$, {
        removeChildWrapper: !0,
        children: (0, i.jsx)(e3, {
            transitionState: p.i.ENTERED,
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
        p =
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
        children: (0, i.jsx)(Y.A, { className: e0.dx, obscured: !0 === f, children: p }),
    });
}
function e6(e) {
    let { clientId: t, platformType: n, platformName: s } = e,
        a = (0, E.bG)([P.A], () => P.A.getApplication(t), [t]),
        o = (0, E.bG)([$.default, q.default], () => (null != $.default.getId() ? q.default.getCurrentUser() : null)),
        l = (0, b.Ay)(),
        u = D.A.get(n),
        c = null != u ? ((0, A.q)(l) ? u.icon.lightSVG : u.icon.darkSVG) : null,
        d = null != a ? Z.Ay.getApplicationIconURL({ id: a.id, icon: a.icon }) : null,
        _ = null != o ? Z.Ay.getUserAvatarURL(o) : null,
        h = a?.name ?? "";
    return (
        r.useEffect(() => {
            M.Ay.fetchApplication(t);
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
                        (0, i.jsx)(y.m, { size: "sm", color: "currentColor", className: e0.Vi }),
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
        o = D.A.get(t),
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
            responseType: p,
            redirectUri: m,
            codeChallenge: g,
            codeChallengeMethod: A,
            state: I,
            nonce: S,
            prompt: y,
            authorizations: C,
            scopes: b,
            permissions: w,
            guildId: P,
            channelId: U,
            integrationType: G,
            disableGuildSelect: F = !1,
            showLogout: V = !1,
            isTrustedName: j = !1,
            isEmbeddedFlow: Y = !1,
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
        ep = (0, E.bG)([B.A], () => B.A.hasLoadedExperiments);
    r.useEffect(() => {
        $.default.isAuthenticated() && !ep && R.A.getExperiments();
    }, [ep]);
    let [eE, em] = r.useState(null),
        [eg, eI] = r.useState(null),
        [eT, eS] = r.useState(null),
        [ey, eC] = r.useState(!1),
        [eN, ev] = r.useState(!1),
        eO = eE?.guilds,
        [eb, eD] = r.useState(P ?? null),
        [eL, ew] = r.useState(U ?? null),
        [eM, ex] = r.useState(X.x3),
        ek = (0, E.bG)([z.A], () => (null == e_ ? null : (z.A.getAccounts().find((e) => e.type === e_) ?? null)), [e_]),
        eU = null == e_ || null != ek,
        eF = r.useMemo(() => (eE?.user != null ? new K.A(eE.user) : null), [eE?.user]),
        eV = (0, E.bG)([q.default], () => q.default.getCurrentUser()?.nsfwAllowed),
        ej = (0, k.A)(eE?.application ?? null),
        eH = r.useMemo(() => eO?.find((e) => e.id === eb), [eO, eb]),
        [eY, eW] = r.useState(null),
        eK = r.useMemo(() => null == eh && null == G && (b?.length ?? 0) === 0 && null == m, [eh, b?.length, m, G]),
        [e$, ez] = r.useState(null);
    r.useEffect(() => {
        eK && M.Ay.fetchApplication(f).then((e) => ez(W.Ay.createFromServer(e)));
    }, [f, eK]);
    let eZ = r.useMemo(
            () => (null == eY ? null : e$?.integrationTypesConfig?.[eY]?.oauth2InstallParams),
            [e$?.integrationTypesConfig, eY],
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
            ? v.h.dispatch({ type: "SET_ANALYTICS_TOKEN", analyticsToken: e, userId: $.default.getId() })
            : (0, O.rQ)({ withAnalyticsToken: !0 }).catch(et.tEg);
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
    let tn = ei(eE?.application.content_classification ?? e$?.contentClassification, eV),
        ti = r.useCallback(
            async (e) => {
                if (null != ee) {
                    eC(!0), ee(e);
                    return;
                }
                if (null == eY) return void eS(Error("No integration type was selected."));
                try {
                    eC(!0);
                    let t = await (0, er.Gq)({
                        authorize: e,
                        clientId: f,
                        scopes: eJ,
                        responseType: p,
                        redirectUri: m,
                        codeChallenge: g,
                        codeChallengeMethod: A,
                        state: I,
                        nonce: S,
                        integrationType: eY,
                        connectedAccountProvider: e_,
                        permissions: h.TF(e3, eM),
                        guildId: eY === d.b.GUILD_INSTALL && null != eb ? eb : void 0,
                        channelId: eY === d.b.GUILD_INSTALL && null != eL ? eL : void 0,
                    });
                    if ((e && (await (0, x.Yx)(f, e8)), null != Z))
                        Z({ application: eE?.application, location: t.location, guild: eH, scopes: eJ }), el?.();
                    else if (null != t.location) {
                        let e = Q.A.toURLSafe(t.location)?.pathname;
                        Q.A.isDiscordUrl(t.location) && e === et.BVt.OAUTH2_AUTHORIZED
                            ? (0, H.pX)(et.BVt.OAUTH2_AUTHORIZED, {
                                  state: { application: eE?.application, guild: eH },
                              })
                            : (window.location = t.location);
                    } else eC(!1);
                } catch (t) {
                    let e = t.body;
                    e?.message != null && "" !== e.message ? eS(Error(e.message)) : eS(e),
                        eI("AUTHORIZE_SCOPES"),
                        eC(!1);
                }
            },
            [ee, Z, eE?.application, eH, el, f, eJ, p, m, g, A, I, S, e3, eM, eb, eY, e_, eL, e8],
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
                                      responseType: p,
                                      redirectUri: m,
                                      codeChallenge: g,
                                      codeChallengeMethod: A,
                                      state: I,
                                      nonce: S,
                                      integrationType: eY ?? void 0,
                                      connectedAccountProvider: e_,
                                  }),
                        n = ei(t.application.content_classification, eV);
                    em(
                        ((e = t),
                        null == e.guilds
                            ? e
                            : { ...e, guilds: e.guilds.map((e) => ({ ...e, permissions: h.iu(e.permissions) })) }),
                    ),
                        y !== eo.l.NONE || !t.authorized || te || n || ti(!0),
                        (0, L.zV)(et.HAw.OAUTH2_AUTHORIZE_VIEWED, { application_id: t.application.id });
                } catch (n) {
                    let { status: e, body: t } = n;
                    if (401 === e) return void (0, er.Vh)(ef, "oauth2_error_unauthorized");
                    eS(Error(null != t.message ? t.message : `${Object.keys(t)[0]}: ${Object.values(t)[0]}`));
                } finally {
                    tr.current = !1;
                }
            }
        }, [ef, eh, f, eJ, p, m, g, A, I, S, eY, e_, y, ti, te, eV]),
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
            (0, L.zV)(et.HAw.OAUTH2_AUTHORIZE_STEP_VIEWED, {
                step: eg,
                application_id: f,
                integration_type: eY,
                scopes: eJ,
                permissions: e3.toString(),
            }));
    }, [f, eY, e3, eJ, eg]),
        r.useEffect(() => {
            null == eg &&
                (!eK || null != e$) &&
                ep &&
                (null == e_ || eU
                    ? null != eh
                        ? (eW(eh.integration_type ?? d.b.GUILD_INSTALL), eI("AUTHORIZE_SCOPES"))
                        : ta.length > 1
                          ? eI("SELECT_INSTALL_TYPE")
                          : (1 === ta.length ? eW(ta[0]) : null != G ? eW(G) : eW(d.b.GUILD_INSTALL),
                            eI("AUTHORIZE_SCOPES"))
                    : eI("CONNECT_ACCOUNT"));
        }, [eh, ta, e$, eK, e_, eU, G, eg, ep]),
        r.useEffect(() => {
            "CONNECT_ACCOUNT" === eg && eU && (eW(G ?? d.b.USER_INSTALL), eI("AUTHORIZE_SCOPES"));
        }, [eg, eU, G]),
        r.useEffect(() => {
            if (null == eY || null != eE || null != eT) return;
            eY === d.b.USER_INSTALL && (eD(null), ew(null));
            let e = eJ.filter((e) => !ea.gX.includes(e));
            0 === eJ.length
                ? eS(Error("No scopes were provided."))
                : e.length > 0
                  ? eS(Error(`Invalid scope: ${e[0]}`))
                  : (0, es.F7)(e3)
                    ? eS(Error("Invalid permission(s) provided."))
                    : ts();
        }, [te, ts, eJ, e3, eY, eE, eT]);
    let tl = r.useCallback((e) => {
            e && ev(!0);
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
    let tc = null != e_ ? (D.A.get(e_)?.name ?? "") : "",
        td = !1,
        t_ = !1,
        th = !0,
        tf = !0,
        tp = !0,
        tE = !1;
    switch (eg) {
        case null:
            return { label: en.intl.string(en.t.ZTNur7), body: (0, i.jsx)(e5, {}) };
        case "CONNECT_ACCOUNT":
            (t = (0, i.jsx)(e6, { clientId: f, platformType: e_, platformName: tc })),
                (th = !1),
                (tf = !1),
                (tp = !1),
                (td = !0);
            break;
        case "SELECT_INSTALL_TYPE":
            if (null == e$) return { label: en.intl.string(en.t.ZTNur7), body: (0, i.jsx)(e5, {}) };
            (t = (0, i.jsx)(e1, {
                application: e$,
                onSelect: function (e) {
                    eW(e), em(null), eI("AUTHORIZE_SCOPES");
                },
            })),
                (th = !1),
                (tf = !1),
                (tp = !1),
                (tE = !0);
            break;
        case "AUTHORIZE_SCOPES":
            if (null == eE || null == eF || null == eY)
                return { label: en.intl.string(en.t.ZTNur7), body: (0, i.jsx)(e5, {}) };
            let tm = null == eT || eT instanceof Error ? {} : eT,
                tg = eO?.sort((e, t) => e.name.toLowerCase().localeCompare(t.name.toLowerCase())),
                tA = eY === d.b.GUILD_INSTALL && eJ.includes(_.F.WEBHOOK_INCOMING),
                tI =
                    tA ||
                    (eY === d.b.GUILD_INSTALL && (eJ.includes(_.F.BOT) || eJ.includes(_.F.APPLICATIONS_COMMANDS)));
            (t = (0, i.jsxs)(i.Fragment, {
                children: [
                    null != ek &&
                        eU &&
                        (0, i.jsx)(e4, {
                            platformType: ek.type,
                            platformName: tc,
                            connectedAccount: ek,
                            applicationName: eE.application.name,
                        }),
                    (0, i.jsx)(eR, { application: eE.application, accountScopes: e2 }),
                    (0, i.jsx)(eP, {
                        application: eE.application,
                        accountScopes: e2,
                        requestedScopes: eJ,
                        integrationType: eY,
                        errors: tm,
                        isTrustedName: j || ej,
                    }),
                    (0, i.jsx)("div", { className: e0.sL, ref: tu }),
                    tI
                        ? (0, i.jsx)(eB, {
                              error: (tm[_.F.BOT] ?? tm[_.F.APPLICATIONS_COMMANDS] ?? [])[0],
                              selectedGuildId: eb,
                              onGuildChange: eD,
                              guilds: tg ?? [],
                              disabled: "" !== eb && null != eb && !0 === F,
                          })
                        : null,
                    tA
                        ? (0, i.jsx)(eQ, {
                              error: (tm[_.F.WEBHOOK_INCOMING] ?? [])[0],
                              selectedChannelId: eL,
                              selectedGuildId: eb,
                              onChannelChange: ew,
                          })
                        : null,
                ],
            })),
                eJ.includes(_.F.BOT) && !h.aI(e3, X.x3) && (s = "AUTHORIZE_BOT_PERMISSIONS"),
                ta.length > 1 && (n = "SELECT_INSTALL_TYPE"),
                (t_ = (tI && null == eH) || (tA && null == eL)),
                (td = !0);
            break;
        case "AUTHORIZE_BOT_PERMISSIONS":
            if (null == eE) return { label: en.intl.string(en.t.ZTNur7), body: (0, i.jsx)(e5, {}) };
            (t = (0, i.jsx)(eG, {
                application: eE.application,
                permissions: e3,
                deniedPermissions: eM,
                onPermissionsChange: function (e, t) {
                    ex((n) => (e ? h.TF(n, t) : h.WQ(n, t)));
                },
                guild: eH,
            })),
                (n = "AUTHORIZE_SCOPES"),
                (td = !0);
    }
    let tT = [];
    if (th && null != eE) {
        let e = eE?.application.approximate_guild_count ?? eE?.bot?.approximate_guild_count;
        a = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(eA, {
                    application: eE.application,
                    scopes: eJ,
                    disclosures: e8,
                    redirectUri: eE.redirect_uri ?? null,
                    approximateGuildCount: void 0 !== e ? e : null,
                    isEmbeddedFlow: Y,
                    connectedAccount: ek,
                }),
                (0, i.jsx)("div", { className: e0.sL, ref: tu }),
            ],
        });
    }
    if (
        (tf &&
            null != eE &&
            null != eF &&
            (c = (0, i.jsx)(eq, {
                user: eF,
                application: eE.application,
                bot: eE.bot,
                accountScopes: e2,
                showLogout: V || !1,
                location: ef,
                scopes: eJ,
            })),
        tp &&
            (tT.push(
                null != n
                    ? { variant: "secondary", onClick: () => eI(n), text: en.intl.string(en.t["13/7kX"]) }
                    : { variant: "secondary", onClick: () => ti(!1), text: en.intl.string(en.t["ETE/oC"]) },
            ),
            "SELECT_INSTALL_TYPE" !== eg))
    ) {
        let e = "CONNECT_ACCOUNT" !== eg && !eN;
        tT.push(
            e
                ? { disabled: !0, loading: ey, text: en.intl.string(en.t.N22i9F), icon: N.M }
                : {
                      onClick: null != s ? () => eI(s) : () => ti(!0),
                      loading: ey,
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
        noPadding: tE,
        obscured: tn,
    };
}
function e8(e, t) {
    if (null == t.location || (null != e.callback && e.callback(t))) return;
    let { host: n, pathname: r, searchParams: s } = Q.A.toURLSafe(t.location) ?? {},
        a = Q.A.isDiscordHostname(n ?? null) || window.location.host === n;
    a && r === et.BVt.OAUTH2_AUTHORIZED
        ? (0, m.openModal)((e) => (0, i.jsx)(eX.dR, { guild: t.guild, application: t.application, ...e }))
        : a && r?.startsWith(et.BVt.OAUTH2_ERROR)
          ? (0, m.openModal)((e) => {
                let t = s?.get("error_description") ?? s?.get("error") ?? en.intl.string(en.t.mqn873);
                return (
                    Array.isArray(t) && (t = t[0]),
                    (0, i.jsx)(eZ.f, { ...e, children: (0, i.jsx)(eX.gz, { message: t, onClose: e.onClose }) })
                );
            })
          : window.open(t.location, "_blank")?.focus();
}
function e9(e, t) {
    (0, j._9)() ? V.A.openCreateGuildModal({ onSuccess: (n) => te({ ...e, guildId: n }, t) }) : te(e, t);
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
