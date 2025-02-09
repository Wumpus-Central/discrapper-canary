let i;
n.d(t, {
    Z: () => C,
    c: () => S
}),
    n(411104),
    n(177593),
    n(773603);
var r = n(990547),
    a = n(213919),
    s = n(544891),
    o = n(433517),
    l = n(570140),
    u = n(881052),
    c = n(882037),
    d = n(710845),
    f = n(777639),
    _ = n(703656),
    p = n(365007),
    h = n(314897),
    m = n(480294),
    g = n(573261),
    E = n(572691),
    v = n(981631),
    y = n(792101);
let I = new d.Z('AuthenticationActionCreators'),
    T = 5000,
    b = null;
var S = (function (e) {
    return (e.MFA = 'MFA'), (e.SUCCESS = 'SUCCESS'), e;
})({});
function A(e) {
    let t = {
        type: 'LOGOUT',
        ...e
    };
    l.Z.dispatch(t).catch((e) => {
        var t;
        throw (I.error('Error while dispatching LOGOUT', e), null === (t = window.DiscordErrors) || void 0 === t || t.softCrash(e), e);
    });
}
function N() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : v.Z5c.DEFAULT_LOGGED_OUT;
    if ((A(), null == e)) return;
    let t = (0, f.D)();
    if (null == t) {
        (0, _.uL)(e);
        return;
    }
    E.Z.popAll(),
        t.reset({
            index: 0,
            routes: [{ name: 'auth' }]
        });
}
let C = {
    startSession(e) {
        l.Z.wait(() => {
            l.Z.dispatch({
                type: 'START_SESSION',
                token: e
            });
        });
    },
    login(e) {
        let { login: t, password: n, undelete: i, source: a, giftCodeSKUId: s, invite: o, isMultiAccount: c } = e;
        return (
            l.Z.dispatch({
                type: 'LOGIN',
                isPasswordAttempt: !0
            }),
            g.Z.post({
                url: v.ANM.LOGIN,
                body: {
                    login: t,
                    password: n,
                    undelete: i,
                    login_source: a,
                    gift_code_sku_id: s
                },
                retries: 2,
                oldFormErrors: !0,
                trackedActionData: {
                    event: r.NetworkActionNames.USER_LOGIN,
                    properties: {
                        invite_code: null == o ? void 0 : o.code,
                        is_multi_account: c
                    }
                },
                ...(c ? { headers: { authorization: '' } } : {}),
                rejectWithError: !1
            }).then(
                (e) => {
                    let {
                        body: { mfa: t, sms: n, webauthn: i, ticket: r, token: a, backup: s, user_id: o, required_actions: u, totp: d }
                    } = e;
                    l.Z.dispatch({
                        type: 'LOGIN_ATTEMPTED',
                        user_id: o,
                        required_actions: u
                    }),
                        t
                            ? l.Z.dispatch({
                                  type: 'LOGIN_MFA_STEP',
                                  ticket: r,
                                  sms: n,
                                  webauthn: i,
                                  totp: d,
                                  backup: s
                              })
                            : c
                              ? this.switchAccountToken(a)
                              : l.Z.dispatch({
                                    type: 'LOGIN_SUCCESS',
                                    token: a
                                });
                },
                (e) => {
                    var i, r, a;
                    let s = new u.yZ(e);
                    if (null != e.body && (null === (i = e.body) || void 0 === i ? void 0 : i.suspended_user_token) != null)
                        throw (
                            (l.Z.dispatch({
                                type: 'LOGIN_SUSPENDED_USER',
                                suspendedUserToken: null === (a = e.body) || void 0 === a ? void 0 : a.suspended_user_token
                            }),
                            s)
                        );
                    let o = null === (r = e.body) || void 0 === r ? void 0 : r.code;
                    throw (
                        (o === v.evJ.ACCOUNT_SCHEDULED_FOR_DELETION && null != n && '' !== n
                            ? l.Z.dispatch({
                                  type: 'LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION',
                                  credentials: {
                                      login: t,
                                      password: n
                                  }
                              })
                            : o === v.evJ.ACCOUNT_DISABLED && null != n && '' !== n
                              ? l.Z.dispatch({
                                    type: 'LOGIN_ACCOUNT_DISABLED',
                                    credentials: {
                                        login: t,
                                        password: n
                                    }
                                })
                              : o === v.evJ.PHONE_VERIFICATION_REQUIRED
                                ? l.Z.dispatch({
                                      type: 'LOGIN_PHONE_IP_AUTHORIZATION_REQUIRED',
                                      credentials: {
                                          login: t,
                                          password: n
                                      }
                                  })
                                : l.Z.dispatch({
                                      type: 'LOGIN_FAILURE',
                                      error: s
                                  }),
                        s)
                    );
                }
            )
        );
    },
    loginMFAv2(e) {
        let { code: t, ticket: n, source: i, giftCodeSKUId: a, isMultiAccount: s, mfaType: o } = e;
        return g.Z.post({
            url: v.ANM.LOGIN_MFA(o),
            body: {
                code: t,
                ticket: n,
                login_source: i,
                gift_code_sku_id: a
            },
            retries: 2,
            oldFormErrors: !0,
            trackedActionData: { event: r.NetworkActionNames.USER_LOGIN_MFA },
            rejectWithError: !1
        })
            .then((e) => {
                s
                    ? this.switchAccountToken(e.body.token)
                    : l.Z.dispatch({
                          type: 'LOGIN_SUCCESS',
                          token: e.body.token
                      });
            })
            .catch((e) => {
                var t;
                if (null != e.body && null != e.body.suspended_user_token) {
                    l.Z.dispatch({
                        type: 'LOGIN_SUSPENDED_USER',
                        suspendedUserToken: e.body.suspended_user_token
                    });
                    return;
                }
                if ((null === (t = e.body) || void 0 === t ? void 0 : t.code) === v.evJ.MFA_INVALID_CODE) throw Error(e.body.message);
                throw e;
            });
    },
    authenticatePasswordless(e) {
        let { authenticateFunc: t, conditionalMediationAbortController: n, source: i, giftCodeSKUId: r } = e;
        return (
            null == n || n.abort('Starting non-conditional mediation'),
            l.Z.dispatch({ type: 'PASSWORDLESS_START' }),
            (0, p.d$)()
                .then((e) => {
                    let { challenge: n, ticket: a } = e;
                    return t(n).then((e) =>
                        this.loginWebAuthn({
                            ticket: a,
                            credential: e,
                            source: i,
                            giftCodeSKUId: r
                        })
                    );
                })
                .catch((e) => {
                    throw (
                        (l.Z.dispatch({
                            type: 'PASSWORDLESS_FAILURE',
                            error: e
                        }),
                        e)
                    );
                })
        );
    },
    loginWebAuthn(e) {
        let { ticket: t, credential: n, source: i, giftCodeSKUId: a } = e;
        return g.Z.post({
            url: v.ANM.WEBAUTHN_CONDITIONAL_UI_LOGIN,
            body: {
                credential: n,
                ticket: t,
                source: i,
                giftCodeSKUId: a
            },
            retries: 1,
            trackedActionData: { event: r.NetworkActionNames.USER_LOGIN_PASSWORDLESS },
            rejectWithError: !1
        })
            .then((e) => {
                let {
                    body: { token: t, user_id: n, required_actions: i }
                } = e;
                l.Z.dispatch({
                    type: 'LOGIN_ATTEMPTED',
                    user_id: n,
                    required_actions: i
                }),
                    l.Z.dispatch({
                        type: 'LOGIN_SUCCESS',
                        token: t
                    });
            })
            .catch((e) => {
                if (null != e.body && null != e.body.suspended_user_token) {
                    l.Z.dispatch({
                        type: 'LOGIN_SUSPENDED_USER',
                        suspendedUserToken: e.body.suspended_user_token
                    });
                    return;
                }
                throw (
                    (l.Z.dispatch({
                        type: 'PASSWORDLESS_FAILURE',
                        error: e
                    }),
                    e)
                );
            });
    },
    loginToken(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return (
            l.Z.dispatch({ type: 'LOGIN' }),
            new Promise((n) => {
                setImmediate(() => {
                    l.Z.dispatch({
                        type: 'LOGIN_SUCCESS',
                        token: e
                    }),
                        t && this.startSession(e),
                        n();
                });
            })
        );
    },
    loginReset(e) {
        l.Z.dispatch({
            type: 'LOGIN_RESET',
            isMultiAccount: e
        });
    },
    loginStatusReset() {
        l.Z.dispatch({ type: 'LOGIN_STATUS_RESET' });
    },
    logoutInternal(e) {
        A(e);
    },
    logout() {
        var e;
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : v.Z5c.DEFAULT_LOGGED_OUT,
            n = arguments.length > 1 ? arguments[1] : void 0;
        return g.Z.post({
            url: v.ANM.LOGOUT,
            body: {
                provider: (0, y.xJ)(),
                token: o.K.get(v.JkL),
                voip_provider: y.mv,
                voip_token: o.K.get(v.scU)
            },
            oldFormErrors: !0,
            trackedActionData: { event: r.NetworkActionNames.USER_LOGOUT },
            ...(null != n && { headers: { authorization: null !== (e = a.getToken(n)) && void 0 !== e ? e : '' } }),
            rejectWithError: !1
        }).finally(() => {
            (null == n || n === h.default.getId()) && N(t);
        });
    },
    switchAccountToken(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            n = h.default.getToken();
        return (
            I.log('Switching accounts', {
                wasLoggedIn: null != n,
                tokenHasChanged: e !== n
            }),
            A({
                isSwitchingAccount: !0,
                goHomeAfterSwitching: t
            }),
            this.loginToken(e, !0).then(() => {
                let t = e === h.default.getToken();
                return I.log('Switched accounts finished', { isCorrectToken: t }), t;
            })
        );
    },
    verifySSOToken() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : v.Z5c.DEFAULT_LOGGED_OUT;
        return s.tn
            .get({
                url: v.ANM.ME,
                oldFormErrors: !0,
                rejectWithError: !0
            })
            .catch(() => N(e));
    },
    async verify(e) {
        let t = await g.Z.post({
            url: v.ANM.VERIFY,
            body: { token: e },
            trackedActionData: { event: r.NetworkActionNames.USER_VERIFY },
            rejectWithError: !1
        });
        return (
            l.Z.dispatch({
                type: 'LOGIN_SUCCESS',
                token: t.body.token
            }),
            t.body.user_id
        );
    },
    authorizePayment: (e) =>
        g.Z.post({
            url: v.ANM.AUTHORIZE_PAYMENT,
            body: { token: e },
            trackedActionData: { event: r.NetworkActionNames.AUTHORIZE_PAYMENT },
            rejectWithError: !0
        }),
    authorizeIPAddress: (e) =>
        g.Z.post({
            url: v.ANM.AUTHORIZE_IP,
            body: { token: e },
            trackedActionData: { event: r.NetworkActionNames.AUTHORIZE_IP },
            rejectWithError: !0
        }),
    verifyResend: () =>
        g.Z.post({
            url: v.ANM.VERIFY_RESEND,
            oldFormErrors: !0,
            trackedActionData: { event: r.NetworkActionNames.USER_VERIFY_RESEND },
            rejectWithError: !1
        }),
    async resetPassword(e, t, n) {
        l.Z.dispatch({ type: 'LOGIN' });
        let i = {
                token: e,
                password: t,
                source: n
            },
            a = o.K.get(v.JkL),
            s = (0, y.xJ)();
        null != s && null != a && ((i.push_provider = s), (i.push_token = a));
        let c = o.K.get(v.scU);
        null != y.mv && null != c && ((i.push_voip_provider = y.mv), (i.push_voip_token = c));
        try {
            let {
                body: { mfa: e, sms: t, webauthn: n, ticket: a, token: s, backup: o, totp: l }
            } = await g.Z.post({
                url: v.ANM.RESET_PASSWORD,
                body: i,
                oldFormErrors: !0,
                trackedActionData: { event: r.NetworkActionNames.USER_RESET_PASSWORD },
                rejectWithError: !1
            });
            return {
                result: e ? 'MFA' : 'SUCCESS',
                sms: t,
                webauthn: n,
                ticket: a,
                token: s,
                backup: o,
                totp: l
            };
        } catch (t) {
            let e = new u.yZ(t);
            throw (
                (l.Z.dispatch({
                    type: 'LOGIN_FAILURE',
                    error: e
                }),
                e)
            );
        }
    },
    async resetPasswordMFAv2(e) {
        let { method: t, code: n, ticket: i, password: a, token: s, source: o } = e;
        return (
            l.Z.dispatch({ type: 'LOGIN_MFA' }),
            (
                await g.Z.post({
                    url: v.ANM.RESET_PASSWORD,
                    body: {
                        code: n,
                        ticket: i,
                        password: a,
                        token: s,
                        source: o,
                        method: t
                    },
                    oldFormErrors: !0,
                    trackedActionData: {
                        event: r.NetworkActionNames.USER_RESET_PASSWORD,
                        properties: { mfa: !0 }
                    },
                    rejectWithError: !0
                })
            ).body.token
        );
    },
    async forgotPassword(e) {
        l.Z.dispatch({ type: 'FORGOT_PASSWORD_REQUEST' });
        try {
            return (
                await g.Z.post({
                    url: v.ANM.FORGOT_PASSWORD,
                    body: { login: e },
                    oldFormErrors: !0,
                    trackedActionData: { event: r.NetworkActionNames.FORGOT_PASSWORD },
                    rejectWithError: !1
                }),
                l.Z.dispatch({ type: 'FORGOT_PASSWORD_SENT' }),
                !0
            );
        } catch (n) {
            let t = new u.yZ(n);
            if (t.code === v.evJ.PHONE_VERIFICATION_REQUIRED)
                return (
                    l.Z.dispatch({
                        type: 'LOGIN_PASSWORD_RECOVERY_PHONE_VERIFICATION',
                        credentials: { login: e }
                    }),
                    !1
                );
            throw (
                (l.Z.dispatch({
                    type: 'LOGIN_FAILURE',
                    error: t
                }),
                t)
            );
        }
    },
    setFingerprint(e) {
        l.Z.dispatch({
            type: 'FINGERPRINT',
            fingerprint: e
        });
    },
    getExperiments(e) {
        l.Z.dispatch({
            type: 'EXPERIMENTS_FETCH',
            withGuildExperiments: e
        });
    },
    getLocationMetadata: () =>
        null != b
            ? b
            : (clearTimeout(i),
              (i = setTimeout(() => {
                  l.Z.dispatch({
                      type: 'SET_CONSENT_REQUIRED',
                      consentRequired: !0
                  });
              }, T)),
              (b = s.tn
                  .get({
                      url: v.ANM.AUTH_LOCATION_METADATA,
                      retries: 2,
                      oldFormErrors: !0,
                      rejectWithError: !0
                  })
                  .then(
                      (e) => {
                          var t, n, r, a, s;
                          if ((clearTimeout(i), null == m.Z.getAuthenticationConsentRequired())) {
                              let t = null === (a = null == e ? void 0 : null === (r = e.body) || void 0 === r ? void 0 : r.consent_required) || void 0 === a || a;
                              l.Z.dispatch({
                                  type: 'SET_CONSENT_REQUIRED',
                                  consentRequired: t
                              });
                          }
                          if (
                              (l.Z.dispatch({
                                  type: 'SET_LOCATION_METADATA',
                                  countryCode: null !== (s = null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.country_code) && void 0 !== s ? s : void 0
                              }),
                              (b = null),
                              (null == e ? void 0 : null === (n = e.body) || void 0 === n ? void 0 : n.promotional_email_opt_in) != null)
                          ) {
                              let t = e.body.promotional_email_opt_in;
                              (0, c.K4)({
                                  required: t.required,
                                  checked: t.pre_checked,
                                  preChecked: t.pre_checked
                              });
                          }
                      },
                      () => {
                          clearTimeout(i),
                              l.Z.dispatch({
                                  type: 'SET_CONSENT_REQUIRED',
                                  consentRequired: !0
                              }),
                              (b = null);
                      }
                  ))),
    closeSuspendedUser() {
        l.Z.dispatch({ type: 'CLOSE_SUSPENDED_USER' });
    }
};
