n.d(t, {
    Z: () => Q,
    q: () => J,
}),
    n(35282);
var r,
    i = n(951288),
    l = n(647438),
    s = n(120356),
    o = n.n(s),
    a = n(593473),
    c = n(873546),
    u = n(442837),
    d = n(481060),
    h = n(570140),
    p = n(893776),
    m = n(899742),
    g = n(743142),
    f = n(254942),
    _ = n(388905),
    x = n(379760),
    E = n(600164),
    v = n(100159),
    j = n(473855),
    b = n(124860),
    I = n(86779),
    O = n(726745),
    N = n(913583),
    y = n(144114),
    S = n(541692),
    C = n(952802),
    Z = n(703656),
    A = n(108427),
    T = n(901375),
    P = n(314897),
    R = n(117240),
    w = n(896797),
    L = n(626135),
    D = n(585483),
    k = n(358085),
    M = n(481153),
    B = n(588705),
    F = n(494526),
    U = n(163671),
    G = n(981631),
    z = n(260539),
    V = n(388032),
    K = n(132825),
    H = n(197571);
function W(e, t, n) {
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
function q(e) {
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
                W(e, t, n[t]);
            });
    }
    return e;
}
function Y(e, t) {
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
function J() {
    return (0, i.jsx)(_.ZP, { children: (0, i.jsx)(d.$jN, {}) });
}
class X extends (r = l.PureComponent) {
    static getDerivedStateFromProps(e) {
        let { handoffAvailable: t, authenticated: n } = e;
        return t || n ? null : { checkingHandoff: !1 };
    }
    componentDidMount() {
        let { handoffAvailable: e, authenticated: t, giftCodeSKU: n, invite: r, location: i } = this.props;
        e && !t ? (0, m.is)() : t && this.loginOrSSO(t, i, !0),
            L.default.track(
                G.rMx.LOGIN_VIEWED,
                Y(
                    q(
                        {
                            location: null != r ? "Invite Login Page" : "Non-Invite Login Page",
                            login_source: this.loginSource,
                            authenticated: t,
                        },
                        null != n ? (0, v.Z)(n, !1, !1) : {},
                    ),
                    { source: (0, Z.At)() },
                ),
                { flush: !0 },
            ),
            t ||
                (0, T.j)({
                    abortController: this.state.conditionalMediationAbortController,
                    loginSource: this.loginSource,
                    giftCodeSKUId: this.giftCodeSKUId,
                }),
            p.Z.getLocationMetadata(),
            (0, A.e)("login");
    }
    componentDidUpdate(e, t) {
        let { authenticated: n, location: r, handoffAvailable: i } = this.props,
            { checkingHandoff: l, redirecting: s } = this.state;
        if (
            (!n ||
                e.authenticated ||
                (l && (i || s)) ||
                (this.state.conditionalMediationAbortController.abort(), this.loginOrSSO(n, r)),
            t.errors !== this.state.errors)
        ) {
            var o, a, c;
            this.hasError("password")
                ? null == (o = this.passwordRef) || o.focus()
                : this.hasError("email") || this.hasError("login")
                  ? null == (a = this.loginRef) || a.focus()
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
        return null != i ? (0, g.L)(i) : null;
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
            n ? p.Z.verifySSOToken("login").then(() => this.transitionSSO(t)) : this.transitionSSO(t));
    }
    transitionSSO(e) {
        let { transitionTo: t, redirectTo: n, replaceWith: r } = this.props,
            i = null != e ? (0, a.parse)(e.search) : {};
        if ((delete i.redirect_to, null != n)) null != r ? r(n) : t(n);
        else if (null == i.service) t(G.Z5c.APP);
        else {
            let e = window.location.protocol + window.GLOBAL_ENV.API_ENDPOINT + G.ANM.SSO,
                t = Y(q({}, i), { token: P.default.getToken() });
            window.location = "".concat(e, "?").concat((0, a.stringify)(t));
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
                    className: H.marginBottom8,
                    children: V.intl.string(V.t.S6RMND),
                }),
                (0, i.jsx)(_.DK, { children: V.intl.string(V.t.YZiJbm) }),
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
                          className: H.marginBottom20,
                      }),
                      (0, i.jsx)(_.Dx, {
                          className: H.marginBottom8,
                          children: V.intl.format(V.t.ot19ho, { name: e.toString() }),
                      }),
                      (0, i.jsx)(_.DK, {
                          className: H.marginBottom40,
                          children: V.intl.string(V.t["2xkqzc"]),
                      }),
                      (0, i.jsxs)(_.gO, {
                          children: [
                              (0, i.jsx)(_.zx, {
                                  onClick: () => t(G.Z5c.APP),
                                  className: H.marginBottom8,
                                  children: V.intl.format(V.t.fohtv7, { name: e.toString() }),
                              }),
                              (0, i.jsx)(_.zx, {
                                  look: _.zx.Looks.LINK,
                                  color: _.zx.Colors.LINK,
                                  onClick: this.handleReset,
                                  children: V.intl.string(V.t.nO564e),
                              }),
                          ],
                      }),
                  ],
              });
    }
    renderDisabledAccount() {
        let { authBoxClassName: e } = this.props,
            t = this.props.loginStatus === G.u34.ACCOUNT_DISABLED,
            n = t ? V.intl.string(V.t["j3rC+f"]) : V.intl.string(V.t.ZFWofn),
            r = t ? V.intl.string(V.t["6eNTWV"]) : V.intl.string(V.t.pCBti4);
        return (0, i.jsx)(_.ZP, {
            tag: "form",
            onSubmit: this.handleReset,
            className: e,
            children: (0, i.jsxs)(d.y5t, {
                component: (0, i.jsx)(_.Dx, {
                    className: H.marginBottom8,
                    children: n,
                }),
                children: [
                    (0, i.jsx)(_.DK, {
                        className: H.marginBottom20,
                        children: r,
                    }),
                    (0, i.jsxs)(_.gO, {
                        children: [
                            (0, i.jsx)(_.zx, {
                                color: _.zx.Colors.BRAND,
                                type: "submit",
                                children: V.intl.string(V.t.JhDw5u),
                            }),
                            (0, i.jsx)("div", {
                                className: o()(H.marginTop8, K.needAccount),
                                children: V.intl.format(V.t.js2rr6, { onClick: this.handleCancelAccountDeletion }),
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
                (0, i.jsx)(B.R, {}),
                (0, i.jsxs)(_.gO, {
                    className: H.marginTop20,
                    children: [
                        (0, i.jsx)(C.Z, {
                            className: H.marginBottom20,
                            alpha2: t.alpha2,
                            countryCode: t.code.split(" ")[0],
                            label: V.intl.string(V.t.tUjnxs),
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
                            className: H.marginBottom20,
                            label: V.intl.string(V.t["CIGa+/"]),
                            onChange: (e) => this.setState({ password: e }),
                            type: "password",
                            setRef: this.setPasswordRef,
                            autoComplete: "current-password",
                            spellCheck: "false",
                            value: this.state.password,
                            required: !0,
                        }),
                        (0, i.jsx)(_.zx, {
                            className: H.marginBottom8,
                            type: "submit",
                            disabled: !0,
                            children: V.intl.string(V.t.dKhVQE),
                        }),
                        (0, i.jsx)(_.zx, {
                            disabled: !0,
                            look: _.zx.Looks.LINK,
                            color: _.zx.Colors.LINK,
                            children: V.intl.string(V.t.wWIufn),
                        }),
                        (0, i.jsx)(_.zx, {
                            disabled: !0,
                            className: H.marginTop4,
                            look: _.zx.Looks.LINK,
                            color: _.zx.Colors.LINK,
                            children: V.intl.string(V.t.tmE73t),
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
                country: a,
                showMobileWebHandoff: c,
                disableAutofocusOnDefaultForm: u,
            } = this.props,
            h = !this.hasError("email") && this.hasError("password");
        return (
            (n =
                null != r
                    ? (0, i.jsx)(B.Z, { invite: r })
                    : null != l
                      ? (0, i.jsx)(M.Z, { giftCode: l })
                      : (0, i.jsxs)("div", {
                            className: K.header,
                            children: [
                                (0, i.jsx)(
                                    _.Dx,
                                    {
                                        className: H.marginBottom8,
                                        children: V.intl.string(V.t["7fNJgI"]),
                                    },
                                    "title",
                                ),
                                !1 === (0, k.isAndroidWeb)()
                                    ? (0, i.jsx)(_.DK, { children: V.intl.string(V.t.euS7r6) }, "subtitle")
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
                            className: K.mainLoginContainer,
                            children: [
                                this.canShowChooseAccount &&
                                    this.state.dismissedChooseAccount &&
                                    (0, i.jsx)(_.zx, {
                                        onClick: () => {
                                            this.setState((e) => Y(q({}, e), { dismissedChooseAccount: !1 }));
                                        },
                                        look: _.zx.Looks.LINK,
                                        color: _.zx.Colors.PRIMARY,
                                        className: K.goBackButton,
                                        children: (0, i.jsxs)("div", {
                                            className: K.content,
                                            children: [
                                                (0, i.jsx)(d.V7D, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    className: K.caret,
                                                }),
                                                (0, i.jsx)(d.Text, {
                                                    variant: "text-md/normal",
                                                    children: V.intl.string(V.t["1MrpWF"]),
                                                }),
                                            ],
                                        }),
                                    }),
                                n,
                                (0, i.jsx)(d.y5t, {
                                    children: (0, i.jsxs)(_.gO, {
                                        className: H.marginTop20,
                                        children: [
                                            (0, i.jsx)(C.Z, {
                                                alpha2: a.alpha2,
                                                countryCode: a.code.split(" ")[0],
                                                className: H.marginBottom20,
                                                label: V.intl.string(V.t.tUjnxs),
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
                                                label: V.intl.string(V.t["CIGa+/"]),
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
                                                className: o()(H.marginBottom20, H.marginTop4),
                                                children: V.intl.string(V.t.wWIufn),
                                            }),
                                            (0, i.jsx)(_.zx, {
                                                type: "submit",
                                                submitting: s === G.u34.LOGGING_IN,
                                                color: _.zx.Colors.BRAND,
                                                className: H.marginBottom8,
                                                children: V.intl.string(V.t.dKhVQE),
                                            }),
                                            (0, i.jsxs)("div", {
                                                className: H.marginTop4,
                                                children: [
                                                    (0, i.jsx)("span", {
                                                        className: K.needAccount,
                                                        children: V.intl.string(V.t.tmE73t),
                                                    }),
                                                    (0, i.jsx)(_.zx, {
                                                        onClick: this.handleGotoRegister,
                                                        look: _.zx.Looks.LINK,
                                                        color: _.zx.Colors.LINK,
                                                        className: K.smallRegisterLink,
                                                        children: V.intl.string(V.t.pV8xeX),
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
                                ? (0, i.jsx)(F.Z, {
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
            className: K.__invalid_pageContainer,
            children: [
                (0, i.jsx)(_.ZP, {
                    onSubmit: this.handleLogin,
                    tag: "form",
                    className: e,
                    expanded: !0,
                    children: this.renderDefaultForm(!0),
                }),
                t && (0, i.jsx)(I.Z, {}),
            ],
        });
    }
    renderGuildTemplate(e) {
        return (0, i.jsx)(U.Z, {
            onSubmit: this.handleLogin,
            tag: "form",
            className: o()(this.props.authBoxClassName, K.horizontalAuthBox),
            children: () => [(0, i.jsx)(j.Z, { guildTemplate: e }, "template"), this.renderDefaultForm(!1)],
        });
    }
    renderMFA() {
        let e = {
            ticket: this.props.mfaTicket,
            methods: this.props.mfaMethods,
        };
        return (0, i.jsx)(_.ZP, {
            style: { padding: 0 },
            children: (0, i.jsx)(b.Cd, {
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
                title: V.intl.string(V.t.w55Ocn),
                subtitle: V.intl.format(V.t.CfRZBg, { onResendClick: this.handleResendCode }),
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
                title: V.intl.string(V.t["+xqy3d"]),
                subtitle: V.intl.format(V.t.ef4uZ2, { onResendClick: this.handleResendCode }),
                error: t,
                onSubmit: this.handlePasswordReset,
                onCancel: this.loginReset,
            }),
        });
    }
    renderChooseAccount() {
        let e = () => {
            this.setState((e) => Y(q({}, e), { dismissedChooseAccount: !0 }));
        };
        return (0, i.jsx)(N.Z, { onDismiss: e });
    }
    render() {
        let { authenticated: e, invite: t, guildTemplate: n, loginStatus: r, handoffAvailable: l } = this.props,
            { checkingHandoff: s, redirecting: o } = this.state;
        if (o || s) return (0, i.jsx)(J, {});
        if (l) return this.renderHandOffAvailable();
        if (e && s) return this.renderHandOffContinue();
        switch (r) {
            case G.u34.LOGGING_IN_MFA_SMS:
            case G.u34.MFA_SMS_STEP:
            case G.u34.LOGGING_IN_MFA:
            case G.u34.MFA_STEP:
                return this.renderMFA();
            case G.u34.ACCOUNT_SCHEDULED_FOR_DELETION:
            case G.u34.ACCOUNT_DISABLED:
                return this.renderDisabledAccount();
            case G.u34.PHONE_IP_AUTHORIZATION:
                return this.renderIPAuthorization();
            case G.u34.PASSWORD_RECOVERY_PHONE_VERIFICATION:
                return this.renderPasswordRecovery();
            case G.u34.LOGGING_IN:
            case G.u34.NONE:
            default:
                if (null != t && t.state === G.r2o.RESOLVING) return this.renderResolving();
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
            W(this, "loginRef", void 0),
            W(this, "passwordRef", void 0),
            W(this, "codeRef", void 0),
            W(this, "handleAuthToken", async (e) => {
                this.setState({ errors: {} }),
                    await p.Z.loginToken(e, !1),
                    L.default.track(G.rMx.LOGIN_SUCCESSFUL, {
                        source: G.uRl.QR_CODE,
                        login_source: this.loginSource,
                        gift_code_sku_id: this.giftCodeSKUId,
                        is_new_user: !1,
                        login_method: "remote_auth",
                    });
            }),
            W(this, "loginReset", () => {
                this.setState({ errors: {} }), p.Z.loginReset();
            }),
            W(this, "setLoginRef", (e) => {
                this.loginRef = e;
            }),
            W(this, "setPasswordRef", (e) => {
                this.passwordRef = e;
            }),
            W(this, "setCodeRef", (e) => {
                this.codeRef = e;
            }),
            W(this, "getFullLogin", () => {
                let { loginPrefix: e, login: t } = this.state;
                return e + t;
            }),
            W(this, "renderError", (e) => {
                let { errors: t } = this.state;
                if (this.hasError(e)) {
                    let n = t[e];
                    return Array.isArray(n) ? n[0] : n;
                }
                return null;
            }),
            W(this, "handleLogin", async (e) => {
                let { password: t, undelete: n } = this.state;
                null == e || e.preventDefault(), D.S.dispatch(G.CkL.WAVE_EMPHASIZE), this.setState({ errors: {} });
                try {
                    await p.Z.login({
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
            W(this, "handleIPAuthorize", async (e) => {
                let t = this.getFullLogin();
                this.setState({ errors: {} });
                try {
                    let { token: n } = await y.Z.verifyPhone(t, e, !1);
                    await p.Z.authorizeIPAddress(n), this.handleLogin();
                } catch (e) {
                    null != e.body && null != e.body.message && this.setState({ phoneVerifyError: e.body.message });
                }
            }),
            W(this, "handlePasswordReset", async (e) => {
                let { transitionTo: t } = this.props;
                this.setState({ phoneVerifyError: null });
                try {
                    let { token: n } = await y.Z.verifyPhone(this.getFullLogin(), e, !1);
                    t(G.Z5c.RESET, {
                        search: (0, a.stringify)({
                            token: n,
                            from_login: "true",
                        }),
                    });
                } catch (e) {
                    null != e.body && null != e.body.message && this.setState({ phoneVerifyError: e.body.message });
                }
            }),
            W(this, "handleTokenSubmitMFA", (e) => {
                let { mfaType: t, data: n, ticket: r } = e;
                return (
                    D.S.dispatch(G.CkL.WAVE_EMPHASIZE),
                    p.Z.loginMFAv2({
                        code: n,
                        ticket: r,
                        mfaType: t,
                        source: this.loginSource,
                        giftCodeSKUId: this.giftCodeSKUId,
                    })
                );
            }),
            W(this, "handleForgotPassword", async (e) => {
                null != e && e.preventDefault(), null != this.loginRef && this.loginRef.focus();
                let t = this.getFullLogin();
                this.setState({ errors: {} });
                try {
                    if ((D.S.dispatch(G.CkL.WAVE_EMPHASIZE), !(await p.Z.forgotPassword(t)))) return;
                    (0, d.h7j)((e) =>
                        (0, i.jsx)(
                            d.ConfirmModal,
                            Y(
                                q(
                                    {
                                        header: V.intl.string(V.t.f5Pi7O),
                                        confirmText: V.intl.string(V.t.BddRzc),
                                        confirmButtonColor: _.zx.Colors.BRAND,
                                        className: c.tq ? K.mobile : "",
                                    },
                                    e,
                                ),
                                {
                                    children: (0, i.jsx)(d.Text, {
                                        variant: "text-md/normal",
                                        children: V.intl.format(V.t["6u5hQ0"], { email: t }),
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
            W(this, "handleResendCode", () => {
                y.Z.resendCode(this.getFullLogin());
            }),
            W(this, "handleReset", (e) => {
                null != e && e.preventDefault(),
                    p.Z.loginReset(),
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
            W(this, "handleCancelAccountDeletion", () => {
                this.setState({ undelete: !0 }, this.handleLogin);
            }),
            W(this, "handleGotoRegister", () => {
                let e,
                    { login: t } = this.state,
                    {
                        invite: n,
                        giftCode: r,
                        guildTemplate: i,
                        location: l,
                        transitionTo: s,
                        redirectTo: o,
                    } = this.props,
                    c = null != l ? (0, a.parse)(l.search) : {};
                "" !== t && (c.email = t),
                    null != n
                        ? ((c.mode = "register"), (e = G.Z5c.INVITE(n.code)))
                        : null != r
                          ? ((c.mode = "register"), (e = G.Z5c.GIFT_CODE(r.code)))
                          : null != i
                            ? (e = G.Z5c.GUILD_TEMPLATE(i.code))
                            : null != o
                              ? ((e = G.Z5c.REGISTER), (c.redirect_to = o))
                              : (e = G.Z5c.REGISTER),
                    this.loginReset(),
                    s(e, { search: (0, a.stringify)(c) }),
                    D.S.dispatch(G.CkL.WAVE_EMPHASIZE);
            });
        let r = null != e.location ? (0, a.parse)(e.location.search) : {};
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
W(X, "defaultProps", { transitionTo: (e) => n.g.location.assign(e) });
let Q = function (e) {
    let t = (0, u.cj)([R.Z, w.Z, P.default, O.Z, S.Z], () => ({
        authenticated: P.default.isAuthenticated(),
        handoffAvailable: R.Z.isHandoffAvailable(),
        user: R.Z.user,
        loginStatus: P.default.getLoginStatus(),
        mfaTicket: P.default.getMFATicket(),
        mfaMethods: P.default.getMFAMethods(),
        defaultRoute: w.Z.defaultRoute,
        country: S.Z.getCountryCode(),
        hasLoggedInAccounts: O.Z.getHasLoggedInAccounts(),
    }));
    return (0, i.jsx)(X, q({}, e, t));
};
