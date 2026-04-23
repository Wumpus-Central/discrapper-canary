"use strict";
n.r(t), n.d(t, { default: () => ey });
var i = n(627968),
    s = n(64700),
    r = n(492462),
    l = n(110259),
    a = n(607399),
    o = n(470562),
    c = n(311907),
    d = n(73153),
    u = n(830215),
    _ = n(869038),
    h = n(846293),
    m = n(526423),
    g = n(745399),
    p = n(549711),
    A = n(829691),
    f = n(212640),
    E = n(409934),
    x = n(7936),
    I = n(49463),
    v = n(122906),
    N = n(121623),
    j = n(850381),
    C = n(21599),
    T = n(614986),
    y = n(957622),
    b = n(463347),
    S = n(210714),
    R = n(887324),
    O = n(961350),
    L = n(30793),
    w = n(299091),
    k = n(954571),
    G = n(139675),
    D = n(612181),
    P = n(486020),
    U = n(952072),
    B = n(765624),
    M = n(603647),
    V = n(527567),
    F = n(826515),
    W = n(126912),
    H = n(216894),
    z = n(170159),
    K = n(187035),
    Q = n(565505),
    Y = n(111549),
    q = n(129851),
    X = n(459893),
    $ = n(883257),
    Z = n(229),
    J = n(466133),
    ee = n(163050),
    et = n(420382),
    en = n(340451),
    ei = n(652215);
n(436317);
var es = n(172799);
n(426620), c.Ay.initialize();
let er = (0, B.A)(q.A),
    el = (0, B.A)(X.A),
    ea = (0, B.A)(Y.A),
    eo = (0, B.A)(K.A),
    ec = (0, B.A)(z.A),
    ed = (0, B.A)(T.A),
    eu = (0, B.A)(Z.A),
    e_ = (0, B.A)(et.A),
    eh = (0, B.A)(V.A),
    em = (0, B.A)(en.A),
    eg = (0, B.A)(x.A),
    ep = (0, B.A)(ee.A),
    eA = (0, B.A)(W.A),
    ef = (0, B.A)(E.A),
    eE = (0, B.A)(j.A),
    ex = (0, B.A)(F.A),
    eI = (0, B.A)(H.A),
    ev = (0, B.A)($.A),
    eN = (0, B.A)(J.A),
    ej = (0, B.A)(g.A),
    eC = (0, B.A)(y.A);
