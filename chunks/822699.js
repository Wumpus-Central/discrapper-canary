n.r(t), n.d(t, { default: () => eC }), n(35282), n(388685);
var r = n(54381),
    i = n(473749),
    s = n(593473),
    l = n(990547),
    a = n(873546),
    o = n(427398),
    c = n(442837),
    u = n(570140),
    d = n(893776),
    h = n(533307),
    g = n(447543),
    m = n(126399),
    p = n(521379),
    f = n(765717),
    _ = n(267394),
    x = n(761305),
    E = n(698177),
    v = n(353926),
    j = n(409059),
    b = n(962220),
    I = n(637776),
    y = n(264229),
    S = n(677760),
    N = n(360887),
    O = n(893607),
    C = n(314897),
    T = n(82142),
    A = n(701190),
    Z = n(626135),
    P = n(81063),
    R = n(449934),
    L = n(768581),
    w = n(625054),
    D = n(320830),
    k = n(721751),
    M = n(223543),
    B = n(73906),
    U = n(299852),
    G = n(39514),
    F = n(236446),
    V = n(9325),
    W = n(344295),
    H = n(781428),
    K = n(209411),
    z = n(649156),
    q = n(423527),
    Y = n(424044),
    J = n(479495),
    Q = n(264873),
    X = n(909223),
    $ = n(455502),
    ee = n(981631),
    et = n(188785),
    en = n(245335);
