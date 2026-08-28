"use strict";
n.d(t, {
    AF: () => A,
    JQ: () => c,
    Ud: () => o,
    YS: () => d,
    c6: () => _,
    fR: () => u,
    startRegisterWebAuthnCredential: () => E,
});
var i = n(239947),
    r = n(636537),
    a = n(228366),
    s = n(499785),
    l = n(652215);
async function o() {
    let { challenge: e, ticket: t } = (
        await r.Bo.post({
            url: l.Rsh.WEBAUTHN_CONDITIONAL_UI_CHALLENGE,
            headers: { authorization: "" },
            rejectWithError: !0,
        })
    ).body;
    return { challenge: e, ticket: t };
}
async function d() {
    let { challenge: e, ticket: t } = (
        await r.Bo.post({ url: l.Rsh.WEBAUTHN_PASSWORDLESS_CHALLENGE, rejectWithError: !0 })
    ).body;
    return { challenge: e, ticket: t };
}
function c() {
    r.Bo.get({ url: l.Rsh.MFA_WEBAUTHN_CREDENTIALS, rejectWithError: !0 }).then((e) => {
        if (null != e.body) {
            let t = e.body.map((e) => {
                let t = null == e.last_used ? null : new Date(e.last_used);
                return { ...e, last_used: t };
            });
            a.h.dispatch({ type: "MFA_WEBAUTHN_CREDENTIALS_LOADED", credentials: t });
        }
    });
}
async function u(e) {
    return await r.Bo.del({ url: l.Rsh.MFA_WEBAUTHN_CREDENTIAL(e.id), rejectWithError: !0 }).then(() => {
        a.h.dispatch({ type: "AUTHENTICATOR_DELETE", credential: e });
    });
}
async function _(e, t) {
    let n = await r.Bo.patch({ url: l.Rsh.MFA_WEBAUTHN_CREDENTIAL(e), body: { name: t }, rejectWithError: !1 });
    if (null != n.body) {
        let e = n.body,
            t = null == e.last_used ? null : new Date(e.last_used),
            i = { ...e, last_used: t };
        a.h.dispatch({ type: "AUTHENTICATOR_UPDATE", credential: i });
    }
}
async function E() {
    let {
        body: { ticket: e, challenge: t },
    } = await r.Bo.post({ url: l.Rsh.MFA_WEBAUTHN_CREDENTIALS, body: {}, rejectWithError: !1 });
    return { ticket: e, challenge: t };
}
async function A(e, t, n) {
    let r = await s.A.post({
        url: l.Rsh.MFA_WEBAUTHN_CREDENTIALS,
        body: { name: e, ticket: t, credential: n },
        trackedActionData: { event: i.D3.WEBAUTHN_REGISTER },
        rejectWithError: !0,
    });
    a.h.dispatch({ type: "AUTHENTICATOR_CREATE", credential: r.body }),
        a.h.dispatch({ type: "MFA_ENABLE_SUCCESS", codes: r.body.backup_codes });
}