class eT extends s.PureComponent {
    state = { splash: null, redirectTo: null, backgroundId: null };
    static getDerivedStateFromProps(e, t) {
        let { invite: n, location: i } = e,
            { backgroundId: s } = t,
            l = (0, r.parse)(i.search).redirect_to ?? null;
        (null == l || "" === l || l.startsWith(ei.BVt.ME) || (!(0, o.e)(l) && !(0, f.RZ)(l))) && (l = null);
        let a = null;
        if (null == n) a = (0, D.u8)(l);
        else if (n?.state === ei.elq.RESOLVED) {
            let { guild: e, target_application: t } = n;
            null != t
                ? null != s && (a = (0, G.uD)(t.id, s, 1024))
                : null != e &&
                  "string" == typeof e.splash &&
                  (a = P.Ay.getGuildSplashURL({ id: e.id, splash: e.splash }));
        }
        return { redirectTo: l, splash: a };
    }
    componentDidMount() {
        let { inviteKey: e, hasLoadedExperiments: t, isAuthenticated: n } = this.props;
        null != e &&
            (!t && n && u.A.getExperiments(!0),
            k.default.track(
                ei.HAw.INVITE_OPENED,
                { invite_code: (0, C.m0)(e), load_time: U.A.getTimeSinceNavigationStart() },
                { flush: !0 },
            )),
            t && this.resolveInvite(),
            this.resolveGiftCode(),
            this.resolveGuildTemplate(),
            m.A.initialize(),
            (0, S.D)();
    }
    componentDidUpdate(e) {
        !e.hasLoadedExperiments && this.props.hasLoadedExperiments && this.resolveInvite(),
            e.invite?.state !== this.props.invite?.state && this.maybeFetchApplicationSplash();
    }
    componentWillUnmount() {
        m.A.terminate();
    }
    maybeFetchApplicationSplash() {
        let { invite: e } = this.props;
        if (e?.state === ei.elq.RESOLVED) {
            let { target_application: t } = e;
            null != t &&
                (0, G.RG)(t.id, ["embedded_splash"]).then((e) => {
                    let [t] = e;
                    return this.setState({ backgroundId: t });
                });
        }
    }
    async resolveInvite() {
        let { inviteKey: e } = this.props;
        if (null == e) return;
        let { invite: t } = await h.Ay.resolveInvite(e, ei.S3d.INVITE);
        null != t && ((0, A.v)(t), null != t.type && es.uR.has(t.type) && h.Ay.openNativeAppModal(e));
    }
    resolveGuildTemplate() {
        let { guildTemplateCode: e } = this.props;
        null != e &&
            (k.default.track(
                ei.HAw.GUILD_TEMPLATE_OPENED,
                { guild_template_code: e, load_time: U.A.getTimeSinceNavigationStart() },
                { flush: !0 },
            ),
            N.A.resolveGuildTemplate(e),
            N.A.openNativeAppModal(e));
    }
    resolveGiftCode() {
        let { giftCode: e } = this.props;
        null != e &&
            _.A.resolveGiftCode(e, !0, !0).then((t) => {
                null != t && null == t.giftCode.promotion && d.h.wait(() => _.A.openNativeGiftCodeModal(e));
            });
    }
    render() {
        let { splash: e, redirectTo: t } = this.state,
            { inviteKey: n } = this.props;
        return (0, i.jsxs)(M.A, {
            splash: e,
            children: [
                (0, i.jsx)(p.A, { path: ei.BVt.LOGIN_HANDOFF, render: (e) => (0, i.jsx)(el, { ...e, redirectTo: t }) }),
                (0, i.jsx)(p.A, { path: ei.BVt.LOGIN_ONE_TIME, render: (e) => (0, i.jsx)(eC, { ...e }) }),
                (0, i.jsx)(p.A, {
                    impressionName: l.ImpressionNames.USER_LOGIN,
                    path: ei.BVt.LOGIN,
                    render: (e) => (0, i.jsx)(er, { ...e, redirectTo: t }),
                }),
                (0, i.jsx)(p.A, {
                    impressionName: l.ImpressionNames.USER_REGISTRATION,
                    path: ei.BVt.REGISTER,
                    render: (e) => (0, i.jsx)(eu, { ...e, redirectTo: t }),
                }),
                (0, i.jsx)(p.A, {
                    path: ei.BVt.GIFT_CODE_LOGIN(":giftCode"),
                    render: (e) => (0, i.jsx)(ec, { login: !0, ...e }),
                }),
                (0, i.jsx)(p.A, { path: ei.BVt.GIFT_CODE(":giftCode"), render: (e) => (0, i.jsx)(ec, { ...e }) }),
                (0, i.jsx)(p.A, {
                    path: [ei.BVt.INVITE_LOGIN(":inviteCode"), ei.BVt.INVITE(":inviteCode")],
                    render: (e) => {
                        let {
                                match: {
                                    params: { inviteCode: t },
                                    path: n,
                                },
                                location: s,
                                transitionTo: r,
                            } = e,
                            l = (0, C.fB)(t, s.search);
                        return a.Fr || a.v1
                            ? (0, i.jsx)(ed, { inviteKey: l, transitionTo: r }, l)
                            : (0, i.jsx)(
                                  ea,
                                  {
                                      inviteKey: l,
                                      location: s,
                                      transitionTo: r,
                                      login: n === ei.BVt.INVITE_LOGIN(":inviteCode"),
                                  },
                                  l,
                              );
                    },
                }),
                (0, i.jsx)(p.A, {
                    path: [
                        ei.BVt.GUILD_TEMPLATE_LOGIN(":guildTemplateCode"),
                        ei.BVt.GUILD_TEMPLATE(":guildTemplateCode"),
                    ],
                    render: (e) => {
                        let {
                            match: {
                                params: { guildTemplateCode: t },
                                path: n,
                            },
                            location: s,
                            transitionTo: r,
                        } = e;
                        return a.Fr || a.v1
                            ? (0, i.jsx)(Q.A, { code: t }, t)
                            : (0, i.jsx)(eo, {
                                  code: t,
                                  location: s,
                                  transitionTo: r,
                                  login: n === ei.BVt.GUILD_TEMPLATE_LOGIN(":guildTemplateCode"),
                              });
                    },
                }),
                (0, i.jsx)(p.A, { path: ei.BVt.VERIFY, render: (e) => (0, i.jsx)(em, { ...e }) }),
                (0, i.jsx)(p.A, { path: ei.BVt.VERIFY_HUB_EMAIL, render: (e) => (0, i.jsx)(eE, { ...e }) }),
                (0, i.jsx)(p.A, { path: ei.BVt.VERIFY_REQUEST, render: (e) => (0, i.jsx)(eg, { ...e }) }),
                (0, i.jsx)(p.A, { path: ei.BVt.DISABLE_EMAIL_NOTIFICATIONS, render: (e) => (0, i.jsx)(eA, { ...e }) }),
                (0, i.jsx)(p.A, {
                    path: ei.BVt.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS,
                    render: (e) => (0, i.jsx)(ef, { ...e }),
                }),
                (0, i.jsx)(p.A, { path: ei.BVt.AUTHORIZE_IP, render: (e) => (0, i.jsx)(e_, { ...e }) }),
                (0, i.jsx)(p.A, {
                    path: ei.BVt.REJECT_IP,
                    render: (e) => (0, i.jsx)(ep, { source: ei.BVt.REJECT_IP, ...e }),
                }),
                (0, i.jsx)(p.A, {
                    path: ei.BVt.REJECT_MFA,
                    render: (e) => (0, i.jsx)(ep, { source: ei.BVt.REJECT_MFA, ...e }),
                }),
                (0, i.jsx)(p.A, { path: ei.BVt.AUTHORIZE_PAYMENT, render: (e) => (0, i.jsx)(eh, { ...e }) }),
                (0, i.jsx)(p.A, { path: ei.BVt.RESET, render: (e) => (0, i.jsx)(ep, { source: ei.BVt.RESET, ...e }) }),
                (0, i.jsx)(p.A, {
                    path: ei.BVt.PICK_GUILD_SETTINGS(":section?", ":subsection?"),
                    render: (e) => (0, i.jsx)(ev, { ...e }),
                }),
                (0, i.jsx)(p.A, {
                    path: ei.BVt.CHANNELS_GAME_SHOP(b.pv.guildId(), ":pageIndex", ":skuId", ":slug?"),
                    render: (e) => (0, i.jsx)(eI, { ...e }),
                }),
                (0, i.jsx)(p.A, {
                    path: ei.BVt.CHANNEL(b.pv.guildId(), b.pv.channelId({ optional: !0 }), ":messageId?"),
                    render: (e) => (0, i.jsx)(ex, { ...e }),
                }),
                (0, i.jsx)(p.A, { path: ei.BVt.REPORT, render: () => (0, i.jsx)(R.Kz, {}) }),
                (0, i.jsx)(p.A, { path: ei.BVt.REPORT_SECOND_LOOK, render: (e) => (0, i.jsx)(eN, { ...e }) }),
                (0, i.jsx)(p.A, { path: ei.BVt.ACCOUNT_REVERT(":token"), render: (e) => (0, i.jsx)(ej, { ...e }) }),
            ],
        });
    }
}
let ey = c.Ay.connectStores([O.default, w.A, L.A, I.A, v.A], (e) => {
    let { match: t, location: n } = e,
        i = t?.params?.inviteCode,
        s = null != i ? (0, C.fB)(i, n.search) : void 0,
        r = t?.params?.giftCode,
        l = t?.params?.guildTemplateCode;
    return {
        inviteKey: s,
        isAuthenticated: O.default.isAuthenticated(),
        giftCode: r,
        guildTemplateCode: l,
        gift: null != r ? L.A.get(r) : null,
        invite: null != s ? w.A.getInvite(s) : null,
        guildTemplate: null != l ? v.A.getGuildTemplate(l) : null,
        hasLoadedExperiments: I.A.hasLoadedExperiments,
    };
})(eT);
