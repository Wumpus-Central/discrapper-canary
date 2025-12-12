n.r(t), n.d(t, { default: () => eZ }), n(35282), n(388685);
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
    x = n(280466),
    E = n(761305),
    v = n(698177),
    j = n(353926),
    b = n(409059),
    I = n(962220),
    N = n(637776),
    y = n(264229),
    S = n(677760),
    C = n(360887),
    O = n(893607),
    T = n(108427),
    A = n(594961),
    Z = n(314897),
    P = n(82142),
    R = n(701190),
    L = n(626135),
    D = n(81063),
    k = n(449934),
    w = n(768581),
    M = n(625054),
    B = n(320830),
    U = n(721751),
    G = n(223543),
    F = n(73906),
    V = n(299852),
    W = n(939900),
    K = n(39514),
    H = n(236446),
    z = n(9325),
    q = n(344295),
    Y = n(781428),
    J = n(209411),
    Q = n(649156),
    X = n(423527),
    $ = n(424044),
    ee = n(479495),
    et = n(264873),
    en = n(455502),
    er = n(981631),
    ei = n(188785),
    es = n(245335);
function el(e, t, n) {
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
function ea(e) {
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
                el(e, t, n[t]);
            });
    }
    return e;
}
function eo(e, t) {
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
let ec = (0, B.Z)(Y.Z),
    eu = (0, B.Z)(J.Z),
    ed = (0, B.Z)(q.Z),
    eh = (0, B.Z)(H.Z),
    eg = (0, B.Z)(K.Z),
    em = (0, B.Z)(S.Z),
    ep = (0, B.Z)(X.Z),
    ef = (0, B.Z)(et.Z),
    e_ = (0, B.Z)(G.Z),
    ex = (0, B.Z)(en.Z),
    eE = (0, B.Z)(v.Z),
    ev = (0, B.Z)(ee.Z),
    ej = (0, B.Z)(V.Z),
    eb = (0, B.Z)(E.Z),
    eI = (0, B.Z)(N.Z),
    eN = (0, B.Z)(F.Z),
    ey = (0, B.Z)(W.Z),
    eS = (0, B.Z)(Q.Z),
    eC = (0, B.Z)($.Z),
    eO = (0, B.Z)(p.Z),
    eT = (0, B.Z)(C.Z);
class eA extends i.PureComponent {
    static getDerivedStateFromProps(e, t) {
        var n;
        let { invite: r, location: i } = e,
            { backgroundId: l } = t,
            a = null != (n = (0, s.parse)(i.search).redirect_to) ? n : null;
        (null == a || "" === a || a.startsWith(er.Z5c.ME) || (!(0, o.B)(a) && !(0, x.Eu)(a))) && (a = null);
        let c = null;
        if (null == r) c = (0, k.gK)(a);
        else if ((null == r ? void 0 : r.state) === er.r2o.RESOLVED) {
            let { guild: e, target_application: t } = r;
            null != t
                ? null != l && (c = (0, D.xF)(t.id, l, 1024))
                : null != e &&
                  "string" == typeof e.splash &&
                  (c = w.ZP.getGuildSplashURL({
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
            L.default.track(
                er.rMx.INVITE_OPENED,
                {
                    invite_code: (0, y.jX)(e),
                    load_time: M.Z.getTimeSinceNavigationStart(),
                },
                { flush: !0 },
            )),
            (t || ei.a) && this.resolveInvite(),
            this.resolveGiftCode(),
            this.resolveGuildTemplate(),
            m.Z.initialize(),
            (0, T.t)();
    }
    componentDidUpdate(e) {
        var t, n;
        e.hasLoadedExperiments || !this.props.hasLoadedExperiments || ei.a || this.resolveInvite(),
            (null == (t = e.invite) ? void 0 : t.state) !== (null == (n = this.props.invite) ? void 0 : n.state) &&
                this.maybeFetchApplicationSplash();
    }
    componentWillUnmount() {
        m.Z.terminate();
    }
    maybeFetchApplicationSplash() {
        let { invite: e } = this.props;
        if ((null == e ? void 0 : e.state) === er.r2o.RESOLVED) {
            let { target_application: t } = e;
            null != t &&
                (0, D.hR)(t.id, ["embedded_splash"]).then((e) => {
                    let [t] = e;
                    return this.setState({ backgroundId: t });
                });
        }
    }
    async resolveInvite() {
        let { inviteKey: e } = this.props;
        if (null == e) return;
        let { invite: t } = await g.ZP.resolveInvite(e, er.Usc.INVITE);
        null != t && ((0, _.A)(t), null != t.type && es.xf.has(t.type) && g.ZP.openNativeAppModal(e));
    }
    resolveGuildTemplate() {
        let { guildTemplateCode: e } = this.props;
        null != e &&
            (L.default.track(
                er.rMx.GUILD_TEMPLATE_OPENED,
                {
                    guild_template_code: e,
                    load_time: M.Z.getTimeSinceNavigationStart(),
                },
                { flush: !0 },
            ),
            I.Z.resolveGuildTemplate(e),
            I.Z.openNativeAppModal(e));
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
        return (0, r.jsxs)(U.Z, {
            splash: e,
            children: [
                (0, r.jsx)(f.Z, {
                    path: er.Z5c.LOGIN_HANDOFF,
                    render: (e) => (0, r.jsx)(eu, eo(ea({}, e), { redirectTo: t })),
                }),
                (0, r.jsx)(f.Z, {
                    path: er.Z5c.LOGIN_ONE_TIME,
                    render: (e) => (0, r.jsx)(eT, ea({}, e)),
                }),
                (0, r.jsx)(f.Z, {
                    impressionName: l.ImpressionNames.USER_LOGIN,
                    path: er.Z5c.LOGIN,
                    render: (e) => (0, r.jsx)(ec, eo(ea({}, e), { redirectTo: t })),
                }),
                (0, r.jsx)(f.Z, {
                    impressionName: l.ImpressionNames.USER_REGISTRATION,
                    path: er.Z5c.REGISTER,
                    render: (e) =>
                        ei.a
                            ? (0, r.jsx)(
                                  ed,
                                  eo(ea({}, e), {
                                      redirectTo: t,
                                      inviteKey: n,
                                  }),
                              )
                            : (0, r.jsx)(ep, eo(ea({}, e), { redirectTo: t })),
                }),
                (0, r.jsx)(f.Z, {
                    path: er.Z5c.GIFT_CODE_LOGIN(":giftCode"),
                    render: (e) => (0, r.jsx)(eg, ea({ login: !0 }, e)),
                }),
                (0, r.jsx)(f.Z, {
                    path: er.Z5c.GIFT_CODE(":giftCode"),
                    render: (e) => (0, r.jsx)(eg, ea({}, e)),
                }),
                (0, r.jsx)(f.Z, {
                    path: [er.Z5c.INVITE_LOGIN(":inviteCode"), er.Z5c.INVITE(":inviteCode")],
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
                                  em,
                                  {
                                      inviteKey: l,
                                      transitionTo: s,
                                  },
                                  l,
                              )
                            : (0, r.jsx)(ed, {
                                  inviteKey: l,
                                  location: i,
                                  transitionTo: s,
                                  login: n === er.Z5c.INVITE_LOGIN(":inviteCode"),
                              });
                    },
                }),
                (0, r.jsx)(f.Z, {
                    path: [
                        er.Z5c.GUILD_TEMPLATE_LOGIN(":guildTemplateCode"),
                        er.Z5c.GUILD_TEMPLATE(":guildTemplateCode"),
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
                            ? (0, r.jsx)(z.Z, { code: t }, t)
                            : (0, r.jsx)(eh, {
                                  code: t,
                                  location: i,
                                  transitionTo: s,
                                  login: n === er.Z5c.GUILD_TEMPLATE_LOGIN(":guildTemplateCode"),
                              });
                    },
                }),
                (0, r.jsx)(f.Z, {
                    path: er.Z5c.VERIFY,
                    render: (e) => (0, r.jsx)(ex, ea({}, e)),
                }),
                (0, r.jsx)(f.Z, {
                    path: er.Z5c.VERIFY_HUB_EMAIL,
                    render: (e) => (0, r.jsx)(eI, ea({}, e)),
                }),
                (0, r.jsx)(f.Z, {
                    path: er.Z5c.VERIFY_REQUEST,
                    render: (e) => (0, r.jsx)(eE, ea({}, e)),
                }),
                (0, r.jsx)(f.Z, {
                    path: er.Z5c.DISABLE_EMAIL_NOTIFICATIONS,
                    render: (e) => (0, r.jsx)(ej, ea({}, e)),
                }),
                (0, r.jsx)(f.Z, {
                    path: er.Z5c.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS,
                    render: (e) => (0, r.jsx)(eb, ea({}, e)),
                }),
                (0, r.jsx)(f.Z, {
                    path: er.Z5c.AUTHORIZE_IP,
                    render: (e) => (0, r.jsx)(ef, ea({}, e)),
                }),
                (0, r.jsx)(f.Z, {
                    path: er.Z5c.REJECT_IP,
                    render: (e) => (0, r.jsx)(ev, ea({ source: er.Z5c.REJECT_IP }, e)),
                }),
                (0, r.jsx)(f.Z, {
                    path: er.Z5c.REJECT_MFA,
                    render: (e) => (0, r.jsx)(ev, ea({ source: er.Z5c.REJECT_MFA }, e)),
                }),
                (0, r.jsx)(f.Z, {
                    path: er.Z5c.AUTHORIZE_PAYMENT,
                    render: (e) => (0, r.jsx)(e_, ea({}, e)),
                }),
                (0, r.jsx)(f.Z, {
                    path: er.Z5c.RESET,
                    render: (e) => (0, r.jsx)(ev, ea({ source: er.Z5c.RESET }, e)),
                }),
                (0, r.jsx)(f.Z, {
                    path: er.Z5c.PICK_GUILD_SETTINGS(":section?", ":subsection?"),
                    render: (e) => (0, r.jsx)(eS, ea({}, e)),
                }),
                (0, r.jsx)(f.Z, {
                    path: er.Z5c.CHANNELS_GAME_SHOP(O.Hw.guildId(), ":pageIndex", ":skuId", ":slug?"),
                    render: (e) => (0, r.jsx)(ey, ea({}, e)),
                }),
                (0, r.jsx)(f.Z, {
                    path: er.Z5c.CHANNEL(O.Hw.guildId(), O.Hw.channelId({ optional: !0 }), ":messageId?"),
                    render: (e) => (0, r.jsx)(eN, ea({}, e)),
                }),
                (0, r.jsx)(f.Z, {
                    path: er.Z5c.REPORT,
                    render: () => (0, r.jsx)(A.KS, {}),
                }),
                (0, r.jsx)(f.Z, {
                    path: er.Z5c.REPORT_SECOND_LOOK,
                    render: (e) => (0, r.jsx)(eC, ea({}, e)),
                }),
                (0, r.jsx)(f.Z, {
                    path: er.Z5c.ACCOUNT_REVERT(":token"),
                    render: (e) => (0, r.jsx)(eO, ea({}, e)),
                }),
            ],
        });
    }
    constructor(...e) {
        super(...e),
            el(this, "state", {
                splash: null,
                redirectTo: null,
                backgroundId: null,
            });
    }
}
let eZ = c.ZP.connectStores([Z.default, R.Z, P.Z, j.Z, b.Z], (e) => {
    var t, n, r;
    let { match: i, location: s } = e,
        l = null == i || null == (t = i.params) ? void 0 : t.inviteCode,
        a = ei.a ? ei.Y : void 0,
        o = null != l ? (0, y.mb)(l, s.search) : a,
        c = null == i || null == (n = i.params) ? void 0 : n.giftCode,
        u = null == i || null == (r = i.params) ? void 0 : r.guildTemplateCode;
    return {
        inviteKey: o,
        isAuthenticated: Z.default.isAuthenticated(),
        giftCode: c,
        guildTemplateCode: u,
        gift: null != c ? P.Z.get(c) : null,
        invite: null != o ? R.Z.getInvite(o) : null,
        guildTemplate: null != u ? b.Z.getGuildTemplate(u) : null,
        hasLoadedExperiments: j.Z.hasLoadedExperiments,
    };
})(eA);
