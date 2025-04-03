let r;
n.d(t, {
    Z: () => w,
    c: () => C
}),
    n(411104),
    n(177593),
    n(773603);
var i = n(990547),
    o = n(213919),
    a = n(544891),
    s = n(433517),
    l = n(570140),
    c = n(881052),
    u = n(882037),
    d = n(710845),
    f = n(777639),
    _ = n(703656),
    p = n(365007),
    h = n(314897),
    m = n(480294),
    g = n(573261),
    E = n(572691),
    b = n(981631),
    y = n(792101);
function v(e, t, n) {
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
function O(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                v(e, t, n[t]);
            });
    }
    return e;
}
function I(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function S(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : I(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let T = new d.Z('AuthenticationActionCreators'),
    N = 5000,
    A = null;
var C = (function (e) {
    return (e.MFA = 'MFA'), (e.SUCCESS = 'SUCCESS'), e;
})({});
function R(e) {
    let t = O({ type: 'LOGOUT' }, e);
    l.Z.dispatch(t).catch((e) => {
        var t;
        throw (T.error('Error while dispatching LOGOUT', e), null == (t = window.DiscordErrors) || t.softCrash(e), e);
    });
}
function P() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : b.Z5c.DEFAULT_LOGGED_OUT;
    if ((R(), null == e)) return;
    let t = (0, f.D)();
    if (null == t) return void (0, _.uL)(e);
    E.Z.popAll(),
        t.reset({
            index: 0,
            routes: [{ name: 'auth' }]
        });
}
let w = {
    startSession(e) {
        l.Z.wait(() => {
            l.Z.dispatch({
                type: 'START_SESSION',
                token: e
            });
        });
    },
    login(e) {
        let { login: t, password: n, undelete: r, source: o, giftCodeSKUId: a, invite: s, isMultiAccount: u } = e;
        return (
            l.Z.dispatch({
                type: 'LOGIN',
                isPasswordAttempt: !0
            }),
            g.Z.post(
                S(
                    O(
                        {
                            url: b.ANM.LOGIN,
                            body: {
                                login: t,
                                password: n,
                                undelete: r,
                                login_source: o,
                                gift_code_sku_id: a
                            },
                            retries: 2,
                            oldFormErrors: !0,
                            trackedActionData: {
                                event: i.NetworkActionNames.USER_LOGIN,
                                properties: {
                                    invite_code: null == s ? void 0 : s.code,
                                    is_multi_account: u
                                }
                            }
                        },
                        u ? { headers: { authorization: '' } } : {}
                    ),
                    { rejectWithError: !1 }
                )
            ).then(
                (e) => {
                    let {
                        body: { mfa: t, sms: n, webauthn: r, ticket: i, token: o, backup: a, user_id: s, required_actions: c, totp: d }
                    } = e;
                    l.Z.dispatch({
                        type: 'LOGIN_ATTEMPTED',
                        user_id: s,
                        required_actions: c
                    }),
                        t
                            ? l.Z.dispatch({
                                  type: 'LOGIN_MFA_STEP',
                                  ticket: i,
                                  sms: n,
                                  webauthn: r,
                                  totp: d,
                                  backup: a
                              })
                            : u
                              ? this.switchAccountToken(o)
                              : l.Z.dispatch({
                                    type: 'LOGIN_SUCCESS',
                                    token: o
                                });
                },
                (e) => {
                    var r, i, o;
                    let a = new c.yZ(e);
                    if (null != e.body && (null == (r = e.body) ? void 0 : r.suspended_user_token) != null)
                        throw (
                            (l.Z.dispatch({
                                type: 'LOGIN_SUSPENDED_USER',
                                suspendedUserToken: null == (o = e.body) ? void 0 : o.suspended_user_token
                            }),
                            a)
                        );
                    let s = null == (i = e.body) ? void 0 : i.code;
                    throw (
                        (s === b.evJ.ACCOUNT_SCHEDULED_FOR_DELETION && null != n && '' !== n
                            ? l.Z.dispatch({
                                  type: 'LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION',
                                  credentials: {
                                      login: t,
                                      password: n
                                  }
                              })
                            : s === b.evJ.ACCOUNT_DISABLED && null != n && '' !== n
                              ? l.Z.dispatch({
                                    type: 'LOGIN_ACCOUNT_DISABLED',
                                    credentials: {
                                        login: t,
                                        password: n
                                    }
                                })
                              : s === b.evJ.PHONE_VERIFICATION_REQUIRED
                                ? l.Z.dispatch({
                                      type: 'LOGIN_PHONE_IP_AUTHORIZATION_REQUIRED',
                                      credentials: {
                                          login: t,
                                          password: n
                                      }
                                  })
                                : l.Z.dispatch({
                                      type: 'LOGIN_FAILURE',
                                      error: a
                                  }),
                        a)
                    );
                }
            )
        );
    },
    loginMFAv2(e) {
        let { code: t, ticket: n, source: r, giftCodeSKUId: o, isMultiAccount: a, mfaType: s } = e;
        return g.Z.post({
            url: b.ANM.LOGIN_MFA(s),
            body: {
                code: t,
                ticket: n,
                login_source: r,
                gift_code_sku_id: o
            },
            retries: 2,
            oldFormErrors: !0,
            trackedActionData: { event: i.NetworkActionNames.USER_LOGIN_MFA },
            rejectWithError: !1
        })
            .then((e) => {
                a
                    ? this.switchAccountToken(e.body.token)
                    : l.Z.dispatch({
                          type: 'LOGIN_SUCCESS',
                          token: e.body.token
                      });
            })
            .catch((e) => {
                var t;
                if (null != e.body && null != e.body.suspended_user_token)
                    return void l.Z.dispatch({
                        type: 'LOGIN_SUSPENDED_USER',
                        suspendedUserToken: e.body.suspended_user_token
                    });
                if ((null == (t = e.body) ? void 0 : t.code) === b.evJ.MFA_INVALID_CODE) throw Error(e.body.message);
                throw e;
            });
    },
    authenticatePasswordless(e) {
        let { authenticateFunc: t, conditionalMediationAbortController: n, source: r, giftCodeSKUId: i } = e;
        return (
            null == n || n.abort('Starting non-conditional mediation'),
            l.Z.dispatch({ type: 'PASSWORDLESS_START' }),
            (0, p.d$)()
                .then((e) => {
                    let { challenge: n, ticket: o } = e;
                    return t(n).then((e) =>
                        this.loginWebAuthn({
                            ticket: o,
                            credential: e,
                            source: r,
                            giftCodeSKUId: i
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
        let { ticket: t, credential: n, source: r, giftCodeSKUId: o } = e;
        return g.Z.post({
            url: b.ANM.WEBAUTHN_CONDITIONAL_UI_LOGIN,
            body: {
                credential: n,
                ticket: t,
                source: r,
                giftCodeSKUId: o
            },
            retries: 1,
            trackedActionData: { event: i.NetworkActionNames.USER_LOGIN_PASSWORDLESS },
            rejectWithError: !1
        })
            .then((e) => {
                let {
                    body: { token: t, user_id: n, required_actions: r }
                } = e;
                l.Z.dispatch({
                    type: 'LOGIN_ATTEMPTED',
                    user_id: n,
                    required_actions: r
                }),
                    l.Z.dispatch({
                        type: 'LOGIN_SUCCESS',
                        token: t
                    });
            })
            .catch((e) => {
                if (null != e.body && null != e.body.suspended_user_token)
                    return void l.Z.dispatch({
                        type: 'LOGIN_SUSPENDED_USER',
                        suspendedUserToken: e.body.suspended_user_token
                    });
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
        R(e);
    },
    logout() {
        var e;
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : b.Z5c.DEFAULT_LOGGED_OUT,
            n = arguments.length > 1 ? arguments[1] : void 0;
        return g.Z.post(
            S(
                O(
                    {
                        url: b.ANM.LOGOUT,
                        body: {
                            provider: (0, y.xJ)(),
                            token: s.K.get(b.JkL),
                            voip_provider: y.mv,
                            voip_token: s.K.get(b.scU)
                        },
                        oldFormErrors: !0,
                        trackedActionData: { event: i.NetworkActionNames.USER_LOGOUT }
                    },
                    null != n && { headers: { authorization: null != (e = o.getToken(n)) ? e : '' } }
                ),
                { rejectWithError: !1 }
            )
        ).finally(() => {
            (null == n || n === h.default.getId()) && P(t);
        });
    },
    switchAccountToken(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            n = h.default.getToken();
        return (
            T.log('Switching accounts', {
                wasLoggedIn: null != n,
                tokenHasChanged: e !== n
            }),
            R({
                isSwitchingAccount: !0,
                goHomeAfterSwitching: t
            }),
            this.loginToken(e, !0).then(() => {
                let t = e === h.default.getToken();
                return T.log('Switched accounts finished', { isCorrectToken: t }), t;
            })
        );
    },
    verifySSOToken() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : b.Z5c.DEFAULT_LOGGED_OUT;
        return a.tn
            .get({
                url: b.ANM.ME,
                oldFormErrors: !0,
                rejectWithError: !0
            })
            .catch(() => P(e));
    },
    async verify(e) {
        let t = await g.Z.post({
            url: b.ANM.VERIFY,
            body: { token: e },
            trackedActionData: { event: i.NetworkActionNames.USER_VERIFY },
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
            url: b.ANM.AUTHORIZE_PAYMENT,
            body: { token: e },
            trackedActionData: { event: i.NetworkActionNames.AUTHORIZE_PAYMENT },
            rejectWithError: !0
        }),
    authorizeIPAddress: (e) =>
        g.Z.post({
            url: b.ANM.AUTHORIZE_IP,
            body: { token: e },
            trackedActionData: { event: i.NetworkActionNames.AUTHORIZE_IP },
            rejectWithError: !0
        }),
    verifyResend: () =>
        g.Z.post({
            url: b.ANM.VERIFY_RESEND,
            oldFormErrors: !0,
            trackedActionData: { event: i.NetworkActionNames.USER_VERIFY_RESEND },
            rejectWithError: !1
        }),
    async resetPassword(e, t, n) {
        l.Z.dispatch({ type: 'LOGIN' });
        let r = {
                token: e,
                password: t,
                source: n
            },
            o = s.K.get(b.JkL),
            a = (0, y.xJ)();
        null != a && null != o && ((r.push_provider = a), (r.push_token = o));
        let u = s.K.get(b.scU);
        null != y.mv && null != u && ((r.push_voip_provider = y.mv), (r.push_voip_token = u));
        try {
            let {
                body: { mfa: e, sms: t, webauthn: n, ticket: o, token: a, backup: s, totp: l }
            } = await g.Z.post({
                url: b.ANM.RESET_PASSWORD,
                body: r,
                oldFormErrors: !0,
                trackedActionData: { event: i.NetworkActionNames.USER_RESET_PASSWORD },
                rejectWithError: !1
            });
            return {
                result: e ? 'MFA' : 'SUCCESS',
                sms: t,
                webauthn: n,
                ticket: o,
                token: a,
                backup: s,
                totp: l
            };
        } catch (t) {
            let e = new c.yZ(t);
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
        let { method: t, code: n, ticket: r, password: o, token: a, source: s } = e;
        return (
            l.Z.dispatch({ type: 'LOGIN_MFA' }),
            (
                await g.Z.post({
                    url: b.ANM.RESET_PASSWORD,
                    body: {
                        code: n,
                        ticket: r,
                        password: o,
                        token: a,
                        source: s,
                        method: t
                    },
                    oldFormErrors: !0,
                    trackedActionData: {
                        event: i.NetworkActionNames.USER_RESET_PASSWORD,
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
                    url: b.ANM.FORGOT_PASSWORD,
                    body: { login: e },
                    oldFormErrors: !0,
                    trackedActionData: { event: i.NetworkActionNames.FORGOT_PASSWORD },
                    rejectWithError: !1
                }),
                l.Z.dispatch({ type: 'FORGOT_PASSWORD_SENT' }),
                !0
            );
        } catch (n) {
            let t = new c.yZ(n);
            if (t.code === b.evJ.PHONE_VERIFICATION_REQUIRED)
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
        null != A
            ? A
            : (clearTimeout(r),
              (r = setTimeout(() => {
                  l.Z.dispatch({
                      type: 'SET_CONSENT_REQUIRED',
                      consentRequired: !0
                  });
              }, N)),
              (A = a.tn
                  .get({
                      url: b.ANM.AUTH_LOCATION_METADATA,
                      retries: 2,
                      oldFormErrors: !0,
                      rejectWithError: !0
                  })
                  .then(
                      (e) => {
                          var t, n, i, o, a;
                          if ((clearTimeout(r), null == m.Z.getAuthenticationConsentRequired())) {
                              let t = null == (o = null == e || null == (i = e.body) ? void 0 : i.consent_required) || o;
                              l.Z.dispatch({
                                  type: 'SET_CONSENT_REQUIRED',
                                  consentRequired: t
                              });
                          }
                          if (
                              (l.Z.dispatch({
                                  type: 'SET_LOCATION_METADATA',
                                  countryCode: null != (a = null == e || null == (t = e.body) ? void 0 : t.country_code) ? a : void 0
                              }),
                              (A = null),
                              (null == e || null == (n = e.body) ? void 0 : n.promotional_email_opt_in) != null)
                          ) {
                              let t = e.body.promotional_email_opt_in;
                              (0, u.K4)({
                                  required: t.required,
                                  checked: t.pre_checked,
                                  preChecked: t.pre_checked
                              });
                          }
                      },
                      () => {
                          clearTimeout(r),
                              l.Z.dispatch({
                                  type: 'SET_CONSENT_REQUIRED',
                                  consentRequired: !0
                              }),
                              (A = null);
                      }
                  ))),
    closeSuspendedUser() {
        l.Z.dispatch({ type: 'CLOSE_SUSPENDED_USER' });
    }
};
