n.d(t, {
    Z: () => et,
    q: () => $,
}),
    n(35282);
var r,
    i = n(54381),
    s = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(593473),
    c = n(873546),
    u = n(265489),
    d = n(793030),
    h = n(442837),
    g = n(481060),
    m = n(570140),
    p = n(893776),
    f = n(899742),
    _ = n(743142),
    x = n(254942),
    E = n(388905),
    v = n(379760),
    j = n(600164),
    b = n(100159),
    I = n(473855),
    y = n(124860),
    S = n(86779),
    N = n(726745),
    O = n(913583),
    C = n(144114),
    T = n(541692),
    A = n(952802),
    Z = n(703656),
    P = n(648358),
    R = n(108427),
    L = n(901375),
    w = n(314897),
    D = n(117240),
    k = n(896797),
    M = n(626135),
    B = n(585483),
    U = n(358085),
    G = n(481153),
    F = n(588705),
    V = n(494526),
    W = n(163671),
    H = n(981631),
    K = n(260539),
    z = n(388032),
    q = n(132825),
    Y = n(197571);
function J(e, t, n) {
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
function Q(e) {
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
                J(e, t, n[t]);
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
function $() {
    return (0, i.jsx)(E.ZP, { children: (0, i.jsx)(g.$jN, {}) });
}
class ee extends (r = s.PureComponent) {
    static getDerivedStateFromProps(e) {
        let { handoffAvailable: t, authenticated: n } = e;
        return t || n ? null : { checkingHandoff: !1 };
    }
    componentDidMount() {
        let { handoffAvailable: e, authenticated: t, giftCodeSKU: n, invite: r, location: i } = this.props;
        e && !t ? (0, f.is)() : t && this.loginOrSSO(t, i, !0),
            M.default.track(
                H.rMx.LOGIN_VIEWED,
                X(
                    Q(
                        {
                            location: null != r ? "Invite Login Page" : "Non-Invite Login Page",
                            login_source: this.loginSource,
                            authenticated: t,
                        },
                        null != n ? (0, b.Z)(n, !1, !1) : {},
                    ),
                    { source: (0, Z.At)() },
                ),
                { flush: !0 },
            ),
            t ||
                (0, L.j)({
                    abortController: this.state.conditionalMediationAbortController,
                    loginSource: this.loginSource,
                    giftCodeSKUId: this.giftCodeSKUId,
                }),
            p.Z.getLocationMetadata(),
            (0, R.e)("login");
    }
    componentDidUpdate(e, t) {
        let { authenticated: n, location: r, handoffAvailable: i } = this.props,
            { checkingHandoff: s, redirecting: l } = this.state;
        if (
            (!n ||
                e.authenticated ||
                (s && (i || l)) ||
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
        e &&
            null != t &&
            (this.setState({ redirecting: !0 }),
            n ? p.Z.verifySSOToken("login").then(() => this.transitionSSO(t)) : this.transitionSSO(t));
    }
    transitionSSO(e) {
        let { transitionTo: t, redirectTo: n, replaceWith: r } = this.props,
            i = null != e ? (0, o.parse)(e.search) : {};
        if ((delete i.redirect_to, null != n)) null != r ? r(n) : t(n);
        else if (null == i.service) t(H.Z5c.APP);
        else {
            let e = window.location.protocol + window.GLOBAL_ENV.API_ENDPOINT + H.ANM.SSO,
                t = X(Q({}, i), { token: w.default.getToken() });
            window.location = "".concat(e, "?").concat((0, o.stringify)(t));
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
                    className: Y.marginBottom8,
                    children: z.intl.string(z.t.S6RMNA),
                }),
                (0, i.jsx)(E.DK, { children: z.intl.string(z.t.YZiJbh) }),
            ],
        });
    }
    renderDisabledAccount() {
        let { authBoxClassName: e } = this.props,
            t = this.props.loginStatus === H.u34.ACCOUNT_DISABLED,
            n = t ? z.intl.string(z.t["j3rC+U"]) : z.intl.string(z.t.ZFWofo),
            r = t ? z.intl.string(z.t["6eNTWe"]) : z.intl.string(z.t["pCBti+"]);
        return (0, i.jsx)(E.ZP, {
            tag: "form",
            onSubmit: this.handleReset,
            className: e,
            children: (0, i.jsxs)(g.y5t, {
                component: (0, i.jsx)(E.Dx, {
                    className: Y.marginBottom8,
                    children: n,
                }),
                children: [
                    (0, i.jsx)(E.DK, {
                        className: Y.marginBottom20,
                        children: r,
                    }),
                    (0, i.jsxs)(E.gO, {
                        children: [
                            (0, i.jsx)(g.Button, {
                                text: z.intl.string(z.t.JhDw5o),
                                fullWidth: !0,
                                type: "submit",
                            }),
                            (0, i.jsx)("div", {
                                className: a()(Y.marginTop8, q.needAccount),
                                children: z.intl.format(z.t.js2rr5, { onClick: this.handleCancelAccountDeletion }),
                            }),
                        ],
                    }),
                ],
            }),
        });
    }
    renderResolving() {
        let { authBoxClassName: e, country: t } = this.props;
        return (0, i.jsxs)(E.ZP, {
            className: e,
            children: [
                (0, i.jsx)(F.R, {}),
                (0, i.jsxs)(E.gO, {
                    className: Y.marginTop20,
                    children: [
                        (0, i.jsx)(A.Z, {
                            className: Y.marginBottom20,
                            alpha2: t.alpha2,
                            countryCode: t.code.split(" ")[0],
                            label: z.intl.string(z.t.tUjnxr),
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
                        (0, i.jsx)(E.II, {
                            className: Y.marginBottom20,
                            label: z.intl.string(z.t["CIGa+7"]),
                            onChange: (e) => this.setState({ password: e }),
                            type: "password",
                            setRef: this.setPasswordRef,
                            autoComplete: "current-password",
                            spellCheck: "false",
                            value: this.state.password,
                            required: !0,
                        }),
                        (0, i.jsx)("div", {
                            className: Y.marginBottom8,
                            children: (0, i.jsx)(g.Button, {
                                text: z.intl.string(z.t.dKhVQN),
                                fullWidth: !0,
                                type: "submit",
                                disabled: !0,
                            }),
                        }),
                        (0, i.jsx)(g.Avr, {
                            text: z.intl.string(z.t.wWIufs),
                            textVariant: "text-sm/normal",
                            disabled: !0,
                        }),
                        (0, i.jsx)("div", {
                            className: Y.marginTop4,
                            children: (0, i.jsx)(g.Avr, {
                                text: z.intl.string(z.t.tmE73r),
                                textVariant: "text-sm/normal",
                                disabled: !0,
                            }),
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
                giftCode: s,
                loginStatus: l,
                country: o,
                showMobileWebHandoff: c,
                disableAutofocusOnDefaultForm: u,
            } = this.props,
            d = !this.hasError("email") && this.hasError("password");
        return (
            (n =
                null != r
                    ? (0, i.jsx)(F.Z, { invite: r })
                    : null != s
                      ? (0, i.jsx)(G.Z, { giftCode: s })
                      : (0, i.jsxs)("div", {
                            className: q.header,
                            children: [
                                (0, i.jsx)(
                                    E.Dx,
                                    {
                                        className: Y.marginBottom8,
                                        children: z.intl.string(z.t["7fNJgA"]),
                                    },
                                    "title",
                                ),
                                !1 === (0, U.isAndroidWeb)()
                                    ? (0, i.jsx)(E.DK, { children: z.intl.string(z.t.euS7r4) }, "subtitle")
                                    : null,
                            ],
                        })),
            (0, i.jsxs)(
                j.Z,
                {
                    direction: j.Z.Direction.HORIZONTAL,
                    align: j.Z.Align.CENTER,
                    children: [
                        (0, i.jsxs)("div", {
                            className: q.mainLoginContainer,
                            children: [
                                this.canShowChooseAccount &&
                                    this.state.dismissedChooseAccount &&
                                    (0, i.jsx)("div", {
                                        className: q.goBackButton,
                                        children: (0, i.jsx)(g.Button, {
                                            onClick: () => {
                                                this.setState((e) => X(Q({}, e), { dismissedChooseAccount: !1 }));
                                            },
                                            variant: "secondary",
                                            text: z.intl.string(z.t["1MrpWO"]),
                                            icon: g.V7D,
                                        }),
                                    }),
                                n,
                                (0, i.jsx)(g.y5t, {
                                    children: (0, i.jsxs)(E.gO, {
                                        className: Y.marginTop20,
                                        children: [
                                            (0, i.jsx)(A.Z, {
                                                alpha2: o.alpha2,
                                                countryCode: o.code.split(" ")[0],
                                                className: Y.marginBottom20,
                                                label: z.intl.string(z.t.tUjnxr),
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
                                                autoFocus: !d && !c && !u,
                                                required: !0,
                                            }),
                                            (0, i.jsx)(E.II, {
                                                label: z.intl.string(z.t["CIGa+7"]),
                                                error: this.renderError("password"),
                                                onChange: (e) => this.setState({ password: e }),
                                                name: "password",
                                                type: "password",
                                                setRef: this.setPasswordRef,
                                                autoComplete: "current-password",
                                                spellCheck: "false",
                                                autoFocus: d && !c && !u,
                                                value: this.state.password,
                                                required: !0,
                                            }),
                                            (0, i.jsx)("div", {
                                                className: a()(Y.marginBottom20, Y.marginTop4),
                                                children: (0, i.jsx)(g.Avr, {
                                                    text: z.intl.string(z.t.wWIufs),
                                                    textVariant: "text-sm/normal",
                                                    onClick: this.handleForgotPassword,
                                                }),
                                            }),
                                            (0, i.jsx)("div", {
                                                className: Y.marginBottom8,
                                                children: (0, i.jsx)(g.Button, {
                                                    text: z.intl.string(z.t.dKhVQN),
                                                    fullWidth: !0,
                                                    type: "submit",
                                                    loading: l === H.u34.LOGGING_IN,
                                                }),
                                            }),
                                            (0, i.jsxs)("div", {
                                                className: Y.marginTop4,
                                                children: [
                                                    (0, i.jsx)("span", {
                                                        className: q.needAccount,
                                                        children: z.intl.string(z.t.tmE73r),
                                                    }),
                                                    (0, i.jsx)("span", {
                                                        className: q.smallRegisterLink,
                                                        children: (0, i.jsx)(g.Avr, {
                                                            text: z.intl.string(z.t.pV8xeR),
                                                            textVariant: "text-sm/normal",
                                                            onClick: this.handleGotoRegister,
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                }),
                            ],
                        }),
                        (0, i.jsx)(g.y5t, {
                            children: e
                                ? (0, i.jsx)(V.Z, {
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
            className: q.__invalid_pageContainer,
            children: [
                (0, i.jsx)(E.ZP, {
                    onSubmit: this.handleLogin,
                    tag: "form",
                    className: e,
                    expanded: !0,
                    children: this.renderDefaultForm(!0),
                }),
                t && (0, i.jsx)(S.Z, {}),
            ],
        });
    }
    renderGuildTemplate(e) {
        return (0, i.jsx)(W.Z, {
            onSubmit: this.handleLogin,
            tag: "form",
            className: a()(this.props.authBoxClassName, q.horizontalAuthBox),
            children: () => [(0, i.jsx)(I.Z, { guildTemplate: e }, "template"), this.renderDefaultForm(!1)],
        });
    }
    renderMFA() {
        let e = {
            ticket: this.props.mfaTicket,
            methods: this.props.mfaMethods,
        };
        return (0, i.jsx)(E.ZP, {
            style: { padding: 0 },
            children: (0, i.jsx)(y.Cd, {
                mfaFinish: this.handleTokenSubmitMFA,
                mfaChallenge: e,
                onEarlyClose: () => {
                    m.Z.dispatch({ type: "LOGIN_RESET" });
                },
                width: 480,
            }),
        });
    }
    renderIPAuthorization() {
        let { authBoxClassName: e } = this.props,
            { phoneVerifyError: t } = this.state;
        return (0, i.jsx)(E.ZP, {
            tag: "form",
            className: e,
            children: (0, i.jsx)(v.Z, {
                title: z.intl.string(z.t.w55Oco),
                subtitle: z.intl.format(z.t.CfRZBj, { onResendClick: this.handleResendCode }),
                error: t,
                onSubmit: this.handleIPAuthorize,
                onCancel: this.loginReset,
            }),
        });
    }
    renderPasswordRecovery() {
        let { authBoxClassName: e } = this.props,
            { phoneVerifyError: t } = this.state;
        return (0, i.jsx)(E.ZP, {
            tag: "form",
            className: e,
            children: (0, i.jsx)(v.Z, {
                title: z.intl.string(z.t["+xqy3d"]),
                subtitle: z.intl.format(z.t.ef4uZ7, { onResendClick: this.handleResendCode }),
                error: t,
                onSubmit: this.handlePasswordReset,
                onCancel: this.loginReset,
            }),
        });
    }
    renderChooseAccount() {
        let e = () => {
            this.setState((e) => X(Q({}, e), { dismissedChooseAccount: !0 }));
        };
        return (0, i.jsx)(O.Z, { onDismiss: e });
    }
    render() {
        let { invite: e, guildTemplate: t, loginStatus: n, handoffAvailable: r } = this.props,
            { checkingHandoff: s, redirecting: l } = this.state;
        if (l || s) return (0, i.jsx)($, {});
        if (r) return this.renderHandOffAvailable();
        switch (n) {
            case H.u34.LOGGING_IN_MFA_SMS:
            case H.u34.MFA_SMS_STEP:
            case H.u34.LOGGING_IN_MFA:
            case H.u34.MFA_STEP:
                return this.renderMFA();
            case H.u34.ACCOUNT_SCHEDULED_FOR_DELETION:
            case H.u34.ACCOUNT_DISABLED:
                return this.renderDisabledAccount();
            case H.u34.PHONE_IP_AUTHORIZATION:
                return this.renderIPAuthorization();
            case H.u34.PASSWORD_RECOVERY_PHONE_VERIFICATION:
                return this.renderPasswordRecovery();
            case H.u34.LOGGING_IN:
            case H.u34.NONE:
            default:
                if (null != e && e.state === H.r2o.RESOLVING) return this.renderResolving();
                if (null != t)
                    if (t.state === K.Rj.RESOLVING) return this.renderResolving();
                    else return this.renderGuildTemplate(t);
                if (this.canShowChooseAccount && !this.state.dismissedChooseAccount) return this.renderChooseAccount();
                return this.renderDefault();
        }
    }
    constructor(e) {
        var t, n;
        super(e),
            J(this, "loginRef", void 0),
            J(this, "passwordRef", void 0),
            J(this, "codeRef", void 0),
            J(this, "handleAuthToken", async (e, t) => {
                this.setState({ errors: {} }),
                    await p.Z.loginToken(e, !1),
                    M.default.track(H.rMx.LOGIN_SUCCESSFUL, {
                        source: H.uRl.QR_CODE,
                        login_source: this.loginSource,
                        gift_code_sku_id: this.giftCodeSKUId,
                        is_new_user: !1,
                        login_method: "remote_auth",
                        login_instance_id: null != t ? t : null,
                    });
            }),
            J(this, "loginReset", () => {
                this.state.conditionalMediationAbortController.abort("Login state reset"),
                    this.setState({ errors: {} }),
                    p.Z.loginReset();
            }),
            J(this, "setLoginRef", (e) => {
                this.loginRef = e;
            }),
            J(this, "setPasswordRef", (e) => {
                this.passwordRef = e;
            }),
            J(this, "setCodeRef", (e) => {
                this.codeRef = e;
            }),
            J(this, "getFullLogin", () => {
                let { loginPrefix: e, login: t } = this.state;
                return e + t;
            }),
            J(this, "renderError", (e) => {
                let { errors: t } = this.state;
                if (this.hasError(e)) {
                    let n = t[e];
                    return Array.isArray(n) ? n[0] : n;
                }
                return null;
            }),
            J(this, "handleLogin", async (e) => {
                let { password: t, undelete: n, conditionalMediationAbortController: r } = this.state;
                null == e || e.preventDefault(),
                    r.abort("Starting password login"),
                    B.S.dispatch(H.CkL.WAVE_EMPHASIZE),
                    this.setState({ errors: {} });
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
                    let e = (0, x.p)(t);
                    this.setState({ errors: e });
                }
            }),
            J(this, "handleIPAuthorize", async (e) => {
                let t = this.getFullLogin();
                this.setState({ errors: {} });
                try {
                    let { token: n } = await C.Z.verifyPhone(t, e, !1);
                    await p.Z.authorizeIPAddress(n), this.handleLogin();
                } catch (e) {
                    null != e.body && null != e.body.message && this.setState({ phoneVerifyError: e.body.message });
                }
            }),
            J(this, "handlePasswordReset", async (e) => {
                let { transitionTo: t } = this.props;
                this.setState({ phoneVerifyError: null });
                try {
                    let { token: n } = await C.Z.verifyPhone(this.getFullLogin(), e, !1);
                    t(H.Z5c.RESET, {
                        search: (0, o.stringify)({
                            token: n,
                            from_login: "true",
                        }),
                    });
                } catch (e) {
                    null != e.body && null != e.body.message && this.setState({ phoneVerifyError: e.body.message });
                }
            }),
            J(this, "handleTokenSubmitMFA", (e) => {
                let { mfaType: t, data: n, ticket: r } = e;
                return (
                    B.S.dispatch(H.CkL.WAVE_EMPHASIZE),
                    p.Z.loginMFAv2({
                        code: n,
                        ticket: r,
                        mfaType: t,
                        source: this.loginSource,
                        giftCodeSKUId: this.giftCodeSKUId,
                    })
                );
            }),
            J(this, "handleForgotPassword", async (e) => {
                null != e && e.preventDefault(), null != this.loginRef && this.loginRef.focus();
                let t = this.getFullLogin();
                this.setState({ errors: {} });
                try {
                    B.S.dispatch(H.CkL.WAVE_EMPHASIZE);
                    let e = await p.Z.forgotPassword(t);
                    if (!1 === e) return;
                    e === u.B.ONE_TIME_LOGIN
                        ? (0, g.h7j)((e) => {
                              let t = [
                                  {
                                      variant: "primary",
                                      text: z.intl.string(z.t.BddRzS),
                                      onClick: e.onClose,
                                      fullWidth: !0,
                                  },
                              ];
                              return (0, i.jsx)(
                                  d.Modal,
                                  X(
                                      Q(
                                          {
                                              title: z.intl.string(z.t["6Ecyts"]),
                                              actions: t,
                                          },
                                          e,
                                      ),
                                      {
                                          children: (0, i.jsx)(g.Text, {
                                              variant: "text-md/normal",
                                              children: z.intl.string(z.t.iAcrqV),
                                          }),
                                      },
                                  ),
                              );
                          })
                        : (0, g.h7j)((e) =>
                              (0, i.jsx)(
                                  g.ConfirmModal,
                                  X(
                                      Q(
                                          {
                                              header: z.intl.string(z.t.f5Pi7A),
                                              confirmText: z.intl.string(z.t.BddRzS),
                                              className: c.tq ? q.mobile : "",
                                          },
                                          e,
                                      ),
                                      {
                                          children: (0, i.jsx)(g.Text, {
                                              variant: "text-md/normal",
                                              children: z.intl.format(z.t["6u5hQ9"], { email: t }),
                                          }),
                                      },
                                  ),
                              ),
                          );
                } catch (t) {
                    let e = (0, x.p)(t);
                    this.setState({ errors: e });
                }
            }),
            J(this, "handleResendCode", () => {
                C.Z.resendCode(this.getFullLogin());
            }),
            J(this, "handleReset", (e) => {
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
            J(this, "handleCancelAccountDeletion", () => {
                this.setState({ undelete: !0 }, this.handleLogin);
            }),
            J(this, "handleGotoRegister", () => {
                let e,
                    { login: t } = this.state,
                    {
                        invite: n,
                        giftCode: r,
                        guildTemplate: i,
                        location: s,
                        transitionTo: l,
                        redirectTo: a,
                    } = this.props,
                    c = null != s ? (0, o.parse)(s.search) : {};
                "" !== t && (c.email = t),
                    null != n
                        ? ((c.mode = "register"), (e = H.Z5c.INVITE(n.code)))
                        : null != r
                          ? ((c.mode = "register"), (e = H.Z5c.GIFT_CODE(r.code)))
                          : null != i
                            ? (e = H.Z5c.GUILD_TEMPLATE(i.code))
                            : null != a
                              ? ((e = H.Z5c.REGISTER), (c.redirect_to = a))
                              : (e = H.Z5c.REGISTER),
                    this.loginReset(),
                    l(e, { search: (0, o.stringify)(c) }),
                    B.S.dispatch(H.CkL.WAVE_EMPHASIZE);
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
J(ee, "defaultProps", { transitionTo: (e) => n.g.location.assign(e) });
let et = function (e) {
    (0, P.M)();
    let t = (0, h.cj)([D.Z, k.Z, w.default, N.Z, T.Z], () => ({
        authenticated: w.default.isAuthenticated(),
        handoffAvailable: D.Z.isHandoffAvailable(),
        user: D.Z.user,
        loginStatus: w.default.getLoginStatus(),
        mfaTicket: w.default.getMFATicket(),
        mfaMethods: w.default.getMFAMethods(),
        defaultRoute: k.Z.defaultRoute,
        country: T.Z.getCountryCode(),
        hasLoggedInAccounts: N.Z.getHasLoggedInAccounts(),
    }));
    return (0, i.jsx)(ee, Q({}, e, t));
};
