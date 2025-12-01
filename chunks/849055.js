function r(e) {
    let t = "==".slice(0, (4 - (e.length % 4)) % 4),
        n = atob(e.replace(/-/g, "+").replace(/_/g, "/") + t),
        r = new ArrayBuffer(n.length),
        i = new Uint8Array(r);
    for (let e = 0; e < n.length; e++) i[e] = n.charCodeAt(e);
    return r;
}
function i(e) {
    let t = new Uint8Array(e),
        n = "";
    for (let e of t) n += String.fromCharCode(e);
    return btoa(n).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
}
n.d(t, {
    U2: () => S,
    Ue: () => y,
});
var a = "copy",
    o = "convert";
function s(e, t, n) {
    if (t === a) return n;
    if (t === o) return e(n);
    if (t instanceof Array) return n.map((n) => s(e, t[0], n));
    if (t instanceof Object) {
        let r = {};
        for (let [i, a] of Object.entries(t)) {
            if (a.derive) {
                let e = a.derive(n);
                void 0 !== e && (n[i] = e);
            }
            if (!(i in n)) {
                if (a.required) throw Error(`Missing key: ${i}`);
                continue;
            }
            if (null == n[i]) {
                r[i] = null;
                continue;
            }
            r[i] = s(e, a.schema, n[i]);
        }
        return r;
    }
}
function l(e, t) {
    return {
        required: !0,
        schema: e,
        derive: t,
    };
}
function c(e) {
    return {
        required: !0,
        schema: e,
    };
}
function u(e) {
    return {
        required: !1,
        schema: e,
    };
}
var d = {
        type: c(a),
        id: c(o),
        transports: u(a),
    },
    f = {
        appid: u(a),
        appidExclude: u(a),
        credProps: u(a),
    },
    p = {
        appid: u(a),
        appidExclude: u(a),
        credProps: u(a),
    },
    _ = {
        publicKey: c({
            rp: c(a),
            user: c({
                id: c(o),
                name: c(a),
                displayName: c(a),
            }),
            challenge: c(o),
            pubKeyCredParams: c(a),
            timeout: u(a),
            excludeCredentials: u([d]),
            authenticatorSelection: u(a),
            attestation: u(a),
            extensions: u(f),
        }),
        signal: u(a),
    },
    m = {
        type: c(a),
        id: c(a),
        rawId: c(o),
        authenticatorAttachment: u(a),
        response: c({
            clientDataJSON: c(o),
            attestationObject: c(o),
            transports: l(a, (e) => {
                var t;
                return (null == (t = e.getTransports) ? void 0 : t.call(e)) || [];
            }),
        }),
        clientExtensionResults: l(p, (e) => e.getClientExtensionResults()),
    },
    h = {
        mediation: u(a),
        publicKey: c({
            challenge: c(o),
            timeout: u(a),
            rpId: u(a),
            allowCredentials: u([d]),
            userVerification: u(a),
            extensions: u(f),
        }),
        signal: u(a),
    },
    g = {
        type: c(a),
        id: c(a),
        rawId: c(o),
        authenticatorAttachment: u(a),
        response: c({
            clientDataJSON: c(o),
            authenticatorData: c(o),
            signature: c(o),
            userHandle: c(o),
        }),
        clientExtensionResults: l(p, (e) => e.getClientExtensionResults()),
    };
function E(e) {
    return s(r, _, e);
}
function b(e) {
    return s(i, m, e);
}
async function y(e) {
    return b(await navigator.credentials.create(E(e)));
}
function O(e) {
    return s(r, h, e);
}
function v(e) {
    return s(i, g, e);
}
async function S(e) {
    return v(await navigator.credentials.get(O(e)));
}
