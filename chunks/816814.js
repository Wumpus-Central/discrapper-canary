n.d(t, { Z: () => o });
var i = n(544891),
    s = n(570140),
    l = n(325067),
    r = n(981631);
function a(e, t) {
    return (
        s.Z.dispatch({ type: 'MFA_SMS_TOGGLE' }),
        i.tn
            .post({
                url: e,
                body: { password: t },
                oldFormErrors: !0,
                rejectWithError: !1
            })
            .then(
                (e) => (s.Z.dispatch({ type: 'MFA_SMS_TOGGLE_COMPLETE' }), e),
                (e) => {
                    throw (s.Z.dispatch({ type: 'MFA_SMS_TOGGLE_COMPLETE' }), e);
                }
            )
    );
}
let o = {
    enableMFAStart: async (e) =>
        (
            await i.tn.post({
                url: r.ANM.MFA_TOTP_ENABLE,
                body: { password: e },
                oldFormErrors: !0,
                rejectWithError: !1
            })
        ).body,
    verifyEmailCode: async (e) =>
        (
            await i.tn.post({
                url: r.ANM.MFA_TOTP_ENABLE_VERIFY,
                body: { code: e },
                rejectWithError: !1
            })
        ).body,
    resendEmailCode: (e) =>
        i.tn.post({
            url: r.ANM.MFA_TOTP_ENABLE_RESEND,
            body: { password: e },
            rejectWithError: !1
        }),
    setEmailToken(e) {
        s.Z.dispatch({
            type: 'MFA_ENABLE_EMAIL_TOKEN',
            token: e
        });
    },
    enable(e) {
        let { password: t, code: n, secret: l, emailToken: a } = e;
        return i.tn
            .post({
                url: r.ANM.MFA_TOTP_ENABLE,
                body: {
                    code: n,
                    secret: l,
                    password: t,
                    email_token: a
                },
                oldFormErrors: !0,
                rejectWithError: !1
            })
            .then((e) =>
                s.Z.dispatch({
                    type: 'MFA_ENABLE_SUCCESS',
                    token: e.body.token,
                    codes: e.body.backup_codes
                })
            );
    },
    disable() {
        i.tn
            .post({
                url: r.ANM.MFA_TOTP_DISABLE,
                oldFormErrors: !0,
                rejectWithError: !1
            })
            .then((e) => {
                let {
                    body: { token: t }
                } = e;
                return s.Z.dispatch({
                    type: 'MFA_DISABLE_SUCCESS',
                    token: t
                });
            });
    },
    enableSMS: (e) => a(r.ANM.MFA_SMS_ENABLE, e),
    disableSMS: (e) => a(r.ANM.MFA_SMS_DISABLE, e),
    sendMFABackupCodesVerificationKeyEmail: (e) =>
        i.tn
            .post({
                url: r.ANM.MFA_SEND_VERIFICATION_KEY,
                body: { password: e },
                oldFormErrors: !0,
                rejectWithError: !1
            })
            .then(
                (e) =>
                    s.Z.dispatch({
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
        let { viewNonce: n, regenerateNonce: a } = l.Z.getNonces();
        return i.tn
            .post({
                url: r.ANM.MFA_CODES_VERIFICATION,
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
                    s.Z.dispatch({
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
        s.Z.dispatch({ type: 'MFA_CLEAR_BACKUP_CODES' });
    }
};
