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
    o = 'convert';
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
        id: l(o),
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
                id: l(o),
                name: l(a),
                displayName: l(a)
            }),
            challenge: l(o),
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
        rawId: l(o),
        authenticatorAttachment: u(a),
        response: l({
            clientDataJSON: l(o),
            attestationObject: l(o),
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
            challenge: l(o),
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
        rawId: l(o),
        authenticatorAttachment: u(a),
        response: l({
            clientDataJSON: l(o),
            authenticatorData: l(o),
            signature: l(o),
            userHandle: l(o)
        }),
        clientExtensionResults: c(f, (e) => e.getClientExtensionResults())
    };
async function y(e) {
    let t = await navigator.credentials.create(s(r, h, e));
    return s(i, m, t);
}
async function w(e) {
    let t = await navigator.credentials.get(s(r, _, e));
    return s(i, g, t);
}
