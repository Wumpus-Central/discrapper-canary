function r(e) {
    let t = '=='.slice(0, (4 - (e.length % 4)) % 4),
        n = atob(e.replace(/-/g, '+').replace(/_/g, '/') + t),
        r = new ArrayBuffer(n.length),
        i = new Uint8Array(r);
    for (let e = 0; e < n.length; e++) i[e] = n.charCodeAt(e);
    return r;
}
function i(e) {
    let t = new Uint8Array(e),
        n = '';
    for (let e of t) n += String.fromCharCode(e);
    return btoa(n).replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
}
n.d(t, {
    U2: () => m,
    Ue: () => y
});
var o = 'copy',
    a = 'convert';
function c(e, t, n) {
    if (t === o) return n;
    if (t === a) return e(n);
    if (t instanceof Array) return n.map((n) => c(e, t[0], n));
    if (t instanceof Object) {
        let r = {};
        for (let [i, o] of Object.entries(t)) {
            if (o.derive) {
                let e = o.derive(n);
                void 0 !== e && (n[i] = e);
            }
            if (!(i in n)) {
                if (o.required) throw Error(`Missing key: ${i}`);
                continue;
            }
            if (null == n[i]) {
                r[i] = null;
                continue;
            }
            r[i] = c(e, o.schema, n[i]);
        }
        return r;
    }
}
function u(e, t) {
    return {
        required: !0,
        schema: e,
        derive: t
    };
}
function s(e) {
    return {
        required: !0,
        schema: e
    };
}
function f(e) {
    return {
        required: !1,
        schema: e
    };
}
var l = {
        type: s(o),
        id: s(a),
        transports: f(o)
    },
    d = {
        appid: f(o),
        appidExclude: f(o),
        credProps: f(o)
    },
    p = {
        appid: f(o),
        appidExclude: f(o),
        credProps: f(o)
    },
    h = {
        publicKey: s({
            rp: s(o),
            user: s({
                id: s(a),
                name: s(o),
                displayName: s(o)
            }),
            challenge: s(a),
            pubKeyCredParams: s(o),
            timeout: f(o),
            excludeCredentials: f([l]),
            authenticatorSelection: f(o),
            attestation: f(o),
            extensions: f(d)
        }),
        signal: f(o)
    },
    v = {
        type: s(o),
        id: s(o),
        rawId: s(a),
        authenticatorAttachment: f(o),
        response: s({
            clientDataJSON: s(a),
            attestationObject: s(a),
            transports: u(o, (e) => {
                var t;
                return (null == (t = e.getTransports) ? void 0 : t.call(e)) || [];
            })
        }),
        clientExtensionResults: u(p, (e) => e.getClientExtensionResults())
    },
    g = {
        mediation: f(o),
        publicKey: s({
            challenge: s(a),
            timeout: f(o),
            rpId: f(o),
            allowCredentials: f([l]),
            userVerification: f(o),
            extensions: f(d)
        }),
        signal: f(o)
    },
    w = {
        type: s(o),
        id: s(o),
        rawId: s(a),
        authenticatorAttachment: f(o),
        response: s({
            clientDataJSON: s(a),
            authenticatorData: s(a),
            signature: s(a),
            userHandle: s(a)
        }),
        clientExtensionResults: u(p, (e) => e.getClientExtensionResults())
    };
async function y(e) {
    let t = await navigator.credentials.create(c(r, h, e));
    return c(i, v, t);
}
async function m(e) {
    let t = await navigator.credentials.get(c(r, g, e));
    return c(i, w, t);
}
