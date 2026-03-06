"use strict";
n.d(t, { A: () => c });
var r = n(439372),
    i = n(961350),
    s = n(3928),
    a = n(881253),
    o = n(173953),
    l = n(191986);
class u extends r.A {
    actions = {
        AUTHENTICATOR_DELETE: this.handleAuthenticatorDelete,
        MFA_WEBAUTHN_CREDENTIALS_LOADED: this.handleWebAuthnCredentialsLoaded,
        CURRENT_USER_UPDATE: this.handleCurrentUserUpdate,
    };
    async handleAuthenticatorDelete(e) {
        let { credential: t } = e;
        l.V.getConfig({ location: "manager" }).enabled && (await s.A.signalUnknownCredential(t));
    }
    async handleWebAuthnCredentialsLoaded(e) {
        let { credentials: t } = e;
        if (a.k.getConfig({ location: "manager" }).enabled) {
            let e = i.default.getId();
            await s.A.signalAllAcceptedCredentials(t, e);
        }
    }
    async handleCurrentUserUpdate(e) {
        let { user: t } = e;
        o.u.getConfig({ location: "manager" }).enabled && (await s.A.signalCurrentUserDetails(t));
    }
}
let c = new u();
