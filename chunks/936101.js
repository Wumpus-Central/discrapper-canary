n.d(t, {
    L: () => c,
    d: () => l
}),
    n(410992),
    n(227481),
    n(730884),
    n(20464),
    n(341884),
    n(364341),
    n(629680),
    n(505025),
    n(918970),
    n(121784),
    n(644351),
    n(146733),
    n(35282),
    n(853839),
    n(570086),
    n(479048),
    n(388685);
var r = n(772848),
    i = n(433517),
    o = n(70956);
let a = 'purchase_token',
    s = 60 * o.Z.Millis.DAY;
function l() {
    let e = i.K.get(a);
    if (null != e && e.expires >= Date.now()) return e.purchaseToken;
    let t = (0, r.Z)();
    return (
        i.K.set(a, {
            purchaseToken: t,
            expires: Date.now() + s
        }),
        t
    );
}
async function c() {
    let e = new Uint8Array(
        l()
            .split('')
            .map((e) => e.charCodeAt(0))
    );
    return btoa(String.fromCharCode(...new Uint8Array(await window.crypto.subtle.digest({ name: 'SHA-256' }, e))));
}
