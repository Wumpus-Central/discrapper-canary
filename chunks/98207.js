n.d(t, { A: () => o });
var r = n(562465),
    i = n(73153),
    a = n(670492),
    s = n(652215);
let o = {
    enable(e) {
        let { code: t, secret: n } = e;
        return r.Bo.post({
            url: s.Rsh.MFA_TOTP_ENABLE,
            body: {
                code: t,
                secret: n,
            },
            oldFormErrors: !0,
            rejectWithError: !1,
        }).then((e) =>
            i.h.dispatch({
                type: "MFA_ENABLE_SUCCESS",
                token: e.body.token,
                codes: e.body.backup_codes,
            }),
        );
    },
    disable() {
        r.Bo.post({
            url: s.Rsh.MFA_TOTP_DISABLE,
            oldFormErrors: !0,
            rejectWithError: !1,
        }).then((e) => {
            let {
                body: { token: t },
            } = e;
            return i.h.dispatch({
                type: "MFA_DISABLE_SUCCESS",
                token: t,
            });
        });
    },
    enableSMS: () => (
        i.h.dispatch({ type: "MFA_SMS_TOGGLE" }),
        r.Bo.post({
            url: s.Rsh.MFA_SMS_ENABLE,
            oldFormErrors: !0,
            rejectWithError: !1,
        }).then(
            (e) => (i.h.dispatch({ type: "MFA_SMS_TOGGLE_COMPLETE" }), e),
            (e) => {
                throw (i.h.dispatch({ type: "MFA_SMS_TOGGLE_COMPLETE" }), e);
            },
        )
    ),
    disableSMS: (e) => (
        i.h.dispatch({ type: "MFA_SMS_TOGGLE" }),
        r.Bo.post({
            url: s.Rsh.MFA_SMS_DISABLE,
            body: { password: e },
            oldFormErrors: !0,
            rejectWithError: !1,
        }).then(
            (e) => (i.h.dispatch({ type: "MFA_SMS_TOGGLE_COMPLETE" }), e),
            (e) => {
                throw (i.h.dispatch({ type: "MFA_SMS_TOGGLE_COMPLETE" }), e);
            },
        )
    ),
    sendMFABackupCodesVerificationKeyEmail: (e) =>
        r.Bo.post({
            url: s.Rsh.MFA_SEND_VERIFICATION_KEY,
            body: { password: e },
            oldFormErrors: !0,
            rejectWithError: !1,
        }).then(
            (e) =>
                i.h.dispatch({
                    type: "MFA_SEND_VERIFICATION_KEY",
                    nonces: {
                        viewNonce: e.body.nonce,
                        regenerateNonce: e.body.regenerate_nonce,
                    },
                }),
            (e) => {
                throw e;
            },
        ),
    confirmViewBackupCodes(e, t) {
        let { viewNonce: n, regenerateNonce: o } = a.A.getNonces(),
            l = t ? o : n;
        return r.Bo.post({
            url: s.Rsh.MFA_CODES_VERIFICATION,
            body: {
                key: e,
                nonce: l,
                regenerate: t,
            },
            oldFormErrors: !0,
            rejectWithError: !1,
        }).then(
            (t) =>
                i.h.dispatch({
                    type: "MFA_VIEW_BACKUP_CODES",
                    codes: t.body.backup_codes,
                    key: e,
                }),
            (e) => {
                throw e;
            },
        );
    },
    clearBackupCodes() {
        i.h.dispatch({ type: "MFA_CLEAR_BACKUP_CODES" });
    },
};
