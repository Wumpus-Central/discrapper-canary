n.r(t), n.d(t, { default: () => eN }), n(35282), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(593473),
    a = n(990547),
    s = n(873546),
    o = n(442837),
    c = n(570140),
    u = n(893776),
    d = n(533307),
    h = n(447543),
    p = n(126399),
    m = n(521379),
    f = n(765717),
    g = n(267394),
    _ = n(761305),
    x = n(698177),
    b = n(353926),
    v = n(409059),
    E = n(962220),
    j = n(637776),
    I = n(264229),
    y = n(677760),
    O = n(893607),
    N = n(314897),
    S = n(82142),
    C = n(701190),
    T = n(626135),
    A = n(81063),
    Z = n(449934),
    P = n(768581),
    R = n(625054),
    w = n(645499),
    L = n(320830),
    D = n(721751),
    k = n(718182),
    M = n(223543),
    B = n(73906),
    U = n(299852),
    F = n(39514),
    G = n(236446),
    z = n(9325),
    V = n(344295),
    H = n(781428),
    K = n(209411),
    W = n(649156),
    q = n(423527),
    Y = n(424044),
    J = n(479495),
    X = n(881317),
    Q = n(886806),
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
n(179645), o.ZP.initialize();
let el = (0, L.Z)(H.Z),
    ea = (0, L.Z)(K.Z),
    es = (0, L.Z)(V.Z),
    eo = (0, L.Z)(G.Z),
    ec = (0, L.Z)(F.Z),
    eu = (0, L.Z)(y.Z),
    ed = (0, L.Z)(q.Z),
    eh = (0, L.Z)(k.Z),
    ep = (0, L.Z)(M.Z),
    em = (0, L.Z)(Q.Z),
    ef = (0, L.Z)(x.Z),
    eg = (0, L.Z)(J.Z),
    e_ = (0, L.Z)(U.Z),
    ex = (0, L.Z)(_.Z),
    eb = (0, L.Z)(j.Z),
    ev = (0, L.Z)(B.Z),
    eE = (0, L.Z)(W.Z),
    ej = (0, L.Z)(X.Z),
    eI = (0, L.Z)(Y.Z),
    ey = (0, L.Z)(m.Z);
