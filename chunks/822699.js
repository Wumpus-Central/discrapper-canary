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
    p = n(126399),
    f = n(521379),
    m = n(765717),
    _ = n(267394),
    x = n(280466),
    E = n(761305),
    v = n(698177),
    b = n(353926),
    j = n(409059),
    I = n(962220),
    y = n(637776),
    S = n(264229),
    O = n(677760),
    N = n(360887),
    C = n(893607),
    T = n(314897),
    A = n(82142),
    Z = n(701190),
    P = n(626135),
    R = n(81063),
    L = n(449934),
    w = n(768581),
    k = n(625054),
    D = n(320830),
    M = n(721751),
    B = n(223543),
    U = n(73906),
    G = n(299852),
    F = n(939900),
    V = n(39514),
    W = n(236446),
    H = n(9325),
    K = n(344295),
    z = n(781428),
    q = n(209411),
    Y = n(649156),
    J = n(423527),
    Q = n(424044),
    X = n(479495),
    $ = n(264873),
    ee = n(909223),
    et = n(455502),
    en = n(981631),
    er = n(188785),
    ei = n(245335);
function es(e, t, n) {
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
function el(e) {
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
                es(e, t, n[t]);
            });
    }
    return e;
}
function ea(e, t) {
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
let eo = (0, D.Z)(z.Z),
    ec = (0, D.Z)(q.Z),
    eu = (0, D.Z)(K.Z),
    ed = (0, D.Z)(W.Z),
    eh = (0, D.Z)(V.Z),
    eg = (0, D.Z)(O.Z),
    ep = (0, D.Z)(J.Z),
    ef = (0, D.Z)($.Z),
    em = (0, D.Z)(B.Z),
    e_ = (0, D.Z)(et.Z),
    ex = (0, D.Z)(v.Z),
    eE = (0, D.Z)(X.Z),
    ev = (0, D.Z)(G.Z),
    eb = (0, D.Z)(E.Z),
    ej = (0, D.Z)(y.Z),
    eI = (0, D.Z)(U.Z),
    ey = (0, D.Z)(F.Z),
    eS = (0, D.Z)(Y.Z),
    eO = (0, D.Z)(ee.Z),
    eN = (0, D.Z)(Q.Z),
    eC = (0, D.Z)(f.Z),
    eT = (0, D.Z)(N.Z);
class eA extends i.PureComponent {
    static getDerivedStateFromProps(e, t) {
        var n;
        let { invite: r, location: i } = e,
            { backgroundId: l } = t,
            a = null != (n = (0, s.parse)(i.search).redirect_to) ? n : null;
        (null == a || "" === a || a.startsWith(en.Z5c.ME) || (!(0, o.B)(a) && !(0, x.Eu)(a))) && (a = null);
        let c = null;
        if (null == r) c = (0, L.gK)(a);
        else if ((null == r ? void 0 : r.state) === en.r2o.RESOLVED) {
            let { guild: e, target_application: t } = r;
            null != t
                ? null != l && (c = (0, R.xF)(t.id, l, 1024))
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
            P.default.track(
                en.rMx.INVITE_OPENED,
                {
                    invite_code: (0, S.jX)(e),
                    load_time: k.Z.getTimeSinceNavigationStart(),
                },
                { flush: !0 },
            )),
            (t || er.a) && this.resolveInvite(),
            this.resolveGiftCode(),
            this.resolveGuildTemplate(),
            p.Z.initialize();
    }
    componentDidUpdate(e) {
        var t, n;
        e.hasLoadedExperiments || !this.props.hasLoadedExperiments || er.a || this.resolveInvite(),
            (null == (t = e.invite) ? void 0 : t.state) !== (null == (n = this.props.invite) ? void 0 : n.state) &&
                this.maybeFetchApplicationSplash();
    }
    componentWillUnmount() {
        p.Z.terminate();
    }
    maybeFetchApplicationSplash() {
        let { invite: e } = this.props;
        if ((null == e ? void 0 : e.state) === en.r2o.RESOLVED) {
            let { target_application: t } = e;
            null != t &&
                (0, R.hR)(t.id, ["embedded_splash"]).then((e) => {
                    let [t] = e;
                    return this.setState({ backgroundId: t });
                });
        }
    }
    async resolveInvite() {
        let { inviteKey: e } = this.props;
        if (null == e) return;
        let { invite: t } = await g.ZP.resolveInvite(e, en.Usc.INVITE);
        null != t && ((0, _.A)(t), null != t.type && ei.xf.has(t.type) && g.ZP.openNativeAppModal(e));
    }
    resolveGuildTemplate() {
        let { guildTemplateCode: e } = this.props;
        null != e &&
            (P.default.track(
                en.rMx.GUILD_TEMPLATE_OPENED,
                {
                    guild_template_code: e,
                    load_time: k.Z.getTimeSinceNavigationStart(),
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
        return (0, r.jsxs)(M.Z, {
            splash: e,
            children: [
                (0, r.jsx)(m.Z, {
                    path: en.Z5c.LOGIN_HANDOFF,
                    render: (e) => (0, r.jsx)(ec, ea(el({}, e), { redirectTo: t })),
                }),
                (0, r.jsx)(m.Z, {
                    path: en.Z5c.LOGIN_ONE_TIME,
                    render: (e) => (0, r.jsx)(eT, el({}, e)),
                }),
                (0, r.jsx)(m.Z, {
                    impressionName: l.ImpressionNames.USER_LOGIN,
                    path: en.Z5c.LOGIN,
                    render: (e) => (0, r.jsx)(eo, ea(el({}, e), { redirectTo: t })),
                }),
                (0, r.jsx)(m.Z, {
                    impressionName: l.ImpressionNames.USER_REGISTRATION,
                    path: en.Z5c.REGISTER,
                    render: (e) =>
                        er.a
                            ? (0, r.jsx)(
                                  eu,
                                  ea(el({}, e), {
                                      redirectTo: t,
                                      inviteKey: n,
                                  }),
                              )
                            : (0, r.jsx)(ep, ea(el({}, e), { redirectTo: t })),
                }),
                (0, r.jsx)(m.Z, {
                    path: en.Z5c.GIFT_CODE_LOGIN(":giftCode"),
                    render: (e) => (0, r.jsx)(eh, el({ login: !0 }, e)),
                }),
                (0, r.jsx)(m.Z, {
                    path: en.Z5c.GIFT_CODE(":giftCode"),
                    render: (e) => (0, r.jsx)(eh, el({}, e)),
                }),
                (0, r.jsx)(m.Z, {
                    path: [en.Z5c.INVITE_LOGIN(":inviteCode"), en.Z5c.INVITE(":inviteCode")],
                    render: (e) => {
                        let {
                                match: {
                                    params: { inviteCode: t },
                                    path: n,
                                },
                                location: i,
                                transitionTo: s,
                            } = e,
                            l = (0, S.mb)(t, i.search);
                        return a.tq || a.Em
                            ? (0, r.jsx)(
                                  eg,
                                  {
                                      inviteKey: l,
                                      transitionTo: s,
                                  },
                                  l,
                              )
                            : (0, r.jsx)(eu, {
                                  inviteKey: l,
                                  location: i,
                                  transitionTo: s,
                                  login: n === en.Z5c.INVITE_LOGIN(":inviteCode"),
                              });
                    },
                }),
                (0, r.jsx)(m.Z, {
                    path: [
                        en.Z5c.GUILD_TEMPLATE_LOGIN(":guildTemplateCode"),
                        en.Z5c.GUILD_TEMPLATE(":guildTemplateCode"),
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
                            ? (0, r.jsx)(H.Z, { code: t }, t)
                            : (0, r.jsx)(ed, {
                                  code: t,
                                  location: i,
                                  transitionTo: s,
                                  login: n === en.Z5c.GUILD_TEMPLATE_LOGIN(":guildTemplateCode"),
                              });
                    },
                }),
                (0, r.jsx)(m.Z, {
                    path: en.Z5c.VERIFY,
                    render: (e) => (0, r.jsx)(e_, el({}, e)),
                }),
                (0, r.jsx)(m.Z, {
                    path: en.Z5c.VERIFY_HUB_EMAIL,
                    render: (e) => (0, r.jsx)(ej, el({}, e)),
                }),
                (0, r.jsx)(m.Z, {
                    path: en.Z5c.VERIFY_REQUEST,
                    render: (e) => (0, r.jsx)(ex, el({}, e)),
                }),
                (0, r.jsx)(m.Z, {
                    path: en.Z5c.DISABLE_EMAIL_NOTIFICATIONS,
                    render: (e) => (0, r.jsx)(ev, el({}, e)),
                }),
                (0, r.jsx)(m.Z, {
                    path: en.Z5c.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS,
                    render: (e) => (0, r.jsx)(eb, el({}, e)),
                }),
                (0, r.jsx)(m.Z, {
                    path: en.Z5c.AUTHORIZE_IP,
                    render: (e) => (0, r.jsx)(ef, el({}, e)),
                }),
                (0, r.jsx)(m.Z, {
                    path: en.Z5c.REJECT_IP,
                    render: (e) => (0, r.jsx)(eE, el({ source: en.Z5c.REJECT_IP }, e)),
                }),
                (0, r.jsx)(m.Z, {
                    path: en.Z5c.REJECT_MFA,
                    render: (e) => (0, r.jsx)(eE, el({ source: en.Z5c.REJECT_MFA }, e)),
                }),
                (0, r.jsx)(m.Z, {
                    path: en.Z5c.AUTHORIZE_PAYMENT,
                    render: (e) => (0, r.jsx)(em, el({}, e)),
                }),
                (0, r.jsx)(m.Z, {
                    path: en.Z5c.RESET,
                    render: (e) => (0, r.jsx)(eE, el({ source: en.Z5c.RESET }, e)),
                }),
                (0, r.jsx)(m.Z, {
                    path: en.Z5c.PICK_GUILD_SETTINGS(":section?", ":subsection?"),
                    render: (e) => (0, r.jsx)(eS, el({}, e)),
                }),
                (0, r.jsx)(m.Z, {
                    path: en.Z5c.CHANNELS_GAME_SHOP(C.Hw.guildId(), ":pageIndex", ":skuId", ":slug?"),
                    render: (e) => (0, r.jsx)(ey, el({}, e)),
                }),
                (0, r.jsx)(m.Z, {
                    path: en.Z5c.CHANNEL(C.Hw.guildId(), C.Hw.channelId({ optional: !0 }), ":messageId?"),
                    render: (e) => (0, r.jsx)(eI, el({}, e)),
                }),
                (0, r.jsx)(m.Z, {
                    path: en.Z5c.REPORT,
                    render: (e) => (0, r.jsx)(eO, el({}, e)),
                }),
                (0, r.jsx)(m.Z, {
                    path: en.Z5c.REPORT_SECOND_LOOK,
                    render: (e) => (0, r.jsx)(eN, el({}, e)),
                }),
                (0, r.jsx)(m.Z, {
                    path: en.Z5c.ACCOUNT_REVERT(":token"),
                    render: (e) => (0, r.jsx)(eC, el({}, e)),
                }),
            ],
        });
    }
    constructor(...e) {
        super(...e),
            es(this, "state", {
                splash: null,
                redirectTo: null,
                backgroundId: null,
            });
    }
}
let eZ = c.ZP.connectStores([T.default, Z.Z, A.Z, b.Z, j.Z], (e) => {
    var t, n, r;
    let { match: i, location: s } = e,
        l = null == i || null == (t = i.params) ? void 0 : t.inviteCode,
        a = er.a ? er.Y : void 0,
        o = null != l ? (0, S.mb)(l, s.search) : a,
        c = null == i || null == (n = i.params) ? void 0 : n.giftCode,
        u = null == i || null == (r = i.params) ? void 0 : r.guildTemplateCode;
    return {
        inviteKey: o,
        isAuthenticated: T.default.isAuthenticated(),
        giftCode: c,
        guildTemplateCode: u,
        gift: null != c ? A.Z.get(c) : null,
        invite: null != o ? Z.Z.getInvite(o) : null,
        guildTemplate: null != u ? j.Z.getGuildTemplate(u) : null,
        hasLoadedExperiments: b.Z.hasLoadedExperiments,
    };
})(eA);
