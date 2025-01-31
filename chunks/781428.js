n.d(t, {
    Z: () => X,
    q: () => Y
});
var i,
    r = n(200651),
    l = n(192379),
    a = n(533126),
    o = n(120356),
    s = n.n(o),
    c = n(593473),
    d = n(873546),
    u = n(442837),
    h = n(481060),
    _ = n(570140),
    g = n(893776),
    p = n(899742),
    m = n(579806),
    f = n(743142),
    E = n(254942),
    I = n(388905),
    x = n(379760),
    C = n(600164),
    N = n(100159),
    v = n(473855),
    T = n(124860),
    S = n(86779),
    A = n(726745),
    b = n(913583),
    Z = n(144114),
    R = n(541692),
    L = n(952802),
    j = n(108427),
    O = n(365007),
    P = n(314897),
    y = n(117240),
    D = n(896797),
    k = n(626135),
    U = n(585483),
    w = n(358085),
    B = n(481153),
    M = n(588705),
    G = n(494526),
    F = n(163671),
    z = n(981631),
    H = n(58346),
    V = n(388032),
    K = n(32817),
    W = n(232186);
function q(e, t, n) {
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
function Y() {
    return (0, r.jsx)(I.ZP, { children: (0, r.jsx)(h.$jN, {}) });
}
class J extends (i = l.PureComponent) {
    static getDerivedStateFromProps(e) {
        let { handoffAvailable: t, authenticated: n } = e;
        return t || n ? null : { checkingHandoff: !1 };
    }
    componentDidMount() {
        let { handoffAvailable: e, authenticated: t, giftCodeSKU: n, invite: i, location: r } = this.props;
        e && !t ? (0, p.is)() : t && this.loginOrSSO(t, r, !0),
            k.default.track(
                z.rMx.LOGIN_VIEWED,
                {
                    location: null != i ? 'Invite Login Page' : 'Non-Invite Login Page',
                    login_source: this.loginSource,
                    authenticated: t,
                    ...(null != n ? (0, N.Z)(n, !1, !1) : {})
                },
                { flush: !0 }
            ),
            null == m.Z &&
                null != window.PublicKeyCredential &&
                null != PublicKeyCredential.isConditionalMediationAvailable &&
                PublicKeyCredential.isConditionalMediationAvailable().then((e) => {
                    e &&
                        (0, O.us)()
                            .then((e) => {
                                let { challenge: t, ticket: n } = e,
                                    i = (0, a.wz)(JSON.parse(t));
                                return (
                                    (i.signal = this.state.conditionalMediationAbortController.signal),
                                    (0, a.U2)(i)
                                        .then(
                                            (e) => (
                                                this.setState({ errors: {} }),
                                                _.Z.dispatch({ type: 'PASSWORDLESS_START' }),
                                                g.Z.loginWebAuthn({
                                                    ticket: n,
                                                    credential: JSON.stringify(e),
                                                    source: this.loginSource,
                                                    giftCodeSKUId: this.giftCodeSKUId
                                                }).catch((e) => {
                                                    throw (this.setState({ errors: (0, E.F)(e) }), e);
                                                })
                                            )
                                        )
                                        .catch((e) => {
                                            if ('AbortError' !== e.name) throw e;
                                        })
                                );
                            })
                            .catch(() => {});
                }),
            g.Z.getLocationMetadata(),
            (0, j.e)('login');
    }
    componentDidUpdate(e, t) {
        let { authenticated: n, location: i } = this.props,
            { checkingHandoff: r } = this.state;
        if ((!n || e.authenticated || r || (this.state.conditionalMediationAbortController.abort(), this.loginOrSSO(n, i)), t.errors !== this.state.errors)) {
            var l, a, o;
            this.hasError('password') ? null === (l = this.passwordRef) || void 0 === l || l.focus() : this.hasError('email') || this.hasError('login') ? null === (a = this.loginRef) || void 0 === a || a.focus() : this.hasError('code') && (null === (o = this.codeRef) || void 0 === o || o.focus());
        }
    }
    get loginSource() {
        let { giftCode: e, guildTemplate: t, invite: n, loginSource: i, redirectTo: r } = this.props;
        if (null != i) return i;
        if (null != e) return 'gift';
        if (null != t) return 'guild_template';
        if (null != n) {
            if (null != n.guild) return 'guild_invite';
            if (null != n.channel) return 'dm_invite';
            if (null != n.inviter) return 'friend_invite';
        }
        return null != r ? (0, f.L)(r) : null;
    }
    get giftCodeSKUId() {
        let { giftCode: e } = this.props;
        return null != e ? e.skuId : null;
    }
    get canShowChooseAccount() {
        return this.props.hasLoggedInAccounts;
    }
    loginOrSSO(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        e && null != t && (this.setState({ redirecting: !0 }), n ? g.Z.verifySSOToken().then(() => this.transitionSSO(t)) : this.transitionSSO(t));
    }
    transitionSSO(e) {
        let { transitionTo: t, redirectTo: n, replaceWith: i } = this.props,
            r = null != e ? (0, c.parse)(e.search) : {};
        if ((delete r.redirect_to, null != n)) null != i ? i(n) : t(n);
        else if (null == r.service) t(z.Z5c.APP);
        else {
            let e = window.location.protocol + window.GLOBAL_ENV.API_ENDPOINT + z.ANM.SSO,
                t = {
                    ...r,
                    token: P.default.getToken()
                };
            window.location = ''.concat(e, '?').concat((0, c.stringify)(t));
        }
    }
    hasError(e) {
        return null != this.state.errors[e];
    }
    renderHandOffAvailable() {
        let { authBoxClassName: e } = this.props;
        return (0, r.jsxs)(I.ZP, {
            className: e,
            children: [
                (0, r.jsx)(I.Hh, {}),
                (0, r.jsx)(I.Dx, {
                    className: W.marginBottom8,
                    children: V.intl.string(V.t.S6RMND)
                }),
                (0, r.jsx)(I.DK, { children: V.intl.string(V.t.YZiJbm) })
            ]
        });
    }
    renderHandOffContinue() {
        let { user: e, transitionTo: t, authBoxClassName: n } = this.props;
        return null == e
            ? null
            : (0, r.jsxs)(I.ZP, {
                  className: n,
                  children: [
                      (0, r.jsx)(I.qE, {
                          src: e.getAvatarURL(void 0, 100),
                          size: h.EFr.DEPRECATED_SIZE_100,
                          className: W.marginBottom20
                      }),
                      (0, r.jsx)(I.Dx, {
                          className: W.marginBottom8,
                          children: V.intl.format(V.t.ot19ho, { name: e.toString() })
                      }),
                      (0, r.jsx)(I.DK, {
                          className: W.marginBottom40,
                          children: V.intl.string(V.t['2xkqzc'])
                      }),
                      (0, r.jsxs)(I.gO, {
                          children: [
                              (0, r.jsx)(I.zx, {
                                  onClick: () => t(z.Z5c.APP),
                                  className: W.marginBottom8,
                                  children: V.intl.format(V.t.fohtv7, { name: e.toString() })
                              }),
                              (0, r.jsx)(I.zx, {
                                  look: I.zx.Looks.LINK,
                                  color: I.zx.Colors.LINK,
                                  onClick: this.handleReset,
                                  children: V.intl.string(V.t.nO564e)
                              })
                          ]
                      })
                  ]
              });
    }
    renderDisabledAccount() {
        let { authBoxClassName: e } = this.props,
            t = this.props.loginStatus === z.u34.ACCOUNT_DISABLED,
            n = t ? V.intl.string(V.t['j3rC+f']) : V.intl.string(V.t.ZFWofn),
            i = t ? V.intl.string(V.t['6eNTWV']) : V.intl.string(V.t.pCBti4);
        return (0, r.jsx)(I.ZP, {
            tag: 'form',
            onSubmit: this.handleReset,
            className: e,
            children: (0, r.jsxs)(h.y5t, {
                component: (0, r.jsx)(I.Dx, {
                    className: W.marginBottom8,
                    children: n
                }),
                children: [
                    (0, r.jsx)(I.DK, {
                        className: W.marginBottom20,
                        children: i
                    }),
                    (0, r.jsxs)(I.gO, {
                        children: [
                            (0, r.jsx)(I.zx, {
                                color: I.zx.Colors.BRAND,
                                type: 'submit',
                                children: V.intl.string(V.t.JhDw5u)
                            }),
                            (0, r.jsx)('div', {
                                className: s()(W.marginTop8, K.needAccount),
                                children: V.intl.format(V.t.js2rr6, { onClick: this.handleCancelAccountDeletion })
                            })
                        ]
                    })
                ]
            })
        });
    }
    renderResolving() {
        let { authBoxClassName: e, country: t } = this.props;
        return (0, r.jsxs)(I.ZP, {
            className: e,
            children: [
                (0, r.jsx)(M.R, {}),
                (0, r.jsxs)(I.gO, {
                    className: W.marginTop20,
                    children: [
                        (0, r.jsx)(L.Z, {
                            className: W.marginBottom20,
                            alpha2: t.alpha2,
                            countryCode: t.code.split(' ')[0],
                            label: V.intl.string(V.t.tUjnxs),
                            onChange: (e, t) =>
                                this.setState({
                                    login: e,
                                    loginPrefix: t
                                }),
                            setRef: this.setLoginRef,
                            autoCapitalize: 'none',
                            autoComplete: 'off',
                            autoCorrect: 'off',
                            spellCheck: 'false',
                            value: this.state.login,
                            autoFocus: !0,
                            required: !0
                        }),
                        (0, r.jsx)(I.II, {
                            className: W.marginBottom20,
                            label: V.intl.string(V.t['CIGa+/']),
                            onChange: (e) => this.setState({ password: e }),
                            type: 'password',
                            setRef: this.setPasswordRef,
                            autoComplete: 'off',
                            spellCheck: 'false',
                            value: this.state.password,
                            required: !0
                        }),
                        (0, r.jsx)(I.zx, {
                            className: W.marginBottom8,
                            type: 'submit',
                            disabled: !0,
                            children: V.intl.string(V.t.dKhVQE)
                        }),
                        (0, r.jsx)(I.zx, {
                            disabled: !0,
                            look: I.zx.Looks.LINK,
                            color: I.zx.Colors.LINK,
                            children: V.intl.string(V.t.wWIufn)
                        }),
                        (0, r.jsx)(I.zx, {
                            disabled: !0,
                            className: W.marginTop4,
                            look: I.zx.Looks.LINK,
                            color: I.zx.Colors.LINK,
                            children: V.intl.string(V.t.tmE73t)
                        })
                    ]
                })
            ]
        });
    }
    renderDefaultForm(e) {
        var t;
        let n;
        let { invite: i, giftCode: l, loginStatus: a, country: o, showMobileWebHandoff: c, disableAutofocusOnDefaultForm: d } = this.props,
            u = !this.hasError('email') && this.hasError('password'),
            _ = (null == i ? void 0 : i.stage_instance) != null;
        return (
            (n =
                null == i || _
                    ? null != l
                        ? (0, r.jsx)(B.Z, { giftCode: l })
                        : (0, r.jsxs)('div', {
                              className: K.header,
                              children: [
                                  (0, r.jsx)(
                                      I.Dx,
                                      {
                                          className: W.marginBottom8,
                                          children: V.intl.string(V.t['7fNJgI'])
                                      },
                                      'title'
                                  ),
                                  !1 === (0, w.isAndroidWeb)() ? (0, r.jsx)(I.DK, { children: V.intl.string(V.t.euS7r6) }, 'subtitle') : null
                              ]
                          })
                    : (0, r.jsx)(M.Z, { invite: i })),
            (0, r.jsxs)(
                C.Z,
                {
                    direction: C.Z.Direction.HORIZONTAL,
                    align: C.Z.Align.CENTER,
                    children: [
                        (0, r.jsxs)('div', {
                            className: K.mainLoginContainer,
                            children: [
                                this.canShowChooseAccount &&
                                    this.state.dismissedChooseAccount &&
                                    (0, r.jsx)(I.zx, {
                                        onClick: () => {
                                            this.setState((e) => ({
                                                ...e,
                                                dismissedChooseAccount: !1
                                            }));
                                        },
                                        look: I.zx.Looks.LINK,
                                        color: I.zx.Colors.PRIMARY,
                                        className: K.goBackButton,
                                        children: (0, r.jsxs)('div', {
                                            className: K.content,
                                            children: [
                                                (0, r.jsx)(h.V7D, {
                                                    size: 'xs',
                                                    color: 'currentColor',
                                                    className: K.caret
                                                }),
                                                (0, r.jsx)(h.Text, {
                                                    variant: 'text-md/normal',
                                                    children: V.intl.string(V.t['1MrpWF'])
                                                })
                                            ]
                                        })
                                    }),
                                n,
                                (0, r.jsx)(h.y5t, {
                                    children: (0, r.jsxs)(I.gO, {
                                        className: W.marginTop20,
                                        children: [
                                            (0, r.jsx)(L.Z, {
                                                alpha2: o.alpha2,
                                                countryCode: o.code.split(' ')[0],
                                                className: W.marginBottom20,
                                                label: V.intl.string(V.t.tUjnxs),
                                                error: null !== (t = this.renderError('login')) && void 0 !== t ? t : this.renderError('email'),
                                                onChange: (e, t) =>
                                                    this.setState({
                                                        login: e,
                                                        loginPrefix: t
                                                    }),
                                                setRef: this.setLoginRef,
                                                autoCapitalize: 'none',
                                                autoComplete: 'webauthn',
                                                autoCorrect: 'off',
                                                spellCheck: 'false',
                                                value: this.state.login,
                                                autoFocus: !u && !c && !d,
                                                required: !0
                                            }),
                                            (0, r.jsx)(I.II, {
                                                label: V.intl.string(V.t['CIGa+/']),
                                                error: this.renderError('password'),
                                                onChange: (e) => this.setState({ password: e }),
                                                name: 'password',
                                                type: 'password',
                                                setRef: this.setPasswordRef,
                                                autoComplete: 'off',
                                                spellCheck: 'false',
                                                autoFocus: u && !c && !d,
                                                value: this.state.password,
                                                required: !0
                                            }),
                                            (0, r.jsx)(I.zx, {
                                                onClick: this.handleForgotPassword,
                                                look: I.zx.Looks.LINK,
                                                color: I.zx.Colors.LINK,
                                                className: s()(W.marginBottom20, W.marginTop4),
                                                children: V.intl.string(V.t.wWIufn)
                                            }),
                                            (0, r.jsx)(I.zx, {
                                                type: 'submit',
                                                submitting: a === z.u34.LOGGING_IN,
                                                color: _ ? I.zx.Colors.GREEN : I.zx.Colors.BRAND,
                                                className: W.marginBottom8,
                                                children: _ ? V.intl.string(V.t.wvVThI) : V.intl.string(V.t.dKhVQE)
                                            }),
                                            (0, r.jsxs)('div', {
                                                className: W.marginTop4,
                                                children: [
                                                    (0, r.jsx)('span', {
                                                        className: K.needAccount,
                                                        children: V.intl.string(V.t.tmE73t)
                                                    }),
                                                    (0, r.jsx)(I.zx, {
                                                        onClick: this.handleGotoRegister,
                                                        look: I.zx.Looks.LINK,
                                                        color: I.zx.Colors.LINK,
                                                        className: K.smallRegisterLink,
                                                        children: V.intl.string(V.t.pV8xeX)
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        }),
                        (0, r.jsx)(h.y5t, {
                            children: e
                                ? (0, r.jsx)(G.Z, {
                                      authTokenCallback: this.handleAuthToken,
                                      conditionalMediationAbortController: this.state.conditionalMediationAbortController
                                  })
                                : null
                        })
                    ]
                },
                'form-wrapper'
            )
        );
    }
    renderDefault() {
        let { authBoxClassName: e, showMobileWebHandoff: t } = this.props;
        return (0, r.jsxs)('div', {
            className: K.__invalid_pageContainer,
            children: [
                (0, r.jsx)(I.ZP, {
                    onSubmit: this.handleLogin,
                    tag: 'form',
                    className: e,
                    expanded: !0,
                    children: this.renderDefaultForm(!0)
                }),
                t && (0, r.jsx)(S.Z, {})
            ]
        });
    }
    renderGuildTemplate(e) {
        return (0, r.jsx)(F.Z, {
            onSubmit: this.handleLogin,
            tag: 'form',
            className: s()(this.props.authBoxClassName, K.horizontalAuthBox),
            children: () => [(0, r.jsx)(v.Z, { guildTemplate: e }, 'template'), this.renderDefaultForm(!1)]
        });
    }
    renderMFA() {
        let e = {
            ticket: this.props.mfaTicket,
            methods: this.props.mfaMethods
        };
        return (0, r.jsx)(I.ZP, {
            style: { padding: 0 },
            children: (0, r.jsx)(T.Cd, {
                mfaFinish: this.handleTokenSubmitMFA,
                mfaChallenge: e,
                onEarlyClose: () => {
                    _.Z.dispatch({ type: 'LOGIN_RESET' });
                },
                width: 480
            })
        });
    }
    renderIPAuthorization() {
        let { authBoxClassName: e } = this.props,
            { phoneVerifyError: t } = this.state;
        return (0, r.jsx)(I.ZP, {
            tag: 'form',
            className: e,
            children: (0, r.jsx)(x.Z, {
                title: V.intl.string(V.t.w55Ocn),
                subtitle: V.intl.format(V.t.CfRZBg, { onResendClick: this.handleResendCode }),
                error: t,
                onSubmit: this.handleIPAuthorize,
                onCancel: this.loginReset
            })
        });
    }
    renderPasswordRecovery() {
        let { authBoxClassName: e } = this.props,
            { phoneVerifyError: t } = this.state;
        return (0, r.jsx)(I.ZP, {
            tag: 'form',
            className: e,
            children: (0, r.jsx)(x.Z, {
                title: V.intl.string(V.t['+xqy3d']),
                subtitle: V.intl.format(V.t.ef4uZ2, { onResendClick: this.handleResendCode }),
                error: t,
                onSubmit: this.handlePasswordReset,
                onCancel: this.loginReset
            })
        });
    }
    renderChooseAccount() {
        return (0, r.jsx)(b.Z, {
            onDismiss: () => {
                this.setState((e) => ({
                    ...e,
                    dismissedChooseAccount: !0
                }));
            }
        });
    }
    render() {
        let { authenticated: e, invite: t, guildTemplate: n, loginStatus: i, handoffAvailable: l } = this.props,
            { checkingHandoff: a, redirecting: o } = this.state;
        if (o || a) return (0, r.jsx)(Y, {});
        if (l) return this.renderHandOffAvailable();
        if (e && a) return this.renderHandOffContinue();
        switch (i) {
            case z.u34.LOGGING_IN_MFA_SMS:
            case z.u34.MFA_SMS_STEP:
            case z.u34.LOGGING_IN_MFA:
            case z.u34.MFA_STEP:
                return this.renderMFA();
            case z.u34.ACCOUNT_SCHEDULED_FOR_DELETION:
            case z.u34.ACCOUNT_DISABLED:
                return this.renderDisabledAccount();
            case z.u34.PHONE_IP_AUTHORIZATION:
                return this.renderIPAuthorization();
            case z.u34.PASSWORD_RECOVERY_PHONE_VERIFICATION:
                return this.renderPasswordRecovery();
            case z.u34.LOGGING_IN:
            case z.u34.NONE:
            default:
                if (null != t && t.state === z.r2o.RESOLVING) return this.renderResolving();
                if (null != n) {
                    if (n.state === H.Rj.RESOLVING) return this.renderResolving();
                    return this.renderGuildTemplate(n);
                }
                if (this.canShowChooseAccount && !this.state.dismissedChooseAccount) return this.renderChooseAccount();
                return this.renderDefault();
        }
    }
    constructor(e) {
        var t, n;
        super(e),
            q(this, 'loginRef', void 0),
            q(this, 'passwordRef', void 0),
            q(this, 'codeRef', void 0),
            q(this, 'handleAuthToken', async (e) => {
                this.setState({ errors: {} }),
                    await g.Z.loginToken(e, !1),
                    k.default.track(z.rMx.LOGIN_SUCCESSFUL, {
                        source: z.uRl.QR_CODE,
                        login_source: this.loginSource,
                        gift_code_sku_id: this.giftCodeSKUId,
                        is_new_user: !1
                    });
            }),
            q(this, 'loginReset', () => {
                this.setState({ errors: {} }), g.Z.loginReset();
            }),
            q(this, 'setLoginRef', (e) => {
                this.loginRef = e;
            }),
            q(this, 'setPasswordRef', (e) => {
                this.passwordRef = e;
            }),
            q(this, 'setCodeRef', (e) => {
                this.codeRef = e;
            }),
            q(this, 'getFullLogin', () => {
                let { loginPrefix: e, login: t } = this.state;
                return e + t;
            }),
            q(this, 'renderError', (e) => {
                let { errors: t } = this.state;
                if (this.hasError(e)) {
                    let n = t[e];
                    return Array.isArray(n) ? n[0] : n;
                }
                return null;
            }),
            q(this, 'handleLogin', async (e) => {
                let { password: t, undelete: n } = this.state;
                null == e || e.preventDefault(), U.S.dispatch(z.CkL.WAVE_EMPHASIZE), this.setState({ errors: {} });
                try {
                    await g.Z.login({
                        login: this.getFullLogin(),
                        password: t,
                        undelete: n,
                        source: this.loginSource,
                        giftCodeSKUId: this.giftCodeSKUId,
                        invite: this.props.invite
                    });
                } catch (t) {
                    let e = (0, E.p)(t);
                    this.setState({ errors: e });
                }
            }),
            q(this, 'handleIPAuthorize', async (e) => {
                let t = this.getFullLogin();
                this.setState({ errors: {} });
                try {
                    let { token: n } = await Z.Z.verifyPhone(t, e, !1);
                    await g.Z.authorizeIPAddress(n), this.handleLogin();
                } catch (e) {
                    null != e.body && null != e.body.message && this.setState({ phoneVerifyError: e.body.message });
                }
            }),
            q(this, 'handlePasswordReset', async (e) => {
                let { transitionTo: t } = this.props;
                this.setState({ phoneVerifyError: null });
                try {
                    let { token: n } = await Z.Z.verifyPhone(this.getFullLogin(), e, !1);
                    t(z.Z5c.RESET, {
                        search: (0, c.stringify)({
                            token: n,
                            from_login: 'true'
                        })
                    });
                } catch (e) {
                    null != e.body && null != e.body.message && this.setState({ phoneVerifyError: e.body.message });
                }
            }),
            q(this, 'handleTokenSubmitMFA', (e) => {
                let { mfaType: t, data: n, ticket: i } = e;
                return (
                    U.S.dispatch(z.CkL.WAVE_EMPHASIZE),
                    g.Z.loginMFAv2({
                        code: n,
                        ticket: i,
                        mfaType: t,
                        source: this.loginSource,
                        giftCodeSKUId: this.giftCodeSKUId
                    })
                );
            }),
            q(this, 'handleForgotPassword', async (e) => {
                null != e && e.preventDefault(), null != this.loginRef && this.loginRef.focus();
                let t = this.getFullLogin();
                this.setState({ errors: {} });
                try {
                    if ((U.S.dispatch(z.CkL.WAVE_EMPHASIZE), !(await g.Z.forgotPassword(t)))) return;
                    (0, h.h7j)((e) =>
                        (0, r.jsx)(h.ConfirmModal, {
                            header: V.intl.string(V.t.f5Pi7O),
                            confirmText: V.intl.string(V.t.BddRzc),
                            confirmButtonColor: I.zx.Colors.BRAND,
                            className: d.tq ? K.mobile : '',
                            ...e,
                            children: (0, r.jsx)(h.Text, {
                                variant: 'text-md/normal',
                                children: V.intl.format(V.t['6u5hQ0'], { email: t })
                            })
                        })
                    );
                } catch (t) {
                    let e = (0, E.p)(t);
                    this.setState({ errors: e });
                }
            }),
            q(this, 'handleResendCode', () => {
                Z.Z.resendCode(this.getFullLogin());
            }),
            q(this, 'handleReset', (e) => {
                null != e && e.preventDefault(),
                    g.Z.loginReset(),
                    this.setState({
                        password: '',
                        loginPrefix: '',
                        login: '',
                        code: '',
                        smsCode: '',
                        undelete: !1,
                        checkingHandoff: !1,
                        redirecting: !1,
                        errors: {}
                    });
            }),
            q(this, 'handleCancelAccountDeletion', () => {
                this.setState({ undelete: !0 }, this.handleLogin);
            }),
            q(this, 'handleGotoRegister', () => {
                let e;
                let { login: t } = this.state,
                    { invite: n, giftCode: i, guildTemplate: r, location: l, transitionTo: a, redirectTo: o } = this.props,
                    s = null != l ? (0, c.parse)(l.search) : {};
                '' !== t && (s.email = t), null != n ? ((s.mode = 'register'), (e = z.Z5c.INVITE(n.code))) : null != i ? ((s.mode = 'register'), (e = z.Z5c.GIFT_CODE(i.code))) : null != r ? (e = z.Z5c.GUILD_TEMPLATE(r.code)) : null != o ? ((e = z.Z5c.REGISTER), (s.redirect_to = o)) : (e = z.Z5c.REGISTER), this.loginReset(), a(e, { search: (0, c.stringify)(s) }), U.S.dispatch(z.CkL.WAVE_EMPHASIZE);
            });
        let i = null != e.location ? (0, c.parse)(e.location.search) : {};
        this.state = {
            redirecting: e.authenticated,
            checkingHandoff: e.handoffAvailable,
            loginPrefix: '',
            login: null !== (n = null !== (t = i.email) && void 0 !== t ? t : i.login) && void 0 !== n ? n : '',
            password: '',
            code: '',
            smsCode: '',
            undelete: !1,
            phoneVerifyError: null,
            dismissedChooseAccount: !1,
            conditionalMediationAbortController: new AbortController(),
            errors: {}
        };
    }
}
q(J, 'defaultProps', { transitionTo: (e) => n.g.location.assign(e) });
let X = function (e) {
    let t = (0, u.cj)([y.Z, D.Z, P.default, A.Z, R.Z], () => ({
        authenticated: P.default.isAuthenticated(),
        handoffAvailable: y.Z.isHandoffAvailable(),
        user: y.Z.user,
        loginStatus: P.default.getLoginStatus(),
        mfaTicket: P.default.getMFATicket(),
        mfaMethods: P.default.getMFAMethods(),
        defaultRoute: D.Z.defaultRoute,
        country: R.Z.getCountryCode(),
        hasLoggedInAccounts: A.Z.getHasLoggedInAccounts()
    }));
    return (0, r.jsx)(J, {
        ...e,
        ...t
    });
};
