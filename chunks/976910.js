"use strict";
n.d(t, { A: () => g });
var r = n(311907),
    i = n(73153),
    a = n(155718);
let s = !1,
    o = [],
    l = !1;
function u() {
    (o = []), (s = !1), (l = !1);
}
function c() {
    if (l) return !1;
    l = !0;
}
function d() {
    if (!l) return !1;
    l = !1;
}
function _(e) {
    let { credentials: t } = e,
        n = !1;
    return o !== t && ((o = t), (n = !0)), s || ((s = !0), (n = !0)), n;
}
function f(e) {
    let { credential: t } = e;
    if (t.type !== a.Wq.WEBAUTHN || void 0 !== o.find((e) => e.id === t.id)) return !1;
    o = [...o, t];
}
function p(e) {
    let { credential: t } = e;
    if (t.type !== a.Wq.WEBAUTHN) return !1;
    o = o.map((e) => (e.id === t.id ? t : e));
}
function h(e) {
    let { credential: t } = e;
    if (t.type !== a.Wq.WEBAUTHN) return !1;
    o = o.filter((e) => e.id !== t.id);
}
class m extends r.Ay.Store {
    static displayName = "WebAuthnStore";
    hasFetchedCredentials() {
        return s;
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
let g = new m(i.h, {
    LOGOUT: u,
    MFA_WEBAUTHN_CREDENTIALS_LOADED: _,
    AUTHENTICATOR_CREATE: f,
    AUTHENTICATOR_UPDATE: p,
    AUTHENTICATOR_DELETE: h,
    WEBAUTHN_TRIGGER_REGISTER: c,
    WEBAUTHN_CLEAR_REGISTER_TRIGGER: d,
});
