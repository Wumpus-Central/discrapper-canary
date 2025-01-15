n.d(t, {
    q: function () {
        return q;
    }
});
var i,
    r = n(200651),
    s = n(192379),
    l = n(533126),
    o = n(120356),
    a = n.n(o),
    c = n(593473),
    d = n(873546),
    u = n(442837),
    h = n(481060),
    g = n(570140),
    m = n(893776),
    f = n(899742),
    p = n(579806),
    x = n(743142),
    _ = n(388905),
    E = n(379760),
    I = n(600164),
    N = n(100159),
    v = n(473855),
    C = n(124860),
    b = n(86779),
    Z = n(726745),
    j = n(913583),
    T = n(144114),
    S = n(541692),
    A = n(952802),
    R = n(108427),
    P = n(365007),
    L = n(314897),
    y = n(117240),
    O = n(896797),
    D = n(626135),
    k = n(585483),
    w = n(358085),
    B = n(481153),
    M = n(588705),
    G = n(494526),
    F = n(163671),
    U = n(981631),
    z = n(58346),
    V = n(388032),
    K = n(514069),
    H = n(275477);
function W(e, t, n) {
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
    return (0, r.jsx)(_.ZP, { children: (0, r.jsx)(h.Spinner, {}) });
}
class J extends (i = s.PureComponent) {
    static getDerivedStateFromProps(e) {
        let { handoffAvailable: t, authenticated: n } = e;
        return t || n ? null : { checkingHandoff: !1 };
    }
    componentDidMount() {
        let { handoffAvailable: e, authenticated: t, giftCodeSKU: n, invite: i, location: r } = this.props;
        e && !t ? (0, f.is)() : t && this.loginOrSSO(t, r, !0),
            D.default.track(
                U.rMx.LOGIN_VIEWED,
                {
                    location: null != i ? 'Invite Login Page' : 'Non-Invite Login Page',
                    login_source: this.loginSource,
                    authenticated: t,
                    ...(null != n ? (0, N.Z)(n, !1, !1) : {})
                },
                { flush: !0 }
            ),
            null == p.Z &&
                null != window.PublicKeyCredential &&
                null != PublicKeyCredential.isConditionalMediationAvailable &&
                PublicKeyCredential.isConditionalMediationAvailable().then((e) => {
                    e &&
                        (0, P.us)()
                            .then((e) => {
                                let { challenge: t, ticket: n } = e,
                                    i = (0, l.wz)(JSON.parse(t));
                                return (
                                    (i.signal = this.state.conditionalMediationAbortController.signal),
                                    (0, l.U2)(i)
                                        .then(
                                            (e) => (
                                                g.Z.dispatch({ type: 'PASSWORDLESS_START' }),
                                                m.Z.loginWebAuthn({
                                                    ticket: n,
                                                    credential: JSON.stringify(e),
                                                    source: this.loginSource,
                                                    giftCodeSKUId: this.giftCodeSKUId
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
            m.Z.getLocationMetadata(),
            (0, R.e)('login');
    }
    componentDidUpdate(e) {
        let { authenticated: t, location: n } = this.props,
            { checkingHandoff: i } = this.state;
        if ((t && !e.authenticated && !i && (this.state.conditionalMediationAbortController.abort(), this.loginOrSSO(t, n)), e.errors !== this.props.errors)) {
            var r, s, l;
            this.hasError('password') ? null === (r = this.passwordRef) || void 0 === r || r.focus() : this.hasError('email') || this.hasError('login') ? null === (s = this.loginRef) || void 0 === s || s.focus() : this.hasError('code') && (null === (l = this.codeRef) || void 0 === l || l.focus());
        }
    }
    get loginSource() {
        let { giftCode: e, guildTemplate: t, invite: n, loginSource: i, redirectTo: r } = this.props;
        if (null != i) return i;
        if (null != e) return 'gift';
        if (null != t) return 'guild_template';
        else if (null != n) {
            if (null != n.guild) return 'guild_invite';
            if (null != n.channel) return 'dm_invite';
            else if (null != n.inviter) return 'friend_invite';
        }
        return null != r ? (0, x.L)(r) : null;
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
        if (!!e && null != t) this.setState({ redirecting: !0 }), n ? m.Z.verifySSOToken().then(() => this.transitionSSO(t)) : this.transitionSSO(t);
    }
    transitionSSO(e) {
        let { transitionTo: t, redirectTo: n, replaceWith: i } = this.props,
            r = null != e ? (0, c.parse)(e.search) : {};
        if ((delete r.redirect_to, null != n)) null != i ? i(n) : t(n);
        else if (null == r.service) t(U.Z5c.APP);
        else {
            let e = window.location.protocol + window.GLOBAL_ENV.API_ENDPOINT + U.ANM.SSO,
                t = {
                    ...r,
                    token: L.default.getToken()
                };
            window.location = ''.concat(e, '?').concat((0, c.stringify)(t));
        }
    }
    hasError(e) {
        return null != this.props.errors[e];
    }
    renderHandOffAvailable() {
        let { authBoxClassName: e } = this.props;
        return (0, r.jsxs)(_.ZP, {
            className: e,
            children: [
                (0, r.jsx)(_.Hh, {}),
                (0, r.jsx)(_.Dx, {
                    className: H.marginBottom8,
                    children: V.intl.string(V.t.S6RMND)
                }),
                (0, r.jsx)(_.DK, { children: V.intl.string(V.t.YZiJbm) })
            ]
        });
    }
    renderHandOffContinue() {
        let { user: e, transitionTo: t, authBoxClassName: n } = this.props;
        return null == e
            ? null
            : (0, r.jsxs)(_.ZP, {
                  className: n,
                  children: [
                      (0, r.jsx)(_.qE, {
                          src: e.getAvatarURL(void 0, 100),
                          size: h.AvatarSizes.DEPRECATED_SIZE_100,
                          className: H.marginBottom20
                      }),
                      (0, r.jsx)(_.Dx, {
                          className: H.marginBottom8,
                          children: V.intl.format(V.t.ot19ho, { name: e.toString() })
                      }),
                      (0, r.jsx)(_.DK, {
                          className: H.marginBottom40,
                          children: V.intl.string(V.t['2xkqzc'])
                      }),
                      (0, r.jsxs)(_.gO, {
                          children: [
                              (0, r.jsx)(_.zx, {
                                  onClick: () => t(U.Z5c.APP),
                                  className: H.marginBottom8,
                                  children: V.intl.format(V.t.fohtv7, { name: e.toString() })
                              }),
                              (0, r.jsx)(_.zx, {
                                  look: _.zx.Looks.LINK,
                                  color: _.zx.Colors.LINK,
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
            t = this.props.loginStatus === U.u34.ACCOUNT_DISABLED,
            n = t ? V.intl.string(V.t['j3rC+f']) : V.intl.string(V.t.ZFWofn),
            i = t ? V.intl.string(V.t['6eNTWV']) : V.intl.string(V.t.pCBti4);
        return (0, r.jsx)(_.ZP, {
            tag: 'form',
            onSubmit: this.handleReset,
            className: e,
            children: (0, r.jsxs)(h.HeadingLevel, {
                component: (0, r.jsx)(_.Dx, {
                    className: H.marginBottom8,
                    children: n
                }),
                children: [
                    (0, r.jsx)(_.DK, {
                        className: H.marginBottom20,
                        children: i
                    }),
                    (0, r.jsxs)(_.gO, {
                        children: [
                            (0, r.jsx)(_.zx, {
                                color: _.zx.Colors.BRAND,
                                type: 'submit',
                                children: V.intl.string(V.t.JhDw5u)
                            }),
                            (0, r.jsx)('div', {
                                className: a()(H.marginTop8, K.needAccount),
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
        return (0, r.jsxs)(_.ZP, {
            className: e,
            children: [
                (0, r.jsx)(M.R, {}),
                (0, r.jsxs)(_.gO, {
                    className: H.marginTop20,
                    children: [
                        (0, r.jsx)(A.Z, {
                            className: H.marginBottom20,
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
                        (0, r.jsx)(_.II, {
                            className: H.marginBottom20,
                            label: V.intl.string(V.t['CIGa+/']),
                            onChange: (e) => this.setState({ password: e }),
                            type: 'password',
                            setRef: this.setPasswordRef,
                            autoComplete: 'off',
                            spellCheck: 'false',
                            value: this.state.password,
                            required: !0
                        }),
                        (0, r.jsx)(_.zx, {
                            className: H.marginBottom8,
                            type: 'submit',
                            disabled: !0,
                            children: V.intl.string(V.t.dKhVQE)
                        }),
                        (0, r.jsx)(_.zx, {
                            disabled: !0,
                            look: _.zx.Looks.LINK,
                            color: _.zx.Colors.LINK,
                            children: V.intl.string(V.t.wWIufn)
                        }),
                        (0, r.jsx)(_.zx, {
                            disabled: !0,
                            className: H.marginTop4,
                            look: _.zx.Looks.LINK,
                            color: _.zx.Colors.LINK,
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
        let { invite: i, giftCode: s, loginStatus: l, country: o, showMobileWebHandoff: c, disableAutofocusOnDefaultForm: d } = this.props,
            u = !this.hasError('email') && this.hasError('password'),
            g = (null == i ? void 0 : i.stage_instance) != null;
        return (
            (n =
                null == i || g
                    ? null != s
                        ? (0, r.jsx)(B.Z, { giftCode: s })
                        : (0, r.jsxs)('div', {
                              className: K.header,
                              children: [
                                  (0, r.jsx)(
                                      _.Dx,
                                      {
                                          className: H.marginBottom8,
                                          children: V.intl.string(V.t['7fNJgI'])
                                      },
                                      'title'
                                  ),
                                  !1 === (0, w.isAndroidWeb)() ? (0, r.jsx)(_.DK, { children: V.intl.string(V.t.euS7r6) }, 'subtitle') : null
                              ]
                          })
                    : (0, r.jsx)(M.Z, { invite: i })),
            (0, r.jsxs)(
                I.Z,
                {
                    direction: I.Z.Direction.HORIZONTAL,
                    align: I.Z.Align.CENTER,
                    children: [
                        (0, r.jsxs)('div', {
                            className: K.mainLoginContainer,
                            children: [
                                this.canShowChooseAccount &&
                                    this.state.dismissedChooseAccount &&
                                    (0, r.jsx)(_.zx, {
                                        onClick: () => {
                                            this.setState((e) => ({
                                                ...e,
                                                dismissedChooseAccount: !1
                                            }));
                                        },
                                        look: _.zx.Looks.LINK,
                                        color: _.zx.Colors.PRIMARY,
                                        className: K.goBackButton,
                                        children: (0, r.jsxs)('div', {
                                            className: K.content,
                                            children: [
                                                (0, r.jsx)(h.ChevronSmallLeftIcon, {
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
                                (0, r.jsx)(h.HeadingLevel, {
                                    children: (0, r.jsxs)(_.gO, {
                                        className: H.marginTop20,
                                        children: [
                                            (0, r.jsx)(A.Z, {
                                                alpha2: o.alpha2,
                                                countryCode: o.code.split(' ')[0],
                                                className: H.marginBottom20,
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
                                            (0, r.jsx)(_.II, {
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
                                            (0, r.jsx)(_.zx, {
                                                onClick: this.handleForgotPassword,
                                                look: _.zx.Looks.LINK,
                                                color: _.zx.Colors.LINK,
                                                className: a()(H.marginBottom20, H.marginTop4),
                                                children: V.intl.string(V.t.wWIufn)
                                            }),
                                            (0, r.jsx)(_.zx, {
                                                type: 'submit',
                                                submitting: l === U.u34.LOGGING_IN,
                                                color: g ? _.zx.Colors.GREEN : _.zx.Colors.BRAND,
                                                className: H.marginBottom8,
                                                children: g ? V.intl.string(V.t.wvVThI) : V.intl.string(V.t.dKhVQE)
                                            }),
                                            (0, r.jsxs)('div', {
                                                className: H.marginTop4,
                                                children: [
                                                    (0, r.jsx)('span', {
                                                        className: K.needAccount,
                                                        children: V.intl.string(V.t.tmE73t)
                                                    }),
                                                    (0, r.jsx)(_.zx, {
                                                        onClick: this.handleGotoRegister,
                                                        look: _.zx.Looks.LINK,
                                                        color: _.zx.Colors.LINK,
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
                        (0, r.jsx)(h.HeadingLevel, {
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
                (0, r.jsx)(_.ZP, {
                    onSubmit: this.handleLogin,
                    tag: 'form',
                    className: e,
                    expanded: !0,
                    children: this.renderDefaultForm(!0)
                }),
                t && (0, r.jsx)(b.Z, {})
            ]
        });
    }
    renderGuildTemplate(e) {
        return (0, r.jsx)(F.Z, {
            onSubmit: this.handleLogin,
            tag: 'form',
            className: a()(this.props.authBoxClassName, K.horizontalAuthBox),
            children: () => [(0, r.jsx)(v.Z, { guildTemplate: e }, 'template'), this.renderDefaultForm(!1)]
        });
    }
    renderMFA() {
        let e = {
            ticket: this.props.mfaTicket,
            methods: this.props.mfaMethods
        };
        return (0, r.jsx)(_.ZP, {
            style: { padding: 0 },
            children: (0, r.jsx)(C.Cd, {
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
        return (0, r.jsx)(_.ZP, {
            tag: 'form',
            className: e,
            children: (0, r.jsx)(E.Z, {
                title: V.intl.string(V.t.w55Ocn),
                subtitle: V.intl.format(V.t.CfRZBg, { onResendClick: this.handleResendCode }),
                error: t,
                onSubmit: this.handleIPAuthorize,
                onCancel: m.Z.loginReset
            })
        });
    }
    renderPasswordRecovery() {
        let { authBoxClassName: e } = this.props,
            { phoneVerifyError: t } = this.state;
        return (0, r.jsx)(_.ZP, {
            tag: 'form',
            className: e,
            children: (0, r.jsx)(E.Z, {
                title: V.intl.string(V.t['+xqy3d']),
                subtitle: V.intl.format(V.t.ef4uZ2, { onResendClick: this.handleResendCode }),
                error: t,
                onSubmit: this.handlePasswordReset,
                onCancel: m.Z.loginReset
            })
        });
    }
    renderChooseAccount() {
        return (0, r.jsx)(j.Z, {
            onDismiss: () => {
                this.setState((e) => ({
                    ...e,
                    dismissedChooseAccount: !0
                }));
            }
        });
    }
    render() {
        let { authenticated: e, invite: t, guildTemplate: n, loginStatus: i, handoffAvailable: s } = this.props,
            { checkingHandoff: l, redirecting: o } = this.state;
        if (o || l) return (0, r.jsx)(q, {});
        if (s) return this.renderHandOffAvailable();
        if (e && l) return this.renderHandOffContinue();
        switch (i) {
            case U.u34.LOGGING_IN_MFA_SMS:
            case U.u34.MFA_SMS_STEP:
            case U.u34.LOGGING_IN_MFA:
            case U.u34.MFA_STEP:
                return this.renderMFA();
            case U.u34.ACCOUNT_SCHEDULED_FOR_DELETION:
            case U.u34.ACCOUNT_DISABLED:
                return this.renderDisabledAccount();
            case U.u34.PHONE_IP_AUTHORIZATION:
                return this.renderIPAuthorization();
            case U.u34.PASSWORD_RECOVERY_PHONE_VERIFICATION:
                return this.renderPasswordRecovery();
            case U.u34.LOGGING_IN:
            case U.u34.NONE:
            default:
                if (null != t && t.state === U.r2o.RESOLVING) return this.renderResolving();
                if (null != n) {
                    if (n.state === z.Rj.RESOLVING) return this.renderResolving();
                    return this.renderGuildTemplate(n);
                }
                if (this.canShowChooseAccount && !this.state.dismissedChooseAccount) return this.renderChooseAccount();
                return this.renderDefault();
        }
    }
    constructor(e) {
        var t, n;
        super(e),
            W(this, 'loginRef', void 0),
            W(this, 'passwordRef', void 0),
            W(this, 'codeRef', void 0),
            W(this, 'handleAuthToken', async (e) => {
                await m.Z.loginToken(e, !1),
                    D.default.track(U.rMx.LOGIN_SUCCESSFUL, {
                        source: U.uRl.QR_CODE,
                        login_source: this.loginSource,
                        gift_code_sku_id: this.giftCodeSKUId,
                        is_new_user: !1
                    });
            }),
            W(this, 'setLoginRef', (e) => {
                this.loginRef = e;
            }),
            W(this, 'setPasswordRef', (e) => {
                this.passwordRef = e;
            }),
            W(this, 'setCodeRef', (e) => {
                this.codeRef = e;
            }),
            W(this, 'getFullLogin', () => {
                let { loginPrefix: e, login: t } = this.state;
                return e + t;
            }),
            W(this, 'renderError', (e) => {
                let { errors: t } = this.props;
                if (this.hasError(e)) {
                    let n = t[e];
                    return Array.isArray(n) ? n[0] : n;
                }
                return null;
            }),
            W(this, 'handleLogin', (e) => {
                let { password: t, undelete: n } = this.state;
                null != e && e.preventDefault(),
                    m.Z.login({
                        login: this.getFullLogin(),
                        password: t,
                        undelete: n,
                        source: this.loginSource,
                        giftCodeSKUId: this.giftCodeSKUId,
                        invite: this.props.invite
                    }),
                    k.S.dispatch(U.CkL.WAVE_EMPHASIZE);
            }),
            W(this, 'handleIPAuthorize', async (e) => {
                let { password: t, undelete: n } = this.state,
                    i = this.getFullLogin();
                try {
                    let { token: r } = await T.Z.verifyPhone(i, e, !1);
                    await m.Z.authorizeIPAddress(r),
                        m.Z.login({
                            login: i,
                            password: t,
                            undelete: n,
                            source: this.loginSource,
                            giftCodeSKUId: this.giftCodeSKUId
                        }),
                        k.S.dispatch(U.CkL.WAVE_EMPHASIZE);
                } catch (e) {
                    null != e.body && null != e.body.message && this.setState({ phoneVerifyError: e.body.message });
                }
            }),
            W(this, 'handlePasswordReset', async (e) => {
                let { transitionTo: t } = this.props;
                this.setState({ phoneVerifyError: null });
                try {
                    let { token: n } = await T.Z.verifyPhone(this.getFullLogin(), e, !1);
                    t(U.Z5c.RESET, {
                        search: (0, c.stringify)({
                            token: n,
                            from_login: 'true'
                        })
                    });
                } catch (e) {
                    null != e.body && null != e.body.message && this.setState({ phoneVerifyError: e.body.message });
                }
            }),
            W(this, 'handleTokenSubmitMFA', (e) => {
                let { mfaType: t, data: n, ticket: i } = e;
                return (
                    k.S.dispatch(U.CkL.WAVE_EMPHASIZE),
                    m.Z.loginMFAv2({
                        code: n,
                        ticket: i,
                        mfaType: t,
                        source: this.loginSource,
                        giftCodeSKUId: this.giftCodeSKUId
                    })
                );
            }),
            W(this, 'handleForgotPassword', async (e) => {
                null != e && e.preventDefault(), null != this.loginRef && this.loginRef.focus();
                let t = this.getFullLogin();
                try {
                    k.S.dispatch(U.CkL.WAVE_EMPHASIZE),
                        await m.Z.forgotPassword(t),
                        (0, h.openModal)((e) =>
                            (0, r.jsx)(h.ConfirmModal, {
                                header: V.intl.string(V.t.f5Pi7O),
                                confirmText: V.intl.string(V.t.BddRzc),
                                confirmButtonColor: _.zx.Colors.BRAND,
                                className: d.tq ? K.mobile : '',
                                ...e,
                                children: (0, r.jsx)(h.Text, {
                                    variant: 'text-md/normal',
                                    children: V.intl.format(V.t['6u5hQ0'], { email: t })
                                })
                            })
                        );
                } catch {}
            }),
            W(this, 'handleResendCode', () => {
                T.Z.resendCode(this.getFullLogin());
            }),
            W(this, 'handleReset', (e) => {
                null != e && e.preventDefault(),
                    m.Z.loginReset(),
                    this.setState({
                        password: '',
                        loginPrefix: '',
                        login: '',
                        code: '',
                        smsCode: '',
                        undelete: !1,
                        checkingHandoff: !1,
                        redirecting: !1
                    });
            }),
            W(this, 'handleCancelAccountDeletion', () => {
                this.setState({ undelete: !0 }, this.handleLogin);
            }),
            W(this, 'handleGotoRegister', () => {
                let e;
                let { login: t } = this.state,
                    { invite: n, giftCode: i, guildTemplate: r, location: s, transitionTo: l, redirectTo: o } = this.props,
                    a = null != s ? (0, c.parse)(s.search) : {};
                '' !== t && (a.email = t), null != n ? ((a.mode = 'register'), (e = U.Z5c.INVITE(n.code))) : null != i ? ((a.mode = 'register'), (e = U.Z5c.GIFT_CODE(i.code))) : null != r ? (e = U.Z5c.GUILD_TEMPLATE(r.code)) : null != o ? ((e = U.Z5c.REGISTER), (a.redirect_to = o)) : (e = U.Z5c.REGISTER), m.Z.loginReset(), l(e, { search: (0, c.stringify)(a) }), k.S.dispatch(U.CkL.WAVE_EMPHASIZE);
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
            conditionalMediationAbortController: new AbortController()
        };
    }
}
W(J, 'defaultProps', { transitionTo: (e) => n.g.location.assign(e) });
t.Z = function (e) {
    let t = (0, u.cj)([y.Z, O.Z, L.default, Z.Z, S.Z], () => ({
        authenticated: L.default.isAuthenticated(),
        handoffAvailable: y.Z.isHandoffAvailable(),
        user: y.Z.user,
        loginStatus: L.default.getLoginStatus(),
        mfaTicket: L.default.getMFATicket(),
        mfaSMS: L.default.getMFASMS(),
        mfaMethods: L.default.getMFAMethods(),
        maskedPhone: L.default.getMaskedPhone(),
        errors: L.default.getErrors(),
        defaultRoute: O.Z.defaultRoute,
        country: S.Z.getCountryCode(),
        hasLoggedInAccounts: Z.Z.getHasLoggedInAccounts()
    }));
    return (0, r.jsx)(J, {
        ...e,
        ...t
    });
};
