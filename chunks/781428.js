n.d(t, {
    Z: () => ee,
    q: () => Q
}),
    n(49124),
    n(35282);
var r,
    i = n(200651),
    l = n(192379),
    s = n(533126),
    o = n(120356),
    a = n.n(o),
    c = n(593473),
    u = n(873546),
    d = n(442837),
    h = n(481060),
    g = n(570140),
    p = n(893776),
    f = n(899742),
    m = n(579806),
    _ = n(743142),
    x = n(254942),
    E = n(388905),
    b = n(379760),
    v = n(600164),
    j = n(100159),
    I = n(473855),
    O = n(124860),
    S = n(86779),
    N = n(726745),
    y = n(913583),
    C = n(144114),
    P = n(541692),
    Z = n(952802),
    A = n(703656),
    T = n(108427),
    R = n(365007),
    w = n(314897),
    L = n(117240),
    D = n(896797),
    k = n(626135),
    M = n(585483),
    G = n(358085),
    U = n(481153),
    B = n(588705),
    F = n(494526),
    z = n(163671),
    V = n(981631),
    K = n(260539),
    H = n(388032),
    W = n(555763),
    q = n(20493);
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
function J(e) {
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
                Y(e, t, n[t]);
            });
    }
    return e;
}
function X(e, t) {
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
function Q() {
    return (0, i.jsx)(E.ZP, { children: (0, i.jsx)(h.$jN, {}) });
}
class $ extends (r = l.PureComponent) {
    static getDerivedStateFromProps(e) {
        let { handoffAvailable: t, authenticated: n } = e;
        return t || n ? null : { checkingHandoff: !1 };
    }
    componentDidMount() {
        let { handoffAvailable: e, authenticated: t, giftCodeSKU: n, invite: r, location: i } = this.props;
        e && !t ? (0, f.is)() : t && this.loginOrSSO(t, i, !0),
            k.default.track(
                V.rMx.LOGIN_VIEWED,
                X(
                    J(
                        {
                            location: null != r ? 'Invite Login Page' : 'Non-Invite Login Page',
                            login_source: this.loginSource,
                            authenticated: t
                        },
                        null != n ? (0, j.Z)(n, !1, !1) : {}
                    ),
                    { source: (0, A.At)() }
                ),
                { flush: !0 }
            ),
            null == m.Z &&
                null != window.PublicKeyCredential &&
                null != PublicKeyCredential.isConditionalMediationAvailable &&
                PublicKeyCredential.isConditionalMediationAvailable().then((e) => {
                    e &&
                        (0, R.us)()
                            .then((e) => {
                                let { challenge: t, ticket: n } = e,
                                    r = (0, s.wz)(JSON.parse(t));
                                return (
                                    (r.signal = this.state.conditionalMediationAbortController.signal),
                                    (0, s.U2)(r)
                                        .then(
                                            (e) => (
                                                this.setState({ errors: {} }),
                                                g.Z.dispatch({ type: 'PASSWORDLESS_START' }),
                                                k.default.track(V.rMx.LOGIN_ATTEMPTED, {
                                                    source: V.uRl.PASSWORDLESS_CONDITIONAL_UI,
                                                    login_method: 'passwordless',
                                                    login_source: this.loginSource,
                                                    gift_code_sku_id: this.giftCodeSKUId
                                                }),
                                                p.Z.loginWebAuthn({
                                                    ticket: n,
                                                    credential: JSON.stringify(e),
                                                    source: this.loginSource,
                                                    giftCodeSKUId: this.giftCodeSKUId
                                                }).catch((e) => {
                                                    throw (this.setState({ errors: (0, x.F)(e) }), e);
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
            p.Z.getLocationMetadata(),
            (0, T.e)('login');
    }
    componentDidUpdate(e, t) {
        let { authenticated: n, location: r } = this.props,
            { checkingHandoff: i } = this.state;
        if ((!n || e.authenticated || i || (this.state.conditionalMediationAbortController.abort(), this.loginOrSSO(n, r)), t.errors !== this.state.errors)) {
            var l, s, o;
            this.hasError('password') ? null == (l = this.passwordRef) || l.focus() : this.hasError('email') || this.hasError('login') ? null == (s = this.loginRef) || s.focus() : this.hasError('code') && (null == (o = this.codeRef) || o.focus());
        }
    }
    get loginSource() {
        let { giftCode: e, guildTemplate: t, invite: n, loginSource: r, redirectTo: i } = this.props;
        if (null != r) return r;
        if (null != e) return 'gift';
        if (null != t) return 'guild_template';
        if (null != n) {
            if (null != n.guild) return 'guild_invite';
            else if (null != n.channel) return 'dm_invite';
            else if (null != n.inviter) return 'friend_invite';
        }
        return null != i ? (0, _.L)(i) : null;
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
        e && null != t && (this.setState({ redirecting: !0 }), n ? p.Z.verifySSOToken('login').then(() => this.transitionSSO(t)) : this.transitionSSO(t));
    }
    transitionSSO(e) {
        let { transitionTo: t, redirectTo: n, replaceWith: r } = this.props,
            i = null != e ? (0, c.parse)(e.search) : {};
        if ((delete i.redirect_to, null != n)) null != r ? r(n) : t(n);
        else if (null == i.service) t(V.Z5c.APP);
        else {
            let e = window.location.protocol + window.GLOBAL_ENV.API_ENDPOINT + V.ANM.SSO,
                t = X(J({}, i), { token: w.default.getToken() });
            window.location = ''.concat(e, '?').concat((0, c.stringify)(t));
        }
    }
    hasError(e) {
        return null != this.state.errors[e];
    }
    renderHandOffAvailable() {
        let { authBoxClassName: e } = this.props;
        return (0, i.jsxs)(E.ZP, {
            className: e,
            children: [
                (0, i.jsx)(E.Hh, {}),
                (0, i.jsx)(E.Dx, {
                    className: q.marginBottom8,
                    children: H.intl.string(H.t.S6RMND)
                }),
                (0, i.jsx)(E.DK, { children: H.intl.string(H.t.YZiJbm) })
            ]
        });
    }
    renderHandOffContinue() {
        let { user: e, transitionTo: t, authBoxClassName: n } = this.props;
        return null == e
            ? null
            : (0, i.jsxs)(E.ZP, {
                  className: n,
                  children: [
                      (0, i.jsx)(E.qE, {
                          src: e.getAvatarURL(void 0, 100),
                          size: h.EFr.DEPRECATED_SIZE_100,
                          className: q.marginBottom20
                      }),
                      (0, i.jsx)(E.Dx, {
                          className: q.marginBottom8,
                          children: H.intl.format(H.t.ot19ho, { name: e.toString() })
                      }),
                      (0, i.jsx)(E.DK, {
                          className: q.marginBottom40,
                          children: H.intl.string(H.t['2xkqzc'])
                      }),
                      (0, i.jsxs)(E.gO, {
                          children: [
                              (0, i.jsx)(E.zx, {
                                  onClick: () => t(V.Z5c.APP),
                                  className: q.marginBottom8,
                                  children: H.intl.format(H.t.fohtv7, { name: e.toString() })
                              }),
                              (0, i.jsx)(E.zx, {
                                  look: E.zx.Looks.LINK,
                                  color: E.zx.Colors.LINK,
                                  onClick: this.handleReset,
                                  children: H.intl.string(H.t.nO564e)
                              })
                          ]
                      })
                  ]
              });
    }
    renderDisabledAccount() {
        let { authBoxClassName: e } = this.props,
            t = this.props.loginStatus === V.u34.ACCOUNT_DISABLED,
            n = t ? H.intl.string(H.t['j3rC+f']) : H.intl.string(H.t.ZFWofn),
            r = t ? H.intl.string(H.t['6eNTWV']) : H.intl.string(H.t.pCBti4);
        return (0, i.jsx)(E.ZP, {
            tag: 'form',
            onSubmit: this.handleReset,
            className: e,
            children: (0, i.jsxs)(h.y5t, {
                component: (0, i.jsx)(E.Dx, {
                    className: q.marginBottom8,
                    children: n
                }),
                children: [
                    (0, i.jsx)(E.DK, {
                        className: q.marginBottom20,
                        children: r
                    }),
                    (0, i.jsxs)(E.gO, {
                        children: [
                            (0, i.jsx)(E.zx, {
                                color: E.zx.Colors.BRAND,
                                type: 'submit',
                                children: H.intl.string(H.t.JhDw5u)
                            }),
                            (0, i.jsx)('div', {
                                className: a()(q.marginTop8, W.needAccount),
                                children: H.intl.format(H.t.js2rr6, { onClick: this.handleCancelAccountDeletion })
                            })
                        ]
                    })
                ]
            })
        });
    }
    renderResolving() {
        let { authBoxClassName: e, country: t } = this.props;
        return (0, i.jsxs)(E.ZP, {
            className: e,
            children: [
                (0, i.jsx)(B.R, {}),
                (0, i.jsxs)(E.gO, {
                    className: q.marginTop20,
                    children: [
                        (0, i.jsx)(Z.Z, {
                            className: q.marginBottom20,
                            alpha2: t.alpha2,
                            countryCode: t.code.split(' ')[0],
                            label: H.intl.string(H.t.tUjnxs),
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
                        (0, i.jsx)(E.II, {
                            className: q.marginBottom20,
                            label: H.intl.string(H.t['CIGa+/']),
                            onChange: (e) => this.setState({ password: e }),
                            type: 'password',
                            setRef: this.setPasswordRef,
                            autoComplete: 'off',
                            spellCheck: 'false',
                            value: this.state.password,
                            required: !0
                        }),
                        (0, i.jsx)(E.zx, {
                            className: q.marginBottom8,
                            type: 'submit',
                            disabled: !0,
                            children: H.intl.string(H.t.dKhVQE)
                        }),
                        (0, i.jsx)(E.zx, {
                            disabled: !0,
                            look: E.zx.Looks.LINK,
                            color: E.zx.Colors.LINK,
                            children: H.intl.string(H.t.wWIufn)
                        }),
                        (0, i.jsx)(E.zx, {
                            disabled: !0,
                            className: q.marginTop4,
                            look: E.zx.Looks.LINK,
                            color: E.zx.Colors.LINK,
                            children: H.intl.string(H.t.tmE73t)
                        })
                    ]
                })
            ]
        });
    }
    renderDefaultForm(e) {
        var t;
        let n,
            { invite: r, giftCode: l, loginStatus: s, country: o, showMobileWebHandoff: c, disableAutofocusOnDefaultForm: u } = this.props,
            d = !this.hasError('email') && this.hasError('password'),
            g = (null == r ? void 0 : r.stage_instance) != null;
        return (
            (n =
                null == r || g
                    ? null != l
                        ? (0, i.jsx)(U.Z, { giftCode: l })
                        : (0, i.jsxs)('div', {
                              className: W.header,
                              children: [
                                  (0, i.jsx)(
                                      E.Dx,
                                      {
                                          className: q.marginBottom8,
                                          children: H.intl.string(H.t['7fNJgI'])
                                      },
                                      'title'
                                  ),
                                  !1 === (0, G.isAndroidWeb)() ? (0, i.jsx)(E.DK, { children: H.intl.string(H.t.euS7r6) }, 'subtitle') : null
                              ]
                          })
                    : (0, i.jsx)(B.Z, { invite: r })),
            (0, i.jsxs)(
                v.Z,
                {
                    direction: v.Z.Direction.HORIZONTAL,
                    align: v.Z.Align.CENTER,
                    children: [
                        (0, i.jsxs)('div', {
                            className: W.mainLoginContainer,
                            children: [
                                this.canShowChooseAccount &&
                                    this.state.dismissedChooseAccount &&
                                    (0, i.jsx)(E.zx, {
                                        onClick: () => {
                                            this.setState((e) => X(J({}, e), { dismissedChooseAccount: !1 }));
                                        },
                                        look: E.zx.Looks.LINK,
                                        color: E.zx.Colors.PRIMARY,
                                        className: W.goBackButton,
                                        children: (0, i.jsxs)('div', {
                                            className: W.content,
                                            children: [
                                                (0, i.jsx)(h.V7D, {
                                                    size: 'xs',
                                                    color: 'currentColor',
                                                    className: W.caret
                                                }),
                                                (0, i.jsx)(h.Text, {
                                                    variant: 'text-md/normal',
                                                    children: H.intl.string(H.t['1MrpWF'])
                                                })
                                            ]
                                        })
                                    }),
                                n,
                                (0, i.jsx)(h.y5t, {
                                    children: (0, i.jsxs)(E.gO, {
                                        className: q.marginTop20,
                                        children: [
                                            (0, i.jsx)(Z.Z, {
                                                alpha2: o.alpha2,
                                                countryCode: o.code.split(' ')[0],
                                                className: q.marginBottom20,
                                                label: H.intl.string(H.t.tUjnxs),
                                                error: null != (t = this.renderError('login')) ? t : this.renderError('email'),
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
                                                autoFocus: !d && !c && !u,
                                                required: !0
                                            }),
                                            (0, i.jsx)(E.II, {
                                                label: H.intl.string(H.t['CIGa+/']),
                                                error: this.renderError('password'),
                                                onChange: (e) => this.setState({ password: e }),
                                                name: 'password',
                                                type: 'password',
                                                setRef: this.setPasswordRef,
                                                autoComplete: 'off',
                                                spellCheck: 'false',
                                                autoFocus: d && !c && !u,
                                                value: this.state.password,
                                                required: !0
                                            }),
                                            (0, i.jsx)(E.zx, {
                                                onClick: this.handleForgotPassword,
                                                look: E.zx.Looks.LINK,
                                                color: E.zx.Colors.LINK,
                                                className: a()(q.marginBottom20, q.marginTop4),
                                                children: H.intl.string(H.t.wWIufn)
                                            }),
                                            (0, i.jsx)(E.zx, {
                                                type: 'submit',
                                                submitting: s === V.u34.LOGGING_IN,
                                                color: g ? E.zx.Colors.GREEN : E.zx.Colors.BRAND,
                                                className: q.marginBottom8,
                                                children: g ? H.intl.string(H.t.wvVThI) : H.intl.string(H.t.dKhVQE)
                                            }),
                                            (0, i.jsxs)('div', {
                                                className: q.marginTop4,
                                                children: [
                                                    (0, i.jsx)('span', {
                                                        className: W.needAccount,
                                                        children: H.intl.string(H.t.tmE73t)
                                                    }),
                                                    (0, i.jsx)(E.zx, {
                                                        onClick: this.handleGotoRegister,
                                                        look: E.zx.Looks.LINK,
                                                        color: E.zx.Colors.LINK,
                                                        className: W.smallRegisterLink,
                                                        children: H.intl.string(H.t.pV8xeX)
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        }),
                        (0, i.jsx)(h.y5t, {
                            children: e
                                ? (0, i.jsx)(F.Z, {
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
        return (0, i.jsxs)('div', {
            className: W.__invalid_pageContainer,
            children: [
                (0, i.jsx)(E.ZP, {
                    onSubmit: this.handleLogin,
                    tag: 'form',
                    className: e,
                    expanded: !0,
                    children: this.renderDefaultForm(!0)
                }),
                t && (0, i.jsx)(S.Z, {})
            ]
        });
    }
    renderGuildTemplate(e) {
        return (0, i.jsx)(z.Z, {
            onSubmit: this.handleLogin,
            tag: 'form',
            className: a()(this.props.authBoxClassName, W.horizontalAuthBox),
            children: () => [(0, i.jsx)(I.Z, { guildTemplate: e }, 'template'), this.renderDefaultForm(!1)]
        });
    }
    renderMFA() {
        let e = {
            ticket: this.props.mfaTicket,
            methods: this.props.mfaMethods
        };
        return (0, i.jsx)(E.ZP, {
            style: { padding: 0 },
            children: (0, i.jsx)(O.Cd, {
                mfaFinish: this.handleTokenSubmitMFA,
                mfaChallenge: e,
                onEarlyClose: () => {
                    g.Z.dispatch({ type: 'LOGIN_RESET' });
                },
                width: 480
            })
        });
    }
    renderIPAuthorization() {
        let { authBoxClassName: e } = this.props,
            { phoneVerifyError: t } = this.state;
        return (0, i.jsx)(E.ZP, {
            tag: 'form',
            className: e,
            children: (0, i.jsx)(b.Z, {
                title: H.intl.string(H.t.w55Ocn),
                subtitle: H.intl.format(H.t.CfRZBg, { onResendClick: this.handleResendCode }),
                error: t,
                onSubmit: this.handleIPAuthorize,
                onCancel: this.loginReset
            })
        });
    }
    renderPasswordRecovery() {
        let { authBoxClassName: e } = this.props,
            { phoneVerifyError: t } = this.state;
        return (0, i.jsx)(E.ZP, {
            tag: 'form',
            className: e,
            children: (0, i.jsx)(b.Z, {
                title: H.intl.string(H.t['+xqy3d']),
                subtitle: H.intl.format(H.t.ef4uZ2, { onResendClick: this.handleResendCode }),
                error: t,
                onSubmit: this.handlePasswordReset,
                onCancel: this.loginReset
            })
        });
    }
    renderChooseAccount() {
        return (0, i.jsx)(y.Z, {
            onDismiss: () => {
                this.setState((e) => X(J({}, e), { dismissedChooseAccount: !0 }));
            }
        });
    }
    render() {
        let { authenticated: e, invite: t, guildTemplate: n, loginStatus: r, handoffAvailable: l } = this.props,
            { checkingHandoff: s, redirecting: o } = this.state;
        if (o || s) return (0, i.jsx)(Q, {});
        if (l) return this.renderHandOffAvailable();
        if (e && s) return this.renderHandOffContinue();
        switch (r) {
            case V.u34.LOGGING_IN_MFA_SMS:
            case V.u34.MFA_SMS_STEP:
            case V.u34.LOGGING_IN_MFA:
            case V.u34.MFA_STEP:
                return this.renderMFA();
            case V.u34.ACCOUNT_SCHEDULED_FOR_DELETION:
            case V.u34.ACCOUNT_DISABLED:
                return this.renderDisabledAccount();
            case V.u34.PHONE_IP_AUTHORIZATION:
                return this.renderIPAuthorization();
            case V.u34.PASSWORD_RECOVERY_PHONE_VERIFICATION:
                return this.renderPasswordRecovery();
            case V.u34.LOGGING_IN:
            case V.u34.NONE:
            default:
                if (null != t && t.state === V.r2o.RESOLVING) return this.renderResolving();
                if (null != n)
                    if (n.state === K.Rj.RESOLVING) return this.renderResolving();
                    else return this.renderGuildTemplate(n);
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
                    await p.Z.loginToken(e, !1),
                    k.default.track(V.rMx.LOGIN_SUCCESSFUL, {
                        source: V.uRl.QR_CODE,
                        login_source: this.loginSource,
                        gift_code_sku_id: this.giftCodeSKUId,
                        is_new_user: !1,
                        login_method: 'remote_auth'
                    });
            }),
            Y(this, 'loginReset', () => {
                this.setState({ errors: {} }), p.Z.loginReset();
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
                null == e || e.preventDefault(), M.S.dispatch(V.CkL.WAVE_EMPHASIZE), this.setState({ errors: {} });
                try {
                    await p.Z.login({
                        login: this.getFullLogin(),
                        password: t,
                        undelete: n,
                        source: this.loginSource,
                        giftCodeSKUId: this.giftCodeSKUId,
                        invite: this.props.invite
                    });
                } catch (t) {
                    let e = (0, x.p)(t);
                    this.setState({ errors: e });
                }
            }),
            Y(this, 'handleIPAuthorize', async (e) => {
                let t = this.getFullLogin();
                this.setState({ errors: {} });
                try {
                    let { token: n } = await C.Z.verifyPhone(t, e, !1);
                    await p.Z.authorizeIPAddress(n), this.handleLogin();
                } catch (e) {
                    null != e.body && null != e.body.message && this.setState({ phoneVerifyError: e.body.message });
                }
            }),
            Y(this, 'handlePasswordReset', async (e) => {
                let { transitionTo: t } = this.props;
                this.setState({ phoneVerifyError: null });
                try {
                    let { token: n } = await C.Z.verifyPhone(this.getFullLogin(), e, !1);
                    t(V.Z5c.RESET, {
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
                let { mfaType: t, data: n, ticket: r } = e;
                return (
                    M.S.dispatch(V.CkL.WAVE_EMPHASIZE),
                    p.Z.loginMFAv2({
                        code: n,
                        ticket: r,
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
                    if ((M.S.dispatch(V.CkL.WAVE_EMPHASIZE), !(await p.Z.forgotPassword(t)))) return;
                    (0, h.h7j)((e) =>
                        (0, i.jsx)(
                            h.ConfirmModal,
                            X(
                                J(
                                    {
                                        header: H.intl.string(H.t.f5Pi7O),
                                        confirmText: H.intl.string(H.t.BddRzc),
                                        confirmButtonColor: E.zx.Colors.BRAND,
                                        className: u.tq ? W.mobile : ''
                                    },
                                    e
                                ),
                                {
                                    children: (0, i.jsx)(h.Text, {
                                        variant: 'text-md/normal',
                                        children: H.intl.format(H.t['6u5hQ0'], { email: t })
                                    })
                                }
                            )
                        )
                    );
                } catch (t) {
                    let e = (0, x.p)(t);
                    this.setState({ errors: e });
                }
            }),
            Y(this, 'handleResendCode', () => {
                C.Z.resendCode(this.getFullLogin());
            }),
            Y(this, 'handleReset', (e) => {
                null != e && e.preventDefault(),
                    p.Z.loginReset(),
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
                let e,
                    { login: t } = this.state,
                    { invite: n, giftCode: r, guildTemplate: i, location: l, transitionTo: s, redirectTo: o } = this.props,
                    a = null != l ? (0, c.parse)(l.search) : {};
                '' !== t && (a.email = t), null != n ? ((a.mode = 'register'), (e = V.Z5c.INVITE(n.code))) : null != r ? ((a.mode = 'register'), (e = V.Z5c.GIFT_CODE(r.code))) : null != i ? (e = V.Z5c.GUILD_TEMPLATE(i.code)) : null != o ? ((e = V.Z5c.REGISTER), (a.redirect_to = o)) : (e = V.Z5c.REGISTER), this.loginReset(), s(e, { search: (0, c.stringify)(a) }), M.S.dispatch(V.CkL.WAVE_EMPHASIZE);
            });
        let r = null != e.location ? (0, c.parse)(e.location.search) : {};
        this.state = {
            redirecting: e.authenticated,
            checkingHandoff: e.handoffAvailable,
            loginPrefix: '',
            login: null != (n = null != (t = r.email) ? t : r.login) ? n : '',
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
Y($, 'defaultProps', { transitionTo: (e) => n.g.location.assign(e) });
let ee = function (e) {
    let t = (0, d.cj)([L.Z, D.Z, w.default, N.Z, P.Z], () => ({
        authenticated: w.default.isAuthenticated(),
        handoffAvailable: L.Z.isHandoffAvailable(),
        user: L.Z.user,
        loginStatus: w.default.getLoginStatus(),
        mfaTicket: w.default.getMFATicket(),
        mfaMethods: w.default.getMFAMethods(),
        defaultRoute: D.Z.defaultRoute,
        country: P.Z.getCountryCode(),
        hasLoggedInAccounts: N.Z.getHasLoggedInAccounts()
    }));
    return (0, i.jsx)($, J({}, e, t));
};