function er(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function ei(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                er(e, t, n[t]);
            });
    }
    return e;
}
function es(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
n(179645), c.ZP.initialize();
let el = (0, D.Z)(H.Z),
    ea = (0, D.Z)(K.Z),
    eo = (0, D.Z)(W.Z),
    ec = (0, D.Z)(F.Z),
    eu = (0, D.Z)(G.Z),
    ed = (0, D.Z)(S.Z),
    eh = (0, D.Z)(q.Z),
    eg = (0, D.Z)(Q.Z),
    em = (0, D.Z)(M.Z),
    ep = (0, D.Z)($.Z),
    ef = (0, D.Z)(E.Z),
    e_ = (0, D.Z)(J.Z),
    ex = (0, D.Z)(U.Z),
    eE = (0, D.Z)(x.Z),
    ev = (0, D.Z)(I.Z),
    ej = (0, D.Z)(B.Z),
    eb = (0, D.Z)(z.Z),
    eI = (0, D.Z)(X.Z),
    ey = (0, D.Z)(Y.Z),
    eS = (0, D.Z)(p.Z),
    eN = (0, D.Z)(N.Z);
class eO extends i.PureComponent {
    static getDerivedStateFromProps(e, t) {
        var n;
        let { invite: r, location: i } = e,
            { backgroundId: l } = t,
            a = null != (n = (0, s.parse)(i.search).redirect_to) ? n : null;
        (null == a || "" === a || !(0, o.B)(a) || a.startsWith(ee.Z5c.ME)) && (a = null);
        let c = null;
        if (null == r) c = (0, R.gK)(a);
        else if ((null == r ? void 0 : r.state) === ee.r2o.RESOLVED) {
            let { guild: e, target_application: t } = r;
            null != t
                ? null != l && (c = (0, P.xF)(t.id, l, 1024))
                : null != e &&
                  "string" == typeof e.splash &&
                  (c = L.ZP.getGuildSplashURL({
                      id: e.id,
                      splash: e.splash,
                  }));
        }
        return {
            redirectTo: a,
            splash: c,
        };
    }
    componentDidMount() {
        let { inviteKey: e, hasLoadedExperiments: t, isAuthenticated: n } = this.props;
        null != e &&
            (!t && n && d.Z.getExperiments(!0),
            Z.default.track(
                ee.rMx.INVITE_OPENED,
                {
                    invite_code: (0, y.jX)(e),
                    load_time: w.Z.getTimeSinceNavigationStart(),
                },
                { flush: !0 },
            )),
            (t || et.a) && this.resolveInvite(),
            this.resolveGiftCode(),
            this.resolveGuildTemplate(),
            m.Z.initialize();
    }
    componentDidUpdate(e) {
        var t, n;
        e.hasLoadedExperiments || !this.props.hasLoadedExperiments || et.a || this.resolveInvite(),
            (null == (t = e.invite) ? void 0 : t.state) !== (null == (n = this.props.invite) ? void 0 : n.state) &&
                this.maybeFetchApplicationSplash();
    }
    componentWillUnmount() {
        m.Z.terminate();
    }
    maybeFetchApplicationSplash() {
        let { invite: e } = this.props;
        if ((null == e ? void 0 : e.state) === ee.r2o.RESOLVED) {
            let { target_application: t } = e;
            null != t &&
                (0, P.hR)(t.id, ["embedded_splash"]).then((e) => {
                    let [t] = e;
                    return this.setState({ backgroundId: t });
                });
        }
    }
    async resolveInvite() {
        let { inviteKey: e } = this.props;
        if (null == e) return;
        let { invite: t } = await g.ZP.resolveInvite(e, ee.Usc.INVITE);
        null != t && ((0, _.A)(t), null != t.type && en.xf.has(t.type) && g.ZP.openNativeAppModal(e));
    }
    resolveGuildTemplate() {
        let { guildTemplateCode: e } = this.props;
        null != e &&
            (Z.default.track(
                ee.rMx.GUILD_TEMPLATE_OPENED,
                {
                    guild_template_code: e,
                    load_time: w.Z.getTimeSinceNavigationStart(),
                },
                { flush: !0 },
            ),
            b.Z.resolveGuildTemplate(e),
            b.Z.openNativeAppModal(e));
    }
    resolveGiftCode() {
        let { giftCode: e } = this.props;
        null != e &&
            h.Z.resolveGiftCode(e, !0, !0).then((t) => {
                null != t && null == t.giftCode.promotion && u.Z.wait(() => h.Z.openNativeGiftCodeModal(e));
            });
    }
    render() {
        let { splash: e, redirectTo: t } = this.state,
            { inviteKey: n } = this.props;
        return (0, r.jsxs)(k.Z, {
            splash: e,
            children: [
                (0, r.jsx)(f.Z, {
                    path: ee.Z5c.LOGIN_HANDOFF,
                    render: (e) => (0, r.jsx)(ea, es(ei({}, e), { redirectTo: t })),
                }),
                (0, r.jsx)(f.Z, {
                    path: ee.Z5c.LOGIN_ONE_TIME,
                    render: (e) => (0, r.jsx)(eN, ei({}, e)),
                }),
                (0, r.jsx)(f.Z, {
                    impressionName: l.ImpressionNames.USER_LOGIN,
                    path: ee.Z5c.LOGIN,
                    render: (e) => (0, r.jsx)(el, es(ei({}, e), { redirectTo: t })),
                }),
                (0, r.jsx)(f.Z, {
                    impressionName: l.ImpressionNames.USER_REGISTRATION,
                    path: ee.Z5c.REGISTER,
                    render: (e) =>
                        et.a
                            ? (0, r.jsx)(
                                  eo,
                                  es(ei({}, e), {
                                      redirectTo: t,
                                      inviteKey: n,
                                  }),
                              )
                            : (0, r.jsx)(eh, es(ei({}, e), { redirectTo: t })),
                }),
                (0, r.jsx)(f.Z, {
                    path: ee.Z5c.GIFT_CODE_LOGIN(":giftCode"),
                    render: (e) => (0, r.jsx)(eu, ei({ login: !0 }, e)),
                }),
                (0, r.jsx)(f.Z, {
                    path: ee.Z5c.GIFT_CODE(":giftCode"),
                    render: (e) => (0, r.jsx)(eu, ei({}, e)),
                }),
                (0, r.jsx)(f.Z, {
                    path: [ee.Z5c.INVITE_LOGIN(":inviteCode"), ee.Z5c.INVITE(":inviteCode")],
                    render: (e) => {
                        let {
                                match: {
                                    params: { inviteCode: t },
                                    path: n,
                                },
                                location: i,
                                transitionTo: s,
                            } = e,
                            l = (0, y.mb)(t, i.search);
                        return a.tq || a.Em
                            ? (0, r.jsx)(
                                  ed,
                                  {
                                      inviteKey: l,
                                      transitionTo: s,
                                  },
                                  l,
                              )
                            : (0, r.jsx)(eo, {
                                  inviteKey: l,
                                  location: i,
                                  transitionTo: s,
                                  login: n === ee.Z5c.INVITE_LOGIN(":inviteCode"),
                              });
                    },
                }),
                (0, r.jsx)(f.Z, {
                    path: [
                        ee.Z5c.GUILD_TEMPLATE_LOGIN(":guildTemplateCode"),
                        ee.Z5c.GUILD_TEMPLATE(":guildTemplateCode"),
                    ],
                    render: (e) => {
                        let {
                            match: {
                                params: { guildTemplateCode: t },
                                path: n,
                            },
                            location: i,
                            transitionTo: s,
                        } = e;
                        return a.tq || a.Em
                            ? (0, r.jsx)(V.Z, { code: t }, t)
                            : (0, r.jsx)(ec, {
                                  code: t,
                                  location: i,
                                  transitionTo: s,
                                  login: n === ee.Z5c.GUILD_TEMPLATE_LOGIN(":guildTemplateCode"),
                              });
                    },
                }),
                (0, r.jsx)(f.Z, {
                    path: ee.Z5c.VERIFY,
                    render: (e) => (0, r.jsx)(ep, ei({}, e)),
                }),
                (0, r.jsx)(f.Z, {
                    path: ee.Z5c.VERIFY_HUB_EMAIL,
                    render: (e) => (0, r.jsx)(ev, ei({}, e)),
                }),
                (0, r.jsx)(f.Z, {
                    path: ee.Z5c.VERIFY_REQUEST,
                    render: (e) => (0, r.jsx)(ef, ei({}, e)),
                }),
                (0, r.jsx)(f.Z, {
                    path: ee.Z5c.DISABLE_EMAIL_NOTIFICATIONS,
                    render: (e) => (0, r.jsx)(ex, ei({}, e)),
                }),
                (0, r.jsx)(f.Z, {
                    path: ee.Z5c.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS,
                    render: (e) => (0, r.jsx)(eE, ei({}, e)),
                }),
                (0, r.jsx)(f.Z, {
                    path: ee.Z5c.AUTHORIZE_IP,
                    render: (e) => (0, r.jsx)(eg, ei({}, e)),
                }),
                (0, r.jsx)(f.Z, {
                    path: ee.Z5c.REJECT_IP,
                    render: (e) => (0, r.jsx)(e_, ei({ source: ee.Z5c.REJECT_IP }, e)),
                }),
                (0, r.jsx)(f.Z, {
                    path: ee.Z5c.REJECT_MFA,
                    render: (e) => (0, r.jsx)(e_, ei({ source: ee.Z5c.REJECT_MFA }, e)),
                }),
                (0, r.jsx)(f.Z, {
                    path: ee.Z5c.AUTHORIZE_PAYMENT,
                    render: (e) => (0, r.jsx)(em, ei({}, e)),
                }),
                (0, r.jsx)(f.Z, {
                    path: ee.Z5c.RESET,
                    render: (e) => (0, r.jsx)(e_, ei({ source: ee.Z5c.RESET }, e)),
                }),
                (0, r.jsx)(f.Z, {
                    path: ee.Z5c.PICK_GUILD_SETTINGS(":section?", ":subsection?"),
                    render: (e) => (0, r.jsx)(eb, ei({}, e)),
                }),
                (0, r.jsx)(f.Z, {
                    path: ee.Z5c.CHANNEL(O.Hw.guildId(), O.Hw.channelId({ optional: !0 }), ":messageId?"),
                    render: (e) => (0, r.jsx)(ej, ei({}, e)),
                }),
                (0, r.jsx)(f.Z, {
                    path: ee.Z5c.REPORT,
                    render: (e) => (0, r.jsx)(eI, ei({}, e)),
                }),
                (0, r.jsx)(f.Z, {
                    path: ee.Z5c.REPORT_SECOND_LOOK,
                    render: (e) => (0, r.jsx)(ey, ei({}, e)),
                }),
                (0, r.jsx)(f.Z, {
                    path: ee.Z5c.ACCOUNT_REVERT(":token"),
                    render: (e) => (0, r.jsx)(eS, ei({}, e)),
                }),
            ],
        });
    }
    constructor(...e) {
        super(...e),
            er(this, "state", {
                splash: null,
                redirectTo: null,
                backgroundId: null,
            });
    }
}
let eC = c.ZP.connectStores([C.default, A.Z, T.Z, v.Z, j.Z], (e) => {
    var t, n, r;
    let { match: i, location: s } = e,
        l = null == i || null == (t = i.params) ? void 0 : t.inviteCode,
        a = et.a ? et.Y : void 0,
        o = null != l ? (0, y.mb)(l, s.search) : a,
        c = null == i || null == (n = i.params) ? void 0 : n.giftCode,
        u = null == i || null == (r = i.params) ? void 0 : r.guildTemplateCode;
    return {
        inviteKey: o,
        isAuthenticated: C.default.isAuthenticated(),
        giftCode: c,
        guildTemplateCode: u,
        gift: null != c ? T.Z.get(c) : null,
        invite: null != o ? A.Z.getInvite(o) : null,
        guildTemplate: null != u ? j.Z.getGuildTemplate(u) : null,
        hasLoadedExperiments: v.Z.hasLoadedExperiments,
    };
})(eO);
