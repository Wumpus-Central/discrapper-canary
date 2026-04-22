"use strict";
let r;
n.d(t, { A: () => b, W: () => R }), n(142703);
var i,
    s = n(110259),
    a = n(247775),
    o = n(562465),
    l = n(506774),
    u = n(73153),
    d = n(198982),
    c = n(934337),
    _ = n(626584),
    f = n(250953),
    E = n(976860),
    h = n(3928),
    p = n(917136),
    m = n(961350),
    g = n(153488),
    A = n(353835),
    I = n(499785),
    T = n(630054),
    S = n(652215),
    y = n(516780);
let N = new _.A("AuthenticationActionCreators"),
    O = null;
var R = (((i = {}).MFA = "MFA"), (i.SUCCESS = "SUCCESS"), i);
function v(e) {
    A.A.clearNavigationHistory();
    let t = { type: "LOGOUT", ...e };
    u.h.dispatch(t).catch((e) => {
        throw (N.error("Error while dispatching LOGOUT", e), window.DiscordErrors?.softCrash(e), e);
    });
}
function C(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : S.BVt.DEFAULT_LOGGED_OUT;
    if ((v(), null == t)) return;
    let n = (0, f.Y)();
    null == n ? (0, E.pX)(t, { source: e }) : (T.A.popAll(), n.reset({ index: 0, routes: [{ name: "auth" }] }));
}
let b = {
    startSession(e) {
        u.h.wait(() => {
            u.h.dispatch({ type: "START_SESSION", token: e });
        });
    },
    login(e) {
        let { login: t, password: n, undelete: r, source: i, giftCodeSKUId: a, invite: o, isMultiAccount: l } = e;
        return (
            u.h.dispatch({ type: "LOGIN", isPasswordAttempt: !0 }),
            I.A.post({
                url: S.Rsh.LOGIN,
                body: { login: t, password: n, undelete: r, login_source: i, gift_code_sku_id: a },
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
                            webauthn: r,
                            ticket: i,
                            token: s,
                            backup: a,
                            user_id: o,
                            required_actions: d,
                            totp: c,
                            login_instance_id: _,
                        },
                    } = e;
                    u.h.dispatch({ type: "LOGIN_ATTEMPTED", user_id: o, required_actions: d }),
                        t
                            ? u.h.dispatch({
                                  type: "LOGIN_MFA_STEP",
                                  ticket: i,
                                  sms: n,
                                  webauthn: r,
                                  totp: c,
                                  backup: a,
                                  loginInstanceId: _,
                              })
                            : l
                              ? this.switchAccountToken(s)
                              : u.h.dispatch({ type: "LOGIN_SUCCESS", token: s });
                },
                (e) => {
                    let r = new d.Wl(e);
                    if (null != e.body && e.body?.suspended_user_token != null)
                        throw (
                            (u.h.dispatch({
                                type: "LOGIN_SUSPENDED_USER",
                                suspendedUserToken: e.body?.suspended_user_token,
                            }),
                            r)
                        );
                    let i = e.body?.code;
                    throw (
                        (i === S.t02.ACCOUNT_SCHEDULED_FOR_DELETION && null != n && "" !== n
                            ? u.h.dispatch({
                                  type: "LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION",
                                  credentials: { login: t, password: n },
                              })
                            : i === S.t02.ACCOUNT_DISABLED && null != n && "" !== n
                              ? u.h.dispatch({ type: "LOGIN_ACCOUNT_DISABLED", credentials: { login: t, password: n } })
                              : i === S.t02.PHONE_VERIFICATION_REQUIRED
                                ? u.h.dispatch({
                                      type: "LOGIN_PHONE_IP_AUTHORIZATION_REQUIRED",
                                      credentials: { login: t, password: n },
                                  })
                                : u.h.dispatch({ type: "LOGIN_FAILURE", error: r }),
                        r)
                    );
                },
            )
        );
    },
    loginMFAv2(e) {
        let { code: t, ticket: n, source: r, giftCodeSKUId: i, isMultiAccount: a, mfaType: o, loginInstanceId: l } = e;
        return I.A.post({
            url: S.Rsh.LOGIN_MFA(o),
            body: {
                code: t,
                ticket: n,
                login_source: r,
                gift_code_sku_id: i,
                login_instance_id: l ?? m.default.getLoginInstanceId(),
            },
            retries: 2,
            oldFormErrors: !0,
            trackedActionData: { event: s.NetworkActionNames.USER_LOGIN_MFA },
            rejectWithError: !0,
        })
            .then((e) => {
                a
                    ? this.switchAccountToken(e.body.token)
                    : u.h.dispatch({ type: "LOGIN_SUCCESS", token: e.body.token });
            })
            .catch((e) => {
                if (null != e.body && null != e.body.suspended_user_token)
                    return void u.h.dispatch({
                        type: "LOGIN_SUSPENDED_USER",
                        suspendedUserToken: e.body.suspended_user_token,
                    });
                if (e.body?.code === S.t02.MFA_INVALID_CODE) throw Error(e.body.message);
                throw e;
            });
    },
    async authenticatePasswordless(e) {
        let { authenticateFunc: t, conditionalMediationAbortController: n, source: r, giftCodeSKUId: i } = e;
        n?.abort("Starting non-conditional mediation"), u.h.dispatch({ type: "PASSWORDLESS_START" });
        try {
            let { challenge: e, ticket: n } = await (0, p.YS)(),
                s = await t(e);
            try {
                await this.loginWebAuthn({ ticket: n, credential: s, source: r, giftCodeSKUId: i });
            } catch (e) {
                throw (
                    (e instanceof d.LG &&
                        null != e.status &&
                        e.status >= 400 &&
                        e.status < 500 &&
                        (await h.A.signalUnknownCredential(s)),
                    e)
                );
            }
        } catch (e) {
            throw (u.h.dispatch({ type: "PASSWORDLESS_FAILURE", error: e }), e);
        }
    },
    loginWebAuthn(e) {
        let { ticket: t, credential: n, source: r, giftCodeSKUId: i } = e;
        return I.A.post({
            url: S.Rsh.WEBAUTHN_CONDITIONAL_UI_LOGIN,
            body: { credential: n, ticket: t, source: r, giftCodeSKUId: i },
            retries: 1,
            trackedActionData: { event: s.NetworkActionNames.USER_LOGIN_PASSWORDLESS },
            rejectWithError: !0,
        })
            .then((e) => {
                let {
                    body: { token: t, user_id: n, required_actions: r },
                } = e;
                u.h.dispatch({ type: "LOGIN_ATTEMPTED", user_id: n, required_actions: r }),
                    u.h.dispatch({ type: "LOGIN_SUCCESS", token: t });
            })
            .catch((e) => {
                if (e instanceof o.oh) {
                    if (null != e.body.suspended_user_token)
                        return void u.h.dispatch({
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
            u.h.dispatch({ type: "LOGIN" }),
            new Promise((n) => {
                setImmediate(() => {
                    u.h.dispatch({ type: "LOGIN_SUCCESS", token: e }), t && this.startSession(e), n();
                });
            })
        );
    },
    async oneTimeLogin(e) {
        u.h.dispatch({ type: "LOGIN" });
        try {
            let t = (
                await I.A.post({
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
            throw (u.h.dispatch({ type: "LOGIN_FAILURE", error: new d.Wl(e) }), e);
        }
    },
    loginReset(e) {
        u.h.dispatch({ type: "LOGIN_RESET", isMultiAccount: e });
    },
    loginStatusReset() {
        u.h.dispatch({ type: "LOGIN_STATUS_RESET" });
    },
    logoutInternal(e) {
        v(e);
    },
    logout(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : S.BVt.DEFAULT_LOGGED_OUT,
            n = arguments.length > 2 ? arguments[2] : void 0;
        return I.A.post({
            url: S.Rsh.LOGOUT,
            body: { provider: (0, y.oH)(), token: l.w.get(S.Xlh), voip_provider: y.vz, voip_token: l.w.get(S.Ahp) },
            oldFormErrors: !0,
            trackedActionData: { event: s.NetworkActionNames.USER_LOGOUT, properties: { logout_source: e } },
            ...(null != n && { headers: { authorization: a.getToken(n) ?? "" } }),
            rejectWithError: !1,
        }).finally(() => {
            (null == n || n === m.default.getId()) && C(e, t);
        });
    },
    switchAccountToken(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            n = m.default.getToken();
        return (
            N.log("Switching accounts", { wasLoggedIn: null != n, tokenHasChanged: e !== n }),
            v({ isSwitchingAccount: !0, goHomeAfterSwitching: t }),
            this.loginToken(e, !0).then(() => {
                let t = e === m.default.getToken();
                return N.log("Switched accounts finished", { isCorrectToken: t }), t;
            })
        );
    },
    verifySSOToken(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : S.BVt.DEFAULT_LOGGED_OUT;
        return o.Bo.get({ url: S.Rsh.ME, oldFormErrors: !0, rejectWithError: !0 }).catch(() => C(e, t));
    },
    async verify(e) {
        let t = await I.A.post({
            url: S.Rsh.VERIFY,
            body: { token: e },
            trackedActionData: { event: s.NetworkActionNames.USER_VERIFY },
            rejectWithError: !1,
        });
        return u.h.dispatch({ type: "LOGIN_SUCCESS", token: t.body.token }), t.body.user_id;
    },
    authorizePayment: (e) =>
        I.A.post({
            url: S.Rsh.AUTHORIZE_PAYMENT,
            body: { token: e },
            trackedActionData: { event: s.NetworkActionNames.AUTHORIZE_PAYMENT },
            rejectWithError: !0,
        }),
    authorizeIPAddress: (e) =>
        I.A.post({
            url: S.Rsh.AUTHORIZE_IP,
            body: { token: e },
            trackedActionData: { event: s.NetworkActionNames.AUTHORIZE_IP },
            rejectWithError: !0,
        }),
    verifyResend: () =>
        I.A.post({
            url: S.Rsh.VERIFY_RESEND,
            oldFormErrors: !0,
            trackedActionData: { event: s.NetworkActionNames.USER_VERIFY_RESEND },
            rejectWithError: !1,
        }),
    async resetPassword(e, t, n) {
        u.h.dispatch({ type: "LOGIN" });
        let r = { token: e, password: t, source: n },
            i = l.w.get(S.Xlh),
            a = (0, y.oH)();
        null != a && null != i && ((r.push_provider = a), (r.push_token = i));
        let o = l.w.get(S.Ahp);
        null != y.vz && null != o && ((r.push_voip_provider = y.vz), (r.push_voip_token = o));
        try {
            let {
                body: { mfa: e, sms: t, webauthn: n, ticket: i, token: a, backup: o, totp: l },
            } = await I.A.post({
                url: S.Rsh.RESET_PASSWORD,
                body: r,
                oldFormErrors: !0,
                trackedActionData: { event: s.NetworkActionNames.USER_RESET_PASSWORD },
                rejectWithError: !1,
            });
            return { result: e ? "MFA" : "SUCCESS", sms: t, webauthn: n, ticket: i, token: a, backup: o, totp: l };
        } catch (t) {
            let e = new d.Wl(t);
            throw (u.h.dispatch({ type: "LOGIN_FAILURE", error: e }), e);
        }
    },
    async resetPasswordMFAv2(e) {
        let { method: t, code: n, ticket: r, password: i, token: a, source: o } = e;
        return (
            u.h.dispatch({ type: "LOGIN_MFA" }),
            (
                await I.A.post({
                    url: S.Rsh.RESET_PASSWORD,
                    body: { code: n, ticket: r, password: i, token: a, source: o, method: t },
                    oldFormErrors: !0,
                    trackedActionData: { event: s.NetworkActionNames.USER_RESET_PASSWORD, properties: { mfa: !0 } },
                    rejectWithError: !0,
                })
            ).body.token
        );
    },
    async forgotPassword(e) {
        u.h.dispatch({ type: "FORGOT_PASSWORD_REQUEST" });
        try {
            let t = await I.A.post({
                url: S.Rsh.FORGOT_PASSWORD,
                body: { login: e },
                oldFormErrors: !0,
                trackedActionData: { event: s.NetworkActionNames.FORGOT_PASSWORD },
                rejectWithError: !1,
            });
            return u.h.dispatch({ type: "FORGOT_PASSWORD_SENT" }), t.body.method;
        } catch (n) {
            let t = new d.Wl(n);
            if (t.code === S.t02.PHONE_VERIFICATION_REQUIRED)
                return (
                    u.h.dispatch({ type: "LOGIN_PASSWORD_RECOVERY_PHONE_VERIFICATION", credentials: { login: e } }), !1
                );
            throw (u.h.dispatch({ type: "LOGIN_FAILURE", error: t }), t);
        }
    },
    setFingerprint(e) {
        u.h.dispatch({ type: "FINGERPRINT", fingerprint: e });
    },
    getExperiments(e) {
        u.h.dispatch({ type: "EXPERIMENTS_FETCH", withGuildExperiments: e });
    },
    getLocationMetadata: () =>
        null != O
            ? O
            : (clearTimeout(r),
              (r = setTimeout(() => {
                  u.h.dispatch({ type: "SET_CONSENT_REQUIRED", consentRequired: !0 });
              }, 5e3)),
              (O = o.Bo.get({
                  url: S.Rsh.AUTH_LOCATION_METADATA,
                  retries: 2,
                  oldFormErrors: !0,
                  rejectWithError: !0,
              }).then(
                  (e) => {
                      if ((clearTimeout(r), null == g.A.getAuthenticationConsentRequired())) {
                          let t = e?.body?.consent_required ?? !0;
                          u.h.dispatch({ type: "SET_CONSENT_REQUIRED", consentRequired: t });
                      }
                      if (
                          (u.h.dispatch({
                              type: "SET_LOCATION_METADATA",
                              countryCode: e?.body?.country_code ?? void 0,
                          }),
                          (O = null),
                          e?.body?.promotional_email_opt_in != null)
                      ) {
                          let t = e.body.promotional_email_opt_in;
                          (0, c.tq)({ required: t.required, checked: t.pre_checked, preChecked: t.pre_checked });
                      }
                  },
                  () => {
                      clearTimeout(r), u.h.dispatch({ type: "SET_CONSENT_REQUIRED", consentRequired: !0 }), (O = null);
                  },
              ))),
    closeSuspendedUser() {
        u.h.dispatch({ type: "CLOSE_SUSPENDED_USER" });
    },
};
