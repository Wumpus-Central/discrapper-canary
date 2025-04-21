n.d(t, { Z: () => a });
var i = n(544891),
    r = n(570140),
    s = n(325067),
    l = n(981631);
let a = {
    enable(e) {
        let { code: t, secret: n } = e;
        return i.tn
            .post({
                url: l.ANM.MFA_TOTP_ENABLE,
                body: {
                    code: t,
                    secret: n
                },
                oldFormErrors: !0,
                rejectWithError: !1
            })
            .then((e) =>
                r.Z.dispatch({
                    type: 'MFA_ENABLE_SUCCESS',
                    token: e.body.token,
                    codes: e.body.backup_codes
                })
            );
    },
    disable() {
        i.tn
            .post({
                url: l.ANM.MFA_TOTP_DISABLE,
                oldFormErrors: !0,
                rejectWithError: !1
            })
            .then((e) => {
                let {
                    body: { token: t }
                } = e;
                return r.Z.dispatch({
                    type: 'MFA_DISABLE_SUCCESS',
                    token: t
                });
            });
    },
    enableSMS: () => (
        r.Z.dispatch({ type: 'MFA_SMS_TOGGLE' }),
        i.tn
            .post({
                url: l.ANM.MFA_SMS_ENABLE,
                oldFormErrors: !0,
                rejectWithError: !1
            })
            .then(
                (e) => (r.Z.dispatch({ type: 'MFA_SMS_TOGGLE_COMPLETE' }), e),
                (e) => {
                    throw (r.Z.dispatch({ type: 'MFA_SMS_TOGGLE_COMPLETE' }), e);
                }
            )
    ),
    disableSMS: (e) => (
        r.Z.dispatch({ type: 'MFA_SMS_TOGGLE' }),
        i.tn
            .post({
                url: l.ANM.MFA_SMS_DISABLE,
                body: { password: e },
                oldFormErrors: !0,
                rejectWithError: !1
            })
            .then(
                (e) => (r.Z.dispatch({ type: 'MFA_SMS_TOGGLE_COMPLETE' }), e),
                (e) => {
                    throw (r.Z.dispatch({ type: 'MFA_SMS_TOGGLE_COMPLETE' }), e);
                }
            )
    ),
    sendMFABackupCodesVerificationKeyEmail: (e) =>
        i.tn
            .post({
                url: l.ANM.MFA_SEND_VERIFICATION_KEY,
                body: { password: e },
                oldFormErrors: !0,
                rejectWithError: !1
            })
            .then(
                (e) =>
                    r.Z.dispatch({
                        type: 'MFA_SEND_VERIFICATION_KEY',
                        nonces: {
                            viewNonce: e.body.nonce,
                            regenerateNonce: e.body.regenerate_nonce
                        }
                    }),
                (e) => {
                    throw e;
                }
            ),
    confirmViewBackupCodes(e, t) {
        let { viewNonce: n, regenerateNonce: a } = s.Z.getNonces();
        return i.tn
            .post({
                url: l.ANM.MFA_CODES_VERIFICATION,
                body: {
                    key: e,
                    nonce: t ? a : n,
                    regenerate: t
                },
                oldFormErrors: !0,
                rejectWithError: !1
            })
            .then(
                (t) =>
                    r.Z.dispatch({
                        type: 'MFA_VIEW_BACKUP_CODES',
                        codes: t.body.backup_codes,
                        key: e
                    }),
                (e) => {
                    throw e;
                }
            );
    },
    clearBackupCodes() {
        r.Z.dispatch({ type: 'MFA_CLEAR_BACKUP_CODES' });
    }
};
