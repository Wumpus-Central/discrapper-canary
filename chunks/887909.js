"use strict";
n.r(t),
    n.d(t, {
        OAuth2AuthorizeModal: () => e2,
        getOAuth2AuthorizeProps: () => te,
        OAuth2AuthorizePage: () => e1,
        openOAuth2Modal: () => e9,
        openOAuth2ModalWithCreateGuildModal: () => e8,
        useOAuth2AuthorizeForm: () => e5,
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
    U = n(457408),
    G = n(854378),
    F = n(968309),
    V = n(268218),
    B = n(272613),
    j = n(736056),
    H = n(14509),
    Y = n(976860),
    W = n(570962),
    K = n(395671),
    $ = n(889227),
    z = n(495544),
    q = n(30370),
    Z = n(287809),
    X = n(486020),
    Q = n(488926),
    J = n(998218),
    ee = n(123677),
    et = n(716965),
    en = n(376092),
    ei = n(647053),
    er = n(671523),
    es = n(998445),
    ea = n(11023),
    eo = n(173936),
    el = n(194261),
    eu = n(215026),
    ec = n(406810),
    ed = n(430392),
    e_ = n(231483),
    eh = n(20015),
    ef = n(935208),
    ep = n(652215),
    eE = n(375708),
    em = n(348418);
function eg(e) {
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
        c = new Date(ef.default.extractTimestamp(n.id)),
        d = (0, ei.i4)(r),
        h = (0, eh.n)(n, ep.gfo.EMBEDDED);
    if (null != s && !h && !o)
        try {
            let e = new URL(s);
            t = null != e.host && e.host.length > 0 ? e.origin : e.href;
        } catch (e) {
            t = null;
        }
    return (0, i.jsxs)("div", {
        className: em.B_,
        children: [
            null != t ? (0, i.jsx)(eA, { icon: eo.q, text: eE.intl.format(eE.t["5k5OKD"], { origin: t }) }) : null,
            (0, i.jsx)(eA, {
                icon: el.X,
                text: (function (e) {
                    let t = (0, k.t)(e);
                    if (null != e.privacy_policy_url && null != e.terms_of_service_url) {
                        let n = t ? eE.t.yVfotv : eE.t.rxlyKL;
                        return eE.intl.format(n, {
                            application: e.name,
                            privacyPolicyURL: e.privacy_policy_url,
                            termsOfServiceURL: e.terms_of_service_url,
                            discordPrivacyPolicyURL: ep.X7G.PRIVACY,
                        });
                    }
                    if (null != e.privacy_policy_url) {
                        let n = t ? eE.t.pYVSah : eE.t.TBvmM2;
                        return eE.intl.format(n, {
                            application: e.name,
                            privacyPolicyURL: e.privacy_policy_url,
                            discordPrivacyPolicyURL: ep.X7G.PRIVACY,
                        });
                    }
                    if (null != e.terms_of_service_url) {
                        let n = t ? eE.t.nBLOp5 : eE.t["q0T/Q1"];
                        return eE.intl.format(n, {
                            application: e.name,
                            termsOfServiceURL: e.terms_of_service_url,
                            discordPrivacyPolicyURL: ep.X7G.PRIVACY,
                        });
                    }
                    let n = t ? eE.t["8LemYv"] : eE.t["3Ywek3"];
                    return eE.intl.format(n, { application: e.name, discordPrivacyPolicyURL: ep.X7G.PRIVACY });
                })(n),
            }),
            null != u ? (0, i.jsx)(eA, { icon: eu.w, text: eE.intl.string(eE.t["8qui3M"]) }) : null,
            (0, i.jsx)(eA, { icon: ec.O, text: eE.intl.formatToPlainString(eE.t["+1bjc8"], { date: c }) }),
            r.includes(_.F.BOT) && null != a
                ? (0, i.jsx)(eA, { icon: ed.C, text: eE.intl.formatToPlainString(eE.t.UHGHSP, { guildCount: a }) })
                : null,
            (0, i.jsx)(eA, { icon: e_.l, text: d }),
            null != l
                ? l.map((e) => {
                      let t = (0, x.wI)(e),
                          n = ((e) => {
                              switch (e) {
                                  case x.yW.IP_LOCATION:
                                      return es.L;
                                  case x.yW.DISPLAYS_ADVERTISEMENTS:
                                      return ea.J;
                                  default:
                                      return null;
                              }
                          })(e);
                      return null != n && null != t ? (0, i.jsx)(eA, { icon: n, text: t }) : null;
                  })
                : null,
        ],
    });
}
function eA(e) {
    let { icon: t, text: n } = e;
    return (0, i.jsxs)("div", {
        className: em.f_,
        children: [
            (0, i.jsx)(t, { className: em.u7, color: "currentColor" }),
            (0, i.jsx)(T.E, { variant: "text-xs/normal", className: em.z9, children: n }),
        ],
    });
}
var eI = n(214947),
    eT = n(845798),
    eS = n(687966),
    ey = n(625903),
    eC = n(975571),
    eN = n(645650);
function ev(e) {
    let t,
        { application: n, accountScopes: r } = e,
        s = [],
        a = (0, k.A)(n);
    return (r.includes(_.F.SDK_SOCIAL_LAYER)
        ? ((t = a
              ? eE.intl.format(eE.t.GxjwZM, {
                    applicationName: n.name,
                    learnMoreURL: eC.A.getArticleURL(ep.MVz.SOCIAL_LAYER_CONNECTIONS),
                })
              : eE.intl.format(eE.t.DfBeUq, { learnMoreURL: eC.A.getArticleURL(ep.MVz.SOCIAL_LAYER_CONNECTIONS) })),
          s.push(
              {
                  icon: eI.$,
                  text: a
                      ? eE.intl.formatToPlainString(eE.t.z9peav, { maxFriends: ep.$4X })
                      : eE.intl.formatToPlainString(eE.t.WNKzo9, { maxFriends: ep.$4X }),
              },
              { icon: eT.S, text: a ? eE.intl.string(eE.t.daY6xj) : eE.intl.string(eE.t.j7peBh) },
              { icon: eS._, text: a ? eE.intl.string(eE.t["/bdaNN"]) : eE.intl.string(eE.t["feD3+i"]) },
              { icon: ey.Z, text: a ? eE.intl.string(eE.t.mSqazC) : eE.intl.string(eE.t.YFFVM1) },
          ))
        : r.includes(_.F.SDK_SOCIAL_LAYER_PRESENCE) &&
          ((t = a
              ? eE.intl.format(eE.t.GxjwZM, {
                    applicationName: n.name,
                    learnMoreURL: eC.A.getArticleURL(ep.MVz.SOCIAL_LAYER_CONNECTIONS),
                })
              : eE.intl.format(eE.t.DfBeUq, { learnMoreURL: eC.A.getArticleURL(ep.MVz.SOCIAL_LAYER_CONNECTIONS) })),
          s.push(
              {
                  icon: eI.$,
                  text: a
                      ? eE.intl.formatToPlainString(eE.t.z9peav, { maxFriends: ep.$4X })
                      : eE.intl.formatToPlainString(eE.t.WNKzo9, { maxFriends: ep.$4X }),
              },
              { icon: eS._, text: a ? eE.intl.string(eE.t["/bdaNN"]) : eE.intl.string(eE.t["feD3+i"]) },
              { icon: ey.Z, text: a ? eE.intl.string(eE.t.mSqazC) : eE.intl.string(eE.t.YFFVM1) },
          )),
    0 === s.length)
        ? null
        : (0, i.jsxs)("div", {
              className: eN.b9,
              children: [
                  null != t ? (0, i.jsx)(S.D, { variant: "heading-sm/normal", className: eN.a9, children: t }) : null,
                  s.map((e, t) => {
                      let { icon: n, text: r } = e;
                      return (0, i.jsx)(eR, { icon: n, text: r }, t);
                  }),
              ],
          });
}
function eR(e) {
    let { icon: t, text: n } = e;
    return (0, i.jsxs)("div", {
        className: eN.f_,
        children: [
            (0, i.jsx)(t, { className: eN.u7, color: "currentColor" }),
            (0, i.jsx)(T.E, { variant: "text-md/normal", className: eN.u0, children: n }),
        ],
    });
}
var eO = n(285796),
    eb = n(628284),
    eD = n(444927),
    eL = n(415122);
function ew(e) {
    let { text: t, error: n, isFake: r } = e,
        s = !0 === r ? eE.intl.string(eE.t.OX8EMU) : eE.intl.string(eE.t["0lpCFG"]),
        o = `${s}: ${t}${null != n ? `. ${n}` : ""}`;
    return (0, i.jsxs)("div", {
        className: eL.z8,
        role: "group",
        "aria-label": o,
        children: [
            !0 === r
                ? (0, i.jsx)(eO.a, {
                      size: "md",
                      color: "currentColor",
                      className: a()(eL.Kk, eL.RC),
                      "aria-hidden": !0,
                  })
                : (0, i.jsx)(eb.y, {
                      size: "md",
                      color: "currentColor",
                      className: a()(eL.Kk, eL.sc),
                      "aria-hidden": !0,
                  }),
            (0, i.jsxs)("div", {
                className: eL.rv,
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
        c = (0, eD.A)(() => ei.O_[Math.floor(Math.random() * ei.O_.length)]);
    if (0 === n.length) return null;
    let h = c(),
        f = l ? eE.t.PZpY9c : eE.t["1Hz+Sl"],
        p = s === d.b.USER_INSTALL && r.includes(_.F.APPLICATIONS_COMMANDS);
    return (0, i.jsxs)("div", {
        className: a()(eL.Wu, u ? eL.bc : void 0),
        children: [
            (0, i.jsx)(S.D, {
                variant: "heading-sm/normal",
                className: eL.a9,
                children: eE.intl.format(f, { application: t?.name ?? "" }),
            }),
            n
                .map((e) =>
                    (0, ei.rY)(e, n).map((t, n) =>
                        (0, i.jsx)(ew, { text: t, error: 0 === n ? o?.[e]?.[0] : void 0 }, `${e}-${n}`),
                    ),
                )
                .flat(),
            p && (0, i.jsx)(ew, { text: eE.intl.string(eE.t.Ls2XRq) }),
            (0, i.jsx)(ew, { text: h, isFake: !0 }),
        ],
    });
}
var eP = n(150934),
    ex = n(789645),
    ek = n(751645);
function eU(e) {
    let { application: t, permissions: n, deniedPermissions: s, onPermissionsChange: a, guild: o } = e,
        l = r.useMemo(() => h.B8(o.permissions), [o.permissions]);
    r.useEffect(() => {
        a(!1, h.pb(n, l));
    }, [l, a, n]);
    let u = en.Q.filter((e) => h.zy(n, e)),
        c = u
            .filter((e) => !h.zy(l, e))
            .map((e) => {
                let t = (0, en.hx)(e),
                    n = !h.zy(s, e);
                return (0, i.jsx)(
                    "li",
                    {
                        className: ek.EK,
                        children: (0, i.jsx)(eP.S, { checked: n, onChange: (t) => a(t, e), label: t }),
                    },
                    String(e),
                );
            }),
        d = u
            .filter((e) => h.zy(l, e))
            .map((e) => {
                let t = (0, en.hx)(e);
                return (0, i.jsxs)(
                    "li",
                    {
                        className: ek.EK,
                        children: [
                            (0, i.jsx)("div", {
                                className: ek.nW,
                                children: (0, i.jsx)(ex.P, { size: "md", color: "currentColor", className: ek.Kk }),
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
                              children: eE.intl.format(eE.t.sOaT2j, { applicationName: t.name, guildName: o.name }),
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
                              children: eE.intl.format(eE.t.fsOkF4, { applicationName: t.name }),
                          }),
                          (0, i.jsx)("ul", { className: ek.RH, children: d }),
                      ],
                  })
                : null,
        ],
    });
}
var eG = n(783878),
    eF = n(551280);
function eV(e) {
    let { error: t, selectedGuildId: n, onGuildChange: r, guilds: s, disabled: a = !1 } = e,
        o = s
            .filter((e) => h.zy(e.permissions, ep.xBc.MANAGE_GUILD))
            .map((e) => ({ id: e.id, value: e.id, label: e.name }));
    return (0, i.jsx)("div", {
        className: eF.g,
        children: (0, i.jsx)(eG.Z, {
            label: eE.intl.string(eE.t["1DXFFd"]),
            helperText: eE.intl.format(eE.t.t9Jm9o, {}),
            errorMessage: t,
            selectionMode: "single",
            maxOptionsVisible: 5,
            placeholder: eE.intl.string(eE.t.oM4E1A),
            options: o,
            onSelectionChange: r,
            disabled: a,
            value: n ?? void 0,
        }),
    });
}
var eB = n(665260),
    ej = n(939249),
    eH = n(97808),
    eY = n(709066),
    eW = n(566615),
    eK = n(778712),
    e$ = n(510523);
function ez(e) {
    let { user: t, application: n, bot: s, accountScopes: a, showLogout: o, location: l, scopes: u } = e,
        c = (0, eW.i)(),
        d = X.Ay.getApplicationIconURL({ id: n.id, icon: n.icon }),
        _ = X.Ay.getUserAvatarURL(t),
        h = r.useMemo(
            () =>
                u.some((e) => (0, ei.RM)(e))
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(T.E, {
                                  variant: "text-lg/normal",
                                  color: "text-default",
                                  children: eE.intl.string(eE.t.uT1CPa),
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
                                                className: e$.AO,
                                                verified:
                                                    null != s.public_flags &&
                                                    (0, eB.Lt)(s.public_flags, ep.nhx.VERIFIED_BOT),
                                            })
                                          : null,
                                  ],
                              }),
                              a.length > 0
                                  ? (0, i.jsx)(T.E, {
                                        variant: "text-md/normal",
                                        color: "text-default",
                                        children: eE.intl.string(eE.t.jFbDnJ),
                                    })
                                  : (0, i.jsx)(T.E, {
                                        variant: "text-md/normal",
                                        color: "text-default",
                                        children: eE.intl.string(eE.t["X+Fdpo"]),
                                    }),
                          ],
                      }),
            [a.length, n, s, u],
        );
    return (0, i.jsxs)("header", {
        id: c,
        className: e$.wx,
        children: [
            (0, i.jsxs)("div", {
                className: e$.Y,
                children: [
                    (0, i.jsx)(eH.eu, { className: e$.my, src: d, size: eK._3.SIZE_80, "aria-label": n.name }),
                    (0, i.jsxs)("div", {
                        className: e$.I5,
                        children: [
                            (0, i.jsx)("div", { className: e$.pw }),
                            (0, i.jsx)("div", { className: e$.pw }),
                            (0, i.jsx)("div", { className: e$.pw }),
                        ],
                    }),
                    (0, i.jsx)(eH.eu, { className: e$.my, src: _, size: eK._3.SIZE_80, "aria-label": t.username }),
                ],
            }),
            h,
            o
                ? (0, i.jsx)("div", {
                      className: e$.Ny,
                      children: (0, i.jsxs)(T.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: [
                              eE.intl.format(eE.t.qRvpYU, {
                                  userHook: () =>
                                      (0, i.jsxs)(
                                          T.E,
                                          {
                                              className: e$.ZD,
                                              variant: "text-sm/normal",
                                              children: [
                                                  t.username,
                                                  !t.hasUniqueUsername() &&
                                                      (0, i.jsx)(T.E, {
                                                          className: e$.Jb,
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
                                  className: e$.Pg,
                                  onClick: () => (0, et.Vh)(l, "oauth2_logout"),
                                  children: eE.intl.string(eE.t["yV/hjC"]),
                              }),
                          ],
                      }),
                  })
                : null,
        ],
    });
}
var eq = n(321987),
    eZ = n(595244);
function eX(e) {
    let { selectedGuildId: t, selectedChannelId: n, onChannelChange: s, error: a } = e,
        [o, l] = r.useState(null),
        u = r.useRef(!1);
    if (
        (r.useEffect(() => {
            async function e(e) {
                let n = await (0, et.$Q)(e);
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
        children: (0, i.jsx)(eG.Z, {
            label: eE.intl.string(eE.t["8qKd+J"]),
            helperText: eE.intl.string(eE.t.kQXMfN),
            selectionMode: "single",
            maxOptionsVisible: 5,
            errorMessage: a,
            onSelectionChange: s,
            placeholder: eE.intl.string(eE.t["Re/64R"]),
            options: c,
            value: n ?? void 0,
        }),
    });
}
var eQ = n(613057),
    eJ = n(636663);
let e0 = (0, V.Fe)({
    createPromise: () =>
        Promise.all([
            n.e("99796"),
            n.e("75120"),
            n.e("66434"),
            n.e("74414"),
            n.e("4394"),
            n.e("85566"),
            n.e("79070"),
            n.e("4207"),
            n.e("45554"),
            n.e("36761"),
            n.e("63867"),
            n.e("69292"),
            n.e("29877"),
            n.e("32993"),
            n.e("98488"),
            n.e("31591"),
            n.e("9399"),
            n.e("4704"),
            n.e("85497"),
            n.e("62203"),
            n.e("91024"),
            n.e("33865"),
            n.e("42309"),
            n.e("29351"),
            n.e("43233"),
            n.e("85184"),
            n.e("22796"),
            n.e("4276"),
            n.e("50180"),
            n.e("37497"),
            n.e("60193"),
            n.e("53684"),
            n.e("89050"),
            n.e("88610"),
            n.e("33087"),
            n.e("4189"),
            n.e("50568"),
            n.e("49623"),
            n.e("6026"),
            n.e("1009"),
            n.e("90862"),
            n.e("90266"),
            n.e("32890"),
            n.e("16918"),
            n.e("33730"),
            n.e("91483"),
            n.e("83893"),
            n.e("70278"),
            n.e("16860"),
            n.e("56359"),
            n.e("63051"),
            n.e("99501"),
            n.e("59494"),
            n.e("33287"),
            n.e("19709"),
            n.e("67458"),
            n.e("58427"),
            n.e("20642"),
            n.e("29161"),
            n.e("98180"),
            n.e("41625"),
            n.e("7959"),
            n.e("60717"),
            n.e("55552"),
            n.e("85484"),
            n.e("2672"),
            n.e("31135"),
            n.e("55929"),
            n.e("26128"),
            n.e("11262"),
            n.e("54483"),
            n.e("33460"),
            n.e("82314"),
            n.e("41686"),
            n.e("25677"),
            n.e("85411"),
            n.e("88804"),
            n.e("13233"),
            n.e("89001"),
            n.e("54558"),
            n.e("55990"),
            n.e("73679"),
            n.e("35538"),
            n.e("73178"),
            n.e("61274"),
            n.e("26913"),
            n.e("41229"),
            n.e("31592"),
            n.e("28339"),
            n.e("97638"),
            n.e("22995"),
            n.e("70141"),
            n.e("1055"),
            n.e("23036"),
            n.e("3951"),
            n.e("70736"),
            n.e("39865"),
            n.e("50870"),
            n.e("43608"),
            n.e("29944"),
            n.e("59731"),
            n.e("59760"),
            n.e("67865"),
            n.e("40690"),
            n.e("98275"),
            n.e("72651"),
            n.e("29363"),
            n.e("88016"),
            n.e("38886"),
            n.e("84133"),
            n.e("30240"),
            n.e("510"),
            n.e("57447"),
            n.e("27282"),
            n.e("7339"),
            n.e("90241"),
            n.e("37271"),
            n.e("49993"),
            n.e("65813"),
            n.e("8037"),
            n.e("50748"),
            n.e("1844"),
            n.e("57016"),
            n.e("45826"),
            n.e("9396"),
            n.e("53075"),
            n.e("26564"),
            n.e("77529"),
            n.e("10061"),
            n.e("57766"),
            n.e("91552"),
            n.e("69213"),
            n.e("86650"),
            n.e("52196"),
            n.e("85899"),
            n.e("61322"),
            n.e("76821"),
            n.e("22256"),
            n.e("43031"),
            n.e("22513"),
            n.e("22656"),
            n.e("25964"),
            n.e("28379"),
            n.e("41737"),
            n.e("92330"),
            n.e("53233"),
            n.e("96901"),
            n.e("71796"),
            n.e("33600"),
            n.e("49645"),
            n.e("25339"),
            n.e("84454"),
            n.e("62426"),
            n.e("1887"),
            n.e("39995"),
            n.e("25568"),
            n.e("29272"),
            n.e("97391"),
            n.e("67332"),
            n.e("57114"),
            n.e("90059"),
            n.e("53552"),
            n.e("58127"),
            n.e("816"),
            n.e("43683"),
            n.e("59303"),
            n.e("31610"),
            n.e("16192"),
            n.e("71413"),
            n.e("59914"),
            n.e("82655"),
            n.e("67687"),
            n.e("55642"),
            n.e("75029"),
            n.e("56405"),
            n.e("25508"),
            n.e("17303"),
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
            n.e("10004"),
            n.e("77473"),
            n.e("53930"),
            n.e("23353"),
            n.e("18943"),
            n.e("7167"),
            n.e("25279"),
            n.e("87306"),
            n.e("92789"),
            n.e("57598"),
            n.e("84967"),
            n.e("31390"),
            n.e("37687"),
            n.e("41043"),
            n.e("43039"),
            n.e("26780"),
            n.e("44265"),
            n.e("48804"),
            n.e("8304"),
            n.e("84103"),
            n.e("17225"),
            n.e("62875"),
            n.e("30920"),
            n.e("63095"),
            n.e("70653"),
            n.e("52266"),
            n.e("53039"),
            n.e("96123"),
            n.e("8892"),
            n.e("92583"),
            n.e("39810"),
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
            n.e("31445"),
            n.e("62931"),
            n.e("18181"),
            n.e("59880"),
            n.e("14805"),
            n.e("73547"),
            n.e("24761"),
            n.e("99593"),
            n.e("60658"),
            n.e("55314"),
            n.e("89094"),
            n.e("6338"),
            n.e("47834"),
            n.e("47555"),
            n.e("18573"),
            n.e("29177"),
            n.e("21435"),
            n.e("61935"),
            n.e("88990"),
            n.e("21856"),
            n.e("58038"),
            n.e("32551"),
            n.e("62680"),
            n.e("31790"),
            n.e("43426"),
            n.e("96443"),
            n.e("65743"),
            n.e("87079"),
            n.e("88559"),
            n.e("21132"),
            n.e("21825"),
            n.e("25637"),
            n.e("60177"),
            n.e("39665"),
            n.e("23532"),
            n.e("18441"),
            n.e("31644"),
            n.e("76311"),
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
function e1() {
    let e = (0, o.zy)(),
        t = r.useMemo(() => (0, ee._)(e.search), [e.search]);
    (0, w.A)();
    let s = !e.search.includes("response_type"),
        [a, l] = r.useState(!1),
        u = r.useRef(!1),
        [d, _] = r.useState(null),
        h = !c.Fr && !a && (s || !z.default.isAuthenticated());
    if (
        (r.useEffect(() => {
            if (c.Ct && s) {
                let t = new URL("discord://action/oauth2/authorize");
                (t.search = e.search), window.open(t.toString(), "_self");
            } else
                c.Fr ||
                    (!s && z.default.isAuthenticated()) ||
                    u.current ||
                    ((u.current = !0),
                    Promise.resolve()
                        .then(n.bind(n, 129014))
                        .then((t) => {
                            let { default: n } = t;
                            if (s)
                                n.request(ep.e$_.DEEP_LINK, { type: eQ.XK.OAUTH2, params: { search: e.search } })
                                    .then((e) => {
                                        _(e ?? !1);
                                    })
                                    .catch(() => _(!1))
                                    .then(() => n.disconnect());
                            else {
                                _(!0);
                                let t = new URLSearchParams(e.search);
                                n.request(ep.e$_.AUTHORIZE, {
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
                              (0, i.jsx)(G.hE, { children: eE.intl.string(eE.t.csrAMJ) }),
                              (0, i.jsx)(G.tK, {
                                  children: s ? eE.intl.string(eE.t["m1+IBn"]) : eE.intl.string(eE.t.kRzrSO),
                              }),
                              (0, i.jsx)(g.$, {
                                  onClick: () => l(!0),
                                  variant: "primary",
                                  text: eE.intl.string(eE.t.fIv16B),
                              }),
                          ],
                      })
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(G.hE, { children: eE.intl.string(eE.t["Z+hCVU"]) }),
                              (0, i.jsx)(I.y, {}),
                          ],
                      })),
            (0, i.jsx)(eq.$, { removeChildWrapper: !0, children: (0, i.jsx)("div", { className: eJ.ah, children: e }) })
        );
    }
    return (0, i.jsx)(eq.$, {
        removeChildWrapper: !0,
        children: (0, i.jsx)(e2, {
            transitionState: p.i.ENTERED,
            ...t,
            showLogout: !0,
            isExternalStandaloneOAuthPage: !0,
            hideHeader: !0,
        }),
    });
}
function e2(e) {
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
        } = e5({ ...e }),
        p =
            null != s || null != o || null != c
                ? (0, i.jsxs)("div", {
                      className: eJ.Gq,
                      children: [
                          s,
                          (0, i.jsx)("div", {
                              className: eJ.FG,
                              children: (0, i.jsxs)("div", {
                                  className: a()(eJ.Qs, d ? eJ.cw : null, _ ? eJ.pN : null),
                                  children: [o, null == u ? c : null],
                              }),
                          }),
                      ],
                  })
                : null;
    return (0, i.jsx)(eq.f, {
        ...e,
        onClose: () => Promise.resolve(e.onClose?.()),
        size: h,
        actions: l,
        title: n,
        subtitle: r,
        "aria-label": t,
        children: (0, i.jsx)(W.A, { className: eJ.dx, obscured: !0 === f, children: p }),
    });
}
function e3(e) {
    let { clientId: t, platformType: n, platformName: s } = e,
        a = (0, E.bG)([P.A], () => P.A.getApplication(t), [t]),
        o = (0, E.bG)([z.default, Z.default], () => (null != z.default.getId() ? Z.default.getCurrentUser() : null)),
        l = (0, b.Ay)(),
        u = D.A.get(n),
        c = null != u ? ((0, A.q)(l) ? u.icon.lightSVG : u.icon.darkSVG) : null,
        d = null != a ? X.Ay.getApplicationIconURL({ id: a.id, icon: a.icon }) : null,
        _ = null != o ? X.Ay.getUserAvatarURL(o) : null,
        h = a?.name ?? "";
    return (
        r.useEffect(() => {
            M.Ay.fetchApplication(t);
        }, [t]),
        (0, i.jsxs)("div", {
            className: eJ.E4,
            children: [
                (0, i.jsxs)("div", {
                    className: eJ.z1,
                    children: [
                        (0, i.jsxs)("div", {
                            className: eJ.q3,
                            children: [
                                null != d
                                    ? (0, i.jsx)("img", { src: d, alt: h, className: eJ.gO })
                                    : (0, i.jsx)("div", { className: eJ.gO }),
                                (0, i.jsx)(f.j, { size: "md", color: "currentColor" }),
                                null != _ && (0, i.jsx)("img", { src: _, alt: "", className: eJ.eh }),
                            ],
                        }),
                        (0, i.jsx)(T.E, { variant: "text-lg/normal", children: eE.intl.string(eE.t.uT1CPa) }),
                        (0, i.jsx)(S.D, { variant: "heading-xl/semibold", children: h }),
                    ],
                }),
                (0, i.jsx)(T.E, {
                    variant: "text-sm/normal",
                    children: eE.intl.format(eE.t["aJRE/Q"], { applicationName: h, platformName: s }),
                }),
                (0, i.jsxs)("div", {
                    className: eJ.eD,
                    children: [
                        null != c && (0, i.jsx)("img", { src: c, alt: "", className: eJ.sw }),
                        (0, i.jsx)(T.E, { variant: "text-md/medium", className: eJ.PP, children: s }),
                        (0, i.jsx)(g.$, {
                            variant: "primary",
                            size: "sm",
                            onClick: function () {
                                (0, F.A)({ platformType: n, location: "OAuth2 Connect Account Step" });
                            },
                            text: eE.intl.string(eE.t.S0W8Z5),
                        }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: eJ.sT,
                    children: [
                        (0, i.jsx)(y.m, { size: "sm", color: "currentColor", className: eJ.Vi }),
                        (0, i.jsx)(T.E, {
                            variant: "text-sm/normal",
                            children: eE.intl.format(eE.t["8psEFX"], { platformName: s, applicationName: h }),
                        }),
                    ],
                }),
            ],
        })
    );
}
function e6(e) {
    let { platformType: t, platformName: n, connectedAccount: r, applicationName: s } = e,
        a = (0, b.Ay)(),
        o = D.A.get(t),
        l = null != o ? ((0, A.q)(a) ? o.icon.lightSVG : o.icon.darkSVG) : null;
    return (0, i.jsxs)("div", {
        className: eJ.E4,
        children: [
            (0, i.jsx)(T.E, {
                variant: "text-sm/normal",
                children: eE.intl.format(eE.t["+oaRw3"], { platformName: n }),
            }),
            (0, i.jsxs)("div", {
                className: eJ.eD,
                children: [
                    null != l && (0, i.jsx)("img", { src: l, alt: "", className: eJ.sw }),
                    (0, i.jsxs)("div", {
                        className: eJ.mG,
                        children: [
                            (0, i.jsx)(T.E, { variant: "text-md/medium", children: r.name }),
                            (0, i.jsx)(T.E, {
                                variant: "text-xs/normal",
                                children: eE.intl.format(eE.t.Dkd7sE, { platformName: n, connectedAccountId: r.id }),
                            }),
                        ],
                    }),
                    (0, i.jsx)(C.A, { size: "sm", color: "status-positive" }),
                ],
            }),
            (0, i.jsx)(T.E, {
                variant: "text-sm/normal",
                children: eE.intl.format(eE.t.pyRNXJ, { applicationName: s }),
            }),
            (0, i.jsx)("div", { className: eJ.zd }),
        ],
    });
}
function e4() {
    return (0, i.jsx)("div", { className: eJ.g4, children: (0, i.jsx)(I.y, { className: eJ.u1 }) });
}
function e5(e) {
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
            channelId: G,
            integrationType: F,
            disableGuildSelect: V = !1,
            showLogout: B = !1,
            isTrustedName: H = !1,
            isEmbeddedFlow: W = !1,
            callback: X,
            callbackWithoutPost: es,
            onClose: ea,
            disclosures: eo,
            isExternalStandaloneOAuthPage: el = !1,
            isTwoWayLinkDiscordConsent: eu = !1,
            connectedAccountProvider: ec,
        } = e,
        ed = null != F ? C?.get(F) : void 0,
        e_ = (0, o.zy)(),
        eh = (0, E.bG)([j.A], () => j.A.hasLoadedExperiments);
    r.useEffect(() => {
        z.default.isAuthenticated() && !eh && R.A.getExperiments();
    }, [eh]);
    let [ef, em] = r.useState(null),
        [eA, eI] = r.useState(null),
        [eT, eS] = r.useState(null),
        [ey, eC] = r.useState(!1),
        [eN, eR] = r.useState(!1),
        eO = ef?.guilds,
        [eb, eD] = r.useState(P ?? null),
        [eL, ew] = r.useState(G ?? null),
        [eP, ex] = r.useState(Q.x3),
        ek = (0, E.bG)([q.A], () => (null == ec ? null : (q.A.getAccounts().find((e) => e.type === ec) ?? null)), [ec]),
        eG = null == ec || null != ek,
        eF = r.useMemo(() => (ef?.user != null ? new $.A(ef.user) : null), [ef?.user]),
        eB = (0, E.bG)([Z.default], () => Z.default.getCurrentUser()?.nsfwAllowed),
        ej = (0, k.A)(ef?.application ?? null),
        eH = r.useMemo(() => eO?.find((e) => e.id === eb), [eO, eb]),
        [eY, eW] = r.useState(null),
        eK = r.useMemo(() => null == ed && null == F && (b?.length ?? 0) === 0 && null == m, [ed, b?.length, m, F]),
        [e$, eq] = r.useState(null);
    r.useEffect(() => {
        eK && M.Ay.fetchApplication(f).then((e) => eq(K.Ay.createFromServer(e)));
    }, [f, eK]);
    let eQ = r.useMemo(
            () => (null == eY ? null : e$?.integrationTypesConfig?.[eY]?.oauth2InstallParams),
            [e$?.integrationTypesConfig, eY],
        ),
        { requestedScopes: e1, accountScopes: e2 } = r.useMemo(() => {
            let e = eK ? eQ?.scopes : b,
                t = (0, ee.e)(e ?? []),
                n = ei.k$.filter((e) => t.includes(e));
            return { requestedScopes: t, accountScopes: n };
        }, [eQ?.scopes, b, eK]),
        e5 = r.useMemo(() => (eK ? h.iu(eQ?.permissions ?? 0) : w) ?? Q.x3, [eQ?.permissions, w, eK]),
        e7 = r.useRef(!1),
        [e8, e9] = r.useState(eo ?? []),
        [te, tt] = r.useState(null != eo && eo.length > 0);
    (0, u.Ay)(() => {
        let e = z.default.getAnalyticsToken();
        null != e
            ? v.h.dispatch({ type: "SET_ANALYTICS_TOKEN", analyticsToken: e, userId: z.default.getId() })
            : (0, O.rQ)({ withAnalyticsToken: !0 }).catch(ep.tEg);
    }),
        r.useEffect(() => {
            if (e7.current) return;
            let e = async () => {
                e7.current = !0;
                try {
                    let { disclosures: e, allAcked: t } = await (0, x.vG)(f);
                    tt(!t), e9(e);
                } catch (n) {
                    let { status: e, body: t } = n;
                    if (401 === e) return void (0, et.Vh)(e_, "oauth2_error_failed_disclosures");
                    eS(Error(null != t.message ? t.message : `${Object.keys(t)[0]}: ${Object.values(t)[0]}`));
                } finally {
                    e7.current = !1;
                }
            };
            if (null == eo) {
                if (!z.default.isAuthenticated()) return void (0, et.Vh)(e_, "oauth2_error_not_authenticated");
                e();
            }
        }, [f, e_, eo, e9, eS, tt, eI]);
    let tn = ef?.application.content_classification ?? e$?.contentClassification,
        ti = null != tn && (0, U.K)(tn) && !1 === eB,
        tr = r.useCallback(
            async (e) => {
                if (null != es) {
                    eC(!0), es(e);
                    return;
                }
                if (null == eY) return void eS(Error("No integration type was selected."));
                try {
                    eC(!0);
                    let t = await (0, et.Gq)({
                        authorize: e,
                        clientId: f,
                        scopes: e1,
                        responseType: p,
                        redirectUri: m,
                        codeChallenge: g,
                        codeChallengeMethod: A,
                        state: I,
                        nonce: S,
                        integrationType: eY,
                        connectedAccountProvider: ec,
                        permissions: h.TF(e5, eP),
                        guildId: eY === d.b.GUILD_INSTALL && null != eb ? eb : void 0,
                        channelId: eY === d.b.GUILD_INSTALL && null != eL ? eL : void 0,
                    });
                    if ((e && (await (0, x.Yx)(f, e8)), null != X))
                        X({ application: ef?.application, location: t.location, guild: eH, scopes: e1 }), ea?.();
                    else if (null != t.location) {
                        let e = J.A.toURLSafe(t.location)?.pathname;
                        J.A.isDiscordUrl(t.location) && e === ep.BVt.OAUTH2_AUTHORIZED
                            ? (0, Y.pX)(ep.BVt.OAUTH2_AUTHORIZED, {
                                  state: { application: ef?.application, guild: eH },
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
            [es, X, ef?.application, eH, ea, f, e1, p, m, g, A, I, S, e5, eP, eb, eY, ec, eL, e8],
        ),
        ts = r.useRef(!1),
        ta = r.useCallback(async () => {
            if (!z.default.isAuthenticated()) return void (0, et.Vh)(e_, "oauth2_error_not_authenticated");
            if (!e7.current && !ts.current) {
                ts.current = !0;
                try {
                    var e;
                    let t =
                        null != ed
                            ? ed
                            : await (0, et.qY)({
                                  clientId: f,
                                  scopes: e1,
                                  responseType: p,
                                  redirectUri: m,
                                  codeChallenge: g,
                                  codeChallengeMethod: A,
                                  state: I,
                                  nonce: S,
                                  integrationType: eY ?? void 0,
                                  connectedAccountProvider: ec,
                              });
                    em(
                        ((e = t),
                        null == e.guilds
                            ? e
                            : { ...e, guilds: e.guilds.map((e) => ({ ...e, permissions: h.iu(e.permissions) })) }),
                    ),
                        y !== er.l.NONE || !t.authorized || te || ti || tr(!0),
                        (0, L.zV)(ep.HAw.OAUTH2_AUTHORIZE_VIEWED, { application_id: t.application.id });
                } catch (n) {
                    let { status: e, body: t } = n;
                    if (401 === e) return void (0, et.Vh)(e_, "oauth2_error_unauthorized");
                    eS(Error(null != t.message ? t.message : `${Object.keys(t)[0]}: ${Object.values(t)[0]}`));
                } finally {
                    ts.current = !1;
                }
            }
        }, [e_, ed, f, e1, p, m, g, A, I, S, eY, ec, y, tr, te, ti]),
        to = r.useMemo(
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
        tl = r.useRef(null);
    r.useEffect(() => {
        eA !== tl.current &&
            ((tl.current = eA),
            (0, L.zV)(ep.HAw.OAUTH2_AUTHORIZE_STEP_VIEWED, {
                step: eA,
                application_id: f,
                integration_type: eY,
                scopes: e1,
                permissions: e5.toString(),
            }));
    }, [f, eY, e5, e1, eA]),
        r.useEffect(() => {
            null == eA &&
                (!eK || null != e$) &&
                eh &&
                (null == ec || eG
                    ? null != ed
                        ? (eW(ed.integration_type ?? d.b.GUILD_INSTALL), eI("AUTHORIZE_SCOPES"))
                        : to.length > 1
                          ? eI("SELECT_INSTALL_TYPE")
                          : (1 === to.length ? eW(to[0]) : null != F ? eW(F) : eW(d.b.GUILD_INSTALL),
                            eI("AUTHORIZE_SCOPES"))
                    : eI("CONNECT_ACCOUNT"));
        }, [ed, to, e$, eK, ec, eG, F, eA, eh]),
        r.useEffect(() => {
            "CONNECT_ACCOUNT" === eA && eG && (eW(F ?? d.b.USER_INSTALL), eI("AUTHORIZE_SCOPES"));
        }, [eA, eG, F]),
        r.useEffect(() => {
            if (null == eY || null != ef || null != eT) return;
            eY === d.b.USER_INSTALL && (eD(null), ew(null));
            let e = e1.filter((e) => !ei.gX.includes(e));
            0 === e1.length
                ? eS(Error("No scopes were provided."))
                : e.length > 0
                  ? eS(Error(`Invalid scope: ${e[0]}`))
                  : (0, en.F7)(e5)
                    ? eS(Error("Invalid permission(s) provided."))
                    : ta();
        }, [te, ta, e1, e5, eY, ef, eT]);
    let tu = r.useCallback((e) => {
            e && eR(!0);
        }, []),
        tc = (0, l.K)(tu);
    if (eT instanceof Error)
        return el
            ? { body: (0, i.jsx)(eZ.gz, { message: eT.message }) }
            : eu
              ? {
                    label: eE.intl.string(eE.t.j2d6Km),
                    header: (0, i.jsx)(T.E, {
                        variant: "text-lg/bold",
                        color: "text-strong",
                        children: eE.intl.string(eE.t.j2d6Km),
                    }),
                    body: (0, i.jsx)(T.E, { variant: "text-md/normal", color: "text-default", children: eT.message }),
                    actions: [{ onClick: ea, text: eE.intl.string(eE.t.cpT0Cq) }],
                    noPadding: !0,
                }
              : {
                    title: eE.intl.string(eE.t.j2d6Km),
                    subtitle: eT.message,
                    actions: [{ onClick: ea, text: eE.intl.string(eE.t.cpT0Cq) }],
                };
    let td = null != ec ? (D.A.get(ec)?.name ?? "") : "",
        t_ = !1,
        th = !1,
        tf = !0,
        tp = !0,
        tE = !0,
        tm = !1;
    switch (eA) {
        case null:
            return { label: eE.intl.string(eE.t.ZTNur7), body: (0, i.jsx)(e4, {}) };
        case "CONNECT_ACCOUNT":
            (t = (0, i.jsx)(e3, { clientId: f, platformType: ec, platformName: td })),
                (tf = !1),
                (tp = !1),
                (tE = !1),
                (t_ = !0);
            break;
        case "SELECT_INSTALL_TYPE":
            if (null == e$) return { label: eE.intl.string(eE.t.ZTNur7), body: (0, i.jsx)(e4, {}) };
            (t = (0, i.jsx)(e0, {
                application: e$,
                onSelect: (e) => {
                    eW(e), em(null), eI("AUTHORIZE_SCOPES");
                },
            })),
                (tf = !1),
                (tp = !1),
                (tE = !1),
                (tm = !0);
            break;
        case "AUTHORIZE_SCOPES":
            if (null == ef || null == eF || null == eY)
                return { label: eE.intl.string(eE.t.ZTNur7), body: (0, i.jsx)(e4, {}) };
            let tg = null == eT || eT instanceof Error ? {} : eT,
                tA = eO?.sort((e, t) => e.name.toLowerCase().localeCompare(t.name.toLowerCase())),
                tI = eY === d.b.GUILD_INSTALL && e1.includes(_.F.WEBHOOK_INCOMING),
                tT =
                    tI ||
                    (eY === d.b.GUILD_INSTALL && (e1.includes(_.F.BOT) || e1.includes(_.F.APPLICATIONS_COMMANDS)));
            (t = (0, i.jsxs)(i.Fragment, {
                children: [
                    null != ek &&
                        eG &&
                        (0, i.jsx)(e6, {
                            platformType: ek.type,
                            platformName: td,
                            connectedAccount: ek,
                            applicationName: ef.application.name,
                        }),
                    (0, i.jsx)(ev, { application: ef.application, accountScopes: e2 }),
                    (0, i.jsx)(eM, {
                        application: ef.application,
                        accountScopes: e2,
                        requestedScopes: e1,
                        integrationType: eY,
                        errors: tg,
                        isTrustedName: H || ej,
                    }),
                    (0, i.jsx)("div", { className: eJ.sL, ref: tc }),
                    tT
                        ? (0, i.jsx)(eV, {
                              error: (tg[_.F.BOT] ?? tg[_.F.APPLICATIONS_COMMANDS] ?? [])[0],
                              selectedGuildId: eb,
                              onGuildChange: eD,
                              guilds: tA ?? [],
                              disabled: "" !== eb && null != eb && !0 === V,
                          })
                        : null,
                    tI
                        ? (0, i.jsx)(eX, {
                              error: (tg[_.F.WEBHOOK_INCOMING] ?? [])[0],
                              selectedChannelId: eL,
                              selectedGuildId: eb,
                              onChannelChange: ew,
                          })
                        : null,
                ],
            })),
                e1.includes(_.F.BOT) && !h.aI(e5, Q.x3) && (s = "AUTHORIZE_BOT_PERMISSIONS"),
                to.length > 1 && (n = "SELECT_INSTALL_TYPE"),
                (th = (tT && null == eH) || (tI && null == eL)),
                (t_ = !0);
            break;
        case "AUTHORIZE_BOT_PERMISSIONS":
            if (null == ef) return { label: eE.intl.string(eE.t.ZTNur7), body: (0, i.jsx)(e4, {}) };
            (t = (0, i.jsx)(eU, {
                application: ef.application,
                permissions: e5,
                deniedPermissions: eP,
                onPermissionsChange: (e, t) => {
                    ex((n) => (e ? h.TF(n, t) : h.WQ(n, t)));
                },
                guild: eH,
            })),
                (n = "AUTHORIZE_SCOPES"),
                (t_ = !0);
    }
    let tS = [];
    if (tf && null != ef) {
        let e = ef?.application.approximate_guild_count ?? ef?.bot?.approximate_guild_count;
        a = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(eg, {
                    application: ef.application,
                    scopes: e1,
                    disclosures: e8,
                    redirectUri: ef.redirect_uri ?? null,
                    approximateGuildCount: void 0 !== e ? e : null,
                    isEmbeddedFlow: W,
                    connectedAccount: ek,
                }),
                (0, i.jsx)("div", { className: eJ.sL, ref: tc }),
            ],
        });
    }
    if (
        (tp &&
            null != ef &&
            null != eF &&
            (c = (0, i.jsx)(ez, {
                user: eF,
                application: ef.application,
                bot: ef.bot,
                accountScopes: e2,
                showLogout: B || !1,
                location: e_,
                scopes: e1,
            })),
        tE &&
            (tS.push(
                null != n
                    ? { variant: "secondary", onClick: () => eI(n), text: eE.intl.string(eE.t["13/7kX"]) }
                    : { variant: "secondary", onClick: () => tr(!1), text: eE.intl.string(eE.t["ETE/oC"]) },
            ),
            "SELECT_INSTALL_TYPE" !== eA))
    ) {
        let e = "CONNECT_ACCOUNT" !== eA && !eN;
        tS.push(
            e
                ? { disabled: !0, loading: ey, text: eE.intl.string(eE.t.N22i9F), icon: N.M }
                : {
                      onClick: null != s ? () => eI(s) : () => tr(!0),
                      loading: ey,
                      disabled: ("CONNECT_ACCOUNT" !== eA && null == a) || th || ti,
                      text: th
                          ? eE.intl.string(eE.t.BwwiSM)
                          : null != s
                            ? eE.intl.string(eE.t["3PatSz"])
                            : eE.intl.string(eE.t["y+/PE9"]),
                  },
        );
    }
    return {
        label: "CONNECT_ACCOUNT" === eA ? eE.intl.string(eE.t.JGuDTr) : void 0,
        header: c,
        body: t,
        actions: tS,
        nextStep: s,
        appDetails: a,
        sendAuthorize: tr,
        hasContentBackground: t_,
        noPadding: tm,
        obscured: ti,
    };
}
function e7(e, t) {
    if (null == t.location || (null != e.callback && e.callback(t))) return;
    let { host: n, pathname: r, searchParams: s } = J.A.toURLSafe(t.location) ?? {},
        a = J.A.isDiscordHostname(n ?? null) || window.location.host === n;
    a && r === ep.BVt.OAUTH2_AUTHORIZED
        ? (0, m.openModal)((e) => (0, i.jsx)(eZ.dR, { guild: t.guild, application: t.application, ...e }))
        : a && r?.startsWith(ep.BVt.OAUTH2_ERROR)
          ? (0, m.openModal)((e) => {
                let t = s?.get("error_description") ?? s?.get("error") ?? eE.intl.string(eE.t.mqn873);
                return (
                    Array.isArray(t) && (t = t[0]),
                    (0, i.jsx)(eq.f, { ...e, children: (0, i.jsx)(eZ.gz, { message: t, onClose: e.onClose }) })
                );
            })
          : window.open(t.location, "_blank")?.focus();
}
function e8(e, t) {
    (0, H._9)() ? B.A.openCreateGuildModal({ onSuccess: (n) => e9({ ...e, guildId: n }, t) }) : e9(e, t);
}
function e9(e, t) {
    (0, m.openModal)((t) => (0, i.jsx)(e2, { ...t, ...e, callback: e7.bind(null, e) }), { onCloseCallback: t });
}
function te(e) {
    let { hostname: t = "", host: n, pathname: i, search: r } = J.A.toURLSafe(e) ?? {};
    return null != i &&
        null != r &&
        (J.A.isDiscordHostname(t) || n === window.location.host) &&
        (i.startsWith(`/api${ep.Rsh.OAUTH2_AUTHORIZE}`) || i.startsWith(ep.BVt.OAUTH2_AUTHORIZE))
        ? (0, ee._)(r)
        : null;
}
