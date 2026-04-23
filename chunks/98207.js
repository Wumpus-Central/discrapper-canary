n.d(t, { A: () => r });
var i = n(636537),
    l = n(228366),
    s = n(670492),
    a = n(652215);
let r = {
    enable(e) {
        let { code: t, secret: n } = e;
        return i.Bo.post({
            url: a.Rsh.MFA_TOTP_ENABLE,
            body: { code: t, secret: n },
            oldFormErrors: !0,
            rejectWithError: !1,
        }).then((e) => l.h.dispatch({ type: "MFA_ENABLE_SUCCESS", token: e.body.token, codes: e.body.backup_codes }));
    },
    disable() {
        i.Bo.post({ url: a.Rsh.MFA_TOTP_DISABLE, oldFormErrors: !0, rejectWithError: !1 }).then((e) => {
            let {
                body: { token: t },
            } = e;
            return l.h.dispatch({ type: "MFA_DISABLE_SUCCESS", token: t });
        });
    },
    enableSMS: () => (
        l.h.dispatch({ type: "MFA_SMS_TOGGLE" }),
        i.Bo.post({ url: a.Rsh.MFA_SMS_ENABLE, oldFormErrors: !0, rejectWithError: !1 }).then(
            (e) => (l.h.dispatch({ type: "MFA_SMS_TOGGLE_COMPLETE" }), e),
            (e) => {
                throw (l.h.dispatch({ type: "MFA_SMS_TOGGLE_COMPLETE" }), e);
            },
        )
    ),
    disableSMS: (e) => (
        l.h.dispatch({ type: "MFA_SMS_TOGGLE" }),
        i.Bo.post({ url: a.Rsh.MFA_SMS_DISABLE, body: { password: e }, oldFormErrors: !0, rejectWithError: !1 }).then(
            (e) => (l.h.dispatch({ type: "MFA_SMS_TOGGLE_COMPLETE" }), e),
            (e) => {
                throw (l.h.dispatch({ type: "MFA_SMS_TOGGLE_COMPLETE" }), e);
            },
        )
    ),
    sendMFABackupCodesVerificationKeyEmail: (e) =>
        i.Bo.post({
            url: a.Rsh.MFA_SEND_VERIFICATION_KEY,
            body: { password: e },
            oldFormErrors: !0,
            rejectWithError: !1,
        }).then(
            (e) =>
                l.h.dispatch({
                    type: "MFA_SEND_VERIFICATION_KEY",
                    nonces: { viewNonce: e.body.nonce, regenerateNonce: e.body.regenerate_nonce },
                }),
            (e) => {
                throw e;
            },
        ),
    confirmViewBackupCodes(e, t) {
        let { viewNonce: n, regenerateNonce: r } = s.A.getNonces();
        return i.Bo.post({
            url: a.Rsh.MFA_CODES_VERIFICATION,
            body: { key: e, nonce: t ? r : n, regenerate: t },
            oldFormErrors: !0,
            rejectWithError: !1,
        }).then(
            (t) => l.h.dispatch({ type: "MFA_VIEW_BACKUP_CODES", codes: t.body.backup_codes, key: e }),
            (e) => {
                throw e;
            },
        );
    },
    clearBackupCodes() {
        l.h.dispatch({ type: "MFA_CLEAR_BACKUP_CODES" });
    },
};
