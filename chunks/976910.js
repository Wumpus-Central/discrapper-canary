"use strict";
n.d(t, { A: () => _ });
var i = n(17928),
    r = n(228366),
    s = n(155718);
let a = !1,
    o = [],
    l = !1;
class d extends i.Ay.Store {
    static displayName = "WebAuthnStore";
    hasFetchedCredentials() {
        return a;
    }
    get hasCredentials() {
        return o.length > 0;
    }
    getCredentials() {
        return o;
    }
    hasPendingRegisterTrigger() {
        return l;
    }
}
let _ = new d(r.h, {
    LOGOUT: function () {
        (o = []), (a = !1), (l = !1);
    },
    MFA_WEBAUTHN_CREDENTIALS_LOADED: function (e) {
        let { credentials: t } = e,
            n = !1;
        return o !== t && ((o = t), (n = !0)), a || ((a = !0), (n = !0)), n;
    },
    AUTHENTICATOR_CREATE: function (e) {
        let { credential: t } = e;
        if (t.type !== s.Wq.WEBAUTHN || void 0 !== o.find((e) => e.id === t.id)) return !1;
        o = [...o, t];
    },
    AUTHENTICATOR_UPDATE: function (e) {
        let { credential: t } = e;
        if (t.type !== s.Wq.WEBAUTHN) return !1;
        o = o.map((e) => (e.id === t.id ? t : e));
    },
    AUTHENTICATOR_DELETE: function (e) {
        let { credential: t } = e;
        if (t.type !== s.Wq.WEBAUTHN) return !1;
        o = o.filter((e) => e.id !== t.id);
    },
    WEBAUTHN_TRIGGER_REGISTER: function () {
        if (l) return !1;
        l = !0;
    },
    WEBAUTHN_CLEAR_REGISTER_TRIGGER: function () {
        if (!l) return !1;
        l = !1;
    },
});
