(n.r(t),
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
    n(321073));
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
    g = n(289873),
    m = n(834730),
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
    B = n(272613),
    V = n(736056),
    H = n(14509),
    j = n(976860),
    W = n(570962),
    Y = n(395671),
    K = n(889227),
    $ = n(280450),
    z = n(30370),
    X = n(287809),
    q = n(486020),
    Z = n(488926),
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
                ? (0, i.jsx)(eg, { icon: ec.LinkIcon, text: en.intl.format(en.t["5k5OKD"], { origin: t }) })
                : null,
            (0, i.jsx)(eg, {
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
            null != d ? (0, i.jsx)(eg, { icon: e_.w, text: en.intl.string(en.t["8qui3M"]) }) : null,
            (0, i.jsx)(eg, { icon: eE.ClockIcon, text: en.intl.formatToPlainString(en.t["+1bjc8"], { date: c }) }),
            r.includes(_.F.BOT) && null != s
                ? (0, i.jsx)(eg, {
                      icon: eA.RobotIcon,
                      text: en.intl.formatToPlainString(en.t.UHGHSP, { guildCount: s }),
                  })
                : null,
            (0, i.jsx)(eg, { icon: eh.ShieldIcon, text: u }),
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
                      return null != n && null != t ? (0, i.jsx)(eg, { icon: n, text: t }, e) : null;
                  })
                : null,
        ],
    });
}
function eg(e) {
    let { icon: t, text: n } = e;
    return (0, i.jsxs)("div", {
        className: ep.f_,
        children: [
            (0, i.jsx)(t, { className: ep.u7, color: "currentColor" }),
            (0, i.jsx)(m.E, { variant: "text-xs/normal", className: ep.z9, children: n }),
        ],
    });
}
var em = n(214947),
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
                  icon: em.$,
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
                  icon: em.$,
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
            (0, i.jsx)(m.E, { variant: "text-md/normal", className: eR.u0, children: n }),
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
                    (0, i.jsx)(m.E, {
                        variant: "text-md/normal",
                        color: !0 === r ? "text-muted" : void 0,
                        children: t,
                    }),
                    null != n
                        ? (0, i.jsx)(m.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: n })
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
                            (0, i.jsx)(m.E, { variant: "text-md/normal", children: t }),
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
                          (0, i.jsx)(m.E, {
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
                          (0, i.jsx)(m.E, {
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
var eF = n(890497),
    eB = n(516513);
function eV(e) {
    let { error: t, selectedGuildId: n, onGuildChange: r, guilds: a, disabled: s = !1 } = e,
        l = a
            .filter((e) => E.zy(e.permissions, et.xBc.MANAGE_GUILD))
            .map((e) => ({ id: e.id, value: e.id, label: e.name }));
    return (0, i.jsx)("div", {
        className: eB.g,
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
function eX(e) {
    let { user: t, application: n, bot: a, accountScopes: s, showLogout: l, location: o, scopes: d } = e,
        c = (0, eK.i)(),
        u = q.Ay.getApplicationIconURL({ id: n.id, icon: n.icon }),
        _ = q.Ay.getUserAvatarURL(t),
        E = r.useMemo(
            () =>
                d.some((e) => (0, es.RM)(e))
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(m.E, {
                                  variant: "text-lg/normal",
                                  color: "text-default",
                                  children: en.intl.string(en.t.uT1CPa),
                              }),
                              (0, i.jsx)(S.D, { variant: "heading-xxl/bold", color: "text-strong", children: n.name }),
                          ],
                      })
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsxs)(m.E, {
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
                                  ? (0, i.jsx)(m.E, {
                                        variant: "text-md/normal",
                                        color: "text-default",
                                        children: en.intl.string(en.t.jFbDnJ),
                                    })
                                  : (0, i.jsx)(m.E, {
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
                      children: (0, i.jsxs)(m.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: [
                              en.intl.format(en.t.qRvpYU, {
                                  userHook: () =>
                                      (0, i.jsxs)(
                                          m.E,
                                          {
                                              className: ez.ZD,
                                              variant: "text-sm/normal",
                                              children: [
                                                  t.username,
                                                  !t.hasUniqueUsername() &&
                                                      (0, i.jsx)(m.E, {
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
    eZ = n(595244);
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
            (o(null), null == t ? a(null) : e(t));
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
        className: eB.g,
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
            n.e("747067"),
            n.e("571702"),
            n.e("334324"),
            n.e("552653"),
            n.e("85427"),
            n.e("51872"),
            n.e("560570"),
            n.e("431381"),
            n.e("691398"),
            n.e("371496"),
            n.e("266201"),
            n.e("752704"),
            n.e("56606"),
            n.e("611585"),
            n.e("227652"),
            n.e("234017"),
            n.e("629972"),
            n.e("40791"),
            n.e("358404"),
            n.e("245758"),
            n.e("561672"),
            n.e("977306"),
            n.e("722514"),
            n.e("847980"),
            n.e("957251"),
            n.e("677624"),
            n.e("933373"),
            n.e("398929"),
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
            n.e("196063"),
            n.e("392028"),
            n.e("124054"),
            n.e("441674"),
            n.e("419656"),
            n.e("67702"),
            n.e("702154"),
            n.e("915170"),
            n.e("35328"),
            n.e("296956"),
            n.e("334168"),
            n.e("582012"),
            n.e("781821"),
            n.e("570385"),
            n.e("650387"),
            n.e("195719"),
            n.e("318192"),
            n.e("678906"),
            n.e("415695"),
            n.e("529787"),
            n.e("358931"),
            n.e("880150"),
            n.e("168248"),
            n.e("490743"),
            n.e("533240"),
            n.e("962953"),
            n.e("434168"),
            n.e("59565"),
            n.e("456885"),
            n.e("340363"),
            n.e("459086"),
            n.e("720210"),
            n.e("61531"),
            n.e("177086"),
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
            n.e("657503"),
            n.e("377989"),
            n.e("797845"),
            n.e("491899"),
            n.e("867721"),
            n.e("567999"),
            n.e("156032"),
            n.e("267526"),
            n.e("377265"),
            n.e("400088"),
            n.e("64769"),
            n.e("992956"),
            n.e("7452"),
            n.e("309499"),
            n.e("424199"),
            n.e("342551"),
            n.e("247932"),
            n.e("926275"),
            n.e("720157"),
            n.e("645499"),
            n.e("736207"),
            n.e("806827"),
            n.e("454048"),
            n.e("397270"),
            n.e("188941"),
            n.e("300699"),
            n.e("543039"),
            n.e("349619"),
            n.e("599666"),
            n.e("253729"),
            n.e("264236"),
            n.e("721690"),
            n.e("136022"),
            n.e("161379"),
            n.e("740428"),
            n.e("234236"),
            n.e("832817"),
            n.e("398125"),
            n.e("827708"),
            n.e("221825"),
            n.e("416143"),
            n.e("901555"),
            n.e("948804"),
            n.e("593600"),
            n.e("276640"),
            n.e("295366"),
            n.e("28154"),
            n.e("844695"),
            n.e("988077"),
            n.e("431011"),
            n.e("561216"),
            n.e("50015"),
            n.e("672727"),
            n.e("552712"),
            n.e("417286"),
            n.e("829177"),
            n.e("199999"),
            n.e("106943"),
            n.e("232551"),
            n.e("482815"),
            n.e("631644"),
            n.e("170653"),
            n.e("892340"),
            n.e("611523"),
            n.e("313681"),
            n.e("343550"),
            n.e("556967"),
            n.e("317225"),
            n.e("444376"),
            n.e("652898"),
            n.e("696123"),
            n.e("147786"),
            n.e("770697"),
            n.e("318546"),
            n.e("123216"),
            n.e("731390"),
            n.e("183776"),
            n.e("936320"),
            n.e("190889"),
            n.e("146248"),
            n.e("790244"),
            n.e("851130"),
            n.e("27773"),
            n.e("718573"),
            n.e("418943"),
            n.e("784103"),
            n.e("958428"),
            n.e("643612"),
            n.e("809915"),
            n.e("34472"),
            n.e("53374"),
            n.e("710638"),
            n.e("236676"),
            n.e("631825"),
            n.e("696443"),
            n.e("361626"),
            n.e("799657"),
            n.e("252574"),
            n.e("747017"),
            n.e("715391"),
            n.e("39760"),
            n.e("126780"),
            n.e("588940"),
            n.e("401827"),
            n.e("499941"),
            n.e("776750"),
            n.e("515572"),
            n.e("761935"),
            n.e("592731"),
            n.e("511527"),
            n.e("11412"),
            n.e("478476"),
            n.e("103730"),
            n.e("763070"),
            n.e("193158"),
            n.e("502018"),
            n.e("87306"),
            n.e("757598"),
            n.e("495442"),
            n.e("400954"),
            n.e("787079"),
            n.e("466322"),
            n.e("165595"),
            n.e("61129"),
            n.e("894747"),
            n.e("249366"),
            n.e("115754"),
            n.e("728633"),
            n.e("314805"),
            n.e("173547"),
            n.e("599141"),
            n.e("278424"),
            n.e("434691"),
            n.e("225990"),
            n.e("539620"),
            n.e("636126"),
            n.e("133902"),
            n.e("562168"),
            n.e("636989"),
            n.e("244721"),
            n.e("536200"),
            n.e("222380"),
            n.e("401590"),
            n.e("621624"),
            n.e("631608"),
            n.e("858821"),
            n.e("346102"),
            n.e("377766"),
            n.e("463095"),
            n.e("148660"),
            n.e("123353"),
            n.e("561279"),
            n.e("30517"),
            n.e("498215"),
            n.e("344265"),
            n.e("836545"),
            n.e("784041"),
            n.e("843719"),
            n.e("858514"),
            n.e("662355"),
            n.e("637721"),
            n.e("371133"),
            n.e("297682"),
            n.e("869546"),
            n.e("444795"),
            n.e("455924"),
            n.e("237834"),
            n.e("88160"),
            n.e("59413"),
            n.e("21017"),
            n.e("177104"),
            n.e("231578"),
            n.e("288705"),
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
                ((t.search = e.search), window.open(t.toString(), "_self"));
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
                              (0, i.jsx)(g.y, {}),
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
        l = (0, I.bG)([$.default, X.default], () => (null != $.default.getId() ? X.default.getCurrentUser() : null)),
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
                        (0, i.jsx)(m.E, { variant: "text-lg/normal", children: en.intl.string(en.t.uT1CPa) }),
                        (0, i.jsx)(S.D, { variant: "heading-xl/semibold", children: E }),
                    ],
                }),
                (0, i.jsx)(m.E, {
                    variant: "text-sm/normal",
                    children: en.intl.format(en.t["aJRE/Q"], { applicationName: E, platformName: a }),
                }),
                (0, i.jsxs)("div", {
                    className: e0.eD,
                    children: [
                        null != c && (0, i.jsx)("img", { src: c, alt: "", className: e0.sw }),
                        (0, i.jsx)(m.E, { variant: "text-md/medium", className: e0.PP, children: a }),
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
                        (0, i.jsx)(m.E, {
                            variant: "text-sm/normal",
                            children: en.intl.format(en.t["8psEFX"], { platformName: a, applicationName: E }),
                        }),
                    ],
                }),
            ],
        })
    );
}
function e6(e) {
    let { platformType: t, platformName: n, connectedAccount: r, applicationName: a } = e,
        s = (0, D.Ay)(),
        l = v.A.get(t),
        o = null != l ? ((0, T.q)(s) ? l.icon.lightSVG : l.icon.darkSVG) : null;
    return (0, i.jsxs)("div", {
        className: e0.E4,
        children: [
            (0, i.jsx)(m.E, {
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
                            (0, i.jsx)(m.E, { variant: "text-md/medium", children: r.name }),
                            (0, i.jsx)(m.E, {
                                variant: "text-xs/normal",
                                children: en.intl.format(en.t.Dkd7sE, { platformName: n, connectedAccountId: r.id }),
                            }),
                        ],
                    }),
                    (0, i.jsx)(C.CheckmarkLargeIcon, { size: "sm", color: "status-positive" }),
                ],
            }),
            (0, i.jsx)(m.E, {
                variant: "text-sm/normal",
                children: en.intl.format(en.t.pyRNXJ, { applicationName: a }),
            }),
            (0, i.jsx)("div", { className: e0.zd }),
        ],
    });
}
function e4() {
    return (0, i.jsx)("div", { className: e0.g4, children: (0, i.jsx)(g.y, { className: e0.u1 }) });
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
            state: g,
            nonce: S,
            prompt: N,
            authorizations: C,
            scopes: D,
            permissions: M,
            guildId: U,
            channelId: x,
            integrationType: k,
            disableGuildSelect: F = !1,
            showLogout: B = !1,
            isTrustedName: H = !1,
            isEmbeddedFlow: W = !1,
            callback: q,
            callbackWithoutPost: ee,
            onClose: eo,
            disclosures: ed,
            isExternalStandaloneOAuthPage: ec = !1,
            isTwoWayLinkDiscordConsent: eu = !1,
            hideCancel: e_ = !1,
            connectedAccountProvider: eE,
        } = e,
        eA = null != k ? C?.get(k) : void 0,
        eh = (0, l.zy)(),
        eI = (0, I.bG)([V.A], () => V.A.hasLoadedExperiments);
    r.useEffect(() => {
        $.default.isAuthenticated() && !eI && L.A.getExperiments();
    }, [eI]);
    let [ef, ep] = r.useState(null),
        [eg, em] = r.useState(null),
        [eS, eN] = r.useState(null),
        [eC, eO] = r.useState(!1),
        [eR, ey] = r.useState(!1),
        eD = ef?.guilds,
        [ev, eb] = r.useState(U ?? null),
        [eM, eP] = r.useState(x ?? null),
        [ew, eG] = r.useState(Z.x3),
        ex = (0, I.bG)([z.A], () => (null == eE ? null : (z.A.getAccounts().find((e) => e.type === eE) ?? null)), [eE]),
        eF = null == eE || null != ex,
        eB = r.useMemo(() => (ef?.user != null ? new K.A(ef.user) : null), [ef?.user]),
        eH = (0, I.bG)([X.default], () => X.default.getCurrentUser()?.nsfwAllowed),
        ej = (0, G.A)(ef?.application ?? null),
        eW = r.useMemo(() => eD?.find((e) => e.id === ev), [eD, ev]),
        [eY, eK] = r.useState(null),
        e$ = r.useMemo(() => null == eA && null == k && (D?.length ?? 0) === 0 && null == f, [eA, D?.length, f, k]),
        [ez, eq] = r.useState(null);
    r.useEffect(() => {
        e$ && P.Ay.fetchApplication(A).then((e) => eq(Y.Ay.createFromServer(e)));
    }, [A, e$]);
    let eJ = r.useMemo(
            () => (null == eY ? null : ez?.integrationTypesConfig?.[eY]?.oauth2InstallParams),
            [ez?.integrationTypesConfig, eY],
        ),
        { requestedScopes: e2, accountScopes: e3 } = r.useMemo(() => {
            let e = e$ ? eJ?.scopes : D,
                t = (0, J.e)(e ?? []),
                n = es.k$.filter((e) => t.includes(e));
            return { requestedScopes: t, accountScopes: n };
        }, [eJ?.scopes, D, e$]),
        e7 = r.useMemo(() => (e$ ? E.iu(eJ?.permissions ?? 0) : M) ?? Z.x3, [eJ?.permissions, M, e$]),
        e8 = r.useRef(!1),
        [e9, te] = r.useState(ed ?? []),
        [tt, tn] = r.useState(null != ed && ed.length > 0);
    ((0, d.Ay)(() => {
        let e = $.default.getAnalyticsToken();
        null != e
            ? R.h.dispatch({ type: "SET_ANALYTICS_TOKEN", analyticsToken: e, userId: $.default.getId() })
            : (0, y.rQ)({ withAnalyticsToken: !0 }).catch(et.tEg);
    }),
        r.useEffect(() => {
            if (!e8.current && null == ed) {
                if (!$.default.isAuthenticated()) return void (0, er.Vh)(eh, "oauth2_error_not_authenticated");
                e();
            }
            async function e() {
                e8.current = !0;
                try {
                    let { disclosures: e, allAcked: t } = await (0, w.vG)(A);
                    (tn(!t), te(e));
                } catch (n) {
                    let { status: e, body: t } = n;
                    if (401 === e) return void (0, er.Vh)(eh, "oauth2_error_failed_disclosures");
                    eN(Error(null != t.message ? t.message : `${Object.keys(t)[0]}: ${Object.values(t)[0]}`));
                } finally {
                    e8.current = !1;
                }
            }
        }, [A, eh, ed, te, eN, tn, em]));
    let ti = ei(ef?.application.content_classification ?? ez?.contentClassification, eH),
        tr = r.useCallback(
            async function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                if (null != ee) {
                    (eO(!0), ee(e));
                    return;
                }
                if (null == eY) return void eN(Error("No integration type was selected."));
                try {
                    eO(!0);
                    let n = await (0, er.Gq)({
                        authorize: e,
                        clientId: A,
                        scopes: e2,
                        responseType: h,
                        redirectUri: f,
                        codeChallenge: p,
                        codeChallengeMethod: T,
                        state: g,
                        nonce: S,
                        integrationType: eY,
                        connectedAccountProvider: eE,
                        permissions: E.TF(e7, ew),
                        guildId: eY === u.b.GUILD_INSTALL && null != ev ? ev : void 0,
                        channelId: eY === u.b.GUILD_INSTALL && null != eM ? eM : void 0,
                    });
                    if ((e && (await (0, w.Yx)(A, e9)), null != q))
                        (q({ application: ef?.application, location: n.location, guild: eW, scopes: e2, canceled: t }),
                            eo?.());
                    else if (null != n.location) {
                        let e = Q.A.toURLSafe(n.location)?.pathname;
                        Q.A.isDiscordUrl(n.location) && e === et.BVt.OAUTH2_AUTHORIZED
                            ? (0, j.pX)(et.BVt.OAUTH2_AUTHORIZED, {
                                  state: { application: ef?.application, guild: eW },
                              })
                            : (window.location = n.location);
                    } else eO(!1);
                } catch (t) {
                    let e = t.body;
                    (e?.message != null && "" !== e.message ? eN(Error(e.message)) : eN(e),
                        em("AUTHORIZE_SCOPES"),
                        eO(!1));
                }
            },
            [ee, q, ef?.application, eW, eo, A, e2, h, f, p, T, g, S, e7, ew, ev, eY, eE, eM, e9],
        ),
        ta = r.useRef(!1),
        ts = r.useCallback(async () => {
            if (!$.default.isAuthenticated()) return void (0, er.Vh)(eh, "oauth2_error_not_authenticated");
            if (!e8.current && !ta.current) {
                ta.current = !0;
                try {
                    var e;
                    let t =
                            null != eA
                                ? eA
                                : await (0, er.qY)({
                                      clientId: A,
                                      scopes: e2,
                                      responseType: h,
                                      redirectUri: f,
                                      codeChallenge: p,
                                      codeChallengeMethod: T,
                                      state: g,
                                      nonce: S,
                                      integrationType: eY ?? void 0,
                                      connectedAccountProvider: eE,
                                  }),
                        n = ei(t.application.content_classification, eH);
                    (ep(
                        ((e = t),
                        null == e.guilds
                            ? e
                            : { ...e, guilds: e.guilds.map((e) => ({ ...e, permissions: E.iu(e.permissions) })) }),
                    ),
                        N !== el.l.NONE || !t.authorized || tt || n || tr(!0),
                        (0, b.zV)(et.HAw.OAUTH2_AUTHORIZE_VIEWED, { application_id: t.application.id }));
                } catch (n) {
                    let { status: e, body: t } = n;
                    if (401 === e) return void (0, er.Vh)(eh, "oauth2_error_unauthorized");
                    eN(Error(null != t.message ? t.message : `${Object.keys(t)[0]}: ${Object.values(t)[0]}`));
                } finally {
                    ta.current = !1;
                }
            }
        }, [eh, eA, A, e2, h, f, p, T, g, S, eY, eE, N, tr, tt, eH]),
        tl = r.useMemo(
            () =>
                null != ez && e$
                    ? Object.entries(ez.integrationTypesConfig ?? {})
                          .filter((e) => {
                              let [t, n] = e;
                              return null != n.oauth2InstallParams;
                          })
                          .map((e) => {
                              let [t, n] = e;
                              return Number(t);
                          })
                    : [],
            [ez, e$],
        ),
        to = r.useRef(null);
    (r.useEffect(() => {
        eg !== to.current &&
            ((to.current = eg),
            (0, b.zV)(et.HAw.OAUTH2_AUTHORIZE_STEP_VIEWED, {
                step: eg,
                application_id: A,
                integration_type: eY,
                scopes: e2,
                permissions: e7.toString(),
            }));
    }, [A, eY, e7, e2, eg]),
        r.useEffect(() => {
            null == eg &&
                (!e$ || null != ez) &&
                eI &&
                (null == eE || eF
                    ? null != eA
                        ? (eK(eA.integration_type ?? u.b.GUILD_INSTALL), em("AUTHORIZE_SCOPES"))
                        : tl.length > 1
                          ? em("SELECT_INSTALL_TYPE")
                          : (1 === tl.length ? eK(tl[0]) : null != k ? eK(k) : eK(u.b.GUILD_INSTALL),
                            em("AUTHORIZE_SCOPES"))
                    : em("CONNECT_ACCOUNT"));
        }, [eA, tl, ez, e$, eE, eF, k, eg, eI]),
        r.useEffect(() => {
            "CONNECT_ACCOUNT" === eg && eF && (eK(k ?? u.b.USER_INSTALL), em("AUTHORIZE_SCOPES"));
        }, [eg, eF, k]),
        r.useEffect(() => {
            if (null == eY || null != ef || null != eS) return;
            eY === u.b.USER_INSTALL && (eb(null), eP(null));
            let e = e2.filter((e) => !es.gX.includes(e));
            0 === e2.length
                ? eN(Error("No scopes were provided."))
                : e.length > 0
                  ? eN(Error(`Invalid scope: ${e[0]}`))
                  : (0, ea.F7)(e7)
                    ? eN(Error("Invalid permission(s) provided."))
                    : ts();
        }, [tt, ts, e2, e7, eY, ef, eS]));
    let td = r.useCallback((e) => {
            e && ey(!0);
        }, []),
        tc = (0, o.K)(td);
    if (eS instanceof Error)
        return ec
            ? { body: (0, i.jsx)(eZ.gz, { message: eS.message }) }
            : eu
              ? {
                    label: en.intl.string(en.t.j2d6Km),
                    header: (0, i.jsx)(m.E, {
                        variant: "text-lg/bold",
                        color: "text-strong",
                        children: en.intl.string(en.t.j2d6Km),
                    }),
                    body: (0, i.jsx)(m.E, { variant: "text-md/normal", color: "text-default", children: eS.message }),
                    actions: [{ onClick: eo, text: en.intl.string(en.t.cpT0Cq) }],
                    noPadding: !0,
                }
              : {
                    title: en.intl.string(en.t.j2d6Km),
                    subtitle: eS.message,
                    actions: [{ onClick: eo, text: en.intl.string(en.t.cpT0Cq) }],
                };
    let tu = null != eE ? (v.A.get(eE)?.name ?? "") : "",
        t_ = !1,
        tE = !1,
        tA = !0,
        th = !0,
        tI = !0,
        tf = !1;
    switch (eg) {
        case null:
            return { label: en.intl.string(en.t.ZTNur7), body: (0, i.jsx)(e4, {}) };
        case "CONNECT_ACCOUNT":
            ((t = (0, i.jsx)(e5, { clientId: A, platformType: eE, platformName: tu })),
                (tA = !1),
                (th = !1),
                (tI = !1),
                (t_ = !0));
            break;
        case "SELECT_INSTALL_TYPE":
            if (null == ez) return { label: en.intl.string(en.t.ZTNur7), body: (0, i.jsx)(e4, {}) };
            ((t = (0, i.jsx)(e1, {
                application: ez,
                onSelect: function (e) {
                    (eK(e), ep(null), em("AUTHORIZE_SCOPES"));
                },
            })),
                (tA = !1),
                (th = !1),
                (tI = !1),
                (tf = !0));
            break;
        case "AUTHORIZE_SCOPES":
            if (null == ef || null == eB || null == eY)
                return { label: en.intl.string(en.t.ZTNur7), body: (0, i.jsx)(e4, {}) };
            let tp = null == eS || eS instanceof Error ? {} : eS,
                tT = eD?.sort((e, t) => e.name.toLowerCase().localeCompare(t.name.toLowerCase())),
                tg = eY === u.b.GUILD_INSTALL && e2.includes(_.F.WEBHOOK_INCOMING),
                tm =
                    tg ||
                    (eY === u.b.GUILD_INSTALL && (e2.includes(_.F.BOT) || e2.includes(_.F.APPLICATIONS_COMMANDS)));
            ((t = (0, i.jsxs)(i.Fragment, {
                children: [
                    null != ex &&
                        eF &&
                        (0, i.jsx)(e6, {
                            platformType: ex.type,
                            platformName: tu,
                            connectedAccount: ex,
                            applicationName: ef.application.name,
                        }),
                    (0, i.jsx)(eL, { application: ef.application, accountScopes: e3 }),
                    (0, i.jsx)(eU, {
                        application: ef.application,
                        accountScopes: e3,
                        requestedScopes: e2,
                        integrationType: eY,
                        errors: tp,
                        isTrustedName: H || ej,
                    }),
                    (0, i.jsx)("div", { className: e0.sL, ref: tc }),
                    tm
                        ? (0, i.jsx)(eV, {
                              error: (tp[_.F.BOT] ?? tp[_.F.APPLICATIONS_COMMANDS] ?? [])[0],
                              selectedGuildId: ev,
                              onGuildChange: eb,
                              guilds: tT ?? [],
                              disabled: "" !== ev && null != ev && !0 === F,
                          })
                        : null,
                    tg
                        ? (0, i.jsx)(eQ, {
                              error: (tp[_.F.WEBHOOK_INCOMING] ?? [])[0],
                              selectedChannelId: eM,
                              selectedGuildId: ev,
                              onChannelChange: eP,
                          })
                        : null,
                ],
            })),
                e2.includes(_.F.BOT) && !E.aI(e7, Z.x3) && (a = "AUTHORIZE_BOT_PERMISSIONS"),
                tl.length > 1 && (n = "SELECT_INSTALL_TYPE"),
                (tE = (tm && null == eW) || (tg && null == eM)),
                (t_ = !0));
            break;
        case "AUTHORIZE_BOT_PERMISSIONS":
            if (null == ef) return { label: en.intl.string(en.t.ZTNur7), body: (0, i.jsx)(e4, {}) };
            ((t = (0, i.jsx)(ek, {
                application: ef.application,
                permissions: e7,
                deniedPermissions: ew,
                onPermissionsChange: function (e, t) {
                    eG((n) => (e ? E.TF(n, t) : E.WQ(n, t)));
                },
                guild: eW,
            })),
                (n = "AUTHORIZE_SCOPES"),
                (t_ = !0));
    }
    let tS = [];
    if (tA && null != ef) {
        let e = ef?.application.approximate_guild_count ?? ef?.bot?.approximate_guild_count;
        s = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(eT, {
                    application: ef.application,
                    scopes: e2,
                    disclosures: e9,
                    redirectUri: ef.redirect_uri ?? null,
                    approximateGuildCount: void 0 !== e ? e : null,
                    isEmbeddedFlow: W,
                    connectedAccount: ex,
                }),
                (0, i.jsx)("div", { className: e0.sL, ref: tc }),
            ],
        });
    }
    if (
        (th &&
            null != ef &&
            null != eB &&
            (c = (0, i.jsx)(eX, {
                user: eB,
                application: ef.application,
                bot: ef.bot,
                accountScopes: e3,
                showLogout: B || !1,
                location: eh,
                scopes: e2,
            })),
        tI &&
            (null != n
                ? tS.push({ variant: "secondary", onClick: () => em(n), text: en.intl.string(en.t["13/7kX"]) })
                : e_ ||
                  tS.push({ variant: "secondary", onClick: () => tr(!1, !0), text: en.intl.string(en.t["ETE/oC"]) }),
            "SELECT_INSTALL_TYPE" !== eg))
    ) {
        let e = "CONNECT_ACCOUNT" !== eg && !eR;
        tS.push(
            e
                ? { disabled: !0, loading: eC, text: en.intl.string(en.t.N22i9F), icon: O.M }
                : {
                      onClick: null != a ? () => em(a) : () => tr(!0),
                      loading: eC,
                      disabled: ("CONNECT_ACCOUNT" !== eg && null == s) || tE || ti,
                      text: tE
                          ? en.intl.string(en.t.BwwiSM)
                          : null != a
                            ? en.intl.string(en.t["3PatSz"])
                            : en.intl.string(en.t["y+/PE9"]),
                  },
        );
    }
    return {
        label: "CONNECT_ACCOUNT" === eg ? en.intl.string(en.t.JGuDTr) : void 0,
        header: c,
        body: t,
        actions: tS,
        nextStep: a,
        appDetails: s,
        sendAuthorize: tr,
        hasContentBackground: t_,
        noPadding: tf,
        obscured: ti,
    };
}
function e8(e, t) {
    if (null == t.location || (null != e.callback && e.callback(t))) return;
    let { host: n, pathname: r, searchParams: a } = Q.A.toURLSafe(t.location) ?? {},
        s = Q.A.isDiscordHostname(n ?? null) || window.location.host === n;
    if (s && r === et.BVt.OAUTH2_AUTHORIZED)
        (0, f.openModal)((e) => (0, i.jsx)(eZ.dR, { guild: t.guild, application: t.application, ...e }));
    else if (s && r?.startsWith(et.BVt.OAUTH2_ERROR)) {
        if (!0 === t.canceled) return;
        (0, f.openModal)((e) => {
            let t = a?.get("error_description") ?? a?.get("error") ?? en.intl.string(en.t.mqn873);
            return (
                Array.isArray(t) && (t = t[0]),
                (0, i.jsx)(eq.f, { ...e, children: (0, i.jsx)(eZ.gz, { message: t, onClose: e.onClose }) })
            );
        });
    } else window.open(t.location, "_blank")?.focus();
}
function e9(e, t) {
    (0, H._9)() ? B.A.openCreateGuildModal({ onSuccess: (n) => te({ ...e, guildId: n }, t) }) : te(e, t);
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
