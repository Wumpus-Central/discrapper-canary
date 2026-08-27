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
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(806163),
    o = n(172218),
    d = n(935399),
    c = n(607399),
    u = n(485845),
    _ = n(179771),
    E = n(136722),
    A = n(365199),
    h = n(815390),
    I = n(17928),
    f = n(192308),
    p = n(821609),
    T = n(462887),
    m = n(289873),
    g = n(834730),
    S = n(297264),
    N = n(885574),
    C = n(933832),
    O = n(708988),
    R = n(228366),
    L = n(830215),
    y = n(803306),
    D = n(736653),
    v = n(573648),
    b = n(95561),
    M = n(269815),
    P = n(627363),
    U = n(587895),
    w = n(224750),
    G = n(62447),
    x = n(854378),
    k = n(968309),
    F = n(268218),
    V = n(272613),
    B = n(736056),
    H = n(14509),
    j = n(976860),
    W = n(570962),
    Y = n(395671),
    K = n(889227),
    $ = n(280450),
    z = n(30370),
    Z = n(287809),
    q = n(486020),
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
    ea = n(376092),
    es = n(647053),
    el = n(671523),
    eo = n(998445),
    ed = n(11023),
    ec = n(173936),
    eu = n(194261),
    e_ = n(215026),
    eE = n(406810),
    eA = n(430392),
    eh = n(231483),
    eI = n(20015),
    ef = n(935208),
    ep = n(891969);
