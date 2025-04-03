n.d(t, { Z: () => o });
var r = n(544891),
    i = n(570140),
    s = n(325067),
    a = n(981631);
function l(e, t) {
    return (
        i.Z.dispatch({ type: 'MFA_SMS_TOGGLE' }),
        r.tn
            .post({
                url: e,
                body: { password: t },
                oldFormErrors: !0,
                rejectWithError: !1
            })
            .then(
                (e) => (i.Z.dispatch({ type: 'MFA_SMS_TOGGLE_COMPLETE' }), e),
                (e) => {
                    throw (i.Z.dispatch({ type: 'MFA_SMS_TOGGLE_COMPLETE' }), e);
                }
            )
    );
}
let o = {
    enableMFAStart: async (e) =>
        (
            await r.tn.post({
                url: a.ANM.MFA_TOTP_ENABLE,
                body: { password: e },
                oldFormErrors: !0,
                rejectWithError: !1
            })
        ).body,
    enable(e) {
        let { password: t, code: n, secret: s } = e;
        return r.tn
            .post({
                url: a.ANM.MFA_TOTP_ENABLE,
                body: {
                    code: n,
                    secret: s,
                    password: t
                },
                oldFormErrors: !0,
                rejectWithError: !1
            })
            .then((e) =>
                i.Z.dispatch({
                    type: 'MFA_ENABLE_SUCCESS',
                    token: e.body.token,
                    codes: e.body.backup_codes
                })
            );
    },
    disable() {
        r.tn
            .post({
                url: a.ANM.MFA_TOTP_DISABLE,
                oldFormErrors: !0,
                rejectWithError: !1
            })
            .then((e) => {
                let {
                    body: { token: t }
                } = e;
                return i.Z.dispatch({
                    type: 'MFA_DISABLE_SUCCESS',
                    token: t
                });
            });
    },
    enableSMS: (e) => l(a.ANM.MFA_SMS_ENABLE, e),
    disableSMS: (e) => l(a.ANM.MFA_SMS_DISABLE, e),
    sendMFABackupCodesVerificationKeyEmail: (e) =>
        r.tn
            .post({
                url: a.ANM.MFA_SEND_VERIFICATION_KEY,
                body: { password: e },
                oldFormErrors: !0,
                rejectWithError: !1
            })
            .then(
                (e) =>
                    i.Z.dispatch({
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
        let { viewNonce: n, regenerateNonce: l } = s.Z.getNonces();
        return r.tn
            .post({
                url: a.ANM.MFA_CODES_VERIFICATION,
                body: {
                    key: e,
                    nonce: t ? l : n,
                    regenerate: t
                },
                oldFormErrors: !0,
                rejectWithError: !1
            })
            .then(
                (t) =>
                    i.Z.dispatch({
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
        i.Z.dispatch({ type: 'MFA_CLEAR_BACKUP_CODES' });
    }
};
