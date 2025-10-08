n.d(t, {
    Z: () => $,
    q: () => X,
}),
    n(35282);
var r,
    i = n(951288),
    l = n(647438),
    s = n(120356),
    a = n.n(s),
    o = n(593473),
    c = n(873546),
    u = n(442837),
    d = n(481060),
    h = n(570140),
    g = n(893776),
    m = n(899742),
    p = n(743142),
    f = n(254942),
    _ = n(388905),
    x = n(379760),
    E = n(600164),
    v = n(100159),
    b = n(473855),
    I = n(124860),
    j = n(86779),
    N = n(726745),
    S = n(913583),
    O = n(144114),
    y = n(541692),
    C = n(952802),
    A = n(703656),
    T = n(648358),
    Z = n(108427),
    P = n(901375),
    R = n(314897),
    L = n(117240),
    w = n(896797),
    D = n(626135),
    k = n(585483),
    M = n(358085),
    U = n(481153),
    G = n(588705),
    B = n(494526),
    F = n(163671),
    z = n(981631),
    V = n(260539),
    K = n(388032),
    H = n(977150),
    W = n(10198);
function q(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function Y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
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
    return (0, i.jsx)(_.ZP, { children: (0, i.jsx)(d.$jN, {}) });
}
class Q extends (r = l.PureComponent) {
    static getDerivedStateFromProps(e) {
        let { handoffAvailable: t, authenticated: n } = e;
        return t || n ? null : { checkingHandoff: !1 };
    }
    componentDidMount() {
        let { handoffAvailable: e, authenticated: t, giftCodeSKU: n, invite: r, location: i } = this.props;
        e && !t ? (0, m.is)() : t && this.loginOrSSO(t, i, !0),
            D.default.track(
                z.rMx.LOGIN_VIEWED,
                J(
                    Y(
                        {
                            location: null != r ? "Invite Login Page" : "Non-Invite Login Page",
                            login_source: this.loginSource,
                            authenticated: t,
                        },
                        null != n ? (0, v.Z)(n, !1, !1) : {},
                    ),
                    { source: (0, A.At)() },
                ),
                { flush: !0 },
            ),
            t ||
                (0, P.j)({
                    abortController: this.state.conditionalMediationAbortController,
                    loginSource: this.loginSource,
                    giftCodeSKUId: this.giftCodeSKUId,
                }),
            g.Z.getLocationMetadata(),
            (0, Z.e)("login");
    }
    componentDidUpdate(e, t) {
        let { authenticated: n, location: r, handoffAvailable: i } = this.props,
            { checkingHandoff: l, redirecting: s } = this.state;
        if (
            (!n ||
                e.authenticated ||
                (l && (i || s)) ||
                (this.state.conditionalMediationAbortController.abort("Transitioning to authenticated state"),
                this.loginOrSSO(n, r)),
            t.errors !== this.state.errors)
        ) {
            var a, o, c;
            this.hasError("password")
                ? null == (a = this.passwordRef) || a.focus()
                : this.hasError("email") || this.hasError("login")
                  ? null == (o = this.loginRef) || o.focus()
                  : this.hasError("code") && (null == (c = this.codeRef) || c.focus());
        }
    }
    get loginSource() {
        let { giftCode: e, guildTemplate: t, invite: n, loginSource: r, redirectTo: i } = this.props;
        if (null != r) return r;
        if (null != e) return "gift";
        if (null != t) return "guild_template";
        if (null != n) {
            if (null != n.guild) return "guild_invite";
            else if (null != n.channel) return "dm_invite";
            else if (null != n.inviter) return "friend_invite";
        }
        return null != i ? (0, p.L)(i) : null;
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
        e &&
            null != t &&
            (this.setState({ redirecting: !0 }),
            n ? g.Z.verifySSOToken("login").then(() => this.transitionSSO(t)) : this.transitionSSO(t));
    }
    transitionSSO(e) {
        let { transitionTo: t, redirectTo: n, replaceWith: r } = this.props,
            i = null != e ? (0, o.parse)(e.search) : {};
        if ((delete i.redirect_to, null != n)) null != r ? r(n) : t(n);
        else if (null == i.service) t(z.Z5c.APP);
        else {
            let e = window.location.protocol + window.GLOBAL_ENV.API_ENDPOINT + z.ANM.SSO,
                t = J(Y({}, i), { token: R.default.getToken() });
            window.location = "".concat(e, "?").concat((0, o.stringify)(t));
        }
    }
    hasError(e) {
        return null != this.state.errors[e];
    }
    renderHandOffAvailable() {
        let { authBoxClassName: e } = this.props;
        return (0, i.jsxs)(_.ZP, {
            className: e,
            children: [
                (0, i.jsx)(_.Hh, {}),
                (0, i.jsx)(_.Dx, {
                    className: W.marginBottom8,
                    children: K.intl.string(K.t.S6RMND),
                }),
                (0, i.jsx)(_.DK, { children: K.intl.string(K.t.YZiJbm) }),
            ],
        });
    }
    renderHandOffContinue() {
        let { user: e, transitionTo: t, authBoxClassName: n } = this.props;
        return null == e
            ? null
            : (0, i.jsxs)(_.ZP, {
                  className: n,
                  children: [
                      (0, i.jsx)(_.qE, {
                          src: e.getAvatarURL(void 0, 100),
                          size: d.EFr.DEPRECATED_SIZE_100,
                          className: W.marginBottom20,
                      }),
                      (0, i.jsx)(_.Dx, {
                          className: W.marginBottom8,
                          children: K.intl.format(K.t.ot19ho, { name: e.toString() }),
                      }),
                      (0, i.jsx)(_.DK, {
                          className: W.marginBottom40,
                          children: K.intl.string(K.t["2xkqzc"]),
                      }),
                      (0, i.jsxs)(_.gO, {
                          children: [
                              (0, i.jsx)(_.zx, {
                                  onClick: () => t(z.Z5c.APP),
                                  className: W.marginBottom8,
                                  children: K.intl.format(K.t.fohtv7, { name: e.toString() }),
                              }),
                              (0, i.jsx)(_.zx, {
                                  look: _.zx.Looks.LINK,
                                  color: _.zx.Colors.LINK,
                                  onClick: this.handleReset,
                                  children: K.intl.string(K.t.nO564e),
                              }),
                          ],
                      }),
                  ],
              });
    }
    renderDisabledAccount() {
        let { authBoxClassName: e } = this.props,
            t = this.props.loginStatus === z.u34.ACCOUNT_DISABLED,
            n = t ? K.intl.string(K.t["j3rC+f"]) : K.intl.string(K.t.ZFWofn),
            r = t ? K.intl.string(K.t["6eNTWV"]) : K.intl.string(K.t.pCBti4);
        return (0, i.jsx)(_.ZP, {
            tag: "form",
            onSubmit: this.handleReset,
            className: e,
            children: (0, i.jsxs)(d.y5t, {
                component: (0, i.jsx)(_.Dx, {
                    className: W.marginBottom8,
                    children: n,
                }),
                children: [
                    (0, i.jsx)(_.DK, {
                        className: W.marginBottom20,
                        children: r,
                    }),
                    (0, i.jsxs)(_.gO, {
                        children: [
                            (0, i.jsx)(_.zx, {
                                color: _.zx.Colors.BRAND,
                                type: "submit",
                                children: K.intl.string(K.t.JhDw5u),
                            }),
                            (0, i.jsx)("div", {
                                className: a()(W.marginTop8, H.needAccount),
                                children: K.intl.format(K.t.js2rr6, { onClick: this.handleCancelAccountDeletion }),
                            }),
                        ],
                    }),
                ],
            }),
        });
    }
    renderResolving() {
        let { authBoxClassName: e, country: t } = this.props;
        return (0, i.jsxs)(_.ZP, {
            className: e,
            children: [
                (0, i.jsx)(G.R, {}),
                (0, i.jsxs)(_.gO, {
                    className: W.marginTop20,
                    children: [
                        (0, i.jsx)(C.Z, {
                            className: W.marginBottom20,
                            alpha2: t.alpha2,
                            countryCode: t.code.split(" ")[0],
                            label: K.intl.string(K.t.tUjnxs),
                            onChange: (e, t) =>
                                this.setState({
                                    login: e,
                                    loginPrefix: t,
                                }),
                            setRef: this.setLoginRef,
                            autoCapitalize: "none",
                            autoComplete: "username webauthn",
                            autoCorrect: "off",
                            spellCheck: "false",
                            value: this.state.login,
                            autoFocus: !0,
                            required: !0,
                        }),
                        (0, i.jsx)(_.II, {
                            className: W.marginBottom20,
                            label: K.intl.string(K.t["CIGa+/"]),
                            onChange: (e) => this.setState({ password: e }),
                            type: "password",
                            setRef: this.setPasswordRef,
                            autoComplete: "current-password",
                            spellCheck: "false",
                            value: this.state.password,
                            required: !0,
                        }),
                        (0, i.jsx)(_.zx, {
                            className: W.marginBottom8,
                            type: "submit",
                            disabled: !0,
                            children: K.intl.string(K.t.dKhVQE),
                        }),
                        (0, i.jsx)(_.zx, {
                            disabled: !0,
                            look: _.zx.Looks.LINK,
                            color: _.zx.Colors.LINK,
                            children: K.intl.string(K.t.wWIufn),
                        }),
                        (0, i.jsx)(_.zx, {
                            disabled: !0,
                            className: W.marginTop4,
                            look: _.zx.Looks.LINK,
                            color: _.zx.Colors.LINK,
                            children: K.intl.string(K.t.tmE73t),
                        }),
                    ],
                }),
            ],
        });
    }
    renderDefaultForm(e) {
        var t;
        let n,
            {
                invite: r,
                giftCode: l,
                loginStatus: s,
                country: o,
                showMobileWebHandoff: c,
                disableAutofocusOnDefaultForm: u,
            } = this.props,
            h = !this.hasError("email") && this.hasError("password");
        return (
            (n =
                null != r
                    ? (0, i.jsx)(G.Z, { invite: r })
                    : null != l
                      ? (0, i.jsx)(U.Z, { giftCode: l })
                      : (0, i.jsxs)("div", {
                            className: H.header,
                            children: [
                                (0, i.jsx)(
                                    _.Dx,
                                    {
                                        className: W.marginBottom8,
                                        children: K.intl.string(K.t["7fNJgI"]),
                                    },
                                    "title",
                                ),
                                !1 === (0, M.isAndroidWeb)()
                                    ? (0, i.jsx)(_.DK, { children: K.intl.string(K.t.euS7r6) }, "subtitle")
                                    : null,
                            ],
                        })),
            (0, i.jsxs)(
                E.Z,
                {
                    direction: E.Z.Direction.HORIZONTAL,
                    align: E.Z.Align.CENTER,
                    children: [
                        (0, i.jsxs)("div", {
                            className: H.mainLoginContainer,
                            children: [
                                this.canShowChooseAccount &&
                                    this.state.dismissedChooseAccount &&
                                    (0, i.jsx)(_.zx, {
                                        onClick: () => {
                                            this.setState((e) => J(Y({}, e), { dismissedChooseAccount: !1 }));
                                        },
                                        look: _.zx.Looks.LINK,
                                        color: _.zx.Colors.PRIMARY,
                                        className: H.goBackButton,
                                        children: (0, i.jsxs)("div", {
                                            className: H.content,
                                            children: [
                                                (0, i.jsx)(d.V7D, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    className: H.caret,
                                                }),
                                                (0, i.jsx)(d.Text, {
                                                    variant: "text-md/normal",
                                                    children: K.intl.string(K.t["1MrpWF"]),
                                                }),
                                            ],
                                        }),
                                    }),
                                n,
                                (0, i.jsx)(d.y5t, {
                                    children: (0, i.jsxs)(_.gO, {
                                        className: W.marginTop20,
                                        children: [
                                            (0, i.jsx)(C.Z, {
                                                alpha2: o.alpha2,
                                                countryCode: o.code.split(" ")[0],
                                                className: W.marginBottom20,
                                                label: K.intl.string(K.t.tUjnxs),
                                                error:
                                                    null != (t = this.renderError("login"))
                                                        ? t
                                                        : this.renderError("email"),
                                                onChange: (e, t) =>
                                                    this.setState({
                                                        login: e,
                                                        loginPrefix: t,
                                                    }),
                                                setRef: this.setLoginRef,
                                                autoCapitalize: "none",
                                                autoComplete: "username webauthn",
                                                autoCorrect: "off",
                                                spellCheck: "false",
                                                value: this.state.login,
                                                autoFocus: !h && !c && !u,
                                                required: !0,
                                            }),
                                            (0, i.jsx)(_.II, {
                                                label: K.intl.string(K.t["CIGa+/"]),
                                                error: this.renderError("password"),
                                                onChange: (e) => this.setState({ password: e }),
                                                name: "password",
                                                type: "password",
                                                setRef: this.setPasswordRef,
                                                autoComplete: "current-password",
                                                spellCheck: "false",
                                                autoFocus: h && !c && !u,
                                                value: this.state.password,
                                                required: !0,
                                            }),
                                            (0, i.jsx)(_.zx, {
                                                onClick: this.handleForgotPassword,
                                                look: _.zx.Looks.LINK,
                                                color: _.zx.Colors.LINK,
                                                className: a()(W.marginBottom20, W.marginTop4),
                                                children: K.intl.string(K.t.wWIufn),
                                            }),
                                            (0, i.jsx)(_.zx, {
                                                type: "submit",
                                                submitting: s === z.u34.LOGGING_IN,
                                                color: _.zx.Colors.BRAND,
                                                className: W.marginBottom8,
                                                children: K.intl.string(K.t.dKhVQE),
                                            }),
                                            (0, i.jsxs)("div", {
                                                className: W.marginTop4,
                                                children: [
                                                    (0, i.jsx)("span", {
                                                        className: H.needAccount,
                                                        children: K.intl.string(K.t.tmE73t),
                                                    }),
                                                    (0, i.jsx)(_.zx, {
                                                        onClick: this.handleGotoRegister,
                                                        look: _.zx.Looks.LINK,
                                                        color: _.zx.Colors.LINK,
                                                        className: H.smallRegisterLink,
                                                        children: K.intl.string(K.t.pV8xeX),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                }),
                            ],
                        }),
                        (0, i.jsx)(d.y5t, {
                            children: e
                                ? (0, i.jsx)(B.Z, {
                                      authTokenCallback: this.handleAuthToken,
                                      conditionalMediationAbortController:
                                          this.state.conditionalMediationAbortController,
                                  })
                                : null,
                        }),
                    ],
                },
                "form-wrapper",
            )
        );
    }
    renderDefault() {
        let { authBoxClassName: e, showMobileWebHandoff: t } = this.props;
        return (0, i.jsxs)("div", {
            className: H.__invalid_pageContainer,
            children: [
                (0, i.jsx)(_.ZP, {
                    onSubmit: this.handleLogin,
                    tag: "form",
                    className: e,
                    expanded: !0,
                    children: this.renderDefaultForm(!0),
                }),
                t && (0, i.jsx)(j.Z, {}),
            ],
        });
    }
    renderGuildTemplate(e) {
        return (0, i.jsx)(F.Z, {
            onSubmit: this.handleLogin,
            tag: "form",
            className: a()(this.props.authBoxClassName, H.horizontalAuthBox),
            children: () => [(0, i.jsx)(b.Z, { guildTemplate: e }, "template"), this.renderDefaultForm(!1)],
        });
    }
    renderMFA() {
        let e = {
            ticket: this.props.mfaTicket,
            methods: this.props.mfaMethods,
        };
        return (0, i.jsx)(_.ZP, {
            style: { padding: 0 },
            children: (0, i.jsx)(I.Cd, {
                mfaFinish: this.handleTokenSubmitMFA,
                mfaChallenge: e,
                onEarlyClose: () => {
                    h.Z.dispatch({ type: "LOGIN_RESET" });
                },
                width: 480,
            }),
        });
    }
    renderIPAuthorization() {
        let { authBoxClassName: e } = this.props,
            { phoneVerifyError: t } = this.state;
        return (0, i.jsx)(_.ZP, {
            tag: "form",
            className: e,
            children: (0, i.jsx)(x.Z, {
                title: K.intl.string(K.t.w55Ocn),
                subtitle: K.intl.format(K.t.CfRZBg, { onResendClick: this.handleResendCode }),
                error: t,
                onSubmit: this.handleIPAuthorize,
                onCancel: this.loginReset,
            }),
        });
    }
    renderPasswordRecovery() {
        let { authBoxClassName: e } = this.props,
            { phoneVerifyError: t } = this.state;
        return (0, i.jsx)(_.ZP, {
            tag: "form",
            className: e,
            children: (0, i.jsx)(x.Z, {
                title: K.intl.string(K.t["+xqy3d"]),
                subtitle: K.intl.format(K.t.ef4uZ2, { onResendClick: this.handleResendCode }),
                error: t,
                onSubmit: this.handlePasswordReset,
                onCancel: this.loginReset,
            }),
        });
    }
    renderChooseAccount() {
        let e = () => {
            this.setState((e) => J(Y({}, e), { dismissedChooseAccount: !0 }));
        };
        return (0, i.jsx)(S.Z, { onDismiss: e });
    }
    render() {
        let { authenticated: e, invite: t, guildTemplate: n, loginStatus: r, handoffAvailable: l } = this.props,
            { checkingHandoff: s, redirecting: a } = this.state;
        if (a || s) return (0, i.jsx)(X, {});
        if (l) return this.renderHandOffAvailable();
        if (e && s) return this.renderHandOffContinue();
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
            q(this, "loginRef", void 0),
            q(this, "passwordRef", void 0),
            q(this, "codeRef", void 0),
            q(this, "handleAuthToken", async (e, t) => {
                this.setState({ errors: {} }),
                    await g.Z.loginToken(e, !1),
                    D.default.track(z.rMx.LOGIN_SUCCESSFUL, {
                        source: z.uRl.QR_CODE,
                        login_source: this.loginSource,
                        gift_code_sku_id: this.giftCodeSKUId,
                        is_new_user: !1,
                        login_method: "remote_auth",
                        login_instance_id: null != t ? t : null,
                    });
            }),
            q(this, "loginReset", () => {
                this.state.conditionalMediationAbortController.abort("Login state reset"),
                    this.setState({ errors: {} }),
                    g.Z.loginReset();
            }),
            q(this, "setLoginRef", (e) => {
                this.loginRef = e;
            }),
            q(this, "setPasswordRef", (e) => {
                this.passwordRef = e;
            }),
            q(this, "setCodeRef", (e) => {
                this.codeRef = e;
            }),
            q(this, "getFullLogin", () => {
                let { loginPrefix: e, login: t } = this.state;
                return e + t;
            }),
            q(this, "renderError", (e) => {
                let { errors: t } = this.state;
                if (this.hasError(e)) {
                    let n = t[e];
                    return Array.isArray(n) ? n[0] : n;
                }
                return null;
            }),
            q(this, "handleLogin", async (e) => {
                let { password: t, undelete: n, conditionalMediationAbortController: r } = this.state;
                null == e || e.preventDefault(),
                    r.abort("Starting password login"),
                    k.S.dispatch(z.CkL.WAVE_EMPHASIZE),
                    this.setState({ errors: {} });
                try {
                    await g.Z.login({
                        login: this.getFullLogin(),
                        password: t,
                        undelete: n,
                        source: this.loginSource,
                        giftCodeSKUId: this.giftCodeSKUId,
                        invite: this.props.invite,
                    });
                } catch (t) {
                    let e = (0, f.p)(t);
                    this.setState({ errors: e });
                }
            }),
            q(this, "handleIPAuthorize", async (e) => {
                let t = this.getFullLogin();
                this.setState({ errors: {} });
                try {
                    let { token: n } = await O.Z.verifyPhone(t, e, !1);
                    await g.Z.authorizeIPAddress(n), this.handleLogin();
                } catch (e) {
                    null != e.body && null != e.body.message && this.setState({ phoneVerifyError: e.body.message });
                }
            }),
            q(this, "handlePasswordReset", async (e) => {
                let { transitionTo: t } = this.props;
                this.setState({ phoneVerifyError: null });
                try {
                    let { token: n } = await O.Z.verifyPhone(this.getFullLogin(), e, !1);
                    t(z.Z5c.RESET, {
                        search: (0, o.stringify)({
                            token: n,
                            from_login: "true",
                        }),
                    });
                } catch (e) {
                    null != e.body && null != e.body.message && this.setState({ phoneVerifyError: e.body.message });
                }
            }),
            q(this, "handleTokenSubmitMFA", (e) => {
                let { mfaType: t, data: n, ticket: r } = e;
                return (
                    k.S.dispatch(z.CkL.WAVE_EMPHASIZE),
                    g.Z.loginMFAv2({
                        code: n,
                        ticket: r,
                        mfaType: t,
                        source: this.loginSource,
                        giftCodeSKUId: this.giftCodeSKUId,
                    })
                );
            }),
            q(this, "handleForgotPassword", async (e) => {
                null != e && e.preventDefault(), null != this.loginRef && this.loginRef.focus();
                let t = this.getFullLogin();
                this.setState({ errors: {} });
                try {
                    if ((k.S.dispatch(z.CkL.WAVE_EMPHASIZE), !(await g.Z.forgotPassword(t)))) return;
                    (0, d.h7j)((e) =>
                        (0, i.jsx)(
                            d.ConfirmModal,
                            J(
                                Y(
                                    {
                                        header: K.intl.string(K.t.f5Pi7O),
                                        confirmText: K.intl.string(K.t.BddRzc),
                                        confirmButtonColor: _.zx.Colors.BRAND,
                                        className: c.tq ? H.mobile : "",
                                    },
                                    e,
                                ),
                                {
                                    children: (0, i.jsx)(d.Text, {
                                        variant: "text-md/normal",
                                        children: K.intl.format(K.t["6u5hQ0"], { email: t }),
                                    }),
                                },
                            ),
                        ),
                    );
                } catch (t) {
                    let e = (0, f.p)(t);
                    this.setState({ errors: e });
                }
            }),
            q(this, "handleResendCode", () => {
                O.Z.resendCode(this.getFullLogin());
            }),
            q(this, "handleReset", (e) => {
                null != e && e.preventDefault(),
                    g.Z.loginReset(),
                    this.setState({
                        password: "",
                        loginPrefix: "",
                        login: "",
                        code: "",
                        smsCode: "",
                        undelete: !1,
                        checkingHandoff: !1,
                        redirecting: !1,
                        errors: {},
                    });
            }),
            q(this, "handleCancelAccountDeletion", () => {
                this.setState({ undelete: !0 }, this.handleLogin);
            }),
            q(this, "handleGotoRegister", () => {
                let e,
                    { login: t } = this.state,
                    {
                        invite: n,
                        giftCode: r,
                        guildTemplate: i,
                        location: l,
                        transitionTo: s,
                        redirectTo: a,
                    } = this.props,
                    c = null != l ? (0, o.parse)(l.search) : {};
                "" !== t && (c.email = t),
                    null != n
                        ? ((c.mode = "register"), (e = z.Z5c.INVITE(n.code)))
                        : null != r
                          ? ((c.mode = "register"), (e = z.Z5c.GIFT_CODE(r.code)))
                          : null != i
                            ? (e = z.Z5c.GUILD_TEMPLATE(i.code))
                            : null != a
                              ? ((e = z.Z5c.REGISTER), (c.redirect_to = a))
                              : (e = z.Z5c.REGISTER),
                    this.loginReset(),
                    s(e, { search: (0, o.stringify)(c) }),
                    k.S.dispatch(z.CkL.WAVE_EMPHASIZE);
            });
        let r = null != e.location ? (0, o.parse)(e.location.search) : {};
        this.state = {
            redirecting: e.authenticated,
            checkingHandoff: e.handoffAvailable,
            loginPrefix: "",
            login: null != (n = null != (t = r.email) ? t : r.login) ? n : "",
            password: "",
            code: "",
            smsCode: "",
            undelete: !1,
            phoneVerifyError: null,
            dismissedChooseAccount: !1,
            conditionalMediationAbortController: new AbortController(),
            errors: {},
        };
    }
}
q(Q, "defaultProps", { transitionTo: (e) => n.g.location.assign(e) });
let $ = function (e) {
    (0, T.M)();
    let t = (0, u.cj)([L.Z, w.Z, R.default, N.Z, y.Z], () => ({
        authenticated: R.default.isAuthenticated(),
        handoffAvailable: L.Z.isHandoffAvailable(),
        user: L.Z.user,
        loginStatus: R.default.getLoginStatus(),
        mfaTicket: R.default.getMFATicket(),
        mfaMethods: R.default.getMFAMethods(),
        defaultRoute: w.Z.defaultRoute,
        country: y.Z.getCountryCode(),
        hasLoggedInAccounts: N.Z.getHasLoggedInAccounts(),
    }));
    return (0, i.jsx)(Q, Y({}, e, t));
};