function eT(e) {
    let t,
        {
            application: n,
            scopes: r,
            redirectUri: a,
            approximateGuildCount: s,
            isEmbeddedFlow: l,
            disclosures: o,
            connectedAccount: d,
        } = e,
        c = new Date(ef.default.extractTimestamp(n.id)),
        u = (0, es.i4)(r),
        E = (0, eI.n)(n, et.gfo.EMBEDDED);
    if (null != a && !E && !l)
        try {
            let e = new URL(a);
            t = null != e.host && e.host.length > 0 ? e.origin : e.href;
        } catch (e) {
            t = null;
        }
    return (0, i.jsxs)("div", {
        className: ep.B_,
        children: [
            null != t
                ? (0, i.jsx)(em, { icon: ec.LinkIcon, text: en.intl.format(en.t["5k5OKD"], { origin: t }) })
                : null,
            (0, i.jsx)(em, {
                icon: eu.LockIcon,
                text: (function (e) {
                    let t = (0, G.t)(e);
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
            null != d ? (0, i.jsx)(em, { icon: e_.w, text: en.intl.string(en.t["8qui3M"]) }) : null,
            (0, i.jsx)(em, { icon: eE.ClockIcon, text: en.intl.formatToPlainString(en.t["+1bjc8"], { date: c }) }),
            r.includes(_.F.BOT) && null != s
                ? (0, i.jsx)(em, {
                      icon: eA.RobotIcon,
                      text: en.intl.formatToPlainString(en.t.UHGHSP, { guildCount: s }),
                  })
                : null,
            (0, i.jsx)(em, { icon: eh.ShieldIcon, text: u }),
            null != o
                ? o.map((e) => {
                      let t = (0, w.wI)(e),
                          n = (function (e) {
                              switch (e) {
                                  case w.yW.IP_LOCATION:
                                      return eo.GlobeEarthIcon;
                                  case w.yW.DISPLAYS_ADVERTISEMENTS:
                                      return ed.J;
                                  default:
                                      return null;
                              }
                          })(e);
                      return null != n && null != t ? (0, i.jsx)(em, { icon: n, text: t }, e) : null;
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
            (0, i.jsx)(g.E, { variant: "text-xs/normal", className: ep.z9, children: n }),
        ],
    });
}
var eg = n(214947),
    eS = n(845798),
    eN = n(687966),
    eC = n(625903),
    eO = n(975571),
    eR = n(441945);
function eL(e) {
    let t,
        { application: n, accountScopes: r } = e,
        a = [],
        s = (0, G.A)(n);
    return (r.includes(_.F.SDK_SOCIAL_LAYER)
        ? ((t = s
              ? en.intl.format(en.t.GxjwZM, {
                    applicationName: n.name,
                    learnMoreURL: eO.A.getArticleURL(et.MVz.SOCIAL_LAYER_CONNECTIONS),
                })
              : en.intl.format(en.t.DfBeUq, { learnMoreURL: eO.A.getArticleURL(et.MVz.SOCIAL_LAYER_CONNECTIONS) })),
          a.push(
              {
                  icon: eg.$,
                  text: s
                      ? en.intl.formatToPlainString(en.t.z9peav, { maxFriends: et.$4X })
                      : en.intl.formatToPlainString(en.t.WNKzo9, { maxFriends: et.$4X }),
              },
              { icon: eS.S, text: s ? en.intl.string(en.t.daY6xj) : en.intl.string(en.t.j7peBh) },
              {
                  icon: eN.GameControllerIcon,
                  text: s ? en.intl.string(en.t["/bdaNN"]) : en.intl.string(en.t["feD3+i"]),
              },
              { icon: eC.SettingsIcon, text: s ? en.intl.string(en.t.mSqazC) : en.intl.string(en.t.YFFVM1) },
          ))
        : r.includes(_.F.SDK_SOCIAL_LAYER_PRESENCE) &&
          ((t = s
              ? en.intl.format(en.t.GxjwZM, {
                    applicationName: n.name,
                    learnMoreURL: eO.A.getArticleURL(et.MVz.SOCIAL_LAYER_CONNECTIONS),
                })
              : en.intl.format(en.t.DfBeUq, { learnMoreURL: eO.A.getArticleURL(et.MVz.SOCIAL_LAYER_CONNECTIONS) })),
          a.push(
              {
                  icon: eg.$,
                  text: s
                      ? en.intl.formatToPlainString(en.t.z9peav, { maxFriends: et.$4X })
                      : en.intl.formatToPlainString(en.t.WNKzo9, { maxFriends: et.$4X }),
              },
              {
                  icon: eN.GameControllerIcon,
                  text: s ? en.intl.string(en.t["/bdaNN"]) : en.intl.string(en.t["feD3+i"]),
              },
              { icon: eC.SettingsIcon, text: s ? en.intl.string(en.t.mSqazC) : en.intl.string(en.t.YFFVM1) },
          )),
    0 === a.length)
        ? null
        : (0, i.jsxs)("div", {
              className: eR.b9,
              children: [
                  null != t ? (0, i.jsx)(S.D, { variant: "heading-sm/normal", className: eR.a9, children: t }) : null,
                  a.map((e, t) => {
                      let { icon: n, text: r } = e;
                      return (0, i.jsx)(ey, { icon: n, text: r }, t);
                  }),
              ],
          });
}
function ey(e) {
    let { icon: t, text: n } = e;
    return (0, i.jsxs)("div", {
        className: eR.f_,
        children: [
            (0, i.jsx)(t, { className: eR.u7, color: "currentColor" }),
            (0, i.jsx)(g.E, { variant: "text-md/normal", className: eR.u0, children: n }),
        ],
    });
}
var eD = n(285796),
    ev = n(628284),
    eb = n(444927),
    eM = n(698403);
function eP(e) {
    let { text: t, error: n, isFake: r } = e,
        a = !0 === r ? en.intl.string(en.t.OX8EMU) : en.intl.string(en.t["0lpCFG"]),
        l = `${a}: ${t}${null != n ? `. ${n}` : ""}`;
    return (0, i.jsxs)("div", {
        className: eM.z8,
        role: "group",
        "aria-label": l,
        children: [
            !0 === r
                ? (0, i.jsx)(eD.a, {
                      size: "md",
                      color: "currentColor",
                      className: s()(eM.Kk, eM.RC),
                      "aria-hidden": !0,
                  })
                : (0, i.jsx)(ev.y, {
                      size: "md",
                      color: "currentColor",
                      className: s()(eM.Kk, eM.sc),
                      "aria-hidden": !0,
                  }),
            (0, i.jsxs)("div", {
                className: eM.rv,
                "aria-hidden": !0,
                children: [
                    (0, i.jsx)(g.E, {
                        variant: "text-md/normal",
                        color: !0 === r ? "text-muted" : void 0,
                        children: t,
                    }),
                    null != n
                        ? (0, i.jsx)(g.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: n })
                        : null,
                ],
            }),
        ],
    });
}
function eU(e) {
    let {
            application: t,
            accountScopes: n,
            requestedScopes: r,
            integrationType: a,
            errors: l,
            isTrustedName: o = !1,
            noDivider: d = !1,
        } = e,
        c = (0, eb.A)(() => es.O_[Math.floor(Math.random() * es.O_.length)]);
    if (0 === n.length) return null;
    let E = c(),
        A = o ? en.t.PZpY9c : en.t["1Hz+Sl"],
        h = a === u.b.USER_INSTALL && r.includes(_.F.APPLICATIONS_COMMANDS);
    return (0, i.jsxs)("div", {
        className: s()(eM.Wu, d ? eM.bc : void 0),
        children: [
            (0, i.jsx)(S.D, {
                variant: "heading-sm/normal",
                className: eM.a9,
                children: en.intl.format(A, { application: t?.name ?? "" }),
            }),
            n
                .map((e) =>
                    (0, es.rY)(e, n).map((t, n) =>
                        (0, i.jsx)(eP, { text: t, error: 0 === n ? l?.[e]?.[0] : void 0 }, `${e}-${n}`),
                    ),
                )
                .flat(),
            h && (0, i.jsx)(eP, { text: en.intl.string(en.t.Ls2XRq) }),
            (0, i.jsx)(eP, { text: E, isFake: !0 }),
        ],
    });
}
var ew = n(150934),
    eG = n(789645),
    ex = n(526342);
function ek(e) {
    let { application: t, permissions: n, deniedPermissions: a, onPermissionsChange: s, guild: l } = e,
        o = r.useMemo(() => E.B8(l.permissions), [l.permissions]);
    r.useEffect(() => {
        s(!1, E.pb(n, o));
    }, [o, s, n]);
    let d = ea.Q.filter((e) => E.zy(n, e)),
        c = d
            .filter((e) => !E.zy(o, e))
            .map((e) => {
                let t = (0, ea.hx)(e),
                    n = !E.zy(a, e);
                return (0, i.jsx)(
                    "li",
                    {
                        className: ex.EK,
                        children: (0, i.jsx)(ew.S, { checked: n, onChange: (t) => s(t, e), label: t }),
                    },
                    String(e),
                );
            }),
        u = d
            .filter((e) => E.zy(o, e))
            .map((e) => {
                let t = (0, ea.hx)(e);
                return (0, i.jsxs)(
                    "li",
                    {
                        className: ex.EK,
                        children: [
                            (0, i.jsx)("div", {
                                className: ex.nW,
                                children: (0, i.jsx)(eG.P, { size: "md", color: "currentColor", className: ex.Kk }),
                            }),
                            (0, i.jsx)(g.E, { variant: "text-md/normal", children: t }),
                        ],
                    },
                    String(e),
                );
            });
    return (0, i.jsxs)("div", {
        className: ex.AS,
        children: [
            c.length > 0
                ? (0, i.jsxs)("div", {
                      children: [
                          (0, i.jsx)(g.E, {
                              variant: "text-sm/medium",
                              color: "text-default",
                              children: en.intl.format(en.t.sOaT2j, { applicationName: t.name, guildName: l.name }),
                          }),
                          (0, i.jsx)("ul", { className: ex.RH, children: c }),
                      ],
                  })
                : null,
            u.length > 0
                ? (0, i.jsxs)("div", {
                      children: [
                          (0, i.jsx)(g.E, {
                              variant: "text-sm/medium",
                              color: "text-default",
                              children: en.intl.format(en.t.fsOkF4, { applicationName: t.name }),
                          }),
                          (0, i.jsx)("ul", { className: ex.RH, children: u }),
                      ],
                  })
                : null,
        ],
    });
}
var eF = n(783878),
    eV = n(516513);
function eB(e) {
    let { error: t, selectedGuildId: n, onGuildChange: r, guilds: a, disabled: s = !1 } = e,
        l = a
            .filter((e) => E.zy(e.permissions, et.xBc.MANAGE_GUILD))
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
            options: l,
            onSelectionChange: r,
            disabled: s,
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
    ez = n(21200);
function eZ(e) {
    let { user: t, application: n, bot: a, accountScopes: s, showLogout: l, location: o, scopes: d } = e,
        c = (0, eK.i)(),
        u = q.Ay.getApplicationIconURL({ id: n.id, icon: n.icon }),
        _ = q.Ay.getUserAvatarURL(t),
        E = r.useMemo(
            () =>
                d.some((e) => (0, es.RM)(e))
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(g.E, {
                                  variant: "text-lg/normal",
                                  color: "text-default",
                                  children: en.intl.string(en.t.uT1CPa),
                              }),
                              (0, i.jsx)(S.D, { variant: "heading-xxl/bold", color: "text-strong", children: n.name }),
                          ],
                      })
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsxs)(g.E, {
                                  variant: "text-lg/bold",
                                  color: "text-strong",
                                  children: [
                                      n.name,
                                      null != a
                                          ? (0, i.jsx)(eY.A, {
                                                className: ez.AO,
                                                verified:
                                                    null != a.public_flags &&
                                                    (0, eH.Lt)(a.public_flags, et.nhx.VERIFIED_BOT),
                                            })
                                          : null,
                                  ],
                              }),
                              s.length > 0
                                  ? (0, i.jsx)(g.E, {
                                        variant: "text-md/normal",
                                        color: "text-default",
                                        children: en.intl.string(en.t.jFbDnJ),
                                    })
                                  : (0, i.jsx)(g.E, {
                                        variant: "text-md/normal",
                                        color: "text-default",
                                        children: en.intl.string(en.t["X+Fdpo"]),
                                    }),
                          ],
                      }),
            [s.length, n, a, d],
        );
    return (0, i.jsxs)("header", {
        id: c,
        className: ez.wx,
        children: [
            (0, i.jsxs)("div", {
                className: ez.Y,
                children: [
                    (0, i.jsx)(eW.eu, { className: ez.my, src: u, size: e$._3.SIZE_80, "aria-label": n.name }),
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
            E,
            l
                ? (0, i.jsx)("div", {
                      className: ez.Ny,
                      children: (0, i.jsxs)(g.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: [
                              en.intl.format(en.t.qRvpYU, {
                                  userHook: () =>
                                      (0, i.jsxs)(
                                          g.E,
                                          {
                                              className: ez.ZD,
                                              variant: "text-sm/normal",
                                              children: [
                                                  t.username,
                                                  !t.hasUniqueUsername() &&
                                                      (0, i.jsx)(g.E, {
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
                                  onClick: () => (0, er.Vh)(o, "oauth2_logout"),
                                  children: en.intl.string(en.t["yV/hjC"]),
                              }),
                          ],
                      }),
                  })
                : null,
        ],
    });
}
var eq = n(321987),
    eX = n(595244);
function eQ(e) {
    let { selectedGuildId: t, selectedChannelId: n, onChannelChange: a, error: s } = e,
        [l, o] = r.useState(null),
        d = r.useRef(!1);
    if (
        (r.useEffect(() => {
            async function e(e) {
                let n = await (0, er.$Q)(e);
                t === e &&
                    (n.sort((e, t) => e.name.localeCompare(t.name)), o({ guildId: e, channels: n }), (d.current = !0));
            }
            o(null), null == t ? a(null) : e(t);
        }, [a, t]),
        r.useEffect(() => {
            !d.current || (null == l ? null != n && a(null) : l.channels.some((e) => e.id === n) || a(null));
        }, [l, a, n, t]),
        null == t)
    )
        return null;
    let c =
        null == l || l.guildId !== t ? [] : (l?.channels ?? []).map((e) => ({ id: e.id, value: e.id, label: e.name }));
    return (0, i.jsx)("div", {
        className: eV.g,
        children: (0, i.jsx)(eF.Z, {
            label: en.intl.string(en.t["8qKd+J"]),
            helperText: en.intl.string(en.t.kQXMfN),
            selectionMode: "single",
            maxOptionsVisible: 5,
            errorMessage: s,
            onSelectionChange: a,
            placeholder: en.intl.string(en.t["Re/64R"]),
            options: c,
            value: n ?? void 0,
        }),
    });
}
var eJ = n(613057),
    e0 = n(292502);
let e1 = (0, F.Fe)({
    createPromise: () =>
        Promise.all([
            n.e("665115"),
            n.e("606633"),
            n.e("334324"),
            n.e("552653"),
            n.e("85427"),
            n.e("51872"),
            n.e("560570"),
            n.e("591114"),
            n.e("691398"),
            n.e("490978"),
            n.e("266201"),
            n.e("752704"),
            n.e("56606"),
            n.e("611585"),
            n.e("234017"),
            n.e("629972"),
            n.e("40791"),
            n.e("358404"),
            n.e("245758"),
            n.e("561672"),
            n.e("977306"),
            n.e("896162"),
            n.e("847980"),
            n.e("957251"),
            n.e("677624"),
            n.e("933373"),
            n.e("582118"),
            n.e("201074"),
            n.e("879641"),
            n.e("325522"),
            n.e("401317"),
            n.e("862735"),
            n.e("311580"),
            n.e("174554"),
            n.e("116815"),
            n.e("82389"),
            n.e("812720"),
            n.e("891089"),
            n.e("63092"),
            n.e("392028"),
            n.e("124054"),
            n.e("419656"),
            n.e("67702"),
            n.e("702154"),
            n.e("291329"),
            n.e("35328"),
            n.e("296956"),
            n.e("334168"),
            n.e("582012"),
            n.e("781821"),
            n.e("531198"),
            n.e("650387"),
            n.e("195719"),
            n.e("291847"),
            n.e("678906"),
            n.e("186856"),
            n.e("529787"),
            n.e("358931"),
            n.e("880150"),
            n.e("684031"),
            n.e("962953"),
            n.e("434168"),
            n.e("59565"),
            n.e("238758"),
            n.e("340363"),
            n.e("459086"),
            n.e("720210"),
            n.e("61531"),
            n.e("786749"),
            n.e("319714"),
            n.e("189281"),
            n.e("205035"),
            n.e("911680"),
            n.e("98857"),
            n.e("495628"),
            n.e("390430"),
            n.e("326605"),
            n.e("644289"),
            n.e("460915"),
            n.e("675582"),
            n.e("856943"),
            n.e("192388"),
            n.e("165994"),
            n.e("652091"),
            n.e("996907"),
            n.e("960175"),
            n.e("377989"),
            n.e("797845"),
            n.e("491899"),
            n.e("867721"),
            n.e("567999"),
            n.e("397244"),
            n.e("441674"),
            n.e("377265"),
            n.e("400088"),
            n.e("64769"),
            n.e("992956"),
            n.e("7452"),
            n.e("60002"),
            n.e("189423"),
            n.e("424199"),
            n.e("342551"),
            n.e("964367"),
            n.e("819273"),
            n.e("645499"),
            n.e("454048"),
            n.e("397270"),
            n.e("188941"),
            n.e("300699"),
            n.e("599666"),
            n.e("349619"),
            n.e("543039"),
            n.e("253729"),
            n.e("161379"),
            n.e("264236"),
            n.e("740428"),
            n.e("234236"),
            n.e("398125"),
            n.e("221825"),
            n.e("721690"),
            n.e("593600"),
            n.e("276640"),
            n.e("827708"),
            n.e("28154"),
            n.e("948804"),
            n.e("431011"),
            n.e("295366"),
            n.e("901555"),
            n.e("844695"),
            n.e("73874"),
            n.e("988077"),
            n.e("482815"),
            n.e("170653"),
            n.e("832817"),
            n.e("561216"),
            n.e("50015"),
            n.e("60898"),
            n.e("611523"),
            n.e("89892"),
            n.e("829177"),
            n.e("199999"),
            n.e("232551"),
            n.e("631644"),
            n.e("904723"),
            n.e("936320"),
            n.e("466322"),
            n.e("190889"),
            n.e("27773"),
            n.e("313681"),
            n.e("418943"),
            n.e("784103"),
            n.e("958428"),
            n.e("317225"),
            n.e("444376"),
            n.e("896232"),
            n.e("809915"),
            n.e("176358"),
            n.e("53374"),
            n.e("710638"),
            n.e("570474"),
            n.e("781300"),
            n.e("631825"),
            n.e("770697"),
            n.e("696443"),
            n.e("318546"),
            n.e("620320"),
            n.e("916209"),
            n.e("123216"),
            n.e("799657"),
            n.e("252574"),
            n.e("183776"),
            n.e("747017"),
            n.e("831145"),
            n.e("894747"),
            n.e("146248"),
            n.e("790244"),
            n.e("126780"),
            n.e("864931"),
            n.e("417286"),
            n.e("499941"),
            n.e("761935"),
            n.e("592731"),
            n.e("858821"),
            n.e("346102"),
            n.e("34472"),
            n.e("511527"),
            n.e("515168"),
            n.e("147786"),
            n.e("763070"),
            n.e("564615"),
            n.e("193158"),
            n.e("955184"),
            n.e("502018"),
            n.e("757598"),
            n.e("787079"),
            n.e("601469"),
            n.e("61129"),
            n.e("115754"),
            n.e("314805"),
            n.e("851130"),
            n.e("173547"),
            n.e("621624"),
            n.e("599141"),
            n.e("499593"),
            n.e("962075"),
            n.e("756210"),
            n.e("274380"),
            n.e("434691"),
            n.e("225990"),
            n.e("539620"),
            n.e("764615"),
            n.e("636126"),
            n.e("133902"),
            n.e("562168"),
            n.e("463095"),
            n.e("831219"),
            n.e("437370"),
            n.e("222380"),
            n.e("632744"),
            n.e("165595"),
            n.e("858514"),
            n.e("471955"),
            n.e("344265"),
            n.e("588940"),
            n.e("371133"),
            n.e("776750"),
            n.e("784041"),
            n.e("428296"),
            n.e("869546"),
            n.e("455924"),
            n.e("88160"),
            n.e("59413"),
            n.e("513223"),
            n.e("87306"),
            n.e("219795"),
            n.e("444795"),
            n.e("637721"),
            n.e("356948"),
            n.e("123353"),
            n.e("836545"),
            n.e("231578"),
            n.e("177104"),
            n.e("678050"),
            n.e("780262"),
            n.e("556385"),
            n.e("291220"),
            n.e("58405"),
        ]).then(n.bind(n, 991054)),
    webpackId: 991054,
});
function e2() {
    let e = (0, l.zy)(),
        t = r.useMemo(() => (0, J._)(e.search), [e.search]);
    (0, M.A)();
    let a = !e.search.includes("response_type"),
        [s, o] = r.useState(!1),
        d = r.useRef(!1),
        [u, _] = r.useState(null),
        E = !c.Fr && !s && (a || !$.default.isAuthenticated());
    if (
        (r.useEffect(() => {
            if (c.Ct && a) {
                let t = new URL("discord://action/oauth2/authorize");
                (t.search = e.search), window.open(t.toString(), "_self");
            } else
                c.Fr ||
                    (!a && $.default.isAuthenticated()) ||
                    d.current ||
                    ((d.current = !0),
                    Promise.resolve()
                        .then(n.bind(n, 129014))
                        .then((t) => {
                            let { default: n } = t;
                            if (a)
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
        }, [e.search, a]),
        E && !1 !== u)
    ) {
        let e;
        return (
            (e =
                !0 === u
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(x.hE, { children: en.intl.string(en.t.csrAMJ) }),
                              (0, i.jsx)(x.tK, {
                                  children: a ? en.intl.string(en.t["m1+IBn"]) : en.intl.string(en.t.kRzrSO),
                              }),
                              (0, i.jsx)(p.$, {
                                  onClick: () => o(!0),
                                  variant: "primary",
                                  text: en.intl.string(en.t.fIv16B),
                              }),
                          ],
                      })
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(x.hE, { children: en.intl.string(en.t["Z+hCVU"]) }),
                              (0, i.jsx)(m.y, {}),
                          ],
                      })),
            (0, i.jsx)(eq.$, { removeChildWrapper: !0, children: (0, i.jsx)("div", { className: e0.ah, children: e }) })
        );
    }
    return (0, i.jsx)(eq.$, {
        removeChildWrapper: !0,
        children: (0, i.jsx)(e3, {
            transitionState: h.i.ENTERED,
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
            header: a,
            body: l,
            actions: o,
            nextStep: d,
            appDetails: c,
            hasContentBackground: u,
            noPadding: _,
            modalSize: E,
            obscured: A,
        } = e7({ ...e }),
        h =
            null != a || null != l || null != c
                ? (0, i.jsxs)("div", {
                      className: e0.Gq,
                      children: [
                          a,
                          (0, i.jsx)("div", {
                              className: e0.FG,
                              children: (0, i.jsxs)("div", {
                                  className: s()(e0.Qs, u ? e0.cw : null, _ ? e0.pN : null),
                                  children: [l, null == d ? c : null],
                              }),
                          }),
                      ],
                  })
                : null;
    return (0, i.jsx)(eq.f, {
        ...e,
        onClose: () => Promise.resolve(e.onClose?.()),
        size: E,
        actions: o,
        title: n,
        subtitle: r,
        "aria-label": t,
        children: (0, i.jsx)(W.A, { className: e0.dx, obscured: !0 === A, children: h }),
    });
}
function e5(e) {
    let { clientId: t, platformType: n, platformName: a } = e,
        s = (0, I.bG)([U.A], () => U.A.getApplication(t), [t]),
        l = (0, I.bG)([$.default, Z.default], () => (null != $.default.getId() ? Z.default.getCurrentUser() : null)),
        o = (0, D.Ay)(),
        d = v.A.get(n),
        c = null != d ? ((0, T.q)(o) ? d.icon.lightSVG : d.icon.darkSVG) : null,
        u = null != s ? q.Ay.getApplicationIconURL({ id: s.id, icon: s.icon }) : null,
        _ = null != l ? q.Ay.getUserAvatarURL(l) : null,
        E = s?.name ?? "";
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
                                null != u
                                    ? (0, i.jsx)("img", { src: u, alt: E, className: e0.gO })
                                    : (0, i.jsx)("div", { className: e0.gO }),
                                (0, i.jsx)(A.MoreHorizontalIcon, { size: "md", color: "currentColor" }),
                                null != _ && (0, i.jsx)("img", { src: _, alt: "", className: e0.eh }),
                            ],
                        }),
                        (0, i.jsx)(g.E, { variant: "text-lg/normal", children: en.intl.string(en.t.uT1CPa) }),
                        (0, i.jsx)(S.D, { variant: "heading-xl/semibold", children: E }),
                    ],
                }),
                (0, i.jsx)(g.E, {
                    variant: "text-sm/normal",
                    children: en.intl.format(en.t["aJRE/Q"], { applicationName: E, platformName: a }),
                }),
                (0, i.jsxs)("div", {
                    className: e0.eD,
                    children: [
                        null != c && (0, i.jsx)("img", { src: c, alt: "", className: e0.sw }),
                        (0, i.jsx)(g.E, { variant: "text-md/medium", className: e0.PP, children: a }),
                        (0, i.jsx)(p.$, {
                            variant: "primary",
                            size: "sm",
                            onClick: function () {
                                (0, k.A)({ platformType: n, location: "OAuth2 Connect Account Step" });
                            },
                            text: en.intl.string(en.t.S0W8Z5),
                        }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: e0.sT,
                    children: [
                        (0, i.jsx)(N.CircleInformationIcon, { size: "sm", color: "currentColor", className: e0.Vi }),
                        (0, i.jsx)(g.E, {
                            variant: "text-sm/normal",
                            children: en.intl.format(en.t["8psEFX"], { platformName: a, applicationName: E }),
                        }),
                    ],
                }),
            ],
        })
    );
}
function e4(e) {
    let { platformType: t, platformName: n, connectedAccount: r, applicationName: a } = e,
        s = (0, D.Ay)(),
        l = v.A.get(t),
        o = null != l ? ((0, T.q)(s) ? l.icon.lightSVG : l.icon.darkSVG) : null;
    return (0, i.jsxs)("div", {
        className: e0.E4,
        children: [
            (0, i.jsx)(g.E, {
                variant: "text-sm/normal",
                children: en.intl.format(en.t["+oaRw3"], { platformName: n }),
            }),
            (0, i.jsxs)("div", {
                className: e0.eD,
                children: [
                    null != o && (0, i.jsx)("img", { src: o, alt: "", className: e0.sw }),
                    (0, i.jsxs)("div", {
                        className: e0.mG,
                        children: [
                            (0, i.jsx)(g.E, { variant: "text-md/medium", children: r.name }),
                            (0, i.jsx)(g.E, {
                                variant: "text-xs/normal",
                                children: en.intl.format(en.t.Dkd7sE, { platformName: n, connectedAccountId: r.id }),
                            }),
                        ],
                    }),
                    (0, i.jsx)(C.CheckmarkLargeIcon, { size: "sm", color: "status-positive" }),
                ],
            }),
            (0, i.jsx)(g.E, {
                variant: "text-sm/normal",
                children: en.intl.format(en.t.pyRNXJ, { applicationName: a }),
            }),
            (0, i.jsx)("div", { className: e0.zd }),
        ],
    });
}
function e6() {
    return (0, i.jsx)("div", { className: e0.g4, children: (0, i.jsx)(m.y, { className: e0.u1 }) });
}
function e7(e) {
    let t,
        n,
        a,
        s,
        c,
        {
            clientId: A,
            responseType: h,
            redirectUri: f,
            codeChallenge: p,
            codeChallengeMethod: T,
            state: m,
            nonce: S,
            prompt: N,
            authorizations: C,
            scopes: D,
            permissions: M,
            guildId: U,
            channelId: x,
            integrationType: k,
            disableGuildSelect: F = !1,
            showLogout: V = !1,
            isTrustedName: H = !1,
            isEmbeddedFlow: W = !1,
            callback: q,
            callbackWithoutPost: ee,
            onClose: eo,
            disclosures: ed,
            isExternalStandaloneOAuthPage: ec = !1,
            isTwoWayLinkDiscordConsent: eu = !1,
            connectedAccountProvider: e_,
        } = e,
        eE = null != k ? C?.get(k) : void 0,
        eA = (0, l.zy)(),
        eh = (0, I.bG)([B.A], () => B.A.hasLoadedExperiments);
    r.useEffect(() => {
        $.default.isAuthenticated() && !eh && L.A.getExperiments();
    }, [eh]);
    let [eI, ef] = r.useState(null),
        [ep, em] = r.useState(null),
        [eg, eS] = r.useState(null),
        [eN, eC] = r.useState(!1),
        [eO, eR] = r.useState(!1),
        ey = eI?.guilds,
        [eD, ev] = r.useState(U ?? null),
        [eb, eM] = r.useState(x ?? null),
        [eP, ew] = r.useState(X.x3),
        eG = (0, I.bG)([z.A], () => (null == e_ ? null : (z.A.getAccounts().find((e) => e.type === e_) ?? null)), [e_]),
        ex = null == e_ || null != eG,
        eF = r.useMemo(() => (eI?.user != null ? new K.A(eI.user) : null), [eI?.user]),
        eV = (0, I.bG)([Z.default], () => Z.default.getCurrentUser()?.nsfwAllowed),
        eH = (0, G.A)(eI?.application ?? null),
        ej = r.useMemo(() => ey?.find((e) => e.id === eD), [ey, eD]),
        [eW, eY] = r.useState(null),
        eK = r.useMemo(() => null == eE && null == k && (D?.length ?? 0) === 0 && null == f, [eE, D?.length, f, k]),
        [e$, ez] = r.useState(null);
    r.useEffect(() => {
        eK && P.Ay.fetchApplication(A).then((e) => ez(Y.Ay.createFromServer(e)));
    }, [A, eK]);
    let eq = r.useMemo(
            () => (null == eW ? null : e$?.integrationTypesConfig?.[eW]?.oauth2InstallParams),
            [e$?.integrationTypesConfig, eW],
        ),
        { requestedScopes: eJ, accountScopes: e2 } = r.useMemo(() => {
            let e = eK ? eq?.scopes : D,
                t = (0, J.e)(e ?? []),
                n = es.k$.filter((e) => t.includes(e));
            return { requestedScopes: t, accountScopes: n };
        }, [eq?.scopes, D, eK]),
        e3 = r.useMemo(() => (eK ? E.iu(eq?.permissions ?? 0) : M) ?? X.x3, [eq?.permissions, M, eK]),
        e7 = r.useRef(!1),
        [e8, e9] = r.useState(ed ?? []),
        [te, tt] = r.useState(null != ed && ed.length > 0);
    (0, d.Ay)(() => {
        let e = $.default.getAnalyticsToken();
        null != e
            ? R.h.dispatch({ type: "SET_ANALYTICS_TOKEN", analyticsToken: e, userId: $.default.getId() })
            : (0, y.fetchCurrentUser)({ withAnalyticsToken: !0 }).catch(et.tEg);
    }),
        r.useEffect(() => {
            if (!e7.current && null == ed) {
                if (!$.default.isAuthenticated()) return void (0, er.Vh)(eA, "oauth2_error_not_authenticated");
                e();
            }
            async function e() {
                e7.current = !0;
                try {
                    let { disclosures: e, allAcked: t } = await (0, w.vG)(A);
                    tt(!t), e9(e);
                } catch (n) {
                    let { status: e, body: t } = n;
                    if (401 === e) return void (0, er.Vh)(eA, "oauth2_error_failed_disclosures");
                    eS(Error(null != t.message ? t.message : `${Object.keys(t)[0]}: ${Object.values(t)[0]}`));
                } finally {
                    e7.current = !1;
                }
            }
        }, [A, eA, ed, e9, eS, tt, em]);
    let tn = ei(eI?.application.content_classification ?? e$?.contentClassification, eV),
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
                        clientId: A,
                        scopes: eJ,
                        responseType: h,
                        redirectUri: f,
                        codeChallenge: p,
                        codeChallengeMethod: T,
                        state: m,
                        nonce: S,
                        integrationType: eW,
                        connectedAccountProvider: e_,
                        permissions: E.TF(e3, eP),
                        guildId: eW === u.b.GUILD_INSTALL && null != eD ? eD : void 0,
                        channelId: eW === u.b.GUILD_INSTALL && null != eb ? eb : void 0,
                    });
                    if ((e && (await (0, w.Yx)(A, e8)), null != q))
                        q({ application: eI?.application, location: n.location, guild: ej, scopes: eJ, canceled: t }),
                            eo?.();
                    else if (null != n.location) {
                        let e = Q.A.toURLSafe(n.location)?.pathname;
                        Q.A.isDiscordUrl(n.location) && e === et.BVt.OAUTH2_AUTHORIZED
                            ? (0, j.pX)(et.BVt.OAUTH2_AUTHORIZED, {
                                  state: { application: eI?.application, guild: ej },
                              })
                            : (window.location = n.location);
                    } else eC(!1);
                } catch (t) {
                    let e = t.body;
                    e?.message != null && "" !== e.message ? eS(Error(e.message)) : eS(e),
                        em("AUTHORIZE_SCOPES"),
                        eC(!1);
                }
            },
            [ee, q, eI?.application, ej, eo, A, eJ, h, f, p, T, m, S, e3, eP, eD, eW, e_, eb, e8],
        ),
        tr = r.useRef(!1),
        ta = r.useCallback(async () => {
            if (!$.default.isAuthenticated()) return void (0, er.Vh)(eA, "oauth2_error_not_authenticated");
            if (!e7.current && !tr.current) {
                tr.current = !0;
                try {
                    var e;
                    let t =
                            null != eE
                                ? eE
                                : await (0, er.qY)({
                                      clientId: A,
                                      scopes: eJ,
                                      responseType: h,
                                      redirectUri: f,
                                      codeChallenge: p,
                                      codeChallengeMethod: T,
                                      state: m,
                                      nonce: S,
                                      integrationType: eW ?? void 0,
                                      connectedAccountProvider: e_,
                                  }),
                        n = ei(t.application.content_classification, eV);
                    ef(
                        ((e = t),
                        null == e.guilds
                            ? e
                            : { ...e, guilds: e.guilds.map((e) => ({ ...e, permissions: E.iu(e.permissions) })) }),
                    ),
                        N !== el.l.NONE || !t.authorized || te || n || ti(!0),
                        (0, b.zV)(et.HAw.OAUTH2_AUTHORIZE_VIEWED, { application_id: t.application.id });
                } catch (n) {
                    let { status: e, body: t } = n;
                    if (401 === e) return void (0, er.Vh)(eA, "oauth2_error_unauthorized");
                    eS(Error(null != t.message ? t.message : `${Object.keys(t)[0]}: ${Object.values(t)[0]}`));
                } finally {
                    tr.current = !1;
                }
            }
        }, [eA, eE, A, eJ, h, f, p, T, m, S, eW, e_, N, ti, te, eV]),
        ts = r.useMemo(
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
        ep !== tl.current &&
            ((tl.current = ep),
            (0, b.zV)(et.HAw.OAUTH2_AUTHORIZE_STEP_VIEWED, {
                step: ep,
                application_id: A,
                integration_type: eW,
                scopes: eJ,
                permissions: e3.toString(),
            }));
    }, [A, eW, e3, eJ, ep]),
        r.useEffect(() => {
            null == ep &&
                (!eK || null != e$) &&
                eh &&
                (null == e_ || ex
                    ? null != eE
                        ? (eY(eE.integration_type ?? u.b.GUILD_INSTALL), em("AUTHORIZE_SCOPES"))
                        : ts.length > 1
                          ? em("SELECT_INSTALL_TYPE")
                          : (1 === ts.length ? eY(ts[0]) : null != k ? eY(k) : eY(u.b.GUILD_INSTALL),
                            em("AUTHORIZE_SCOPES"))
                    : em("CONNECT_ACCOUNT"));
        }, [eE, ts, e$, eK, e_, ex, k, ep, eh]),
        r.useEffect(() => {
            "CONNECT_ACCOUNT" === ep && ex && (eY(k ?? u.b.USER_INSTALL), em("AUTHORIZE_SCOPES"));
        }, [ep, ex, k]),
        r.useEffect(() => {
            if (null == eW || null != eI || null != eg) return;
            eW === u.b.USER_INSTALL && (ev(null), eM(null));
            let e = eJ.filter((e) => !es.gX.includes(e));
            0 === eJ.length
                ? eS(Error("No scopes were provided."))
                : e.length > 0
                  ? eS(Error(`Invalid scope: ${e[0]}`))
                  : (0, ea.F7)(e3)
                    ? eS(Error("Invalid permission(s) provided."))
                    : ta();
        }, [te, ta, eJ, e3, eW, eI, eg]);
    let to = r.useCallback((e) => {
            e && eR(!0);
        }, []),
        td = (0, o.K)(to);
    if (eg instanceof Error)
        return ec
            ? { body: (0, i.jsx)(eX.gz, { message: eg.message }) }
            : eu
              ? {
                    label: en.intl.string(en.t.j2d6Km),
                    header: (0, i.jsx)(g.E, {
                        variant: "text-lg/bold",
                        color: "text-strong",
                        children: en.intl.string(en.t.j2d6Km),
                    }),
                    body: (0, i.jsx)(g.E, { variant: "text-md/normal", color: "text-default", children: eg.message }),
                    actions: [{ onClick: eo, text: en.intl.string(en.t.cpT0Cq) }],
                    noPadding: !0,
                }
              : {
                    title: en.intl.string(en.t.j2d6Km),
                    subtitle: eg.message,
                    actions: [{ onClick: eo, text: en.intl.string(en.t.cpT0Cq) }],
                };
    let tc = null != e_ ? (v.A.get(e_)?.name ?? "") : "",
        tu = !1,
        t_ = !1,
        tE = !0,
        tA = !0,
        th = !0,
        tI = !1;
    switch (ep) {
        case null:
            return { label: en.intl.string(en.t.ZTNur7), body: (0, i.jsx)(e6, {}) };
        case "CONNECT_ACCOUNT":
            (t = (0, i.jsx)(e5, { clientId: A, platformType: e_, platformName: tc })),
                (tE = !1),
                (tA = !1),
                (th = !1),
                (tu = !0);
            break;
        case "SELECT_INSTALL_TYPE":
            if (null == e$) return { label: en.intl.string(en.t.ZTNur7), body: (0, i.jsx)(e6, {}) };
            (t = (0, i.jsx)(e1, {
                application: e$,
                onSelect: function (e) {
                    eY(e), ef(null), em("AUTHORIZE_SCOPES");
                },
            })),
                (tE = !1),
                (tA = !1),
                (th = !1),
                (tI = !0);
            break;
        case "AUTHORIZE_SCOPES":
            if (null == eI || null == eF || null == eW)
                return { label: en.intl.string(en.t.ZTNur7), body: (0, i.jsx)(e6, {}) };
            let tf = null == eg || eg instanceof Error ? {} : eg,
                tp = ey?.sort((e, t) => e.name.toLowerCase().localeCompare(t.name.toLowerCase())),
                tT = eW === u.b.GUILD_INSTALL && eJ.includes(_.F.WEBHOOK_INCOMING),
                tm =
                    tT ||
                    (eW === u.b.GUILD_INSTALL && (eJ.includes(_.F.BOT) || eJ.includes(_.F.APPLICATIONS_COMMANDS)));
            (t = (0, i.jsxs)(i.Fragment, {
                children: [
                    null != eG &&
                        ex &&
                        (0, i.jsx)(e4, {
                            platformType: eG.type,
                            platformName: tc,
                            connectedAccount: eG,
                            applicationName: eI.application.name,
                        }),
                    (0, i.jsx)(eL, { application: eI.application, accountScopes: e2 }),
                    (0, i.jsx)(eU, {
                        application: eI.application,
                        accountScopes: e2,
                        requestedScopes: eJ,
                        integrationType: eW,
                        errors: tf,
                        isTrustedName: H || eH,
                    }),
                    (0, i.jsx)("div", { className: e0.sL, ref: td }),
                    tm
                        ? (0, i.jsx)(eB, {
                              error: (tf[_.F.BOT] ?? tf[_.F.APPLICATIONS_COMMANDS] ?? [])[0],
                              selectedGuildId: eD,
                              onGuildChange: ev,
                              guilds: tp ?? [],
                              disabled: "" !== eD && null != eD && !0 === F,
                          })
                        : null,
                    tT
                        ? (0, i.jsx)(eQ, {
                              error: (tf[_.F.WEBHOOK_INCOMING] ?? [])[0],
                              selectedChannelId: eb,
                              selectedGuildId: eD,
                              onChannelChange: eM,
                          })
                        : null,
                ],
            })),
                eJ.includes(_.F.BOT) && !E.aI(e3, X.x3) && (a = "AUTHORIZE_BOT_PERMISSIONS"),
                ts.length > 1 && (n = "SELECT_INSTALL_TYPE"),
                (t_ = (tm && null == ej) || (tT && null == eb)),
                (tu = !0);
            break;
        case "AUTHORIZE_BOT_PERMISSIONS":
            if (null == eI) return { label: en.intl.string(en.t.ZTNur7), body: (0, i.jsx)(e6, {}) };
            (t = (0, i.jsx)(ek, {
                application: eI.application,
                permissions: e3,
                deniedPermissions: eP,
                onPermissionsChange: function (e, t) {
                    ew((n) => (e ? E.TF(n, t) : E.WQ(n, t)));
                },
                guild: ej,
            })),
                (n = "AUTHORIZE_SCOPES"),
                (tu = !0);
    }
    let tg = [];
    if (tE && null != eI) {
        let e = eI?.application.approximate_guild_count ?? eI?.bot?.approximate_guild_count;
        s = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(eT, {
                    application: eI.application,
                    scopes: eJ,
                    disclosures: e8,
                    redirectUri: eI.redirect_uri ?? null,
                    approximateGuildCount: void 0 !== e ? e : null,
                    isEmbeddedFlow: W,
                    connectedAccount: eG,
                }),
                (0, i.jsx)("div", { className: e0.sL, ref: td }),
            ],
        });
    }
    if (
        (tA &&
            null != eI &&
            null != eF &&
            (c = (0, i.jsx)(eZ, {
                user: eF,
                application: eI.application,
                bot: eI.bot,
                accountScopes: e2,
                showLogout: V || !1,
                location: eA,
                scopes: eJ,
            })),
        th &&
            (tg.push(
                null != n
                    ? { variant: "secondary", onClick: () => em(n), text: en.intl.string(en.t["13/7kX"]) }
                    : { variant: "secondary", onClick: () => ti(!1, !0), text: en.intl.string(en.t["ETE/oC"]) },
            ),
            "SELECT_INSTALL_TYPE" !== ep))
    ) {
        let e = "CONNECT_ACCOUNT" !== ep && !eO;
        tg.push(
            e
                ? { disabled: !0, loading: eN, text: en.intl.string(en.t.N22i9F), icon: O.M }
                : {
                      onClick: null != a ? () => em(a) : () => ti(!0),
                      loading: eN,
                      disabled: ("CONNECT_ACCOUNT" !== ep && null == s) || t_ || tn,
                      text: t_
                          ? en.intl.string(en.t.BwwiSM)
                          : null != a
                            ? en.intl.string(en.t["3PatSz"])
                            : en.intl.string(en.t["y+/PE9"]),
                  },
        );
    }
    return {
        label: "CONNECT_ACCOUNT" === ep ? en.intl.string(en.t.JGuDTr) : void 0,
        header: c,
        body: t,
        actions: tg,
        nextStep: a,
        appDetails: s,
        sendAuthorize: ti,
        hasContentBackground: tu,
        noPadding: tI,
        obscured: tn,
    };
}
function e8(e, t) {
    if (null == t.location || (null != e.callback && e.callback(t))) return;
    let { host: n, pathname: r, searchParams: a } = Q.A.toURLSafe(t.location) ?? {},
        s = Q.A.isDiscordHostname(n ?? null) || window.location.host === n;
    if (s && r === et.BVt.OAUTH2_AUTHORIZED)
        (0, f.openModal)((e) => (0, i.jsx)(eX.dR, { guild: t.guild, application: t.application, ...e }));
    else if (s && r?.startsWith(et.BVt.OAUTH2_ERROR)) {
        if (!0 === t.canceled) return;
        (0, f.openModal)((e) => {
            let t = a?.get("error_description") ?? a?.get("error") ?? en.intl.string(en.t.mqn873);
            return (
                Array.isArray(t) && (t = t[0]),
                (0, i.jsx)(eq.f, { ...e, children: (0, i.jsx)(eX.gz, { message: t, onClose: e.onClose }) })
            );
        });
    } else window.open(t.location, "_blank")?.focus();
}
function e9(e, t) {
    (0, H._9)() ? V.A.openCreateGuildModal({ onSuccess: (n) => te({ ...e, guildId: n }, t) }) : te(e, t);
}
function te(e, t) {
    (0, f.openModal)((t) => (0, i.jsx)(e3, { ...t, ...e, callback: e8.bind(null, e) }), { onCloseCallback: t });
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
