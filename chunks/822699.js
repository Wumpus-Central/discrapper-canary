n.r(t), n.d(t, { default: () => eO }), n(35282), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(593473),
    s = n(990547),
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
    b = n(409059),
    I = n(962220),
    j = n(637776),
    N = n(264229),
    S = n(677760),
    O = n(893607),
    y = n(314897),
    C = n(82142),
    A = n(701190),
    T = n(626135),
    Z = n(81063),
    P = n(449934),
    R = n(768581),
    L = n(625054),
    w = n(320830),
    D = n(721751),
    k = n(223543),
    M = n(73906),
    U = n(299852),
    G = n(39514),
    B = n(236446),
    F = n(9325),
    z = n(344295),
    V = n(781428),
    K = n(209411),
    H = n(649156),
    W = n(423527),
    q = n(424044),
    Y = n(479495),
    J = n(264873),
    X = n(909223),
    Q = n(455502),
    $ = n(981631),
    ee = n(188785),
    et = n(245335);
function en(e, t, n) {
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
function er(e) {
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
                en(e, t, n[t]);
            });
    }
    return e;
}
function ei(e, t) {
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
let el = (0, w.Z)(V.Z),
    es = (0, w.Z)(K.Z),
    ea = (0, w.Z)(z.Z),
    eo = (0, w.Z)(B.Z),
    ec = (0, w.Z)(G.Z),
    eu = (0, w.Z)(S.Z),
    ed = (0, w.Z)(W.Z),
    eh = (0, w.Z)(J.Z),
    eg = (0, w.Z)(k.Z),
    em = (0, w.Z)(Q.Z),
    ep = (0, w.Z)(E.Z),
    ef = (0, w.Z)(Y.Z),
    e_ = (0, w.Z)(U.Z),
    ex = (0, w.Z)(x.Z),
    eE = (0, w.Z)(j.Z),
    ev = (0, w.Z)(M.Z),
    eb = (0, w.Z)(H.Z),
    eI = (0, w.Z)(X.Z),
    ej = (0, w.Z)(q.Z),
    eN = (0, w.Z)(p.Z);
class eS extends i.PureComponent {
    static getDerivedStateFromProps(e, t) {
        var n;
        let { invite: r, location: i } = e,
            { backgroundId: s } = t,
            a = null != (n = (0, l.parse)(i.search).redirect_to) ? n : null;
        (null == a || "" === a || !(0, o.B)(a) || a.startsWith($.Z5c.ME)) && (a = null);
        let c = null;
        if (null == r) c = (0, P.gK)(a);
        else if ((null == r ? void 0 : r.state) === $.r2o.RESOLVED) {
            let { guild: e, target_application: t } = r;
            null != t
                ? null != s && (c = (0, Z.xF)(t.id, s, 1024))
                : null != e &&
                  "string" == typeof e.splash &&
                  (c = R.ZP.getGuildSplashURL({
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
            T.default.track(
                $.rMx.INVITE_OPENED,
                {
                    invite_code: (0, N.jX)(e),
                    load_time: L.Z.getTimeSinceNavigationStart(),
                },
                { flush: !0 },
            )),
            (t || ee.a) && this.resolveInvite(),
            this.resolveGiftCode(),
            this.resolveGuildTemplate(),
            m.Z.initialize();
    }
    componentDidUpdate(e) {
        var t, n;
        e.hasLoadedExperiments || !this.props.hasLoadedExperiments || ee.a || this.resolveInvite(),
            (null == (t = e.invite) ? void 0 : t.state) !== (null == (n = this.props.invite) ? void 0 : n.state) &&
                this.maybeFetchApplicationSplash();
    }
    componentWillUnmount() {
        m.Z.terminate();
    }
    maybeFetchApplicationSplash() {
        let { invite: e } = this.props;
        if ((null == e ? void 0 : e.state) === $.r2o.RESOLVED) {
            let { target_application: t } = e;
            null != t &&
                (0, Z.hR)(t.id, ["embedded_splash"]).then((e) => {
                    let [t] = e;
                    return this.setState({ backgroundId: t });
                });
        }
    }
    async resolveInvite() {
        let { inviteKey: e } = this.props;
        if (null == e) return;
        let { invite: t } = await g.ZP.resolveInvite(e, $.Usc.INVITE);
        null != t && ((0, _.A)(t), null != t.type && et.xf.has(t.type) && g.ZP.openNativeAppModal(e));
    }
    resolveGuildTemplate() {
        let { guildTemplateCode: e } = this.props;
        null != e &&
            (T.default.track(
                $.rMx.GUILD_TEMPLATE_OPENED,
                {
                    guild_template_code: e,
                    load_time: L.Z.getTimeSinceNavigationStart(),
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
        return (0, r.jsxs)(D.Z, {
            splash: e,
            children: [
                (0, r.jsx)(f.Z, {
                    path: $.Z5c.LOGIN_HANDOFF,
                    render: (e) => (0, r.jsx)(es, ei(er({}, e), { redirectTo: t })),
                }),
                (0, r.jsx)(f.Z, {
                    impressionName: s.ImpressionNames.USER_LOGIN,
                    path: $.Z5c.LOGIN,
                    render: (e) => (0, r.jsx)(el, ei(er({}, e), { redirectTo: t })),
                }),
                (0, r.jsx)(f.Z, {
                    impressionName: s.ImpressionNames.USER_REGISTRATION,
                    path: $.Z5c.REGISTER,
                    render: (e) =>
                        ee.a
                            ? (0, r.jsx)(
                                  ea,
                                  ei(er({}, e), {
                                      redirectTo: t,
                                      inviteKey: n,
                                  }),
                              )
                            : (0, r.jsx)(ed, ei(er({}, e), { redirectTo: t })),
                }),
                (0, r.jsx)(f.Z, {
                    path: $.Z5c.GIFT_CODE_LOGIN(":giftCode"),
                    render: (e) => (0, r.jsx)(ec, er({ login: !0 }, e)),
                }),
                (0, r.jsx)(f.Z, {
                    path: $.Z5c.GIFT_CODE(":giftCode"),
                    render: (e) => (0, r.jsx)(ec, er({}, e)),
                }),
                (0, r.jsx)(f.Z, {
                    path: [$.Z5c.INVITE_LOGIN(":inviteCode"), $.Z5c.INVITE(":inviteCode")],
                    render: (e) => {
                        let {
                                match: {
                                    params: { inviteCode: t },
                                    path: n,
                                },
                                location: i,
                                transitionTo: l,
                            } = e,
                            s = (0, N.mb)(t, i.search);
                        return a.tq || a.Em
                            ? (0, r.jsx)(
                                  eu,
                                  {
                                      inviteKey: s,
                                      transitionTo: l,
                                  },
                                  s,
                              )
                            : (0, r.jsx)(ea, {
                                  inviteKey: s,
                                  location: i,
                                  transitionTo: l,
                                  login: n === $.Z5c.INVITE_LOGIN(":inviteCode"),
                              });
                    },
                }),
                (0, r.jsx)(f.Z, {
                    path: [
                        $.Z5c.GUILD_TEMPLATE_LOGIN(":guildTemplateCode"),
                        $.Z5c.GUILD_TEMPLATE(":guildTemplateCode"),
                    ],
                    render: (e) => {
                        let {
                            match: {
                                params: { guildTemplateCode: t },
                                path: n,
                            },
                            location: i,
                            transitionTo: l,
                        } = e;
                        return a.tq || a.Em
                            ? (0, r.jsx)(F.Z, { code: t }, t)
                            : (0, r.jsx)(eo, {
                                  code: t,
                                  location: i,
                                  transitionTo: l,
                                  login: n === $.Z5c.GUILD_TEMPLATE_LOGIN(":guildTemplateCode"),
                              });
                    },
                }),
                (0, r.jsx)(f.Z, {
                    path: $.Z5c.VERIFY,
                    render: (e) => (0, r.jsx)(em, er({}, e)),
                }),
                (0, r.jsx)(f.Z, {
                    path: $.Z5c.VERIFY_HUB_EMAIL,
                    render: (e) => (0, r.jsx)(eE, er({}, e)),
                }),
                (0, r.jsx)(f.Z, {
                    path: $.Z5c.VERIFY_REQUEST,
                    render: (e) => (0, r.jsx)(ep, er({}, e)),
                }),
                (0, r.jsx)(f.Z, {
                    path: $.Z5c.DISABLE_EMAIL_NOTIFICATIONS,
                    render: (e) => (0, r.jsx)(e_, er({}, e)),
                }),
                (0, r.jsx)(f.Z, {
                    path: $.Z5c.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS,
                    render: (e) => (0, r.jsx)(ex, er({}, e)),
                }),
                (0, r.jsx)(f.Z, {
                    path: $.Z5c.AUTHORIZE_IP,
                    render: (e) => (0, r.jsx)(eh, er({}, e)),
                }),
                (0, r.jsx)(f.Z, {
                    path: $.Z5c.REJECT_IP,
                    render: (e) => (0, r.jsx)(ef, er({ source: $.Z5c.REJECT_IP }, e)),
                }),
                (0, r.jsx)(f.Z, {
                    path: $.Z5c.REJECT_MFA,
                    render: (e) => (0, r.jsx)(ef, er({ source: $.Z5c.REJECT_MFA }, e)),
                }),
                (0, r.jsx)(f.Z, {
                    path: $.Z5c.AUTHORIZE_PAYMENT,
                    render: (e) => (0, r.jsx)(eg, er({}, e)),
                }),
                (0, r.jsx)(f.Z, {
                    path: $.Z5c.RESET,
                    render: (e) => (0, r.jsx)(ef, er({ source: $.Z5c.RESET }, e)),
                }),
                (0, r.jsx)(f.Z, {
                    path: $.Z5c.PICK_GUILD_SETTINGS(":section?", ":subsection?"),
                    render: (e) => (0, r.jsx)(eb, er({}, e)),
                }),
                (0, r.jsx)(f.Z, {
                    path: $.Z5c.CHANNEL(O.Hw.guildId(), O.Hw.channelId({ optional: !0 }), ":messageId?"),
                    render: (e) => (0, r.jsx)(ev, er({}, e)),
                }),
                (0, r.jsx)(f.Z, {
                    path: $.Z5c.REPORT,
                    render: (e) => (0, r.jsx)(eI, er({}, e)),
                }),
                (0, r.jsx)(f.Z, {
                    path: $.Z5c.REPORT_SECOND_LOOK,
                    render: (e) => (0, r.jsx)(ej, er({}, e)),
                }),
                (0, r.jsx)(f.Z, {
                    path: $.Z5c.ACCOUNT_REVERT(":token"),
                    render: (e) => (0, r.jsx)(eN, er({}, e)),
                }),
            ],
        });
    }
    constructor(...e) {
        super(...e),
            en(this, "state", {
                splash: null,
                redirectTo: null,
                backgroundId: null,
            });
    }
}
let eO = c.ZP.connectStores([y.default, A.Z, C.Z, v.Z, b.Z], (e) => {
    var t, n, r;
    let { match: i, location: l } = e,
        s = null == i || null == (t = i.params) ? void 0 : t.inviteCode,
        a = ee.a ? ee.Y : void 0,
        o = null != s ? (0, N.mb)(s, l.search) : a,
        c = null == i || null == (n = i.params) ? void 0 : n.giftCode,
        u = null == i || null == (r = i.params) ? void 0 : r.guildTemplateCode;
    return {
        inviteKey: o,
        isAuthenticated: y.default.isAuthenticated(),
        giftCode: c,
        guildTemplateCode: u,
        gift: null != c ? C.Z.get(c) : null,
        invite: null != o ? A.Z.getInvite(o) : null,
        guildTemplate: null != u ? b.Z.getGuildTemplate(u) : null,
        hasLoadedExperiments: v.Z.hasLoadedExperiments,
    };
})(eS);
