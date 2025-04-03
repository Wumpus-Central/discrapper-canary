n.d(t, {
    Z: () => $,
    q: () => X
}),
    n(26686),
    n(301563);
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
    g = n(570140),
    h = n(893776),
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
    A = n(108427),
    Z = n(365007),
    R = n(314897),
    w = n(117240),
    L = n(896797),
    D = n(626135),
    k = n(585483),
    W = n(358085),
    B = n(481153),
    M = n(588705),
    G = n(494526),
    U = n(163671),
    F = n(981631),
    z = n(58346),
    V = n(388032),
    H = n(555763),
    K = n(20493);
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
function Y(e) {
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
                q(e, t, n[t]);
            });
    }
    return e;
}
function J(e, t) {
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
function X() {
    return (0, i.jsx)(x.ZP, { children: (0, i.jsx)(p.$jN, {}) });
}
class Q extends (r = o.PureComponent) {
    static getDerivedStateFromProps(e) {
        let { handoffAvailable: t, authenticated: n } = e;
        return t || n ? null : { checkingHandoff: !1 };
    }
    componentDidMount() {
        let { handoffAvailable: e, authenticated: t, giftCodeSKU: n, invite: r, location: i } = this.props;
        e && !t ? (0, f.is)() : t && this.loginOrSSO(t, i, !0),
            D.default.track(
                F.rMx.LOGIN_VIEWED,
                Y(
                    {
                        location: null != r ? 'Invite Login Page' : 'Non-Invite Login Page',
                        login_source: this.loginSource,
                        authenticated: t
                    },
                    null != n ? (0, E.Z)(n, !1, !1) : {}
                ),
                { flush: !0 }
            ),
            null == m.Z &&
                null != window.PublicKeyCredential &&
                null != PublicKeyCredential.isConditionalMediationAvailable &&
                PublicKeyCredential.isConditionalMediationAvailable().then((e) => {
                    e &&
                        (0, Z.us)()
                            .then((e) => {
                                let { challenge: t, ticket: n } = e,
                                    r = (0, a.wz)(JSON.parse(t));
                                return (
                                    (r.signal = this.state.conditionalMediationAbortController.signal),
                                    (0, a.U2)(r)
                                        .then(
                                            (e) => (
                                                this.setState({ errors: {} }),
                                                g.Z.dispatch({ type: 'PASSWORDLESS_START' }),
                                                D.default.track(F.rMx.LOGIN_ATTEMPTED, {
                                                    source: F.uRl.PASSWORDLESS_CONDITIONAL_UI,
                                                    login_method: 'passwordless',
                                                    login_source: this.loginSource,
                                                    gift_code_sku_id: this.giftCodeSKUId
                                                }),
                                                h.Z.loginWebAuthn({
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
            h.Z.getLocationMetadata(),
            (0, A.e)('login');
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
        e && null != t && (this.setState({ redirecting: !0 }), n ? h.Z.verifySSOToken().then(() => this.transitionSSO(t)) : this.transitionSSO(t));
    }
    transitionSSO(e) {
        let { transitionTo: t, redirectTo: n, replaceWith: r } = this.props,
            i = null != e ? (0, c.parse)(e.search) : {};
        if ((delete i.redirect_to, null != n)) null != r ? r(n) : t(n);
        else if (null == i.service) t(F.Z5c.APP);
        else {
            let e = window.location.protocol + window.GLOBAL_ENV.API_ENDPOINT + F.ANM.SSO,
                t = J(Y({}, i), { token: R.default.getToken() });
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
                    className: K.marginBottom8,
                    children: V.NW.string(V.t.S6RMND)
                }),
                (0, i.jsx)(x.DK, { children: V.NW.string(V.t.YZiJbm) })
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
                          className: K.marginBottom20
                      }),
                      (0, i.jsx)(x.Dx, {
                          className: K.marginBottom8,
                          children: V.NW.format(V.t.ot19ho, { name: e.toString() })
                      }),
                      (0, i.jsx)(x.DK, {
                          className: K.marginBottom40,
                          children: V.NW.string(V.t['2xkqzc'])
                      }),
                      (0, i.jsxs)(x.gO, {
                          children: [
                              (0, i.jsx)(x.zx, {
                                  onClick: () => t(F.Z5c.APP),
                                  className: K.marginBottom8,
                                  children: V.NW.format(V.t.fohtv7, { name: e.toString() })
                              }),
                              (0, i.jsx)(x.zx, {
                                  look: x.zx.Looks.LINK,
                                  color: x.zx.Colors.LINK,
                                  onClick: this.handleReset,
                                  children: V.NW.string(V.t.nO564e)
                              })
                          ]
                      })
                  ]
              });
    }
    renderDisabledAccount() {
        let { authBoxClassName: e } = this.props,
            t = this.props.loginStatus === F.u34.ACCOUNT_DISABLED,
            n = t ? V.NW.string(V.t['j3rC+f']) : V.NW.string(V.t.ZFWofn),
            r = t ? V.NW.string(V.t['6eNTWV']) : V.NW.string(V.t.pCBti4);
        return (0, i.jsx)(x.ZP, {
            tag: 'form',
            onSubmit: this.handleReset,
            className: e,
            children: (0, i.jsxs)(p.y5t, {
                component: (0, i.jsx)(x.Dx, {
                    className: K.marginBottom8,
                    children: n
                }),
                children: [
                    (0, i.jsx)(x.DK, {
                        className: K.marginBottom20,
                        children: r
                    }),
                    (0, i.jsxs)(x.gO, {
                        children: [
                            (0, i.jsx)(x.zx, {
                                color: x.zx.Colors.BRAND,
                                type: 'submit',
                                children: V.NW.string(V.t.JhDw5u)
                            }),
                            (0, i.jsx)('div', {
                                className: s()(K.marginTop8, H.needAccount),
                                children: V.NW.format(V.t.js2rr6, { onClick: this.handleCancelAccountDeletion })
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
                (0, i.jsx)(M.R, {}),
                (0, i.jsxs)(x.gO, {
                    className: K.marginTop20,
                    children: [
                        (0, i.jsx)(P.Z, {
                            className: K.marginBottom20,
                            alpha2: t.alpha2,
                            countryCode: t.code.split(' ')[0],
                            label: V.NW.string(V.t.tUjnxs),
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
                            className: K.marginBottom20,
                            label: V.NW.string(V.t['CIGa+/']),
                            onChange: (e) => this.setState({ password: e }),
                            type: 'password',
                            setRef: this.setPasswordRef,
                            autoComplete: 'off',
                            spellCheck: 'false',
                            value: this.state.password,
                            required: !0
                        }),
                        (0, i.jsx)(x.zx, {
                            className: K.marginBottom8,
                            type: 'submit',
                            disabled: !0,
                            children: V.NW.string(V.t.dKhVQE)
                        }),
                        (0, i.jsx)(x.zx, {
                            disabled: !0,
                            look: x.zx.Looks.LINK,
                            color: x.zx.Colors.LINK,
                            children: V.NW.string(V.t.wWIufn)
                        }),
                        (0, i.jsx)(x.zx, {
                            disabled: !0,
                            className: K.marginTop4,
                            look: x.zx.Looks.LINK,
                            color: x.zx.Colors.LINK,
                            children: V.NW.string(V.t.tmE73t)
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
            g = (null == r ? void 0 : r.stage_instance) != null;
        return (
            (n =
                null == r || g
                    ? null != o
                        ? (0, i.jsx)(B.Z, { giftCode: o })
                        : (0, i.jsxs)('div', {
                              className: H.header,
                              children: [
                                  (0, i.jsx)(
                                      x.Dx,
                                      {
                                          className: K.marginBottom8,
                                          children: V.NW.string(V.t['7fNJgI'])
                                      },
                                      'title'
                                  ),
                                  !1 === (0, W.isAndroidWeb)() ? (0, i.jsx)(x.DK, { children: V.NW.string(V.t.euS7r6) }, 'subtitle') : null
                              ]
                          })
                    : (0, i.jsx)(M.Z, { invite: r })),
            (0, i.jsxs)(
                v.Z,
                {
                    direction: v.Z.Direction.HORIZONTAL,
                    align: v.Z.Align.CENTER,
                    children: [
                        (0, i.jsxs)('div', {
                            className: H.mainLoginContainer,
                            children: [
                                this.canShowChooseAccount &&
                                    this.state.dismissedChooseAccount &&
                                    (0, i.jsx)(x.zx, {
                                        onClick: () => {
                                            this.setState((e) => J(Y({}, e), { dismissedChooseAccount: !1 }));
                                        },
                                        look: x.zx.Looks.LINK,
                                        color: x.zx.Colors.PRIMARY,
                                        className: H.goBackButton,
                                        children: (0, i.jsxs)('div', {
                                            className: H.content,
                                            children: [
                                                (0, i.jsx)(p.V7D, {
                                                    size: 'xs',
                                                    color: 'currentColor',
                                                    className: H.caret
                                                }),
                                                (0, i.jsx)(p.Text, {
                                                    variant: 'text-md/normal',
                                                    children: V.NW.string(V.t['1MrpWF'])
                                                })
                                            ]
                                        })
                                    }),
                                n,
                                (0, i.jsx)(p.y5t, {
                                    children: (0, i.jsxs)(x.gO, {
                                        className: K.marginTop20,
                                        children: [
                                            (0, i.jsx)(P.Z, {
                                                alpha2: l.alpha2,
                                                countryCode: l.code.split(' ')[0],
                                                className: K.marginBottom20,
                                                label: V.NW.string(V.t.tUjnxs),
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
                                                label: V.NW.string(V.t['CIGa+/']),
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
                                                className: s()(K.marginBottom20, K.marginTop4),
                                                children: V.NW.string(V.t.wWIufn)
                                            }),
                                            (0, i.jsx)(x.zx, {
                                                type: 'submit',
                                                submitting: a === F.u34.LOGGING_IN,
                                                color: g ? x.zx.Colors.GREEN : x.zx.Colors.BRAND,
                                                className: K.marginBottom8,
                                                children: g ? V.NW.string(V.t.wvVThI) : V.NW.string(V.t.dKhVQE)
                                            }),
                                            (0, i.jsxs)('div', {
                                                className: K.marginTop4,
                                                children: [
                                                    (0, i.jsx)('span', {
                                                        className: H.needAccount,
                                                        children: V.NW.string(V.t.tmE73t)
                                                    }),
                                                    (0, i.jsx)(x.zx, {
                                                        onClick: this.handleGotoRegister,
                                                        look: x.zx.Looks.LINK,
                                                        color: x.zx.Colors.LINK,
                                                        className: H.smallRegisterLink,
                                                        children: V.NW.string(V.t.pV8xeX)
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
                                ? (0, i.jsx)(G.Z, {
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
            className: H.__invalid_pageContainer,
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
        return (0, i.jsx)(U.Z, {
            onSubmit: this.handleLogin,
            tag: 'form',
            className: s()(this.props.authBoxClassName, H.horizontalAuthBox),
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
                    g.Z.dispatch({ type: 'LOGIN_RESET' });
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
                title: V.NW.string(V.t.w55Ocn),
                subtitle: V.NW.format(V.t.CfRZBg, { onResendClick: this.handleResendCode }),
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
                title: V.NW.string(V.t['+xqy3d']),
                subtitle: V.NW.format(V.t.ef4uZ2, { onResendClick: this.handleResendCode }),
                error: t,
                onSubmit: this.handlePasswordReset,
                onCancel: this.loginReset
            })
        });
    }
    renderChooseAccount() {
        return (0, i.jsx)(C.Z, {
            onDismiss: () => {
                this.setState((e) => J(Y({}, e), { dismissedChooseAccount: !0 }));
            }
        });
    }
    render() {
        let { authenticated: e, invite: t, guildTemplate: n, loginStatus: r, handoffAvailable: o } = this.props,
            { checkingHandoff: a, redirecting: l } = this.state;
        if (l || a) return (0, i.jsx)(X, {});
        if (o) return this.renderHandOffAvailable();
        if (e && a) return this.renderHandOffContinue();
        switch (r) {
            case F.u34.LOGGING_IN_MFA_SMS:
            case F.u34.MFA_SMS_STEP:
            case F.u34.LOGGING_IN_MFA:
            case F.u34.MFA_STEP:
                return this.renderMFA();
            case F.u34.ACCOUNT_SCHEDULED_FOR_DELETION:
            case F.u34.ACCOUNT_DISABLED:
                return this.renderDisabledAccount();
            case F.u34.PHONE_IP_AUTHORIZATION:
                return this.renderIPAuthorization();
            case F.u34.PASSWORD_RECOVERY_PHONE_VERIFICATION:
                return this.renderPasswordRecovery();
            case F.u34.LOGGING_IN:
            case F.u34.NONE:
            default:
                if (null != t && t.state === F.r2o.RESOLVING) return this.renderResolving();
                if (null != n)
                    if (n.state === z.Rj.RESOLVING) return this.renderResolving();
                    else return this.renderGuildTemplate(n);
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
                    await h.Z.loginToken(e, !1),
                    D.default.track(F.rMx.LOGIN_SUCCESSFUL, {
                        source: F.uRl.QR_CODE,
                        login_source: this.loginSource,
                        gift_code_sku_id: this.giftCodeSKUId,
                        is_new_user: !1
                    });
            }),
            q(this, 'loginReset', () => {
                this.setState({ errors: {} }), h.Z.loginReset();
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
                null == e || e.preventDefault(), k.S.dispatch(F.CkL.WAVE_EMPHASIZE), this.setState({ errors: {} });
                try {
                    await h.Z.login({
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
            q(this, 'handleIPAuthorize', async (e) => {
                let t = this.getFullLogin();
                this.setState({ errors: {} });
                try {
                    let { token: n } = await y.Z.verifyPhone(t, e, !1);
                    await h.Z.authorizeIPAddress(n), this.handleLogin();
                } catch (e) {
                    null != e.body && null != e.body.message && this.setState({ phoneVerifyError: e.body.message });
                }
            }),
            q(this, 'handlePasswordReset', async (e) => {
                let { transitionTo: t } = this.props;
                this.setState({ phoneVerifyError: null });
                try {
                    let { token: n } = await y.Z.verifyPhone(this.getFullLogin(), e, !1);
                    t(F.Z5c.RESET, {
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
                let { mfaType: t, data: n, ticket: r } = e;
                return (
                    k.S.dispatch(F.CkL.WAVE_EMPHASIZE),
                    h.Z.loginMFAv2({
                        code: n,
                        ticket: r,
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
                    if ((k.S.dispatch(F.CkL.WAVE_EMPHASIZE), !(await h.Z.forgotPassword(t)))) return;
                    (0, p.h7j)((e) =>
                        (0, i.jsx)(
                            p.ConfirmModal,
                            J(
                                Y(
                                    {
                                        header: V.NW.string(V.t.f5Pi7O),
                                        confirmText: V.NW.string(V.t.BddRzc),
                                        confirmButtonColor: x.zx.Colors.BRAND,
                                        className: u.tq ? H.mobile : ''
                                    },
                                    e
                                ),
                                {
                                    children: (0, i.jsx)(p.Text, {
                                        variant: 'text-md/normal',
                                        children: V.NW.format(V.t['6u5hQ0'], { email: t })
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
            q(this, 'handleResendCode', () => {
                y.Z.resendCode(this.getFullLogin());
            }),
            q(this, 'handleReset', (e) => {
                null != e && e.preventDefault(),
                    h.Z.loginReset(),
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
                let e,
                    { login: t } = this.state,
                    { invite: n, giftCode: r, guildTemplate: i, location: o, transitionTo: a, redirectTo: l } = this.props,
                    s = null != o ? (0, c.parse)(o.search) : {};
                '' !== t && (s.email = t), null != n ? ((s.mode = 'register'), (e = F.Z5c.INVITE(n.code))) : null != r ? ((s.mode = 'register'), (e = F.Z5c.GIFT_CODE(r.code))) : null != i ? (e = F.Z5c.GUILD_TEMPLATE(i.code)) : null != l ? ((e = F.Z5c.REGISTER), (s.redirect_to = l)) : (e = F.Z5c.REGISTER), this.loginReset(), a(e, { search: (0, c.stringify)(s) }), k.S.dispatch(F.CkL.WAVE_EMPHASIZE);
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
q(Q, 'defaultProps', { transitionTo: (e) => n.g.location.assign(e) });
let $ = function (e) {
    let t = (0, d.cj)([w.Z, L.Z, R.default, O.Z, T.Z], () => ({
        authenticated: R.default.isAuthenticated(),
        handoffAvailable: w.Z.isHandoffAvailable(),
        user: w.Z.user,
        loginStatus: R.default.getLoginStatus(),
        mfaTicket: R.default.getMFATicket(),
        mfaMethods: R.default.getMFAMethods(),
        defaultRoute: L.Z.defaultRoute,
        country: T.Z.getCountryCode(),
        hasLoggedInAccounts: O.Z.getHasLoggedInAccounts()
    }));
    return (0, i.jsx)(Q, Y({}, e, t));
};
