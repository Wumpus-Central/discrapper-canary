n.r(t), n.d(t, { default: () => eN }), n(47120);
var i = n(200651),
    r = n(192379),
    l = n(593473),
    a = n(990547),
    o = n(873546),
    s = n(442837),
    c = n(570140),
    d = n(893776),
    u = n(533307),
    h = n(447543),
    _ = n(126399),
    m = n(521379),
    g = n(765717),
    p = n(267394),
    f = n(761305),
    E = n(698177),
    x = n(353926),
    I = n(409059),
    C = n(962220),
    v = n(637776),
    N = n(264229),
    S = n(677760),
    T = n(893607),
    A = n(314897),
    b = n(82142),
    R = n(701190),
    Z = n(626135),
    O = n(81063),
    j = n(449934),
    L = n(768581),
    y = n(625054),
    P = n(645499),
    D = n(320830),
    k = n(721751),
    w = n(718182),
    B = n(223543),
    U = n(73906),
    M = n(299852),
    G = n(39514),
    F = n(236446),
    z = n(9325),
    V = n(344295),
    H = n(781428),
    K = n(209411),
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
let en = (0, D.Z)(H.Z),
    ei = (0, D.Z)(K.Z),
    er = (0, D.Z)(V.Z),
    el = (0, D.Z)(F.Z),
    ea = (0, D.Z)(G.Z),
    eo = (0, D.Z)(S.Z),
    es = (0, D.Z)(Y.Z),
    ec = (0, D.Z)(w.Z),
    ed = (0, D.Z)(B.Z),
    eu = (0, D.Z)(Q.Z),
    eh = (0, D.Z)(E.Z),
    e_ = (0, D.Z)(J.Z),
    em = (0, D.Z)(M.Z),
    eg = (0, D.Z)(f.Z),
    ep = (0, D.Z)(v.Z),
    ef = (0, D.Z)(U.Z),
    eE = (0, D.Z)(W.Z),
    ex = (0, D.Z)(X.Z),
    eI = (0, D.Z)(q.Z),
    eC = (0, D.Z)(m.Z);
