"use strict";
n.d(t, { A: () => c });
var i = n(17928),
    r = n(228366),
    a = n(155718);
let s = !1,
    l = [],
    o = !1;
class d extends i.Ay.Store {
    static displayName = "WebAuthnStore";
    hasFetchedCredentials() {
        return s;
    }
    get hasCredentials() {
        return l.length > 0;
    }
    getCredentials() {
        return l;
    }
    hasPendingRegisterTrigger() {
        return o;
    }
}
let c = new d(r.h, {
    LOGOUT: function () {
        (l = []), (s = !1), (o = !1);
    },
    MFA_WEBAUTHN_CREDENTIALS_LOADED: function (e) {
        let { credentials: t } = e,
            n = !1;
        return l !== t && ((l = t), (n = !0)), s || ((s = !0), (n = !0)), n;
    },
    AUTHENTICATOR_CREATE: function (e) {
        let { credential: t } = e;
        return t.type !== a.Wq.WEBAUTHN
            ? (t.type, !1)
            : void 0 === l.find((e) => e.id === t.id) && void (l = [...l, t]);
    },
    AUTHENTICATOR_UPDATE: function (e) {
        let { credential: t } = e;
        if (t.type !== a.Wq.WEBAUTHN) return t.type, !1;
        l = l.map((e) => (e.id === t.id ? t : e));
    },
    AUTHENTICATOR_DELETE: function (e) {
        let { credential: t } = e;
        if (t.type !== a.Wq.WEBAUTHN) return t.type, !1;
        l = l.filter((e) => e.id !== t.id);
    },
    WEBAUTHN_TRIGGER_REGISTER: function () {
        if (o) return !1;
        o = !0;
    },
    WEBAUTHN_CLEAR_REGISTER_TRIGGER: function () {
        if (!o) return !1;
        o = !1;
    },
});
