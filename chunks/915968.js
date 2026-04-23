"use strict";
n.d(t, { A: () => o });
var r = n(439372),
    i = n(961350),
    s = n(3928);
class a extends r.A {
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
            n = i.default.getId();
        await s.A.signalAllAcceptedCredentials(t, n);
    }
    async handleCurrentUserUpdate(e) {
        let { user: t } = e;
        await s.A.signalCurrentUserDetails(t);
    }
}
let o = new a();
