"use strict";
n.d(t, { A: () => o });
var i = n(439372),
    r = n(495544),
    s = n(84948);
class a extends i.A {
    actions = {
        AUTHENTICATOR_DELETE: this.handleAuthenticatorDelete,
        MFA_WEBAUTHN_CREDENTIALS_LOADED: this.handleWebAuthnCredentialsLoaded,
        CURRENT_USER_UPDATE: this.handleCurrentUserUpdate,
    };
    async handleAuthenticatorDelete(e) {
        let { credential: t } = e;
        await s.A.signalUnknownCredential(t);
    }
    async handleWebAuthnCredentialsLoaded(e) {
        let { credentials: t } = e,
            n = r.default.getId();
        await s.A.signalAllAcceptedCredentials(t, n);
    }
    async handleCurrentUserUpdate(e) {
        let { user: t } = e;
        await s.A.signalCurrentUserDetails(t);
    }
}
let o = new a();
