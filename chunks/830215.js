"use strict";
let i;
n.d(t, { A: () => L, W: () => C }), n(142703);
var r,
    s = n(110259),
    a = n(247775),
    o = n(636537),
    l = n(506774),
    _ = n(228366),
    d = n(845584),
    u = n(934337),
    c = n(626584),
    E = n(250953),
    h = n(976860),
    m = n(84948),
    f = n(917136),
    g = n(495544),
    A = n(153488),
    I = n(353835),
    p = n(499785),
    T = n(982168),
    S = n(652215),
    N = n(516780);
let O = new c.A("AuthenticationActionCreators"),
    R = null;
var C = (((r = {}).MFA = "MFA"), (r.SUCCESS = "SUCCESS"), r);
function y(e) {
    I.A.clearNavigationHistory();
    let t = { type: "LOGOUT", ...e };
    _.h.dispatch(t).catch((e) => {
        throw (O.error("Error while dispatching LOGOUT", e), window.DiscordErrors?.softCrash(e), e);
    });
}
function D(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : S.BVt.DEFAULT_LOGGED_OUT;
    if ((y(), null == t)) return;
    let n = (0, E.Y)();
    null == n ? (0, h.pX)(t, { source: e }) : (T.A.popAll(), n.reset({ index: 0, routes: [{ name: "auth" }] }));
}
let L = {
    startSession(e) {
        _.h.wait(() => {
            _.h.dispatch({ type: "START_SESSION", token: e });
        });
    },
    login(e) {
        let { login: t, password: n, undelete: i, source: r, giftCodeSKUId: a, invite: o, isMultiAccount: l } = e;
        return (
            _.h.dispatch({ type: "LOGIN", isPasswordAttempt: !0 }),
            p.A.post({
                url: S.Rsh.LOGIN,
                body: { login: t, password: n, undelete: i, login_source: r, gift_code_sku_id: a },
                retries: 2,
                oldFormErrors: !0,
                trackedActionData: {
                    event: s.NetworkActionNames.USER_LOGIN,
                    properties: { invite_code: o?.code, is_multi_account: l },
                },
                ...(l ? { headers: { authorization: "" } } : {}),
                rejectWithError: !1,
            }).then(
                (e) => {
                    let {
                        body: {
                            mfa: t,
                            sms: n,
                            webauthn: i,
                            ticket: r,
                            token: s,
                            backup: a,
                            user_id: o,
                            required_actions: d,
                            totp: u,
                            login_instance_id: c,
                        },
                    } = e;
                    _.h.dispatch({ type: "LOGIN_ATTEMPTED", user_id: o, required_actions: d }),
                        t
                            ? _.h.dispatch({
                                  type: "LOGIN_MFA_STEP",
                                  ticket: r,
                                  sms: n,
                                  webauthn: i,
                                  totp: u,
                                  backup: a,
                                  loginInstanceId: c,
                              })
                            : l
                              ? this.switchAccountToken(s)
                              : _.h.dispatch({ type: "LOGIN_SUCCESS", token: s });
                },
                (e) => {
                    let i = new d.Wl(e);
                    if (null != e.body && e.body?.suspended_user_token != null)
                        throw (
                            (_.h.dispatch({
                                type: "LOGIN_SUSPENDED_USER",
                                suspendedUserToken: e.body?.suspended_user_token,
                            }),
                            i)
                        );
                    let r = e.body?.code;
                    throw (
                        (r === S.t02.ACCOUNT_SCHEDULED_FOR_DELETION && null != n && "" !== n
                            ? _.h.dispatch({
                                  type: "LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION",
                                  credentials: { login: t, password: n },
                              })
                            : r === S.t02.ACCOUNT_DISABLED && null != n && "" !== n
                              ? _.h.dispatch({ type: "LOGIN_ACCOUNT_DISABLED", credentials: { login: t, password: n } })
                              : r === S.t02.PHONE_VERIFICATION_REQUIRED
                                ? _.h.dispatch({
                                      type: "LOGIN_PHONE_IP_AUTHORIZATION_REQUIRED",
                                      credentials: { login: t, password: n },
                                  })
                                : _.h.dispatch({ type: "LOGIN_FAILURE", error: i }),
                        i)
                    );
                },
            )
        );
    },
    loginMFAv2(e) {
        let { code: t, ticket: n, source: i, giftCodeSKUId: r, isMultiAccount: a, mfaType: o, loginInstanceId: l } = e;
        return p.A.post({
            url: S.Rsh.LOGIN_MFA(o),
            body: {
                code: t,
                ticket: n,
                login_source: i,
                gift_code_sku_id: r,
                login_instance_id: l ?? g.default.getLoginInstanceId(),
            },
            retries: 2,
            oldFormErrors: !0,
            trackedActionData: { event: s.NetworkActionNames.USER_LOGIN_MFA },
            rejectWithError: !0,
        })
            .then((e) => {
                a
                    ? this.switchAccountToken(e.body.token)
                    : _.h.dispatch({ type: "LOGIN_SUCCESS", token: e.body.token });
            })
            .catch((e) => {
                if (null != e.body && null != e.body.suspended_user_token)
                    return void _.h.dispatch({
                        type: "LOGIN_SUSPENDED_USER",
                        suspendedUserToken: e.body.suspended_user_token,
                    });
                if (e.body?.code === S.t02.MFA_INVALID_CODE) throw Error(e.body.message);
                throw e;
            });
    },
    async authenticatePasswordless(e) {
        let {
            authenticateFunc: t,
            conditionalMediationAbortController: n,
            source: i,
            giftCodeSKUId: r,
            isMultiAccount: s,
        } = e;
        n?.abort("Starting non-conditional mediation"), _.h.dispatch({ type: "PASSWORDLESS_START" });
        try {
            let { challenge: e, ticket: n } = await (0, f.YS)(),
                a = await t(e);
            try {
                await this.loginWebAuthn({ ticket: n, credential: a, source: i, giftCodeSKUId: r, isMultiAccount: s });
            } catch (e) {
                throw (
                    (e instanceof d.LG &&
                        null != e.status &&
                        e.status >= 400 &&
                        e.status < 500 &&
                        (await m.A.signalUnknownCredential(a)),
                    e)
                );
            }
        } catch (e) {
            throw (_.h.dispatch({ type: "PASSWORDLESS_FAILURE", error: e }), e);
        }
    },
    loginWebAuthn(e) {
        let { ticket: t, credential: n, source: i, giftCodeSKUId: r, isMultiAccount: a } = e;
        return p.A.post({
            url: S.Rsh.WEBAUTHN_CONDITIONAL_UI_LOGIN,
            body: { credential: n, ticket: t, source: i, giftCodeSKUId: r },
            retries: 1,
            trackedActionData: { event: s.NetworkActionNames.USER_LOGIN_PASSWORDLESS },
            rejectWithError: !0,
        })
            .then((e) => {
                let {
                    body: { token: t, user_id: n, required_actions: i },
                } = e;
                _.h.dispatch({ type: "LOGIN_ATTEMPTED", user_id: n, required_actions: i }),
                    a ? this.switchAccountToken(t) : _.h.dispatch({ type: "LOGIN_SUCCESS", token: t });
            })
            .catch((e) => {
                if (e instanceof o.oh) {
                    if (null != e.body.suspended_user_token)
                        return void _.h.dispatch({
                            type: "LOGIN_SUSPENDED_USER",
                            suspendedUserToken: e.body.suspended_user_token,
                        });
                    e = new d.LG(e);
                }
                throw e;
            });
    },
    loginToken(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return (
            _.h.dispatch({ type: "LOGIN" }),
            new Promise((n) => {
                setImmediate(() => {
                    _.h.dispatch({ type: "LOGIN_SUCCESS", token: e }), t && this.startSession(e), n();
                });
            })
        );
    },
    async oneTimeLogin(e) {
        _.h.dispatch({ type: "LOGIN" });
        try {
            let t = (
                await p.A.post({
                    url: S.Rsh.ONE_TIME_LOGIN,
                    body: { ticket: e },
                    oldFormErrors: !0,
                    trackedActionData: { event: s.NetworkActionNames.USER_ONE_TIME_LOGIN },
                    rejectWithError: !0,
                })
            ).body.token;
            if (!t) throw Error("No token in response");
            return await this.loginToken(t, !1), t;
        } catch (e) {
            throw (_.h.dispatch({ type: "LOGIN_FAILURE", error: new d.Wl(e) }), e);
        }
    },
    loginReset(e) {
        _.h.dispatch({ type: "LOGIN_RESET", isMultiAccount: e });
    },
    loginStatusReset() {
        _.h.dispatch({ type: "LOGIN_STATUS_RESET" });
    },
    logoutInternal(e) {
        y(e);
    },
    logout(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : S.BVt.DEFAULT_LOGGED_OUT,
            n = arguments.length > 2 ? arguments[2] : void 0;
        return p.A.post({
            url: S.Rsh.LOGOUT,
            body: { provider: (0, N.oH)(), token: l.w.get(S.Xlh), voip_provider: N.vz, voip_token: l.w.get(S.Ahp) },
            oldFormErrors: !0,
            trackedActionData: { event: s.NetworkActionNames.USER_LOGOUT, properties: { logout_source: e } },
            ...(null != n && { headers: { authorization: a.getToken(n) ?? "" } }),
            rejectWithError: !1,
        }).finally(() => {
            (null == n || n === g.default.getId()) && D(e, t);
        });
    },
    switchAccountToken(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            n = g.default.getToken();
        return (
            O.log("Switching accounts", { wasLoggedIn: null != n, tokenHasChanged: e !== n }),
            y({ isSwitchingAccount: !0, goHomeAfterSwitching: t }),
            this.loginToken(e, !0).then(() => {
                let t = e === g.default.getToken();
                return O.log("Switched accounts finished", { isCorrectToken: t }), t;
            })
        );
    },
    verifySSOToken(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : S.BVt.DEFAULT_LOGGED_OUT;
        return o.Bo.get({ url: S.Rsh.ME, oldFormErrors: !0, rejectWithError: !0 }).catch(() => D(e, t));
    },
    async verify(e) {
        let t = await p.A.post({
            url: S.Rsh.VERIFY,
            body: { token: e },
            trackedActionData: { event: s.NetworkActionNames.USER_VERIFY },
            rejectWithError: !1,
        });
        return _.h.dispatch({ type: "LOGIN_SUCCESS", token: t.body.token }), t.body.user_id;
    },
    authorizePayment: (e) =>
        p.A.post({
            url: S.Rsh.AUTHORIZE_PAYMENT,
            body: { token: e },
            trackedActionData: { event: s.NetworkActionNames.AUTHORIZE_PAYMENT },
            rejectWithError: !0,
        }),
    authorizeIPAddress: (e) =>
        p.A.post({
            url: S.Rsh.AUTHORIZE_IP,
            body: { token: e },
            trackedActionData: { event: s.NetworkActionNames.AUTHORIZE_IP },
            rejectWithError: !0,
        }),
    verifyResend: () =>
        p.A.post({
            url: S.Rsh.VERIFY_RESEND,
            oldFormErrors: !0,
            trackedActionData: { event: s.NetworkActionNames.USER_VERIFY_RESEND },
            rejectWithError: !1,
        }),
    async resetPassword(e, t, n) {
        _.h.dispatch({ type: "LOGIN" });
        let i = { token: e, password: t, source: n },
            r = l.w.get(S.Xlh),
            a = (0, N.oH)();
        null != a && null != r && ((i.push_provider = a), (i.push_token = r));
        let o = l.w.get(S.Ahp);
        null != N.vz && null != o && ((i.push_voip_provider = N.vz), (i.push_voip_token = o));
        try {
            let {
                body: { mfa: e, sms: t, webauthn: n, ticket: r, token: a, backup: o, totp: l },
            } = await p.A.post({
                url: S.Rsh.RESET_PASSWORD,
                body: i,
                oldFormErrors: !0,
                trackedActionData: { event: s.NetworkActionNames.USER_RESET_PASSWORD },
                rejectWithError: !1,
            });
            return { result: e ? "MFA" : "SUCCESS", sms: t, webauthn: n, ticket: r, token: a, backup: o, totp: l };
        } catch (t) {
            let e = new d.Wl(t);
            throw (_.h.dispatch({ type: "LOGIN_FAILURE", error: e }), e);
        }
    },
    async resetPasswordMFAv2(e) {
        let { method: t, code: n, ticket: i, password: r, token: a, source: o } = e;
        return (
            _.h.dispatch({ type: "LOGIN_MFA" }),
            (
                await p.A.post({
                    url: S.Rsh.RESET_PASSWORD,
                    body: { code: n, ticket: i, password: r, token: a, source: o, method: t },
                    oldFormErrors: !0,
                    trackedActionData: { event: s.NetworkActionNames.USER_RESET_PASSWORD, properties: { mfa: !0 } },
                    rejectWithError: !0,
                })
            ).body.token
        );
    },
    async forgotPassword(e) {
        _.h.dispatch({ type: "FORGOT_PASSWORD_REQUEST" });
        try {
            let t = await p.A.post({
                url: S.Rsh.FORGOT_PASSWORD,
                body: { login: e },
                oldFormErrors: !0,
                trackedActionData: { event: s.NetworkActionNames.FORGOT_PASSWORD },
                rejectWithError: !1,
            });
            return _.h.dispatch({ type: "FORGOT_PASSWORD_SENT" }), t.body.method;
        } catch (n) {
            let t = new d.Wl(n);
            if (t.code === S.t02.PHONE_VERIFICATION_REQUIRED)
                return (
                    _.h.dispatch({ type: "LOGIN_PASSWORD_RECOVERY_PHONE_VERIFICATION", credentials: { login: e } }), !1
                );
            throw (_.h.dispatch({ type: "LOGIN_FAILURE", error: t }), t);
        }
    },
    setFingerprint(e) {
        _.h.dispatch({ type: "FINGERPRINT", fingerprint: e });
    },
    getExperiments(e) {
        _.h.dispatch({ type: "EXPERIMENTS_FETCH", withGuildExperiments: e });
    },
    getLocationMetadata: () =>
        null != R
            ? R
            : (clearTimeout(i),
              (i = setTimeout(() => {
                  _.h.dispatch({ type: "SET_CONSENT_REQUIRED", consentRequired: !0 });
              }, 5e3)),
              (R = o.Bo.get({
                  url: S.Rsh.AUTH_LOCATION_METADATA,
                  retries: 2,
                  oldFormErrors: !0,
                  rejectWithError: !0,
              }).then(
                  (e) => {
                      if ((clearTimeout(i), null == A.A.getAuthenticationConsentRequired())) {
                          let t = e?.body?.consent_required ?? !0;
                          _.h.dispatch({ type: "SET_CONSENT_REQUIRED", consentRequired: t });
                      }
                      if (
                          (_.h.dispatch({
                              type: "SET_LOCATION_METADATA",
                              countryCode: e?.body?.country_code ?? void 0,
                          }),
                          (R = null),
                          e?.body?.promotional_email_opt_in != null)
                      ) {
                          let t = e.body.promotional_email_opt_in;
                          (0, u.tq)({ required: t.required, checked: t.pre_checked, preChecked: t.pre_checked });
                      }
                  },
                  () => {
                      clearTimeout(i), _.h.dispatch({ type: "SET_CONSENT_REQUIRED", consentRequired: !0 }), (R = null);
                  },
              ))),
    closeSuspendedUser() {
        _.h.dispatch({ type: "CLOSE_SUSPENDED_USER" });
    },
};
