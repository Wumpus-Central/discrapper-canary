n.d(t, {
    Z: () => en,
    q: () => ee,
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
    p = n(570140),
    f = n(893776),
    m = n(899742),
    _ = n(743142),
    x = n(254942),
    E = n(280466),
    v = n(388905),
    b = n(379760),
    j = n(600164),
    I = n(100159),
    y = n(473855),
    S = n(124860),
    O = n(86779),
    N = n(726745),
    C = n(913583),
    T = n(144114),
    A = n(541692),
    Z = n(952802),
    P = n(703656),
    R = n(648358),
    L = n(108427),
    w = n(901375),
    k = n(314897),
    D = n(117240),
    M = n(896797),
    B = n(626135),
    U = n(585483),
    G = n(358085),
    F = n(481153),
    V = n(588705),
    W = n(494526),
    H = n(163671),
    K = n(981631),
    z = n(260539),
    q = n(388032),
    Y = n(132825),
    J = n(197571);
function Q(e, t, n) {
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
function X(e) {
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
                Q(e, t, n[t]);
            });
    }
    return e;
}
function $(e, t) {
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
function ee() {
    return (0, i.jsx)(v.ZP, { children: (0, i.jsx)(g.$jN, {}) });
}
class et extends (r = s.PureComponent) {
    static getDerivedStateFromProps(e) {
        let { handoffAvailable: t, authenticated: n } = e;
        return t || n ? null : { checkingHandoff: !1 };
    }
    componentDidMount() {
        let { handoffAvailable: e, authenticated: t, giftCodeSKU: n, invite: r, location: i } = this.props;
        e && !t ? (0, m.is)() : t && this.loginOrSSO(t, i, !0),
            B.default.track(
                K.rMx.LOGIN_VIEWED,
                $(
                    X(
                        {
                            location: null != r ? "Invite Login Page" : "Non-Invite Login Page",
                            login_source: this.loginSource,
                            authenticated: t,
                        },
                        null != n ? (0, I.Z)(n, !1, !1) : {},
                    ),
                    { source: (0, P.At)() },
                ),
                { flush: !0 },
            ),
            t ||
                (0, w.j)({
                    abortController: this.state.conditionalMediationAbortController,
                    loginSource: this.loginSource,
                    giftCodeSKUId: this.giftCodeSKUId,
                }),
            f.Z.getLocationMetadata(),
            (0, L.e)("login");
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
            n ? f.Z.verifySSOToken("login").then(() => this.transitionSSO(t)) : this.transitionSSO(t));
    }
    transitionSSO(e) {
        let { transitionTo: t, redirectTo: n, replaceWith: r } = this.props,
            i = null != e ? (0, o.parse)(e.search) : {};
        if ((delete i.redirect_to, null != n)) {
            if ((0, E.Eu)(n)) return void (0, E.Pq)(n);
            null != r ? r(n) : t(n);
        } else if (null == i.service) t(K.Z5c.APP);
        else {
            let e = window.location.protocol + window.GLOBAL_ENV.API_ENDPOINT + K.ANM.SSO,
                t = $(X({}, i), { token: k.default.getToken() });
            window.location = "".concat(e, "?").concat((0, o.stringify)(t));
        }
    }
    hasError(e) {
        return null != this.state.errors[e];
    }
    renderHandOffAvailable() {
        let { authBoxClassName: e } = this.props;
        return (0, i.jsxs)(v.ZP, {
            className: e,
            children: [
                (0, i.jsx)(v.Hh, {}),
                (0, i.jsx)(v.Dx, {
                    className: J.marginBottom8,
                    children: q.intl.string(q.t.S6RMNA),
                }),
                (0, i.jsx)(v.DK, { children: q.intl.string(q.t.YZiJbh) }),
            ],
        });
    }
    renderDisabledAccount() {
        let { authBoxClassName: e } = this.props,
            t = this.props.loginStatus === K.u34.ACCOUNT_DISABLED,
            n = t ? q.intl.string(q.t["j3rC+U"]) : q.intl.string(q.t.ZFWofo),
            r = t ? q.intl.string(q.t["6eNTWe"]) : q.intl.string(q.t["pCBti+"]);
        return (0, i.jsx)(v.ZP, {
            tag: "form",
            onSubmit: this.handleReset,
            className: e,
            children: (0, i.jsxs)(g.y5t, {
                component: (0, i.jsx)(v.Dx, {
                    className: J.marginBottom8,
                    children: n,
                }),
                children: [
                    (0, i.jsx)(v.DK, {
                        className: J.marginBottom20,
                        children: r,
                    }),
                    (0, i.jsxs)(v.gO, {
                        children: [
                            (0, i.jsx)(g.Button, {
                                text: q.intl.string(q.t.JhDw5o),
                                fullWidth: !0,
                                type: "submit",
                            }),
                            (0, i.jsx)("div", {
                                className: a()(J.marginTop8, Y.needAccount),
                                children: q.intl.format(q.t.js2rr5, { onClick: this.handleCancelAccountDeletion }),
                            }),
                        ],
                    }),
                ],
            }),
        });
    }
    renderResolving() {
        let { authBoxClassName: e, country: t } = this.props;
        return (0, i.jsxs)(v.ZP, {
            className: e,
            children: [
                (0, i.jsx)(V.R, {}),
                (0, i.jsxs)(v.gO, {
                    className: J.marginTop20,
                    children: [
                        (0, i.jsx)(Z.Z, {
                            className: J.marginBottom20,
                            alpha2: t.alpha2,
                            countryCode: t.code.split(" ")[0],
                            label: q.intl.string(q.t.tUjnxr),
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
                        (0, i.jsx)(v.II, {
                            className: J.marginBottom20,
                            label: q.intl.string(q.t["CIGa+7"]),
                            onChange: (e) => this.setState({ password: e }),
                            type: "password",
                            setRef: this.setPasswordRef,
                            autoComplete: "current-password",
                            spellCheck: "false",
                            value: this.state.password,
                            required: !0,
                        }),
                        (0, i.jsx)("div", {
                            className: J.marginBottom8,
                            children: (0, i.jsx)(g.Button, {
                                text: q.intl.string(q.t.dKhVQN),
                                fullWidth: !0,
                                type: "submit",
                                disabled: !0,
                            }),
                        }),
                        (0, i.jsx)(g.Avr, {
                            text: q.intl.string(q.t.wWIufs),
                            textVariant: "text-sm/normal",
                            disabled: !0,
                        }),
                        (0, i.jsx)("div", {
                            className: J.marginTop4,
                            children: (0, i.jsx)(g.Avr, {
                                text: q.intl.string(q.t.tmE73r),
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
                    ? (0, i.jsx)(V.Z, { invite: r })
                    : null != s
                      ? (0, i.jsx)(F.Z, { giftCode: s })
                      : (0, i.jsxs)("div", {
                            className: Y.header,
                            children: [
                                (0, i.jsx)(
                                    v.Dx,
                                    {
                                        className: J.marginBottom8,
                                        children: q.intl.string(q.t["7fNJgA"]),
                                    },
                                    "title",
                                ),
                                !1 === (0, G.isAndroidWeb)()
                                    ? (0, i.jsx)(v.DK, { children: q.intl.string(q.t.euS7r4) }, "subtitle")
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
                            className: Y.mainLoginContainer,
                            children: [
                                this.canShowChooseAccount &&
                                    this.state.dismissedChooseAccount &&
                                    (0, i.jsx)("div", {
                                        className: Y.goBackButton,
                                        children: (0, i.jsx)(g.Button, {
                                            onClick: () => {
                                                this.setState((e) => $(X({}, e), { dismissedChooseAccount: !1 }));
                                            },
                                            variant: "secondary",
                                            text: q.intl.string(q.t["1MrpWO"]),
                                            icon: g.V7D,
                                        }),
                                    }),
                                n,
                                (0, i.jsx)(g.y5t, {
                                    children: (0, i.jsxs)(v.gO, {
                                        className: J.marginTop20,
                                        children: [
                                            (0, i.jsx)(Z.Z, {
                                                alpha2: o.alpha2,
                                                countryCode: o.code.split(" ")[0],
                                                className: J.marginBottom20,
                                                label: q.intl.string(q.t.tUjnxr),
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
                                            (0, i.jsx)(v.II, {
                                                label: q.intl.string(q.t["CIGa+7"]),
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
                                                className: a()(J.marginBottom20, J.marginTop4),
                                                children: (0, i.jsx)(g.Avr, {
                                                    text: q.intl.string(q.t.wWIufs),
                                                    textVariant: "text-sm/normal",
                                                    onClick: this.handleForgotPassword,
                                                }),
                                            }),
                                            (0, i.jsx)("div", {
                                                className: J.marginBottom8,
                                                children: (0, i.jsx)(g.Button, {
                                                    text: q.intl.string(q.t.dKhVQN),
                                                    fullWidth: !0,
                                                    type: "submit",
                                                    loading: l === K.u34.LOGGING_IN,
                                                }),
                                            }),
                                            (0, i.jsxs)("div", {
                                                className: J.marginTop4,
                                                children: [
                                                    (0, i.jsx)("span", {
                                                        className: Y.needAccount,
                                                        children: q.intl.string(q.t.tmE73r),
                                                    }),
                                                    (0, i.jsx)("span", {
                                                        className: Y.smallRegisterLink,
                                                        children: (0, i.jsx)(g.Avr, {
                                                            text: q.intl.string(q.t.pV8xeR),
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
                                ? (0, i.jsx)(W.Z, {
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
            className: Y.__invalid_pageContainer,
            children: [
                (0, i.jsx)(v.ZP, {
                    onSubmit: this.handleLogin,
                    tag: "form",
                    className: e,
                    expanded: !0,
                    children: this.renderDefaultForm(!0),
                }),
                t && (0, i.jsx)(O.Z, {}),
            ],
        });
    }
    renderGuildTemplate(e) {
        return (0, i.jsx)(H.Z, {
            onSubmit: this.handleLogin,
            tag: "form",
            className: a()(this.props.authBoxClassName, Y.horizontalAuthBox),
            children: () => [(0, i.jsx)(y.Z, { guildTemplate: e }, "template"), this.renderDefaultForm(!1)],
        });
    }
    renderMFA() {
        let e = {
            ticket: this.props.mfaTicket,
            methods: this.props.mfaMethods,
        };
        return (0, i.jsx)(v.ZP, {
            style: { padding: 0 },
            children: (0, i.jsx)(S.C, {
                mfaFinish: this.handleTokenSubmitMFA,
                mfaChallenge: e,
                onEarlyClose: () => {
                    p.Z.dispatch({ type: "LOGIN_RESET" });
                },
                width: 480,
            }),
        });
    }
    renderIPAuthorization() {
        let { authBoxClassName: e } = this.props,
            { phoneVerifyError: t } = this.state;
        return (0, i.jsx)(v.ZP, {
            tag: "form",
            className: e,
            children: (0, i.jsx)(b.Z, {
                title: q.intl.string(q.t.w55Oco),
                subtitle: q.intl.format(q.t.CfRZBj, { onResendClick: this.handleResendCode }),
                error: t,
                onSubmit: this.handleIPAuthorize,
                onCancel: this.loginReset,
            }),
        });
    }
    renderPasswordRecovery() {
        let { authBoxClassName: e } = this.props,
            { phoneVerifyError: t } = this.state;
        return (0, i.jsx)(v.ZP, {
            tag: "form",
            className: e,
            children: (0, i.jsx)(b.Z, {
                title: q.intl.string(q.t["+xqy3d"]),
                subtitle: q.intl.format(q.t.ef4uZ7, { onResendClick: this.handleResendCode }),
                error: t,
                onSubmit: this.handlePasswordReset,
                onCancel: this.loginReset,
            }),
        });
    }
    renderChooseAccount() {
        let e = () => {
            this.setState((e) => $(X({}, e), { dismissedChooseAccount: !0 }));
        };
        return (0, i.jsx)(C.Z, { onDismiss: e });
    }
    render() {
        let { invite: e, guildTemplate: t, loginStatus: n, handoffAvailable: r } = this.props,
            { checkingHandoff: s, redirecting: l } = this.state;
        if (l || s) return (0, i.jsx)(ee, {});
        if (r) return this.renderHandOffAvailable();
        switch (n) {
            case K.u34.LOGGING_IN_MFA_SMS:
            case K.u34.MFA_SMS_STEP:
            case K.u34.LOGGING_IN_MFA:
            case K.u34.MFA_STEP:
                return this.renderMFA();
            case K.u34.ACCOUNT_SCHEDULED_FOR_DELETION:
            case K.u34.ACCOUNT_DISABLED:
                return this.renderDisabledAccount();
            case K.u34.PHONE_IP_AUTHORIZATION:
                return this.renderIPAuthorization();
            case K.u34.PASSWORD_RECOVERY_PHONE_VERIFICATION:
                return this.renderPasswordRecovery();
            case K.u34.LOGGING_IN:
            case K.u34.NONE:
            default:
                if (null != e && e.state === K.r2o.RESOLVING) return this.renderResolving();
                if (null != t)
                    if (t.state === z.Rj.RESOLVING) return this.renderResolving();
                    else return this.renderGuildTemplate(t);
                if (this.canShowChooseAccount && !this.state.dismissedChooseAccount) return this.renderChooseAccount();
                return this.renderDefault();
        }
    }
    constructor(e) {
        var t, n;
        super(e),
            Q(this, "loginRef", void 0),
            Q(this, "passwordRef", void 0),
            Q(this, "codeRef", void 0),
            Q(this, "handleAuthToken", async (e, t) => {
                this.setState({ errors: {} }),
                    await f.Z.loginToken(e, !1),
                    B.default.track(K.rMx.LOGIN_SUCCESSFUL, {
                        source: K.uRl.QR_CODE,
                        login_source: this.loginSource,
                        gift_code_sku_id: this.giftCodeSKUId,
                        is_new_user: !1,
                        login_method: "remote_auth",
                        login_instance_id: null != t ? t : null,
                    });
            }),
            Q(this, "loginReset", () => {
                this.state.conditionalMediationAbortController.abort("Login state reset"),
                    this.setState({ errors: {} }),
                    f.Z.loginReset();
            }),
            Q(this, "setLoginRef", (e) => {
                this.loginRef = e;
            }),
            Q(this, "setPasswordRef", (e) => {
                this.passwordRef = e;
            }),
            Q(this, "setCodeRef", (e) => {
                this.codeRef = e;
            }),
            Q(this, "getFullLogin", () => {
                let { loginPrefix: e, login: t } = this.state;
                return e + t;
            }),
            Q(this, "renderError", (e) => {
                let { errors: t } = this.state;
                if (this.hasError(e)) {
                    let n = t[e];
                    return Array.isArray(n) ? n[0] : n;
                }
                return null;
            }),
            Q(this, "handleLogin", async (e) => {
                let { password: t, undelete: n, conditionalMediationAbortController: r } = this.state;
                null == e || e.preventDefault(),
                    r.abort("Starting password login"),
                    U.S.dispatch(K.CkL.WAVE_EMPHASIZE),
                    this.setState({ errors: {} });
                try {
                    await f.Z.login({
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
            Q(this, "handleIPAuthorize", async (e) => {
                let t = this.getFullLogin();
                this.setState({ errors: {} });
                try {
                    let { token: n } = await T.Z.verifyPhone(t, e, !1);
                    await f.Z.authorizeIPAddress(n), this.handleLogin();
                } catch (e) {
                    null != e.body && null != e.body.message && this.setState({ phoneVerifyError: e.body.message });
                }
            }),
            Q(this, "handlePasswordReset", async (e) => {
                let { transitionTo: t } = this.props;
                this.setState({ phoneVerifyError: null });
                try {
                    let { token: n } = await T.Z.verifyPhone(this.getFullLogin(), e, !1);
                    t(K.Z5c.RESET, {
                        search: (0, o.stringify)({
                            token: n,
                            from_login: "true",
                        }),
                    });
                } catch (e) {
                    null != e.body && null != e.body.message && this.setState({ phoneVerifyError: e.body.message });
                }
            }),
            Q(this, "handleTokenSubmitMFA", (e) => {
                let { mfaType: t, data: n, ticket: r } = e;
                return (
                    U.S.dispatch(K.CkL.WAVE_EMPHASIZE),
                    f.Z.loginMFAv2({
                        code: n,
                        ticket: r,
                        mfaType: t,
                        source: this.loginSource,
                        giftCodeSKUId: this.giftCodeSKUId,
                    })
                );
            }),
            Q(this, "handleForgotPassword", async (e) => {
                null != e && e.preventDefault(), null != this.loginRef && this.loginRef.focus();
                let t = this.getFullLogin();
                this.setState({ errors: {} });
                try {
                    U.S.dispatch(K.CkL.WAVE_EMPHASIZE);
                    let e = await f.Z.forgotPassword(t);
                    if (!1 === e) return;
                    e === u.B.ONE_TIME_LOGIN
                        ? (0, g.h7j)((e) => {
                              let t = [
                                  {
                                      variant: "primary",
                                      text: q.intl.string(q.t.BddRzS),
                                      onClick: e.onClose,
                                      fullWidth: !0,
                                  },
                              ];
                              return (0, i.jsx)(
                                  d.Modal,
                                  $(
                                      X(
                                          {
                                              title: q.intl.string(q.t["6Ecyts"]),
                                              actions: t,
                                          },
                                          e,
                                      ),
                                      {
                                          children: (0, i.jsx)(g.Text, {
                                              variant: "text-md/normal",
                                              children: q.intl.string(q.t.iAcrqV),
                                          }),
                                      },
                                  ),
                              );
                          })
                        : (0, g.h7j)((e) =>
                              (0, i.jsx)(
                                  g.ConfirmModal,
                                  $(
                                      X(
                                          {
                                              header: q.intl.string(q.t.f5Pi7A),
                                              confirmText: q.intl.string(q.t.BddRzS),
                                              className: c.tq ? Y.mobile : "",
                                          },
                                          e,
                                      ),
                                      {
                                          children: (0, i.jsx)(g.Text, {
                                              variant: "text-md/normal",
                                              children: q.intl.format(q.t["6u5hQ9"], { email: t }),
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
            Q(this, "handleResendCode", () => {
                T.Z.resendCode(this.getFullLogin());
            }),
            Q(this, "handleReset", (e) => {
                null != e && e.preventDefault(),
                    f.Z.loginReset(),
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
            Q(this, "handleCancelAccountDeletion", () => {
                this.setState({ undelete: !0 }, this.handleLogin);
            }),
            Q(this, "handleGotoRegister", () => {
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
                        ? ((c.mode = "register"), (e = K.Z5c.INVITE(n.code)))
                        : null != r
                          ? ((c.mode = "register"), (e = K.Z5c.GIFT_CODE(r.code)))
                          : null != i
                            ? (e = K.Z5c.GUILD_TEMPLATE(i.code))
                            : null != a
                              ? ((e = K.Z5c.REGISTER), (c.redirect_to = a))
                              : (e = K.Z5c.REGISTER),
                    this.loginReset(),
                    l(e, { search: (0, o.stringify)(c) }),
                    U.S.dispatch(K.CkL.WAVE_EMPHASIZE);
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
Q(et, "defaultProps", { transitionTo: (e) => n.g.location.assign(e) });
let en = function (e) {
    (0, R.M)();
    let t = (0, h.cj)([D.Z, M.Z, k.default, N.Z, A.Z], () => ({
        authenticated: k.default.isAuthenticated(),
        handoffAvailable: D.Z.isHandoffAvailable(),
        user: D.Z.user,
        loginStatus: k.default.getLoginStatus(),
        mfaTicket: k.default.getMFATicket(),
        mfaMethods: k.default.getMFAMethods(),
        defaultRoute: M.Z.defaultRoute,
        country: A.Z.getCountryCode(),
        hasLoggedInAccounts: N.Z.getHasLoggedInAccounts(),
    }));
    return (0, i.jsx)(et, X({}, e, t));
};
