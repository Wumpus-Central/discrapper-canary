"use strict";
n.d(t, { A: () => l });
var i = n(439372),
    r = n(280450),
    a = n(84948);
class s extends i.A {
    actions = {
        AUTHENTICATOR_DELETE: this.handleAuthenticatorDelete,
        MFA_WEBAUTHN_CREDENTIALS_LOADED: this.handleWebAuthnCredentialsLoaded,
        CURRENT_USER_UPDATE: this.handleCurrentUserUpdate,
    };
    async handleAuthenticatorDelete(e) {
        let { credential: t } = e;
        await a.A.signalUnknownCredential(t);
    }
    async handleWebAuthnCredentialsLoaded(e) {
        let { credentials: t } = e,
            n = r.default.getId();
        await a.A.signalAllAcceptedCredentials(t, n);
    }
    async handleCurrentUserUpdate(e) {
        let { user: t } = e;
        await a.A.signalCurrentUserDetails(t);
    }
}
let l = new s();
