"use strict";
let i;
n.d(t, { A: () => y, W: () => R }), n(142703);
var r,
    a = n(562708),
    s = n(247775),
    l = n(636537),
    o = n(506774),
    d = n(228366),
    c = n(913122),
    u = n(934337),
    _ = n(626584),
    E = n(250953),
    A = n(976860),
    h = n(84948),
    I = n(917136),
    f = n(280450),
    p = n(153488),
    T = n(353835),
    m = n(499785),
    g = n(982168),
    S = n(652215),
    N = n(516780);
let C = new _.A("AuthenticationActionCreators"),
    O = null;
var R = (((r = {}).MFA = "MFA"), (r.SUCCESS = "SUCCESS"), r);
function L(e) {
    T.A.clearNavigationHistory();
    let t = { type: "LOGOUT", ...e };
    d.h.dispatch(t).catch((e) => {
        throw (C.error("Error while dispatching LOGOUT", e), window.DiscordErrors?.softCrash(e), e);
    });
}
function D(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : S.BVt.DEFAULT_LOGGED_OUT;
    if ((L(), null == t)) return;
    let n = (0, E.Y)();
    null == n ? (0, A.pX)(t, { source: e }) : (g.A.popAll(), n.reset({ index: 0, routes: [{ name: "auth" }] }));
}
let y = {
    startSession(e) {
        d.h.wait(() => {
            d.h.dispatch({ type: "START_SESSION", token: e });
        });
    },
    login(e) {
        let { login: t, password: n, undelete: i, source: r, giftCodeSKUId: s, invite: o, isMultiAccount: u } = e;
        return (
            d.h.dispatch({ type: "LOGIN", isPasswordAttempt: !0 }),
            m.A.post({
                url: S.Rsh.LOGIN,
                body: { login: t, password: n, undelete: i, login_source: r, gift_code_sku_id: s },
                retries: 2,
                oldFormErrors: !0,
                trackedActionData: {
                    event: a.NetworkActionNames.USER_LOGIN,
                    properties: { invite_code: o?.code, is_multi_account: u },
                },
                ...(u ? { headers: { authorization: "" } } : {}),
                rejectWithError: (0, l.fT)(),
            }).then(
                (e) => {
                    let {
                        body: {
                            mfa: t,
                            sms: n,
                            webauthn: i,
                            ticket: r,
                            token: a,
                            backup: s,
                            user_id: l,
                            required_actions: o,
                            totp: c,
                            login_instance_id: _,
                        },
                    } = e;
                    d.h.dispatch({ type: "LOGIN_ATTEMPTED", user_id: l, required_actions: o }),
                        t
                            ? d.h.dispatch({
                                  type: "LOGIN_MFA_STEP",
                                  ticket: r,
                                  sms: n,
                                  webauthn: i,
                                  totp: c,
                                  backup: s,
                                  loginInstanceId: _,
                              })
                            : u
                              ? this.switchAccountToken(a)
                              : d.h.dispatch({ type: "LOGIN_SUCCESS", token: a });
                },
                (e) => {
                    let i = new c.Wl(e);
                    if (null != e.body && e.body?.suspended_user_token != null)
                        throw (
                            (d.h.dispatch({
                                type: "LOGIN_SUSPENDED_USER",
                                suspendedUserToken: e.body?.suspended_user_token,
                            }),
                            i)
                        );
                    let r = e.body?.code;
                    throw (
                        (r === S.t02.ACCOUNT_SCHEDULED_FOR_DELETION && null != n && "" !== n
                            ? d.h.dispatch({
                                  type: "LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION",
                                  credentials: { login: t, password: n },
                              })
                            : r === S.t02.ACCOUNT_DISABLED && null != n && "" !== n
                              ? d.h.dispatch({ type: "LOGIN_ACCOUNT_DISABLED", credentials: { login: t, password: n } })
                              : r === S.t02.PHONE_VERIFICATION_REQUIRED
                                ? d.h.dispatch({
                                      type: "LOGIN_PHONE_IP_AUTHORIZATION_REQUIRED",
                                      credentials: { login: t, password: n },
                                  })
                                : d.h.dispatch({ type: "LOGIN_FAILURE", error: i }),
                        i)
                    );
                },
            )
        );
    },
    loginMFAv2(e) {
        let { code: t, ticket: n, source: i, giftCodeSKUId: r, isMultiAccount: s, mfaType: l, loginInstanceId: o } = e;
        return m.A.post({
            url: S.Rsh.LOGIN_MFA(l),
            body: {
                code: t,
                ticket: n,
                login_source: i,
                gift_code_sku_id: r,
                login_instance_id: o ?? f.default.getLoginInstanceId(),
            },
            retries: 2,
            oldFormErrors: !0,
            trackedActionData: { event: a.NetworkActionNames.USER_LOGIN_MFA },
            rejectWithError: !0,
        })
            .then((e) => {
                s
                    ? this.switchAccountToken(e.body.token)
                    : d.h.dispatch({ type: "LOGIN_SUCCESS", token: e.body.token });
            })
            .catch((e) => {
                if (null != e.body && null != e.body.suspended_user_token)
                    return void d.h.dispatch({
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
            isMultiAccount: a,
        } = e;
        n?.abort("Starting non-conditional mediation"), d.h.dispatch({ type: "PASSWORDLESS_START" });
        try {
            let { challenge: e, ticket: n } = await (0, I.YS)(),
                s = await t(e);
            try {
                await this.loginWebAuthn({ ticket: n, credential: s, source: i, giftCodeSKUId: r, isMultiAccount: a });
            } catch (e) {
                throw (
                    (e instanceof c.LG &&
                        null != e.status &&
                        e.status >= 400 &&
                        e.status < 500 &&
                        (await h.A.signalUnknownCredential(s)),
                    e)
                );
            }
        } catch (e) {
            throw (d.h.dispatch({ type: "PASSWORDLESS_FAILURE", error: e }), e);
        }
    },
    loginWebAuthn(e) {
        let { ticket: t, credential: n, source: i, giftCodeSKUId: r, isMultiAccount: s } = e;
        return m.A.post({
            url: S.Rsh.WEBAUTHN_CONDITIONAL_UI_LOGIN,
            body: { credential: n, ticket: t, source: i, giftCodeSKUId: r },
            retries: 1,
            trackedActionData: { event: a.NetworkActionNames.USER_LOGIN_PASSWORDLESS },
            rejectWithError: !0,
        })
            .then((e) => {
                let {
                    body: { token: t, user_id: n, required_actions: i },
                } = e;
                d.h.dispatch({ type: "LOGIN_ATTEMPTED", user_id: n, required_actions: i }),
                    s ? this.switchAccountToken(t) : d.h.dispatch({ type: "LOGIN_SUCCESS", token: t });
            })
            .catch((e) => {
                if (e instanceof l.oh) {
                    if (null != e.body.suspended_user_token)
                        return void d.h.dispatch({
                            type: "LOGIN_SUSPENDED_USER",
                            suspendedUserToken: e.body.suspended_user_token,
                        });
                    e = new c.LG(e);
                }
                throw e;
            });
    },
    loginToken(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return (
            d.h.dispatch({ type: "LOGIN" }),
            new Promise((n) => {
                setImmediate(() => {
                    d.h.dispatch({ type: "LOGIN_SUCCESS", token: e }), t && this.startSession(e), n();
                });
            })
        );
    },
    async oneTimeLogin(e) {
        d.h.dispatch({ type: "LOGIN" });
        try {
            let t = (
                await m.A.post({
                    url: S.Rsh.ONE_TIME_LOGIN,
                    body: { ticket: e },
                    oldFormErrors: !0,
                    trackedActionData: { event: a.NetworkActionNames.USER_ONE_TIME_LOGIN },
                    rejectWithError: !0,
                })
            ).body.token;
            if (!t) throw Error("No token in response");
            return await this.loginToken(t, !1), t;
        } catch (e) {
            throw (d.h.dispatch({ type: "LOGIN_FAILURE", error: new c.Wl(e) }), e);
        }
    },
    loginReset(e) {
        d.h.dispatch({ type: "LOGIN_RESET", isMultiAccount: e });
    },
    loginStatusReset() {
        d.h.dispatch({ type: "LOGIN_STATUS_RESET" });
    },
    logoutInternal(e) {
        L(e);
    },
    logout(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : S.BVt.DEFAULT_LOGGED_OUT,
            n = arguments.length > 2 ? arguments[2] : void 0;
        return m.A.post({
            url: S.Rsh.LOGOUT,
            body: { provider: (0, N.oH)(), token: o.w.get(S.Xlh), voip_provider: N.vz, voip_token: o.w.get(S.Ahp) },
            oldFormErrors: !0,
            trackedActionData: { event: a.NetworkActionNames.USER_LOGOUT, properties: { logout_source: e } },
            ...(null != n && { headers: { authorization: s.getToken(n) ?? "" } }),
            rejectWithError: (0, l.fT)(),
        }).finally(() => {
            (null == n || n === f.default.getId()) && D(e, t);
        });
    },
    switchAccountToken(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            n = f.default.getToken();
        return (
            C.log("Switching accounts", { wasLoggedIn: null != n, tokenHasChanged: e !== n }),
            L({ isSwitchingAccount: !0, goHomeAfterSwitching: t }),
            this.loginToken(e, !0).then(() => {
                let t = e === f.default.getToken();
                return C.log("Switched accounts finished", { isCorrectToken: t }), t;
            })
        );
    },
    verifySSOToken(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : S.BVt.DEFAULT_LOGGED_OUT;
        return l.Bo.get({ url: S.Rsh.ME, oldFormErrors: !0, rejectWithError: !0 }).catch(() => D(e, t));
    },
    async verify(e) {
        let t = await m.A.post({
            url: S.Rsh.VERIFY,
            body: { token: e },
            trackedActionData: { event: a.NetworkActionNames.USER_VERIFY },
            rejectWithError: (0, l.fT)(),
        });
        return d.h.dispatch({ type: "LOGIN_SUCCESS", token: t.body.token }), t.body.user_id;
    },
    authorizePayment: (e) =>
        m.A.post({
            url: S.Rsh.AUTHORIZE_PAYMENT,
            body: { token: e },
            trackedActionData: { event: a.NetworkActionNames.AUTHORIZE_PAYMENT },
            rejectWithError: !0,
        }),
    authorizeIPAddress: (e) =>
        m.A.post({
            url: S.Rsh.AUTHORIZE_IP,
            body: { token: e },
            trackedActionData: { event: a.NetworkActionNames.AUTHORIZE_IP },
            rejectWithError: !0,
        }),
    verifyResend: () =>
        m.A.post({
            url: S.Rsh.VERIFY_RESEND,
            oldFormErrors: !0,
            trackedActionData: { event: a.NetworkActionNames.USER_VERIFY_RESEND },
            rejectWithError: (0, l.fT)(),
        }),
    async resetPassword(e, t, n) {
        d.h.dispatch({ type: "LOGIN" });
        let i = { token: e, password: t, source: n },
            r = o.w.get(S.Xlh),
            s = (0, N.oH)();
        null != s && null != r && ((i.push_provider = s), (i.push_token = r));
        let u = o.w.get(S.Ahp);
        null != N.vz && null != u && ((i.push_voip_provider = N.vz), (i.push_voip_token = u));
        try {
            let {
                body: { mfa: e, sms: t, webauthn: n, ticket: r, token: s, backup: o, totp: d },
            } = await m.A.post({
                url: S.Rsh.RESET_PASSWORD,
                body: i,
                oldFormErrors: !0,
                trackedActionData: { event: a.NetworkActionNames.USER_RESET_PASSWORD },
                rejectWithError: (0, l.fT)(),
            });
            return { result: e ? "MFA" : "SUCCESS", sms: t, webauthn: n, ticket: r, token: s, backup: o, totp: d };
        } catch (t) {
            let e = new c.Wl(t);
            throw (d.h.dispatch({ type: "LOGIN_FAILURE", error: e }), e);
        }
    },
    async resetPasswordMFAv2(e) {
        let { method: t, code: n, ticket: i, password: r, token: s, source: l } = e;
        return (
            d.h.dispatch({ type: "LOGIN_MFA" }),
            (
                await m.A.post({
                    url: S.Rsh.RESET_PASSWORD,
                    body: { code: n, ticket: i, password: r, token: s, source: l, method: t },
                    oldFormErrors: !0,
                    trackedActionData: { event: a.NetworkActionNames.USER_RESET_PASSWORD, properties: { mfa: !0 } },
                    rejectWithError: !0,
                })
            ).body.token
        );
    },
    async forgotPassword(e) {
        d.h.dispatch({ type: "FORGOT_PASSWORD_REQUEST" });
        try {
            let t = await m.A.post({
                url: S.Rsh.FORGOT_PASSWORD,
                body: { login: e },
                oldFormErrors: !0,
                trackedActionData: { event: a.NetworkActionNames.FORGOT_PASSWORD },
                rejectWithError: (0, l.fT)(),
            });
            return d.h.dispatch({ type: "FORGOT_PASSWORD_SENT" }), t.body.method;
        } catch (n) {
            let t = new c.Wl(n);
            if (t.code === S.t02.PHONE_VERIFICATION_REQUIRED)
                return (
                    d.h.dispatch({ type: "LOGIN_PASSWORD_RECOVERY_PHONE_VERIFICATION", credentials: { login: e } }), !1
                );
            throw (d.h.dispatch({ type: "LOGIN_FAILURE", error: t }), t);
        }
    },
    setFingerprint(e) {
        d.h.dispatch({ type: "FINGERPRINT", fingerprint: e });
    },
    getExperiments(e) {
        d.h.dispatch({ type: "EXPERIMENTS_FETCH", withGuildExperiments: e });
    },
    getLocationMetadata: () =>
        null != O
            ? O
            : (clearTimeout(i),
              (i = setTimeout(() => {
                  d.h.dispatch({ type: "SET_CONSENT_REQUIRED", consentRequired: !0 });
              }, 5e3)),
              (O = l.Bo.get({
                  url: S.Rsh.AUTH_LOCATION_METADATA,
                  retries: 2,
                  oldFormErrors: !0,
                  rejectWithError: !0,
              }).then(
                  (e) => {
                      if ((clearTimeout(i), null == p.A.getAuthenticationConsentRequired())) {
                          let t = e?.body?.consent_required ?? !0;
                          d.h.dispatch({ type: "SET_CONSENT_REQUIRED", consentRequired: t });
                      }
                      if (
                          (d.h.dispatch({
                              type: "SET_LOCATION_METADATA",
                              countryCode: e?.body?.country_code ?? void 0,
                          }),
                          (O = null),
                          e?.body?.promotional_email_opt_in != null)
                      ) {
                          let t = e.body.promotional_email_opt_in;
                          (0, u.tq)({ required: t.required, checked: t.pre_checked, preChecked: t.pre_checked });
                      }
                  },
                  () => {
                      clearTimeout(i), d.h.dispatch({ type: "SET_CONSENT_REQUIRED", consentRequired: !0 }), (O = null);
                  },
              ))),
    closeSuspendedUser() {
        d.h.dispatch({ type: "CLOSE_SUSPENDED_USER" });
    },
};
