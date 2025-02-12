function n(e) {
    let t = '=='.slice(0, (4 - (e.length % 4)) % 4),
        s = atob(e.replace(/-/g, '+').replace(/_/g, '/') + t),
        n = new ArrayBuffer(s.length),
        r = new Uint8Array(n);
    for (let e = 0; e < s.length; e++) r[e] = s.charCodeAt(e);
    return n;
}
function r(e) {
    let t = new Uint8Array(e),
        s = '';
    for (let e of t) s += String.fromCharCode(e);
    return btoa(s).replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
}
s.d(t, {
    U2: () => C,
    Ue: () => x
});
var o = 'copy',
    i = 'convert';
function a(e, t, s) {
    if (t === o) return s;
    if (t === i) return e(s);
    if (t instanceof Array) return s.map((s) => a(e, t[0], s));
    if (t instanceof Object) {
        let n = {};
        for (let [r, o] of Object.entries(t)) {
            if (o.derive) {
                let e = o.derive(s);
                void 0 !== e && (s[r] = e);
            }
            if (!(r in s)) {
                if (o.required) throw Error(`Missing key: ${r}`);
                continue;
            }
            if (null == s[r]) {
                n[r] = null;
                continue;
            }
            n[r] = a(e, o.schema, s[r]);
        }
        return n;
    }
}
function l(e, t) {
    return {
        required: !0,
        schema: e,
        derive: t
    };
}
function c(e) {
    return {
        required: !0,
        schema: e
    };
}
function u(e) {
    return {
        required: !1,
        schema: e
    };
}
var d = {
        type: c(o),
        id: c(i),
        transports: u(o)
    },
    h = {
        appid: u(o),
        appidExclude: u(o),
        credProps: u(o)
    },
    p = {
        appid: u(o),
        appidExclude: u(o),
        credProps: u(o)
    },
    f = {
        publicKey: c({
            rp: c(o),
            user: c({
                id: c(i),
                name: c(o),
                displayName: c(o)
            }),
            challenge: c(i),
            pubKeyCredParams: c(o),
            timeout: u(o),
            excludeCredentials: u([d]),
            authenticatorSelection: u(o),
            attestation: u(o),
            extensions: u(h)
        }),
        signal: u(o)
    },
    m = {
        type: c(o),
        id: c(o),
        rawId: c(i),
        authenticatorAttachment: u(o),
        response: c({
            clientDataJSON: c(i),
            attestationObject: c(i),
            transports: l(o, (e) => {
                var t;
                return (null == (t = e.getTransports) ? void 0 : t.call(e)) || [];
            })
        }),
        clientExtensionResults: l(p, (e) => e.getClientExtensionResults())
    },
    g = {
        mediation: u(o),
        publicKey: c({
            challenge: c(i),
            timeout: u(o),
            rpId: u(o),
            allowCredentials: u([d]),
            userVerification: u(o),
            extensions: u(h)
        }),
        signal: u(o)
    },
    _ = {
        type: c(o),
        id: c(o),
        rawId: c(i),
        authenticatorAttachment: u(o),
        response: c({
            clientDataJSON: c(i),
            authenticatorData: c(i),
            signature: c(i),
            userHandle: c(i)
        }),
        clientExtensionResults: l(p, (e) => e.getClientExtensionResults())
    };
async function x(e) {
    let t = await navigator.credentials.create(a(n, f, e));
    return a(r, m, t);
}
async function C(e) {
    let t = await navigator.credentials.get(a(n, g, e));
    return a(r, _, t);
}
