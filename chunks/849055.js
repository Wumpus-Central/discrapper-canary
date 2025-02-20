function n(r) {
    let e = '=='.slice(0, (4 - (r.length % 4)) % 4),
        t = atob(r.replace(/-/g, '+').replace(/_/g, '/') + e),
        n = new ArrayBuffer(t.length),
        a = new Uint8Array(n);
    for (let r = 0; r < t.length; r++) a[r] = t.charCodeAt(r);
    return n;
}
function a(r) {
    let e = new Uint8Array(r),
        t = '';
    for (let r of e) t += String.fromCharCode(r);
    return btoa(t).replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
}
t.d(e, {
    U2: () => y,
    Ue: () => b
});
var i = 'copy',
    f = 'convert';
function o(r, e, t) {
    if (e === i) return t;
    if (e === f) return r(t);
    if (e instanceof Array) return t.map((t) => o(r, e[0], t));
    if (e instanceof Object) {
        let n = {};
        for (let [a, i] of Object.entries(e)) {
            if (i.derive) {
                let r = i.derive(t);
                void 0 !== r && (t[a] = r);
            }
            if (!(a in t)) {
                if (i.required) throw Error(`Missing key: ${a}`);
                continue;
            }
            if (null == t[a]) {
                n[a] = null;
                continue;
            }
            n[a] = o(r, i.schema, t[a]);
        }
        return n;
    }
}
function l(r, e) {
    return {
        required: !0,
        schema: r,
        derive: e
    };
}
function s(r) {
    return {
        required: !0,
        schema: r
    };
}
function u(r) {
    return {
        required: !1,
        schema: r
    };
}
var c = {
        type: s(i),
        id: s(f),
        transports: u(i)
    },
    v = {
        appid: u(i),
        appidExclude: u(i),
        credProps: u(i)
    },
    h = {
        appid: u(i),
        appidExclude: u(i),
        credProps: u(i)
    },
    d = {
        publicKey: s({
            rp: s(i),
            user: s({
                id: s(f),
                name: s(i),
                displayName: s(i)
            }),
            challenge: s(f),
            pubKeyCredParams: s(i),
            timeout: u(i),
            excludeCredentials: u([c]),
            authenticatorSelection: u(i),
            attestation: u(i),
            extensions: u(v)
        }),
        signal: u(i)
    },
    g = {
        type: s(i),
        id: s(i),
        rawId: s(f),
        authenticatorAttachment: u(i),
        response: s({
            clientDataJSON: s(f),
            attestationObject: s(f),
            transports: l(i, (r) => {
                var e;
                return (null == (e = r.getTransports) ? void 0 : e.call(r)) || [];
            })
        }),
        clientExtensionResults: l(h, (r) => r.getClientExtensionResults())
    },
    p = {
        mediation: u(i),
        publicKey: s({
            challenge: s(f),
            timeout: u(i),
            rpId: u(i),
            allowCredentials: u([c]),
            userVerification: u(i),
            extensions: u(v)
        }),
        signal: u(i)
    },
    w = {
        type: s(i),
        id: s(i),
        rawId: s(f),
        authenticatorAttachment: u(i),
        response: s({
            clientDataJSON: s(f),
            authenticatorData: s(f),
            signature: s(f),
            userHandle: s(f)
        }),
        clientExtensionResults: l(h, (r) => r.getClientExtensionResults())
    };
async function b(r) {
    let e = await navigator.credentials.create(o(n, d, r));
    return o(a, g, e);
}
async function y(r) {
    let e = await navigator.credentials.get(o(n, p, r));
    return o(a, w, e);
}