class ev extends r.PureComponent {
    static getDerivedStateFromProps(e, t) {
        var n;
        let { invite: i, location: r } = e,
            { backgroundId: a } = t,
            o = null !== (n = (0, l.parse)(r.search).redirect_to) && void 0 !== n ? n : null;
        (null == o || '' === o || !(0, P.B)(o) || o.startsWith($.Z5c.ME)) && (o = null);
        let s = null;
        if (null == i) s = (0, j.gK)(o);
        else if ((null == i ? void 0 : i.state) === $.r2o.RESOLVED) {
            let { guild: e, target_application: t } = i;
            null != t
                ? null != a && (s = (0, O.getAssetImage)(t.id, a, 1024))
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
                (0, O.fetchAssetIds)(t.id, ['embedded_splash']).then((e) => {
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
        return (0, i.jsxs)(k.Z, {
            splash: e,
            children: [
                (0, i.jsx)(g.Z, {
                    path: $.Z5c.LOGIN_HANDOFF,
                    render: (e) =>
                        (0, i.jsx)(ei, {
                            ...e,
                            redirectTo: t
                        })
                }),
                (0, i.jsx)(g.Z, {
                    impressionName: a.ImpressionNames.USER_LOGIN,
                    path: $.Z5c.LOGIN,
                    render: (e) =>
                        (0, i.jsx)(en, {
                            ...e,
                            redirectTo: t
                        })
                }),
                (0, i.jsx)(g.Z, {
                    impressionName: a.ImpressionNames.USER_REGISTRATION,
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
                (0, i.jsx)(g.Z, {
                    path: $.Z5c.GIFT_CODE_LOGIN(':giftCode'),
                    render: (e) =>
                        (0, i.jsx)(ea, {
                            login: !0,
                            ...e
                        })
                }),
                (0, i.jsx)(g.Z, {
                    path: $.Z5c.GIFT_CODE(':giftCode'),
                    render: (e) => (0, i.jsx)(ea, { ...e })
                }),
                (0, i.jsx)(g.Z, {
                    path: [$.Z5c.INVITE_LOGIN(':inviteCode'), $.Z5c.INVITE(':inviteCode')],
                    render: (e) => {
                        let {
                                match: {
                                    params: { inviteCode: t },
                                    path: n
                                },
                                location: r,
                                transitionTo: l
                            } = e,
                            a = (0, N.mb)(t, r.search);
                        return o.tq || o.Em
                            ? (0, i.jsx)(
                                  eo,
                                  {
                                      inviteKey: a,
                                      transitionTo: l
                                  },
                                  a
                              )
                            : (0, i.jsx)(er, {
                                  inviteKey: a,
                                  location: r,
                                  transitionTo: l,
                                  login: n === $.Z5c.INVITE_LOGIN(':inviteCode')
                              });
                    }
                }),
                (0, i.jsx)(g.Z, {
                    path: [$.Z5c.GUILD_TEMPLATE_LOGIN(':guildTemplateCode'), $.Z5c.GUILD_TEMPLATE(':guildTemplateCode')],
                    render: (e) => {
                        let {
                            match: {
                                params: { guildTemplateCode: t },
                                path: n
                            },
                            location: r,
                            transitionTo: l
                        } = e;
                        return o.tq || o.Em
                            ? (0, i.jsx)(z.Z, { code: t }, t)
                            : (0, i.jsx)(el, {
                                  code: t,
                                  location: r,
                                  transitionTo: l,
                                  login: n === $.Z5c.GUILD_TEMPLATE_LOGIN(':guildTemplateCode')
                              });
                    }
                }),
                (0, i.jsx)(g.Z, {
                    path: $.Z5c.VERIFY,
                    render: (e) => (0, i.jsx)(eu, { ...e })
                }),
                (0, i.jsx)(g.Z, {
                    path: $.Z5c.VERIFY_HUB_EMAIL,
                    render: (e) => (0, i.jsx)(ep, { ...e })
                }),
                (0, i.jsx)(g.Z, {
                    path: $.Z5c.VERIFY_REQUEST,
                    render: (e) => (0, i.jsx)(eh, { ...e })
                }),
                (0, i.jsx)(g.Z, {
                    path: $.Z5c.DISABLE_EMAIL_NOTIFICATIONS,
                    render: (e) => (0, i.jsx)(em, { ...e })
                }),
                (0, i.jsx)(g.Z, {
                    path: $.Z5c.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS,
                    render: (e) => (0, i.jsx)(eg, { ...e })
                }),
                (0, i.jsx)(g.Z, {
                    path: $.Z5c.AUTHORIZE_IP,
                    render: (e) => (0, i.jsx)(ec, { ...e })
                }),
                (0, i.jsx)(g.Z, {
                    path: $.Z5c.REJECT_IP,
                    render: (e) =>
                        (0, i.jsx)(e_, {
                            source: $.Z5c.REJECT_IP,
                            ...e
                        })
                }),
                (0, i.jsx)(g.Z, {
                    path: $.Z5c.REJECT_MFA,
                    render: (e) =>
                        (0, i.jsx)(e_, {
                            source: $.Z5c.REJECT_MFA,
                            ...e
                        })
                }),
                (0, i.jsx)(g.Z, {
                    path: $.Z5c.AUTHORIZE_PAYMENT,
                    render: (e) => (0, i.jsx)(ed, { ...e })
                }),
                (0, i.jsx)(g.Z, {
                    path: $.Z5c.RESET,
                    render: (e) =>
                        (0, i.jsx)(e_, {
                            source: $.Z5c.RESET,
                            ...e
                        })
                }),
                (0, i.jsx)(g.Z, {
                    path: $.Z5c.PICK_GUILD_SETTINGS(':section?', ':subsection?'),
                    render: (e) => (0, i.jsx)(eE, { ...e })
                }),
                (0, i.jsx)(g.Z, {
                    path: $.Z5c.CHANNEL(T.Hw.guildId(), T.Hw.channelId({ optional: !0 }), ':messageId?'),
                    render: (e) => (0, i.jsx)(ef, { ...e })
                }),
                (0, i.jsx)(g.Z, {
                    path: $.Z5c.REPORT,
                    render: (e) => (0, i.jsx)(ex, { ...e })
                }),
                (0, i.jsx)(g.Z, {
                    path: $.Z5c.REPORT_SECOND_LOOK,
                    render: (e) => (0, i.jsx)(eI, { ...e })
                }),
                (0, i.jsx)(g.Z, {
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
let eN = s.ZP.connectStores([A.default, R.Z, b.Z, x.Z, I.Z], (e) => {
    var t, n, i;
    let { match: r, location: l } = e,
        a = null == r ? void 0 : null === (t = r.params) || void 0 === t ? void 0 : t.inviteCode,
        o = ee.a ? ee.Y : void 0,
        s = null != a ? (0, N.mb)(a, l.search) : o,
        c = null == r ? void 0 : null === (n = r.params) || void 0 === n ? void 0 : n.giftCode,
        d = null == r ? void 0 : null === (i = r.params) || void 0 === i ? void 0 : i.guildTemplateCode;
    return {
        inviteKey: s,
        isAuthenticated: A.default.isAuthenticated(),
        giftCode: c,
        guildTemplateCode: d,
        gift: null != c ? b.Z.get(c) : null,
        invite: null != s ? R.Z.getInvite(s) : null,
        guildTemplate: null != d ? I.Z.getGuildTemplate(d) : null,
        hasLoadedExperiments: x.Z.hasLoadedExperiments
    };
})(ev);