class eO extends i.PureComponent {
    static getDerivedStateFromProps(e, t) {
        var n;
        let { invite: r, location: i } = e,
            { backgroundId: a } = t,
            s = null != (n = (0, l.parse)(i.search).redirect_to) ? n : null;
        (null == s || "" === s || !(0, w.B)(s) || s.startsWith($.Z5c.ME)) && (s = null);
        let o = null;
        if (null == r) o = (0, Z.gK)(s);
        else if ((null == r ? void 0 : r.state) === $.r2o.RESOLVED) {
            let { guild: e, target_application: t } = r;
            null != t
                ? null != a && (o = (0, A.xF)(t.id, a, 1024))
                : null != e &&
                  "string" == typeof e.splash &&
                  (o = P.ZP.getGuildSplashURL({
                      id: e.id,
                      splash: e.splash,
                  }));
        }
        return {
            redirectTo: s,
            splash: o,
        };
    }
    componentDidMount() {
        let { inviteKey: e, hasLoadedExperiments: t, isAuthenticated: n } = this.props;
        null != e &&
            (!t && n && u.Z.getExperiments(!0),
            T.default.track(
                $.rMx.INVITE_OPENED,
                {
                    invite_code: (0, I.jX)(e),
                    load_time: R.Z.getTimeSinceNavigationStart(),
                },
                { flush: !0 },
            )),
            (t || ee.a) && this.resolveInvite(),
            this.resolveGiftCode(),
            this.resolveGuildTemplate(),
            p.Z.initialize();
    }
    componentDidUpdate(e) {
        var t, n;
        e.hasLoadedExperiments || !this.props.hasLoadedExperiments || ee.a || this.resolveInvite(),
            (null == (t = e.invite) ? void 0 : t.state) !== (null == (n = this.props.invite) ? void 0 : n.state) &&
                this.maybeFetchApplicationSplash();
    }
    componentWillUnmount() {
        p.Z.terminate();
    }
    maybeFetchApplicationSplash() {
        let { invite: e } = this.props;
        if ((null == e ? void 0 : e.state) === $.r2o.RESOLVED) {
            let { target_application: t } = e;
            null != t &&
                (0, A.hR)(t.id, ["embedded_splash"]).then((e) => {
                    let [t] = e;
                    return this.setState({ backgroundId: t });
                });
        }
    }
    async resolveInvite() {
        let { inviteKey: e } = this.props;
        if (null == e) return;
        let { invite: t } = await h.ZP.resolveInvite(e, $.Usc.INVITE);
        null != t && ((0, g.A)(t), null != t.type && et.xf.has(t.type) && h.ZP.openNativeAppModal(e));
    }
    resolveGuildTemplate() {
        let { guildTemplateCode: e } = this.props;
        null != e &&
            (T.default.track(
                $.rMx.GUILD_TEMPLATE_OPENED,
                {
                    guild_template_code: e,
                    load_time: R.Z.getTimeSinceNavigationStart(),
                },
                { flush: !0 },
            ),
            E.Z.resolveGuildTemplate(e),
            E.Z.openNativeAppModal(e));
    }
    resolveGiftCode() {
        let { giftCode: e } = this.props;
        null != e &&
            d.Z.resolveGiftCode(e, !0, !0).then((t) => {
                null != t && null == t.giftCode.promotion && c.Z.wait(() => d.Z.openNativeGiftCodeModal(e));
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
                    render: (e) => (0, r.jsx)(ea, ei(er({}, e), { redirectTo: t })),
                }),
                (0, r.jsx)(f.Z, {
                    impressionName: a.ImpressionNames.USER_LOGIN,
                    path: $.Z5c.LOGIN,
                    render: (e) => (0, r.jsx)(el, ei(er({}, e), { redirectTo: t })),
                }),
                (0, r.jsx)(f.Z, {
                    impressionName: a.ImpressionNames.USER_REGISTRATION,
                    path: $.Z5c.REGISTER,
                    render: (e) =>
                        ee.a
                            ? (0, r.jsx)(
                                  es,
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
                            a = (0, I.mb)(t, i.search);
                        return s.tq || s.Em
                            ? (0, r.jsx)(
                                  eu,
                                  {
                                      inviteKey: a,
                                      transitionTo: l,
                                  },
                                  a,
                              )
                            : (0, r.jsx)(es, {
                                  inviteKey: a,
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
                        return s.tq || s.Em
                            ? (0, r.jsx)(z.Z, { code: t }, t)
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
                    render: (e) => (0, r.jsx)(eb, er({}, e)),
                }),
                (0, r.jsx)(f.Z, {
                    path: $.Z5c.VERIFY_REQUEST,
                    render: (e) => (0, r.jsx)(ef, er({}, e)),
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
                    render: (e) => (0, r.jsx)(eg, er({ source: $.Z5c.REJECT_IP }, e)),
                }),
                (0, r.jsx)(f.Z, {
                    path: $.Z5c.REJECT_MFA,
                    render: (e) => (0, r.jsx)(eg, er({ source: $.Z5c.REJECT_MFA }, e)),
                }),
                (0, r.jsx)(f.Z, {
                    path: $.Z5c.AUTHORIZE_PAYMENT,
                    render: (e) => (0, r.jsx)(ep, er({}, e)),
                }),
                (0, r.jsx)(f.Z, {
                    path: $.Z5c.RESET,
                    render: (e) => (0, r.jsx)(eg, er({ source: $.Z5c.RESET }, e)),
                }),
                (0, r.jsx)(f.Z, {
                    path: $.Z5c.PICK_GUILD_SETTINGS(":section?", ":subsection?"),
                    render: (e) => (0, r.jsx)(eE, er({}, e)),
                }),
                (0, r.jsx)(f.Z, {
                    path: $.Z5c.CHANNEL(O.Hw.guildId(), O.Hw.channelId({ optional: !0 }), ":messageId?"),
                    render: (e) => (0, r.jsx)(ev, er({}, e)),
                }),
                (0, r.jsx)(f.Z, {
                    path: $.Z5c.REPORT,
                    render: (e) => (0, r.jsx)(ej, er({}, e)),
                }),
                (0, r.jsx)(f.Z, {
                    path: $.Z5c.REPORT_SECOND_LOOK,
                    render: (e) => (0, r.jsx)(eI, er({}, e)),
                }),
                (0, r.jsx)(f.Z, {
                    path: $.Z5c.ACCOUNT_REVERT(":token"),
                    render: (e) => (0, r.jsx)(ey, er({}, e)),
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
let eN = o.ZP.connectStores([N.default, C.Z, S.Z, b.Z, v.Z], (e) => {
    var t, n, r;
    let { match: i, location: l } = e,
        a = null == i || null == (t = i.params) ? void 0 : t.inviteCode,
        s = ee.a ? ee.Y : void 0,
        o = null != a ? (0, I.mb)(a, l.search) : s,
        c = null == i || null == (n = i.params) ? void 0 : n.giftCode,
        u = null == i || null == (r = i.params) ? void 0 : r.guildTemplateCode;
    return {
        inviteKey: o,
        isAuthenticated: N.default.isAuthenticated(),
        giftCode: c,
        guildTemplateCode: u,
        gift: null != c ? S.Z.get(c) : null,
        invite: null != o ? C.Z.getInvite(o) : null,
        guildTemplate: null != u ? v.Z.getGuildTemplate(u) : null,
        hasLoadedExperiments: b.Z.hasLoadedExperiments,
    };
})(eO);
