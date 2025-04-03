n.r(t), n.d(t, { default: () => eO }), n(301563), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(593473),
    a = n(990547),
    l = n(873546),
    s = n(442837),
    c = n(570140),
    u = n(893776),
    d = n(533307),
    p = n(447543),
    g = n(126399),
    h = n(521379),
    f = n(765717),
    m = n(267394),
    _ = n(761305),
    b = n(698177),
    x = n(353926),
    N = n(409059),
    v = n(962220),
    E = n(637776),
    I = n(264229),
    j = n(677760),
    S = n(893607),
    O = n(314897),
    C = n(82142),
    y = n(701190),
    T = n(626135),
    P = n(81063),
    A = n(449934),
    Z = n(768581),
    R = n(625054),
    w = n(645499),
    L = n(320830),
    D = n(721751),
    k = n(718182),
    W = n(223543),
    B = n(73906),
    M = n(299852),
    G = n(39514),
    U = n(236446),
    F = n(9325),
    z = n(344295),
    V = n(781428),
    H = n(209411),
    K = n(649156),
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
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function er(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
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
n(179645), s.ZP.initialize();
let eo = (0, L.Z)(V.Z),
    ea = (0, L.Z)(H.Z),
    el = (0, L.Z)(z.Z),
    es = (0, L.Z)(U.Z),
    ec = (0, L.Z)(G.Z),
    eu = (0, L.Z)(j.Z),
    ed = (0, L.Z)(q.Z),
    ep = (0, L.Z)(k.Z),
    eg = (0, L.Z)(W.Z),
    eh = (0, L.Z)(Q.Z),
    ef = (0, L.Z)(b.Z),
    em = (0, L.Z)(J.Z),
    e_ = (0, L.Z)(M.Z),
    eb = (0, L.Z)(_.Z),
    ex = (0, L.Z)(E.Z),
    eN = (0, L.Z)(B.Z),
    ev = (0, L.Z)(K.Z),
    eE = (0, L.Z)(X.Z),
    eI = (0, L.Z)(Y.Z),
    ej = (0, L.Z)(h.Z);
class eS extends i.PureComponent {
    static getDerivedStateFromProps(e, t) {
        var n;
        let { invite: r, location: i } = e,
            { backgroundId: a } = t,
            l = null != (n = (0, o.parse)(i.search).redirect_to) ? n : null;
        (null == l || '' === l || !(0, w.B)(l) || l.startsWith($.Z5c.ME)) && (l = null);
        let s = null;
        if (null == r) s = (0, A.gK)(l);
        else if ((null == r ? void 0 : r.state) === $.r2o.RESOLVED) {
            let { guild: e, target_application: t } = r;
            null != t
                ? null != a && (s = (0, P.xF)(t.id, a, 1024))
                : null != e &&
                  'string' == typeof e.splash &&
                  (s = Z.ZP.getGuildSplashURL({
                      id: e.id,
                      splash: e.splash
                  }));
        }
        return {
            redirectTo: l,
            splash: s
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
                    load_time: R.Z.getTimeSinceNavigationStart()
                },
                { flush: !0 }
            )),
            (t || ee.a) && this.resolveInvite(),
            this.resolveGiftCode(),
            this.resolveGuildTemplate(),
            g.Z.initialize();
    }
    componentDidUpdate(e) {
        var t, n;
        e.hasLoadedExperiments || !this.props.hasLoadedExperiments || ee.a || this.resolveInvite(), (null == (t = e.invite) ? void 0 : t.state) !== (null == (n = this.props.invite) ? void 0 : n.state) && this.maybeFetchApplicationSplash();
    }
    componentWillUnmount() {
        g.Z.terminate();
    }
    maybeFetchApplicationSplash() {
        let { invite: e } = this.props;
        if ((null == e ? void 0 : e.state) === $.r2o.RESOLVED) {
            let { target_application: t } = e;
            null != t &&
                (0, P.hR)(t.id, ['embedded_splash']).then((e) => {
                    let [t] = e;
                    return this.setState({ backgroundId: t });
                });
        }
    }
    async resolveInvite() {
        let { inviteKey: e } = this.props;
        if (null == e) return;
        let { invite: t } = await p.ZP.resolveInvite(e, $.Usc.INVITE);
        null != t && ((0, m.A)(t), null != t.type && et.xf.has(t.type) && p.ZP.openNativeAppModal(e));
    }
    resolveGuildTemplate() {
        let { guildTemplateCode: e } = this.props;
        null != e &&
            (T.default.track(
                $.rMx.GUILD_TEMPLATE_OPENED,
                {
                    guild_template_code: e,
                    load_time: R.Z.getTimeSinceNavigationStart()
                },
                { flush: !0 }
            ),
            v.Z.resolveGuildTemplate(e),
            v.Z.openNativeAppModal(e));
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
                    render: (e) => (0, r.jsx)(ea, ei(er({}, e), { redirectTo: t }))
                }),
                (0, r.jsx)(f.Z, {
                    impressionName: a.ImpressionNames.USER_LOGIN,
                    path: $.Z5c.LOGIN,
                    render: (e) => (0, r.jsx)(eo, ei(er({}, e), { redirectTo: t }))
                }),
                (0, r.jsx)(f.Z, {
                    impressionName: a.ImpressionNames.USER_REGISTRATION,
                    path: $.Z5c.REGISTER,
                    render: (e) =>
                        ee.a
                            ? (0, r.jsx)(
                                  el,
                                  ei(er({}, e), {
                                      redirectTo: t,
                                      inviteKey: n
                                  })
                              )
                            : (0, r.jsx)(ed, ei(er({}, e), { redirectTo: t }))
                }),
                (0, r.jsx)(f.Z, {
                    path: $.Z5c.GIFT_CODE_LOGIN(':giftCode'),
                    render: (e) => (0, r.jsx)(ec, er({ login: !0 }, e))
                }),
                (0, r.jsx)(f.Z, {
                    path: $.Z5c.GIFT_CODE(':giftCode'),
                    render: (e) => (0, r.jsx)(ec, er({}, e))
                }),
                (0, r.jsx)(f.Z, {
                    path: [$.Z5c.INVITE_LOGIN(':inviteCode'), $.Z5c.INVITE(':inviteCode')],
                    render: (e) => {
                        let {
                                match: {
                                    params: { inviteCode: t },
                                    path: n
                                },
                                location: i,
                                transitionTo: o
                            } = e,
                            a = (0, I.mb)(t, i.search);
                        return l.tq || l.Em
                            ? (0, r.jsx)(
                                  eu,
                                  {
                                      inviteKey: a,
                                      transitionTo: o
                                  },
                                  a
                              )
                            : (0, r.jsx)(el, {
                                  inviteKey: a,
                                  location: i,
                                  transitionTo: o,
                                  login: n === $.Z5c.INVITE_LOGIN(':inviteCode')
                              });
                    }
                }),
                (0, r.jsx)(f.Z, {
                    path: [$.Z5c.GUILD_TEMPLATE_LOGIN(':guildTemplateCode'), $.Z5c.GUILD_TEMPLATE(':guildTemplateCode')],
                    render: (e) => {
                        let {
                            match: {
                                params: { guildTemplateCode: t },
                                path: n
                            },
                            location: i,
                            transitionTo: o
                        } = e;
                        return l.tq || l.Em
                            ? (0, r.jsx)(F.Z, { code: t }, t)
                            : (0, r.jsx)(es, {
                                  code: t,
                                  location: i,
                                  transitionTo: o,
                                  login: n === $.Z5c.GUILD_TEMPLATE_LOGIN(':guildTemplateCode')
                              });
                    }
                }),
                (0, r.jsx)(f.Z, {
                    path: $.Z5c.VERIFY,
                    render: (e) => (0, r.jsx)(eh, er({}, e))
                }),
                (0, r.jsx)(f.Z, {
                    path: $.Z5c.VERIFY_HUB_EMAIL,
                    render: (e) => (0, r.jsx)(ex, er({}, e))
                }),
                (0, r.jsx)(f.Z, {
                    path: $.Z5c.VERIFY_REQUEST,
                    render: (e) => (0, r.jsx)(ef, er({}, e))
                }),
                (0, r.jsx)(f.Z, {
                    path: $.Z5c.DISABLE_EMAIL_NOTIFICATIONS,
                    render: (e) => (0, r.jsx)(e_, er({}, e))
                }),
                (0, r.jsx)(f.Z, {
                    path: $.Z5c.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS,
                    render: (e) => (0, r.jsx)(eb, er({}, e))
                }),
                (0, r.jsx)(f.Z, {
                    path: $.Z5c.AUTHORIZE_IP,
                    render: (e) => (0, r.jsx)(ep, er({}, e))
                }),
                (0, r.jsx)(f.Z, {
                    path: $.Z5c.REJECT_IP,
                    render: (e) => (0, r.jsx)(em, er({ source: $.Z5c.REJECT_IP }, e))
                }),
                (0, r.jsx)(f.Z, {
                    path: $.Z5c.REJECT_MFA,
                    render: (e) => (0, r.jsx)(em, er({ source: $.Z5c.REJECT_MFA }, e))
                }),
                (0, r.jsx)(f.Z, {
                    path: $.Z5c.AUTHORIZE_PAYMENT,
                    render: (e) => (0, r.jsx)(eg, er({}, e))
                }),
                (0, r.jsx)(f.Z, {
                    path: $.Z5c.RESET,
                    render: (e) => (0, r.jsx)(em, er({ source: $.Z5c.RESET }, e))
                }),
                (0, r.jsx)(f.Z, {
                    path: $.Z5c.PICK_GUILD_SETTINGS(':section?', ':subsection?'),
                    render: (e) => (0, r.jsx)(ev, er({}, e))
                }),
                (0, r.jsx)(f.Z, {
                    path: $.Z5c.CHANNEL(S.Hw.guildId(), S.Hw.channelId({ optional: !0 }), ':messageId?'),
                    render: (e) => (0, r.jsx)(eN, er({}, e))
                }),
                (0, r.jsx)(f.Z, {
                    path: $.Z5c.REPORT,
                    render: (e) => (0, r.jsx)(eE, er({}, e))
                }),
                (0, r.jsx)(f.Z, {
                    path: $.Z5c.REPORT_SECOND_LOOK,
                    render: (e) => (0, r.jsx)(eI, er({}, e))
                }),
                (0, r.jsx)(f.Z, {
                    path: $.Z5c.ACCOUNT_REVERT(':token'),
                    render: (e) => (0, r.jsx)(ej, er({}, e))
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            en(this, 'state', {
                splash: null,
                redirectTo: null,
                backgroundId: null
            });
    }
}
let eO = s.ZP.connectStores([O.default, y.Z, C.Z, x.Z, N.Z], (e) => {
    var t, n, r;
    let { match: i, location: o } = e,
        a = null == i || null == (t = i.params) ? void 0 : t.inviteCode,
        l = ee.a ? ee.Y : void 0,
        s = null != a ? (0, I.mb)(a, o.search) : l,
        c = null == i || null == (n = i.params) ? void 0 : n.giftCode,
        u = null == i || null == (r = i.params) ? void 0 : r.guildTemplateCode;
    return {
        inviteKey: s,
        isAuthenticated: O.default.isAuthenticated(),
        giftCode: c,
        guildTemplateCode: u,
        gift: null != c ? C.Z.get(c) : null,
        invite: null != s ? y.Z.getInvite(s) : null,
        guildTemplate: null != u ? N.Z.getGuildTemplate(u) : null,
        hasLoadedExperiments: x.Z.hasLoadedExperiments
    };
})(eS);
