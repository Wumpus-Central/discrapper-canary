let i;
r.d(n, {
    c: function () {
        return a;
    }
});
var a,
    o = r(411104);
var s = r(177593);
var l = r(773603);
var u = r(990547),
    c = r(213919),
    d = r(544891),
    f = r(433517),
    p = r(570140),
    h = r(881052),
    _ = r(882037),
    m = r(710845),
    g = r(777639),
    E = r(703656),
    v = r(365007),
    y = r(314897),
    b = r(480294),
    I = r(573261),
    T = r(572691),
    S = r(981631),
    A = r(792101);
let C = new m.Z('AuthenticationActionCreators'),
    N = 5000,
    R = null;
function O(e) {
    let n = {
        type: 'LOGOUT',
        ...e
    };
    p.Z.dispatch(n).catch((e) => {
        var n;
        throw (C.error('Error while dispatching LOGOUT', e), null === (n = window.DiscordErrors) || void 0 === n || n.softCrash(e), e);
    });
}
function D() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : S.Z5c.DEFAULT_LOGGED_OUT;
    if ((O(), null == e)) return;
    let n = (0, g.D)();
    if (null == n) {
        (0, E.uL)(e);
        return;
    }
    T.Z.popAll(),
        n.reset({
            index: 0,
            routes: [{ name: 'auth' }]
        });
}
!(function (e) {
    (e.MFA = 'MFA'), (e.SUCCESS = 'SUCCESS');
})(a || (a = {})),
    (n.Z = {
        startSession(e) {
            p.Z.wait(() => {
                p.Z.dispatch({
                    type: 'START_SESSION',
                    token: e
                });
            });
        },
        setLoginCredentials(e, n) {
            p.Z.dispatch({
                type: 'SET_LOGIN_CREDENTIALS',
                login: e,
                password: n
            });
        },
        login(e) {
            let { login: n, password: r, undelete: i, source: a, giftCodeSKUId: o, invite: s, isMultiAccount: l } = e;
            p.Z.dispatch({
                type: 'LOGIN',
                isPasswordAttempt: !0
            }),
                this.setLoginCredentials(n, r),
                I.Z.post({
                    url: S.ANM.LOGIN,
                    body: {
                        login: n,
                        password: r,
                        undelete: i,
                        login_source: a,
                        gift_code_sku_id: o
                    },
                    retries: 2,
                    oldFormErrors: !0,
                    trackedActionData: {
                        event: u.NetworkActionNames.USER_LOGIN,
                        properties: {
                            invite_code: null == s ? void 0 : s.code,
                            is_multi_account: l
                        }
                    },
                    ...(l ? { headers: { authorization: '' } } : {}),
                    rejectWithError: !1
                }).then(
                    (e) => {
                        let {
                            body: { mfa: n, sms: r, webauthn: i, ticket: a, token: o, backup: s, user_id: u, required_actions: c, totp: d }
                        } = e;
                        p.Z.dispatch({
                            type: 'LOGIN_ATTEMPTED',
                            user_id: u,
                            required_actions: c
                        }),
                            n
                                ? p.Z.dispatch({
                                      type: 'LOGIN_MFA_STEP',
                                      ticket: a,
                                      sms: r,
                                      webauthn: i,
                                      totp: d,
                                      backup: s
                                  })
                                : l
                                  ? this.switchAccountToken(o)
                                  : p.Z.dispatch({
                                        type: 'LOGIN_SUCCESS',
                                        token: o
                                    });
                    },
                    (e) => {
                        var i, a, o;
                        if (null != e.body && (null === (i = e.body) || void 0 === i ? void 0 : i.suspended_user_token) != null) {
                            p.Z.dispatch({
                                type: 'LOGIN_SUSPENDED_USER',
                                suspendedUserToken: null === (o = e.body) || void 0 === o ? void 0 : o.suspended_user_token
                            });
                            return;
                        }
                        let s = null === (a = e.body) || void 0 === a ? void 0 : a.code;
                        s === S.evJ.ACCOUNT_SCHEDULED_FOR_DELETION && null != r && '' !== r
                            ? p.Z.dispatch({
                                  type: 'LOGIN_ACCOUNT_SCHEDULED_FOR_DELETION',
                                  credentials: {
                                      login: n,
                                      password: r
                                  }
                              })
                            : s === S.evJ.ACCOUNT_DISABLED && null != r && '' !== r
                              ? p.Z.dispatch({
                                    type: 'LOGIN_ACCOUNT_DISABLED',
                                    credentials: {
                                        login: n,
                                        password: r
                                    }
                                })
                              : s === S.evJ.PHONE_VERIFICATION_REQUIRED
                                ? p.Z.dispatch({ type: 'LOGIN_PHONE_IP_AUTHORIZATION_REQUIRED' })
                                : p.Z.dispatch({
                                      type: 'LOGIN_FAILURE',
                                      error: new h.yZ(e)
                                  });
                    }
                );
        },
        loginMFAv2(e) {
            let { code: n, ticket: r, source: i, giftCodeSKUId: a, isMultiAccount: o, mfaType: s } = e;
            return I.Z.post({
                url: S.ANM.LOGIN_MFA(s),
                body: {
                    code: n,
                    ticket: r,
                    login_source: i,
                    gift_code_sku_id: a
                },
                retries: 2,
                oldFormErrors: !0,
                trackedActionData: { event: u.NetworkActionNames.USER_LOGIN_MFA },
                rejectWithError: !1
            })
                .then((e) => {
                    o
                        ? this.switchAccountToken(e.body.token)
                        : p.Z.dispatch({
                              type: 'LOGIN_SUCCESS',
                              token: e.body.token
                          });
                })
                .catch((e) => {
                    var n;
                    if (null != e.body && null != e.body.suspended_user_token) {
                        p.Z.dispatch({
                            type: 'LOGIN_SUSPENDED_USER',
                            suspendedUserToken: e.body.suspended_user_token
                        });
                        return;
                    }
                    if ((null === (n = e.body) || void 0 === n ? void 0 : n.code) === S.evJ.MFA_INVALID_CODE) throw Error(e.body.message);
                    throw e;
                });
        },
        authenticatePasswordless(e) {
            let { authenticateFunc: n, conditionalMediationAbortController: r, source: i, giftCodeSKUId: a } = e;
            return (
                null == r || r.abort('Starting non-conditional mediation'),
                p.Z.dispatch({ type: 'PASSWORDLESS_START' }),
                (0, v.d$)()
                    .then((e) => {
                        let { challenge: r, ticket: o } = e;
                        return n(r).then((e) =>
                            this.loginWebAuthn({
                                ticket: o,
                                credential: e,
                                source: i,
                                giftCodeSKUId: a
                            })
                        );
                    })
                    .catch((e) => {
                        throw (
                            (p.Z.dispatch({
                                type: 'PASSWORDLESS_FAILURE',
                                error: e
                            }),
                            e)
                        );
                    })
            );
        },
        loginWebAuthn(e) {
            let { ticket: n, credential: r, source: i, giftCodeSKUId: a } = e;
            return I.Z.post({
                url: S.ANM.WEBAUTHN_CONDITIONAL_UI_LOGIN,
                body: {
                    credential: r,
                    ticket: n,
                    source: i,
                    giftCodeSKUId: a
                },
                retries: 1,
                trackedActionData: { event: u.NetworkActionNames.USER_LOGIN_PASSWORDLESS },
                rejectWithError: !1
            })
                .then((e) => {
                    let {
                        body: { token: n, user_id: r, required_actions: i }
                    } = e;
                    p.Z.dispatch({
                        type: 'LOGIN_ATTEMPTED',
                        user_id: r,
                        required_actions: i
                    }),
                        p.Z.dispatch({
                            type: 'LOGIN_SUCCESS',
                            token: n
                        });
                })
                .catch((e) => {
                    if (null != e.body && null != e.body.suspended_user_token) {
                        p.Z.dispatch({
                            type: 'LOGIN_SUSPENDED_USER',
                            suspendedUserToken: e.body.suspended_user_token
                        });
                        return;
                    }
                    throw (
                        (p.Z.dispatch({
                            type: 'PASSWORDLESS_FAILURE',
                            error: e
                        }),
                        e)
                    );
                });
        },
        loginToken(e) {
            let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
            return (
                p.Z.dispatch({ type: 'LOGIN' }),
                new Promise((r) => {
                    setImmediate(() => {
                        p.Z.dispatch({
                            type: 'LOGIN_SUCCESS',
                            token: e
                        }),
                            n && this.startSession(e),
                            r();
                    });
                })
            );
        },
        loginReset(e) {
            p.Z.dispatch({
                type: 'LOGIN_RESET',
                isMultiAccount: e
            });
        },
        loginStatusReset() {
            p.Z.dispatch({ type: 'LOGIN_STATUS_RESET' });
        },
        logoutInternal(e) {
            O(e);
        },
        logout() {
            var e;
            let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : S.Z5c.DEFAULT_LOGGED_OUT,
                r = arguments.length > 1 ? arguments[1] : void 0;
            return I.Z.post({
                url: S.ANM.LOGOUT,
                body: {
                    provider: (0, A.xJ)(),
                    token: f.K.get(S.JkL),
                    voip_provider: A.mv,
                    voip_token: f.K.get(S.scU)
                },
                oldFormErrors: !0,
                trackedActionData: { event: u.NetworkActionNames.USER_LOGOUT },
                ...(null != r && { headers: { authorization: null !== (e = c.getToken(r)) && void 0 !== e ? e : '' } }),
                rejectWithError: !1
            }).finally(() => {
                (null == r || r === y.default.getId()) && D(n);
            });
        },
        switchAccountToken(e) {
            let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                r = y.default.getToken();
            return (
                C.log('Switching accounts', {
                    wasLoggedIn: null != r,
                    tokenHasChanged: e !== r
                }),
                O({
                    isSwitchingAccount: !0,
                    goHomeAfterSwitching: n
                }),
                this.loginToken(e, !0).then(() => {
                    let n = e === y.default.getToken();
                    return C.log('Switched accounts finished', { isCorrectToken: n }), n;
                })
            );
        },
        verifySSOToken() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : S.Z5c.DEFAULT_LOGGED_OUT;
            return d.tn
                .get({
                    url: S.ANM.ME,
                    oldFormErrors: !0,
                    rejectWithError: !0
                })
                .catch(() => D(e));
        },
        verify(e) {
            null != e
                ? I.Z.post({
                      url: S.ANM.VERIFY,
                      body: { token: e },
                      oldFormErrors: !0,
                      trackedActionData: { event: u.NetworkActionNames.USER_VERIFY },
                      rejectWithError: !1
                  }).then(
                      (e) => {
                          p.Z.dispatch({
                              type: 'LOGIN_SUCCESS',
                              token: e.body.token
                          }),
                              p.Z.dispatch({
                                  type: 'VERIFY_SUCCESS',
                                  verifyingUserId: e.body.user_id
                              });
                      },
                      (e) =>
                          p.Z.dispatch({
                              type: 'VERIFY_FAILURE',
                              errors: e.body
                          })
                  )
                : p.Z.dispatch({
                      type: 'VERIFY_FAILURE',
                      errors: {}
                  });
        },
        async authorizePayment(e) {
            try {
                await I.Z.post({
                    url: S.ANM.AUTHORIZE_PAYMENT,
                    body: { token: e },
                    oldFormErrors: !0,
                    trackedActionData: { event: u.NetworkActionNames.AUTHORIZE_PAYMENT },
                    rejectWithError: !0
                }),
                    p.Z.dispatch({ type: 'VERIFY_SUCCESS' });
            } catch (e) {
                p.Z.dispatch({
                    type: 'VERIFY_FAILURE',
                    errors: {}
                });
            }
        },
        async authorizeIPAddress(e) {
            if (null == e) {
                p.Z.dispatch({
                    type: 'VERIFY_FAILURE',
                    errors: {}
                });
                return;
            }
            try {
                await I.Z.post({
                    url: S.ANM.AUTHORIZE_IP,
                    body: { token: e },
                    oldFormErrors: !0,
                    trackedActionData: { event: u.NetworkActionNames.AUTHORIZE_IP },
                    rejectWithError: !0
                }),
                    p.Z.dispatch({ type: 'VERIFY_SUCCESS' });
            } catch (e) {
                p.Z.dispatch({
                    type: 'VERIFY_FAILURE',
                    errors: {}
                });
            }
        },
        verifyResend: () =>
            I.Z.post({
                url: S.ANM.VERIFY_RESEND,
                oldFormErrors: !0,
                trackedActionData: { event: u.NetworkActionNames.USER_VERIFY_RESEND },
                rejectWithError: !1
            }),
        async resetPassword(e, n, r) {
            p.Z.dispatch({ type: 'LOGIN' });
            let i = {
                    token: e,
                    password: n,
                    source: r
                },
                a = f.K.get(S.JkL),
                o = (0, A.xJ)();
            null != o && null != a && ((i.push_provider = o), (i.push_token = a));
            let s = f.K.get(S.scU);
            null != A.mv && null != s && ((i.push_voip_provider = A.mv), (i.push_voip_token = s));
            try {
                let {
                    body: { mfa: e, sms: n, webauthn: r, ticket: a, token: o, backup: s, totp: l }
                } = await I.Z.post({
                    url: S.ANM.RESET_PASSWORD,
                    body: i,
                    oldFormErrors: !0,
                    trackedActionData: { event: u.NetworkActionNames.USER_RESET_PASSWORD },
                    rejectWithError: !1
                });
                return {
                    result: e ? 'MFA' : 'SUCCESS',
                    sms: n,
                    webauthn: r,
                    ticket: a,
                    token: o,
                    backup: s,
                    totp: l
                };
            } catch (e) {
                throw (
                    (p.Z.dispatch({
                        type: 'LOGIN_FAILURE',
                        error: new h.yZ(e)
                    }),
                    e)
                );
            }
        },
        async resetPasswordMFAv2(e) {
            let { method: n, code: r, ticket: i, password: a, token: o, source: s } = e;
            return (
                p.Z.dispatch({ type: 'LOGIN_MFA' }),
                (
                    await I.Z.post({
                        url: S.ANM.RESET_PASSWORD,
                        body: {
                            code: r,
                            ticket: i,
                            password: a,
                            token: o,
                            source: s,
                            method: n
                        },
                        oldFormErrors: !0,
                        trackedActionData: {
                            event: u.NetworkActionNames.USER_RESET_PASSWORD,
                            properties: { mfa: !0 }
                        },
                        rejectWithError: !0
                    })
                ).body.token
            );
        },
        async forgotPassword(e) {
            this.setLoginCredentials(e), p.Z.dispatch({ type: 'FORGOT_PASSWORD_REQUEST' });
            try {
                await I.Z.post({
                    url: S.ANM.FORGOT_PASSWORD,
                    body: { login: e },
                    oldFormErrors: !0,
                    trackedActionData: { event: u.NetworkActionNames.FORGOT_PASSWORD },
                    rejectWithError: !1
                }),
                    p.Z.dispatch({ type: 'FORGOT_PASSWORD_SENT' });
            } catch (n) {
                let e = new h.yZ(n);
                throw (
                    (e.code === S.evJ.PHONE_VERIFICATION_REQUIRED
                        ? p.Z.dispatch({ type: 'LOGIN_PASSWORD_RECOVERY_PHONE_VERIFICATION' })
                        : p.Z.dispatch({
                              type: 'LOGIN_FAILURE',
                              error: e
                          }),
                    n)
                );
            }
        },
        setFingerprint(e) {
            p.Z.dispatch({
                type: 'FINGERPRINT',
                fingerprint: e
            });
        },
        getExperiments(e) {
            p.Z.dispatch({
                type: 'EXPERIMENTS_FETCH',
                withGuildExperiments: e
            });
        },
        getLocationMetadata: () =>
            null != R
                ? R
                : (clearTimeout(i),
                  (i = setTimeout(() => {
                      p.Z.dispatch({
                          type: 'SET_CONSENT_REQUIRED',
                          consentRequired: !0
                      });
                  }, N)),
                  (R = d.tn
                      .get({
                          url: S.ANM.AUTH_LOCATION_METADATA,
                          retries: 2,
                          oldFormErrors: !0,
                          rejectWithError: !0
                      })
                      .then(
                          (e) => {
                              var n, r, a, o, s;
                              if ((clearTimeout(i), null == b.Z.getAuthenticationConsentRequired())) {
                                  let n = null === (o = null == e ? void 0 : null === (a = e.body) || void 0 === a ? void 0 : a.consent_required) || void 0 === o || o;
                                  p.Z.dispatch({
                                      type: 'SET_CONSENT_REQUIRED',
                                      consentRequired: n
                                  });
                              }
                              if (
                                  (p.Z.dispatch({
                                      type: 'SET_LOCATION_METADATA',
                                      countryCode: null !== (s = null == e ? void 0 : null === (n = e.body) || void 0 === n ? void 0 : n.country_code) && void 0 !== s ? s : void 0
                                  }),
                                  (R = null),
                                  (null == e ? void 0 : null === (r = e.body) || void 0 === r ? void 0 : r.promotional_email_opt_in) != null)
                              ) {
                                  let n = e.body.promotional_email_opt_in;
                                  (0, _.K4)({
                                      required: n.required,
                                      checked: n.pre_checked,
                                      preChecked: n.pre_checked
                                  });
                              }
                          },
                          () => {
                              clearTimeout(i),
                                  p.Z.dispatch({
                                      type: 'SET_CONSENT_REQUIRED',
                                      consentRequired: !0
                                  }),
                                  (R = null);
                          }
                      ))),
        closeSuspendedUser() {
            p.Z.dispatch({ type: 'CLOSE_SUSPENDED_USER' });
        }
    });
