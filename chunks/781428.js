n.d(t, {
    Z: () => X,
    q: () => q
});
var i,
    r = n(200651),
    a = n(192379),
    l = n(533126),
    o = n(120356),
    s = n.n(o),
    c = n(593473),
    d = n(873546),
    u = n(442837),
    h = n(481060),
    _ = n(570140),
    g = n(893776),
    m = n(899742),
    p = n(579806),
    f = n(743142),
    E = n(254942),
    x = n(388905),
    I = n(379760),
    C = n(600164),
    v = n(100159),
    N = n(473855),
    b = n(124860),
    S = n(86779),
    T = n(726745),
    A = n(913583),
    R = n(144114),
    Z = n(541692),
    j = n(952802),
    O = n(108427),
    L = n(365007),
    y = n(314897),
    P = n(117240),
    k = n(896797),
    D = n(626135),
    w = n(585483),
    B = n(358085),
    U = n(481153),
    M = n(588705),
    G = n(494526),
    F = n(163671),
    z = n(981631),
    V = n(58346),
    K = n(388032),
    H = n(32817),
    W = n(232186);
function Y(e, t, n) {
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
function q() {
    return (0, r.jsx)(x.ZP, { children: (0, r.jsx)(h.$jN, {}) });
}
class J extends (i = a.PureComponent) {
    static getDerivedStateFromProps(e) {
        let { handoffAvailable: t, authenticated: n } = e;
        return t || n ? null : { checkingHandoff: !1 };
    }
    componentDidMount() {
        let { handoffAvailable: e, authenticated: t, giftCodeSKU: n, invite: i, location: r } = this.props;
        e && !t ? (0, m.is)() : t && this.loginOrSSO(t, r, !0),
            D.default.track(
                z.rMx.LOGIN_VIEWED,
                {
                    location: null != i ? 'Invite Login Page' : 'Non-Invite Login Page',
                    login_source: this.loginSource,
                    authenticated: t,
                    ...(null != n ? (0, v.Z)(n, !1, !1) : {})
                },
                { flush: !0 }
            ),
            null == p.Z &&
                null != window.PublicKeyCredential &&
                null != PublicKeyCredential.isConditionalMediationAvailable &&
                PublicKeyCredential.isConditionalMediationAvailable().then((e) => {
                    e &&
                        (0, L.us)()
                            .then((e) => {
                                let { challenge: t, ticket: n } = e,
                                    i = (0, l.wz)(JSON.parse(t));
                                return (
                                    (i.signal = this.state.conditionalMediationAbortController.signal),
                                    (0, l.U2)(i)
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
            (0, O.e)('login');
    }
    componentDidUpdate(e, t) {
        let { authenticated: n, location: i } = this.props,
            { checkingHandoff: r } = this.state;
        if ((!n || e.authenticated || r || (this.state.conditionalMediationAbortController.abort(), this.loginOrSSO(n, i)), t.errors !== this.state.errors)) {
            var a, l, o;
            this.hasError('password') ? null === (a = this.passwordRef) || void 0 === a || a.focus() : this.hasError('email') || this.hasError('login') ? null === (l = this.loginRef) || void 0 === l || l.focus() : this.hasError('code') && (null === (o = this.codeRef) || void 0 === o || o.focus());
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
                    token: y.default.getToken()
                };
            window.location = ''.concat(e, '?').concat((0, c.stringify)(t));
        }
    }
    hasError(e) {
        return null != this.state.errors[e];
    }
    renderHandOffAvailable() {
        let { authBoxClassName: e } = this.props;
        return (0, r.jsxs)(x.ZP, {
            className: e,
            children: [
                (0, r.jsx)(x.Hh, {}),
                (0, r.jsx)(x.Dx, {
                    className: W.marginBottom8,
                    children: K.intl.string(K.t.S6RMND)
                }),
                (0, r.jsx)(x.DK, { children: K.intl.string(K.t.YZiJbm) })
            ]
        });
    }
    renderHandOffContinue() {
        let { user: e, transitionTo: t, authBoxClassName: n } = this.props;
        return null == e
            ? null
            : (0, r.jsxs)(x.ZP, {
                  className: n,
                  children: [
                      (0, r.jsx)(x.qE, {
                          src: e.getAvatarURL(void 0, 100),
                          size: h.EFr.DEPRECATED_SIZE_100,
                          className: W.marginBottom20
                      }),
                      (0, r.jsx)(x.Dx, {
                          className: W.marginBottom8,
                          children: K.intl.format(K.t.ot19ho, { name: e.toString() })
                      }),
                      (0, r.jsx)(x.DK, {
                          className: W.marginBottom40,
                          children: K.intl.string(K.t['2xkqzc'])
                      }),
                      (0, r.jsxs)(x.gO, {
                          children: [
                              (0, r.jsx)(x.zx, {
                                  onClick: () => t(z.Z5c.APP),
                                  className: W.marginBottom8,
                                  children: K.intl.format(K.t.fohtv7, { name: e.toString() })
                              }),
                              (0, r.jsx)(x.zx, {
                                  look: x.zx.Looks.LINK,
                                  color: x.zx.Colors.LINK,
                                  onClick: this.handleReset,
                                  children: K.intl.string(K.t.nO564e)
                              })
                          ]
                      })
                  ]
              });
    }
    renderDisabledAccount() {
        let { authBoxClassName: e } = this.props,
            t = this.props.loginStatus === z.u34.ACCOUNT_DISABLED,
            n = t ? K.intl.string(K.t['j3rC+f']) : K.intl.string(K.t.ZFWofn),
            i = t ? K.intl.string(K.t['6eNTWV']) : K.intl.string(K.t.pCBti4);
        return (0, r.jsx)(x.ZP, {
            tag: 'form',
            onSubmit: this.handleReset,
            className: e,
            children: (0, r.jsxs)(h.y5t, {
                component: (0, r.jsx)(x.Dx, {
                    className: W.marginBottom8,
                    children: n
                }),
                children: [
                    (0, r.jsx)(x.DK, {
                        className: W.marginBottom20,
                        children: i
                    }),
                    (0, r.jsxs)(x.gO, {
                        children: [
                            (0, r.jsx)(x.zx, {
                                color: x.zx.Colors.BRAND,
                                type: 'submit',
                                children: K.intl.string(K.t.JhDw5u)
                            }),
                            (0, r.jsx)('div', {
                                className: s()(W.marginTop8, H.needAccount),
                                children: K.intl.format(K.t.js2rr6, { onClick: this.handleCancelAccountDeletion })
                            })
                        ]
                    })
                ]
            })
        });
    }
    renderResolving() {
        let { authBoxClassName: e, country: t } = this.props;
        return (0, r.jsxs)(x.ZP, {
            className: e,
            children: [
                (0, r.jsx)(M.R, {}),
                (0, r.jsxs)(x.gO, {
                    className: W.marginTop20,
                    children: [
                        (0, r.jsx)(j.Z, {
                            className: W.marginBottom20,
                            alpha2: t.alpha2,
                            countryCode: t.code.split(' ')[0],
                            label: K.intl.string(K.t.tUjnxs),
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
                        (0, r.jsx)(x.II, {
                            className: W.marginBottom20,
                            label: K.intl.string(K.t['CIGa+/']),
                            onChange: (e) => this.setState({ password: e }),
                            type: 'password',
                            setRef: this.setPasswordRef,
                            autoComplete: 'off',
                            spellCheck: 'false',
                            value: this.state.password,
                            required: !0
                        }),
                        (0, r.jsx)(x.zx, {
                            className: W.marginBottom8,
                            type: 'submit',
                            disabled: !0,
                            children: K.intl.string(K.t.dKhVQE)
                        }),
                        (0, r.jsx)(x.zx, {
                            disabled: !0,
                            look: x.zx.Looks.LINK,
                            color: x.zx.Colors.LINK,
                            children: K.intl.string(K.t.wWIufn)
                        }),
                        (0, r.jsx)(x.zx, {
                            disabled: !0,
                            className: W.marginTop4,
                            look: x.zx.Looks.LINK,
                            color: x.zx.Colors.LINK,
                            children: K.intl.string(K.t.tmE73t)
                        })
                    ]
                })
            ]
        });
    }
    renderDefaultForm(e) {
        var t;
        let n;
        let { invite: i, giftCode: a, loginStatus: l, country: o, showMobileWebHandoff: c, disableAutofocusOnDefaultForm: d } = this.props,
            u = !this.hasError('email') && this.hasError('password'),
            _ = (null == i ? void 0 : i.stage_instance) != null;
        return (
            (n =
                null == i || _
                    ? null != a
                        ? (0, r.jsx)(U.Z, { giftCode: a })
                        : (0, r.jsxs)('div', {
                              className: H.header,
                              children: [
                                  (0, r.jsx)(
                                      x.Dx,
                                      {
                                          className: W.marginBottom8,
                                          children: K.intl.string(K.t['7fNJgI'])
                                      },
                                      'title'
                                  ),
                                  !1 === (0, B.isAndroidWeb)() ? (0, r.jsx)(x.DK, { children: K.intl.string(K.t.euS7r6) }, 'subtitle') : null
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
                            className: H.mainLoginContainer,
                            children: [
                                this.canShowChooseAccount &&
                                    this.state.dismissedChooseAccount &&
                                    (0, r.jsx)(x.zx, {
                                        onClick: () => {
                                            this.setState((e) => ({
                                                ...e,
                                                dismissedChooseAccount: !1
                                            }));
                                        },
                                        look: x.zx.Looks.LINK,
                                        color: x.zx.Colors.PRIMARY,
                                        className: H.goBackButton,
                                        children: (0, r.jsxs)('div', {
                                            className: H.content,
                                            children: [
                                                (0, r.jsx)(h.V7D, {
                                                    size: 'xs',
                                                    color: 'currentColor',
                                                    className: H.caret
                                                }),
                                                (0, r.jsx)(h.Text, {
                                                    variant: 'text-md/normal',
                                                    children: K.intl.string(K.t['1MrpWF'])
                                                })
                                            ]
                                        })
                                    }),
                                n,
                                (0, r.jsx)(h.y5t, {
                                    children: (0, r.jsxs)(x.gO, {
                                        className: W.marginTop20,
                                        children: [
                                            (0, r.jsx)(j.Z, {
                                                alpha2: o.alpha2,
                                                countryCode: o.code.split(' ')[0],
                                                className: W.marginBottom20,
                                                label: K.intl.string(K.t.tUjnxs),
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
                                            (0, r.jsx)(x.II, {
                                                label: K.intl.string(K.t['CIGa+/']),
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
                                            (0, r.jsx)(x.zx, {
                                                onClick: this.handleForgotPassword,
                                                look: x.zx.Looks.LINK,
                                                color: x.zx.Colors.LINK,
                                                className: s()(W.marginBottom20, W.marginTop4),
                                                children: K.intl.string(K.t.wWIufn)
                                            }),
                                            (0, r.jsx)(x.zx, {
                                                type: 'submit',
                                                submitting: l === z.u34.LOGGING_IN,
                                                color: _ ? x.zx.Colors.GREEN : x.zx.Colors.BRAND,
                                                className: W.marginBottom8,
                                                children: _ ? K.intl.string(K.t.wvVThI) : K.intl.string(K.t.dKhVQE)
                                            }),
                                            (0, r.jsxs)('div', {
                                                className: W.marginTop4,
                                                children: [
                                                    (0, r.jsx)('span', {
                                                        className: H.needAccount,
                                                        children: K.intl.string(K.t.tmE73t)
                                                    }),
                                                    (0, r.jsx)(x.zx, {
                                                        onClick: this.handleGotoRegister,
                                                        look: x.zx.Looks.LINK,
                                                        color: x.zx.Colors.LINK,
                                                        className: H.smallRegisterLink,
                                                        children: K.intl.string(K.t.pV8xeX)
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
            className: H.__invalid_pageContainer,
            children: [
                (0, r.jsx)(x.ZP, {
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
            className: s()(this.props.authBoxClassName, H.horizontalAuthBox),
            children: () => [(0, r.jsx)(N.Z, { guildTemplate: e }, 'template'), this.renderDefaultForm(!1)]
        });
    }
    renderMFA() {
        let e = {
            ticket: this.props.mfaTicket,
            methods: this.props.mfaMethods
        };
        return (0, r.jsx)(x.ZP, {
            style: { padding: 0 },
            children: (0, r.jsx)(b.Cd, {
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
        return (0, r.jsx)(x.ZP, {
            tag: 'form',
            className: e,
            children: (0, r.jsx)(I.Z, {
                title: K.intl.string(K.t.w55Ocn),
                subtitle: K.intl.format(K.t.CfRZBg, { onResendClick: this.handleResendCode }),
                error: t,
                onSubmit: this.handleIPAuthorize,
                onCancel: this.loginReset
            })
        });
    }
    renderPasswordRecovery() {
        let { authBoxClassName: e } = this.props,
            { phoneVerifyError: t } = this.state;
        return (0, r.jsx)(x.ZP, {
            tag: 'form',
            className: e,
            children: (0, r.jsx)(I.Z, {
                title: K.intl.string(K.t['+xqy3d']),
                subtitle: K.intl.format(K.t.ef4uZ2, { onResendClick: this.handleResendCode }),
                error: t,
                onSubmit: this.handlePasswordReset,
                onCancel: this.loginReset
            })
        });
    }
    renderChooseAccount() {
        return (0, r.jsx)(A.Z, {
            onDismiss: () => {
                this.setState((e) => ({
                    ...e,
                    dismissedChooseAccount: !0
                }));
            }
        });
    }
    render() {
        let { authenticated: e, invite: t, guildTemplate: n, loginStatus: i, handoffAvailable: a } = this.props,
            { checkingHandoff: l, redirecting: o } = this.state;
        if (o || l) return (0, r.jsx)(q, {});
        if (a) return this.renderHandOffAvailable();
        if (e && l) return this.renderHandOffContinue();
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
                    if (n.state === V.Rj.RESOLVING) return this.renderResolving();
                    return this.renderGuildTemplate(n);
                }
                if (this.canShowChooseAccount && !this.state.dismissedChooseAccount) return this.renderChooseAccount();
                return this.renderDefault();
        }
    }
    constructor(e) {
        var t, n;
        super(e),
            Y(this, 'loginRef', void 0),
            Y(this, 'passwordRef', void 0),
            Y(this, 'codeRef', void 0),
            Y(this, 'handleAuthToken', async (e) => {
                this.setState({ errors: {} }),
                    await g.Z.loginToken(e, !1),
                    D.default.track(z.rMx.LOGIN_SUCCESSFUL, {
                        source: z.uRl.QR_CODE,
                        login_source: this.loginSource,
                        gift_code_sku_id: this.giftCodeSKUId,
                        is_new_user: !1
                    });
            }),
            Y(this, 'loginReset', () => {
                this.setState({ errors: {} }), g.Z.loginReset();
            }),
            Y(this, 'setLoginRef', (e) => {
                this.loginRef = e;
            }),
            Y(this, 'setPasswordRef', (e) => {
                this.passwordRef = e;
            }),
            Y(this, 'setCodeRef', (e) => {
                this.codeRef = e;
            }),
            Y(this, 'getFullLogin', () => {
                let { loginPrefix: e, login: t } = this.state;
                return e + t;
            }),
            Y(this, 'renderError', (e) => {
                let { errors: t } = this.state;
                if (this.hasError(e)) {
                    let n = t[e];
                    return Array.isArray(n) ? n[0] : n;
                }
                return null;
            }),
            Y(this, 'handleLogin', async (e) => {
                let { password: t, undelete: n } = this.state;
                null == e || e.preventDefault(), w.S.dispatch(z.CkL.WAVE_EMPHASIZE), this.setState({ errors: {} });
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
            Y(this, 'handleIPAuthorize', async (e) => {
                let t = this.getFullLogin();
                this.setState({ errors: {} });
                try {
                    let { token: n } = await R.Z.verifyPhone(t, e, !1);
                    await g.Z.authorizeIPAddress(n), this.handleLogin();
                } catch (e) {
                    null != e.body && null != e.body.message && this.setState({ phoneVerifyError: e.body.message });
                }
            }),
            Y(this, 'handlePasswordReset', async (e) => {
                let { transitionTo: t } = this.props;
                this.setState({ phoneVerifyError: null });
                try {
                    let { token: n } = await R.Z.verifyPhone(this.getFullLogin(), e, !1);
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
            Y(this, 'handleTokenSubmitMFA', (e) => {
                let { mfaType: t, data: n, ticket: i } = e;
                return (
                    w.S.dispatch(z.CkL.WAVE_EMPHASIZE),
                    g.Z.loginMFAv2({
                        code: n,
                        ticket: i,
                        mfaType: t,
                        source: this.loginSource,
                        giftCodeSKUId: this.giftCodeSKUId
                    })
                );
            }),
            Y(this, 'handleForgotPassword', async (e) => {
                null != e && e.preventDefault(), null != this.loginRef && this.loginRef.focus();
                let t = this.getFullLogin();
                this.setState({ errors: {} });
                try {
                    if ((w.S.dispatch(z.CkL.WAVE_EMPHASIZE), !(await g.Z.forgotPassword(t)))) return;
                    (0, h.h7j)((e) =>
                        (0, r.jsx)(h.ConfirmModal, {
                            header: K.intl.string(K.t.f5Pi7O),
                            confirmText: K.intl.string(K.t.BddRzc),
                            confirmButtonColor: x.zx.Colors.BRAND,
                            className: d.tq ? H.mobile : '',
                            ...e,
                            children: (0, r.jsx)(h.Text, {
                                variant: 'text-md/normal',
                                children: K.intl.format(K.t['6u5hQ0'], { email: t })
                            })
                        })
                    );
                } catch (t) {
                    let e = (0, E.p)(t);
                    this.setState({ errors: e });
                }
            }),
            Y(this, 'handleResendCode', () => {
                R.Z.resendCode(this.getFullLogin());
            }),
            Y(this, 'handleReset', (e) => {
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
            Y(this, 'handleCancelAccountDeletion', () => {
                this.setState({ undelete: !0 }, this.handleLogin);
            }),
            Y(this, 'handleGotoRegister', () => {
                let e;
                let { login: t } = this.state,
                    { invite: n, giftCode: i, guildTemplate: r, location: a, transitionTo: l, redirectTo: o } = this.props,
                    s = null != a ? (0, c.parse)(a.search) : {};
                '' !== t && (s.email = t), null != n ? ((s.mode = 'register'), (e = z.Z5c.INVITE(n.code))) : null != i ? ((s.mode = 'register'), (e = z.Z5c.GIFT_CODE(i.code))) : null != r ? (e = z.Z5c.GUILD_TEMPLATE(r.code)) : null != o ? ((e = z.Z5c.REGISTER), (s.redirect_to = o)) : (e = z.Z5c.REGISTER), this.loginReset(), l(e, { search: (0, c.stringify)(s) }), w.S.dispatch(z.CkL.WAVE_EMPHASIZE);
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
Y(J, 'defaultProps', { transitionTo: (e) => n.g.location.assign(e) });
let X = function (e) {
    let t = (0, u.cj)([P.Z, k.Z, y.default, T.Z, Z.Z], () => ({
        authenticated: y.default.isAuthenticated(),
        handoffAvailable: P.Z.isHandoffAvailable(),
        user: P.Z.user,
        loginStatus: y.default.getLoginStatus(),
        mfaTicket: y.default.getMFATicket(),
        mfaMethods: y.default.getMFAMethods(),
        defaultRoute: k.Z.defaultRoute,
        country: Z.Z.getCountryCode(),
        hasLoggedInAccounts: T.Z.getHasLoggedInAccounts()
    }));
    return (0, r.jsx)(J, {
        ...e,
        ...t
    });
};
