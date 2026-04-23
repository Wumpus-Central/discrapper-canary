"use strict";
n.d(t, {
    AF: () => h,
    JQ: () => _,
    Mn: () => m,
    Ud: () => l,
    XW: () => f,
    YS: () => d,
    c6: () => c,
    fR: () => u,
    startRegisterWebAuthnCredential: () => E,
});
var i = n(239947),
    r = n(636537),
    s = n(228366),
    a = n(499785),
    o = n(652215);
async function l() {
    let { challenge: e, ticket: t } = (
        await r.Bo.post({
            url: o.Rsh.WEBAUTHN_CONDITIONAL_UI_CHALLENGE,
            headers: { authorization: "" },
            rejectWithError: !0,
        })
    ).body;
    return { challenge: e, ticket: t };
}
async function d() {
    let { challenge: e, ticket: t } = (
        await r.Bo.post({ url: o.Rsh.WEBAUTHN_PASSWORDLESS_CHALLENGE, rejectWithError: !0 })
    ).body;
    return { challenge: e, ticket: t };
}
function _() {
    r.Bo.get({ url: o.Rsh.MFA_WEBAUTHN_CREDENTIALS, rejectWithError: !0 }).then((e) => {
        if (null != e.body) {
            let t = e.body.map((e) => {
                let t = null == e.last_used ? null : new Date(e.last_used);
                return { ...e, last_used: t };
            });
            s.h.dispatch({ type: "MFA_WEBAUTHN_CREDENTIALS_LOADED", credentials: t });
        }
    });
}
async function u(e) {
    return await r.Bo.del({ url: o.Rsh.MFA_WEBAUTHN_CREDENTIAL(e.id), rejectWithError: !0 }).then(() => {
        s.h.dispatch({ type: "AUTHENTICATOR_DELETE", credential: e });
    });
}
async function c(e, t) {
    let n = await r.Bo.patch({ url: o.Rsh.MFA_WEBAUTHN_CREDENTIAL(e), body: { name: t }, rejectWithError: !1 });
    if (null != n.body) {
        let e = n.body,
            t = null == e.last_used ? null : new Date(e.last_used),
            i = { ...e, last_used: t };
        s.h.dispatch({ type: "AUTHENTICATOR_UPDATE", credential: i });
    }
}
async function E() {
    let {
        body: { ticket: e, challenge: t },
    } = await r.Bo.post({ url: o.Rsh.MFA_WEBAUTHN_CREDENTIALS, body: {}, rejectWithError: !1 });
    return { ticket: e, challenge: t };
}
async function h(e, t, n) {
    let r = await a.A.post({
        url: o.Rsh.MFA_WEBAUTHN_CREDENTIALS,
        body: { name: e, ticket: t, credential: n },
        trackedActionData: { event: i.D.WEBAUTHN_REGISTER },
        rejectWithError: !0,
    });
    s.h.dispatch({ type: "AUTHENTICATOR_CREATE", credential: r.body }),
        s.h.dispatch({ type: "MFA_ENABLE_SUCCESS", codes: r.body.backup_codes });
}
function m() {
    s.h.dispatch({ type: "WEBAUTHN_TRIGGER_REGISTER" });
}
function f() {
    s.h.dispatch({ type: "WEBAUTHN_CLEAR_REGISTER_TRIGGER" });
}
