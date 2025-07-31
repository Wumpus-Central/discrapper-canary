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
    U2: () => w,
    Ue: () => y
});
var a = 'copy',
    s = 'convert';
function o(e, t, n) {
    if (t === a) return n;
    if (t === s) return e(n);
    if (t instanceof Array) return n.map((n) => o(e, t[0], n));
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
            r[i] = o(e, a.schema, n[i]);
        }
        return r;
    }
}
function c(e, t) {
    return {
        required: !0,
        schema: e,
        derive: t
    };
}
function l(e) {
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
        type: l(a),
        id: l(s),
        transports: u(a)
    },
    p = {
        appid: u(a),
        appidExclude: u(a),
        credProps: u(a)
    },
    f = {
        appid: u(a),
        appidExclude: u(a),
        credProps: u(a)
    },
    h = {
        publicKey: l({
            rp: l(a),
            user: l({
                id: l(s),
                name: l(a),
                displayName: l(a)
            }),
            challenge: l(s),
            pubKeyCredParams: l(a),
            timeout: u(a),
            excludeCredentials: u([d]),
            authenticatorSelection: u(a),
            attestation: u(a),
            extensions: u(p)
        }),
        signal: u(a)
    },
    m = {
        type: l(a),
        id: l(a),
        rawId: l(s),
        authenticatorAttachment: u(a),
        response: l({
            clientDataJSON: l(s),
            attestationObject: l(s),
            transports: c(a, (e) => {
                var t;
                return (null == (t = e.getTransports) ? void 0 : t.call(e)) || [];
            })
        }),
        clientExtensionResults: c(f, (e) => e.getClientExtensionResults())
    },
    _ = {
        mediation: u(a),
        publicKey: l({
            challenge: l(s),
            timeout: u(a),
            rpId: u(a),
            allowCredentials: u([d]),
            userVerification: u(a),
            extensions: u(p)
        }),
        signal: u(a)
    },
    g = {
        type: l(a),
        id: l(a),
        rawId: l(s),
        authenticatorAttachment: u(a),
        response: l({
            clientDataJSON: l(s),
            authenticatorData: l(s),
            signature: l(s),
            userHandle: l(s)
        }),
        clientExtensionResults: c(f, (e) => e.getClientExtensionResults())
    };
async function y(e) {
    let t = await navigator.credentials.create(o(r, h, e));
    return o(i, m, t);
}
async function w(e) {
    let t = await navigator.credentials.get(o(r, _, e));
    return o(i, g, t);
}
