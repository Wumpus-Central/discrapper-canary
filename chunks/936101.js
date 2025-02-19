n.d(t, {
    L: () => c,
    d: () => l
}),
    n(518263),
    n(970173),
    n(520712),
    n(268111),
    n(941497),
    n(32026),
    n(480839),
    n(744285),
    n(492257),
    n(873817),
    n(610885),
    n(126298),
    n(301563),
    n(866573),
    n(642549),
    n(787622),
    n(47120);
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
