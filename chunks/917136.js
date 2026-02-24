"use strict";
n.d(t, {
    AF: () => p,
    JQ: () => c,
    Mn: () => h,
    Ud: () => l,
    XW: () => m,
    YS: () => u,
    c6: () => _,
    fR: () => d,
    startRegisterWebAuthnCredential: () => f,
});
var r = n(239947),
    i = n(562465),
    s = n(73153),
    a = n(499785),
    o = n(652215);
async function l() {
    let { challenge: e, ticket: t } = (
        await i.Bo.post({
            url: o.Rsh.WEBAUTHN_CONDITIONAL_UI_CHALLENGE,
            headers: { authorization: "" },
            rejectWithError: !0,
        })
    ).body;
    return { challenge: e, ticket: t };
}
async function u() {
    let { challenge: e, ticket: t } = (
        await i.Bo.post({ url: o.Rsh.WEBAUTHN_PASSWORDLESS_CHALLENGE, rejectWithError: !0 })
    ).body;
    return { challenge: e, ticket: t };
}
function c() {
    i.Bo.get({ url: o.Rsh.MFA_WEBAUTHN_CREDENTIALS, rejectWithError: !0 }).then((e) => {
        if (null != e.body) {
            let t = e.body.map((e) => {
                let t = null == e.last_used ? null : new Date(e.last_used);
                return { ...e, last_used: t };
            });
            s.h.dispatch({ type: "MFA_WEBAUTHN_CREDENTIALS_LOADED", credentials: t });
        }
    });
}
async function d(e) {
    return await i.Bo.del({ url: o.Rsh.MFA_WEBAUTHN_CREDENTIAL(e.id), rejectWithError: !0 }).then(() => {
        s.h.dispatch({ type: "AUTHENTICATOR_DELETE", credential: e });
    });
}
async function _(e, t) {
    let n = await i.Bo.patch({ url: o.Rsh.MFA_WEBAUTHN_CREDENTIAL(e), body: { name: t }, rejectWithError: !1 });
    if (null != n.body) {
        let e = n.body,
            t = null == e.last_used ? null : new Date(e.last_used),
            r = { ...e, last_used: t };
        s.h.dispatch({ type: "AUTHENTICATOR_UPDATE", credential: r });
    }
}
async function f() {
    let {
        body: { ticket: e, challenge: t },
    } = await i.Bo.post({ url: o.Rsh.MFA_WEBAUTHN_CREDENTIALS, body: {}, rejectWithError: !1 });
    return { ticket: e, challenge: t };
}
async function p(e, t, n) {
    let i = await a.A.post({
        url: o.Rsh.MFA_WEBAUTHN_CREDENTIALS,
        body: { name: e, ticket: t, credential: n },
        trackedActionData: { event: r.D.WEBAUTHN_REGISTER },
        rejectWithError: !0,
    });
    s.h.dispatch({ type: "AUTHENTICATOR_CREATE", credential: i.body }),
        s.h.dispatch({ type: "MFA_ENABLE_SUCCESS", codes: i.body.backup_codes });
}
function h() {
    s.h.dispatch({ type: "WEBAUTHN_TRIGGER_REGISTER" });
}
function m() {
    s.h.dispatch({ type: "WEBAUTHN_CLEAR_REGISTER_TRIGGER" });
}
