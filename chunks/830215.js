"use strict";
let r;
n.d(t, { A: () => O, W: () => C }), n(142703);
var i = n(110259),
    s = n(247775),
    a = n(562465),
    o = n(506774),
    l = n(73153),
    u = n(198982),
    c = n(934337),
    d = n(626584),
    _ = n(250953),
    f = n(976860),
    p = n(321168),
    h = n(917136),
    m = n(191986),
    E = n(961350),
    g = n(153488),
    A = n(499785),
    I = n(630054),
    T = n(652215),
    S = n(516780);
let y = new d.A("AuthenticationActionCreators"),
    v = 5e3,
    N = null;
var C = (function (e) {
    return (e.MFA = "MFA"), (e.SUCCESS = "SUCCESS"), e;
})({});
function b(e) {
    let t = { type: "LOGOUT", ...e };
    l.h.dispatch(t).catch((e) => {
        throw (y.error("Error while dispatching LOGOUT", e), window.DiscordErrors?.softCrash(e), e);
    });
}
function R(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : T.BVt.DEFAULT_LOGGED_OUT;
    if ((b(), null == t)) return;
    let n = (0, _.Y)();
    null == n ? (0, f.pX)(t, { source: e }) : (I.A.popAll(), n.reset({ index: 0, routes: [{ name: "auth" }] }));
}
let O = {
    startSession(e) {
        l.h.wait(() => {
            l.h.dispatch({ type: "START_SESSION", token: e });
        });
    },
    login(e) {
        let { login: t, password: n, undelete: r, source: s, giftCodeSKUId: a, invite: o, isMultiAccount: c } = e;
        return (
            l.h.dispatch({ type: "LOGIN", isPasswordAttempt: !0 }),
            A.A.post({
                url: T.Rsh.LOGIN,
                body: { login: t, password: n, undelete: r, login_source: s, gift_code_sku_id: a },
                retries: 2,
                oldFormErrors: !0,
                trackedActionData: {
                    event: i.NetworkActionNames.USER_LOGIN,
                    properties: { invite_code: o?.code, is_multi_account: c },
                },
                ...(c ? { headers: { authorization: "" } } : {}),
                rejectWithError: !1,
            }).then(
                (e) => {
                    let {
                        body: {
                            mfa: t,
                            sms: n,
                            webauthn: r,
                            ticket: i,
                            token: s,
                            backup: a,
                            user_id: o,
                            required_actions: u,
                            totp: d,
                            login_instance_id: _,
                        },
                    } = e;
                    l.h.dispatch({ type: "LOGIN_ATTEMPTED", user_id: o, required_actions: u }),
                        t
                            ? l.h.dispatch({
                                  type: "LOGIN_MFA_STEP",
                                  ticket: i,
                                  sms: n,
                                  webauthn: r,
                                  totp: d,
                                  backup: a,
                                  loginInstanceId: _,
                              })
                            : c
                              ? this.switchAccountToken(s)
                              : l.h.dispatch({ type: "LOGIN_SUCCESS", token: s });
                },
                (e) => {
                    let r = new u.Wl(e);
                    if (null != e.body && e.body?.suspended_user_token != null)
                        throw (
                            (l.h.dispatch({
                                type: "LOGIN_SUSPENDED_USER",
                                suspendedUserToken: e.body?.suspended_user_token,
                            }),
                            r)
                        );
                    let i = e.body?.code;
                    throw (
                        (i === T.t02.ACCOUNT_SCHEDULED_FOR_DELETION && null != n && "" !== n
                            ? l.h.dispatch({
                                  type: "LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION",
                                  credentials: { login: t, password: n },
                              })
                            : i === T.t02.ACCOUNT_DISABLED && null != n && "" !== n
                              ? l.h.dispatch({ type: "LOGIN_ACCOUNT_DISABLED", credentials: { login: t, password: n } })
                              : i === T.t02.PHONE_VERIFICATION_REQUIRED
                                ? l.h.dispatch({
                                      type: "LOGIN_PHONE_IP_AUTHORIZATION_REQUIRED",
                                      credentials: { login: t, password: n },
                                  })
                                : l.h.dispatch({ type: "LOGIN_FAILURE", error: r }),
                        r)
                    );
                },
            )
        );
    },
    loginMFAv2(e) {
        let { code: t, ticket: n, source: r, giftCodeSKUId: s, isMultiAccount: a, mfaType: o, loginInstanceId: u } = e;
        return A.A.post({
            url: T.Rsh.LOGIN_MFA(o),
            body: {
                code: t,
                ticket: n,
                login_source: r,
                gift_code_sku_id: s,
                login_instance_id: u ?? E.default.getLoginInstanceId(),
            },
            retries: 2,
            oldFormErrors: !0,
            trackedActionData: { event: i.NetworkActionNames.USER_LOGIN_MFA },
            rejectWithError: !0,
        })
            .then((e) => {
                a
                    ? this.switchAccountToken(e.body.token)
                    : l.h.dispatch({ type: "LOGIN_SUCCESS", token: e.body.token });
            })
            .catch((e) => {
                if (null != e.body && null != e.body.suspended_user_token)
                    return void l.h.dispatch({
                        type: "LOGIN_SUSPENDED_USER",
                        suspendedUserToken: e.body.suspended_user_token,
                    });
                if (e.body?.code === T.t02.MFA_INVALID_CODE) throw Error(e.body.message);
                throw e;
            });
    },
    async authenticatePasswordless(e) {
        let { authenticateFunc: t, conditionalMediationAbortController: n, source: r, giftCodeSKUId: i } = e;
        n?.abort("Starting non-conditional mediation"), l.h.dispatch({ type: "PASSWORDLESS_START" });
        try {
            let { challenge: e, ticket: n } = await (0, h.YS)(),
                s = await t(e);
            try {
                await this.loginWebAuthn({ ticket: n, credential: s, source: r, giftCodeSKUId: i });
            } catch (e) {
                if (e instanceof u.LG && null != e.status && e.status >= 400 && e.status < 500) {
                    let { enabled: e } = m.V.getConfig({ location: "passwordless" });
                    e && (await p.A.signalUnknownCredential(s));
                }
                throw e;
            }
        } catch (e) {
            throw (l.h.dispatch({ type: "PASSWORDLESS_FAILURE", error: e }), e);
        }
    },
    loginWebAuthn(e) {
        let { ticket: t, credential: n, source: r, giftCodeSKUId: s } = e;
        return A.A.post({
            url: T.Rsh.WEBAUTHN_CONDITIONAL_UI_LOGIN,
            body: { credential: n, ticket: t, source: r, giftCodeSKUId: s },
            retries: 1,
            trackedActionData: { event: i.NetworkActionNames.USER_LOGIN_PASSWORDLESS },
            rejectWithError: !0,
        })
            .then((e) => {
                let {
                    body: { token: t, user_id: n, required_actions: r },
                } = e;
                l.h.dispatch({ type: "LOGIN_ATTEMPTED", user_id: n, required_actions: r }),
                    l.h.dispatch({ type: "LOGIN_SUCCESS", token: t });
            })
            .catch((e) => {
                if (e instanceof a.oh) {
                    if (null != e.body.suspended_user_token)
                        return void l.h.dispatch({
                            type: "LOGIN_SUSPENDED_USER",
                            suspendedUserToken: e.body.suspended_user_token,
                        });
                    e = new u.LG(e);
                }
                throw e;
            });
    },
    loginToken(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return (
            l.h.dispatch({ type: "LOGIN" }),
            new Promise((n) => {
                setImmediate(() => {
                    l.h.dispatch({ type: "LOGIN_SUCCESS", token: e }), t && this.startSession(e), n();
                });
            })
        );
    },
    async oneTimeLogin(e) {
        l.h.dispatch({ type: "LOGIN" });
        try {
            let t = (
                await A.A.post({
                    url: T.Rsh.ONE_TIME_LOGIN,
                    body: { ticket: e },
                    oldFormErrors: !0,
                    trackedActionData: { event: i.NetworkActionNames.USER_ONE_TIME_LOGIN },
                    rejectWithError: !0,
                })
            ).body.token;
            if (!t) throw Error("No token in response");
            return await this.loginToken(t, !1), t;
        } catch (e) {
            throw (l.h.dispatch({ type: "LOGIN_FAILURE", error: new u.Wl(e) }), e);
        }
    },
    loginReset(e) {
        l.h.dispatch({ type: "LOGIN_RESET", isMultiAccount: e });
    },
    loginStatusReset() {
        l.h.dispatch({ type: "LOGIN_STATUS_RESET" });
    },
    logoutInternal(e) {
        b(e);
    },
    logout(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : T.BVt.DEFAULT_LOGGED_OUT,
            n = arguments.length > 2 ? arguments[2] : void 0;
        return A.A.post({
            url: T.Rsh.LOGOUT,
            body: { provider: (0, S.oH)(), token: o.w.get(T.Xlh), voip_provider: S.vz, voip_token: o.w.get(T.Ahp) },
            oldFormErrors: !0,
            trackedActionData: { event: i.NetworkActionNames.USER_LOGOUT, properties: { logout_source: e } },
            ...(null != n && { headers: { authorization: s.getToken(n) ?? "" } }),
            rejectWithError: !1,
        }).finally(() => {
            (null == n || n === E.default.getId()) && R(e, t);
        });
    },
    switchAccountToken(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            n = E.default.getToken();
        return (
            y.log("Switching accounts", { wasLoggedIn: null != n, tokenHasChanged: e !== n }),
            b({ isSwitchingAccount: !0, goHomeAfterSwitching: t }),
            this.loginToken(e, !0).then(() => {
                let t = e === E.default.getToken();
                return y.log("Switched accounts finished", { isCorrectToken: t }), t;
            })
        );
    },
    verifySSOToken(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : T.BVt.DEFAULT_LOGGED_OUT;
        return a.Bo.get({ url: T.Rsh.ME, oldFormErrors: !0, rejectWithError: !0 }).catch(() => R(e, t));
    },
    async verify(e) {
        let t = await A.A.post({
            url: T.Rsh.VERIFY,
            body: { token: e },
            trackedActionData: { event: i.NetworkActionNames.USER_VERIFY },
            rejectWithError: !1,
        });
        return l.h.dispatch({ type: "LOGIN_SUCCESS", token: t.body.token }), t.body.user_id;
    },
    authorizePayment: (e) =>
        A.A.post({
            url: T.Rsh.AUTHORIZE_PAYMENT,
            body: { token: e },
            trackedActionData: { event: i.NetworkActionNames.AUTHORIZE_PAYMENT },
            rejectWithError: !0,
        }),
    authorizeIPAddress: (e) =>
        A.A.post({
            url: T.Rsh.AUTHORIZE_IP,
            body: { token: e },
            trackedActionData: { event: i.NetworkActionNames.AUTHORIZE_IP },
            rejectWithError: !0,
        }),
    verifyResend: () =>
        A.A.post({
            url: T.Rsh.VERIFY_RESEND,
            oldFormErrors: !0,
            trackedActionData: { event: i.NetworkActionNames.USER_VERIFY_RESEND },
            rejectWithError: !1,
        }),
    async resetPassword(e, t, n) {
        l.h.dispatch({ type: "LOGIN" });
        let r = { token: e, password: t, source: n },
            s = o.w.get(T.Xlh),
            a = (0, S.oH)();
        null != a && null != s && ((r.push_provider = a), (r.push_token = s));
        let c = o.w.get(T.Ahp);
        null != S.vz && null != c && ((r.push_voip_provider = S.vz), (r.push_voip_token = c));
        try {
            let {
                body: { mfa: e, sms: t, webauthn: n, ticket: s, token: a, backup: o, totp: l },
            } = await A.A.post({
                url: T.Rsh.RESET_PASSWORD,
                body: r,
                oldFormErrors: !0,
                trackedActionData: { event: i.NetworkActionNames.USER_RESET_PASSWORD },
                rejectWithError: !1,
            });
            return { result: e ? "MFA" : "SUCCESS", sms: t, webauthn: n, ticket: s, token: a, backup: o, totp: l };
        } catch (t) {
            let e = new u.Wl(t);
            throw (l.h.dispatch({ type: "LOGIN_FAILURE", error: e }), e);
        }
    },
    async resetPasswordMFAv2(e) {
        let { method: t, code: n, ticket: r, password: s, token: a, source: o } = e;
        return (
            l.h.dispatch({ type: "LOGIN_MFA" }),
            (
                await A.A.post({
                    url: T.Rsh.RESET_PASSWORD,
                    body: { code: n, ticket: r, password: s, token: a, source: o, method: t },
                    oldFormErrors: !0,
                    trackedActionData: { event: i.NetworkActionNames.USER_RESET_PASSWORD, properties: { mfa: !0 } },
                    rejectWithError: !0,
                })
            ).body.token
        );
    },
    async forgotPassword(e) {
        l.h.dispatch({ type: "FORGOT_PASSWORD_REQUEST" });
        try {
            let t = await A.A.post({
                url: T.Rsh.FORGOT_PASSWORD,
                body: { login: e },
                oldFormErrors: !0,
                trackedActionData: { event: i.NetworkActionNames.FORGOT_PASSWORD },
                rejectWithError: !1,
            });
            return l.h.dispatch({ type: "FORGOT_PASSWORD_SENT" }), t.body.method;
        } catch (n) {
            let t = new u.Wl(n);
            if (t.code === T.t02.PHONE_VERIFICATION_REQUIRED)
                return (
                    l.h.dispatch({ type: "LOGIN_PASSWORD_RECOVERY_PHONE_VERIFICATION", credentials: { login: e } }), !1
                );
            throw (l.h.dispatch({ type: "LOGIN_FAILURE", error: t }), t);
        }
    },
    setFingerprint(e) {
        l.h.dispatch({ type: "FINGERPRINT", fingerprint: e });
    },
    getExperiments(e) {
        l.h.dispatch({ type: "EXPERIMENTS_FETCH", withGuildExperiments: e });
    },
    getLocationMetadata: () =>
        null != N
            ? N
            : (clearTimeout(r),
              (r = setTimeout(() => {
                  l.h.dispatch({ type: "SET_CONSENT_REQUIRED", consentRequired: !0 });
              }, v)),
              (N = a.Bo.get({
                  url: T.Rsh.AUTH_LOCATION_METADATA,
                  retries: 2,
                  oldFormErrors: !0,
                  rejectWithError: !0,
              }).then(
                  (e) => {
                      if ((clearTimeout(r), null == g.A.getAuthenticationConsentRequired())) {
                          let t = e?.body?.consent_required ?? !0;
                          l.h.dispatch({ type: "SET_CONSENT_REQUIRED", consentRequired: t });
                      }
                      if (
                          (l.h.dispatch({
                              type: "SET_LOCATION_METADATA",
                              countryCode: e?.body?.country_code ?? void 0,
                          }),
                          (N = null),
                          e?.body?.promotional_email_opt_in != null)
                      ) {
                          let t = e.body.promotional_email_opt_in;
                          (0, c.tq)({ required: t.required, checked: t.pre_checked, preChecked: t.pre_checked });
                      }
                  },
                  () => {
                      clearTimeout(r), l.h.dispatch({ type: "SET_CONSENT_REQUIRED", consentRequired: !0 }), (N = null);
                  },
              ))),
    closeSuspendedUser() {
        l.h.dispatch({ type: "CLOSE_SUSPENDED_USER" });
    },
};
