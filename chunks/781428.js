n.d(t, {
    Z: () => ee,
    q: () => Q
}),
    n(49124),
    n(35282);
var r,
    i = n(200651),
    o = n(192379),
    a = n(533126),
    l = n(120356),
    s = n.n(l),
    c = n(593473),
    u = n(873546),
    d = n(442837),
    p = n(481060),
    h = n(570140),
    g = n(893776),
    f = n(899742),
    m = n(579806),
    _ = n(743142),
    b = n(254942),
    x = n(388905),
    N = n(379760),
    v = n(600164),
    E = n(100159),
    I = n(473855),
    j = n(124860),
    S = n(86779),
    O = n(726745),
    C = n(913583),
    y = n(144114),
    T = n(541692),
    P = n(952802),
    A = n(703656),
    Z = n(108427),
    R = n(365007),
    w = n(314897),
    L = n(117240),
    D = n(896797),
    k = n(626135),
    W = n(585483),
    B = n(358085),
    M = n(481153),
    G = n(588705),
    U = n(494526),
    F = n(163671),
    z = n(981631),
    V = n(260539),
    H = n(388032),
    K = n(555763),
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
    return (0, i.jsx)(x.ZP, { children: (0, i.jsx)(p.$jN, {}) });
}
class $ extends (r = o.PureComponent) {
    static getDerivedStateFromProps(e) {
        let { handoffAvailable: t, authenticated: n } = e;
        return t || n ? null : { checkingHandoff: !1 };
    }
    componentDidMount() {
        let { handoffAvailable: e, authenticated: t, giftCodeSKU: n, invite: r, location: i } = this.props;
        e && !t ? (0, f.is)() : t && this.loginOrSSO(t, i, !0),
            k.default.track(
                z.rMx.LOGIN_VIEWED,
                X(
                    J(
                        {
                            location: null != r ? 'Invite Login Page' : 'Non-Invite Login Page',
                            login_source: this.loginSource,
                            authenticated: t
                        },
                        null != n ? (0, E.Z)(n, !1, !1) : {}
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
                                    r = (0, a.wz)(JSON.parse(t));
                                return (
                                    (r.signal = this.state.conditionalMediationAbortController.signal),
                                    (0, a.U2)(r)
                                        .then(
                                            (e) => (
                                                this.setState({ errors: {} }),
                                                h.Z.dispatch({ type: 'PASSWORDLESS_START' }),
                                                k.default.track(z.rMx.LOGIN_ATTEMPTED, {
                                                    source: z.uRl.PASSWORDLESS_CONDITIONAL_UI,
                                                    login_method: 'passwordless',
                                                    login_source: this.loginSource,
                                                    gift_code_sku_id: this.giftCodeSKUId
                                                }),
                                                g.Z.loginWebAuthn({
                                                    ticket: n,
                                                    credential: JSON.stringify(e),
                                                    source: this.loginSource,
                                                    giftCodeSKUId: this.giftCodeSKUId
                                                }).catch((e) => {
                                                    throw (this.setState({ errors: (0, b.F)(e) }), e);
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
            (0, Z.e)('login');
    }
    componentDidUpdate(e, t) {
        let { authenticated: n, location: r } = this.props,
            { checkingHandoff: i } = this.state;
        if ((!n || e.authenticated || i || (this.state.conditionalMediationAbortController.abort(), this.loginOrSSO(n, r)), t.errors !== this.state.errors)) {
            var o, a, l;
            this.hasError('password') ? null == (o = this.passwordRef) || o.focus() : this.hasError('email') || this.hasError('login') ? null == (a = this.loginRef) || a.focus() : this.hasError('code') && (null == (l = this.codeRef) || l.focus());
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
        e && null != t && (this.setState({ redirecting: !0 }), n ? g.Z.verifySSOToken('login').then(() => this.transitionSSO(t)) : this.transitionSSO(t));
    }
    transitionSSO(e) {
        let { transitionTo: t, redirectTo: n, replaceWith: r } = this.props,
            i = null != e ? (0, c.parse)(e.search) : {};
        if ((delete i.redirect_to, null != n)) null != r ? r(n) : t(n);
        else if (null == i.service) t(z.Z5c.APP);
        else {
            let e = window.location.protocol + window.GLOBAL_ENV.API_ENDPOINT + z.ANM.SSO,
                t = X(J({}, i), { token: w.default.getToken() });
            window.location = ''.concat(e, '?').concat((0, c.stringify)(t));
        }
    }
    hasError(e) {
        return null != this.state.errors[e];
    }
    renderHandOffAvailable() {
        let { authBoxClassName: e } = this.props;
        return (0, i.jsxs)(x.ZP, {
            className: e,
            children: [
                (0, i.jsx)(x.Hh, {}),
                (0, i.jsx)(x.Dx, {
                    className: q.marginBottom8,
                    children: H.NW.string(H.t.S6RMND)
                }),
                (0, i.jsx)(x.DK, { children: H.NW.string(H.t.YZiJbm) })
            ]
        });
    }
    renderHandOffContinue() {
        let { user: e, transitionTo: t, authBoxClassName: n } = this.props;
        return null == e
            ? null
            : (0, i.jsxs)(x.ZP, {
                  className: n,
                  children: [
                      (0, i.jsx)(x.qE, {
                          src: e.getAvatarURL(void 0, 100),
                          size: p.EFr.DEPRECATED_SIZE_100,
                          className: q.marginBottom20
                      }),
                      (0, i.jsx)(x.Dx, {
                          className: q.marginBottom8,
                          children: H.NW.format(H.t.ot19ho, { name: e.toString() })
                      }),
                      (0, i.jsx)(x.DK, {
                          className: q.marginBottom40,
                          children: H.NW.string(H.t['2xkqzc'])
                      }),
                      (0, i.jsxs)(x.gO, {
                          children: [
                              (0, i.jsx)(x.zx, {
                                  onClick: () => t(z.Z5c.APP),
                                  className: q.marginBottom8,
                                  children: H.NW.format(H.t.fohtv7, { name: e.toString() })
                              }),
                              (0, i.jsx)(x.zx, {
                                  look: x.zx.Looks.LINK,
                                  color: x.zx.Colors.LINK,
                                  onClick: this.handleReset,
                                  children: H.NW.string(H.t.nO564e)
                              })
                          ]
                      })
                  ]
              });
    }
    renderDisabledAccount() {
        let { authBoxClassName: e } = this.props,
            t = this.props.loginStatus === z.u34.ACCOUNT_DISABLED,
            n = t ? H.NW.string(H.t['j3rC+f']) : H.NW.string(H.t.ZFWofn),
            r = t ? H.NW.string(H.t['6eNTWV']) : H.NW.string(H.t.pCBti4);
        return (0, i.jsx)(x.ZP, {
            tag: 'form',
            onSubmit: this.handleReset,
            className: e,
            children: (0, i.jsxs)(p.y5t, {
                component: (0, i.jsx)(x.Dx, {
                    className: q.marginBottom8,
                    children: n
                }),
                children: [
                    (0, i.jsx)(x.DK, {
                        className: q.marginBottom20,
                        children: r
                    }),
                    (0, i.jsxs)(x.gO, {
                        children: [
                            (0, i.jsx)(x.zx, {
                                color: x.zx.Colors.BRAND,
                                type: 'submit',
                                children: H.NW.string(H.t.JhDw5u)
                            }),
                            (0, i.jsx)('div', {
                                className: s()(q.marginTop8, K.needAccount),
                                children: H.NW.format(H.t.js2rr6, { onClick: this.handleCancelAccountDeletion })
                            })
                        ]
                    })
                ]
            })
        });
    }
    renderResolving() {
        let { authBoxClassName: e, country: t } = this.props;
        return (0, i.jsxs)(x.ZP, {
            className: e,
            children: [
                (0, i.jsx)(G.R, {}),
                (0, i.jsxs)(x.gO, {
                    className: q.marginTop20,
                    children: [
                        (0, i.jsx)(P.Z, {
                            className: q.marginBottom20,
                            alpha2: t.alpha2,
                            countryCode: t.code.split(' ')[0],
                            label: H.NW.string(H.t.tUjnxs),
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
                        (0, i.jsx)(x.II, {
                            className: q.marginBottom20,
                            label: H.NW.string(H.t['CIGa+/']),
                            onChange: (e) => this.setState({ password: e }),
                            type: 'password',
                            setRef: this.setPasswordRef,
                            autoComplete: 'off',
                            spellCheck: 'false',
                            value: this.state.password,
                            required: !0
                        }),
                        (0, i.jsx)(x.zx, {
                            className: q.marginBottom8,
                            type: 'submit',
                            disabled: !0,
                            children: H.NW.string(H.t.dKhVQE)
                        }),
                        (0, i.jsx)(x.zx, {
                            disabled: !0,
                            look: x.zx.Looks.LINK,
                            color: x.zx.Colors.LINK,
                            children: H.NW.string(H.t.wWIufn)
                        }),
                        (0, i.jsx)(x.zx, {
                            disabled: !0,
                            className: q.marginTop4,
                            look: x.zx.Looks.LINK,
                            color: x.zx.Colors.LINK,
                            children: H.NW.string(H.t.tmE73t)
                        })
                    ]
                })
            ]
        });
    }
    renderDefaultForm(e) {
        var t;
        let n,
            { invite: r, giftCode: o, loginStatus: a, country: l, showMobileWebHandoff: c, disableAutofocusOnDefaultForm: u } = this.props,
            d = !this.hasError('email') && this.hasError('password'),
            h = (null == r ? void 0 : r.stage_instance) != null;
        return (
            (n =
                null == r || h
                    ? null != o
                        ? (0, i.jsx)(M.Z, { giftCode: o })
                        : (0, i.jsxs)('div', {
                              className: K.header,
                              children: [
                                  (0, i.jsx)(
                                      x.Dx,
                                      {
                                          className: q.marginBottom8,
                                          children: H.NW.string(H.t['7fNJgI'])
                                      },
                                      'title'
                                  ),
                                  !1 === (0, B.isAndroidWeb)() ? (0, i.jsx)(x.DK, { children: H.NW.string(H.t.euS7r6) }, 'subtitle') : null
                              ]
                          })
                    : (0, i.jsx)(G.Z, { invite: r })),
            (0, i.jsxs)(
                v.Z,
                {
                    direction: v.Z.Direction.HORIZONTAL,
                    align: v.Z.Align.CENTER,
                    children: [
                        (0, i.jsxs)('div', {
                            className: K.mainLoginContainer,
                            children: [
                                this.canShowChooseAccount &&
                                    this.state.dismissedChooseAccount &&
                                    (0, i.jsx)(x.zx, {
                                        onClick: () => {
                                            this.setState((e) => X(J({}, e), { dismissedChooseAccount: !1 }));
                                        },
                                        look: x.zx.Looks.LINK,
                                        color: x.zx.Colors.PRIMARY,
                                        className: K.goBackButton,
                                        children: (0, i.jsxs)('div', {
                                            className: K.content,
                                            children: [
                                                (0, i.jsx)(p.V7D, {
                                                    size: 'xs',
                                                    color: 'currentColor',
                                                    className: K.caret
                                                }),
                                                (0, i.jsx)(p.Text, {
                                                    variant: 'text-md/normal',
                                                    children: H.NW.string(H.t['1MrpWF'])
                                                })
                                            ]
                                        })
                                    }),
                                n,
                                (0, i.jsx)(p.y5t, {
                                    children: (0, i.jsxs)(x.gO, {
                                        className: q.marginTop20,
                                        children: [
                                            (0, i.jsx)(P.Z, {
                                                alpha2: l.alpha2,
                                                countryCode: l.code.split(' ')[0],
                                                className: q.marginBottom20,
                                                label: H.NW.string(H.t.tUjnxs),
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
                                            (0, i.jsx)(x.II, {
                                                label: H.NW.string(H.t['CIGa+/']),
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
                                            (0, i.jsx)(x.zx, {
                                                onClick: this.handleForgotPassword,
                                                look: x.zx.Looks.LINK,
                                                color: x.zx.Colors.LINK,
                                                className: s()(q.marginBottom20, q.marginTop4),
                                                children: H.NW.string(H.t.wWIufn)
                                            }),
                                            (0, i.jsx)(x.zx, {
                                                type: 'submit',
                                                submitting: a === z.u34.LOGGING_IN,
                                                color: h ? x.zx.Colors.GREEN : x.zx.Colors.BRAND,
                                                className: q.marginBottom8,
                                                children: h ? H.NW.string(H.t.wvVThI) : H.NW.string(H.t.dKhVQE)
                                            }),
                                            (0, i.jsxs)('div', {
                                                className: q.marginTop4,
                                                children: [
                                                    (0, i.jsx)('span', {
                                                        className: K.needAccount,
                                                        children: H.NW.string(H.t.tmE73t)
                                                    }),
                                                    (0, i.jsx)(x.zx, {
                                                        onClick: this.handleGotoRegister,
                                                        look: x.zx.Looks.LINK,
                                                        color: x.zx.Colors.LINK,
                                                        className: K.smallRegisterLink,
                                                        children: H.NW.string(H.t.pV8xeX)
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        }),
                        (0, i.jsx)(p.y5t, {
                            children: e
                                ? (0, i.jsx)(U.Z, {
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
            className: K.__invalid_pageContainer,
            children: [
                (0, i.jsx)(x.ZP, {
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
        return (0, i.jsx)(F.Z, {
            onSubmit: this.handleLogin,
            tag: 'form',
            className: s()(this.props.authBoxClassName, K.horizontalAuthBox),
            children: () => [(0, i.jsx)(I.Z, { guildTemplate: e }, 'template'), this.renderDefaultForm(!1)]
        });
    }
    renderMFA() {
        let e = {
            ticket: this.props.mfaTicket,
            methods: this.props.mfaMethods
        };
        return (0, i.jsx)(x.ZP, {
            style: { padding: 0 },
            children: (0, i.jsx)(j.Cd, {
                mfaFinish: this.handleTokenSubmitMFA,
                mfaChallenge: e,
                onEarlyClose: () => {
                    h.Z.dispatch({ type: 'LOGIN_RESET' });
                },
                width: 480
            })
        });
    }
    renderIPAuthorization() {
        let { authBoxClassName: e } = this.props,
            { phoneVerifyError: t } = this.state;
        return (0, i.jsx)(x.ZP, {
            tag: 'form',
            className: e,
            children: (0, i.jsx)(N.Z, {
                title: H.NW.string(H.t.w55Ocn),
                subtitle: H.NW.format(H.t.CfRZBg, { onResendClick: this.handleResendCode }),
                error: t,
                onSubmit: this.handleIPAuthorize,
                onCancel: this.loginReset
            })
        });
    }
    renderPasswordRecovery() {
        let { authBoxClassName: e } = this.props,
            { phoneVerifyError: t } = this.state;
        return (0, i.jsx)(x.ZP, {
            tag: 'form',
            className: e,
            children: (0, i.jsx)(N.Z, {
                title: H.NW.string(H.t['+xqy3d']),
                subtitle: H.NW.format(H.t.ef4uZ2, { onResendClick: this.handleResendCode }),
                error: t,
                onSubmit: this.handlePasswordReset,
                onCancel: this.loginReset
            })
        });
    }
    renderChooseAccount() {
        return (0, i.jsx)(C.Z, {
            onDismiss: () => {
                this.setState((e) => X(J({}, e), { dismissedChooseAccount: !0 }));
            }
        });
    }
    render() {
        let { authenticated: e, invite: t, guildTemplate: n, loginStatus: r, handoffAvailable: o } = this.props,
            { checkingHandoff: a, redirecting: l } = this.state;
        if (l || a) return (0, i.jsx)(Q, {});
        if (o) return this.renderHandOffAvailable();
        if (e && a) return this.renderHandOffContinue();
        switch (r) {
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
                if (null != n)
                    if (n.state === V.Rj.RESOLVING) return this.renderResolving();
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
                    await g.Z.loginToken(e, !1),
                    k.default.track(z.rMx.LOGIN_SUCCESSFUL, {
                        source: z.uRl.QR_CODE,
                        login_source: this.loginSource,
                        gift_code_sku_id: this.giftCodeSKUId,
                        is_new_user: !1,
                        login_method: 'remote_auth'
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
                null == e || e.preventDefault(), W.S.dispatch(z.CkL.WAVE_EMPHASIZE), this.setState({ errors: {} });
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
                    let e = (0, b.p)(t);
                    this.setState({ errors: e });
                }
            }),
            Y(this, 'handleIPAuthorize', async (e) => {
                let t = this.getFullLogin();
                this.setState({ errors: {} });
                try {
                    let { token: n } = await y.Z.verifyPhone(t, e, !1);
                    await g.Z.authorizeIPAddress(n), this.handleLogin();
                } catch (e) {
                    null != e.body && null != e.body.message && this.setState({ phoneVerifyError: e.body.message });
                }
            }),
            Y(this, 'handlePasswordReset', async (e) => {
                let { transitionTo: t } = this.props;
                this.setState({ phoneVerifyError: null });
                try {
                    let { token: n } = await y.Z.verifyPhone(this.getFullLogin(), e, !1);
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
                let { mfaType: t, data: n, ticket: r } = e;
                return (
                    W.S.dispatch(z.CkL.WAVE_EMPHASIZE),
                    g.Z.loginMFAv2({
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
                    if ((W.S.dispatch(z.CkL.WAVE_EMPHASIZE), !(await g.Z.forgotPassword(t)))) return;
                    (0, p.h7j)((e) =>
                        (0, i.jsx)(
                            p.ConfirmModal,
                            X(
                                J(
                                    {
                                        header: H.NW.string(H.t.f5Pi7O),
                                        confirmText: H.NW.string(H.t.BddRzc),
                                        confirmButtonColor: x.zx.Colors.BRAND,
                                        className: u.tq ? K.mobile : ''
                                    },
                                    e
                                ),
                                {
                                    children: (0, i.jsx)(p.Text, {
                                        variant: 'text-md/normal',
                                        children: H.NW.format(H.t['6u5hQ0'], { email: t })
                                    })
                                }
                            )
                        )
                    );
                } catch (t) {
                    let e = (0, b.p)(t);
                    this.setState({ errors: e });
                }
            }),
            Y(this, 'handleResendCode', () => {
                y.Z.resendCode(this.getFullLogin());
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
                let e,
                    { login: t } = this.state,
                    { invite: n, giftCode: r, guildTemplate: i, location: o, transitionTo: a, redirectTo: l } = this.props,
                    s = null != o ? (0, c.parse)(o.search) : {};
                '' !== t && (s.email = t), null != n ? ((s.mode = 'register'), (e = z.Z5c.INVITE(n.code))) : null != r ? ((s.mode = 'register'), (e = z.Z5c.GIFT_CODE(r.code))) : null != i ? (e = z.Z5c.GUILD_TEMPLATE(i.code)) : null != l ? ((e = z.Z5c.REGISTER), (s.redirect_to = l)) : (e = z.Z5c.REGISTER), this.loginReset(), a(e, { search: (0, c.stringify)(s) }), W.S.dispatch(z.CkL.WAVE_EMPHASIZE);
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
    let t = (0, d.cj)([L.Z, D.Z, w.default, O.Z, T.Z], () => ({
        authenticated: w.default.isAuthenticated(),
        handoffAvailable: L.Z.isHandoffAvailable(),
        user: L.Z.user,
        loginStatus: w.default.getLoginStatus(),
        mfaTicket: w.default.getMFATicket(),
        mfaMethods: w.default.getMFAMethods(),
        defaultRoute: D.Z.defaultRoute,
        country: T.Z.getCountryCode(),
        hasLoggedInAccounts: O.Z.getHasLoggedInAccounts()
    }));
    return (0, i.jsx)($, J({}, e, t));
};
