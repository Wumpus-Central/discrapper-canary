n.r(t), n.d(t, { default: () => eA }), n(35282), n(388685);
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
    m = n(521379),
    f = n(765717),
    _ = n(267394),
    x = n(761305),
    E = n(698177),
    v = n(353926),
    b = n(409059),
    j = n(962220),
    I = n(637776),
    y = n(264229),
    S = n(677760),
    O = n(360887),
    N = n(893607),
    C = n(314897),
    T = n(82142),
    A = n(701190),
    Z = n(626135),
    P = n(81063),
    R = n(449934),
    L = n(768581),
    w = n(625054),
    k = n(320830),
    D = n(721751),
    M = n(223543),
    B = n(73906),
    U = n(299852),
    G = n(939900),
    F = n(39514),
    V = n(236446),
    W = n(9325),
    H = n(344295),
    K = n(781428),
    z = n(209411),
    q = n(649156),
    Y = n(423527),
    J = n(424044),
    Q = n(479495),
    X = n(264873),
    $ = n(909223),
    ee = n(455502),
    et = n(981631),
    en = n(188785),
    er = n(245335);
function ei(e, t, n) {
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
function es(e) {
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
                ei(e, t, n[t]);
            });
    }
    return e;
}
function el(e, t) {
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
let ea = (0, k.Z)(K.Z),
    eo = (0, k.Z)(z.Z),
    ec = (0, k.Z)(H.Z),
    eu = (0, k.Z)(V.Z),
    ed = (0, k.Z)(F.Z),
    eh = (0, k.Z)(S.Z),
    eg = (0, k.Z)(Y.Z),
    ep = (0, k.Z)(X.Z),
    em = (0, k.Z)(M.Z),
    ef = (0, k.Z)(ee.Z),
    e_ = (0, k.Z)(E.Z),
    ex = (0, k.Z)(Q.Z),
    eE = (0, k.Z)(U.Z),
    ev = (0, k.Z)(x.Z),
    eb = (0, k.Z)(I.Z),
    ej = (0, k.Z)(B.Z),
    eI = (0, k.Z)(G.Z),
    ey = (0, k.Z)(q.Z),
    eS = (0, k.Z)($.Z),
    eO = (0, k.Z)(J.Z),
    eN = (0, k.Z)(m.Z),
    eC = (0, k.Z)(O.Z);
class eT extends i.PureComponent {
    static getDerivedStateFromProps(e, t) {
        var n;
        let { invite: r, location: i } = e,
            { backgroundId: l } = t,
            a = null != (n = (0, s.parse)(i.search).redirect_to) ? n : null;
        (null == a || "" === a || !(0, o.B)(a) || a.startsWith(et.Z5c.ME)) && (a = null);
        let c = null;
        if (null == r) c = (0, R.gK)(a);
        else if ((null == r ? void 0 : r.state) === et.r2o.RESOLVED) {
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
                et.rMx.INVITE_OPENED,
                {
                    invite_code: (0, y.jX)(e),
                    load_time: w.Z.getTimeSinceNavigationStart(),
                },
                { flush: !0 },
            )),
            (t || en.a) && this.resolveInvite(),
            this.resolveGiftCode(),
            this.resolveGuildTemplate(),
            p.Z.initialize();
    }
    componentDidUpdate(e) {
        var t, n;
        e.hasLoadedExperiments || !this.props.hasLoadedExperiments || en.a || this.resolveInvite(),
            (null == (t = e.invite) ? void 0 : t.state) !== (null == (n = this.props.invite) ? void 0 : n.state) &&
                this.maybeFetchApplicationSplash();
    }
    componentWillUnmount() {
        p.Z.terminate();
    }
    maybeFetchApplicationSplash() {
        let { invite: e } = this.props;
        if ((null == e ? void 0 : e.state) === et.r2o.RESOLVED) {
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
        let { invite: t } = await g.ZP.resolveInvite(e, et.Usc.INVITE);
        null != t && ((0, _.A)(t), null != t.type && er.xf.has(t.type) && g.ZP.openNativeAppModal(e));
    }
    resolveGuildTemplate() {
        let { guildTemplateCode: e } = this.props;
        null != e &&
            (Z.default.track(
                et.rMx.GUILD_TEMPLATE_OPENED,
                {
                    guild_template_code: e,
                    load_time: w.Z.getTimeSinceNavigationStart(),
                },
                { flush: !0 },
            ),
            j.Z.resolveGuildTemplate(e),
            j.Z.openNativeAppModal(e));
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
        return (0, r.jsxs)(D.Z, {
            splash: e,
            children: [
                (0, r.jsx)(f.Z, {
                    path: et.Z5c.LOGIN_HANDOFF,
                    render: (e) => (0, r.jsx)(eo, el(es({}, e), { redirectTo: t })),
                }),
                (0, r.jsx)(f.Z, {
                    path: et.Z5c.LOGIN_ONE_TIME,
                    render: (e) => (0, r.jsx)(eC, es({}, e)),
                }),
                (0, r.jsx)(f.Z, {
                    impressionName: l.ImpressionNames.USER_LOGIN,
                    path: et.Z5c.LOGIN,
                    render: (e) => (0, r.jsx)(ea, el(es({}, e), { redirectTo: t })),
                }),
                (0, r.jsx)(f.Z, {
                    impressionName: l.ImpressionNames.USER_REGISTRATION,
                    path: et.Z5c.REGISTER,
                    render: (e) =>
                        en.a
                            ? (0, r.jsx)(
                                  ec,
                                  el(es({}, e), {
                                      redirectTo: t,
                                      inviteKey: n,
                                  }),
                              )
                            : (0, r.jsx)(eg, el(es({}, e), { redirectTo: t })),
                }),
                (0, r.jsx)(f.Z, {
                    path: et.Z5c.GIFT_CODE_LOGIN(":giftCode"),
                    render: (e) => (0, r.jsx)(ed, es({ login: !0 }, e)),
                }),
                (0, r.jsx)(f.Z, {
                    path: et.Z5c.GIFT_CODE(":giftCode"),
                    render: (e) => (0, r.jsx)(ed, es({}, e)),
                }),
                (0, r.jsx)(f.Z, {
                    path: [et.Z5c.INVITE_LOGIN(":inviteCode"), et.Z5c.INVITE(":inviteCode")],
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
                                  eh,
                                  {
                                      inviteKey: l,
                                      transitionTo: s,
                                  },
                                  l,
                              )
                            : (0, r.jsx)(ec, {
                                  inviteKey: l,
                                  location: i,
                                  transitionTo: s,
                                  login: n === et.Z5c.INVITE_LOGIN(":inviteCode"),
                              });
                    },
                }),
                (0, r.jsx)(f.Z, {
                    path: [
                        et.Z5c.GUILD_TEMPLATE_LOGIN(":guildTemplateCode"),
                        et.Z5c.GUILD_TEMPLATE(":guildTemplateCode"),
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
                            ? (0, r.jsx)(W.Z, { code: t }, t)
                            : (0, r.jsx)(eu, {
                                  code: t,
                                  location: i,
                                  transitionTo: s,
                                  login: n === et.Z5c.GUILD_TEMPLATE_LOGIN(":guildTemplateCode"),
                              });
                    },
                }),
                (0, r.jsx)(f.Z, {
                    path: et.Z5c.VERIFY,
                    render: (e) => (0, r.jsx)(ef, es({}, e)),
                }),
                (0, r.jsx)(f.Z, {
                    path: et.Z5c.VERIFY_HUB_EMAIL,
                    render: (e) => (0, r.jsx)(eb, es({}, e)),
                }),
                (0, r.jsx)(f.Z, {
                    path: et.Z5c.VERIFY_REQUEST,
                    render: (e) => (0, r.jsx)(e_, es({}, e)),
                }),
                (0, r.jsx)(f.Z, {
                    path: et.Z5c.DISABLE_EMAIL_NOTIFICATIONS,
                    render: (e) => (0, r.jsx)(eE, es({}, e)),
                }),
                (0, r.jsx)(f.Z, {
                    path: et.Z5c.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS,
                    render: (e) => (0, r.jsx)(ev, es({}, e)),
                }),
                (0, r.jsx)(f.Z, {
                    path: et.Z5c.AUTHORIZE_IP,
                    render: (e) => (0, r.jsx)(ep, es({}, e)),
                }),
                (0, r.jsx)(f.Z, {
                    path: et.Z5c.REJECT_IP,
                    render: (e) => (0, r.jsx)(ex, es({ source: et.Z5c.REJECT_IP }, e)),
                }),
                (0, r.jsx)(f.Z, {
                    path: et.Z5c.REJECT_MFA,
                    render: (e) => (0, r.jsx)(ex, es({ source: et.Z5c.REJECT_MFA }, e)),
                }),
                (0, r.jsx)(f.Z, {
                    path: et.Z5c.AUTHORIZE_PAYMENT,
                    render: (e) => (0, r.jsx)(em, es({}, e)),
                }),
                (0, r.jsx)(f.Z, {
                    path: et.Z5c.RESET,
                    render: (e) => (0, r.jsx)(ex, es({ source: et.Z5c.RESET }, e)),
                }),
                (0, r.jsx)(f.Z, {
                    path: et.Z5c.PICK_GUILD_SETTINGS(":section?", ":subsection?"),
                    render: (e) => (0, r.jsx)(ey, es({}, e)),
                }),
                (0, r.jsx)(f.Z, {
                    path: et.Z5c.CHANNELS_GAME_SHOP(N.Hw.guildId(), ":pageIndex", ":skuId", ":slug?"),
                    render: (e) => (0, r.jsx)(eI, es({}, e)),
                }),
                (0, r.jsx)(f.Z, {
                    path: et.Z5c.CHANNEL(N.Hw.guildId(), N.Hw.channelId({ optional: !0 }), ":messageId?"),
                    render: (e) => (0, r.jsx)(ej, es({}, e)),
                }),
                (0, r.jsx)(f.Z, {
                    path: et.Z5c.REPORT,
                    render: (e) => (0, r.jsx)(eS, es({}, e)),
                }),
                (0, r.jsx)(f.Z, {
                    path: et.Z5c.REPORT_SECOND_LOOK,
                    render: (e) => (0, r.jsx)(eO, es({}, e)),
                }),
                (0, r.jsx)(f.Z, {
                    path: et.Z5c.ACCOUNT_REVERT(":token"),
                    render: (e) => (0, r.jsx)(eN, es({}, e)),
                }),
            ],
        });
    }
    constructor(...e) {
        super(...e),
            ei(this, "state", {
                splash: null,
                redirectTo: null,
                backgroundId: null,
            });
    }
}
let eA = c.ZP.connectStores([C.default, A.Z, T.Z, v.Z, b.Z], (e) => {
    var t, n, r;
    let { match: i, location: s } = e,
        l = null == i || null == (t = i.params) ? void 0 : t.inviteCode,
        a = en.a ? en.Y : void 0,
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
        guildTemplate: null != u ? b.Z.getGuildTemplate(u) : null,
        hasLoadedExperiments: v.Z.hasLoadedExperiments,
    };
})(eT);
