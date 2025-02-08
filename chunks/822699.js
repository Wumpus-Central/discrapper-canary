n.r(t), n.d(t, { default: () => eN }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(593473),
    l = n(990547),
    o = n(873546),
    s = n(442837),
    c = n(570140),
    d = n(893776),
    u = n(533307),
    h = n(447543),
    _ = n(126399),
    g = n(521379),
    m = n(765717),
    p = n(267394),
    f = n(761305),
    E = n(698177),
    x = n(353926),
    I = n(409059),
    C = n(962220),
    v = n(637776),
    N = n(264229),
    b = n(677760),
    S = n(893607),
    T = n(314897),
    A = n(82142),
    R = n(701190),
    Z = n(626135),
    j = n(81063),
    O = n(449934),
    L = n(768581),
    y = n(625054),
    P = n(645499),
    k = n(320830),
    D = n(721751),
    w = n(718182),
    B = n(223543),
    U = n(73906),
    M = n(299852),
    G = n(39514),
    F = n(236446),
    z = n(9325),
    V = n(344295),
    K = n(781428),
    H = n(209411),
    W = n(649156),
    Y = n(423527),
    q = n(424044),
    J = n(479495),
    X = n(881317),
    Q = n(886806),
    $ = n(981631),
    ee = n(188785),
    et = n(245335);
n(179645), s.ZP.initialize();
let en = (0, k.Z)(K.Z),
    ei = (0, k.Z)(H.Z),
    er = (0, k.Z)(V.Z),
    ea = (0, k.Z)(F.Z),
    el = (0, k.Z)(G.Z),
    eo = (0, k.Z)(b.Z),
    es = (0, k.Z)(Y.Z),
    ec = (0, k.Z)(w.Z),
    ed = (0, k.Z)(B.Z),
    eu = (0, k.Z)(Q.Z),
    eh = (0, k.Z)(E.Z),
    e_ = (0, k.Z)(J.Z),
    eg = (0, k.Z)(M.Z),
    em = (0, k.Z)(f.Z),
    ep = (0, k.Z)(v.Z),
    ef = (0, k.Z)(U.Z),
    eE = (0, k.Z)(W.Z),
    ex = (0, k.Z)(X.Z),
    eI = (0, k.Z)(q.Z),
    eC = (0, k.Z)(g.Z);
class ev extends r.PureComponent {
    static getDerivedStateFromProps(e, t) {
        var n;
        let { invite: i, location: r } = e,
            { backgroundId: l } = t,
            o = null !== (n = (0, a.parse)(r.search).redirect_to) && void 0 !== n ? n : null;
        (null == o || '' === o || !(0, P.B)(o) || o.startsWith($.Z5c.ME)) && (o = null);
        let s = null;
        if (null == i) s = (0, O.gK)(o);
        else if ((null == i ? void 0 : i.state) === $.r2o.RESOLVED) {
            let { guild: e, target_application: t } = i;
            null != t
                ? null != l && (s = (0, j.getAssetImage)(t.id, l, 1024))
                : null != e &&
                  'string' == typeof e.splash &&
                  (s = L.ZP.getGuildSplashURL({
                      id: e.id,
                      splash: e.splash
                  }));
        }
        return {
            redirectTo: o,
            splash: s
        };
    }
    componentDidMount() {
        let { inviteKey: e, hasLoadedExperiments: t, isAuthenticated: n } = this.props;
        null != e &&
            (!t && n && d.Z.getExperiments(!0),
            Z.default.track(
                $.rMx.INVITE_OPENED,
                {
                    invite_code: (0, N.jX)(e),
                    load_time: y.Z.getTimeSinceNavigationStart()
                },
                { flush: !0 }
            )),
            (t || ee.a) && this.resolveInvite(),
            this.resolveGiftCode(),
            this.resolveGuildTemplate(),
            _.Z.initialize();
    }
    componentDidUpdate(e) {
        var t, n;
        e.hasLoadedExperiments || !this.props.hasLoadedExperiments || ee.a || this.resolveInvite(), (null === (t = e.invite) || void 0 === t ? void 0 : t.state) !== (null === (n = this.props.invite) || void 0 === n ? void 0 : n.state) && this.maybeFetchApplicationSplash();
    }
    componentWillUnmount() {
        _.Z.terminate();
    }
    maybeFetchApplicationSplash() {
        let { invite: e } = this.props;
        if ((null == e ? void 0 : e.state) === $.r2o.RESOLVED) {
            let { target_application: t } = e;
            null != t &&
                (0, j.fetchAssetIds)(t.id, ['embedded_splash']).then((e) => {
                    let [t] = e;
                    return this.setState({ backgroundId: t });
                });
        }
    }
    async resolveInvite() {
        let { inviteKey: e } = this.props;
        if (null == e) return;
        let { invite: t } = await h.Z.resolveInvite(e, $.Usc.INVITE);
        null != t && ((0, p.A)(t), null != t.type && et.xf.has(t.type) && h.Z.openNativeAppModal(e));
    }
    resolveGuildTemplate() {
        let { guildTemplateCode: e } = this.props;
        null != e &&
            (Z.default.track(
                $.rMx.GUILD_TEMPLATE_OPENED,
                {
                    guild_template_code: e,
                    load_time: y.Z.getTimeSinceNavigationStart()
                },
                { flush: !0 }
            ),
            C.Z.resolveGuildTemplate(e),
            C.Z.openNativeAppModal(e));
    }
    resolveGiftCode() {
        let { giftCode: e } = this.props;
        null != e &&
            u.Z.resolveGiftCode(e, !0, !0).then((t) => {
                null != t && null == t.giftCode.promotion && c.Z.wait(() => u.Z.openNativeGiftCodeModal(e));
            });
    }
    render() {
        let { splash: e, redirectTo: t } = this.state,
            { inviteKey: n } = this.props;
        return (0, i.jsxs)(D.Z, {
            splash: e,
            children: [
                (0, i.jsx)(m.Z, {
                    path: $.Z5c.LOGIN_HANDOFF,
                    render: (e) =>
                        (0, i.jsx)(ei, {
                            ...e,
                            redirectTo: t
                        })
                }),
                (0, i.jsx)(m.Z, {
                    impressionName: l.ImpressionNames.USER_LOGIN,
                    path: $.Z5c.LOGIN,
                    render: (e) =>
                        (0, i.jsx)(en, {
                            ...e,
                            redirectTo: t
                        })
                }),
                (0, i.jsx)(m.Z, {
                    impressionName: l.ImpressionNames.USER_REGISTRATION,
                    path: $.Z5c.REGISTER,
                    render: (e) =>
                        ee.a
                            ? (0, i.jsx)(er, {
                                  ...e,
                                  redirectTo: t,
                                  inviteKey: n
                              })
                            : (0, i.jsx)(es, {
                                  ...e,
                                  redirectTo: t
                              })
                }),
                (0, i.jsx)(m.Z, {
                    path: $.Z5c.GIFT_CODE_LOGIN(':giftCode'),
                    render: (e) =>
                        (0, i.jsx)(el, {
                            login: !0,
                            ...e
                        })
                }),
                (0, i.jsx)(m.Z, {
                    path: $.Z5c.GIFT_CODE(':giftCode'),
                    render: (e) => (0, i.jsx)(el, { ...e })
                }),
                (0, i.jsx)(m.Z, {
                    path: [$.Z5c.INVITE_LOGIN(':inviteCode'), $.Z5c.INVITE(':inviteCode')],
                    render: (e) => {
                        let {
                                match: {
                                    params: { inviteCode: t },
                                    path: n
                                },
                                location: r,
                                transitionTo: a
                            } = e,
                            l = (0, N.mb)(t, r.search);
                        return o.tq || o.Em
                            ? (0, i.jsx)(
                                  eo,
                                  {
                                      inviteKey: l,
                                      transitionTo: a
                                  },
                                  l
                              )
                            : (0, i.jsx)(er, {
                                  inviteKey: l,
                                  location: r,
                                  transitionTo: a,
                                  login: n === $.Z5c.INVITE_LOGIN(':inviteCode')
                              });
                    }
                }),
                (0, i.jsx)(m.Z, {
                    path: [$.Z5c.GUILD_TEMPLATE_LOGIN(':guildTemplateCode'), $.Z5c.GUILD_TEMPLATE(':guildTemplateCode')],
                    render: (e) => {
                        let {
                            match: {
                                params: { guildTemplateCode: t },
                                path: n
                            },
                            location: r,
                            transitionTo: a
                        } = e;
                        return o.tq || o.Em
                            ? (0, i.jsx)(z.Z, { code: t }, t)
                            : (0, i.jsx)(ea, {
                                  code: t,
                                  location: r,
                                  transitionTo: a,
                                  login: n === $.Z5c.GUILD_TEMPLATE_LOGIN(':guildTemplateCode')
                              });
                    }
                }),
                (0, i.jsx)(m.Z, {
                    path: $.Z5c.VERIFY,
                    render: (e) => (0, i.jsx)(eu, { ...e })
                }),
                (0, i.jsx)(m.Z, {
                    path: $.Z5c.VERIFY_HUB_EMAIL,
                    render: (e) => (0, i.jsx)(ep, { ...e })
                }),
                (0, i.jsx)(m.Z, {
                    path: $.Z5c.VERIFY_REQUEST,
                    render: (e) => (0, i.jsx)(eh, { ...e })
                }),
                (0, i.jsx)(m.Z, {
                    path: $.Z5c.DISABLE_EMAIL_NOTIFICATIONS,
                    render: (e) => (0, i.jsx)(eg, { ...e })
                }),
                (0, i.jsx)(m.Z, {
                    path: $.Z5c.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS,
                    render: (e) => (0, i.jsx)(em, { ...e })
                }),
                (0, i.jsx)(m.Z, {
                    path: $.Z5c.AUTHORIZE_IP,
                    render: (e) => (0, i.jsx)(ec, { ...e })
                }),
                (0, i.jsx)(m.Z, {
                    path: $.Z5c.REJECT_IP,
                    render: (e) =>
                        (0, i.jsx)(e_, {
                            source: $.Z5c.REJECT_IP,
                            ...e
                        })
                }),
                (0, i.jsx)(m.Z, {
                    path: $.Z5c.REJECT_MFA,
                    render: (e) =>
                        (0, i.jsx)(e_, {
                            source: $.Z5c.REJECT_MFA,
                            ...e
                        })
                }),
                (0, i.jsx)(m.Z, {
                    path: $.Z5c.AUTHORIZE_PAYMENT,
                    render: (e) => (0, i.jsx)(ed, { ...e })
                }),
                (0, i.jsx)(m.Z, {
                    path: $.Z5c.RESET,
                    render: (e) =>
                        (0, i.jsx)(e_, {
                            source: $.Z5c.RESET,
                            ...e
                        })
                }),
                (0, i.jsx)(m.Z, {
                    path: $.Z5c.PICK_GUILD_SETTINGS(':section?', ':subsection?'),
                    render: (e) => (0, i.jsx)(eE, { ...e })
                }),
                (0, i.jsx)(m.Z, {
                    path: $.Z5c.CHANNEL(S.Hw.guildId(), S.Hw.channelId({ optional: !0 }), ':messageId?'),
                    render: (e) => (0, i.jsx)(ef, { ...e })
                }),
                (0, i.jsx)(m.Z, {
                    path: $.Z5c.REPORT,
                    render: (e) => (0, i.jsx)(ex, { ...e })
                }),
                (0, i.jsx)(m.Z, {
                    path: $.Z5c.REPORT_SECOND_LOOK,
                    render: (e) => (0, i.jsx)(eI, { ...e })
                }),
                (0, i.jsx)(m.Z, {
                    path: $.Z5c.ACCOUNT_REVERT(':token'),
                    render: (e) => (0, i.jsx)(eC, { ...e })
                })
            ]
        });
    }
    constructor(...e) {
        var t, n;
        super(...e),
            (n = {
                splash: null,
                redirectTo: null,
                backgroundId: null
            }),
            (t = 'state') in this
                ? Object.defineProperty(this, t, {
                      value: n,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (this[t] = n);
    }
}
let eN = s.ZP.connectStores([T.default, R.Z, A.Z, x.Z, I.Z], (e) => {
    var t, n, i;
    let { match: r, location: a } = e,
        l = null == r ? void 0 : null === (t = r.params) || void 0 === t ? void 0 : t.inviteCode,
        o = ee.a ? ee.Y : void 0,
        s = null != l ? (0, N.mb)(l, a.search) : o,
        c = null == r ? void 0 : null === (n = r.params) || void 0 === n ? void 0 : n.giftCode,
        d = null == r ? void 0 : null === (i = r.params) || void 0 === i ? void 0 : i.guildTemplateCode;
    return {
        inviteKey: s,
        isAuthenticated: T.default.isAuthenticated(),
        giftCode: c,
        guildTemplateCode: d,
        gift: null != c ? A.Z.get(c) : null,
        invite: null != s ? R.Z.getInvite(s) : null,
        guildTemplate: null != d ? I.Z.getGuildTemplate(d) : null,
        hasLoadedExperiments: x.Z.hasLoadedExperiments
    };
})(ev);
