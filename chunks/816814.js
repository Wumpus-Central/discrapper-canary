i.d(t, { Z: () => s });
var n = i(544891),
    r = i(570140),
    l = i(325067),
    o = i(981631);
function a(e, t) {
    return (
        r.Z.dispatch({ type: 'MFA_SMS_TOGGLE' }),
        n.tn
            .post({
                url: e,
                body: { password: t },
                oldFormErrors: !0,
                rejectWithError: !1
            })
            .then(
                (e) => (r.Z.dispatch({ type: 'MFA_SMS_TOGGLE_COMPLETE' }), e),
                (e) => {
                    throw (r.Z.dispatch({ type: 'MFA_SMS_TOGGLE_COMPLETE' }), e);
                }
            )
    );
}
let s = {
    enableMFAStart: async (e) =>
        (
            await n.tn.post({
                url: o.ANM.MFA_TOTP_ENABLE,
                body: { password: e },
                oldFormErrors: !0,
                rejectWithError: !1
            })
        ).body,
    verifyEmailCode: async (e) =>
        (
            await n.tn.post({
                url: o.ANM.MFA_TOTP_ENABLE_VERIFY,
                body: { code: e },
                rejectWithError: !1
            })
        ).body,
    resendEmailCode: (e) =>
        n.tn.post({
            url: o.ANM.MFA_TOTP_ENABLE_RESEND,
            body: { password: e },
            rejectWithError: !1
        }),
    setEmailToken(e) {
        r.Z.dispatch({
            type: 'MFA_ENABLE_EMAIL_TOKEN',
            token: e
        });
    },
    enable(e) {
        let { password: t, code: i, secret: l, emailToken: a } = e;
        return n.tn
            .post({
                url: o.ANM.MFA_TOTP_ENABLE,
                body: {
                    code: i,
                    secret: l,
                    password: t,
                    email_token: a
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
        n.tn
            .post({
                url: o.ANM.MFA_TOTP_DISABLE,
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
    enableSMS: (e) => a(o.ANM.MFA_SMS_ENABLE, e),
    disableSMS: (e) => a(o.ANM.MFA_SMS_DISABLE, e),
    sendMFABackupCodesVerificationKeyEmail: (e) =>
        n.tn
            .post({
                url: o.ANM.MFA_SEND_VERIFICATION_KEY,
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
        let { viewNonce: i, regenerateNonce: a } = l.Z.getNonces();
        return n.tn
            .post({
                url: o.ANM.MFA_CODES_VERIFICATION,
                body: {
                    key: e,
                    nonce: t ? a : i,
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
